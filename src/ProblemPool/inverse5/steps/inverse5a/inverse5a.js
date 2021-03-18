import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./inverse5a-index.js"; const step = {id: "inverse5a", stepAnswer: ["$${\\left(x+\\left(5\\right)\\right)}^{\\frac{1}{2}}$$"], problemType: "MultipleChoice", stepTitle: <div> <InlineMath math="f(x)=x^2-\left(5\right)"/></div>, stepBody: "", choices: ["$${\\left(x+\\left(5\\right)\\right)}^2$$", "$${\\left(x-\\left(5\\right)\\right)}^2$$", "$${\\left(x+\\left(5\\right)\\right)}^{\\frac{1}{2}}$$", "$${\\left(x-\\left(5\\right)\\right)}^{\\frac{1}{2}}$$"], answerType: "string", hints: hints}; export {step};