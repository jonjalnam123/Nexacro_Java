(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("CompCom_Event");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_emp",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">AA003</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CC002</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">CC003</Col></Row><Row><Col id=\"FULL_NAME\">Tyler</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20060907</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">DD001</Col></Row><Row><Col id=\"FULL_NAME\">David</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010408</Col><Col id=\"SALARY\">45000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">DD002</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("Grid00","10","288","510","212",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_binddataset("ds_emp");_a.set_enable("true");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text(" Components");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static08","20","73","140","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("Edit");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.addChild(_a.name,_a);_a=new Static("Static05","20","106","140","28",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("Combo");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.addChild(_a.name,_a);_a=new Static("Static14","20","139","140","28",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("Calendar");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.addChild(_a.name,_a);_a=new Calendar("cal_event","164","139","166","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_locale("");_a.set_value("20210901");_a.set_hotkey("");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new TextArea("txt_log","540","65",null,null,"10","10",null,null,null,null,this);_a.set_taborder("13");_a.set_positionstep("0");_a.set_value("event log");this.addChild(_a.name,_a);_a=new Combo("cmb_event","164","106","166","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");var _b=new nexacro.NormalDataset("cmb_event_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("Combo00");this.addChild(_a.name,_a);_a=new Radio("rdo_rtn","128","172","132","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("2");var _c=new nexacro.NormalDataset("rdo_rtn_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_value("true");_a.set_index("0");this.addChild(_a.name,_a);_a=new Static("Static20","23","172","136","28",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("return value");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Edit("edt_event","164","73","166","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("event log");this.addChild(_a.name,_a);_a=new Button("btn_clear","txt_log:-63","65","63","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Clear");this.addChild(_a.name,_a);_a=new Static("Static00","10","258","250","28",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text(" Dataset");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static01","22","205","146","28",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text("Event enable");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Radio("rdo_enable","128","205","132","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("2");var _d=new nexacro.NormalDataset("rdo_enable_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_value("true");_a.set_index("0");this.addChild(_a.name,_a);_a=new Static("Static02","10","544","250","28",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text(" Event Handler");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Button("btn_click","16","574","120","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("Click Event");this.addChild(_a.name,_a);_a=new Button("btn_addEvent","141","574","120","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Add Event");this.addChild(_a.name,_a);_a=new Static("Static00_00","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_text("Event");_a.set_cssclass("sta_WF_TitleMain");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_e){});_a.set_stepcount("0");this.addLayout(_a.name,_a);_a=new BindItem("item0","edt_event","value","ds_emp","FULL_NAME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","cmb_event","value","ds_emp","DEPT_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","cal_event","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("CompCom_Event.xfdl",function(){this.sLog=this.txt_log.value+"\n";this.edt_event_oninput=function(_a,_b){this.sLog+="Edit :: oninput \n";this.txt_log.set_value(this.sLog);};this.edt_event_canchange=function(_a,_b){this.sLog+="Edit :: canchange \n";this.txt_log.set_value(this.sLog);return this.rdo_rtn.value;};this.edt_event_onchanged=function(_a,_b){this.sLog+="Edit :: onchanged \n";this.txt_log.set_value(this.sLog);};this.cmb_event_ondropdown=function(_a,_b){this.sLog+="Combo :: ondropdown \n";this.txt_log.set_value(this.sLog);};this.cmb_event_onitemclick=function(_a,_b){this.sLog+="Combo :: onitemclick \n";this.txt_log.set_value(this.sLog);};this.cmb_event_canitemchange=function(_a,_b){this.sLog+="Combo :: canitemchange \n";this.txt_log.set_value(this.sLog);return this.rdo_rtn.value;};this.cmb_event_onitemchanged=function(_a,_b){this.sLog+="Combo :: onitemchanged : "+_b.pretext+" >> "+_b.posttext+" \n";this.txt_log.set_value(this.sLog);};this.cmb_event_oncloseup=function(_a,_b){this.sLog+="Combo :: oncloseup \n";this.txt_log.set_value(this.sLog);};this.cal_event_oncloseup=function(_a,_b){this.sLog+="Calendar :: oncloseup \n";this.txt_log.set_value(this.sLog);};this.cal_event_ondayclick=function(_a,_b){this.sLog+="Calendar :: ondayclick e.date : "+_b.date+"\n";this.txt_log.set_value(this.sLog);};this.cal_event_oneditclick=function(_a,_b){this.sLog+="Calendar :: oneditclick \n";this.txt_log.set_value(this.sLog);};this.btn_clear_onclick=function(_a,_b){this.sLog="event log \n";this.txt_log.set_value(this.sLog);};this.ds_emp_cancolumnchange=function(_a,_b){this.sLog+="Dataset :: cancolumnchange \n";this.txt_log.set_value(this.sLog);return this.rdo_rtn.value;};this.ds_emp_oncolumnchanged=function(_a,_b){this.sLog+="Dataset :: oncolumnchanged "+_b.oldvalue+" >> "+_b.newvalue+"\n";this.txt_log.set_value(this.sLog);};this.ds_emp_canrowposchange=function(_a,_b){this.sLog+="Dataset :: canrowposchange \n";this.txt_log.set_value(this.sLog);return this.rdo_rtn.value;};this.ds_emp_onrowposchanged=function(_a,_b){this.sLog+="Dataset :: onrowposchanged "+_b.oldrow+" >> "+_b.newrow+"\n";this.txt_log.set_value(this.sLog);};this.rdo_enable_onitemchanged=function(_a,_b){this.ds_emp.set_enableevent(_a.value);};this.btn_click_onclick=function(_a,_b){this.alert("Hello nexacro");};this.btn_addEvent_onclick=function(_a,_b){this.btn_click.addEventHandler("onclick",this.fn_addEvent,this);};this.fn_addEvent=function(){this.alert("Add Event - Hello World");};});this.on_initEvent=function(){this.cal_event.addEventHandler("oncloseup",this.cal_event_oncloseup,this);this.cal_event.addEventHandler("ondayclick",this.cal_event_ondayclick,this);this.cal_event.addEventHandler("oneditclick",this.cal_event_oneditclick,this);this.cmb_event.addEventHandler("canitemchange",this.cmb_event_canitemchange,this);this.cmb_event.addEventHandler("oncloseup",this.cmb_event_oncloseup,this);this.cmb_event.addEventHandler("onitemchanged",this.cmb_event_onitemchanged,this);this.cmb_event.addEventHandler("onitemclick",this.cmb_event_onitemclick,this);this.cmb_event.addEventHandler("ondropdown",this.cmb_event_ondropdown,this);this.edt_event.addEventHandler("canchange",this.edt_event_canchange,this);this.edt_event.addEventHandler("onchanged",this.edt_event_onchanged,this);this.edt_event.addEventHandler("oninput",this.edt_event_oninput,this);this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);this.rdo_enable.addEventHandler("onitemchanged",this.rdo_enable_onitemchanged,this);this.btn_click.addEventHandler("onclick",this.btn_click_onclick,this);this.btn_addEvent.addEventHandler("onclick",this.btn_addEvent_onclick,this);this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);this.ds_emp.addEventHandler("canrowposchange",this.ds_emp_canrowposchange,this);this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);};this.loadIncludeScript("CompCom_Event.xfdl");this.loadPreloadList();_a=null;};})();