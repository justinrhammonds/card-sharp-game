(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],d=0,g=[];d<i.length;d++)o=i[d],s[o]&&g.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(g.length)g.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/card-sharp-game/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},1784:function(e,t,a){},"24ea":function(e,t,a){"use strict";var n=a("881c"),s=a.n(n);s.a},2634:function(e,t,a){},"28c6":function(e,t,a){},"2fd9":function(e,t,a){e.exports=a.p+"img/diamonds.67e9b04f.svg"},"2ff8":function(e,t,a){},3076:function(e,t,a){"use strict";var n=a("28c6"),s=a.n(n);s.a},"31e8":function(e,t,a){var n={"./clubs.svg":"bf20","./diamonds.svg":"2fd9","./hearts.svg":"6e1a","./spades.svg":"a3b0"};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="31e8"},"32ae":function(e,t,a){"use strict";var n=a("4687"),s=a.n(n);s.a},4254:function(e,t,a){},4687:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("site-nav"),a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"site-nav"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"title"},[a("span",{staticClass:"main-title"},[e._v("Card")]),a("span",{staticClass:"main-title"},[e._v("Sharp")]),a("span",{staticClass:"sub-title"},[e._v("Solo")])])]),a("ul",{staticClass:"nav-menu"},[a("li",[a("router-link",{attrs:{to:"/tutorial"}},[e._v("Tutorial")])],1),a("li",[a("router-link",{attrs:{to:"/play",go:""}},[e._v("Play Game")])],1)])],1)},i=[],c={name:"site-nav"},u=c,l=(a("24ea"),a("2877")),d=Object(l["a"])(u,o,i,!1,null,"48d41213",null),g=d.exports,f={name:"app",components:{SiteNav:g}},m=f,p=(a("034f"),Object(l["a"])(m,s,r,!1,null,null,null)),v=p.exports,h=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"game"}},[a("hud"),a("game-row"),a("game-recap")],1)},b=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hud"},[a("ul",[a("li",{ref:"tries-value",staticClass:"total-tries"},[e.tries>4?a("span",[e._v("\n        "+e._s(e.tries)+"\n        "),a("font-awesome-icon",{attrs:{icon:"heart"}})],1):a("span",e._l(e.tries,function(e,t){return a("font-awesome-icon",{key:t,attrs:{icon:"heart"}})}),1)]),a("li",{ref:"score-value",staticClass:"total-score"},[e._v(e._s(e.score))]),a("li",{staticClass:"bonus-container"},[a("div",[e._v("\n        Streak Bonus:\n        "),a("span",{staticClass:"streak-bonus"},[e._v(e._s(e.streakBonus))])]),a("div",[e._v("\n        Swap Penalty:\n        "),a("span",{staticClass:"swap-penalty"},[e._v(e._s(-1*e.swapPenalty))])])])])])},_=[],y=a("cebc"),C=a("2f62"),k={name:"hud",computed:Object(y["a"])({},Object(C["d"])(["score","tries","settings","streakBonus","swapPenalty"])),watch:{score:function(e,t){t<e&&this.toggleHudHighlight(this.$refs["score-value"],"higher"),t>e&&0!==e&&this.toggleHudHighlight(this.$refs["score-value"],"lower")},tries:function(e,t){t<e&&!(e===this.settings.startingTries&&t<=0)&&this.toggleHudHighlight(this.$refs["tries-value"],"higher"),t>e&&this.toggleHudHighlight(this.$refs["tries-value"],"lower")}},methods:{toggleHudHighlight:function(e,t){e.classList.toggle(t),setTimeout(function(){e.classList.toggle(t)},1e3)}}},j=k,O=(a("b8a8"),Object(l["a"])(j,S,_,!1,null,"bcf6cb4a",null)),x=O.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-row"},[a("div",{staticClass:"row-container"},e._l(e.stages,function(e,t){return a("row-stage",{key:t,attrs:{"row-stage":e}},[a("game-controls")],1)}),1)])},E=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row-stage"},[e.isBonusStage(e.rowStage.id)?a("div",{staticClass:"bonus-marker"},[a("font-awesome-icon",{attrs:{icon:"star"}}),a("h3",[e._v("Bonus")]),a("font-awesome-icon",{attrs:{icon:"star"}})],1):e._e(),e.activeStageIndex===e.rowStage.id?e._t("default"):e._e(),a("card",{attrs:{revealed:e.isRevealed,suit:e.rowStage.card.suit,"face-value":e.rowStage.card.name}}),e.isBonusStage(e.rowStage.id)?a("div",{staticClass:"bonus-marker"},[a("font-awesome-icon",{attrs:{icon:"star"}}),a("h3",[e._v("Bonus")]),a("font-awesome-icon",{attrs:{icon:"star"}})],1):e._e()],2)},T=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("img",{staticClass:"card",attrs:{src:e.path}})},L=[],P={name:"card",props:{revealed:{default:!1,type:Boolean},suit:{type:String},faceValue:{type:String}},computed:{path:function(){var e=a("31e8")("./".concat(this.suit,".svg"));return this.revealed?"".concat(e,"#view-").concat(this.faceValue):"".concat(e,"#view-card-back")}}},$=P,G=(a("d209"),Object(l["a"])($,D,L,!1,null,"75b655cc",null)),A=G.exports,H={name:"row-stage",components:{Card:A},props:{rowStage:{type:Object}},computed:Object(y["a"])({},Object(C["d"])(["activeStageIndex"]),Object(C["c"])(["isBonusStage"]),{isRevealed:function(){return this.rowStage.id<=this.activeStageIndex}})},M=H,W=(a("5a0c"),Object(l["a"])(M,I,T,!1,null,"663d6620",null)),N=W.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-controls"},[e.guessWasIncorrect?a("div",{staticClass:"incorrect-marker"},[a("svg",{attrs:{viewBox:"0 0 1000 1000"}},[a("path",{staticStyle:{fill:"red"},attrs:{d:"M 0 200, L 200 0, L 500 300, L 800 0, L 1000 200, L 700 500, L 1000 800, L 800 1000, L 500 700, L 200 1000, L 0 800, L 300 500"}})])]):e._e(),e.isNotBonusStage&&e.guessWasCorrect?a("button",{staticClass:"control-arrow up",on:{click:function(t){return e.predict("higher")}}},[a("svg",{attrs:{viewBox:"0 0 600 600"}},[a("path",{staticStyle:{fill:"lime"},attrs:{d:"M 300 0, L 600 400, L 400 400, L 400 600, L 200 600, L 200 400, L 0 400"}})])]):e._e(),e.isNotBonusStage&&e.guessWasCorrect?a("button",{staticClass:"control-arrow down",on:{click:function(t){return e.predict("lower")}}},[a("svg",{attrs:{viewBox:"0 0 600 600"}},[a("path",{staticStyle:{fill:"lime"},attrs:{d:"M 200 0, L 400 0, L 400 200, L 600 200, L 300 600, L 0 200, L 200 200"}})])]):e._e(),e.swapAvailable&&e.guessWasCorrect?a("button",{staticClass:"ribbon swap blue",on:{click:e.swapCardForPenalty}},[a("span",{staticClass:"ribbon-content"},[e._v("Swap")])]):e._e(),e.bonusStageWon&&e.guessWasCorrect?a("button",{staticClass:"ribbon bonus green",on:{click:e.awardBonus}},[a("span",{staticClass:"ribbon-content"},[e._v("Bonus")])]):e._e(),e.isJokerBonus?a("button",{staticClass:"ribbon bonus green",on:{click:e.awardBonus}},[a("span",{staticClass:"ribbon-content"},[e._v("Bonus")])]):e._e()])},J=[],V={name:"game-controls",computed:Object(y["a"])({},Object(C["c"])(["isBonusStage","currentStage"]),{guessWasCorrect:function(){return!this.guessWasIncorrect},guessWasIncorrect:function(){return!1===this.currentStage.evaluation},isNotBonusStage:function(){return!this.isBonusStage(this.currentStage.id)&&!this.isJokerCard},bonusStageWon:function(){return this.isBonusStage(this.currentStage.id)&&this.guessWasCorrect},swapAvailable:function(){return this.currentStage.swaps>0&&!this.isJokerCard},isJokerBonus:function(){return 0===this.currentStage.card.value&&!this.isBonusStage(this.currentStage.id)}}),methods:Object(y["a"])({},Object(C["b"])(["swapCardForPenalty","awardBonus","advanceStageAndEvaluate"]),{predict:function(e){this.advanceStageAndEvaluate({prediction:e})}})},R=V,q=(a("b078"),Object(l["a"])(R,F,J,!1,null,"02876db9",null)),U=q.exports,Y={name:"game-row",components:{RowStage:N,GameControls:U},computed:Object(y["a"])({},Object(C["d"])(["stages"])),methods:Object(y["a"])({},Object(C["b"])(["shuffleAndDeal"])),created:function(){this.shuffleAndDeal()}},z=Y,K=(a("73ed"),Object(l["a"])(z,B,E,!1,null,"1b447b29",null)),Q=K.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{directives:[{name:"show",rawName:"v-show",value:e.gameEnded,expression:"gameEnded"}],on:{close:e.continueNewGame},scopedSlots:e._u([{key:"modal-header",fn:function(){return[a("h2",{staticClass:"recap-title"},[e._v("Game Over")])]},proxy:!0},{key:"modal-body",fn:function(){return[a("div",{staticClass:"recap-content"},[a("div",{staticClass:"score-title"},[e._v("Final Score")]),a("div",{staticClass:"score-content"},[e._v(e._s(e.finalScore))])])]},proxy:!0}])})},Z=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"modal",attrs:{id:"simpleModal"}},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"m-header"},[e._t("modal-header"),a("span",{staticClass:"close-btn",on:{click:e.closeModal}},[e._v("×")])],2),a("div",{staticClass:"m-body"},[e._t("modal-body")],2),a("div",{staticClass:"m-footer"},[e._t("modal-footer")],2)])])])},te=[],ae={name:"modal",methods:{closeModal:function(){this.$emit("close")},outsideClick:function(e){var t=document.querySelector(".modal");e.target===t&&this.$emit("close")}},created:function(){window.addEventListener("click",this.outsideClick)}},ne=ae,se=(a("32ae"),Object(l["a"])(ne,ee,te,!1,null,"27ebbbab",null)),re=se.exports,oe={name:"game-recap",components:{Modal:re},computed:Object(y["a"])({},Object(C["d"])(["gameEnded","finalScore"])),methods:Object(y["a"])({},Object(C["b"])(["continueNewGame"]))},ie=oe,ce=(a("d2b7"),Object(l["a"])(ie,X,Z,!1,null,"eb13f2cc",null)),ue=ce.exports,le={name:"game",components:{Hud:x,GameRow:Q,GameRecap:ue}},de=le,ge=(a("3076"),Object(l["a"])(de,w,b,!1,null,"36e469f8",null)),fe=ge.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home-page"},[e._m(0),e._m(1),a("router-link",{staticClass:"menu-button",attrs:{tag:"div",to:"/tutorial"}},[e._v("View Tutorial")]),a("router-link",{staticClass:"menu-button",attrs:{tag:"div",to:"/play",go:""}},[e._v("Start New Game")])],1)},pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Card Sharp Solo is a card game based on the classic TV game show "),a("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Card_Sharks"}},[e._v("Card Sharks")]),e._v(". The basic premise of the game is to guess whether the next card in a row, once revealed, will be higher or lower than the previous card. Guess correctly and you earn points as you progress through the row. Guess incorrectly and you start over from the beginning of a new row. The TV version pits two contestants against one another with the goal of being the first to complete the row. Unlike in the TV version, Card Sharp Solo is played by one person with the goal of achieving a high score until there are no attempts remaining. I hope you enjoy the game!")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("This web application is for "),a("em",[e._v("demo purposes")]),e._v(" only, and was developed using the "),a("a",{attrs:{target:"_blank",href:"https://vuejs.org/"}},[e._v("VueJS framework")]),e._v(". The application code is open source and available to view on "),a("a",{attrs:{target:"_blank",href:"https://github.com/justinrhammonds/card-sharp-game"}},[e._v("GitHub")]),e._v(".")])}],ve={name:"home"},he=ve,we=(a("b518"),Object(l["a"])(he,me,pe,!1,null,"fb8305da",null)),be=we.exports,Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("instructions")},_e=[],ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"instructions"},[a("p",[e._v("The game begins with six cards dealt in a row. The first card is dealt face up, and the last five are dealt face down. You earn points and progress through each row by correctly guessing whether the next card will be higher or lower. Each time you guess correctly, the amount of points you will earn increases. When you guess incorrectly, the board and the streak bonus resets, and you start over on a new row.")]),a("div",{staticClass:"card-order"},[a("h3",{staticClass:"title-heading"},[e._v("Order of Cards")]),a("div",{staticClass:"order-grouping"},e._l(this.demoCards,function(e,t){return a("card",{key:t,attrs:{revealed:!0,suit:"hearts","face-value":e}})}),1)]),a("p",[e._v("If you don't like a card, you can swap it for a new one. You can only do this once per card, and you cannot swap when there's only one card (the bonus card) remaining. Be careful though. Each time you swap, the scoring penalty will become more severe.")]),a("p",[e._v("The last card in every row is a bonus card. Correctly guessing this card earns you an extra heart! Even better, you don't lose a heart when you guess incorrectly! One more thing: there are two jokers in the deck. If a joker card is revealed at any point you will automatically win an extra heart!")]),a("p",[e._v("At the start of a new game, you have three hearts. You lose one heart for each incorrect guess. When you have no more hearts remaining and make an incorrect guess, the game is over.")])])},Ce=[],ke={name:"instructions",components:{Card:A},data:function(){return{demoCards:["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"]}}},je=ke,Oe=(a("b939"),Object(l["a"])(je,ye,Ce,!1,null,"7d1a1648",null)),xe=Oe.exports,Be={name:"tutorial",components:{Instructions:xe}},Ee=Be,Ie=Object(l["a"])(Ee,Se,_e,!1,null,null,null),Te=Ie.exports;n["a"].use(h["a"]);var De=new h["a"]({routes:[{path:"/",name:"Home",component:be},{path:"/play",name:"Play",component:fe},{path:"/tutorial",name:"Tutorial",component:Te}]}),Le=(a("55dd"),a("ac6a"),a("75fc")),Pe=a("a4bb"),$e=a.n(Pe),Ge=[],Ae=["hearts","diamonds","spades","clubs"],He={two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,jack:11,queen:12,king:13,ace:14};Ae.forEach(function(e){$e()(He).forEach(function(t){Ge.push({suit:e,name:t,value:He[t]})})});var Me=[{suit:"hearts",name:"red-joker",value:0},{suit:"spades",name:"black-joker",value:0}];Ge=[].concat(Object(Le["a"])(Ge),Me);for(var We=Ge,Ne=[],Fe=6,Je=0;Je<Fe;Je++)Ne.push({id:Je,swaps:Je<=Fe-2?1:0,card:null});var Ve=Ne,Re=[{id:"1234-1234-1234",player:"jhamm_01",score:3e3,date:new Date(2019,3,23)},{id:"2345-2345-2345",player:"jhamm_02",score:3050,date:new Date(2019,3,24)},{id:"3456-3456-3456",player:"jhamm_03",score:3100,date:new Date(2019,3,25)},{id:"4567-4567-4567",player:"jhamm_04",score:3150,date:new Date(2019,3,26)},{id:"5678-5678-5678",player:"jhamm_05",score:3200,date:new Date(2019,3,27)},{id:"6789-6789-6789",player:"jhamm_06",score:3250,date:new Date(2019,3,28)},{id:"7890-7890-7890",player:"jhamm_07",score:3250,date:new Date(2019,3,29)},{id:"8901-8901-8901",player:"jhamm_08",score:3300,date:new Date(2019,3,30)},{id:"9012-9012-9012",player:"jhamm_09",score:3350,date:new Date(2019,3,31)},{id:"0123-0123-0123",player:"jhamm_10",score:3400,date:new Date(2019,4,1)}],qe=Re;n["a"].use(C["a"]);var Ue=function(){return{cards:We,stages:Ve,score:0,tries:3,swapCardIndex:6,activeStageIndex:0,gameEnded:!1,finalScore:null,settings:{startingScore:0,startingTries:3,triesAmount:1,baseStreakBonus:100,baseSwapPenalty:50},leaderboard:qe,personalBestScore:0,streakBonus:100,swapPenalty:50}},Ye={getCard:function(e){return function(t){return e.cards[t]}},getStage:function(e){return function(t){return e.stages[t]}},currentStage:function(e){return e.stages[e.activeStageIndex]},isBonusStage:function(e){return function(t){return t===e.stages.length-1}}},ze={awardBonus:function(e){var t=e.commit,a=e.state,n=e.getters,s=e.dispatch;t("updateTries",{increaseOrDecrease:1,amount:a.settings.triesAmount}),t("updateScore",{increaseOrDecrease:1,amount:a.streakBonus}),t("setStreakBonus",{amount:a.streakBonus+a.settings.baseStreakBonus}),n.isBonusStage(n.currentStage.id)?s("flipTable",{delay:0}):s("swapCard")},flipTable:function(e,t){var a=e.commit,n=e.dispatch,s=t.delay;setTimeout(function(){a("setActiveStageIndex",{amount:0}),a("setSwapCardIndex",{amount:6}),a("resetStages"),n("shuffleAndDeal")},s)},shuffleAndDeal:function(e){var t=e.commit;t("shuffleCards"),t("dealStages")},recalculateScore:function(e,t){var a=e.commit,n=e.state,s=t.increaseOrDecrease,r=t.isSwap;r&&n.score>0?(a("updateScore",{increaseOrDecrease:s,amount:n.swapPenalty}),a("setSwapPenalty",{amount:n.swapPenalty+n.settings.baseSwapPenalty})):!r&&s>0&&n.score>=0&&(a("updateScore",{increaseOrDecrease:s,amount:n.streakBonus}),a("setStreakBonus",{amount:n.streakBonus+n.settings.baseStreakBonus}))},endGame:function(e){var t=e.commit,a=e.state;t("setGameEnded",{isEnded:!0}),t("setFinalScore",{amount:a.score})},continueNewGame:function(e){var t=e.commit;t("setGameEnded",{isEnded:!1}),setTimeout(t("resetGame"),1e3)},recalculateTries:function(e,t){var a=e.commit,n=e.dispatch,s=e.state,r=t.increaseOrDecrease;0===s.tries&&r<0?n("endGame"):a("updateTries",{increaseOrDecrease:r,amount:s.settings.triesAmount})},swapCardForPenalty:function(e){var t=e.commit,a=e.dispatch,n=e.state,s=e.getters;t("setStageCard",{stageId:s.currentStage.id,card:s.getCard(n.swapCardIndex)}),t("setSwapCardIndex",{amount:n.swapCardIndex+1}),t("decrementStageSwaps",{stageId:s.currentStage.id}),a("recalculateScore",{increaseOrDecrease:-1,isSwap:!0})},swapCard:function(e){var t=e.commit,a=e.state,n=e.getters;t("setStageCard",{stageId:n.currentStage.id,card:n.getCard(a.swapCardIndex)}),t("setSwapCardIndex",{amount:a.swapCardIndex+1})},advanceStageAndEvaluate:function(e,t){var a=e.commit,n=e.state,s=e.getters,r=e.dispatch,o=t.prediction,i=n.stages[n.activeStageIndex].card.value;a("setActiveStageIndex",{amount:n.activeStageIndex+1}),"higher"===o&&a("setStageEvaluation",{stageId:s.currentStage.id,evaluation:s.currentStage.card.value>i}),"lower"===o&&a("setStageEvaluation",{stageId:s.currentStage.id,evaluation:s.currentStage.card.value<i}),0===s.currentStage.card.value&&a("setStageEvaluation",{stageId:s.currentStage.id,evaluation:!0}),!s.isBonusStage(s.currentStage.id)&&s.currentStage.evaluation&&0!==s.currentStage.card.value&&r("recalculateScore",{increaseOrDecrease:1,isSwap:!1}),s.isBonusStage(s.currentStage.id)||s.currentStage.evaluation||(r("recalculateTries",{increaseOrDecrease:-1}),r("resetBonusPenaltyIncrements"),r("flipTable",{delay:1e3})),s.isBonusStage(s.currentStage.id)&&!s.currentStage.evaluation&&r("flipTable",{delay:1e3})},resetBonusPenaltyIncrements:function(e){var t=e.commit;t("setStreakBonus",{amount:100}),t("setSwapPenalty",{amount:50})}},Ke={setSwapPenalty:function(e,t){var a=t.amount;e.swapPenalty=a},setStreakBonus:function(e,t){var a=t.amount;e.streakBonus=a},setFinalScore:function(e,t){var a=t.amount;e.finalScore=a},setGameEnded:function(e,t){var a=t.isEnded;e.gameEnded=a},updateTries:function(e,t){var a=t.increaseOrDecrease,n=t.amount;e.tries+=n*a},updateScore:function(e,t){var a=t.increaseOrDecrease,n=t.amount;e.score+=n*a},resetGame:function(e){e.swapPenalty=e.settings.baseSwapPenalty,e.scoreBonus=e.settings.startingScoreBonus,e.score=e.settings.startingScore,e.tries=e.settings.startingTries},shuffleCards:function(e){e.cards.forEach(function(e){return e.order=Math.random()}),e.cards.sort(function(e,t){return e.order-t.order})},setSwapCardIndex:function(e,t){var a=t.amount;e.swapCardIndex=a},setActiveStageIndex:function(e,t){var a=t.amount;e.activeStageIndex=a},dealStages:function(e){for(var t=0;t<e.stages.length;t+=1)e.stages[t].card=e.cards[t]},setStageCard:function(e,t){var a=t.stageId,n=t.card;e.stages[a].card=n},resetStages:function(e){e.stages.forEach(function(t){t.id<e.stages.length-2?t.swaps=1:t.swaps=0,t.evaluation=null})},decrementStageSwaps:function(e,t){var a=t.stageId;e.stages[a].swaps-=1},setStageEvaluation:function(e,t){var a=t.stageId,n=t.evaluation;e.stages[a].evaluation=n}},Qe=new C["a"].Store({state:Ue,getters:Ye,actions:ze,mutations:Ke}),Xe=a("ecee"),Ze=a("c074"),et=a("ad3d");Xe["c"].add(Ze["b"],Ze["a"]),n["a"].component("font-awesome-icon",et["a"]),n["a"].config.productionTip=!1,new n["a"]({el:"#app",store:Qe,router:De,render:function(e){return e(v)}}).$mount("#app")},"5a0c":function(e,t,a){"use strict";var n=a("1784"),s=a.n(n);s.a},"64a9":function(e,t,a){},"64d1":function(e,t,a){},"6e1a":function(e,t,a){e.exports=a.p+"img/hearts.23866ace.svg"},"73ed":function(e,t,a){"use strict";var n=a("2634"),s=a.n(n);s.a},7419:function(e,t,a){},"75e2":function(e,t,a){},"881c":function(e,t,a){},9093:function(e,t,a){},a3b0:function(e,t,a){e.exports=a.p+"img/spades.31921aa4.svg"},b078:function(e,t,a){"use strict";var n=a("9093"),s=a.n(n);s.a},b518:function(e,t,a){"use strict";var n=a("7419"),s=a.n(n);s.a},b8a8:function(e,t,a){"use strict";var n=a("75e2"),s=a.n(n);s.a},b939:function(e,t,a){"use strict";var n=a("64d1"),s=a.n(n);s.a},bf20:function(e,t,a){e.exports=a.p+"img/clubs.474ad38d.svg"},d209:function(e,t,a){"use strict";var n=a("4254"),s=a.n(n);s.a},d2b7:function(e,t,a){"use strict";var n=a("2ff8"),s=a.n(n);s.a}});
//# sourceMappingURL=app.21dbdda0.js.map