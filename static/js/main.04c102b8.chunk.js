(this["webpackJsonpatm-machine-app"]=this["webpackJsonpatm-machine-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(4),s=a.n(i),o=(a(9),a(2)),l=a(0),u=function(e){var t=e.onChange,a=e.isDeposit,n=e.isValid;return console.log("ATM isDeposit: ".concat(a)),console.log("isValid",n),Object(l.jsxs)("label",{className:"label huge",children:[Object(l.jsxs)("h3",{children:[" ",["Deposit","Cash Back"][Number(!a)]]}),"$ ",Object(l.jsx)("input",{placeholder:"enter amount",id:"number-input",type:"number",width:"200",onChange:t}),Object(l.jsx)("input",{type:"submit",disabled:!n,width:"200",value:"Submit",id:"submit-input"})]})},r=function(){var e=c.a.useState(0),t=Object(o.a)(e,2),a=t[0],n=t[1],i=c.a.useState(0),s=Object(o.a)(i,2),r=s[0],b=s[1],d=c.a.useState(!0),h=Object(o.a)(d,2),j=h[0],p=h[1],g=c.a.useState(""),m=Object(o.a)(g,2),O=m[0],v=m[1],f=c.a.useState(!1),x=Object(o.a)(f,2),C=x[0],D=x[1],S="Account Balance $ ".concat(r," ");console.log("Account Rendered with isDeposit: ".concat(j));return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){b(j?r+a:r-a),D(!1),e.preventDefault()},children:[Object(l.jsx)("h2",{id:"total",children:S}),Object(l.jsx)("label",{className:"labels",children:"Select Opperation"}),Object(l.jsxs)("select",{class:"tab",onChange:function(e){return t=e,D(!1),v(t.target.value),void("Deposit"===t.target.value?p(!0):p(!1));var t},name:"mode",id:"mode-select",children:[Object(l.jsx)("option",{id:"no-selection",value:""}),Object(l.jsx)("option",{id:"deposit-selection",value:"Deposit",children:"Deposit"}),Object(l.jsx)("option",{id:"cashback-selection",value:"Cash Back",children:"Cash Back"})]}),!(""===O)&&Object(l.jsx)(u,{onChange:function(e){if(console.log("handleChange ".concat(e.target.value)),console.log("type",typeof e.target.value),Number(e.target.value)<=0)return D(!1);"Cash Back"===O&&Number(e.target.value)>r?D(!1):D(!0),n(Number(e.target.value))},isDeposit:j,isValid:C})]})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(r,{}),document.getElementById("root")),b()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.04c102b8.chunk.js.map