(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),l=(a(22),a(10)),s=a(11),c=a(14),m=a(12),u=a(15),d=a(13),p=a.n(d),h=(a(42),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),b=["January","February","March","April","May","June","July","August","September","October","November","December"],y=[["nothing today, happy sunday!"],["12:00pm Italian 317","2:00pm Marketing 470","4:00pm CIT 383","5:30pm House Dinner"],["8:00am International Studies 360","10:00am Duck Athletic Fund job","3:00pm Workout A/B"],["12: 00pm Italian 317","2:00pm Marketing 470","4:00pm CIT 383"],["8:00am International Studies 360","10:00am Duck Athletic Fund job","3:00pm Workout A/B"],["8:00am Duck Athletic Fund job","12:30pm Handshake Career Center Appointment","2:00pm CIT Lab","4:00pm CIT 383"],["12:00pm Workout A/B"]],g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).timeOfDay=function(){var e=new Date;return e.getHours()<12?r.a.createElement("div",{className:"title"},"Good Morning, Jacob"):e.getHours()>=12&&e.getHours()<6?r.a.createElement("div",{className:"title"},"Good Afternoon, Jacob"):r.a.createElement("div",{className:"title"},"Good Evening, Jacob")},a.listLoop=function(){for(var e=(new Date).getDay(),t=[],a=0;a<y[e].length;a++)t.push(r.a.createElement("tr",null,r.a.createElement("td",null,y[e][a])));return t},a.state={weatherData:"null",descrip1:"",descrip2:"",temp:0,tempMin:0,tempMax:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;p.a.get("https://api.openweathermap.org/data/2.5/weather?zip=97007,us&APPID=8e44c500eae35929bb2690f0b5c52ac5&units=imperial").then(function(t){return e.setState({weatherData:t,descrip1:t.data.weather[0].main,descrip2:t.data.weather[0].description,temp:t.data.main.temp,tempMin:Math.round(t.data.main.temp_min),tempMax:Math.round(t.data.main.temp_max)})})}},{key:"render",value:function(){var e=new Date;return r.a.createElement("div",null,r.a.createElement("br",null),this.timeOfDay(),r.a.createElement("br",{style:{lineHeight:"1.6"}}),r.a.createElement("div",{className:"title2"}," \xa0Happy ",h[e.getDay()],"!"),r.a.createElement("div",{className:"title3"}," ","\xa0",b[e.getMonth()]," ",e.getDate(),", ",e.getFullYear()," "),r.a.createElement("br",{style:{lineHeight:"1.4"}}),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"weather"},"Here's Today's Agenda"),r.a.createElement("table",{id:"list"},this.listLoop()),r.a.createElement("br",null),r.a.createElement("div",{className:"weather"},"Weather for today in Eugene, OR"),r.a.createElement("div",{className:"weather2"},r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.descrip1," (",this.state.descrip2,")")),r.a.createElement("div",{className:"weather2"},"current temp"," ",r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.temp,"\xb0F")),r.a.createElement("div",{className:"weather2"},"range"," ",r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.tempMin,"\xb0"),"\xa0-\xa0",r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.tempMax,"\xb0F"))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.db82264c.chunk.js.map