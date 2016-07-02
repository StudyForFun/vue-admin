webpackJsonp([2,1],{0:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=s(9),n=a(i),l=s(21),o=a(l),c=s(3),r=a(c),u=s(286),d=a(u),p=s(285),f=a(p),v=s(231),m=a(v);s(22);var b=s(33),g=a(b),h=s(38),I=a(h);(0,o["default"])(n["default"]),r["default"].use(d["default"]),r["default"].use(f["default"]);var x=n["default"].sidebar,C=new d["default"]({saveScrollPosition:!0,transitionOnLoad:!0,linkActiveClass:"is-active"});r["default"].http.interceptors.push(function(){return{request:function(e){return m["default"].inc(.2),e},response:function(e){return m["default"].done(),e}}}),C.beforeEach(function(e){var t=e.next;m["default"].start(),x.isMobile&&x.opened&&(x.opened=!1),t()}),C.afterEach(function(){m["default"].done()});var _=function(e){var t=arguments.length<=1||void 0===arguments[1]?".vue":arguments[1];return function(a){s.e(0,function(s){var i=[s(288)(""+e+t)];a.apply(null,i)}.bind(this))}};C.map({"/dashboard":{name:"Dashboard",component:I["default"]},"/charts/chartJs":{name:"ChartJs",component:_("./components/pages/Charts/ChartJs")},"/charts/chartist":{name:"Chartist",component:_("./components/pages/Charts/Chartist")},"/charts/peity":{name:"Peity",component:_("./components/pages/Charts/Peity")},"/charts/plotly":{name:"Plotly",component:_("./components/pages/Charts/Plotly")},"/ui":{name:"UI",component:_("./components/pages/UI/index"),subRoutes:{"/typography":{name:"Typography",component:_("./components/pages/UI/Typography")},"/buttons":{name:"Buttons",component:_("./components/pages/UI/Buttons")},"/icons":{name:"Icons",component:_("./components/pages/UI/Icons")},"/form":{name:"Form",component:_("./components/pages/UI/Form")},"/notifications":{name:"Notifications",component:_("./components/pages/UI/Notifications")},"/messages":{name:"Messages",component:_("./components/pages/UI/Messages")},"/progress":{name:"Progress",component:_("./components/pages/UI/Progress")},"/modals":{name:"Modals",component:_("./components/pages/UI/Modals")},"/tooltips":{name:"Tooltips",component:_("./components/pages/UI/Tooltips")},"/tabs":{name:"Tabs",component:_("./components/pages/UI/Tabs")},"/collapses":{name:"Collapses",component:_("./components/pages/UI/Collapses")},"/datepicker":{name:"Datepicker",component:_("./components/pages/UI/Datepicker")}}},"/tables/basic":{name:"BasicTables",component:_("./components/pages/Tables/Basic")}}),C.redirect({"/ui":"/ui/typography","*":"/dashboard"}),C.start(g["default"],"app")},9:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(19),n=a(i),l=s(20),o=a(l);t["default"]={menu:n["default"],sidebar:o["default"]}},10:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},15:function(e,t,s){var a,i;s(216),a=s(114),i=s(270),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},19:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[{link:"Dashboard",label:"Dashboard",icon:"fa-tachometer"},{label:"Charts",icon:"fa-bar-chart-o",expanded:!0,subMenu:[{link:"ChartJs",label:"ChartJs"},{link:"Chartist",label:"Chartist"},{link:"Peity",label:"Peity"},{link:"Plotly",label:"Plotly"}]},{label:"UI Features",icon:"fa-laptop",expanded:!1,subMenu:[{link:"Buttons",label:"Buttons"},{link:"Form",label:"Form"},{link:"Typography",label:"Typography"},{link:"Icons",label:"Icons"},{link:"Notifications",label:"Notifications"},{link:"Messages",label:"Messages"},{link:"Progress",label:"Progress"},{link:"Modals",label:"Modals"},{link:"Tooltips",label:"Tooltips"},{link:"Tabs",label:"Tabs"},{link:"Collapses",label:"Collapses"},{link:"Datepicker",label:"Datepicker"}]},{label:"Tables",icon:"fa-table",expanded:!1,subMenu:[{link:"BasicTables",label:"Basic Tables"}]}]},20:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={opened:!1,isMobile:!1}},21:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=e.sidebar,s=document,a=s.body,i=768,n=3,l=function(){if(!document.hidden){var e=a.getBoundingClientRect();t.isMobile=e.width-n<i,t.opened=!t.isMobile}};document.addEventListener("visibilitychange",l),window.addEventListener("DOMContentLoaded",l),window.addEventListener("resize",l)}},22:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=s(3),n=a(i),l=s(87),o=a(l);n["default"].transition("fade",{enterClass:"fadeIn",leaveClass:"fadeOut"}),n["default"].transition("fade-horizontal-rtl",{enterClass:"fadeInRight",leaveClass:"fadeOutLeft"}),n["default"].transition("fade-horizontal-ltr",{enterClass:"fadeInLeft",leaveClass:"fadeOutRight"}),n["default"].transition("slide-horizontal-rtl",{enterClass:"slideInRight",leaveClass:"slideOutLeft"}),n["default"].transition("slide-horizontal-ltr",{enterClass:"slideInLeft",leaveClass:"slideOutRight"}),n["default"].transition("fade-vertical-dtu",{enterClass:"fadeInUp",leaveClass:"fadeOutUp"}),n["default"].transition("fade-vertical-utd",{enterClass:"fadeInDown",leaveClass:"fadeOutDown"}),n["default"].transition("slide-vertical-dtu",{enterClass:"slideInUp",leaveClass:"slideOutUp"}),n["default"].transition("slide-vertical-utd",{enterClass:"slideInDown",leaveClass:"slideOutDown"}),n["default"].transition("zoom",{enterClass:"zoomIn",leaveClass:"zoomOut"});var c=["","Left","Right"];c.forEach(function(e){var t="bounce"+(e?"-"+e.toLowerCase():"");n["default"].transition(t,{enterClass:"bounceIn"+e,leaveClass:"bounceOut"+e})});var r=["Up","Down"];r.forEach(function(e){var t="bounce-"+e.toLowerCase();n["default"].transition(t,{enterClass:"bounceIn"+e,leaveClass:"bounceOut"+("Up"===e?"Down":"Up")})}),n["default"].transition("menu-expand",{enter:function(e){e.classList.remove("collapse"),e.classList.add("collapsing"),e.style.height=e.scrollHeight+"px"},afterEnter:function(e){e.classList.remove("collapsing"),e.classList.add("collapse","in")},leave:function(e){e.classList.add("collapsing"),e.classList.remove("collapse","in"),e.style.height=0},afterLeave:function(e){e.classList.remove("collapsing"),e.classList.add("collapse"),e.style.display="none"}}),n["default"].transition("fade-expand",{css:!1,enter:function(e,t){var s=e.scrollHeight,a={value:[0,1]},i=377,n="easeOutExpo",l=function(){e.removeAttribute("style"),t()};e.style.height=0,e.style.opacity=0,this.anime=(0,o["default"])({targets:e,duration:i,easing:n,opacity:a,height:s,complete:l})},enterCancelled:function(e){this.anime.pause()},leave:function(e,t){var s=0,a={value:[1,0]},i=377,n="easeOutExpo";this.anime=(0,o["default"])({targets:e,duration:i,easing:n,opacity:a,height:s,complete:t})},leaveCancelled:function(e){this.anime.pause()}})},23:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(3),n=a(i),l=s(287),o=a(l),c=s(9),r=a(c),u=r["default"].menu,d=r["default"].sidebar;n["default"].use(o["default"]);var p=new o["default"].Store({state:{menu:u,sidebar:d},mutations:{}});t["default"]=p},32:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy44LjMgKDI5ODAyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT52dWUtYWRtaW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWxpbmUgaWQ9InBhdGgtMSIgcG9pbnRzPSIyLjgzMzk3NjYzZS0xNCA2MS41ODYyNjM1IDE5OS43NjQyNzkgLTUuOTkwODkwNWUtMTUgMTcyLjU5MDM5MSAyMDAgMi44MzM5NzY2M2UtMTQgNjEuNTg2MjYzNSI+PC9wb2x5bGluZT4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE5OS43NjQyNzkiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxwb2x5bGluZSBpZD0icGF0aC0zIiBwb2ludHM9Ijg4Ljc1IDM0LjIxNDU5MDggMTk5LjczMDE1NSAxLjQ3NjgxMjMxZS0xNCAxODQuNjMzNTUgMTExLjExMTExMSA4OC43NSAzNC4yMTQ1OTA4Ij48L3BvbHlsaW5lPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTEwLjk4MDE1NSIgaGVpZ2h0PSIxMTEuMTExMTExIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PC9yZWN0PgogICAgICAgICAgICA8dXNlIGlkPSJUcmlhbmdsZS0xIiBzdHJva2U9IiM0MEI4ODMiIG1hc2s9InVybCgjbWFzay0yKSIgc3Ryb2tlLXdpZHRoPSI0MCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDx1c2UgaWQ9IlRyaWFuZ2xlLTEiIHN0cm9rZT0iIzM0NDk1RCIgbWFzaz0idXJsKCNtYXNrLTQpIiBzdHJva2Utd2lkdGg9IjQwIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},33:function(e,t,s){var a,i;s(195),a=s(88),i=s(241),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},34:function(e,t,s){var a,i;s(196),a=s(89),i=s(242),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},35:function(e,t,s){var a,i;s(197),a=s(91),i=s(243),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},36:function(e,t,s){var a,i;s(198),a=s(92),i=s(244),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},37:function(e,t,s){var a,i;s(199),a=s(93),i=s(245),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},38:function(e,t,s){var a,i;s(222),a=s(98),i=s(276),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},41:function(e,t,s){var a,i;s(215),a=s(113),i=s(269),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},88:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(23),n=a(i),l=s(36),o=a(l),c=s(37),r=a(c),u=s(35),d=a(u),p=s(34),f=a(p);t["default"]={store:n["default"],vuex:{getters:{sidebar:function(e){return e.sidebar}}},components:{Navbar:o["default"],Sidebar:r["default"],Levelbar:d["default"],FooterBar:f["default"]}}},89:function(e,t){"use strict"},91:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(41),n=a(i);t["default"]={vuex:{getters:{menu:function(e){return e.menu}}},components:{Breadcrumb:n["default"]},data:function(){return{defaultList:[{label:"Home",link:"Dashboard"}]}},computed:{name:function(){return this.$route.name||this.$route.title},list:function(){return this.defaultList.concat(this.find(this.name,this.menu))}},methods:{find:function(e,t){for(var s=[],a=0,i=t.length;i>a;++a){var n=t[a];if(n.label===e){s.push({label:n.label,link:n.link});break}if(n.subMenu){n.link&&s.push({lable:n.label,link:n.link});var l=this.find(e,n.subMenu);l.length?s=s.concat(l):n.link&&s.pop()}}return s}}}},92:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={vuex:{getters:{sidebar:function(e){return e.sidebar}}},methods:{toggleSidebar:function(){this.sidebar.opened=!this.sidebar.opened}}}},93:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=0;t["default"]={vuex:{getters:{menu:function(e){return e.menu},sidebar:function(e){return e.sidebar}}},data:function(){return{steps:this.menu.filter(function(e){return!!e.subMenu}).length,isReady:!1}},ready:function(){this.isReady=!0},methods:{toggle:function(e,t){this.hasCollapse(e)?(t.preventDefault(),e.expanded=!e.expanded):this.autoClose()},hasCollapse:function(e){return!!e.subMenu},isExpanded:function(e){var t=this,a=this.hasCollapse(e);return a?(s<this.steps&&(s++,e.expanded=!!e.subMenu.filter(function(e){return e.link===t.$route.name}).length),this.isReady&e.expanded):void 0},autoClose:function(){this.sidebar.isMobile&&(this.sidebar.opened=!1)}}}},98:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(15),n=a(i);t["default"]={components:{Chart:n["default"]},data:function(){return{data:[300,50,100]}},computed:{chartData:function(){return{labels:["Red","Blue","Yellow"],datasets:[{data:this.data,backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}}},created:function(){var e=this;setInterval(function(){e.data.forEach(function(t,s){e.data.$set(s,Math.ceil(1e3*Math.random()))})},1024)}}},113:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{list:{type:Array,required:!0,"default":function(){return[]}}},methods:{isLatest:function(e){return e===this.list.length-1}}}},114:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(10),n=a(i),l=s(132),o=a(l),c=["line","bar","radar","polarArea","pie","doughnut"];t["default"]={mixins:[n["default"]],props:{width:{type:Number},height:{type:Number},type:{type:String,required:!0,validator:function(e){return c.indexOf(e)>-1}},data:{type:Object,required:!0,"default":function(){return{}}},options:{type:Object,"default":function(){return{}}}},ready:function(){var e=this.$el,t="va-canvas-"+this.uuid;e.setAttribute("id",t),this.chart=new o["default"](e,{type:this.type,data:this.data,options:this.options})},data:function(){return{chart:null}},watch:{data:function(e){var t=this;this.$nextTick(function(){t.chart.update()})}}}},195:function(e,t){},196:195,197:195,198:195,199:195,215:195,216:195,222:195,241:function(e,t){e.exports=' <div id=app> <navbar></navbar> <sidebar></sidebar> <section class=app-main> <div class="container is-fluid is-marginless app-content"> <levelbar></levelbar> <router-view class=animated transition=fade transition-mode=out-in keep-alive> </router-view> </div> </section> <footer-bar></footer-bar> </div> '},242:function(e,t){e.exports=' <footer class=footer> <div class=container> <div class="content has-text-centered"> <p class=social> <a href=https://github.com/fundon/vue-admin> <span class=icon> <i class="fa fa-github"></i> </span> </a> <a href=https://twitter.com/_fundon> <span class=icon> <i class="fa fa-twitter"></i> </span> </a> </p> <p><span class=icon><i class="fa fa-code"></i></span> with <span class=icon><i class="fa fa-heart"></i></span> by <a href=https://github.com/fundon>fundon</a>.</p> <p>Code licensed under <a href=https://github.com/fundon/vue-admin/blob/master/LICENSE>MIT</a>.</p> </div> </div> </footer> '},243:function(e,t){e.exports=' <nav class="level app-levelbar"> <div class=level-left> <div class=level-item> <h3 class="subtitle is-5"> <strong>{{ name }}</strong> </h3> </div> </div> <div class="level-right is-hidden-mobile"> <breadcrumb :list=list></breadcrumb> </div> </nav> '},244:function(e,t,s){e.exports=' <section class="hero is-bold app-navbar"> <div class=hero-head> <nav class=nav> <div class=nav-left> <a class="nav-item is-hidden-tablet touchable sidebar-toggle" @click=toggleSidebar> <span class=icon> <i class="fa fa-bars" aria-hidden=true></i> </span> </a> </div> <div class=nav-center> <a class="nav-item hero-brand touchable" href=#> <img src='+s(32)+' alt="Vue Admin Panel Framework"> <div class=is-hidden-mobile> <span class=vue>Vue</span><strong class=admin>Admin</strong> </div> </a> </div> <div class="nav-right is-flex"></div> </nav> </div> </section> '},245:function(e,t){e.exports=' <aside class="menu app-sidebar animated" :class="{ \'slideInLeft\': sidebar.opened, \'slideOutLeft\': !sidebar.opened }"> <ul class=menu-list> <li v-for="item in menu"> <a class=is-unselectable v-link="{ name: item.link }" @click="toggle(item, $event)" :aria-expanded="isExpanded(item) ? \'true\' : \'false\'"> <span class="icon is-small" v-if=item.icon> <i :class="[\'fa\', item.icon]"></i> </span> <span>{{ item.label }}</span> <span class="icon is-small is-angle" v-if=item.subMenu> <i class="fa fa-angle-down"></i> </span> </a> <ul v-show="isReady && item.expanded" :class="{ \'collapse\': item.subMenu }" @click=autoClose transition=menu-expand> <li v-for="subItem in item.subMenu"> <a class=is-unselectable v-link="{ name: subItem.link }">{{ subItem.label }}</a> </li> </ul> </li> </ul> </aside> '},269:function(e,t){e.exports=' <ol class=breadcrumb _v-07e48542=""> <li v-for="(index, item) in list" _v-07e48542=""><span v-if=isLatest(index) class=active _v-07e48542="">{{item.label}}</span> <a v-else="" v-link="{ name: item.link }" _v-07e48542="">{{item.label}}</a> </li> </ol> '},270:function(e,t){e.exports=' <canvas :width=width :height=height _v-0dcdd2ef=""></canvas> '},276:function(e,t){e.exports=' <div _v-2f0c4620=""> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">One</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Two</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Three</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Four</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> </div> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <h4 class=title _v-2f0c4620="">Five</h4> <div class=content _v-2f0c4620=""> <chart :type="\'doughnut\'" :data=chartData _v-2f0c4620=""></chart> </div> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <h4 class=title _v-2f0c4620="">Six</h4> <div class=content _v-2f0c4620=""> <chart :type="\'pie\'" :data=chartData _v-2f0c4620=""></chart> </div> </article> </div> </div> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-vertical is-9" _v-2f0c4620=""> <div class=tile _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Seven</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> <div class="tile is-8 is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Eight</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> </div> <div class=tile _v-2f0c4620=""> <div class="tile is-8 is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Nine</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Ten</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> </div> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <div class=content _v-2f0c4620=""> <p class=title _v-2f0c4620="">Eleven</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p> <p _v-2f0c4620="">Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p> </div> </div> </article> </div> </div> </div> '}});
//# sourceMappingURL=app.d92d60d7f8ff7a233b63.js.map