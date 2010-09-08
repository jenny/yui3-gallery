YUI.add("gallery-toggle",function(B){var A=B.Node;function C(D){C.superclass.constructor.apply(this,arguments);}C.NAME="toggle";C.ATTRS={label:{value:""},on:{value:"On"},off:{value:"Off"},selected:{value:"on",validator:"_validateSelected",broadcast:1}};C.HTML_PARSER={selected:function(E){var D="on";if(B.one(".yui3-toggle a.yui3-last")){D=B.one(".yui3-toggle a.yui3-last").hasClass("yui3-selected")?"off":"on";}return D;}};C.LABEL_TEMPLATE='<span class="yui3-label">{label}</span>';C.TOGGLE_TEMPLATE='{label}<a class="yui3-first" href="#on">{on}</a><a class="yui3-last" href="#off">{off}</a>';B.extend(C,B.Widget,{initializer:function(){},destructor:function(){},renderUI:function(){var D="",E;if(!this.get("srcNode").one(".yui3-toggle")){if(this.get("label")){D=B.substitute(C.LABEL_TEMPLATE,{label:this.get("label")});}E=A.create(B.substitute(C.TOGGLE_TEMPLATE,{mynodeid:this.get("id")+"_toggle",label:D,on:this.get("on"),off:this.get("off")}));this.get("srcNode").append(E);}},bindUI:function(){B.on("click",this._onToggleClick,".yui3-toggle a",this);},syncUI:function(){this._uiSetSelected(this.get("selected"));},_validateSelected:function(D){return D==="on"||D==="off";},_onToggleClick:function(D){D.preventDefault();if(!D.target.hasClass("selected")){this.set("selected",D.target.hasClass("yui3-first")?"on":"off");this._uiSetSelected(this.get("selected"));}},_uiSetSelected:function(D){B.one(".yui3-toggle").all("a").removeClass("yui3-selected");if(D==="on"){B.one(".yui3-toggle .yui3-first").addClass("yui3-selected");}else{B.one(".yui3-toggle .yui3-last").addClass("yui3-selected");}}});B.Toggle=C;},"gallery-2010.09.01-19-12",{requires:["widget","substitute"]});