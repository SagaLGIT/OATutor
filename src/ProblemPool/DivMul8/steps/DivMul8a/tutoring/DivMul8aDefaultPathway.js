var hints = [{id: "DivMul8a-h1", type: "hint", dependencies: [], title: "Minus sign", text: "Remember -k is equivalent to $$\\left(\\-1\\right) k$$."}, {id: "DivMul8a-h2", type: "hint", dependencies: ["DivMul8a-h1"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "DivMul8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-k/(-1)=8/(-1)"], dependencies: ["DivMul8a-h2"], title: "Division", text: "Divide -1 from each side."}, {id: "DivMul8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-8"], dependencies: ["DivMul8a-h3"], title: "Simplification", text: "What do we get for k after simplifying the equation?"}, {id: "DivMul8a-h5", type: "hint", dependencies: ["DivMul8a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul8a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul8a-h5"], title: "Verification", text: "Check whether -(-8) equals 8.", choices: ["TRUE", "FALSE"]}, ]; export {hints};