(this.webpackJsonpshopping_cart=this.webpackJsonpshopping_cart||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":10,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":10,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":10,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":10,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":10,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":5,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":5,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":5,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":5,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"},{"brandName":"Milk Food","productName":"Milk Good Rich Desi Deneder Ghee (Carton)","totalQty":11,"price":20,"mrp":489,"url":"http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg","offerText":"18% OFF"}]')},18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=a(33),i=a(10),s=a(1),m=a(2),d=a(4),u=a(3),p=(a(23),a(24),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={name:"CHECKOUT"},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn"},r.a.createElement("button",{className:"btn-rectangle",onClick:this.props.onClick}," ",this.props.name))}}]),a}(n.Component)),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).checkout=function(){n.props.checkout()},n.state={toggle:!0},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data;return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-left"},r.a.createElement("div",{className:"qty"},r.a.createElement("span",null,"QTY ",t.totalQty," ")),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL ",t.total," "))),r.a.createElement("div",{className:"footer-right"},r.a.createElement(p,{name:"CHECKOUT",onClick:function(){return e.checkout()}})))}}]),a}(n.Component),h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={name:"CHECKOUT"},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn"},r.a.createElement("button",{className:"btn-circle",onClick:this.props.onClick}," ",this.props.name))}}]),a}(n.Component),Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).increement=function(e){var t=n.state,a=t.data,r=t.qty;r<a.totalQty?(n.setState({qty:r+1}),n.props.increement(a.price,1)):alert("Not allow more then Actual qty.")},n.descreement=function(e){var t=n.state,a=t.data,r=t.qty;r>0&&(n.setState({qty:r-1}),n.props.decreement(a.price,1))},n.addToCart=function(e){n.props.addToCart()},n.state={data:n.props.cardData,qty:0},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.qty;return r.a.createElement("div",{className:"main-card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"left-card-body"},r.a.createElement("div",{className:"product-image"},r.a.createElement("img",{className:"product-img",alt:"No Image Found",src:a.url})),r.a.createElement("div",{className:"product-off-text"},a.offerText)),r.a.createElement("div",{className:"right-card-body"},r.a.createElement("div",{className:"product product-brand"},a.brandName),r.a.createElement("div",{className:"product product-name"},a.productName),r.a.createElement("div",{className:"product product-qty"},a.totalQty),r.a.createElement("div",{className:"product product-mrp"},"MRP ",a.mrp),r.a.createElement("div",{className:"product product-rs"},"RS ",a.price),r.a.createElement("div",{className:"product-btns"},r.a.createElement("div",{className:"btn-add-cart"},r.a.createElement(p,{name:"ADD CART",onClick:function(){return e.addToCart()}})),r.a.createElement("div",{className:"btn-inc-desc"},r.a.createElement("span",null,r.a.createElement(h,{name:"+",onClick:function(){return e.increement()}})),r.a.createElement("span",{className:"inc-desc-value"},n),r.a.createElement("span",null,r.a.createElement(h,{name:"-",onClick:function(){return e.descreement()}})))))))}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleModal=function(){n.props.handleModal()},n.state={},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{id:"myModal",className:"modal",style:{display:this.props.toggle?"block":"none"}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",onClick:this.handleModal},"\xd7"),r.a.createElement("p",{className:"popup popup-qty"},"QTY : ",e.totalQty),r.a.createElement("p",{className:"popup popup-total"},"TOTAL : ",e.total),r.a.createElement("p",{className:"popup popup-success"},"Transaction successful")))}}]),a}(r.a.Component),E=a(7),g=a.n(E),N=a(15),b=a(16),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).cartIncreement=function(e,t){var a=n.state.footerData,r=a.totalQty+t,o=a.total+e*t;n.setTotalData(o,r)},n.cartDecreement=function(e,t){var a=n.state.footerData,r=a.totalQty-t,o=a.total-e*t;n.setTotalData(o,r)},n.addToCart=function(){var e=n.state.footerData;n.setTotalData(e.total,e.totalQty)},n.setTotalData=function(e,t){n.setState({footerData:Object(i.a)(Object(i.a)({},n.state.footerData),{},{total:e,totalQty:t})})},n.handleModal=function(){n.setState({toggle:!n.state.toggle})},n.state={footerData:{totalQty:0,total:0,toggle:!1},cardData:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;new Promise(function(){var e=Object(N.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(b);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()).then((function(t){e.setState({cardData:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.cardData,n=t.footerData,o=t.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container"},r.a.createElement(v,{toggle:o,handleModal:function(){return e.handleModal()},data:n}),r.a.createElement("div",{className:"card-container"},a.map((function(t,a){return r.a.createElement(Z,{key:a,cardData:t,increement:function(t,a){return e.cartIncreement(t,a)},decreement:function(t,a){return e.cartDecreement(t,a)},addToCart:function(){return e.addToCart()}})}))),r.a.createElement("div",{className:"footer"},r.a.createElement(f,{data:n,checkout:function(){return e.handleModal()}}))))}}]),a}(n.Component);var k=function(){return r.a.createElement(BrowserRouter,{basename:window.location.pathname||""},r.a.createElement(l.a,{exact:!0,path:"/",component:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.80a5762b.chunk.js.map