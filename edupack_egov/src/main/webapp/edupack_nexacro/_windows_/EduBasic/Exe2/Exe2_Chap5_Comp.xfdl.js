(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Exe2_Chap5_Comp");this.set_titletext("Exe2_Chap5_Comp");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("Dataset2",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"COL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"COL_SIZE\" type=\"INT\" size=\"10\"/><Column id=\"COL_COLOR\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"COL_NAME\">Olivia</Col><Col id=\"COL_SIZE\">200</Col><Col id=\"COL_COLOR\">gold</Col></Row><Row><Col id=\"COL_NAME\">John</Col><Col id=\"COL_SIZE\">150</Col><Col id=\"COL_COLOR\">greenyellow</Col></Row><Row><Col id=\"COL_NAME\">Jackson</Col><Col id=\"COL_SIZE\">250</Col><Col id=\"COL_COLOR\">pink</Col></Row><Row><Col id=\"COL_NAME\">Maia</Col><Col id=\"COL_SIZE\">100</Col><Col id=\"COL_COLOR\">khaki</Col></Row><Row><Col id=\"COL_NAME\">Adam</Col><Col id=\"COL_SIZE\">80</Col><Col id=\"COL_COLOR\">lavender</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static06","10","0","250","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Exercise - Button");_a.set_cssclass("sta_WF_FrmTitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Static("Static07","10","40","280","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Exe 1 - Position & Arrangement");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_1","10","381","60","30",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("2_1");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_5","510","381","60","30",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("2_5");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_6","510","421","60","30",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("2_6");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Grid("Grid00","510",null,null,"194","10","-5",null,null,null,null,this);_a.set_taborder("10");_a.set_positionstep("0");_a.set_binddataset("Dataset2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"COL_NAME\"/><Cell col=\"1\" text=\"COL_SIZE\"/><Cell col=\"2\" text=\"COL_COLOR\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:COL_SIZE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:COL_COLOR\" textAlign=\"center\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("Div2","76","540","418","148",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Div");_a.set_positionstep("0");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_3","10","461","60","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("2_3");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_2","10","421","60","30",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("2_2");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_4","10","501","60","30",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("2_4");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Static("Static03","10","351","250","30",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Exe 2 - Dynamic Creation");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new ImageViewer("img_grip","400","304","12","11",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_cursor("nw-resize");_a.set_image("url(\'theme://images/img_SB_Grip.png\')");this.addChild(_a.name,_a);_a=new Div("div_base","10","72",null,null,"img_grip:-7","img_grip:-7",null,null,null,null,this);_a.set_taborder("12");_a.set_border("1px solid #9c9c9c");_a.set_background("#f2f2f2");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Button("btn_base","20","190",null,"30","300",null,null,null,null,null,this.div_base.form);_a.set_taborder("0");_a.set_text("btn_base");this.div_base.addChild(_a.name,_a);_a=new Button("btn_per","100","110","50%","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("1");_a.set_text("Get Width");this.div_base.addChild(_a.name,_a);_a=new Button("btn_arrange","btn_base:10","190","200","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("2");_a.set_text("Get Left");this.div_base.addChild(_a.name,_a);_a=new Static("Static02","70","0","260","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("3");_a.set_text("left=\"100\" right = \"100\" width=null");this.div_base.addChild(_a.name,_a);_a=new Static("Static01","10","0","60","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("4");_a.set_text("null");_a.set_cssclass("sta_WF_LabelTxt");this.div_base.addChild(_a.name,_a);_a=new Static("Static03","10","80","124","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("5");_a.set_text("Percent(%)");_a.set_cssclass("sta_WF_LabelTxt");this.div_base.addChild(_a.name,_a);_a=new Static("Static04","134","80","210","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("6");_a.set_text("width = \"50%\"");this.div_base.addChild(_a.name,_a);_a=new Static("Static05","10","160","134","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("7");_a.set_text("Arrangement");_a.set_cssclass("sta_WF_LabelTxt");this.div_base.addChild(_a.name,_a);_a=new Static("Static06","144","160","170","30",null,null,null,null,null,null,this.div_base.form);_a.set_taborder("8");_a.set_text("left=\"btn_base:10\"");this.div_base.addChild(_a.name,_a);_a=new Button("btn_null","100","30",null,"30","100",null,null,null,null,null,this.div_base.form);_a.set_taborder("9");_a.set_text("Get Width");this.div_base.addChild(_a.name,_a);_a=new TextArea("txt_log","div_base:10","73","220","div_base:50%",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static08","80","383","240","30",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("컴포넌트 동적 생성");this.addChild(_a.name,_a);_a=new Static("Static08_00","80","419","240","30",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("동적 생성힌 컴포넌트 삭제");this.addChild(_a.name,_a);_a=new Static("Static08_00_00","80","500","240","30",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text("Div 안에 동적 생성힌 컴포넌트 삭제");this.addChild(_a.name,_a);_a=new Static("Static08_01","80","460","240","30",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text("Div 안에 컴포넌트 동적 생성");this.addChild(_a.name,_a);_a=new Static("Static08_02","580","381","230","30",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_text("컴포넌트에 동적 이벤트 생성");this.addChild(_a.name,_a);_a=new Static("Static08_02_00","580","421","230","30",null,null,null,null,null,null,this);_a.set_taborder("19");_a.set_text("컴포넌트에 동적 바인드");this.addChild(_a.name,_a);_a=new Edit("edt_bind","750","421","176","30",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_value("script bind");_a.set_text("script bind");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Div2.form,function(_b){});this.Div2.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_base.form,function(_b){});this.div_base.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_stepcount("0");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Exe2_Chap5_Comp.xfdl",function(){this.fn_getWidth=function(_a,_b){var _c="";_c="obj.width = "+_a.width+"\n";_c+="obj.getOffsetWidth() = "+_a.getOffsetWidth()+"\n";_c+="obj.getPixelWidth() = "+_a.getPixelWidth();this.txt_log.set_value(_c);};this.fn_getWidthPer=function(_a,_b){var _c="";_c="obj.width = "+_a.width+"\n";_c+="obj.getOffsetWidth() = "+_a.getOffsetWidth()+"\n";_c+="obj.getPixelWidth() = "+_a.getPixelWidth();this.txt_log.set_value(_c);};this.fn_getArrange=function(_a,_b){var _c="";_c="obj.left = "+_a.left+"\n";_c+="obj.getOffsetLeft() = "+_a.getOffsetLeft()+"\n";_c+="obj.getPixelLeft() = "+_a.getPixelLeft();this.txt_log.set_value(_c);};this.btn_Exe2_1_onclick=function(_a,_b){var _c=new Button();_c.init("btn_Comp",320,380,150,100);this.addChild("btn_Comp",_c);_c.set_text("Created Button");_c.set_background("skyblue");_c.show();};this.btn_Exe2_2_onclick=function(_a,_b){var _c=this.removeChild("btn_Comp");_c.destroy();_c=null;};this.btn_Exe2_3_onclick=function(_a,_b){var _c=new Button();_c.init("btn_divComp",10,10,150,100);this.Div2.form.addChild("btn_divComp",_c);_c.set_text("Created Div Button");_c.set_background("greenyellow");_c.show();};this.btn_Exe2_4_onclick=function(_a,_b){var _c=this.Div2.form.removeChild("btn_divComp");_c.destroy();_c=null;};this.btn_Exe2_5_onclick=function(_a,_b){if(!this.isValidObject(this.btn_Comp)){this.btn_Exe2_1_onclick();}this.btn_Comp.addEventHandler("onclick",this.fn_temp,this);};this.fn_temp=function(){this.alert("Add Event Handler");};this.btn_Exe2_6_onclick=function(_a,_b){var _c=new BindItem();_c.init("item00","edt_bind","value","Dataset2","COL_NAME");this.addChild("item00",_c);_c.bind();_c=new BindItem();_c.init("item01","edt_bind","width","Dataset2","COL_SIZE");this.addChild("item01",_c);_c.bind();_c=new BindItem();_c.init("item02","edt_bind","background","Dataset2","COL_COLOR");this.addChild("item02",_c);_c.bind();};this.obj_ondrag=function(_a,_b){return true;};this.obj_onlbuttondown=function(_a,_b){_a.nX=_b.clientx;_a.nY=_b.clienty;};this.Form_ondragmove=function(_a,_b){_b.sourceobject.move(_b.clientx-_b.sourceobject.nX,_b.clienty-_b.sourceobject.nY);this.resetScroll();};});this.on_initEvent=function(){this.addEventHandler("ondragmove",this.Form_ondragmove,this);this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);this.btn_Exe2_5.addEventHandler("onclick",this.btn_Exe2_5_onclick,this);this.btn_Exe2_6.addEventHandler("onclick",this.btn_Exe2_6_onclick,this);this.btn_Exe2_3.addEventHandler("onclick",this.btn_Exe2_3_onclick,this);this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);this.btn_Exe2_4.addEventHandler("onclick",this.btn_Exe2_4_onclick,this);this.img_grip.addEventHandler("ondrag",this.obj_ondrag,this);this.img_grip.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);this.div_base.form.btn_base.addEventHandler("onclick",this.div_base_btn_base_onclick,this);this.div_base.form.btn_per.addEventHandler("onclick",this.fn_getWidthPer,this);this.div_base.form.btn_arrange.addEventHandler("onclick",this.fn_getArrange,this);this.div_base.form.btn_null.addEventHandler("onclick",this.fn_getWidth,this);this.Static08.addEventHandler("onclick",this.Static08_onclick,this);this.Static08_00.addEventHandler("onclick",this.Static08_onclick,this);this.Static08_00_00.addEventHandler("onclick",this.Static08_onclick,this);this.Static08_01.addEventHandler("onclick",this.Static08_onclick,this);this.Static08_02.addEventHandler("onclick",this.Static08_onclick,this);this.Static08_02_00.addEventHandler("onclick",this.Static08_onclick,this);};this.loadIncludeScript("Exe2_Chap5_Comp.xfdl");this.loadPreloadList();_a=null;};})();