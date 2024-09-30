import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HintTextbox from "./HintTextbox.js";
import {
    renderText,
    chooseVariables,
} from "../../platform-logic/renderText.js";
import SubHintSystem from "./SubHintSystem.js";
import { ThemeContext } from "../../config/config";
import Spacer from "../Spacer";
import { stagingProp } from "../../util/addStagingProperty";
import ErrorBoundary from "../ErrorBoundary";
import withTranslation from '../../util/withTranslation';

import Button from '@material-ui/core/Button';
import AccordionActions from '@material-ui/core/AccordionActions';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper'; 
import { styled } from '@material-ui/core/styles';

import io from 'socket.io-client';
const socket = io('http://localhost:3000'); 

const Item = styled(Paper)(({ theme, show_boarder }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: show_boarder === 'true' ? 'yellow' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  border: show_boarder === "true"? '3px solid yellow': 'none',
  
}));
// HELLO

class HintSystem extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);

        var subHintsFinished = [];
        for (var i = 0; i < this.props.hints.length; i++) {
            subHintsFinished.push(
                new Array(
                    this.props.hints[i].subHints !== undefined
                        ? this.props.hints[i].subHints.length
                        : 0
                ).fill(0)
            );
        }

        this.giveStuFeedback = props.giveStuFeedback;
        this.unlockFirstHint = props.unlockFirstHint;
        this.isIncorrect = props.isIncorrect;
        this.giveHintOnIncorrect = props.giveHintOnIncorrect

        this.state = {
            latestStep: 0,
            currentExpanded: (this.unlockFirstHint || this.isIncorrect) ? 0 : -1,
            hintAnswer: "",
            showSubHints: new Array(this.props.hints.length).fill(false),
            subHintsFinished: subHintsFinished,
            agentMode: false,  // showing text or agent whiteboard
            playing: false, // speaking or not
            hintIndex: 0,      // index of hint to highlight
        };

        if (this.unlockFirstHint && this.props.hintStatus.length > 0) {
            this.props.unlockHint(0, this.props.hints[0].type);
        }

        if (this.giveHintOnIncorrect && this.isIncorrect && this.props.hintStatus.length > 0) {
            this.props.unlockHint(0, this.props.hints[0].type);
        } 
    }

    unlockHint = (event, expanded, i) => {
        // Verona calls here
        if (this.state.currentExpanded === i) {
            this.setState({ currentExpanded: -1 });
        } else {
            this.setState({ currentExpanded: i });
            if (expanded && i < this.props.hintStatus.length) {
                this.props.unlockHint(i, this.props.hints[i].type);
            }
            this.setState({ latestStep: i });
        }
    };

    isLocked = (hintNum) => {
        if (hintNum === 0) {
            return false;
        }
        var dependencies = this.props.hints[hintNum].dependencies;
        var isSatisfied = dependencies.every(
            (dependency) => this.props.hintStatus[dependency] === 1
        );
        return !isSatisfied;
    };

    toggleSubHints = (event, i) => {
        this.setState(
            (prevState) => {
                var displayHints = prevState.showSubHints;
                displayHints[i] = !displayHints[i];
                return {
                    showSubHints: displayHints,
                };
            },
            () => {
                this.props.answerMade(
                    this.index,
                    this?.step?.knowledgeComponents,
                    false
                );
            }
        );
    };

    unlockSubHint = (hintNum, i, isScaffold) => {
        this.setState(
            (prevState) => {
                prevState.subHintsFinished[i][hintNum] = !isScaffold ? 1 : 0.5;
                return { subHintsFinished: prevState.subHintsFinished };
            },
            () => {
                this.context.firebase.log(
                    null,
                    this.props.problemID,
                    this.step,
                    null,
                    null,
                    this.state.subHintsFinished,
                    "unlockSubHint",
                    chooseVariables(this.props.stepVars, this.props.seed),
                    this.props.lesson,
                    this.props.courseName
                );
            }
        );
    };

    submitSubHint = (parsed, hint, isCorrect, i, hintNum) => {
        if (isCorrect) {
            this.setState((prevState) => {
                prevState.subHintsFinished[i][hintNum] = 1;
                return { subHintsFinished: prevState.subHintsFinished };
            });
        }
        this.context.firebase.hintLog(
            parsed,
            this.props.problemID,
            this.step,
            hint,
            isCorrect,
            this.state.hintsFinished,
            chooseVariables(
                Object.assign({}, this.props.stepVars, hint.variabilization),
                this.props.seed
            ),
            this.props.lesson,
            this.props.courseName
        );
    };

    // Sagas added methods
    nextBoarder = (hint) => {
        // not in use
        // will run after agent speaks their hint[i]
        if (hint.math !== undefined){
            if (hint.math.length -1 > this.state.hintIndex) {
                this.setState((prevState) => ({
                    hintIndex: prevState.hintIndex + 1
                  }));
            }
            else{
                this.setState({hintIndex: 0});
            }
        }
    };

    renderWhiteboard = (hint) => {
        // console.log("hint.math:", hint.math.type);
        return this.state.agentMode? (hint.math? 
            (hint.math == ''? " " :     // if no math show nothing (only == works not ===)
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {hint.math.map((math, index) => ( 
                            <Grid item xs={12} md ={6} > 
                                <Item show_boarder={index === this.state.hintIndex? "true": "false"}>
                                    {renderText(math)}</Item>
                                </Grid>))}
                </Grid>)     // for 2 col: md ={6} 
            : hint.text )    // if math attribute nonexistent
        : hint.text;         // if in text mode
    };

    agentPraise = () => {
        const praises = ["Good job!", "Well done!", "Great work!", "Very nice!"];
        const randomIndex = Math.floor(Math.random() * praises.length);
        const randomPraise = praises[randomIndex];
        console.log(randomPraise);
        // backendCommunication(randomPraise);
    };

    playAgent = (hint) => {

        if( this.state.agentMode ){
            if (hint.pacedSpeech) {
                this.setState({hintIndex: 0})
                this.setState(() => ({playing: true}));
                socket.emit('sendMessage', hint.pacedSpeech);   
            }; 
        };               
        socket.on('message', (data) => {
            // console.log('Message from server:', data);
            this.setState({hintIndex: parseInt(data)}); // later make function with some error handeling
        });

         // dont know if this should be placed here but it works
         socket.on('finish', () => {
            this.setState({playing: false});
        });

    };

    reloadSpeech = (hint) => {
        socket.emit('reload');
        this.setState(() => ({hintIndex: 0}), () => {
            this.playAgent(hint);
            // not fully working yet need to quit previous audio first
        });
    };

    stopSpeech = () => {
        // will stop the speech
    }

    toggleWhiteboard = (hint) => {
        this.setState( prevState => ({ agentMode: !prevState.agentMode }),
        () => {
          // ADD: stopSpeech() if talking and event: angentMode off
          this.playAgent(hint); 
        })

        // should play when whiteboard opens and stop when closes
        
    };

    togglePlayPause = (event) => {
        if (this.state.playing) {    // pause
            socket.emit('pause'); 
        }
        else{  // play
            socket.emit('play', this.state.hintIndex);
        }
        this.setState((prevState) => ({playing: !prevState.playing}));
    };

    handleOnChange = (event, expanded, index, hint) => {
        // opening a new hint should eventually also play agent - had to make a method to call both methods in 1 event
        this.unlockHint(event, expanded, index);
        // TODO: Add conditional so it wont play if hint is being closed...
        if (expanded){
            this.playAgent(hint);
        }
        // else {
        //     console.log("frontend: stopSpeach")
        //     this.stopSpeech();
        // }
       
    };


    render() {
        const { translate } = this.props;
        const { classes, index, hints, problemID, seed, stepVars } = this.props;
        const { currentExpanded, showSubHints } = this.state;
        const { debug, use_expanded_view } = this.context;

        return (
            <div className={classes.root}>
                {/* {this.giveDynamicHint && <div>hi</div>} */}
                {hints.map((hint, i) => (
                    <Accordion
                        key={`${problemID}-${hint.id}`}
                        onChange={(event, expanded) => this.handleOnChange(event, expanded, i, hint)
                        }
                        disabled={
                            this.isLocked(i) && !(use_expanded_view && debug)
                        }
                        expanded={
                            currentExpanded === i ||
                            (use_expanded_view != null &&
                                use_expanded_view &&
                                debug)
                        }
                        defaultExpanded={false}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            {...stagingProp({
                                "data-selenium-target": `hint-expand-${i}-${index}`,
                            })}
                        >
                            <Typography className={classes.heading}> 
                                {translate('hintsystem.hint') + (i + 1) + ": "}
                                {renderText(
                                    hint.title === "nan" ? "" : hint.title,
                                    problemID,
                                    chooseVariables(
                                        Object.assign(
                                            {},
                                            stepVars,
                                            hint.variabilization
                                        ),
                                        seed
                                    ),
                                    this.context
                                )}
                            </Typography>
                            
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                component={"span"}
                                style={{ width: "100%" }}
                            > 
                                {renderText(
                                    currentExpanded === i? this.renderWhiteboard(hint): "", // only render whiteboard for current hint
                                    problemID,
                                    chooseVariables(
                                        Object.assign(
                                            {},
                                            stepVars,
                                            hint.variabilization
                                        ),
                                        seed
                                    ),
                                    this.context
                                )} 
                                {hint.type === "scaffold" ? (
                                    <div>
                                        <Spacer />
                                        <HintTextbox
                                            hintNum={i}
                                            hint={hint}
                                            index={index}
                                            submitHint={this.props.submitHint}
                                            seed={this.props.seed}
                                            hintVars={Object.assign(
                                                {},
                                                this.props.stepVars,
                                                hint.variabilization
                                            )}
                                            toggleHints={(event) =>
                                                this.toggleSubHints(event, i)
                                            }
                                            giveStuFeedback={
                                                this.giveStuFeedback
                                            }
                                        />
                                    </div>
                                ) : (
                                    ""
                                )}
                                {(showSubHints[i] ||
                                    (use_expanded_view && debug)) &&
                                hint.subHints !== undefined ? (
                                    <div className="SubHints">
                                        <Spacer />
                                        <ErrorBoundary
                                            componentName={"SubHintSystem"}
                                        >
                                            <SubHintSystem
                                                giveStuFeedback={
                                                    this.giveStuFeedback
                                                }
                                                unlockFirstHint={
                                                    this.unlockFirstHint
                                                }
                                                problemID={problemID}
                                                hints={hint.subHints}
                                                unlockHint={this.unlockSubHint}
                                                hintStatus={
                                                    this.state.subHintsFinished[
                                                        i
                                                    ]
                                                }
                                                submitHint={this.submitSubHint}
                                                parent={i}
                                                index={index}
                                                seed={this.props.seed}
                                                hintVars={Object.assign(
                                                    {},
                                                    this.props.stepVars,
                                                    hint.variabilization
                                                )}
                                            />
                                        </ErrorBoundary>
                                        <Spacer />
                                    </div>
                                ) : (
                                    ""
                                )}
                            </Typography>
                        </AccordionDetails>
                        <AccordionActions>
                            {this.state.agentMode? ( 
                                <>
                                <Button onClick={() => this.reloadSpeech(hint)}>
                                    <img src={`${process.env.PUBLIC_URL}/reload_icon.svg`} alt="Reload Icon" width={15} height={15} />
                                </Button>
                            
                                <Button onClick={() => this.togglePlayPause(hint) /* Temporary method placement to show switching boarders, change to playAgent  */}>
                                    {this.state.playing?
                                    <img src={`${process.env.PUBLIC_URL}/pause_icon.svg`} alt="Pause Icon" width={15} height={15} />
                                    : <img src={`${process.env.PUBLIC_URL}/play_icon.svg`} alt="Play Icon" width={15} height={15} />}
                                </Button>
                                </>
                                ) :" "}              

                            <Button onClick={() => this.toggleWhiteboard(hint)}>
                                {this.state.agentMode? "TEXT" : "AGENT"}
                            </Button>

                        </AccordionActions>
                    </Accordion>
                ))}
            </div>
        );
    }
}

const styles = (theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

export default withStyles(styles)(withTranslation(HintSystem));
