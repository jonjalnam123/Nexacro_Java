(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("frameTop");this.set_titletext("frameTop");this.set_scrolltype("none");this.set_scrollbartype("none");this.set_background("#f3f5f6");if(Form==this.constructor){this._setFormPosition(1300,50);}_a=new Dataset("dsMenu",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("staBg","0","0",null,"50","0",null,null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("sta_TF_Bg");_a.set_text("");this.addChild(_a.name,_a);_a=new Button("btnPre",null,"13","24","24","351",null,null,null,null,null,this);_a.set_taborder("2");_a.set_visible("true");_a.set_cssclass("btn_TF_Prev");this.addChild(_a.name,_a);_a=new Button("btnNex",null,"13","24","24","327",null,null,null,null,null,this);_a.set_taborder("3");_a.set_visible("true");_a.set_cssclass("btn_TF_Next");this.addChild(_a.name,_a);_a=new Static("staName",null,"15","120","20","90",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("교육사업팀 홍길동");_a.set_cssclass("sta_TF_UserInfo");this.addChild(_a.name,_a);_a=new Button("btnLogOut",null,"15","80","20","10",null,null,null,null,null,this);_a.set_taborder("1");_a.getSetter("uWord").set("frame.logOut");_a.set_cssclass("btn_TF_Logout");_a.set_text("로그아웃");this.addChild(_a.name,_a);_a=new Div("divTopBtn","210","14",null,"22","408",null,null,null,null,null,this);_a.set_taborder("5");this.addChild(_a.name,_a);_a=new Static("staLogo","0","0","248","50",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_cssclass("sta_Main_Logo");_a.set_text("");this.addChild(_a.name,_a);_a=new Button("btnNotice",null,"13","24","24","218",null,null,null,null,null,this);_a.set_taborder("7");_a.set_cssclass("btn_TF_PushN");this.addChild(_a.name,_a);_a=new Static("staPushCount",null,"6","18","14","210",null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("3");_a.set_cssclass("sta_TF_PushCount");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divTopBtn.form,function(_b){});this.divTopBtn.form.addLayout(_a.name,_a);_a=new Layout("default","",1300,50,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("FrameTop.xfdl",function(){this.fvObjApp=this.gfnGetApplication();this.fvTopBtnPrefix="TOP_";this.form_onload=function(_a,_b){this.divTopBtn.form.set_scrollbartype("none");};this.form_onsize=function(_a,_b){this.fnRedrawBtn();};this.fnMsgCallback=function(_b,_c){if(_b=="confirm.logout"){if(_c){this.fvObjApp.gvLogOut="Y";this.fvObjApp.exit();}else{this.fvObjApp.gvLogOut="N";}}};this.fnSetName=function(){var _b="USER_NAME";var _c=nexacro.getEnvironmentVariable("evLanguage");if(_c!="KO"){_b=_b+_c;}var _d=this.fvObjApp.gdsUserInfo.getColumn(0,_b);this.staName.set_text("교육사업팀 "+_d);};this.fnGetFirstTabIndex=function(){for(var _d=0;_d<this.dsMenu.rowcount;_d++ ){var _b=this.dsMenu.getColumn(_d,this.FRAME_MENUCOLUMNS.menuId);var _c=this.fnFindObj(this.fvTopBtnPrefix+_b);if(0<=_c.left){return _d;}}return  -1;};this.fnMoveFirst=function(_b){var _c;var _d;var _e;var _f;_c=this.fnGetFirstTabIndex();if(_c<0){return;}if(_b<0){return;}if(_b>=this.dsMenu.rowcount){return;}_d=this.dsMenu.getColumn(_c,this.FRAME_MENUCOLUMNS.menuId);var _f=this.fnFindObj(this.fvTopBtnPrefix+_d);_d=this.dsMenu.getColumn(_b,this.FRAME_MENUCOLUMNS.menuId);_e=this.fnFindObj(this.fvTopBtnPrefix+_d);var _g=_e.getOffsetLeft()-_f.getOffsetLeft();for(var _h=0;_h<this.dsMenu.rowcount;_h++ ){_d=this.dsMenu.getColumn(_h,this.FRAME_MENUCOLUMNS.menuId);_e=this.fnFindObj(this.fvTopBtnPrefix+_d);_e.move(_e.getOffsetLeft()-_g,_e.getOffsetTop());}};this.fnRedrawBtn=function(){this.fnCheckShowBtnAll();this.fnSetSpinBtnShow();};this.fnCheckShowBtnAll=function(){if(this.dsMenu.rowcount==0){return;}var _b=this.fnFindObj(this.fvTopBtnPrefix+this.dsMenu.getColumn(0,this.FRAME_MENUCOLUMNS.menuId));var _c=this.fnFindObj(this.fvTopBtnPrefix+this.dsMenu.getColumn(this.dsMenu.rowcount-1,this.FRAME_MENUCOLUMNS.menuId));var _d=_b.getOffsetLeft();var _e=_c.getOffsetRight();if(this.divTopBtn.getOffsetWidth()>=(_e-_d)){this.fnMoveFirst(0);return;}};this.fnSetSpinBtnShow=function(){var _b;if(this.dsMenu.rowcount==0){this.btnPre.set_enable(false);this.btnNex.set_enable(false);return;}_b=this.fnFindObj(this.fvTopBtnPrefix+this.dsMenu.getColumn(this.dsMenu.rowcount-1,this.FRAME_MENUCOLUMNS.menuId));if(this.divTopBtn.getOffsetWidth()<_b.getOffsetRight()){this.btnNex.set_enable(true);}else{this.btnNex.set_enable(false);}_b=this.fnFindObj(this.fvTopBtnPrefix+this.dsMenu.getColumn(0,this.FRAME_MENUCOLUMNS.menuId));if(_b.getOffsetLeft()<0){this.btnPre.set_enable(true);}else{this.btnPre.set_enable(false);}};this.fnLoad=function(){this.fvObjApp.gdsMenu.filter(this.FRAME_MENUCOLUMNS.menuLevel+"==0");this.dsMenu.copyData(this.fvObjApp.gdsMenu,true);this.fvObjApp.gdsMenu.filter("");this.fnSetTopMenu();};this.fvFirstMenu;this.fnSetTopMenu=function(){var _b;for(var _h=0;_h<this.dsMenu.getRowCount();_h++ ){var _c=this.dsMenu.getColumn(_h,this.FRAME_MENUCOLUMNS.menuId);if(_h==0){this.fvFirstMenu=this.fvTopBtnPrefix+_c;}var _d=this.FRAME_MENUCOLUMNS.menuNm;var _e=nexacro.getEnvironmentVariable("evLanguage");if(_e!="KO"){_d=_d+_e;}var _f=this.dsMenu.getColumn(_h,_d);this.fnCreateTopMenu(_c,_f,_h);}var _g=this.divTopBtn.form[this.fvFirstMenu];_g.click();_g.setSelectStatus(true);this.fnRedrawBtn();};this.fvMenuLeft=50;this.fnCreateTopMenu=function(_b,_c,_d){var _e=new Button();var _f=nexacro.getTextSize(_c,"bold 15px 'Verdana', 'Malgun Gothic'");_e.init(this.fvTopBtnPrefix+_b,this.fvMenuLeft,0,_f.nx,_f.ny);this.fvMenuLeft=this.fvMenuLeft+_f.nx+80;this.divTopBtn.addChild(_e.name,_e);_e.set_text(_c);_e.menuid=_b;_e.set_cssclass("btn_TF_Menu");_e.set_textAlign("center");_e.setEventHandler("onclick",this.Button_onclick,this);_e.set_visible(true);_e.show();};this.fnSetActiveBtn=function(_b){var _c;for(var _d=0;_d<this.dsMenu.getRowCount();_d++ ){_c=this.fnFindObj(this.fvTopBtnPrefix+this.dsMenu.getColumn(_d,this.FRAME_MENUCOLUMNS.menuId));if(_b==this.dsMenu.getColumn(_d,this.FRAME_MENUCOLUMNS.menuId)){_c.setSelectStatus(true);}else{_c.setSelectStatus(false);}}};this.fnFindObj=function(_b){return this.divTopBtn.form.components[_b];};this.btnLogOut_onclick=function(_a,_b){if(system.navigatorname=="nexacro"){var _c="confirm.logout";var _d="";var _e=_c;var _f="fnMsgCallback";this.gfnAlert(_c,_d,_e,_f);}else{window.top.location.reload(true);}};this.Button_onclick=function(_a,_b){this.fvObjApp.avLeftFrame.form.fnChangeMenu(_a.menuid);this.fvObjApp.avLeftMinFrame.form.pdivMenu.form.fnChangeMenu(_a.menuid);this.fnSetActiveBtn(_a.menuid);};this.btnPre_onclick=function(_a,_b){this.fnMoveFirst(this.fnGetFirstTabIndex()-1);this.fnRedrawBtn();};this.btnNex_onclick=function(_a,_b){this.fnMoveFirst(this.fnGetFirstTabIndex()+1);this.fnRedrawBtn();};this.btnNotice_onclick=function(_a,_b){var _c=this.fvObjApp.avMainFrame.form;if(this.fvObjApp.avVFrameSet1.separatesize=="40,0,*"){_c=this.fvObjApp.avWorkFrame.getActiveFrame().form;}var _d=true;if(this.btnNotice.u_showYn=="Y"){this.fnSetNoticeShow(_c,false,_d);}else{this.fnSetNoticeShow(_c,true,_d);}};this.fnInitNoticeShow=function(_b){var _c=_b;var _d=this.fnGetNoticeShow();var _e=false;this.fnSetNoticeShow(_c,_d,_e);};this.fnGetNoticeShow=function(){if(this.btnNotice.u_showYn=="Y"){return true;}return false;};this.fnSetNoticeShow=function(_b,_c,_d){if(_c){this.btnNotice.u_showYn="Y";_b.divNotice.form.staNotice.set_text("공지사항입니다.");}else{this.btnNotice.u_showYn="N";}if(_d){this.fnCreateAniObject(_b);if(_c){_b.aniShow.play();}else{_b.aniHide.play();}}else{if(_c){_b.divNotice.set_height(150);}else{_b.divNotice.set_height(0);}}};this.fnCreateAniObject=function(_b){if(!_b.aniShow){var _c=new nexacro.Animation("aniShow",_b);_b.addChild("aniShow",_c);_b.aniShow.addTarget("AniItem01",_b.divNotice,"height:120");_b.aniShow.setEventHandler("oncomplete",function(_a,_e){},_b);_b.aniShow.set_duration(500);var _d=new nexacro.Animation("aniHide",_b);_b.addChild("aniHide",_d);_b.aniHide.addTarget("AniItem01",_b.divNotice,"height:0");_b.aniHide.setEventHandler("oncomplete",function(_a,_e){},_b);_b.aniHide.set_duration(500);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.addEventHandler("onsize",this.form_onsize,this);this.btnPre.addEventHandler("onclick",this.btnPre_onclick,this);this.btnNex.addEventHandler("onclick",this.btnNex_onclick,this);this.btnLogOut.addEventHandler("onclick",this.btnLogOut_onclick,this);this.divTopBtn.addEventHandler("onclick",this.div_Tab_onclick,this);this.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);};this.loadIncludeScript("FrameTop.xfdl");this.loadPreloadList();_a=null;};})();