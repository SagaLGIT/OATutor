var hints = [{id: "domain3a-h1", type: "hint", dependencies: [], title: "Considering the Denominator", text: "When there is a denominator, we want to include only values of the input that do not force the denominator to be zero. Therefore, the first step is to set the denominator to 0 and solve for x."}, {id: "domain3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["domain3a-h1"], title: "Solving For When the Denominator is Zero", text: "$$2-x=0$$. $$x=$$?"}, {id: "domain3a-h3", type: "hint", dependencies: ["domain3a-h2"], title: "Dealing With Inputs That Make the Denominator Zero", text: "Since the denominator is 0 when $$x=2$$, 2 is excluded from the domain."}, {id: "domain3a-h4", type: "hint", dependencies: ["domain3a-h3"], title: "Answer", text: "The answers are all real numbers where $$x<2$$ or $$x>2$$ as shown in the image. We can use a symbol known as the union, U, to combine the two sets. In interval notation, we write the solution:(-inf, 2)U(2, inf).\n##figure1.gif##"}, ]; export {hints};