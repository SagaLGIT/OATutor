var hints = [{id: "inverse18a-h1", type: "hint", dependencies: [], title: "Finding g(f(x))", text: "The first step is to find g(f(x))."}, {id: "inverse18a-h2", type: "hint", dependencies: ["inverse18a-h1"], title: "Calculating g(f(x))", text: "g(f(x))=sqrt(3, x**3-4+4)"}, {id: "inverse18a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["inverse18a-h2"], title: "Verifying the Value of g(f(x))", text: "Does $$g(f(x))=x$$?", choices: ["Yes", "No"]}, {id: "inverse18a-h4", type: "hint", dependencies: ["inverse18a-h3"], title: "Interpreting the Meaning of g(f(x))", text: "If $$g(f(x))=x$$, then $$g(x)=f^{\\left(-1\\right)} x$$ and $$f(x)=g^{\\left(-1\\right)} x$$. If g(f(x)) is not equal to x, then these statements are false."}, ]; export {hints};