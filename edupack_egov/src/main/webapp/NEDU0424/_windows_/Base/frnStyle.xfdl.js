(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("frnStyle");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1280,720);}_a=new Button("Button00","50","50","379","119",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Button00");_a.set_cssclass("btn_TF_Save");this.addChild(_a.name,_a);_a=new Button("Button01","464","49","192","81",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Button01");this.addChild(_a.name,_a);_a=new Button("Button00_00","50","181","379","119",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Button00");this.addChild(_a.name,_a);_a=new Button("Button02","561","162","131","58",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("Button02");this.addChild(_a.name,_a);_a=new Button("Button03","236","352","100","100",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("DELETE");_a.set_cssclass("btn_TF_DELETE");this.addChild(_a.name,_a);_a=new Combo("Combo00","460","360","206","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("Combo00");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","349","504","199","170",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("CheckBox00");this.addChild(_a.name,_a);_a=new Button("Button04","110","350","100","100",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Home");_a.set_cssclass("btn_TF_Home");this.addChild(_a.name,_a);_a=new Button("Button05","649","429","210","85",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Button05");_a.set_cssclass("btn_TF_Save");this.addChild(_a.name,_a);_a=new Layout("default","",1280,720,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("frnStyle.xfdl",function(){this.Button03_onclick=function(_a,_b){this.alert("삭제");};this.Button04_onclick=function(_a,_b){this.alert("홈가기");};});this.on_initEvent=function(){this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.Button04.addEventHandler("onclick",this.Button04_onclick,this);};this.loadIncludeScript("frnStyle.xfdl");this.loadPreloadList();_a=null;};})();