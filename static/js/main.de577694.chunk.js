(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(40)},28:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),o=n.n(r),c=n(6),i=(n(28),n(7)),u=n(8),s=n(10),m=n(9),b=n(11),f=n(5),h=n(20),p=n.n(h),d=(n(32),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={map:null,markers:[],isFull:!1},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=new window.google.maps.Map(document.getElementById("map"),{center:{lat:59.3498092,lng:18.0684758},zoom:15,mapTypeId:"hybrid",tilt:45,gestureHandling:"none",zoomControl:!1});this.setState({map:e})}},{key:"zoom",value:function(e){console.log("empty");var t=this.state.map.getZoom();this.state.map.setZoom(t+e)}},{key:"panBy",value:function(e,t){this.state.map.panBy(e,t)}},{key:"createMarker",value:function(e){new window.google.maps.Marker({position:this.state.map.getCenter(),map:this.state.map,draggable:e})}},{key:"goFull",value:function(){this.setState({isFull:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{enabled:this.state.isFull,onChange:function(t){return e.setState({isFull:t})}},l.a.createElement("div",null,l.a.createElement("button",{class:"btn btn-light",onClick:function(){return e.goFull()}},"Go Fullscreen"),l.a.createElement("div",{id:"map",style:{width:window.innerWidth-100,height:window.innerHeight-200}}),l.a.createElement("div",{class:"flex-container"},l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.zoom(1)}},l.a.createElement("i",{className:"fa fa-plus"})),l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.zoom(-1)}},l.a.createElement("i",{className:"fa fa-minus"})),l.a.createElement("hr",null),l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.panBy(0,-50)}},l.a.createElement("i",{className:"fa fa-arrow-up"})),l.a.createElement("hr",null),l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.panBy(-50,0)}},l.a.createElement("i",{className:"fa fa-arrow-left"})),l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.panBy(50,0)}},l.a.createElement("i",{className:"fa fa-arrow-right"})),l.a.createElement("hr",null),l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.panBy(0,50)}},l.a.createElement("i",{className:"fa fa-arrow-down"})),l.a.createElement("hr",null),l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.createMarker(!0)}},"Draggable marker"),l.a.createElement("button",{class:"btn btn-light flex-button",onClick:function(){return e.createMarker(!1)}},"Undraggable marker"))))}}]),t}(a.Component)),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.b,{to:"/Karta"},"Map"),l.a.createElement("p",null,"test"))}}]),t}(a.Component),E=(n(39),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(f.a,{exact:!0,path:"/",component:g}),l.a.createElement(f.a,{path:"/Karta",render:function(){return l.a.createElement(d,null)}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.a,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.de577694.chunk.js.map