var hints = [{id: "transformation4a-h1", type: "hint", dependencies: [], title: "Definition of an Even Function", text: "A function is called an even function if for every input x, $$g(x)=g(-x)$$."}, {id: "transformation4a-h2", type: "hint", dependencies: ["transformation4a-h1"], title: "Definition of an Odd Function", text: "A function is called an odd function if for every input x, $$g(x)=-g(-x)$$."}, {id: "transformation4a-h3", type: "hint", dependencies: ["transformation4a-h2"], title: "How to Find g(-x)", text: "Find g(-x) by subsituting -x in wherever x appears in the original equation."}, {id: "transformation4a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\sqrt{\\left(\\-x\\right)}$$"], dependencies: ["transformation4a-h3"], title: "Determining g(-x)", text: "What is g(-x) equal to?", choices: ["$$\\sqrt{\\left(\\-x\\right)}$$", "$$-\\sqrt{\\left(\\-x\\right)}$$"]}, {id: "transformation4a-h5", type: "hint", dependencies: ["transformation4a-h4"], title: "How to Find -g(-x)", text: "Find -g(-x) by multiplying each term of g(-x) by -1."}, {id: "transformation4a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-\\sqrt{\\left(\\-x\\right)}$$"], dependencies: ["transformation4a-h5"], title: "Determining -g(-x)", text: "What is -g(-x) equal to?", choices: ["$$\\sqrt{\\left(\\-x\\right)}$$", "$$-\\sqrt{\\left(\\-x\\right)}$$"]}, {id: "transformation4a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["transformation4a-h6"], title: "Checking if g(x) is Even", text: "Does $$g(x)=g(-x)$$?", choices: ["Yes", "No"]}, {id: "transformation4a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["transformation4a-h7"], title: "Checking if g(x) is Odd", text: "Does $$g(x)=-g(-x)$$?", choices: ["Yes", "No"]}, ]; export {hints};