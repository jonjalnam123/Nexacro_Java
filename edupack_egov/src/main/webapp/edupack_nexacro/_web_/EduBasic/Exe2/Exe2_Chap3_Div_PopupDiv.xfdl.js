(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Exe2_Chap3_Div_PopupDiv");this.set_titletext("Exe2_Chap3_Div_PopupDiv");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("Dataset1",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static06","10","0","250","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Exercise - Div / PopupDiv");_a.set_cssclass("sta_WF_FrmTitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Exe 1 - PopupDiv1");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new PopupDiv("PopupDiv1","590","10","400","250",null,null,null,null,null,null,this);_a.set_text("PopupDiv00");this.addChild(_a.name,_a);_a=new Grid("Grid00","10","40","378","161",null,null,null,null,null,null,this.PopupDiv1.form);_a.set_taborder("0");_a.set_binddataset("Dataset1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");this.PopupDiv1.addChild(_a.name,_a);_a=new Button("btn_Exe1_Close","10","211","100","30",null,null,null,null,null,null,this.PopupDiv1.form);_a.set_taborder("1");_a.set_text("Exe1_Close");this.PopupDiv1.addChild(_a.name,_a);_a=new Static("Static02","10","10","81","30",null,null,null,null,null,null,this.PopupDiv1.form);_a.set_taborder("2");_a.set_text("Contents");this.PopupDiv1.addChild(_a.name,_a);_a=new Button("btn_Exe1_1","10","110","60","30",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("1_1");this.addChild(_a.name,_a);_a=new Edit("edt_dept","80","110","120","30",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_displaynulltext("Dept");this.addChild(_a.name,_a);_a=new Edit("edt_name","210","110","100","30",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_displaynulltext("Name");this.addChild(_a.name,_a);_a=new Edit("edt_id","320","110","80","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_displaynulltext("ID");this.addChild(_a.name,_a);_a=new PopupDiv("PopupDiv2","590","270","400","250",null,null,null,null,null,null,this);_a.set_url("EduBasic::Exe2/Exe2_Chap3_Div_PopupDiv_Sub.xfdl");_a.set_text("");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_1","10","230","60","30",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("2_1");this.addChild(_a.name,_a);_a=new Edit("edt_dept2","80","230","120","30",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_displaynulltext("Dept");this.addChild(_a.name,_a);_a=new Edit("edt_name2","210","230","100","30",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_displaynulltext("Name");this.addChild(_a.name,_a);_a=new Edit("edt_id2","320","230","80","30",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_displaynulltext("ID");this.addChild(_a.name,_a);_a=new Static("Static00","10","170","250","30",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("Exe 2 - PopupDiv2");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Static("Static01","10","290","250","30",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("Exe 3 - PopupDiv3");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Calendar("cal_from","10","350","150","30",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_positionstep("0");_a.set_dateformat("yyyy-MM-dd");_a.set_popuptype("none");this.addChild(_a.name,_a);_a=new Calendar("cal_to","183","350","150","30",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_positionstep("0");_a.set_dateformat("yyyy-MM-dd");_a.set_popuptype("none");this.addChild(_a.name,_a);_a=new Static("Static02","166","350","10","30",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("~");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new PopupDiv("PopupDiv3","15","403","430","280",null,null,null,null,null,null,this);_a.getSetter("positionstep").set("0");_a.set_border("1px solid #919396");this.addChild(_a.name,_a);_a=new Calendar("cal_from","10","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_editformat("yyyy-MM-dd");_a.set_type("monthonly");_a.set_value("");this.PopupDiv3.addChild(_a.name,_a);_a=new Calendar("cal_to","220","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_editformat("yyyy-MM-dd");_a.set_type("monthonly");this.PopupDiv3.addChild(_a.name,_a);_a=new Button("btn_confirm","130","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);_a.set_taborder("3");_a.set_text("Confirm");_a.getSetter("uWord").set("popup.ok");this.PopupDiv3.addChild(_a.name,_a);_a=new Button("btn_cancel","220","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);_a.set_taborder("2");_a.set_text("Cancel");_a.getSetter("uWord").set("popup.cancel");this.PopupDiv3.addChild(_a.name,_a);_a=new Static("Static03","10","70","406","30",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("Contents로 구성된 PopupDiv1을 버튼 하단에 오픈. ");this.addChild(_a.name,_a);_a=new Static("Static04","10","200","407","30",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text("Linked Form으로 구성된 PopupDiv2을 버튼 하단에 오픈. ");this.addChild(_a.name,_a);_a=new Static("Static05","10","320","408","30",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text("PopupDiv를 이용하여 기간 달력 기능 구현. ");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.PopupDiv1.form,function(_b){});this.PopupDiv1.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.PopupDiv2.form,function(_b){});this.PopupDiv2.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.PopupDiv3.form,function(_b){});this.PopupDiv3.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_stepcount("0");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){this._addPreloadList("fdl","EduBasic::Exe2/Exe2_Chap3_Div_PopupDiv_Sub.xfdl");};this.registerScript("Exe2_Chap3_Div_PopupDiv.xfdl",function(){this.btn_Exe1_1_onclick=function(_a,_b){var _c=parseInt(0);var _d=parseInt(_a.height);this.PopupDiv1.trackPopupByComponent(_a,_c,_d);};this.PopupDiv1_btn_Exe1_Close_onclick=function(_a,_b){var _c=this.Dataset1.getColumn(this.Dataset1.rowposition,"DEPT_NAME");var _d=this.Dataset1.getColumn(this.Dataset1.rowposition,"FULL_NAME");var _e=this.Dataset1.getColumn(this.Dataset1.rowposition,"EMPL_ID");this.edt_dept.set_value(_c);this.edt_name.set_value(_d);this.edt_id.set_value(_e);this.PopupDiv1.closePopup();};this.btn_Exe2_1_onclick=function(_a,_b){var _c=parseInt(0);var _d=parseInt(_a.height);this.PopupDiv2.trackPopupByComponent(_a,_c,_d,null,null,"fn_pDivCallback");};this.fn_pDivCallback=function(_b,_c){if(_c==""){return;}if(_b=="PopupDiv2"){this.edt_dept2.set_value(_c[0]);this.edt_name2.set_value(_c[1]);this.edt_id2.set_value(_c[2]);}};this.Form_onload=function(_a,_b){var _c=new Date();var _d=_c.getFullYear()+((_c.getMonth()+1)+"").padLeft(2,'0')+(_c.getDate()+"").padLeft(2,'0');this.cal_from.set_value(_d.substring(0,6)+"01");this.cal_to.set_value(_d);};this.cal_from_ondropdown=function(_a,_b){this.PopupDiv3.form.cal_from.set_value(this.cal_from.value);this.PopupDiv3.form.cal_to.set_value(this.cal_to.value);this.PopupDiv3.trackPopupByComponent(this.cal_from,0,_a.height);};this.PopupDiv3_btn_confirm_onclick=function(_a,_b){var _c=this.PopupDiv3.form.cal_from.value;var _d=this.PopupDiv3.form.cal_to.value;this.cal_from.set_value(_c);this.cal_to.set_value(_d);this.PopupDiv3.closePopup();};this.PopupDiv3_btn_cancel_onclick=function(_a,_b){this.PopupDiv3.closePopup();};this.PopupDiv3_oncloseup=function(_a,_b){if(this.cal_from.value>this.cal_to.value){this.alert("End Date Should be later than From Date");this.cal_to.set_value("");}};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.PopupDiv1.form.btn_Exe1_Close.addEventHandler("onclick",this.PopupDiv1_btn_Exe1_Close_onclick,this);this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);this.PopupDiv2.addEventHandler("oncloseup",this.PopupDiv2_oncloseup,this);this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);};this.loadIncludeScript("Exe2_Chap3_Div_PopupDiv.xfdl");this.loadPreloadList();_a=null;};})();