var hints = [{id: "a675767Ellipses13a-h1", type: "hint", dependencies: [], title: "Recognize the Standard Equation of Ellipses", text: "We recognize this as an ellipse that is centered at the origin. So the equation should be in the form of $$\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$$.", variabilization: {}}, {id: "a675767Ellipses13a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["a675767Ellipses13a-h1"], title: "Find the Length of Minor Axis", text: "The major axis is verticle because the value of the distance from the origin to the horizontal endpoints is less than the distance from the origin to the verticle endpoints. What is the distance from the center of the ellipse (the origin) to the vertex?", variabilization: {}}, {id: "a675767Ellipses13a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["a675767Ellipses13a-h2"], title: "Find the Length of Major Axis", text: "What is the distance from the center of horizontal endpoints of the ellipse?", variabilization: {}}, {id: "a675767Ellipses13a-h4", type: "hint", dependencies: ["a675767Ellipses13a-h3"], title: "Plug in Values of a and b into Standard Equation", text: "Since the verticle distance is 5 which is associated with the coefficient of y terms $$b=5$$ and $$b^2=25$$. Since the horizontal distance is 3 which is associated with the coefficient of x terms, $$a=3$$ and $$a^2=9$$. Given $$\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$$, through pluging in $$a^2=9$$ and $$b^2=25$$, you should get $$\\frac{x^2}{9}+\\frac{y^2}{25}=1$$ as your final answer.", variabilization: {}}, ]; export {hints};