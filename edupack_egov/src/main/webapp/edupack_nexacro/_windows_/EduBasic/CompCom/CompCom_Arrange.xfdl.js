(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("CompCom_Arrange");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_emp",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Button("btn_retrieve","20","389","120","40",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text("Retrieve");_a.set_padding("0px 5px");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_add","btn_retrieve:8","389","120","40",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text("Add");_a.set_padding("0px 5px");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_del","btn_add:8","389","120","40",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_text("Delete");_a.set_padding("0px 5px");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_save","btn_del:8","389","120","40",null,null,null,null,null,null,this);_a.set_taborder("19");_a.set_text("Save");_a.set_padding("0px 5px");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static09","10","346","346","28",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text(" Fit To Contents - Text 사이즈에 따라 자동 맞춤");_a.set_cssclass("sta_WF_TitleType1");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_fit","360","346","50","28",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("지정");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_fit_re","415","346","50","28",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_text("해제");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new ImageViewer("img_grip2","712","296","12","11",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");_a.set_cursor("nw-resize");_a.set_positionstep("1");_a.set_background("red");this.addChild(_a.name,_a);_a=new Div("div_base00","368","79",null,null,"img_grip2:-8","img_grip2:-8",null,null,null,null,this);_a.set_taborder("13");_a.set_text("Div00");_a.set_positionstep("1");_a.set_background("#ffffff");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Button("Button03","2","2",null,"20.2%","2",null,null,null,null,null,this.div_base00.form);_a.set_taborder("3");_a.set_text("Comp1");this.div_base00.addChild(_a.name,_a);_a=new Button("Button00","2","Button03:2","22.2%",null,null,"2",null,null,null,null,this.div_base00.form);_a.set_taborder("0");_a.set_text("Comp2");this.div_base00.addChild(_a.name,_a);_a=new Button("Button01","Button00:2","Button03:2","45.81%",null,null,"2",null,null,null,null,this.div_base00.form);_a.set_taborder("1");_a.set_text("Comp3");this.div_base00.addChild(_a.name,_a);_a=new Button("Button02","Button01:2","Button03:2",null,null,"2","2",null,null,null,null,this.div_base00.form);_a.set_taborder("2");_a.set_text("Comp4");this.div_base00.addChild(_a.name,_a);_a=new Div("div_hor","449","350","412","290",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("Div00");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Button("btn_baseR","150","35","60","50",null,null,null,null,null,null,this.div_hor.form);_a.set_taborder("0");_a.set_background("khaki");_a.set_font("normal normal 10pt \"Verdana\"");_a.set_positionstep("0");_a.set_text("BASE");_a.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");this.div_hor.addChild(_a.name,_a);_a=new Button("Button00",null,"35","60","50","btn_baseR:10",null,null,null,null,null,this.div_hor.form);_a.set_taborder("1");_a.set_border("1px solid #9c9c9c , 2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");_a.set_positionstep("0");_a.set_text("Move");this.div_hor.addChild(_a.name,_a);_a=new Button("Button01","10","35",null,"50","btn_baseR:80",null,null,null,null,null,this.div_hor.form);_a.set_taborder("2");_a.set_border("1px solid #9c9c9c , 2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");_a.set_positionstep("0");_a.set_text("Resize");this.div_hor.addChild(_a.name,_a);_a=new Static("Static02","10","5","390","28",null,null,null,null,null,null,this.div_hor.form);_a.set_taborder("3");_a.set_text("기준 Comp의 Left 좌표를 컴포넌트의 Right에 상대좌표 지정");_a.set_cssclass("sta_WF_LabelTxt12");this.div_hor.addChild(_a.name,_a);_a=new Button("btn_baseL","200","196","60","50",null,null,null,null,null,null,this.div_hor.form);_a.set_taborder("4");_a.set_background("khaki");_a.set_font("normal normal 10pt \"Verdana\"");_a.set_positionstep("0");_a.set_text("BASE");_a.set_border("1px solid #9c9c9c , 2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");this.div_hor.addChild(_a.name,_a);_a=new Button("Button21","btn_baseL:80","196",null,"50","10",null,null,null,null,null,this.div_hor.form);_a.set_taborder("5");_a.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");_a.set_positionstep("0");_a.set_text("Resize");this.div_hor.addChild(_a.name,_a);_a=new Button("Button22","btn_baseL:10","196","60","50",null,null,null,null,null,null,this.div_hor.form);_a.set_taborder("6");_a.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");_a.set_positionstep("0");_a.set_text("Move");this.div_hor.addChild(_a.name,_a);_a=new Static("Static00","8","253","396","30",null,null,null,null,null,null,this.div_hor.form);_a.set_taborder("7");_a.set_text("기준 Comp의 Right 좌표를 컴포넌트의 Left에 상대좌표 지정");_a.set_textAlign("right");_a.set_cssclass("sta_WF_LabelTxt12");this.div_hor.addChild(_a.name,_a);_a=new Div("div_ver","21","350","412","290",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("Div00");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Button("btn_baseB","10","115","90","30",null,null,null,null,null,null,this.div_ver.form);_a.set_taborder("0");_a.set_background("khaki");_a.set_font("normal normal 10pt \"Verdana\"");_a.set_positionstep("0");_a.set_text("기준 Comp");_a.set_border("2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");this.div_ver.addChild(_a.name,_a);_a=new Button("Button17","10",null,"90","30",null,"btn_baseB:10",null,null,null,null,this.div_ver.form);_a.set_taborder("1");_a.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");_a.set_positionstep("0");_a.set_text("Move");this.div_ver.addChild(_a.name,_a);_a=new Button("Button18","10","35","90",null,null,"btn_baseB:50",null,null,null,null,this.div_ver.form);_a.set_taborder("2");_a.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");_a.set_positionstep("0");_a.set_text("Resize");this.div_ver.addChild(_a.name,_a);_a=new Button("btn_baseT","299","145","90","30",null,null,null,null,null,null,this.div_ver.form);_a.set_taborder("3");_a.set_background("khaki");_a.set_font("normal normal 10pt \"Verdana\"");_a.set_positionstep("0");_a.set_text("기준 Comp");_a.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");this.div_ver.addChild(_a.name,_a);_a=new Button("Button19","299","btn_baseT:50","90",null,null,"33",null,null,null,null,this.div_ver.form);_a.set_taborder("4");_a.set_border("2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");_a.set_positionstep("0");_a.set_text("Resize");this.div_ver.addChild(_a.name,_a);_a=new Button("Button20","299","btn_baseT:10","90","30",null,null,null,null,null,null,this.div_ver.form);_a.set_taborder("5");_a.set_border("2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");_a.set_positionstep("0");_a.set_text("Move");this.div_ver.addChild(_a.name,_a);_a=new Static("Static02","10","5","376","28",null,null,null,null,null,null,this.div_ver.form);_a.set_taborder("6");_a.set_text("기준 Comp의 Top 좌표를 컴포넌트의 Bottom에 상대좌표 지정");_a.set_wordWrap("english");_a.set_cssclass("sta_WF_LabelTxt12");this.div_ver.addChild(_a.name,_a);_a=new Static("Static00","18","258","376","28",null,null,null,null,null,null,this.div_ver.form);_a.set_taborder("7");_a.set_text("기준 Comp의 Bottom 좌표를 컴포넌트의 Top에 상대좌표 지정");_a.set_wordWrap("english");_a.set_textAlign("right");_a.set_cssclass("sta_WF_LabelTxt12");this.div_ver.addChild(_a.name,_a);_a=new ImageViewer("img_grip1","162","207","12","11",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");_a.set_cursor("nw-resize");_a.set_positionstep("1");_a.set_background("red");this.addChild(_a.name,_a);_a=new Static("Static03","10","40","270","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text(" Component Position - Resize");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static01","10","316","230","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("컴포넌트 기준 상대좌표 ");_a.set_cssclass("sta_WF_TitleType1");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_baseSize","20","85",null,null,"img_grip1:-8","img_grip1:-8",null,null,null,null,this);_a.set_taborder("0");_a.set_background("khaki");_a.set_font("normal normal 10pt \"Verdana\"");_a.set_text("BASE");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("Button08","btn_baseSize:10","86","btn_baseSize:50.00%","btn_baseSize:50.00%",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("w: 50%\r\nh: 50%");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static00","15","46","300","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("컴포넌트 사이즈에 따라 크기를 비율로 지정");_a.set_cssclass("sta_WF_TitleType1");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new ImageViewer("img_grip","445","281","12","11",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");_a.set_cursor("nw-resize");_a.set_background("red");this.addChild(_a.name,_a);_a=new Button("btn_start","199","316","43","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("실행");this.addChild(_a.name,_a);_a=new Button("btn_stop","247","316","43","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Stop");this.addChild(_a.name,_a);_a=new Div("div_base","20","73",null,null,"img_grip:-8","img_grip:-7",null,null,null,null,this);_a.set_taborder("3");_a.set_text("Div00");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Button("Button00","10","10","120","51",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("0");_a.set_text("Left Top");_a.set_border("2px solid blue,1px solid #9c9c9c,1px solid #9c9c9c,2px solid blue");this.div_base.addChild(_a.name,_a);_a=new Button("Button01",null,"10","120","51","10",null,null,null,null,null,this.div_base.form);_a.set_taborder("1");_a.set_text("Right Top");_a.set_border("2px solid blue,2px solid blue,1px solid #9c9c9c,1px solid #9c9c9c");this.div_base.addChild(_a.name,_a);_a=new Button("Button02","10",null,"120","50",null,"10",null,null,null,null,this.div_base.form);_a.set_taborder("2");_a.set_text("Left Bottom");_a.set_border("1px solid #9c9c9c,1px solid #9c9c9c,2px solid blue,2px solid blue");this.div_base.addChild(_a.name,_a);_a=new Button("Button03",null,null,"120","50","10","10",null,null,null,null,this.div_base.form);_a.set_taborder("3");_a.set_text("Right Bottom");_a.set_border("1px solid #9c9c9c,2px solid blue,2px solid blue,1px solid #9c9c9c");this.div_base.addChild(_a.name,_a);_a=new Button("Button04","10","80",null,null,"10","80",null,null,null,null,this.div_base.form);_a.set_taborder("4");_a.set_text("Left Top Right Bottom");_a.set_border("2px solid blue");this.div_base.addChild(_a.name,_a);_a=new Static("Static00_00","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("21");_a.set_text("Position");_a.set_cssclass("sta_WF_TitleMain");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_base00.form,function(_b){});this.div_base00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_hor.form,function(_b){});this.div_hor.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_ver.form,function(_b){});this.div_ver.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_base.form,function(_b){});this.div_base.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");_a.set_stepcount("2");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("CompCom_Arrange.xfdl",function(){this.obj_ondrag=function(_a,_b){return true;};this.obj_onlbuttondown=function(_a,_b){_a.nX=_b.clientx;_a.nY=_b.clienty;};this.Form_ondragmove=function(_a,_b){_b.sourceobject.move(_b.clientx-_b.sourceobject.nX,_b.clienty-_b.sourceobject.nY);this.resetScroll();};this.btn_start_onclick=function(_a,_b){this.setTimer(1,50);};this.btn_stop_onclick=function(_a,_b){this.killTimer(1);};this.Form_ontimer=function(_a,_b){if(_b.timerid==1){var _c=new Array();_c[0]=this.div_hor.form.btn_baseR;_c[1]=this.div_hor.form.btn_baseL;_c[2]=this.div_ver.form.btn_baseB;_c[3]=this.div_ver.form.btn_baseT;this.fn_move(_c);}};this.nCnt=0;this.sFlag="A";this.fn_move=function(_b){if(this.nCnt==100){this.sFlag="B";}else if(this.nCnt==0){this.sFlag="A";}if(this.sFlag=="A"){_b[0].move(parseInt(_b[0].left)+1,parseInt(_b[0].top));_b[1].move(parseInt(_b[1].left)-1,parseInt(_b[1].top));_b[2].move(parseInt(_b[2].left),parseInt(_b[2].top)+1);_b[3].move(parseInt(_b[3].left),parseInt(_b[3].top)-1);this.nCnt++ ;}else{_b[0].move(parseInt(_b[0].left)-1,parseInt(_b[0].top));_b[1].move(parseInt(_b[1].left)+1,parseInt(_b[1].top));_b[2].move(parseInt(_b[2].left),parseInt(_b[2].top)-1);_b[3].move(parseInt(_b[3].left),parseInt(_b[3].top)+1);this.nCnt-- ;}this.div_hor.form.resetScroll();this.div_ver.form.resetScroll();};this.btn_fit_onclick=function(_a,_b){this.btn_retrieve.set_fittocontents("width");this.btn_add.set_fittocontents("width");this.btn_del.set_fittocontents("width");this.btn_save.set_fittocontents("width");};this.btn_fit_re_onclick=function(_a,_b){this.btn_retrieve.set_fittocontents("none");this.btn_add.set_fittocontents("none");this.btn_del.set_fittocontents("none");this.btn_save.set_fittocontents("none");};});this.on_initEvent=function(){this.addEventHandler("ondragmove",this.Form_ondragmove,this);this.addEventHandler("ontimer",this.Form_ontimer,this);this.btn_retrieve.addEventHandler("onclick",this.Button02_onclick,this);this.btn_fit.addEventHandler("onclick",this.btn_fit_onclick,this);this.btn_fit_re.addEventHandler("onclick",this.btn_fit_re_onclick,this);this.img_grip2.addEventHandler("ondrag",this.obj_ondrag,this);this.img_grip2.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.div_hor.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);this.div_hor.form.btn_baseR.addEventHandler("ondrag",this.obj_ondrag,this);this.div_hor.form.btn_baseR.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.div_hor.form.btn_baseL.addEventHandler("ondrag",this.obj_ondrag,this);this.div_hor.form.btn_baseL.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.div_ver.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);this.div_ver.form.btn_baseB.addEventHandler("ondrag",this.obj_ondrag,this);this.div_ver.form.btn_baseB.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.div_ver.form.btn_baseT.addEventHandler("ondrag",this.obj_ondrag,this);this.div_ver.form.btn_baseT.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.img_grip1.addEventHandler("ondrag",this.obj_ondrag,this);this.img_grip1.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.img_grip.addEventHandler("ondrag",this.obj_ondrag,this);this.img_grip.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.btn_start.addEventHandler("onclick",this.btn_start_onclick,this);this.btn_stop.addEventHandler("onclick",this.btn_stop_onclick,this);};this.loadIncludeScript("CompCom_Arrange.xfdl");this.loadPreloadList();_a=null;};})();