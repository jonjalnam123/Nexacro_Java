(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("QuickCode_Temp");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1000,700);}_a=new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("View");_a.set_cssclass("sta_WF_TitleSub");this.addChild(_a.name,_a);_a=new Static("Static04","10","40","260","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("FreeFormView");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new View("View00","10","74","980","226",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("View00");_a.set_viewdataset("viewdataset");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.View00.form,function(_b){});this.View00.form.addLayout(_a.name,_a);_a=new Layout("default","",1000,700,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.on_initEvent=function(){};this.loadIncludeScript("QuickCode_Temp.xfdl");this.loadPreloadList();_a=null;};})();