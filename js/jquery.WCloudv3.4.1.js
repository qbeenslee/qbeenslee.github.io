var LB=1,LT=2,RT=3,RB=4,HR=1,VR=2,WordObjType="a",DIV="div",Word_Default_font_Family="Impact",distance_Counter=1,word_counter=1;function Util(){}function space(t,s,i,e,o){this.spaceType=t,this.width=s,this.height=i,this.x=e,this.y=o}function Word(t){this.word=t.word,this.weight=t.weight,this.href=t.href,this.fontFactor=t.fontFactor,this.fontOffset=t.fontOffset,this.minWeight=t.minWeight,this.padding_left=t.padding_left,this.font_family=t.font_family,this.font=null,this.color=t.color,this.span=null,this.width=null,this.height=null,this.word_class=t.word_class,this._init()}function WordCloud(){this.defaultOptions={title:"JQ WOrd Cloud",words:[],minFont:10,maxFont:50,fontOffset:0,showSpaceDIV:!1,verticalEnabled:!0,cloud_color:null,cloud_font_family:null,spaceDIVColor:"white",padding_left:null,word_common_classes:null,word_click:function(){},word_mouseOver:function(){},word_mouseEnter:function(){},word_mouseOut:function(){},beforeCloudRender:function(){},afterCloudRender:function(){}},this.minWeight=null,this.maxWeight=null,this.spaceDataObject=null,this.spaceIdArray=null,this.words=null,this.fontFactor=1,this.methods={destroy:this._destroy}}Util.getRandomColor=function(){for(var t="0123456789ABCDEF".split(""),s="#",i=0;i<6;i++)s+=t[Math.round(15*Math.random())];return s},Word.prototype={_init:function(){this._setFont(),this._setSpan_Size()},_setFont:function(){this.font=Math.floor((this.weight-this.minWeight)*this.fontFactor+this.fontOffset)},_setSpan_Size:function(){var t=document.createElement(WordObjType);t.setAttribute("id","Word_"+word_counter+++"_"+this.weight),t.setAttribute("href",""+this.href),document.body.appendChild(t),$(t).css({position:"absolute",display:"block",left:-999990,top:0}),$(t).css("font-size",this.font+"px"),null!=this.font_family&&""!=this.font_family?$(t).css("font-family",this.font_family):$(t).css("font-family",Word_Default_font_Family),null!=this.word_class&&""!=this.word_class&&$(t).addClass(this.word_class),null!=this.color&&""!=this.color?$(t).css("color",this.color):$(t).css("color",Util.getRandomColor()),$(t).css("-webkit-user-select","none").css("-moz-user-select","none").css("-ms-user-select","none"),$(t).css("user-select","none").css("-o-user-select","none"),$(t).css("line-height",this.font+"px"),null==this.padding_left&&(this.padding_left=0),$(t).css("padding-left",this.padding_left+"px"),$(t).html(this.word),this.width=$(t).outerWidth()+2*this.padding_left,this.height=$(t).outerHeight(),$(t).remove(),this.span=t}},WordCloud.prototype={_init:function(t){if(null!=t&&"string"==typeof t)return null!=this.methods[t]?this.methods[t].apply():null;null==t?this.options=this.defaultOptions:null!=t&&"object"==typeof t&&(this.options=$.extend(this.defaultOptions,t)),this.spaceDataObject={},this.spaceIdArray=[],this.words=this.options.words,this.words.sort(function(t,s){return t.weight<s.weight?1:t.weight>s.weight?-1:0}),this.options.beforeCloudRender(),this._start(),this.options.afterCloudRender(),this._final()},_setFontFactor:function(){this.maxWeight=this.words[0].weight,this.minWeight=this.words[this.words.length-1].weight,this.fontFactor=(this.options.maxFont-this.options.minFont)/(this.maxWeight-this.minWeight)},_start:function(){this._destroy(),this._setFontFactor(),this._draw()},_final:function(){},_destroy:function(){this.$target.html("")},_setTarget:function(t){(this.$target=t).css("position","relative"),this.tWidth=t.innerWidth(),this.xOffset=this.tWidth/2,this.tHeight=t.innerHeight(),this.yOffset=this.tHeight/2},_draw:function(){for(var t=0;t<this.words.length;t++){var s=this.words[t],i={};i.word=s.word,i.weight=s.weight,i.href=s.href,null!=this.options.cloud_color?i.color=this.options.cloud_color:i.color=s.color,null!=this.options.padding_left&&(i.padding_left=this.options.padding_left),i.word_class=s.word_class,null!=this.options.cloud_font_family?i.font_family=this.options.cloud_font_family:i.font_family=s.font_family,i.fontFactor=this.fontFactor,i.fontOffset=this.options.fontOffset+this.options.minFont,i.minWeight=this.minWeight;var e=new Word(i);null!=this.options.word_common_classes&&$(e.span).addClass(this.options.word_common_classes),$(e.span).on("click",this.options.word_click),$(e.span).on("mouseover",this.options.word_mouseOver),$(e.span).on("mouseout",this.options.word_mouseOut),$(e.span).on("mouseenter",this.options.word_mouseEnter),0==t?this._placeFirstWord(e):this._placeOtherWord(e)}},_updateSpaceIdArray:function(t,s){if(0!=this.spaceIdArray.length){for(var i=0;i<this.spaceIdArray.length;i++)if(s<parseFloat(this.spaceIdArray[i].split("_")[0]))return void this.spaceIdArray.splice(i,0,t);this.spaceIdArray.push(t)}else this.spaceIdArray.push(t)},_showSpaceDiv:function(t,s,i,e,o){var h=1,a=1;switch(t){case LB:h=0,a=-1;break;case LT:a=h=0;break;case RT:h=-1,a=0;break;case RB:a=h=-1}var n=document.createElement(DIV);$(n).css("left",e+h*s).css("top",o+a*i).css("width",s).css("height",i).css("border","1px "+this.options.spaceDIVColor+" solid").css("position","absolute").css("display","block"),this.$target.append(n)},_pushSpaceData:function(t,s,i,e,o){var h=Math.sqrt((this.xOffset-e)*(this.xOffset-e)+(this.yOffset-o)*(this.yOffset-o)),a=h+"_"+distance_Counter++;this._updateSpaceIdArray(a,h),this.spaceDataObject[a]=new space(t,s,i,e,o),this.options.showSpaceDIV&&this._showSpaceDiv(t,s,i,e,o)},_placeFirstWord:function(t){var s=t.width,i=t.height,e=this.xOffset-s/2,o=this.yOffset-i/2,h=this.tWidth,a=this.tHeight,n=t.span;$(n).css("left",e).css("top",o).css("display","inline"),this.$target.append(n),this._pushSpaceData(LB,h-e-s,i,e+s,o+i/2),this._pushSpaceData(LT,s,a-o-i,e+s/2,o+i),this._pushSpaceData(RT,e,i,e,o+i/2),this._pushSpaceData(RB,s,o,e+s/2,o),this._pushSpaceData(LT,s/2,i/2,e+s,o+i/2),this._pushSpaceData(RT,s/2,i/2,e+s/2,o+i),this._pushSpaceData(RB,s/2,i/2,e,o+i/2),this._pushSpaceData(LB,s/2,i/2,e+s/2,o),this._pushSpaceData(LT,h-e-s-s/2,a-o-i/2,e+s+s/2,o+i/2),this._pushSpaceData(RT,e+s/2,a-o-i-i/2,e+s/2,o+i+i/2),this._pushSpaceData(RB,e-s/2,o+i/2,e-s/2,o+i/2),this._pushSpaceData(LB,e+s/2,o-i/2,e+s/2,o-i/2)},_placeOtherWord:function(t){for(var s=0;s<this.spaceIdArray.length;s++){var i=this.spaceIdArray[s],e=this.spaceDataObject[i],o=0,h=0;if(t.width<=e.width&&t.height<=e.height&&(o=HR,h++),this.options.verticalEnabled&&t.height<=e.width&&t.width<=e.height&&(o=VR,h++),0<h){this.spaceDataObject[i]=null,this.spaceIdArray.splice(s,1);var a=1,n=1,r=1,c=1;switch(e.spaceType){case LB:a=0,n=-1,c=-(r=1);break;case LT:n=a=0,c=r=1;break;case RT:n=0,r=a=-1,c=1;break;case RB:c=r=n=a=-1}1<h&&(o=3<5*Math.random()?VR:HR);var l=t.width,p=t.height;switch(o){case HR:var d=t.span;$(d).css("left",e.x+a*l).css("top",e.y+n*p).css("display","inline"),this.$target.append(d),1<2*Math.random()?(this._pushSpaceData(e.spaceType,e.width-l,p,e.x+r*l,e.y),this._pushSpaceData(e.spaceType,e.width,e.height-p,e.x,e.y+c*p)):(this._pushSpaceData(e.spaceType,e.width-l,e.height,e.x+r*l,e.y),this._pushSpaceData(e.spaceType,l,e.height-p,e.x,e.y+c*p));break;case VR:d=t.span;jQuery.browser&&jQuery.browser.msie?$(d).css("left",e.x+a*p).css("top",e.y+n*l):$(d).css("left",e.x+a*p-(l-p)/2).css("top",e.y+n*l+(l-p)/2),$(d).css("display","block").css("-webkit-transform","rotate(270deg)").css("-moz-transform","rotate(270deg)"),$(d).css("-o-transform","rotate(270deg)").css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"),this.$target.append(d),1<2*Math.random()?(this._pushSpaceData(e.spaceType,e.width-p,l,e.x+r*p,e.y),this._pushSpaceData(e.spaceType,e.width,e.height-l,e.x,e.y+c*l)):(this._pushSpaceData(e.spaceType,e.width-p,e.height,e.x+r*p,e.y),this._pushSpaceData(e.spaceType,p,e.height-l,e.x,e.y+c*l))}return}}}},function(i){i.fn.jQWCloud=function(t){var s=new WordCloud;s._setTarget(i(this)),s._init(t)}}(jQuery);