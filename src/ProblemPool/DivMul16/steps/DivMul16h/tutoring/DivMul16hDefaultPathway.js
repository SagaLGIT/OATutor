var hints = [{id: "DivMul16h-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality."}, {id: "DivMul16h-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(-20)*(-5)=(q/(-5))*(-5)"], dependencies: ["DivMul16h-h1"], title: "Multiplication", text: "Multiple -5 from each side."}, {id: "DivMul16h-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["100"], dependencies: ["DivMul16h-h2"], title: "Simplification", text: "What do we get for q after simplifying the equation?"}, {id: "DivMul16h-h4", type: "hint", dependencies: ["DivMul16h-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul16h-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["TRUE"], dependencies: ["DivMul16h-h4"], title: "Verification", text: "Check whether -20 equals $$\\frac{100}{\\left(\\-5\\right)}$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};