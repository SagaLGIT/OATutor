var hints = [{id: "DivMul5a-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality."}, {id: "DivMul5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a/(-7)*(-7)=(-42)*(-7)"], dependencies: ["DivMul5a-h1"], title: "Multiplication", text: "Multiple -7 from each side."}, {id: "DivMul5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["294"], dependencies: ["DivMul5a-h2"], title: "Simplification", text: "What do we get for a after simplifying the equation?"}, {id: "DivMul5a-h4", type: "hint", dependencies: ["DivMul5a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul5a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul5a-h4"], title: "Verification", text: "Check whether $$\\frac{294}{\\left(\\-7\\right)}$$ equals 42.", choices: ["TRUE", "FALSE"]}, ]; export {hints};