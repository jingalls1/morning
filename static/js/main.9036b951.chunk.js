(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),s=a.n(i),l=(a(23),a(12)),o=a(13),c=a(15),d=a(14),m=a(16),h=a(3),u=a.n(h),p=(a(43),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),y=["January","February","March","April","May","June","July","August","September","October","November","December"],g=a(2),E={exit:{opacity:0,y:20},enter:{opacity:1,y:0,delay:function(e){return 100*e.charIndex}}},w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).axiosHolidays=function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth();(r+=1)<10&&(r="0".concat(r));var i=t.getDate();i<10&&(i="0".concat(i));var s="".concat(n,"-").concat(r,"-").concat(i);void 0===e.data.holidays[s]?console.log("no holidays today"):a.setState({holidayName:e.data.holidays[s][0].name})},a.timeOfDay=function(){var e=new Date;return e.getHours()<12?r.a.createElement("div",{className:"title"},r.a.createElement(g.a,{initialPose:"exit",pose:"enter",charPoses:E},"Good Morning, Jacob")):e.getHours()>=12&&e.getHours()<18?r.a.createElement("div",{className:"title"},r.a.createElement(g.a,{initialPose:"exit",pose:"enter",charPoses:E},"Good Afternoon, Jacob")):r.a.createElement("div",{className:"title"},r.a.createElement(g.a,{initialPose:"exit",pose:"enter",charPoses:E},"Good Evening, Jacob"))},a.listLoop=function(){for(var e=(new Date).getDay(),t=[],n=0;n<a.state.schState[e].length;n++)t.push(r.a.createElement("tr",null,r.a.createElement("td",null,a.state.schState[e][n])));return t},a.newsHandler=function(){if(a.state.news.length<1)return r.a.createElement("div",null,"\xa0");for(var e=[],t=0;t<7;t++)e.push(r.a.createElement("a",{style:{color:"white",fontWeight:"bold",textShadow:"2px 2px 4px black"},href:a.state.news[t].url},"\u2666\xa0",a.state.news[t].title)),e.push(r.a.createElement("br",null));return e},a.holidayHandler=function(){return a.state.holidayName.length<1?r.a.createElement("span",null):r.a.createElement("div",{className:"title3"}," \xa0",a.state.holidayName)},a.state={weatherData:"null",descrip1:"",descrip2:"",temp:0,tempMin:0,tempMax:0,schState:[[0],[1],[2],[3],[4],[5],[6]],holidayName:"",news:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;u.a.get("https://api.openweathermap.org/data/2.5/weather?zip=97007,us&APPID=8e44c500eae35929bb2690f0b5c52ac5&units=imperial").then(function(t){return e.setState({weatherData:t,descrip1:t.data.weather[0].main,descrip2:t.data.weather[0].description,temp:t.data.main.temp,tempMin:Math.round(t.data.main.temp_min),tempMax:Math.round(t.data.main.temp_max)})}),u.a.get("https://my-json-server.typicode.com/jingalls1/scheduledb/schedule").then(function(t){return e.setState({schState:t.data})}),u.a.get("https://holidayapi.pl/v1/holidays?country=US&year=2019").then(function(t){return e.axiosHolidays(t)}),u.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fe80a73d44b04fd2a742a3e5c35506e2").then(function(t){return e.setState({news:t.data.articles})})}},{key:"render",value:function(){var e=new Date;return r.a.createElement("div",{className:"fuck"},r.a.createElement("br",null),this.timeOfDay(),r.a.createElement("br",{style:{lineHeight:"1.6"}}),r.a.createElement("div",{className:"title2"}," \xa0Happy ",p[e.getDay()],"!"),r.a.createElement("div",{className:"title3"}," ","\xa0",y[e.getMonth()]," ",e.getDate(),", ",e.getFullYear()," "),this.holidayHandler(),r.a.createElement("br",{style:{lineHeight:"1.3"}}),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"weather"},r.a.createElement(g.a,{initialPose:"exit",pose:"enter",charPoses:E},"Here's Today's Agenda")),r.a.createElement("table",{id:"list"},this.listLoop()),r.a.createElement("div",{className:"weather"},r.a.createElement(g.a,{initialPose:"exit",pose:"enter",charPoses:E},"News Headlines")),r.a.createElement("div",null,this.newsHandler()),r.a.createElement("div",{className:"weather"},r.a.createElement(g.a,{initialPose:"exit",pose:"enter",charPoses:E},"Weather rn in Eugene")),r.a.createElement("div",{className:"weather2"},r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.descrip1," (",this.state.descrip2,")")),r.a.createElement("div",{className:"weather2"},"current temp"," ",r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.temp,"\xb0F")),r.a.createElement("div",{className:"weather2"},"range"," ",r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.tempMin,"\xb0"),"\xa0-\xa0",r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.tempMax,"\xb0F"))),r.a.createElement("br",{style:{lineHeight:"2.3"}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.9036b951.chunk.js.map