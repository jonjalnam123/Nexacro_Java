(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Hello");this.set_titletext("New Form");this.set_scrolltype("none");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Button("Button00","60","77","250","73",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Hello World");this.addChild(_a.name,_a);_a=new Static("Static00","66","47","240","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Desktop Screen");_a.set_font("normal bold 14px \"Arial\"");_a.set_color("red");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){var _c=_b;_b=_c;_b.set_titletext("New Form");_b.set_scrolltype("none");_b.Button00.set_taborder("0");_b.Button00.set_text("Hello World");_b.Button00.move("60","77","250","73",null,null);_b.Static00.set_taborder("1");_b.Static00.set_text("Desktop Screen");_b.Static00.set_font("normal bold 14px \"Arial\"");_b.Static00.set_color("red");_b.Static00.move("66","47","240","30",null,null);});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new Layout("Layout0","screen_phone",480,768,this,function(_b){var _c=_b;_b=_c;_b.Static00.set_text("Phone Screen");_b.Static00.move("176","77","120","30",null,null);_b.Button00.move("170","107","160","93",null,null);});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Form_Hello.xfdl",function(){this.Button00_onclick=function(_a,_b){this.alert("Hello World");trace("log Hello World");};this.fnClose=function(){return false;};});this.on_initEvent=function(){this.addEventHandler("onbeforeclose",this.Hello_onbeforeclose,this);this.addEventHandler("onclose",this.Hello_onclose,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);};this.loadIncludeScript("Form_Hello.xfdl");this.loadPreloadList();_a=null;};})();