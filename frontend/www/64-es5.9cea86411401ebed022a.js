!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"9Cc3":function(e,i,o){"use strict";o.r(i),o.d(i,"MetronomePageModule",function(){return A});var a=o("ofXK"),c=o("3Pt+"),r=o("TEn/"),s=o("mrSG"),b=o("XlTo"),l=function(){function e(n,i,o,a,c){t(this,e),this.getCanvas(i),this.createBalls(n),this.calcBallDiameter(n,a),this.calcCircRadius(o,c),this.drawCircles(n)}return n(e,[{key:"getCanvas",value:function(t){var e=t.getElementById("content"),n=t.getElementById("header");this.canvas={headerWidth:n.clientWidth,headerHeight:n.clientHeight,contentWidth:e.clientWidth,contentHeight:e.clientHeight}}},{key:"createBalls",value:function(t){this.balls=[];for(var e=0;e<t.beats;e++)this.balls.push({color:"#9d9fa6",diameter:0,cX:0,cY:0});this.circle={color:"black",radius:0,thickness:0,cX:0,cY:0}}},{key:"calcBallDiameter",value:function(t,e){var n=this;this.balls.forEach(function(t){n.canvas.contentHeight>=n.canvas.contentWidth?(t.diameter=n.canvas.contentWidth/(2*e),t.diameter>40&&(t.diameter=40)):t.diameter=n.canvas.contentHeight/(2*e)}),this.circle.thickness=2,this.circle.color="black"}},{key:"calcCircRadius",value:function(t,e){var n=this.balls[0].diameter;this.circDiameter=this.canvas.contentHeight>=this.canvas.contentWidth?this.canvas.contentWidth/2/t*(e+1)-n:this.canvas.contentHeight/2/t*(e+1)-n,this.circle.radius=2*this.circDiameter}},{key:"drawCircles",value:function(t){var e=this;this.canvas.headerHeight&&this.balls.forEach(function(n,i){var o=e.canvas.contentWidth/2-n.diameter/2,a=e.canvas.contentHeight/2-n.diameter/2,c=2*Math.PI/t.beats*i;n.cX=o+e.circDiameter*Math.cos(c-Math.PI/2),n.cY=a+e.circDiameter*Math.sin(c-Math.PI/2),e.circle.cX=o+e.circDiameter*Math.cos(Math.PI)+n.diameter/2+e.circle.thickness/2,e.circle.cY=a+e.circDiameter*Math.sin(-Math.PI/2)+n.diameter/2+e.circle.thickness/2})}},{key:"lightBall",value:function(t,e){this.balls.forEach(function(t){t.color="#9d9fa6"}),this.balls[t.idx].color=0==t.idx&&t.changeFirstBeat?this.shadeColor(t.color,-80):t.color,e.tick()}},{key:"shadeColor",value:function(t,e){return"#"+t.replace(/^#/,"").replace(/../g,function(t){return("0"+Math.min(255,Math.max(0,parseInt(t,16)+e)).toString(16)).substr(-2)})}}]),e}(),m=function(){function e(n,i){t(this,e),this.events=[],this.appRef=n,this.doc=i,this.inizializeData()}return n(e,[{key:"initializeMetronome",value:function(){this.sortTracks(),this.clearTracksIndex(),this.inizializeDrawings(this.doc),this.createSamples(),this.createPart(),this.refreshActualBpm()}},{key:"inizializeData",value:function(){this.data={bpm:120,increase:!1,finalBpm:160,stepBpm:10,measures:4,measureCount:0,showBpm:120,timer:{buffer:8,resetTime:4e3,tapFirst:0,tapAverage:0,tapDeltas:[],tapTimer:0,active:!1},tracks:[{toggle:!1,beats:4,idx:0,changeFirstBeat:!0,sound:"Tick",color:"#3dc2ff",synth:""}],colors:["#3dc2ff","#2dd36f","#ffc409","#eb445a"],sounds:["Tick","Tock","Bell","Tube"]},console.table(this.data)}},{key:"inizializeDrawings",value:function(t){var e=this,n=0;this.data.tracks.forEach(function(i){i.drawings=new l(i,t,e.data.tracks.length,e.data.tracks[e.data.tracks.length-1].beats,n++)})}},{key:"clearTracksIndex",value:function(){var t=this;this.data.tracks.forEach(function(e){e.idx=0,t.data.measureCount=0})}},{key:"sortTracks",value:function(){this.data.tracks.sort(function(t,e){var n=t.beats,i=e.beats;return n<i?-1:n>i?1:0})}},{key:"addTrack",value:function(){var t="";if(this.data.tracks.length<4){switch(this.data.tracks.length){case 0:t="Tick";break;case 1:t="Tock";break;case 2:t="Bell";break;case 3:t="Tube"}this.data.tracks.push({toggle:!1,beats:4,idx:0,changeFirstBeat:!0,sound:t,color:"#3dc2ff",synth:""})}console.log("tracks",this.data.tracks)}},{key:"removeTrack",value:function(){this.data.tracks.length>1&&this.data.tracks.pop()}},{key:"changeTrackOptions",value:function(t,e,n){var i=0;switch(t){case"color":i=this.data.colors.indexOf(n.color),"add"==e?i=(i+1)%this.data.colors.length:(0==i&&(i=this.data.colors.length),i=(i-1)%this.data.colors.length),n.color=this.data.colors[i];break;case"sound":i=this.data.sounds.indexOf(n.sound),"add"==e?i=(i+1)%this.data.sounds.length:(0==i&&(i=this.data.sounds.length),i=(i-1)%this.data.sounds.length),n.sound=this.data.sounds[i];break;case"firstbeat":n.changeFirstBeat=!n.changeFirstBeat,console.log(n.changeFirstBeat)}}},{key:"toggleTrackOptions",value:function(t,e){e&&(e.toggle=!e.toggle,t.stopPropagation())}},{key:"modSettings",value:function(t,e,n){switch(console.log(t,e,n),t){case"beat":switch(e){case"add":n.beats++;break;case"remove":n.beats--}break;case"bpm":switch(e){case"add":this.data.bpm++;break;case"remove":this.data.bpm--}break;case"step":switch(e){case"add":this.data.stepBpm++;break;case"remove":this.data.stepBpm--}break;case"final":switch(e){case"add":this.data.finalBpm++;break;case"remove":this.data.finalBpm--}break;case"measures":switch(e){case"add":this.data.measures++;break;case"remove":this.data.measures--}}this.controlValues()}},{key:"getSlider",value:function(t){this.data.bpm=t,this.controlValues()}},{key:"toggleIncrease",value:function(t){this.data.increase=!!t,console.log(this.data.increase)}},{key:"refreshActualBpm",value:function(){this.data.showBpm=this.data.bpm}},{key:"controlValues",value:function(){this.data.bpm<30&&(this.data.bpm=30),this.data.bpm>300&&(this.data.bpm=300),this.data.finalBpm<30&&(this.data.finalBpm=30),this.data.finalBpm>300&&(this.data.finalBpm=300),this.data.finalBpm-10<this.data.bpm&&(this.data.finalBpm=this.data.bpm+10),this.data.stepBpm<1&&(this.data.stepBpm=1),this.data.stepBpm>10&&(this.data.stepBpm=10),this.data.measures<1&&(this.data.measures=1),this.data.measures>8&&(this.data.measures=8),this.data.tracks.forEach(function(t){t.beats<2&&(t.beats=2),t.beats>12&&(t.beats=12)})}},{key:"createMeasure",value:function(t){console.log(t);for(var e=[],n=60/this.data.bpm*this.data.tracks[0].beats/t.beats,i=0;i<t.beats;i++)e.push(0==i&&t.changeFirstBeat?{time:n*i,note:"C3"}:{time:n*i,note:"F2"});return e}},{key:"createSamples",value:function(){this.data.tracks.forEach(function(t){var e=new b.c({urls:{C3:"".concat(t.sound,".wav")},baseUrl:"assets/instruments/"}).toDestination();t.synth=e})}},{key:"createPart",value:function(){var t=this,e=60/this.data.bpm*this.data.tracks[0].beats;b.d.bpm.value=this.data.bpm,this.data.tracks.forEach(function(n,i){var o=e/n.beats,a=new b.b(function(t,e){n.synth.triggerAttackRelease(e.note,"4n",t)},t.createMeasure(n)).start(0),c=new b.a(function(e){n.drawings.lightBall(n,t.appRef),t.increaseBpm(),n.idx++,n.idx>=n.beats&&(n.idx=0,t.data.measureCount++)},o).start(0);a.loopStart=0,a.loopEnd=e,a.loop=!0,t.events.push(a,c)})}},{key:"increaseBpm",value:function(){this.data.increase&&this.data.showBpm<this.data.finalBpm&&this.data.measureCount>=this.data.measures&&(this.data.showBpm+this.data.stepBpm>this.data.finalBpm||(this.data.showBpm+=this.data.stepBpm),b.d.bpm.value=this.data.showBpm,this.data.measureCount=0)}},{key:"tapBpm",value:function(){var t=this;this.data.timer.active=!0,clearTimeout(this.data.timer.tapTimer),this.data.timer.tapTimer=setTimeout(function(){t.data.timer.tapFirst=0,t.data.timer.tapDeltas=[],t.data.timer.tapAverage=0,t.data.timer.active=!1,console.log("Reset timer!")},this.data.timer.resetTime),0!=this.data.timer.tapFirst&&(this.data.timer.tapDeltas.length>this.data.timer.buffer&&this.data.timer.tapDeltas.shift(),this.data.timer.tapDeltas.push(60/((Date.now()-this.data.timer.tapFirst)/1e3)),this.data.timer.tapFirst=Date.now()),0==this.data.timer.tapFirst&&(this.data.timer.tapFirst=Date.now()),this.data.timer.tapAverage=0,this.data.timer.tapDeltas.forEach(function(e){t.data.timer.tapAverage+=e}),this.data.timer.tapAverage=this.data.timer.tapAverage/this.data.timer.tapDeltas.length,this.data.timer.tapAverage&&(this.data.bpm=Math.round(this.data.timer.tapAverage))}},{key:"cancelEvents",value:function(){this.events.forEach(function(t){t.cancel(0)}),this.events=[],console.log("events cancelled")}},{key:"play",value:function(){b.d.bpm.value=this.data.bpm,b.d.position=0,b.d.start()}},{key:"runMetronome",value:function(t){switch(console.log("run",this.data.bpm,t),t){case"start":this.play();break;case"pause":b.d.pause(),this.clearTracksIndex();break;case"stop":b.d.pause(),b.d.position=0,this.cancelEvents();break;case"addBpm":this.data.bpm++,this.controlValues();break;case"removeBpm":this.data.bpm--,this.controlValues()}}}]),e}(),d=o("fXoL"),u=o("sYmb");function h(t,e){if(1&t&&(d.Mb(0,"div",11),d.Mb(1,"ion-text"),d.oc(2," BPM "),d.Ib(3,"br"),d.oc(4),d.Lb(),d.Lb()),2&t){var n=d.Wb(2);d.xb(4),d.qc(" ",n.metronome.data.showBpm," ")}}function p(t,e){if(1&t&&d.Ib(0,"div",13),2&t){var n=e.$implicit;d.kc("background",n.color)("height",n.diameter+"px")("width",n.diameter+"px")("left",n.cX+"px")("top",n.cY+"px")}}function g(t,e){if(1&t&&d.Ib(0,"div",15),2&t){var n=e.$implicit;d.kc("border",n.drawings.circle.thickness+"px solid "+n.drawings.circle.color)("height",n.drawings.circle.radius+"px")("width",n.drawings.circle.radius+"px")("left",n.drawings.circle.cX+"px")("top",n.drawings.circle.cY+"px")}}function f(t,e){if(1&t&&(d.Kb(0),d.mc(1,g,1,10,"div",14),d.Jb()),2&t){var n=d.Wb(3);d.xb(1),d.bc("ngForOf",n.metronome.data.tracks)}}function v(t,e){if(1&t&&(d.Kb(0),d.mc(1,p,1,10,"div",12),d.mc(2,f,2,1,"ng-container",2),d.Jb()),2&t){var n=e.$implicit,i=d.Wb(2);d.xb(1),d.bc("ngForOf",n.drawings.balls),d.xb(1),d.bc("ngIf",i.metronome.data.tracks.length>=2)}}function M(t,e){if(1&t&&(d.Kb(0),d.Mb(1,"div",8),d.mc(2,h,5,1,"div",9),d.Lb(),d.mc(3,v,3,2,"ng-container",10),d.Jb()),2&t){var n=d.Wb();d.xb(2),d.bc("ngIf",n.metronome),d.xb(1),d.bc("ngForOf",n.metronome.data.tracks)}}var k,x=((k=function(){function e(n,i){t(this,e),this.modalController=n,this.navParams=i}return n(e,[{key:"ionViewDidEnter",value:function(){this.metronome=this.navParams.get("metronome")}},{key:"ngOnInit",value:function(){}},{key:"closeModal",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.dismiss();case 2:case"end":return t.stop()}},t,this)}))}}]),e}()).\u0275fac=function(t){return new(t||k)(d.Hb(r.P),d.Hb(r.Q))},k.\u0275cmp=d.Bb({type:k,selectors:[["app-show-metronome"]],decls:21,vars:4,consts:[["lines","none"],[1,"ion-text-center",2,"padding","0"],[4,"ngIf"],[1,"ion-no-border"],["color","secondary",3,"click"],["name","arrow-back"],["name","play"],["name","stop"],[1,"container"],["class","bpmClass",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"bpmClass"],["class","ball",3,"background","height","width","left","top",4,"ngFor","ngForOf"],[1,"ball"],["class","circumpherence",3,"border","height","width","left","top",4,"ngFor","ngForOf"],[1,"circumpherence"]],template:function(t,e){1&t&&(d.Mb(0,"ion-header"),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-item",0),d.Mb(3,"ion-title",1),d.oc(4),d.Xb(5,"translate"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(6,"ion-content"),d.mc(7,M,4,2,"ng-container",2),d.Lb(),d.Mb(8,"ion-footer",3),d.Mb(9,"ion-toolbar"),d.Mb(10,"ion-grid"),d.Mb(11,"ion-row"),d.Mb(12,"ion-col"),d.Mb(13,"ion-button",4),d.Ub("click",function(){return e.metronome.runMetronome("stop"),e.closeModal()}),d.Ib(14,"ion-icon",5),d.Lb(),d.Lb(),d.Mb(15,"ion-col"),d.Mb(16,"ion-button",4),d.Ub("click",function(){return e.metronome.runMetronome("start"),e.metronome.refreshActualBpm()}),d.Ib(17,"ion-icon",6),d.Lb(),d.Lb(),d.Mb(18,"ion-col"),d.Mb(19,"ion-button",4),d.Ub("click",function(){return e.metronome.runMetronome("pause")}),d.Ib(20,"ion-icon",7),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.xb(4),d.qc(" ",d.Yb(5,2,"home.metronome")," "),d.xb(3),d.bc("ngIf",e.metronome))},directives:[r.q,r.M,r.t,r.K,r.l,a.i,r.o,r.p,r.E,r.k,r.d,r.r,a.h,r.J],pipes:[u.c],styles:["ion-content[_ngcontent-%COMP%]{--overflow:hidden}ion-col[_ngcontent-%COMP%]{text-align:center}.ball[_ngcontent-%COMP%]{border-radius:50%;position:absolute;max-width:40px;max-height:40px;z-index:2;border:1px solid grey}.circumpherence[_ngcontent-%COMP%]{border:1px solid #000;height:100px;border-radius:50%;position:absolute;width:100px}.container[_ngcontent-%COMP%]{padding-top:5%}.bpmClass[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center}.bpmClass[_ngcontent-%COMP%]{width:20vmin;height:12vmin;border-radius:5px;border:2px solid grey}"]}),k),L=o("90kD");function w(t,e){if(1&t&&(d.Mb(0,"ion-text"),d.oc(1," BPM "),d.Ib(2,"br"),d.oc(3),d.Lb()),2&t){var n=d.Wb(3);d.xb(3),d.qc(" ",n.metronome.data.bpm," ")}}function y(t,e){if(1&t&&(d.Mb(0,"ion-text"),d.oc(1," TAP "),d.Ib(2,"br"),d.oc(3),d.Lb()),2&t){var n=d.Wb(3);d.xb(3),d.qc(" ",n.metronome.data.bpm," ")}}function I(t,e){if(1&t&&(d.Mb(0,"div",34),d.mc(1,w,4,1,"ion-text",6),d.mc(2,y,4,1,"ion-text",6),d.Lb()),2&t){var n=d.Wb(2);d.xb(1),d.bc("ngIf",!n.metronome.data.timer.active),d.xb(1),d.bc("ngIf",n.metronome.data.timer.active)}}function B(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-row",24),d.Mb(1,"ion-col",35),d.Mb(2,"ion-text"),d.oc(3),d.Xb(4,"translate"),d.Lb(),d.Lb(),d.Mb(5,"ion-col",36),d.Mb(6,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb(2).metronome.modSettings("final","remove")}),d.Ib(7,"ion-icon",19),d.Lb(),d.Lb(),d.Mb(8,"ion-col",37),d.Mb(9,"ion-text"),d.oc(10),d.Lb(),d.Lb(),d.Mb(11,"ion-col",38),d.Mb(12,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb(2).metronome.modSettings("final","add")}),d.Ib(13,"ion-icon",12),d.Lb(),d.Lb(),d.Lb()}if(2&t){var i=d.Wb(2);d.xb(3),d.qc("",d.Yb(4,2,"metronome.finalbpm"),":"),d.xb(7),d.pc(i.metronome.data.finalBpm)}}function C(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-row",24),d.Mb(1,"ion-col",35),d.Mb(2,"ion-text"),d.oc(3),d.Xb(4,"translate"),d.Lb(),d.Lb(),d.Mb(5,"ion-col",36),d.Mb(6,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb(2).metronome.modSettings("step","remove")}),d.Ib(7,"ion-icon",19),d.Lb(),d.Lb(),d.Mb(8,"ion-col",37),d.Mb(9,"ion-text"),d.oc(10),d.Lb(),d.Lb(),d.Mb(11,"ion-col",38),d.Mb(12,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb(2).metronome.modSettings("step","add")}),d.Ib(13,"ion-icon",12),d.Lb(),d.Lb(),d.Lb()}if(2&t){var i=d.Wb(2);d.xb(3),d.qc("",d.Yb(4,2,"metronome.step"),":"),d.xb(7),d.pc(i.metronome.data.stepBpm)}}function W(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-row",39),d.Mb(1,"ion-col",35),d.Mb(2,"ion-text"),d.oc(3),d.Xb(4,"translate"),d.Lb(),d.Lb(),d.Mb(5,"ion-col",36),d.Mb(6,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb(2).metronome.modSettings("measures","remove")}),d.Ib(7,"ion-icon",19),d.Lb(),d.Lb(),d.Mb(8,"ion-col",37),d.Mb(9,"ion-text"),d.oc(10),d.Lb(),d.Lb(),d.Mb(11,"ion-col",38),d.Mb(12,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb(2).metronome.modSettings("measures","add")}),d.Ib(13,"ion-icon",12),d.Lb(),d.Lb(),d.Lb()}if(2&t){var i=d.Wb(2);d.xb(3),d.qc("",d.Yb(4,2,"metronome.measures"),":"),d.xb(7),d.pc(i.metronome.data.measures)}}function O(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-col",44),d.Mb(1,"ion-icon",45),d.Ub("click",function(t){d.gc(n);var e=d.Wb().$implicit;return d.Wb(2).metronome.toggleTrackOptions(t,e)}),d.Lb(),d.Lb()}}function T(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-col",44),d.Mb(1,"ion-icon",46),d.Ub("click",function(t){d.gc(n);var e=d.Wb().$implicit;return d.Wb(2).metronome.toggleTrackOptions(t,e)}),d.Lb(),d.Lb()}}function P(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-row",40),d.Mb(1,"ion-col",35),d.Mb(2,"ion-text"),d.oc(3),d.Xb(4,"translate"),d.Lb(),d.Lb(),d.Mb(5,"ion-col",36),d.Mb(6,"ion-button",18),d.Ub("click",function(){d.gc(n);var t=d.Wb().$implicit;return d.Wb(2).metronome.changeTrackOptions("color","remove",t)}),d.Ib(7,"ion-icon",47),d.Lb(),d.Lb(),d.Mb(8,"ion-col",37),d.Ib(9,"div",48),d.Lb(),d.Mb(10,"ion-col",38),d.Mb(11,"ion-button",18),d.Ub("click",function(){d.gc(n);var t=d.Wb().$implicit;return d.Wb(2).metronome.changeTrackOptions("color","add",t)}),d.Ib(12,"ion-icon",49),d.Lb(),d.Lb(),d.Lb()}if(2&t){var i=d.Wb().$implicit;d.xb(3),d.qc("",d.Yb(4,3,"metronome.color"),":"),d.xb(6),d.kc("background-color",i.color)}}function F(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-row",40),d.Mb(1,"ion-col",35),d.Mb(2,"ion-text"),d.oc(3),d.Xb(4,"translate"),d.Lb(),d.Lb(),d.Mb(5,"ion-col",36),d.Mb(6,"ion-button",18),d.Ub("click",function(){d.gc(n);var t=d.Wb().$implicit;return d.Wb(2).metronome.changeTrackOptions("sound","remove",t)}),d.Ib(7,"ion-icon",47),d.Lb(),d.Lb(),d.Mb(8,"ion-col",37),d.Mb(9,"ion-text"),d.oc(10),d.Lb(),d.Lb(),d.Mb(11,"ion-col",38),d.Mb(12,"ion-button",18),d.Ub("click",function(){d.gc(n);var t=d.Wb().$implicit;return d.Wb(2).metronome.changeTrackOptions("sound","add",t)}),d.Ib(13,"ion-icon",49),d.Lb(),d.Lb(),d.Lb()}if(2&t){var i=d.Wb().$implicit;d.xb(3),d.qc("",d.Yb(4,2,"metronome.sound"),":"),d.xb(7),d.pc(i.sound)}}function U(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-row",40),d.Mb(1,"ion-col"),d.Mb(2,"ion-text"),d.oc(3),d.Xb(4,"translate"),d.Lb(),d.Lb(),d.Mb(5,"ion-col",17),d.Mb(6,"ion-toggle",50),d.Ub("ionChange",function(){d.gc(n);var t=d.Wb().$implicit;return d.Wb(2).metronome.changeTrackOptions("firstbeat","",t)}),d.Lb(),d.Lb(),d.Lb()}if(2&t){var i=d.Wb().$implicit;d.xb(3),d.qc("",d.Yb(4,2,"metronome.firstbeat"),":"),d.xb(3),d.bc("checked",i.changeFirstBeat)}}function D(t,e){if(1&t){var n=d.Nb();d.Kb(0),d.Mb(1,"ion-row",40),d.mc(2,O,2,0,"ion-col",41),d.mc(3,T,2,0,"ion-col",41),d.Mb(4,"ion-col",42),d.Mb(5,"ion-text"),d.oc(6),d.Xb(7,"translate"),d.Lb(),d.Lb(),d.Mb(8,"ion-col",36),d.Mb(9,"ion-button",18),d.Ub("click",function(){d.gc(n);var t=e.$implicit;return d.Wb(2).metronome.modSettings("beat","remove",t)}),d.Ib(10,"ion-icon",19),d.Lb(),d.Lb(),d.Mb(11,"ion-col",37),d.Mb(12,"ion-text"),d.oc(13),d.Lb(),d.Lb(),d.Mb(14,"ion-col",38),d.Mb(15,"ion-button",18),d.Ub("click",function(){d.gc(n);var t=e.$implicit;return d.Wb(2).metronome.modSettings("beat","add",t)}),d.Ib(16,"ion-icon",12),d.Lb(),d.Lb(),d.Lb(),d.mc(17,P,13,5,"ion-row",43),d.mc(18,F,14,4,"ion-row",43),d.mc(19,U,7,4,"ion-row",43),d.Jb()}if(2&t){var i=e.$implicit;d.xb(2),d.bc("ngIf",!i.toggle),d.xb(1),d.bc("ngIf",i.toggle),d.xb(3),d.qc("",d.Yb(7,7,"metronome.beats"),":"),d.xb(7),d.pc(i.beats),d.xb(4),d.bc("ngIf",i.toggle),d.xb(1),d.bc("ngIf",i.toggle),d.xb(1),d.bc("ngIf",i.toggle)}}function z(t,e){if(1&t){var n=d.Nb();d.Mb(0,"ion-grid"),d.Mb(1,"ion-row",16),d.Mb(2,"ion-col",17),d.Mb(3,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb().metronome.modSettings("bpm","remove")}),d.Ib(4,"ion-icon",19),d.Lb(),d.Lb(),d.Mb(5,"ion-col",20),d.Mb(6,"div",21),d.Ub("click",function(){return d.gc(n),d.Wb().metronome.tapBpm()}),d.mc(7,I,3,2,"div",22),d.Lb(),d.Lb(),d.Mb(8,"ion-col",23),d.Mb(9,"ion-button",18),d.Ub("click",function(){return d.gc(n),d.Wb().metronome.modSettings("bpm","add")}),d.Ib(10,"ion-icon",12),d.Lb(),d.Lb(),d.Lb(),d.Mb(11,"ion-row",24),d.Mb(12,"ion-col"),d.Mb(13,"ion-range",25),d.Ub("ngModelChange",function(t){return d.gc(n),d.Wb().sliderValue=t})("ionChange",function(){d.gc(n);var t=d.Wb();return t.metronome.getSlider(t.sliderValue)}),d.Ib(14,"ion-icon",26),d.Ib(15,"ion-icon",27),d.Lb(),d.Lb(),d.Lb(),d.Mb(16,"ion-row",28),d.Ib(17,"ion-col"),d.Lb(),d.Mb(18,"ion-row",24),d.Mb(19,"ion-col"),d.Mb(20,"ion-text"),d.oc(21),d.Xb(22,"translate"),d.Lb(),d.Lb(),d.Mb(23,"ion-col",17),d.Mb(24,"ion-toggle",29),d.Ub("ngModelChange",function(t){return d.gc(n),d.Wb().increase=t})("ionChange",function(){d.gc(n);var t=d.Wb();return t.metronome.toggleIncrease(t.increase)}),d.Lb(),d.Lb(),d.Lb(),d.mc(25,B,14,4,"ion-row",30),d.mc(26,C,14,4,"ion-row",30),d.mc(27,W,14,4,"ion-row",31),d.Mb(28,"ion-row",32),d.Ib(29,"ion-col"),d.Lb(),d.mc(30,D,20,9,"ng-container",33),d.Mb(31,"ion-row",32),d.Ib(32,"ion-col"),d.Lb(),d.Lb()}if(2&t){var i=d.Wb();d.xb(7),d.bc("ngIf",i.metronome),d.xb(6),d.bc("ngModel",i.sliderValue)("value",i.metronome.data.bpm),d.xb(8),d.qc("",d.Yb(22,9,"metronome.increase"),":"),d.xb(3),d.bc("ngModel",i.increase),d.xb(1),d.bc("ngIf",i.increase),d.xb(1),d.bc("ngIf",i.increase),d.xb(1),d.bc("ngIf",i.increase),d.xb(3),d.bc("ngForOf",i.metronome.data.tracks)}}var E,X,S=((E=function(){function e(n,i){t(this,e),this.modalCtrl=n,this.applicationRef=i,this.sliderValue=120,this.increase=!1}return n(e,[{key:"ionViewDidEnter",value:function(){this.metronome=new m(this.applicationRef,document)}},{key:"ngOnInit",value:function(){}},{key:"openMetroModal",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return b.f(),t.next=3,this.modalCtrl.create({component:x,componentProps:{metronome:this.metronome,document:document},cssClass:"fullscreen"});case 3:return(e=t.sent).onDidDismiss().then(function(t){}),t.next=7,e.present();case 7:case"end":return t.stop()}},t,this)}))}},{key:"openModal",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:L.a,componentProps:{pageName:"metronome"},cssClass:"fullscreen"});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}},t,this)}))}}]),e}()).\u0275fac=function(t){return new(t||E)(d.Hb(r.P),d.Hb(d.g))},E.\u0275cmp=d.Bb({type:E,selectors:[["app-metronome"]],decls:22,vars:4,consts:[["id","header"],["slot","start"],["lines","none"],[2,"padding","0"],["name","information-circle-outline","color","medium","size","large",3,"click"],["id","content"],[4,"ngIf"],[1,"center"],["color","secondary",3,"click"],["name","play"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","secondary"],["name","add"],["vertical","bottom","horizontal","start","slot","fixed",3,"click"],["color","danger"],["name","trash"],[1,"ion-align-items-center",2,"padding-top","5%"],[1,"ion-text-right"],["size","small","color","secondary",3,"click"],["name","remove"],[1,"ion-text-center"],[1,"container",3,"click"],["class","bpmClass",4,"ngIf"],[1,"ion-text-left"],[1,"ion-align-items-center"],["min","30","max","300","debounce","15","color","secondary",3,"ngModel","value","ngModelChange","ionChange"],["name","musical-notes","slot","start","size","small"],["name","musical-notes","slot","end"],[2,"border-top","1px solid rgb(184, 184, 184)"],["color","secondary",3,"ngModel","ngModelChange","ionChange"],["class","ion-align-items-center",4,"ngIf"],["style","padding-bottom: 3%;","class","ion-align-items-center",4,"ngIf"],[2,"border-bottom","1px solid rgb(184, 184, 184)"],[4,"ngFor","ngForOf"],[1,"bpmClass"],["size","6.5"],["size","2",1,"ion-text-right"],["size","1.5",1,"ion-text-center"],["size","2",1,"ion-text-left"],[1,"ion-align-items-center",2,"padding-bottom","3%"],[1,"ion-align-items-center",2,"padding-top","3%"],["size","1",4,"ngIf"],["size","5.5"],["style","padding-top: 3%;","class","ion-align-items-center",4,"ngIf"],["size","1"],["name","caret-forward-circle-outline","size","large","color","medium",3,"click"],["name","caret-down-circle-outline","size","large","color","medium",3,"click"],["name","caret-back-outline"],[1,"showColor"],["name","caret-forward-outline"],["color","secondary",3,"checked","ionChange"]],template:function(t,e){1&t&&(d.Mb(0,"ion-header",0),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-buttons",1),d.Ib(3,"ion-menu-button"),d.Lb(),d.Mb(4,"ion-item",2),d.Mb(5,"ion-title",3),d.oc(6),d.Xb(7,"translate"),d.Lb(),d.Mb(8,"ion-icon",4),d.Ub("click",function(){return e.openModal()}),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(9,"ion-content",5),d.mc(10,z,33,11,"ion-grid",6),d.Mb(11,"ion-grid"),d.Mb(12,"ion-row"),d.Mb(13,"ion-col",7),d.Mb(14,"ion-button",8),d.Ub("click",function(){return e.metronome.initializeMetronome(),e.openMetroModal()}),d.Ib(15,"ion-icon",9),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(16,"ion-fab",10),d.Ub("click",function(){return e.metronome.addTrack()}),d.Mb(17,"ion-fab-button",11),d.Ib(18,"ion-icon",12),d.Lb(),d.Lb(),d.Mb(19,"ion-fab",13),d.Ub("click",function(){return e.metronome.removeTrack()}),d.Mb(20,"ion-fab-button",14),d.Ib(21,"ion-icon",15),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.xb(6),d.qc(" ",d.Yb(7,2,"home.metronome")," "),d.xb(4),d.bc("ngIf",e.metronome))},directives:[r.q,r.M,r.e,r.y,r.t,r.K,r.r,r.l,a.i,r.p,r.E,r.k,r.d,r.m,r.n,r.C,r.U,c.d,c.e,r.J,r.L,r.a,a.h],pipes:[u.c],styles:["ion-content[_ngcontent-%COMP%]{height:100%}ion-input[_ngcontent-%COMP%]{text-align:right}ion-text[_ngcontent-%COMP%]{font-size:medium;padding-left:2%;padding-right:2%}.center[_ngcontent-%COMP%]{text-align:center}.showColor[_ngcontent-%COMP%]{margin:0 auto;width:6vmin;height:6vmin;border-radius:50%;border:1px solid #000;background-color:grey}.bpmClass[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:1%;margin:0 auto;width:20vmin;height:12vmin;border-radius:5px;border:2px solid grey}"]}),E),Y=o("tyNb"),$=o("tk/3"),q=o("ZAI4"),A=((X=function e(){t(this,e)}).\u0275mod=d.Fb({type:X}),X.\u0275inj=d.Eb({factory:function(t){return new(t||X)},imports:[[a.b,c.a,r.N,Y.i.forChild([{path:"",component:S},{path:"/show",component:x}]),u.b.forChild({loader:{provide:u.a,useFactory:q.b,deps:[$.a]}})]]}),X)}}])}();