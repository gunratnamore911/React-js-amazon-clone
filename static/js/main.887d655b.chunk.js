(this["webpackJsonpamazon-clone-gm"]=this["webpackJsonpamazon-clone-gm"]||[]).push([[0],{38:function(e,a,t){e.exports=t(69)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(34),l=t.n(r),o=(t(43),t(8)),i=(t(44),t(14)),m=t(3),A=(t(45),t(35)),s=t.n(A),u=t(36),p=t.n(u),d=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(d.Provider,{value:Object(n.useReducer)(a,t)},r)},E=function(){return Object(n.useContext)(d)},h=t(26),Q=t.n(h),k=(Q.a.initializeApp({apiKey:"AIzaSyA4rZzpEcog9xjN7LhGl3HWcrq7uN49JxU",authDomain:"clone-gm.firebaseapp.com",databaseURL:"https://clone-gm.firebaseio.com",projectId:"clone-gm",storageBucket:"clone-gm.appspot.com",messagingSenderId:"540892565265",appId:"1:540892565265:web:708dced61dc81530b986b0",measurementId:"G-GS0DCHFZCN"}),Q.a.auth());var N=function(){var e=E(),a=Object(o.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("nav",{className:"header"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(s.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(i.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&k.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__option1"},"Hello ",null===n||void 0===n?void 0:n.email),c.a.createElement("span",{className:"header__option2"},n?"Sign Out":"Sign In"))),c.a.createElement(i.b,{to:"/returns",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__option1"},"Returns"),c.a.createElement("span",{className:"header__option2"},"Orders "))),c.a.createElement(i.b,{to:"/prime",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__option1"},"Your"),c.a.createElement("span",{className:"header__option2"},"Prime "))),c.a.createElement(i.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(p.a,null),c.a.createElement("span",{className:"header__option2 header__basketcount"},t.length)))))};t(61),t(62);var b=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=E(),m=Object(o.a)(i,2),A=(m[0].basket,m[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){A({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:l}})}},"Add To Cart"))};var O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{id:"12321341",title:"DJI Mavic Mini Nano Drone (Grey) | 12MP Camera | 2.7K Video Recording | Up to 30 mins of Flight time",price:1e5,rating:4,image:"https://m.media-amazon.com/images/I/6130YvSZouL._AC_UL480_FMwebp_QL65_.jpg"}),c.a.createElement(b,{id:"12321342",title:"Apple iPhone 11 Pro (64GB) - Space Grey",price:72500,rating:4,image:"data:image/webp;base64,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"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{id:"12321343",title:"boAt Rockerz 400 Mumbai Indians Edition Bluetooth Headphone with Super Extra Bass.",price:3500,rating:4,image:"https://m.media-amazon.com/images/I/81Egl9vnUuL._AC_UY327_QL65_.jpg"}),c.a.createElement(b,{id:"12321344",title:"Ritebite Max Protein Daily Choco Classic Bars 300g - Pack of 6 (50g x 6)",price:999,rating:3,image:"https://m.media-amazon.com/images/I/616SVXQREjL._AC_UL480_FMwebp_QL65_.jpg"}),c.a.createElement(b,{id:"12321345",title:"Sony Alpha ILCE-6400L 24.2MP Mirrorless Camera (Black)",price:80500,rating:5,image:"data:image/jpeg;base64,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"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{id:"12321346",title:"Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)",price:37500,rating:5,image:"https://m.media-amazon.com/images/I/81lpllAGcBL._AC_UY327_FMwebp_QL65_.jpg"})))};t(63);var B=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=E(),m=Object(o.a)(i,2),A=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkoutproduct"},c.a.createElement("img",{className:"checkoutproduct__image",src:n,alt:""}),c.a.createElement("div",{className:"checkoutproduct_info"},c.a.createElement("p",{className:"checkoutproduct__title"},t),c.a.createElement("p",{className:"checkoutproduct__price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutproduct__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,"\u2728")}))),c.a.createElement("button",{className:"check-r-button",onClick:function(){A({type:"REMOVE_FROM_BASKET",id:a})}},"Remove From Cart")))},I=(t(64),t(25)),w=t.n(I),v=t(29),x=t(18),j=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)};var C=function(e,a){switch(a.type){case"SET_USER":return Object(x.a)(Object(x.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(x.a)(Object(x.a)({},e),{},{basket:[].concat(Object(v.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(v.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("cannot remove (id ".concat(a.id,") error")),Object(x.a)(Object(x.a)({},e),{},{basket:t});default:return e}};var D=function(){var e=E(),a=Object(o.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(w.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items) : ",c.a.createElement("strong",null,"".concat(e))),c.a.createElement("small",null,c.a.createElement("input",{type:"checkbox"}),"This Order Contain Vouchers."))},decimalScale:2,value:j(t),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),c.a.createElement("button",{onClick:alert("thanks for shopping")},"Proceed To Checkout"))};t(66);var S=function(){var e=E(),a=Object(o.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/OHL/XCM_CUTTLE_1241487_1281644_IN_AUGART20_3254719_1500x300_en_IN.jpg"}),0===(null===t||void 0===t?void 0:t.length)?c.a.createElement("div",null,c.a.createElement("h2",null," Sorry! Your Shopping Cart Is Empty ")):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Cart (make sure you're signed in)"),null===t||void 0===t?void 0:t.map((function(e){return c.a.createElement(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))),t.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(D,null)))};t(67);var V=function(){var e=Object(m.f)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],l=t[1],A=Object(n.useState)(""),s=Object(o.a)(A,2),u=s[0],p=s[1];return c.a.createElement("div",{className:"login"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://www.kumulos.com/wp-content/uploads/2013/08/amazon-logo-preview.png",alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign In"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-Mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"text",value:u,onChange:function(e){return p(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"login__signin",onClick:function(a){a.preventDefault(),k.signInWithEmailAndPassword(r,u).then((function(a){e.push("/")})).catch((function(e){alert(e.message)}))}},"Sign In")),c.a.createElement("p",null,"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."),c.a.createElement("button",{className:"login__create",onClick:function(a){a.preventDefault(),k.createUserWithEmailAndPassword(r,u).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))}},"Create Your Account")))};var f=function(){var e=E(),a=Object(o.a)(e,2),t=(a[0].user,a[1]);return Object(n.useEffect)((function(){var e=k.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),c.a.createElement(i.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/checkout"},c.a.createElement(N,null),c.a.createElement(S,null)),c.a.createElement(m.a,{path:"/login"},c.a.createElement(V,null)),c.a.createElement(m.a,{path:"/"},c.a.createElement(N,null),c.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,{initialState:{basket:[],user:null},reducer:C},c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.887d655b.chunk.js.map