(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Moibile_Pop_Confirm");this.set_titletext("모바일 확인창");if(Form==this.constructor){this._setFormPosition(400,251);}_a=new Button("btn_cancel","0","181","200","70",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("취소");_a.set_cssclass("btn_Pop_cancel");this.addChild(_a.name,_a);_a=new Button("btn_ok","200","181","200","70",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("확인");_a.set_cssclass("btn_Pop_confirm");this.addChild(_a.name,_a);_a=new Static("sta_msg","20","80","362","40",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("종료하시겠습니까?");_a.set_cssclass("sta_Pop_question");this.addChild(_a.name,_a);_a=new Layout("default","screen_phone",400,251,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Moibile_Pop_Confirm.xfdl",function(){this.Form_onload=function(_a,_b){this.fn_msgSetting(this.parent.msg);};this.fn_msgSetting=function(_b){this.sta_msg.set_text(_b);};this.btn_ok_onclick=function(_a,_b){var _c="OK";this.close(_c);};this.btn_cancel_onclick=function(_a,_b){var _c="CANCLE";this.close(_c);};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);};this.loadIncludeScript("Moibile_Pop_Confirm.xfdl");this.loadPreloadList();_a=null;};})();