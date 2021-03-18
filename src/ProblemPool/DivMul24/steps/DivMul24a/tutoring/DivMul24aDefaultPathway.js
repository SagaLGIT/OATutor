var hints = [{id: "DivMul24a-h1", type: "hint", dependencies: [], title: "Translation", text: "The first step is translating the sentences into an equation."}, {id: "DivMul24a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["132=-12y"], dependencies: ["DivMul24a-h1"], title: "Translation", text: "Translate it into an equation."}, {id: "DivMul24a-h3", type: "hint", dependencies: ["DivMul24a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "DivMul24a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=-11"], dependencies: ["DivMul24a-h3"], title: "Division", text: "Divide both sides by -12."}, {id: "DivMul24a-h5", type: "hint", dependencies: ["DivMul24a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul24a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul24a-h5"], title: "Verification", text: "Check whether 132 equals $$-\\left(12\\right) \\left(\\-1\\right)1$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};