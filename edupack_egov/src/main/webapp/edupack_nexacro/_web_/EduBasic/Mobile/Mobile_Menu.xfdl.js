(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Mobile_Menu");this.set_titletext("모바일메뉴");this.set_background("transparent");if(Form==this.constructor){this._setFormPosition(480,768);}_a=new Dataset("ds_data",this);_a._setContents("<ColumnInfo><Column id=\"MENU_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">TOBESOFT</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_TOBESOFT.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">Camera</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Camera.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">Step</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Step.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">MLM</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_MLM.xfdl</Col><Col id=\"MENU_TYPE\">F</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">DeskTop VS Mobile</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_MLMvsPhone.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Employees_ListView</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Employees_ListView.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">ListView</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_ListView.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Mobile_Component</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Component.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Main_Icon</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Main_IconType.xfdl</Col><Col id=\"MENU_TYPE\">M</Col></Row><Row><Col id=\"MENU_URL\">EduBasic::Mobile/TEMP/Form_Work.xfdl</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Main_Change</Col><Col id=\"MENU_TYPE\">M</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Barcode</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Barcode.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_top","0","0",null,"90","109",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Div00");_a.set_cssclass("div_MBF_topbg");this.addChild(_a.name,_a);_a=new Static("sta_titlebg","0","0",null,null,"0","0",null,null,null,null,this.div_top.form);_a.set_taborder("0");_a.set_accessibilityenable("false");_a.set_cssclass("sta_mnu_titlebg");this.div_top.addChild(_a.name,_a);_a=new Button("btn_logout",null,"25","42","40","10",null,null,null,null,null,this.div_top.form);_a.set_taborder("1");_a.getSetter("uWord").set("frame.logOut");_a.set_cssclass("btn_MBF_logout");this.div_top.addChild(_a.name,_a);_a=new Static("sta_name","10","25",null,"40","62",null,null,null,null,null,this.div_top.form);_a.set_taborder("2");_a.set_text("<b v=\'true\'>홍길동</b> 님 환영합니다.");_a.set_cssclass("sta_mnu_welcome");_a.set_usedecorate("true");this.div_top.addChild(_a.name,_a);_a=new Static("sta_back","div_top:0","0",null,null,"0","0",null,null,null,null,this);_a.set_taborder("0");_a.set_accessibilityenable("false");_a.set_cssclass("sta_MBF_rightbg");this.addChild(_a.name,_a);_a=new Button("btn_close","381","72","40","40",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("");_a.set_cssclass("btn_MBF_close");this.addChild(_a.name,_a);_a=new Grid("grd_menu","0","90","371",null,null,"0",null,null,null,null,this);_a.set_taborder("3");_a.set_cssclass("grd_MT_mnuPop");_a.set_autofittype("col");_a.set_binddataset("ds_data");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"231\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_IMAGE\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_top.form,function(_b){});this.div_top.form.addLayout(_a.name,_a);_a=new Layout("default","screen_phone",480,768,this,function(_b){});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Mobile_Menu.xfdl",function(){this.objApp=nexacro.getApplication();this.Mobile_Menu_onload=function(_a,_b){var _c="<b v='true'>"+this.objApp.gv_id+"</b>님 환영합니다.";this.div_top.form.sta_name.set_text(_c);};this.sta_back_onclick=function(_a,_b){this.objApp.av_WorkFrame.form.fn_menuPop(false);};this.divTop_btn_close_onclick=function(_a,_b){this.objApp.av_WorkFrame.form.fn_menuPop(false);};this.div_top_btn_logout_onclick=function(_a,_b){this.objApp.av_WorkFrame.form.fn_popup("Mobile::Moibile_Pop_Confirm.xfdl","menu");};this.grd_menu_oncellclick=function(_a,_b){var _c=this.ds_data.getColumn(_b.row,"MENU_URL");var _d=this.ds_data.getColumn(_b.row,"MENU_TYPE");var _e="pop";if(_d=="D"){_e="pop";}else if(_d=="F"){_e="full";}else{_e="main";}this.objApp.av_WorkFrame.form.fn_action(_c,_e);};});this.on_initEvent=function(){this.addEventHandler("onload",this.Mobile_Menu_onload,this);this.div_top.form.btn_logout.addEventHandler("onclick",this.div_top_btn_logout_onclick,this);this.sta_back.addEventHandler("onclick",this.sta_back_onclick,this);this.btn_close.addEventHandler("onclick",this.divTop_btn_close_onclick,this);this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);};this.loadIncludeScript("Mobile_Menu.xfdl");this.loadPreloadList();_a=null;};})();