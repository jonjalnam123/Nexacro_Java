(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Mobile_Main_IconType_sub");this.set_titletext("메인서브");if(Form==this.constructor){this._setFormPosition(480,698);}_a=new Static("sta_title","0","30","480","105",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_ITM_titlelogo");this.addChild(_a.name,_a);_a=new Button("btn_intro","20","165","210","170",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("TOBESOFT");_a.set_cssclass("btn_ITM_tobeInfor");this.addChild(_a.name,_a);_a=new Button("btn_camera","250","165","210","170",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("CAMERA");_a.set_cssclass("btn_ITM_camera");this.addChild(_a.name,_a);_a=new Button("btn_component","250","355","210","170",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_cssclass("btn_ITM_mobile");_a.set_text("COMPONENT");this.addChild(_a.name,_a);_a=new Button("btn_mlm","20","355","210","170",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("MLM");_a.set_cssclass("btn_ITM_MLM");this.addChild(_a.name,_a);_a=new Button("btn_step","20","545","210","170",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("STEP");_a.set_cssclass("btn_ITM_step");this.addChild(_a.name,_a);_a=new Button("btn_listview","250","545","210","170",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("ListView");_a.set_cssclass("btn_ITM_listview");this.addChild(_a.name,_a);_a=new Layout("default","screen_phone",480,698,this,function(_b){});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Mobile_Main_IconType_sub.xfdl",function(){this.objApp=nexacro.getApplication();this.btn_iconClick=function(_a,_b){var _c=_a.name;var _d="";switch(_c){case "btn_intro":_d="EduBasic::Mobile/Mobile_TOBESOFT.xfdl";this.objApp.av_WorkFrame.form.fn_action(_d);break;case "btn_camera":_d="EduBasic::Mobile/Mobile_Camera.xfdl";this.objApp.av_WorkFrame.form.fn_action(_d);break;case "btn_mlm":_d="EduBasic::Mobile/Mobile_MLM.xfdl";this.objApp.av_WorkFrame.form.fn_action(_d,"full");break;case "btn_component":_d="EduBasic::Mobile/Mobile_Component.xfdl";this.objApp.av_WorkFrame.form.fn_action(_d);break;case "btn_step":_d="EduBasic::Mobile/Mobile_Step.xfdl";this.objApp.av_WorkFrame.form.fn_action(_d);break;case "btn_listview":_d="EduBasic::Mobile/Mobile_Employees_ListView.xfdl";this.objApp.av_WorkFrame.form.fn_action(_d);break;default:trace("default");}this.objApp.av_WorkFrame.form.div_top.form.sta_sub_title.set_text(_a.text);};});this.on_initEvent=function(){this.btn_intro.addEventHandler("onclick",this.btn_iconClick,this);this.btn_camera.addEventHandler("onclick",this.btn_iconClick,this);this.btn_component.addEventHandler("onclick",this.btn_iconClick,this);this.btn_mlm.addEventHandler("onclick",this.btn_iconClick,this);this.btn_step.addEventHandler("onclick",this.btn_iconClick,this);this.btn_listview.addEventHandler("onclick",this.btn_iconClick,this);};this.loadIncludeScript("Mobile_Main_IconType_sub.xfdl");this.loadPreloadList();_a=null;};})();