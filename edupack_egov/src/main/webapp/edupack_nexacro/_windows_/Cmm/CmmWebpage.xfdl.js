(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("CmmWebpage");this.set_titletext("팝업 웹페이지 연결");if(Form==this.constructor){this._setFormPosition(900,700);}_a=new Button("btnClose","48%",null,"100","30",null,"10",null,null,null,null,this);_a.set_taborder("0");_a.set_text("close");this.addChild(_a.name,_a);_a=new WebBrowser("web00","10","10",null,null,"10","50",null,null,null,null,this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Layout("default","",900,700,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("CmmWebpage.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);var _c=this.getOwnerFrame().paramUrl;trace("paramUrl : "+_c);if(!this.gfnIsNull(_c)){this.web00.set_url(_c);}};this.btnClose_onclick=function(_a,_b){var _c;_c=JSON.stringify({aaa:"tobesoft",bbb:"투비소프트"});this.gfnClosePopup(_c);};this.web00_onloadcompleted=function(_a,_b){trace("web00_onloadcompleted");};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);this.web00.addEventHandler("onloadcompleted",this.web00_onloadcompleted,this);};this.loadIncludeScript("CmmWebpage.xfdl");this.loadPreloadList();_a=null;};})();