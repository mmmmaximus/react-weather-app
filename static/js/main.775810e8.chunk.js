(this["webpackJsonpcountries-data"]=this["webpackJsonpcountries-data"]||[]).push([[0],{38:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(14),r=n.n(i),a=n(3),s=n(4),j=n.n(s),u=n(0),o=function(t){var e=t.func;return Object(u.jsxs)("div",{children:["find countries ",Object(u.jsx)("input",{onChange:e})]})},d=function(t){var e=t.city,n=Object(c.useState)(""),i=Object(a.a)(n,2),r=i[0],s=i[1];return Object(c.useEffect)((function(){j.a.get("http://api.weatherbit.io/v2.0/current?city=".concat(e,"&key=").concat("6649d2dd448543d9b4565a168af6492d")).then((function(t){s(t.data.data[0])}))}),[e]),r?Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"temperature: "}),r.temp,"\xb0C",Object(u.jsx)("br",{}),r.weather.description,Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"wind: "}),r.wind_spd," m/s direction ",r.wind_cdir]}):Object(u.jsx)("div",{})},b=function(t){var e=t.country;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("p",{children:["capital ",e.capital]}),Object(u.jsxs)("p",{children:["population ",e.population]}),Object(u.jsx)("h3",{children:"languages"}),e.languages.map((function(t,e){return Object(u.jsx)("li",{children:t.name},e)})),Object(u.jsx)("img",{src:e.flag,width:"150",height:"150",alt:e.name}),Object(u.jsxs)("h3",{children:["Weather in ",e.name]}),Object(u.jsx)(d,{city:e.capital})]})},h=function(t){var e=t.countries,n=t.filter,c=t.showButton,i=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return""===n?"Search for a country":i.length>10?"Too many matches, specify another filter":i.length<=10&&i.length>1?Object(u.jsx)("div",{children:i.map((function(t){return Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[t.name," ",Object(u.jsx)("button",{onClick:c,value:t.name,children:"show"})]},t.name)})}))}):Object(u.jsx)("div",{children:i.map((function(t){return Object(u.jsx)(b,{country:t})}))})},l=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)([]),s=Object(a.a)(r,2),d=s[0],b=s[1];return Object(c.useEffect)((function(){j.a.get("https://restcountries.eu/rest/v2/all").then((function(t){b(t.data)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{func:function(t){i(t.target.value)}}),Object(u.jsx)(h,{countries:d,filter:n,showButton:function(t){i(t.target.value)}})]})};r.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.775810e8.chunk.js.map