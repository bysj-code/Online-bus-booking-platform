(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bashi/detail"],{3314:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,u){try{var o=t[i](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var u=t.apply(e,n);function o(t){i(u,a,r,o,c,"next",t)}function c(t){i(u,a,r,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},bashiCollectionFlag:0,zuoweiNumberList:[],thumbsupFlag:0,crazilyFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return u(a.default.mark((function e(){var r,i,u;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),r=t.getStorageSync("nowTable"),e.next=4,n.$api.session(r);case 4:i=e.sent,n.user=i.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),u=t.getStorageSync("bashiLiuyanState"),u&&(t.removeStorageSync("bashiLiuyanState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{init:function(){var t=this;return u(a.default.mark((function e(){var n,r,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("bashi",t.id);case 2:for(n=e.sent,t.detail=n.data,t.swiperList=t.detail.bashiPhoto?t.detail.bashiPhoto.split(","):[],r=1;r<=t.detail.zuoweiNumber;r++)t.zuoweiNumberList.push({name:"".concat(r,"号"),select:!1,active:!1});if(null!=t.detail.selected&&""!=t.detail.selected&&t.detail.selected.split(",").length>0)for(i=0;i<t.detail.selected.split(",").length;i++)t.zuoweiNumberList[t.detail.selected.split(",")[i]-1].select=!0;case 7:case"end":return e.stop()}}),e)})))()},selectSeat:function(t){t.active=!0},unselectSeat:function(t){t.active=!1},onSubmitTap:function(){var e=this;return u(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e,t.showModal({title:"提示",content:"是否确认预定",success:function(){var e=u(a.default.mark((function e(n){var i,u,o;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=9;break}for(i=[],u=0;u<r.zuoweiNumberList.length;u++)r.zuoweiNumberList[u].active&&i.push(r.zuoweiNumberList[u].name.replace("号",""));if(0!=i.length){e.next=6;break}return r.$utils.msg("请选择要预定的座位"),e.abrupt("return",!1);case 6:o={orderid:r.$utils.genTradeNo(),bashiId:r.detail.id,selected:i.toString()},t.setStorageSync("orderGoods",o),r.$utils.jump("/pages/shop-order-confirm/shop-order-confirm");case 9:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return n.stop()}}),n)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return u(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("bashiLiuyan",{page:t.num,limit:t.size,bashiId:e.id});case 2:r=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(r.data.list),0==r.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return u(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../bashiLiuyan/add-or-update?bashiId=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=o}).call(this,n("543d")["default"])},4046:function(t,e,n){},4098:function(t,e,n){"use strict";n.r(e);var a=n("3314"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},8317:function(t,e,n){"use strict";(function(t){n("d934");a(n("66fd"));var e=a(n("ddcb"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},9214:function(t,e,n){"use strict";var a=n("4046"),r=n.n(a);r.a},b710:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"46e9"))}},r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){return t.$utils.msg("该座位已被预定")})},i=[]},ddcb:function(t,e,n){"use strict";n.r(e);var a=n("b710"),r=n("4098");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("9214");var u,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports}},[["8317","common/runtime","common/vendor"]]]);