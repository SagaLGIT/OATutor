var hints = [{id: "transformation8a-h1", type: "hint", dependencies: [], title: "Definition of an Even Function", text: "A function is called an even function if for every input x, $$h(x)=h(-x)$$.", variabilization: {}}, {id: "transformation8a-h2", type: "hint", dependencies: ["transformation8a-h1"], title: "Definition of an Odd Function", text: "A function is called an odd function if for every input x, $$h(x)=-h(-x)$$.", variabilization: {}}, {id: "transformation8a-h3", type: "hint", dependencies: ["transformation8a-h2"], title: "How to Find h(-x)", text: "Find h(-x) by subsituting -x in wherever x appears in the original equation.", variabilization: {}}, {id: "transformation8a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-\\left(2\\right) x+x^3$$"], dependencies: ["transformation8a-h3"], title: "Determining h(-x)", text: "What is h(-x) equal to?", choices: ["$$-\\left(2\\right) x+x^3$$", "$$-\\left(2\\right) x-x^3$$", "$$\\left(2\\right) x+x^3$$", "$$\\left(2\\right) x-x^3$$"], variabilization: {}}, {id: "transformation8a-h5", type: "hint", dependencies: ["transformation8a-h4"], title: "How to Find -h(-x)", text: "Find -h(-x) by multiplying each term of g(-x) by -1.", variabilization: {}}, {id: "transformation8a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) x-x^3$$"], dependencies: ["transformation8a-h5"], title: "Determining -h(-x)", text: "What is -h(-x) equal to?", choices: ["$$-\\left(2\\right) x+x^3$$", "$$-\\left(2\\right) x-x^3$$", "$$\\left(2\\right) x+x^3$$", "$$\\left(2\\right) x-x^3$$"], variabilization: {}}, {id: "transformation8a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["transformation8a-h6"], title: "Checking if h(x) is Even", text: "Does $$h(x)=h(-x)$$?", choices: ["Yes", "No"], variabilization: {}}, {id: "transformation8a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["transformation8a-h7"], title: "Checking if h(x) is Odd", text: "Does $$h(x)=-h(-x)$$?", choices: ["Yes", "No"], variabilization: {}}, ]; export {hints};