"use strict";module.exports=Behavior({behaviors:[],properties:{ripple:{type:Boolean,value:!0}},data:{rippleList:[],rippleId:0,rippleDeleteCount:0,rippleDeleteTimer:null,rippleColor:"#ffffff",btnClass:"sc-class"},attached:function(){},methods:{_addRipple:function(t,e){var i=this;this.properties.disabled||this._queryMultipleNodes("."+this.data.btnClass).then(function(a){var s=a[0],p=a[1],l=parseInt(s.width),r=parseInt(s.height),n=l>r?l:r,o=t.detail.x-(s.left+p.scrollLeft)-n/2,d=t.detail.y-(s.top+p.scrollTop)-n/2;i.data.rippleList.push({rippleId:"ripple-"+i.data.rippleId++,width:n,height:n,left:o,top:d,startAnimate:!0,holdAnimate:e||!1}),i.setData({rippleList:i.data.rippleList})})},_queryMultipleNodes:function(t){var e=this;return new Promise(function(i,a){var s=e.createSelectorQuery();s.select(t).boundingClientRect(),s.selectViewport().scrollOffset(),s.exec(function(t){i(t)})})},_scbuttonrippleAnimationend:function(){function t(){this.data.rippleList.splice(0,this.data.rippleDeleteCount),this.setData({rippleList:this.data.rippleList}),clearTimeout(this.data.timer),this.data.timer=null,this.data.rippleDeleteCount=0}this.data.rippleDeleteCount++,this.data.timer?(clearTimeout(this.data.timer),this.data.timer=setTimeout(t.bind(this),300)):this.data.timer=setTimeout(t.bind(this),300)},_longPress:function(t){this._addRipple(t,!0)},_touchend:function(t){var e=this.data.rippleList.slice(-1)[0];e&&e.holdAnimate&&(this.data.rippleList.pop(),this.setData({rippleList:this.data.rippleList}))}}});