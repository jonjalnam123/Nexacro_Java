(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SDIFrameMainForm");this.set_titletext("SDIFrameMainForm");this.set_background("#ffffff");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Static("sta01","117","205","805","240",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("sta_MF_Center");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("SDIFrameMainForm.xfdl",function(){this.form_onload=function(_a,_b){this.form_onsize();};this.form_onclose=function(_a,_b){};this.form_onsize=function(_a,_b){this.resetScroll();};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.addEventHandler("onactivate",this.form_onactivate,this);this.addEventHandler("onclose",this.form_onclose,this);this.addEventHandler("onsize",this.form_onsize,this);};this.loadIncludeScript("SDIFrameMainForm.xfdl");this.loadPreloadList();_a=null;};})();