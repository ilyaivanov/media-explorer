(this["webpackJsonpmedia-explorer"]=this["webpackJsonpmedia-explorer"]||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},20:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(9),c=n.n(a),o=n(5),d=(n(20),n(6)),l=n(4),s=n(1),u=function(e,t,n){return Object(s.a)(Object(s.a)({},e),{},{items:Object(s.a)(Object(s.a)({},e.items),{},Object(l.a)({},t,Object(s.a)(Object(s.a)({},e.items[t]),n(e.items[t]))))})},m=function(e,t){return Object.keys(e).find((function(n){return e[n].children.indexOf(t)>-1}))},E=function(e,t){if("TOGGLE_ITEM"===t.type)return u(e,t.itemId,(function(e){return{isOpen:!e.isOpen}}));if("RENAME_ITEM"===t.type)return u(e,t.itemId,(function(){return{title:t.newName}}));if("REMOVE_ITEM"===t.type){var n=m(e.items,t.itemId);return u(e,n,(function(e){return{children:e.children.filter((function(e){return e!==t.itemId}))}}))}if("APPEND_NODE"===t.type){var i=Object(s.a)(Object(s.a)({},e),{},{items:Object(s.a)(Object(s.a)({},e.items),{},Object(l.a)({},t.node.id,t.node))});return u(i,t.parentId,(function(e){return{children:e.children.concat([t.node.id])}}))}if("PLAY_ITEM"===t.type)return Object(s.a)(Object(s.a)({},e),{},{videoIdBeingPlayed:t.item.videoId});if("SET_SEARCH_TERM"===t.type)return Object(s.a)(Object(s.a)({},e),{},{searchTerm:t.term});if("SET_NODE_CHILDREN"===t.type){var r=Object(s.a)(Object(s.a)({},e),{},{items:Object(s.a)({},e.items)});return t.items.forEach((function(e){r.items[e.id]=e})),u(r,"SEARCH",(function(){return{children:t.items.map((function(e){return e.id}))}}))}if("TOGGLE_SEARCH_VISIBILITY"===t.type)return Object(s.a)(Object(s.a)({},e),{},{options:Object(s.a)(Object(s.a)({},e.options),{},{isSearchVisible:!e.options.isSearchVisible})});if("START_DRAGGING_ITEM"===t.type)return Object(s.a)(Object(s.a)({},e),{},{itemBeingDraggedId:t.itemId});if("UPDATE_MOUSE_COORDINATES"===t.type)return Object(s.a)(Object(s.a)({},e),{},{x:t.x,y:t.y});if("DROP_ITEM"===t.type){if(!e.itemBeingDraggedId||!e.dropDestinationPlaceholder)return e;var a=m(e.items,e.itemBeingDraggedId||""),c=u(e,a,(function(t){return{children:t.children.filter((function(t){return t!==e.itemBeingDraggedId}))}}));return Object(s.a)(Object(s.a)({},c),{},{items:p(c.items,e.itemBeingDraggedId,e.dropDestinationPlaceholder),itemBeingDraggedId:void 0,dropDestinationPlaceholder:void 0})}return"SET_DROP_POSITION"===t.type?Object(s.a)(Object(s.a)({},e),{},{dropDestinationPlaceholder:t.dropPosition}):e},p=function(e,t,n){if("inside"===n.dropDestination){var i=Object(d.a)(e[n.itemId].children);i.splice(0,0,t),e[n.itemId]=Object(s.a)(Object(s.a)({},e[n.itemId]),{},{children:i})}else{var r=m(e,n.itemId),a=e[r].children.indexOf(n.itemId);"after"===n.dropDestination&&(a+=1);var c=Object(d.a)(e[r].children);c.splice(a,0,t),e[r]=Object(s.a)(Object(s.a)({},e[r]),{},{children:c})}return e},f=n(10),g=(n(35),function(e){var t=e.videoId;return r.a.createElement("div",{className:"player"},r.a.createElement(f.a,{videoId:t,opts:h}))}),h={height:150,width:400,playerVars:{autoplay:1}},v={items:{HOME:{children:["1","2"],id:"HOME",title:"HOME"},1:{id:"1",title:"First",children:["3"],videoId:"XdsLeeQ4s_Q"},2:{id:"2",title:"Second",children:[],videoId:"L9pp1_en1EE"},3:{id:"3",title:"First sub",children:[]}},videoIdBeingPlayed:void 0,searchTerm:"",options:{isSearchVisible:!0},x:0,y:0,itemBeingDraggedId:void 0},O=r.a.memo((function(e){var t=e.options,n=e.dispatch;return r.a.createElement("div",{className:"menu",style:{height:50}},"search:",r.a.createElement("button",{onClick:function(){return n({type:"TOGGLE_SEARCH_VISIBILITY"})}},t.isSearchVisible?"hide":"show"))})),I=n(13),b=function(e,t,n){if(e[t])return e[t].children.map((function(t){return function t(i,r){return e[i].isOpen&&e[i].children.length>0?[n(e[i],r)].concat(Object(d.a)(e[i].children.map((function(e){return t(e,r+1)})))):n(e[i],r)}(t,0)})).flat(Number.MAX_VALUE)},y=(n(38),function(e){var t=e.width||10;return r.a.createElement("svg",Object.assign({height:t,width:t,viewBox:"0 0 ".concat(t," ").concat(t)},e),r.a.createElement("polygon",{points:"\n        ".concat(0,",",0," \n        ",t,",").concat(t/2," \n        ",0,",").concat(t)}))}),j=r.a.memo((function(e){var t=e.item,n=e.level,a=e.dispatch,c=e.listenToDragEvents,d=r.a.useState(!1),l=Object(o.a)(d,2),s=l[0],u=l[1],m=r.a.useRef(0),E=r.a.useRef(null);Object(i.useEffect)((function(){s&&E.current&&E.current.focus()}),[s]);var p=Object(i.useState)(!1),f=Object(o.a)(p,2),g=f[0],h=f[1],v=r.a.useCallback((function(e){var n,i;m.current>5?(a({itemId:t.id,type:"START_DRAGGING_ITEM"}),a((n=e.clientX,i=e.clientY,{x:n,y:i,type:"UPDATE_MOUSE_COORDINATES"})),console.log("Staring to drag")):m.current+=Math.sqrt(e.movementY*e.movementY+e.movementX*e.movementX)}),[a,t]),O=r.a.useCallback((function(){m.current=0,a({type:"DROP_ITEM"}),h(!1)}),[a]);return Object(i.useEffect)((function(){return g?(document.addEventListener("mousemove",v),document.addEventListener("mouseup",O)):(document.removeEventListener("mouseup",O),document.removeEventListener("mousemove",v)),function(){document.removeEventListener("mouseup",O),document.removeEventListener("mousemove",v)}}),[g,O,v]),r.a.createElement("div",{className:"row",key:t.id,style:{paddingLeft:20*n},onMouseMove:c?function(e){var i=e.currentTarget.getBoundingClientRect(),r=e.clientX-i.x,c=e.clientY-i.y;a({dropPosition:{rect:e.currentTarget.getBoundingClientRect(),dropDestination:c>20?r>60+20*n?"inside":"after":"before",targetLevel:n,itemId:t.id},type:"SET_DROP_POSITION"})}:void 0},r.a.createElement("div",{className:"small-text red",onClick:function(){return a(function(e){return{itemId:e.id,type:"REMOVE_ITEM"}}(t))}},"X"),r.a.createElement("div",{className:"small-text",onClick:function(){return u(!0)}},"E"),r.a.createElement(y,{className:"triangle "+(0===t.children.length?"transparent ":"")+(t.isOpen?"open ":""),"data-testid":"triangle-"+t.id,onClick:function(){return a(function(e){return{itemId:e.id,type:"TOGGLE_ITEM"}}(t))}}),r.a.createElement("div",{className:"circle",onMouseDown:function(){return h(!0)}},t.videoId&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"https://i.ytimg.com/vi/".concat(t.videoId,"/mqdefault.jpg"),alt:"1"}),r.a.createElement("div",{className:"playButtonContainer"},r.a.createElement(y,{onClick:function(){return a(function(e){return{item:e,type:"PLAY_ITEM"}}(t))},className:"playButton",width:14})))),s?r.a.createElement("input",{type:"text",value:t.title,ref:E,onBlur:function(){return u(!1)},onChange:function(e){return a((n=t.id,i=e.currentTarget.value,{itemId:n,newName:i,type:"RENAME_ITEM"}));var n,i}}):r.a.createElement("span",{className:"text"},t.title))})),T=function(e){var t=e.items,n=e.rootName,i=e.listenToDragEvents,a=e.dispatch;return r.a.createElement(r.a.Fragment,null,b(t,n,(function(e,t){return r.a.createElement(j,{key:e.id,listenToDragEvents:i,item:e,level:t,dispatch:a})})))},D=function(e){var t=e.state,n=e.dispatch,a=r.a.useCallback(Object(I.debounce)((function(e){return function(e){return fetch("https://europe-west1-lean-watch.cloudfunctions.net/getVideos?q="+e).then((function(e){return e.json()})).then((function(e){return e.items.map((function(e){return{id:e.id,title:e.name,children:[],isOpen:!1,videoId:e.itemId}}))}))}(e).then((function(e){return n(function(e,t){return{items:t,type:"SET_NODE_CHILDREN"}}(0,e))}))}),600,{trailing:!0}),[]);return Object(i.useEffect)((function(){t.searchTerm&&a(t.searchTerm)}),[t.searchTerm,a]),t.options.isSearchVisible?r.a.createElement("div",null,r.a.createElement("h5",null,"Search"),r.a.createElement("input",{type:"text",value:t.searchTerm,onChange:function(e){return n({term:e.currentTarget.value,type:"SET_SEARCH_TERM"})}}),r.a.createElement(T,{listenToDragEvents:!!t.itemBeingDraggedId,items:t.items,dispatch:n,rootName:"SEARCH"})):null},_=function(e){var t=e.x,n=e.y,i=e.text,a=e.videoId;return r.a.createElement("div",{style:{position:"fixed",top:n-15,left:t-15,pointerEvents:"none",display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{backgroundColor:"lightblue",width:30,height:30,borderRadius:30}},a&&r.a.createElement("img",{style:{width:30,height:30,borderRadius:30},src:"https://i.ytimg.com/vi/".concat(a,"/mqdefault.jpg"),alt:"1"})),r.a.createElement("span",{style:{fontSize:12,marginLeft:5,width:300}},i))},N=n(14),S=n.n(N),M=function(e){var t=e.dropDestinationPlaceholder;return t?r.a.createElement("div",{style:{position:"absolute",top:t.rect.top-5+("before"===t.dropDestination?0:50),left:40+t.rect.left+20*t.targetLevel+("inside"===t.dropDestination?20:0),height:2,backgroundColor:"lightblue",width:t.rect.width-40-20*t.targetLevel-("inside"===t.dropDestination?20:0)}}):null},R=function(){var e=r.a.useReducer(E,v),t=Object(o.a)(e,2),n=t[0],i=t[1];return r.a.createElement("div",{className:S()({"page-container":!0,"page-during-drag":n.itemBeingDraggedId})},r.a.createElement(O,{options:n.options,dispatch:i}),r.a.createElement("div",{className:"page"},r.a.createElement("div",null,r.a.createElement(T,{listenToDragEvents:!!n.itemBeingDraggedId,items:n.items,dispatch:i,rootName:"HOME"}),r.a.createElement("button",{onClick:function(){return i({node:{children:[],isOpen:!1,title:"New Node",id:Math.random()+""},parentId:"HOME",type:"APPEND_NODE"})}},"add")),r.a.createElement(D,{state:n,dispatch:i})),n.videoIdBeingPlayed&&r.a.createElement(g,{videoId:n.videoIdBeingPlayed}),n.itemBeingDraggedId&&r.a.createElement(_,{x:n.x,y:n.y,text:n.items[n.itemBeingDraggedId].title,videoId:n.items[n.itemBeingDraggedId].videoId||""}),r.a.createElement(M,{dropDestinationPlaceholder:n.dropDestinationPlaceholder}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5219777d.chunk.js.map