(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Form_Login");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1050,698);}_a=new Static("staCenter","0","0","50%","50%",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("");this.addChild(_a.name,_a);_a=new Div("Div00","staCenter:-200","staCenter:-200","400","400",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("");_a.set_background("linear-gradient(#ffffff 0%,#ec4aec 20%,#d63fd9 80%,#ffffff 100%)");this.addChild(_a.name,_a);_a=new Static("text","55","36","36","53",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("0");_a.set_text("아이디");this.Div00.addChild(_a.name,_a);_a=new Edit("edtId","150","36","216","49",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("1");this.Div00.addChild(_a.name,_a);_a=new Static("text00","202","85","113","53",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("2");_a.set_text("아이디를 입력하세요");_a.set_color("white");this.Div00.addChild(_a.name,_a);_a=new Static("text01","57","148","70","53",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("3");_a.set_text("패스워드");this.Div00.addChild(_a.name,_a);_a=new Edit("edtPass","150","148","216","49",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("4");this.Div00.addChild(_a.name,_a);_a=new CheckBox("chkIdSave","61","216","223","58",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("5");_a.set_text("아이디 저장");this.Div00.addChild(_a.name,_a);_a=new Button("btnLogin","114","331","188","53",null,null,null,null,null,null,this.Div00.form);_a.set_taborder("6");_a.set_text("로그인");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Div00.form,function(_b){});this.Div00.form.addLayout(_a.name,_a);_a=new Layout("default","",1050,698,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Form_Login.xfdl",function(){this.fvApp=nexacro.getApplication();this.Div00_btnLogin_onclick=function(_a,_b){this.fvApp.avVFrameSet.set_separatesize("0,50,*");if(this.Div00.form.chkIdSave.value){nexacro.setPrivateProfile("USER_ID",this.Div00.form.edtId.value);var _c=nexacro.getPrivateProfile("USER_MENU");this.fvApp.gdsMyMenu.loadXML(_c);}else{nexacro.setPrivateProfile("USER_ID","");}};this.Form_Login_onload=function(_a,_b){var _c=nexacro.getPrivateProfile("USER_ID");if(_c!=null&&_c.length>0){this.Div00.form.edtId.set_value(_c);this.Div00.form.chkIdSave.set_value(true);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_Login_onload,this);this.Div00.form.chkIdSave.addEventHandler("onclick",this.Div00_chkIdSave_onclick,this);this.Div00.form.btnLogin.addEventHandler("onclick",this.Div00_btnLogin_onclick,this);};this.loadIncludeScript("Form_Login.xfdl");this.loadPreloadList();_a=null;};})();