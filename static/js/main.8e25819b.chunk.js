(this["webpackJsonpzombie-app"]=this["webpackJsonpzombie-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),i=n.n(s),a=n(4),o=n(5),h=n(7),l=n(6),d=(n(12),n(0)),j=function e(t){var n=t.id,r=t.name,c=t.email;t.address,t.street,t.city;return Object(d.jsxs)("div",{className:"bg-light-green dib br3 ma2 grow bw2 shadow-5 tc",children:[Object(d.jsx)("img",{src:"https://robohash.org/104.236.21.134.png".concat(n,"?set=set2"),alt:"monster"}),Object(d.jsx)("h2",{children:r}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("p",{children:n.city}),console.log(e)]})},b=function(e){var t=e.monsters;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email,city:t[n].city},n)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:t,type:"search",placeholder:"Search Monster...",className:"outline-0 mb3 br4 pa3 ba b--green bg-lightest-blue"})})},m=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid #000",height:"50rem"},children:e.children})},p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={monsters:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"MonstersFreind"}),Object(d.jsx)(u,{searchChange:this.onSearchChange}),Object(d.jsx)(m,{children:Object(d.jsx)(b,{monsters:r})})]}):Object(d.jsx)("h2",{children:"Loading..."})}}]),n}(r.Component);n(14);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8e25819b.chunk.js.map