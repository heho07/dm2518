(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(1)),l=n(2),u=n(4),s=n(3),m=n(5),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={map:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=new window.google.maps.Map(document.getElementById("map"),{center:{lat:59.3498092,lng:18.0684758},zoom:15,mapTypeId:"hybrid",tilt:45,gestureHandling:"none",zoomControl:!1});this.setState({map:e})}},{key:"zoom",value:function(e){console.log("empty");var t=this.state.map.getZoom();this.state.map.setZoom(t+e)}},{key:"panBy",value:function(e,t){this.state.map.panBy(e,t)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{id:"map",style:{width:window.innerWidth-10,height:500}}),o.a.createElement("button",{onClick:function(){return e.zoom(1)}},o.a.createElement("i",{class:"fa fa-plus"})),o.a.createElement("button",{onClick:function(){return e.zoom(-1)}},o.a.createElement("i",{class:"fa fa-minus"})),o.a.createElement("button",{onClick:function(){return e.panBy(0,-50)}},o.a.createElement("i",{class:"fa fa-arrow-up"})),o.a.createElement("button",{onClick:function(){return e.panBy(0,50)}},o.a.createElement("i",{class:"fa fa-arrow-down"})),o.a.createElement("button",{onClick:function(){return e.panBy(-50,0)}},o.a.createElement("i",{class:"fa fa-arrow-left"})),o.a.createElement("button",{onClick:function(){return e.panBy(50,0)}},o.a.createElement("i",{class:"fa fa-arrow-right"})),o.a.createElement("p",null,this.state.test))}}]),t}(a.Component),f=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"The Map App"),o.a.createElement(p,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e59cd277.chunk.js.map