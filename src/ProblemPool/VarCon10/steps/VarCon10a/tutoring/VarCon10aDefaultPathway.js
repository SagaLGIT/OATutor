var hints = [{id: "VarCon10a-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "VarCon10a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["c=-1"], dependencies: ["VarCon10a-h1"], title: "Addition", text: "Add 7c to each side of the equation."}, {id: "VarCon10a-h3", type: "hint", dependencies: ["VarCon10a-h2"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon10a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon10a-h3"], title: "Verification", text: "Check whether $$-\\left(6\\right) \\left(\\-1\\right)$$ equals $$-\\left(7\\right) \\left(\\-1\\right)-\\left(1\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};