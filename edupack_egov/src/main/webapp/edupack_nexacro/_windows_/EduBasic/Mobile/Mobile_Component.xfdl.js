(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Mobile_Component");this.set_titletext("모바일컴포넌트");if(Form==this.constructor){this._setFormPosition(480,728);}_a=new Dataset("ds_emp",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">DD001</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_slide","40","187","400","130",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_url("EduBasic::Mobile/Mobile_Sub_Slide.xfdl");_a.set_formscrollbartype("none");this.addChild(_a.name,_a);_a=new CheckBox("chk_toggle",null,"67","106","47","187",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("토글");_a.set_cssclass("chk_WF_onoff");_a.set_value("true");this.addChild(_a.name,_a);_a=new Combo("cbo_basic","20","435","140","50",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_innerdataset("ds_dept");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");this.addChild(_a.name,_a);_a=new Combo("cbo_test","170","435","140","50",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_innerdataset("ds_dept");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_popuptype("none");this.addChild(_a.name,_a);_a=new Combo("cbo_center","320","435","140","50",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_innerdataset("ds_dept");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_popuptype("center");this.addChild(_a.name,_a);_a=new Calendar("cal_basic","20","552","140","50",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_dateformat("yyyy.MM.dd");_a.set_editformat("yyyy.MM.dd");this.addChild(_a.name,_a);_a=new Calendar("cal_test","170","552","140","50",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_popuptype("center");_a.set_dateformat("yyyy.MM.dd");_a.set_editformat("yyyy.MM.dd");this.addChild(_a.name,_a);_a=new Calendar("cal_sys","320","552","140","50",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_popuptype("system");_a.set_dateformat("yyyy.MM.dd");_a.set_editformat("yyyy.MM.dd");this.addChild(_a.name,_a);_a=new Static("st_title01","10","135","400","40",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Slidebar(Div - Linked form)");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("sta_MBF_subtitle");this.addChild(_a.name,_a);_a=new Static("Static06","10","10","400","40",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("Toggle Switch(Checkbox)");_a.set_cssclass("sta_MBF_subtitle");this.addChild(_a.name,_a);_a=new Static("st_title02","10","337","400","40",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("popuptype (property)");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("sta_MBF_subtitle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_slide.form,function(_b){});this.div_slide.form.addLayout(_a.name,_a);_a=new Layout("default","screen_phone",480,728,this,function(_b){var _c=_b;_b=_c;_b.set_titletext("모바일컴포넌트");_b.div_slide.set_taborder("0");_b.div_slide.set_text("Div00");_b.div_slide.set_url("EduBasic::Mobile/Mobile_Sub_Slide.xfdl");_b.div_slide.set_formscrollbartype("none");_b.div_slide.move("40","187","400","130",null,null);_b.chk_toggle.set_taborder("1");_b.chk_toggle.set_text("토글");_b.chk_toggle.set_cssclass("chk_WF_onoff");_b.chk_toggle.set_value("true");_b.chk_toggle.move(null,"67","106","47","187",null);_b.cbo_basic.set_taborder("2");_b.cbo_basic.set_innerdataset("ds_dept");_b.cbo_basic.set_codecolumn("DEPT_CD");_b.cbo_basic.set_datacolumn("DEPT_NAME");_b.cbo_basic.move("20","435","140","50",null,null);_b.cbo_test.set_taborder("3");_b.cbo_test.set_innerdataset("ds_dept");_b.cbo_test.set_codecolumn("DEPT_CD");_b.cbo_test.set_datacolumn("DEPT_NAME");_b.cbo_test.set_popuptype("none");_b.cbo_test.move("170","435","140","50",null,null);_b.cbo_center.set_taborder("4");_b.cbo_center.set_innerdataset("ds_dept");_b.cbo_center.set_codecolumn("DEPT_CD");_b.cbo_center.set_datacolumn("DEPT_NAME");_b.cbo_center.set_popuptype("center");_b.cbo_center.move("320","435","140","50",null,null);_b.cal_basic.set_taborder("5");_b.cal_basic.set_dateformat("yyyy.MM.dd");_b.cal_basic.set_editformat("yyyy.MM.dd");_b.cal_basic.move("20","552","140","50",null,null);_b.cal_test.set_taborder("6");_b.cal_test.set_popuptype("center");_b.cal_test.set_dateformat("yyyy.MM.dd");_b.cal_test.set_editformat("yyyy.MM.dd");_b.cal_test.move("170","552","140","50",null,null);_b.cal_sys.set_taborder("7");_b.cal_sys.set_popuptype("system");_b.cal_sys.set_dateformat("yyyy.MM.dd");_b.cal_sys.set_editformat("yyyy.MM.dd");_b.cal_sys.move("320","552","140","50",null,null);_b.st_title01.set_taborder("8");_b.st_title01.set_text("Slidebar(Div - Linked form)");_b.st_title01.getSetter("leftbase").set("");_b.st_title01.getSetter("topbase").set("");_b.st_title01.getSetter("bottombase").set("");_b.st_title01.getSetter("rightbase").set("");_b.st_title01.getSetter("widthbase").set("");_b.st_title01.getSetter("heightbase").set("");_b.st_title01.set_cssclass("sta_MBF_subtitle");_b.st_title01.move("10","135","400","40",null,null);_b.Static06.set_taborder("9");_b.Static06.set_text("Toggle Switch(Checkbox)");_b.Static06.set_cssclass("sta_MBF_subtitle");_b.Static06.move("10","10","400","40",null,null);_b.st_title02.set_taborder("10");_b.st_title02.set_text("popuptype (property)");_b.st_title02.getSetter("leftbase").set("");_b.st_title02.getSetter("topbase").set("");_b.st_title02.getSetter("bottombase").set("");_b.st_title02.getSetter("rightbase").set("");_b.st_title02.getSetter("widthbase").set("");_b.st_title02.getSetter("heightbase").set("");_b.st_title02.set_cssclass("sta_MBF_subtitle");_b.st_title02.move("10","337","400","40",null,null);});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);_a=new Layout("default0","screen_phone",480,728,this,function(_b){var _c=_b;_b=_c;});_a.set_mobileorientation("portrait");this.addLayout(_a.name,_a);_a=new BindItem("item0","cal_sys","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","cal_basic","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","cal_test","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){this._addPreloadList("fdl","EduBasic::Mobile/Mobile_Sub_Slide.xfdl");};this.on_initEvent=function(){this.div_slide.addEventHandler("ondragmove",this.div_slide_ondragmove,this);this.chk_toggle.addEventHandler("onchanged",this.CheckBox00_onchanged,this);this.chk_toggle.addEventHandler("onclick",this.CheckBox00_onclick,this);this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);};this.loadIncludeScript("Mobile_Component.xfdl");this.loadPreloadList();_a=null;};})();