(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{iFnQ:function(t,i,e){"use strict";e.r(i),e.d(i,"NotefinderModule",function(){return z});var o=e("ofXK"),c=e("3Pt+"),s=e("TEn/"),n=e("tyNb"),r=e("mrSG"),b=e("dy81"),l=e("XlTo"),a=e("4WDQ"),h=e("gkyA"),d=e("90kD"),u=e("fXoL"),f=e("sYmb");function g(t,i){if(1&t&&(u.Mb(0,"ion-select-option",10),u.oc(1),u.Xb(2,"musicNotation"),u.Lb()),2&t){const t=i.$implicit;u.bc("value",t),u.xb(1),u.qc(" ",u.Yb(2,2,t),"")}}function m(t,i){if(1&t){const t=u.Nb();u.Mb(0,"ion-col",11),u.Mb(1,"ion-button",12),u.Ub("click",function(){u.gc(t);const e=i.$implicit;return u.Wb().selectTypeTile(e)}),u.oc(2),u.Xb(3,"translate"),u.Lb(),u.Lb()}if(2&t){const t=i.$implicit;u.xb(1),u.bc("color",t.color),u.xb(1),u.qc(" ",u.Yb(3,2,"notefinder."+t.name)," ")}}function p(t,i){if(1&t){const t=u.Nb();u.Mb(0,"ion-col",13),u.Mb(1,"ion-button",12),u.Ub("click",function(){u.gc(t);const e=i.$implicit;return u.Wb().selectGradeTile(e)}),u.oc(2),u.Xb(3,"musicNotation"),u.Lb(),u.Lb()}if(2&t){const t=i.$implicit;u.xb(1),u.bc("color",t.color),u.xb(1),u.qc(" ",u.Yb(3,2,t.name)," ")}}function x(t,i){if(1&t&&(u.Mb(0,"ion-card-subtitle"),u.oc(1),u.Lb()),2&t){const t=u.Wb(2).$implicit,i=u.Wb(2);u.xb(1),u.qc(" notes: ",i.beautify(t.chord.notes,!0)," ")}}function y(t,i){if(1&t&&(u.Mb(0,"ion-card-subtitle"),u.oc(1),u.Xb(2,"musicNotation"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.qc(" ",u.Yb(2,1,t.chord.name)," ")}}function M(t,i){if(1&t){const t=u.Nb();u.Mb(0,"ion-card-header",17),u.Ub("click",function(){u.gc(t);const i=u.Wb().$implicit;return u.Wb(2).toggleCard(i)}),u.Mb(1,"ion-card-title"),u.oc(2),u.Xb(3,"musicNotation"),u.Lb(),u.mc(4,x,2,1,"ion-card-subtitle",9),u.mc(5,y,3,3,"ion-card-subtitle",9),u.Lb()}if(2&t){const t=u.Wb().$implicit,i=u.Wb(2);u.xb(2),u.pc(u.Yb(3,3,t.chord.symbol)),u.xb(2),u.bc("ngIf",t.show&&0!=t.chord.notes.length),u.xb(1),u.bc("ngIf",t.show&&t.chord.name.trim()!=i.key.trim())}}function C(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"musicNotation"),u.Ib(3,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.qc("tonic: ",u.Yb(2,1,t.chord.tonic)," ")}}function L(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"musicNotation"),u.Ib(3,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.qc("root: ",u.Yb(2,1,t.chord.root),"")}}function I(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Ib(2,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit,i=u.Wb(2);u.xb(1),u.qc("intervals: ",i.beautify(t.chord.intervals)," ")}}function k(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"musicNotation"),u.Ib(3,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.qc(" type: ",u.Yb(2,1,t.chord.type)," ")}}function W(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Ib(2,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit,i=u.Wb(2);u.xb(1),u.qc(" aliases: ",i.beautify(t.chord.aliases,!0),"")}}function T(t,i){if(1&t&&(u.Mb(0,"ion-card-content"),u.mc(1,C,4,3,"ion-text",9),u.mc(2,L,4,3,"ion-text",9),u.mc(3,I,3,1,"ion-text",9),u.mc(4,k,4,3,"ion-text",9),u.mc(5,W,3,1,"ion-text",9),u.Lb()),2&t){const t=u.Wb().$implicit;u.xb(1),u.bc("ngIf",t.chord.tonic),u.xb(1),u.bc("ngIf",t.chord.root),u.xb(1),u.bc("ngIf",t.chord.intervals),u.xb(1),u.bc("ngIf",t.chord.type),u.xb(1),u.bc("ngIf",t.chord.aliases)}}function w(t,i){if(1&t&&(u.Mb(0,"ion-card",15),u.mc(1,M,6,5,"ion-card-header",16),u.mc(2,T,6,5,"ion-card-content",9),u.Lb()),2&t){const t=i.$implicit;u.xb(1),u.bc("ngIf",!t.chord.empty),u.xb(1),u.bc("ngIf",t.show)}}function E(t,i){if(1&t&&(u.Kb(0),u.mc(1,w,3,2,"ion-card",14),u.Jb()),2&t){const t=u.Wb();u.xb(1),u.bc("ngForOf",t.chords)}}function $(t,i){if(1&t&&(u.Mb(0,"ion-card-title"),u.oc(1),u.Lb()),2&t){const t=u.Wb(2).$implicit,i=u.Wb(2);u.xb(1),u.qc(" ",i.beautify(t.chord.notes,!0)," ")}}function F(t,i){if(1&t&&(u.Mb(0,"ion-card-subtitle"),u.oc(1),u.Xb(2,"musicNotation"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.qc(" ",u.Yb(2,1,t.chord.name)," ")}}function X(t,i){if(1&t){const t=u.Nb();u.Mb(0,"ion-card-header",17),u.Ub("click",function(){u.gc(t);const i=u.Wb().$implicit;return u.Wb(2).toggleCard(i)}),u.Mb(1,"ion-card-title"),u.oc(2),u.Xb(3,"musicNotation"),u.Lb(),u.mc(4,$,2,1,"ion-card-title",9),u.mc(5,F,3,3,"ion-card-subtitle",9),u.Lb()}if(2&t){const t=u.Wb().$implicit,i=u.Wb(2);u.xb(2),u.pc(u.Yb(3,3,t.chord.symbol)),u.xb(2),u.bc("ngIf",t.show&&0!=t.chord.notes.length),u.xb(1),u.bc("ngIf",t.show&&t.chord.name.trim()!=i.key.trim())}}function N(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"translate"),u.Xb(3,"musicNotation"),u.Ib(4,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.rc("",u.Yb(2,2,"tonic"),": ",u.Yb(3,4,t.chord.tonic)," ")}}function Y(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"translate"),u.Xb(3,"musicNotation"),u.Ib(4,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.rc("",u.Yb(2,2,"root"),": ",u.Yb(3,4,t.chord.root),"")}}function v(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"translate"),u.Ib(3,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit,i=u.Wb(2);u.xb(1),u.rc("",u.Yb(2,2,"intervals"),": ",i.beautify(t.chord.intervals)," ")}}function q(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"translate"),u.Xb(3,"translate"),u.Ib(4,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit;u.xb(1),u.rc(" ",u.Yb(2,2,"type"),": ",u.Yb(3,4,t.chord.type)," ")}}function A(t,i){if(1&t&&(u.Mb(0,"ion-text"),u.oc(1),u.Xb(2,"translate"),u.Ib(3,"br"),u.Ib(4,"br"),u.Lb()),2&t){const t=u.Wb(2).$implicit,i=u.Wb(2);u.xb(1),u.rc(" ",u.Yb(2,2,"aliases"),": ",i.beautify(t.chord.aliases,!0),"")}}function O(t,i){if(1&t){const t=u.Nb();u.Mb(0,"ion-button",19),u.Ub("click",function(){u.gc(t);const i=u.Wb(2).$implicit;return u.Wb(2).playChord(i,"chord")}),u.oc(1),u.Xb(2,"translate"),u.Lb()}2&t&&(u.xb(1),u.qc(" ",u.Yb(2,1,"play_chord")," "))}function U(t,i){if(1&t){const t=u.Nb();u.Mb(0,"ion-button",19),u.Ub("click",function(){u.gc(t);const i=u.Wb(2).$implicit;return u.Wb(2).playChord(i,"arp")}),u.oc(1),u.Xb(2,"translate"),u.Lb()}2&t&&(u.xb(1),u.qc(" ",u.Yb(2,1,"play_arp")," "))}function G(t,i){if(1&t&&(u.Mb(0,"ion-card-content"),u.mc(1,N,5,6,"ion-text",9),u.mc(2,Y,5,6,"ion-text",9),u.mc(3,v,4,4,"ion-text",9),u.mc(4,q,5,6,"ion-text",9),u.mc(5,A,5,4,"ion-text",9),u.mc(6,O,3,3,"ion-button",18),u.mc(7,U,3,3,"ion-button",18),u.Lb()),2&t){const t=u.Wb().$implicit,i=u.Wb(2);u.xb(1),u.bc("ngIf",t.chord.tonic),u.xb(1),u.bc("ngIf",t.chord.root),u.xb(1),u.bc("ngIf",t.chord.intervals),u.xb(1),u.bc("ngIf",t.chord.type),u.xb(1),u.bc("ngIf",t.chord.aliases),u.xb(1),u.bc("ngIf","1"==i.status[0]),u.xb(1),u.bc("ngIf","1"==i.status[0])}}function D(t,i){if(1&t&&(u.Mb(0,"ion-card",15),u.mc(1,X,6,5,"ion-card-header",16),u.mc(2,G,8,7,"ion-card-content",9),u.Lb()),2&t){const t=i.$implicit;u.xb(1),u.bc("ngIf",!t.chord.empty),u.xb(1),u.bc("ngIf",t.show)}}function B(t,i){if(1&t&&(u.Kb(0),u.mc(1,D,3,2,"ion-card",14),u.Jb()),2&t){const t=u.Wb();u.xb(1),u.bc("ngForOf",t.filteredChords)}}let P=(()=>{class t{constructor(t,i,e){this.translate=t,this.global=i,this.modalCtrl=e,this.musicNotationPipe=new h.a(this.global),this.scale=[],this.typesTiles=[],this.gradesTiles=[],this.key="",this.type="",this.grade="",this.chords=[],this.filteredChords=[],this.status="",this.serVal="",this.synth=new l.c({urls:{A2:"pianoA2.wav"},baseUrl:"assets/instruments/"}).toDestination()}ionViewDidEnter(){this.selectInstrument()}selectInstrument(){this.synth="",console.log(this.global.instrument),this.synth=new l.c({urls:{A2:this.global.instrument+"A2.wav"},baseUrl:"assets/instruments/"}).toDestination()}checkStatus(){this.status="",this.status=" "==this.key||""==this.key?this.status+"0":this.status+"1",this.status=this.typesTiles[0].selected||this.typesTiles[1].selected||this.typesTiles[2].selected||this.typesTiles[3].selected?this.status+"1":this.status+"0",this.status=this.gradesTiles[0].selected||this.gradesTiles[1].selected||this.gradesTiles[2].selected||this.gradesTiles[3].selected||this.gradesTiles[4].selected?this.status+"1":this.status+"0",console.log(this.status)}pushAll(){this.chords=[];let t=this.key.trim()+"major";this.pushExtendedChords(t),t=this.key.trim()+"min",this.pushExtendedChords(t),t=this.key.trim()+"dim",this.pushExtendedChords(t),t=this.key.trim()+"aug",this.pushExtendedChords(t)}pushExtendedChords(t){let i=b.a.extended(t);this.chords.push({chord:b.a.get(t),show:!1}),i.forEach(t=>{this.chords.push({chord:b.a.get(t),show:!1})})}selectTypeTile(t){this.type=t.name,this.toggleTypeTile(t),this.colorTiles(),this.searchChord(),console.log(this.type)}selectGradeTile(t){this.grade=t.name,this.toggleGradeTile(t),this.colorTiles(),this.searchChord(),console.log(this.type)}toggleTypeTile(t){0==t.selected?(this.typesTiles.forEach(t=>{t.selected=!1}),t.selected=!0):t.selected=!1}toggleGradeTile(t){0==t.selected?(this.gradesTiles.forEach(t=>{t.selected=!1}),t.selected=!0):t.selected=!1}colorTiles(){this.typesTiles.forEach(t=>{t.color=t.selected?"secondary":"light"}),this.gradesTiles.forEach(t=>{t.color=t.selected?"secondary":"light"})}gradeFilter(){if("1"==this.status[2]){let t=[];this.chords.forEach(i=>{i.chord.symbol.includes(this.grade)&&t.push(i)}),this.chords=t}}searchChord(){this.checkStatus();let t=this.key.trim()+this.type;switch(this.chords=[],this.status){case"000":""==this.key&&(this.chords=[],this.filteredChords=[]);break;case"010":case"110":case"011":case"111":this.pushExtendedChords(t),this.gradeFilter(),this.getChords();break;default:console.log("default"),this.pushAll(),this.gradeFilter(),this.getChords()}console.log(t,this.chords)}getChords(t){t&&(this.serVal=t.target.value);let i=[];this.chords.forEach(t=>{t.chord.symbol.toLowerCase().trim().includes(this.serVal)?i.push(t):t.chord.aliases.forEach(e=>{e.toLowerCase().trim().includes(this.serVal)&&i.push(t)})}),this.filteredChords=i,console.log(this.serVal,this.filteredChords)}toggleCard(t){t.show=0==t.show}playChord(t,i){let e=["Cb","C","C#","Db","D","D#","Eb","E","E#","Fb","F","F#","Gb","G","G#","Ab","A","A#","Bb","B","B#"],o=t.chord.notes.map(function(i,o){if(i.includes("##")){let t=e.indexOf(i.slice(0,-1));i=e[(t+2)%e.length]}if(i.includes("bb")){let t=e.indexOf(i);i=e[(t-2)%e.length]}return parseInt(t.chord.intervals[o],10)<=7?i+"3":i+"4"});console.log(o),"arp"==i?o.forEach((t,i)=>{this.synth.triggerAttackRelease(t,"4n",l.e()+i/2)}):"chord"==i&&this.synth.triggerAttackRelease(o,"2n")}beautify(t,i=!0){let e="";switch(i){case!0:if(t)return t.forEach((i,o)=>{0!=o&&o!=t.length&&""!=i?e=e+", "+this.musicNotationPipe.transform(i):e+=this.musicNotationPipe.transform(i)}),e;break;case!1:return t.forEach((i,o)=>{0!=o&&o!=t.length&&""!=i?e=e+", "+i:e+=i}),e}}ngOnInit(){this.scale=["","Cb","C","C#","Db","D","D#","Eb","E","E#","Fb","F","F#","Gb","G","G#","Ab","A","A#","Bb","B","B#"],["major","min","dim","aug"].forEach(t=>{this.typesTiles.push({name:t,color:"light",selected:!1})}),["5","7","9","11","13"].forEach(t=>{this.gradesTiles.push({name:t,color:"light",selected:!1})})}openModal(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:d.a,componentProps:{pageName:"notefinder"},cssClass:"fullscreen"});yield t.present()})}}return t.\u0275fac=function(i){return new(i||t)(u.Hb(f.d),u.Hb(a.a),u.Hb(s.P))},t.\u0275cmp=u.Bb({type:t,selectors:[["app-notefinder"]],decls:24,vars:12,consts:[["slot","start"],["lines","none"],[2,"padding","0","text-align","left"],["name","information-circle-outline","color","medium","size","large","slot","end",3,"click"],["slot","end","color","light","interface","popover",3,"ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["size","3",4,"ngFor","ngForOf"],["size","12/5",4,"ngFor","ngForOf"],["animated","true","color","light",1,"button-tiles",3,"placeholder","ionChange"],[4,"ngIf"],[3,"value"],["size","3"],["expand","block",1,"button-tiles",3,"color","click"],["size","12/5"],["style","border: 1px solid grey;",4,"ngFor","ngForOf"],[2,"border","1px solid grey"],[3,"click",4,"ngIf"],[3,"click"],["color","secondary",3,"click",4,"ngIf"],["color","secondary",3,"click"]],template:function(t,i){1&t&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-buttons",0),u.Ib(3,"ion-menu-button"),u.Lb(),u.Mb(4,"ion-item",1),u.Mb(5,"ion-title",2),u.oc(6),u.Xb(7,"translate"),u.Lb(),u.Mb(8,"ion-icon",3),u.Ub("click",function(){return i.openModal()}),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(9,"ion-content"),u.Mb(10,"ion-item"),u.Mb(11,"ion-select",4),u.Ub("ngModelChange",function(t){return i.key=t})("ionChange",function(){return i.searchChord()}),u.mc(12,g,3,4,"ion-select-option",5),u.Lb(),u.Lb(),u.Mb(13,"ion-grid"),u.Mb(14,"ion-row"),u.mc(15,m,4,4,"ion-col",6),u.Lb(),u.Lb(),u.Mb(16,"ion-grid"),u.Mb(17,"ion-row"),u.mc(18,p,4,4,"ion-col",7),u.Lb(),u.Lb(),u.Mb(19,"ion-searchbar",8),u.Ub("ionChange",function(t){return i.getChords(t)}),u.Xb(20,"translate"),u.Lb(),u.Ib(21,"br"),u.mc(22,E,2,1,"ng-container",9),u.mc(23,B,2,1,"ng-container",9),u.Lb()),2&t&&(u.xb(6),u.qc(" ",u.Yb(7,8,"home.notefinder")," "),u.xb(5),u.bc("ngModel",i.key),u.xb(1),u.bc("ngForOf",i.scale),u.xb(3),u.bc("ngForOf",i.typesTiles),u.xb(3),u.bc("ngForOf",i.gradesTiles),u.xb(1),u.bc("placeholder",u.Yb(20,10,"notefinder.search")),u.xb(3),u.bc("ngIf",0==i.filteredChords.length),u.xb(1),u.bc("ngIf",i.filteredChords.length>0))},directives:[s.q,s.M,s.e,s.y,s.t,s.K,s.r,s.l,s.G,s.U,c.d,c.e,o.h,s.p,s.E,s.F,s.V,o.i,s.H,s.k,s.d,s.f,s.h,s.j,s.i,s.g,s.J],pipes:[f.c,h.a],styles:[".button-tiles[_ngcontent-%COMP%]{text-transform:none;background-color:var(--ion-color-light-tint);max-width:94%;margin:3%;padding:0;--border-radius:5px;border-radius:5px;border:1px solid grey}"]}),t})();var V=e("99Un"),H=e("tk/3"),j=e("HU+/");let z=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(i){return new(i||t)},imports:[[o.b,c.a,s.N,j.a,f.b.forChild({loader:{provide:f.a,useFactory:V.HttpLoaderFactory,deps:[H.a]}}),n.i.forChild([{path:"",component:P}])]]}),t})()}}]);