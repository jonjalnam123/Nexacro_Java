(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Form_ScriptSample1");this.set_titletext("화면 예시");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_dept",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gender",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_pos",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static01",null,"-90","10",null,"345","90",null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_WF_guideRed");_a.set_visible("false");_a.set_text("w\r\n10");this.addChild(_a.name,_a);_a=new Grid("grd_emp","293","199",null,null,"10","230",null,null,null,null,this);_a.set_taborder("1");_a.set_autofittype("col");_a.set_binddataset("ds_emp");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"입사일자\"/><Cell col=\"4\" text=\"급여\"/><Cell col=\"5\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"4\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"expr:(GENDER == &quot;M&quot; ? &quot;Male&quot; : (GENDER == &quot;W&quot; ? &quot;Female&quot; : &quot;&quot;))\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_04","763","-331","39","64",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_color("red");_a.set_text("h64");_a.set_visible("true");_a.set_cssclass("sta_WF_guideRed");this.addChild(_a.name,_a);_a=new Static("sta_08","468","-315","29","12",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_color("red");_a.set_text("h4");_a.set_visible("true");_a.set_cssclass("sta_WF_guideRedTxt");this.addChild(_a.name,_a);_a=new Static("Static20","103","-301","649","4",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_cssclass("sta_WF_guideRed");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Static("Static03","293","38","80","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("조회조건");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Grid("grd_dept","10","71","273",null,null,"9",null,null,null,null,this);_a.set_taborder("6");_a.set_binddataset("ds_dept");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"77\"/><Column size=\"151\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CODE_NAME\" textAlign=\"center\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_save",null,"0","60","28","10",null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("저장");_a.set_visible("true");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_delete",null,"0","60","28","75",null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("삭제");_a.set_visible("true");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_add",null,"0","60","28","140",null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("입력");_a.set_visible("true");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_search",null,"0","60","28","205",null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("조회");_a.set_visible("true");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_search","293","71",null,"85","10",null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Static("Static00","30","8","86","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("0");_a.set_text("입사일자");_a.set_cssclass("sta_WF_LabelTxt");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","30","41","87","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("1");_a.set_text("성      별");_a.set_cssclass("sta_WF_LabelTxt");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_gender","117","41","208","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("2");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NAME");_a.set_rowcount("-1");_a.set_innerdataset("ds_gender");_a.set_columncount("-1");_a.set_index("0");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_from","116","8","140","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");this.div_search.addChild(_a.name,_a);_a=new Static("Static00_00","256","8","30","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("4");_a.set_text("~");_a.set_textAlign("center");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_to","286","8","140","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","10","0","160","28",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("부서별 사원정보");_a.set_cssclass("sta_WF_TitleMain");this.addChild(_a.name,_a);_a=new Div("div_detail","293",null,null,"225","10","0",null,null,null,null,this);_a.set_taborder("13");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("Static02","119","0",null,"40","0",null,null,null,null,null,this.div_detail.form);_a.set_taborder("7");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static09","119","39",null,"40","0",null,null,null,null,null,this.div_detail.form);_a.set_taborder("8");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static17","119","78",null,"40","0",null,null,null,null,null,this.div_detail.form);_a.set_taborder("13");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static07","119","117",null,"102","0",null,null,null,null,null,this.div_detail.form);_a.set_taborder("17");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name","126","6","182","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("0");this.div_detail.addChild(_a.name,_a);_a=new MaskEdit("msk_id","489","6","182","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("1");_a.set_type("string");_a.set_format("AA-###");this.div_detail.addChild(_a.name,_a);_a=new Combo("cbo_pos","126","45","182","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("2");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NAME");_a.set_innerdataset("ds_pos");_a.set_text("");_a.set_value("");_a.set_index("-1");this.div_detail.addChild(_a.name,_a);_a=new Radio("rdo_gender","126","84","182","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("2");var _b=new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");_a.set_innerdataset(_b);this.div_detail.addChild(_a.name,_a);_a=new CheckBox("chk_married","492","84","182","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("4");this.div_detail.addChild(_a.name,_a);_a=new Calendar("cal_date","489","45","182","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("5");this.div_detail.addChild(_a.name,_a);_a=new TextArea("txt_memo","126","124","555","88",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("6");this.div_detail.addChild(_a.name,_a);_a=new Static("Static10","0","0","120","40",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("9");_a.set_text("성명");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static12","363","39","120","40",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("10");_a.set_text("입사일자");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static14","0","39","120","40",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("11");_a.set_text("직급");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static16","0","78","120","40",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("12");_a.set_text("성별");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static00","363","0","120","40",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("14");_a.set_text("사원번호");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static03","363","78","120","40",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("15");_a.set_text("결혼여부");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static05","0","117","120","102",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("16");_a.set_text("비고사항");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static02","10","38","120","28",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("부서정보");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static09","294","166","120","28",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("사원정보");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_search.form,function(_c){});this.div_search.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_detail.form,function(_c){});this.div_detail.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_c){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","div_detail.form.cbo_pos","value","ds_emp","POS_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_detail.form.edt_name","value","ds_emp","FULL_NAME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMPL_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_detail.form.rdo_gender","value","ds_emp","GENDER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_detail.form.chk_married","value","ds_emp","MARRIED");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail.form.txt_memo","value","ds_emp","MEMO");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Form_ScriptSample1.xfdl",function(){this.Form_onload=function(_a,_b){var _c=new Date();var _d=_c.getFullYear().toString();var _e=(_c.getMonth()+1).toString().padLeft(2,"0");var _f=_c.getDate().toString().padLeft(2,"0");this.div_search.form.cal_from.set_value(_d+_e+"01");this.div_search.form.cal_to.set_value(_d+_e+_f);var _g="svcCodePos";var _h="EduUrl::select_code_pos.jsp";var _i="";var _j="ds_pos=out_pos";var _k="";var _l="fn_callback";this.transaction(_g,_h,_i,_j,_k,_l);var _g="svcCodeGender";var _h="EduUrl::select_code_gender.jsp";var _i="";var _j="ds_gender=out_gender";var _k="";var _l="fn_callback";this.transaction(_g,_h,_i,_j,_k,_l,false);this.ds_gender.insertRow(0);this.ds_gender.setColumn(0,"CODE","ALL");this.ds_gender.setColumn(0,"CODE_NAME","ALL");this.btn_search_onclick();};this.btn_search_onclick=function(_a,_b){var _c="svcSelectDept";var _d="EduUrl::select_code_dept.jsp";var _e="";var _f="ds_dept=out_dept";var _g="";var _h="fn_callback";this.transaction(_c,_d,_e,_f,_g,_h,false);var _i=this.ds_dept.getColumn(this.ds_dept.rowposition,"CODE");var _c="svcSelectEmp";var _d="EduUrl::select_emp.jsp";var _e="";var _f="ds_emp=out_emp";var _g="paramDept='"+_i+"'";var _h="fn_callback";this.transaction(_c,_d,_e,_f,_g,_h,false);};this.fn_callback=function(_b,_c,_d){if(_c<0){this.alert("Error: "+_b+" "+_d);return;}if(_b=="svcSelectEmp"){}};this.btn_add_onclick=function(_a,_b){var _c=this.ds_emp.addRow();var _d=this.ds_dept.getColumn(this.ds_dept.rowposition,"CODE");this.ds_emp.setColumn(_c,"DEPT_CD",_d);var _e=new Date();var _f=_e.getFullYear().toString();_f+=(_e.getMonth()+1).toString().padLeft(2,"0");_f+=_e.getDate().toString().padLeft(2,"0");this.ds_emp.setColumn(_c,"HIRE_DATE",_f);};this.btn_del_onclick=function(_a,_b){if(this.confirm("선택된 자료를 삭제 하시겠습니까?")){this.ds_emp.deleteRow(this.ds_emp.rowposition);}};this.btn_save_onclick=function(_a,_b){for(var _k=0;_k<this.ds_emp.rowcount;_k++ ){if(this.ds_emp.getRowType(_k)==1){continue;}var _c=this.ds_emp.getColumn(_k,"FULL_NAME");if(_c==null||_c.length==0){this.alert("성명은 필수입력 항목입니다.");this.ds_emp.set_rowposition(_k);this.grd_emp.setCellPos(0);this.grd_emp.showEditor(true);this.grd_emp.setFocus();return;}var _d=this.ds_emp.getColumn(_k,"EMPL_ID");if(_d==null||_d.length==0){this.alert("사원번호는 필수입력 항목입니다.");this.ds_emp.set_rowposition(_k);this.grd_emp.setCellPos(1);this.grd_emp.showEditor(true);this.grd_emp.setFocus();return;}if(_d.trim().length!=5){this.alert("사원번호는 5자리 입니다.");this.ds_emp.set_rowposition(_k);this.grd_emp.setCellPos(1);this.grd_emp.showEditor(true);this.grd_emp.setFocus();return;}}var _e="svcSaveEmp";var _f="EduUrl::save_emp.jsp";var _g="in_emp=ds_emp:u";var _h="";var _i="in_var1="+nexacro.wrapQuote(this.titletext)+" in_var2="+this.name;var _j="fn_callback_save";this.transaction(_e,_f,_g,_h,_i,_j);};this.fn_callback_save=function(_b,_c,_d){if(_c<0){this.alert("Error: "+_b+" "+_d);return;}if(_b=="svcSaveEmp"){this.alert("저장되었습니다.");}};this.grd_dept_oncellclick=function(_a,_b){var _c=this.ds_dept.getColumn(this.ds_dept.rowposition,"CODE");var _d="svcSelectEmp";var _e="EduUrl::select_emp.jsp";var _f="";var _g="ds_emp=out_emp";var _h="paramDept='"+_c+"'";var _i="fn_callback";this.transaction(_d,_e,_f,_g,_h,_i,false);};this.ds_dept_onrowposchanged=function(_a,_b){var _c=this.ds_dept.getColumn(this.ds_dept.rowposition,"CODE");var _d="svcSelectEmp";var _e="EduUrl::select_emp.jsp";var _f="";var _g="ds_emp=out_emp";var _h="paramDept='"+_c+"'";var _i="fn_callback";this.transaction(_d,_e,_f,_g,_h,_i,false);};this.grd_dept_onheadclick=function(_a,_b){var _c=_a.getCellProperty("head",_b.cell,"displaytype");var _d="";if(_c=="checkboxcontrol"){var _e=_a.getBindDataset();if(_e.getRowCount()<1){return;}_d=_a.getCellProperty("head",_b.cell,"text");_d=(_d=="1"?"0":"1");for(var _f=0;_f<_e.rowcount;_f++ ){_e.setColumn(_f,"CHK",_d);}_a.setCellProperty("Head",_b.cell,"text",_d);}else{this.fn_gridSort(_a,_b);}};this.grd_emp_onheadclick=function(_a,_b){this.fn_gridSort(_a,_b);};this.CONST_NONE_MARK="";this.CONST_ASC_MARK="↑";this.CONST_DESC_MARK="↓";this.CONST_SORT_FLAG=false;this.fn_gridSort=function(_a,_b){var _c=_a.getBindDataset();if(_c.rowcount==0){return false;}var _d="";var _e=(_a.getCellProperty("body",_b.col,"text")).toString().split(":");for(var _g=0;_g<_a.getCellCount("head");_g++ ){if(_a.getCellText( -1,_g)=="undefined"){continue;}var _f=_a.getCellText( -1,_g);if(_g==_b.cell){if(_f.substr(_f.length-1)==this.CONST_ASC_MARK){_a.setCellProperty("head",_g,"text",_f.substr(0,_f.length-1)+this.CONST_DESC_MARK);_c.set_keystring("S:-"+_e[1]);}else if(_f.substr(_f.length-1)==this.CONST_DESC_MARK){_a.setCellProperty("head",_g,"text",_f.substr(0,_f.length-1)+this.CONST_ASC_MARK);_c.set_keystring("S:+"+_e[1]);}else{_a.setCellProperty("head",_g,"text",_f+this.CONST_ASC_MARK);_c.set_keystring("S:+"+_e[1]);}}else{if(_f.substr(_f.length-1)==this.CONST_ASC_MARK||_f.substr(_f.length-1)==this.CONST_DESC_MARK){_a.setCellProperty("head",_g,"text",_f.substr(0,_f.length-1));}}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);this.grd_dept.addEventHandler("oncellclick",this.grd_dept_oncellclick,this);this.grd_dept.addEventHandler("onheadclick",this.grd_dept_onheadclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);this.div_search.form.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);this.div_search.form.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);};this.loadIncludeScript("Form_ScriptSample1.xfdl");this.loadPreloadList();_a=null;};})();