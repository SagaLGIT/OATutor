var hints = [{id: "ad3a8eemixapp2a-h1", type: "hint", dependencies: [], title: "Interest formula", text: "The simple interest formula is $$I=Prt$$, where I is interest, P is principal (amount invested), r is rate, and t is time", variabilization: {}}, {id: "ad3a8eemixapp2a-h2", type: "hint", dependencies: ["ad3a8eemixapp2a-h1"], title: "Assigning variables", text: "Let $$x=the$$ amount invested at 3%. How do we express the amount invested at 5% as a mathematical expression?", variabilization: {}}, {id: "ad3a8eemixapp2a-h3", type: "hint", dependencies: ["ad3a8eemixapp2a-h2"], title: "Writing a mathematical equation", text: "The next step is to use the information given to write a mathematical equation.", variabilization: {}}, {id: "ad3a8eemixapp2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(0.03\\right) x$$"], dependencies: ["ad3a8eemixapp2a-h3"], title: "Amount of interest for the 3% account", text: "How much interest will the 3% account earn? Express as a mathematical expression.", variabilization: {}}, {id: "ad3a8eemixapp2a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(0.05\\right) \\left(\\left(20000\\right)-x\\right)$$"], dependencies: ["ad3a8eemixapp2a-h4"], title: "Amount of interest for 5% account", text: "How much interest will the 5% account earn? Express as a mathematical expression", variabilization: {}}, {id: "ad3a8eemixapp2a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(0.045\\right) \\left(20000\\right)$$"], dependencies: ["ad3a8eemixapp2a-h5"], title: "Amount of interest total", text: "What is the total amount of interest?", variabilization: {}}, {id: "ad3a8eemixapp2a-h7", type: "hint", dependencies: ["ad3a8eemixapp2a-h6"], title: "Write the mathematical equation", text: "We can use these values to write a mathematical equation, $$\\left(0.03\\right) x+\\left(0.05\\right) \\left(\\left(20000\\right)-x\\right)=\\left(0.045\\right) \\left(20000\\right)$$", variabilization: {}}, {id: "ad3a8eemixapp2a-h8", type: "hint", dependencies: ["ad3a8eemixapp2a-h7"], title: "Solve the equation", text: "The next step is to solve for x", variabilization: {}}, {id: "ad3a8eemixapp2a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["ad3a8eemixapp2a-h8"], title: "Finding the amount to invest in the 3% account", text: "What variable did we assign to the amount invested in the 3% account?", variabilization: {}}, {id: "ad3a8eemixapp2a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20000-x"], dependencies: ["ad3a8eemixapp2a-h9"], title: "Finding the amount to invest in the 5% account", text: "What variable did we assign to the amount invested in the 5% account?", variabilization: {}}, ]; export {hints};