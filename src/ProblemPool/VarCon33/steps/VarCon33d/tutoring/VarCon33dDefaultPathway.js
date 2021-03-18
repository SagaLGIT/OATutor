var hints = [{id: "VarCon33d-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side."}, {id: "VarCon33d-h2", type: "hint", dependencies: ["VarCon33d-h1"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "VarCon33d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["11c+7=-37"], dependencies: ["VarCon33d-h2"], title: "Addition", text: "Add 3c to each side of the equation."}, {id: "VarCon33d-h4", type: "hint", dependencies: ["VarCon33d-h3"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon33d-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["11c=-44"], dependencies: ["VarCon33d-h4"], title: "Subtraction", text: "Subtract 7 from each side."}, {id: "VarCon33d-h6", type: "hint", dependencies: ["VarCon33d-h5"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon33d-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["c=-4"], dependencies: ["VarCon33d-h6"], title: "Division", text: "Divide 11 from each side."}, {id: "VarCon33d-h8", type: "hint", dependencies: ["VarCon33d-h7"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon33d-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33d-h8"], title: "Verification", text: "Check whether $$\\left(8\\right) \\left(\\-4\\right)+\\left(7\\right)$$ equals $$-\\left(3\\right) \\left(\\-4\\right)-\\left(37\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};