(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Form_Emp");this.set_titletext("Employees");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_pos",this);_a._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"COL_CHK\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","10","35",null,"46","10",null,null,null,null,null,this);_a.set_taborder("7");_a.set_cssclass("div_WF_Search");this.addChild(_a.name,_a);_a=new Edit("edt_dept_cd","118","8","78","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("0");this.div_search.addChild(_a.name,_a);_a=new Button("btn_dept","201","8","30","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("1");_a.set_text("");_a.set_verticalAlign("");_a.set_cssclass("btn_WF_Find");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dept_nm","236","8","144","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("2");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_gender","498","8","252","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("-1");_a.set_rowcount("-1");var _b=new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_index("0");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","430","8","68","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("4");_a.set_text("성별");_a.set_cssclass("sta_WF_TitleSearch");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","50","8","68","28",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("5");_a.set_text("부서");_a.set_cssclass("sta_WF_TitleSearch");this.div_search.addChild(_a.name,_a);_a=new Button("btn_retrieve",null,"4","63","26","214",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_add",null,"4","63","26","146",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("입력");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_del",null,"4","63","26","78",null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_save",null,"4","63","26","10",null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Grid("grd_list","10","111",null,null,"400","38",null,null,null,null,this);_a.set_taborder("3");_a.set_binddataset("ds_emp");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"급여\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"결혼여부\"/><Cell col=\"9\" text=\"비고사항\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_detail",null,"111","380",null,"10","38",null,null,null,null,this);_a.set_taborder("6");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("Static02","137","0","243","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("10");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");_a.set_border("1px solid #e0e2e6");this.div_detail.addChild(_a.name,_a);_a=new Static("Static01","137","37","243","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("11");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static09","137","74","241","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("13");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static15","137","111","243","98",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("18");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static17","137","356","243","145",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("20");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static13","137","208","243","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("16");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static20","137","245","243","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("7");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static04","137","282","243","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("24");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Static("Static07","137","319","243","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("26");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailArea");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name","147","5","226","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("0");_a.set_cssclass("edt_WF_Essential");this.div_detail.addChild(_a.name,_a);_a=new MaskEdit("msk_id","147","42","226","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("1");_a.set_type("string");_a.set_format("AA-###");_a.set_cssclass("msk_WF_Essential");this.div_detail.addChild(_a.name,_a);_a=new Combo("cbo_dept","147","79","226","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("2");_a.set_innerdataset("ds_dept");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_text("");_a.set_value("");_a.set_index("-1");this.div_detail.addChild(_a.name,_a);_a=new ListBox("lst_pos","147","116","226","88",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("3");_a.set_innerdataset("ds_pos");_a.set_codecolumn("POS_CD");_a.set_datacolumn("POS_NAME");this.div_detail.addChild(_a.name,_a);_a=new Radio("rdo_gender","147","213","143","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("4");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("2");var _c=new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");_a.set_innerdataset(_c);this.div_detail.addChild(_a.name,_a);_a=new CheckBox("chk_married","147","250","96","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("5");this.div_detail.addChild(_a.name,_a);_a=new Calendar("cal_date","147","287","226","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("6");_a.set_cssclass("cal_WF_Essential");this.div_detail.addChild(_a.name,_a);_a=new TextArea("txt_memo","147","361","226","135",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("9");this.div_detail.addChild(_a.name,_a);_a=new Static("Static08","0","74","140","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("12");_a.set_text("부서");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static10","0","0","140","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("14");_a.set_text("성명");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static12","0","282","140","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("15");_a.set_text("입사일");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static14","0","111","140","98",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("17");_a.set_text("직급");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static16","0","208","140","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("19");_a.set_text("성별");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static19","0","319","140","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("21");_a.set_text("급여");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static00","0","37","140","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("22");_a.set_text("사원번호");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static03","0","245","140","38",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("23");_a.set_text("결혼여부");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new Static("Static05","0","356","140","145",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("25");_a.set_text("비고사항");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_DetailLabel");this.div_detail.addChild(_a.name,_a);_a=new MaskEdit("msk_salary","147","324","226","28",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("8");_a.set_type("number");_a.set_format("#,###");this.div_detail.addChild(_a.name,_a);_a=new Static("sta00","10","0","196","35",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("사원관리");_a.set_cssclass("sta_WF_Title");this.addChild(_a.name,_a);_a=new Static("sta00_00","10","81","196","30",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("사원목록");_a.set_cssclass("sta_WF_TitleSub");this.addChild(_a.name,_a);_a=new Static("sta00_00_00","grd_list:10","81","196","30",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("상세정보");_a.set_cssclass("sta_WF_TitleSub");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_search.form,function(_d){});this.div_search.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_detail.form,function(_d){});this.div_detail.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_d){});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_detail.form.edt_name","value","ds_emp","FULL_NAME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMPL_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_detail.form.msk_salary","value","ds_emp","SALARY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_detail.form.rdo_gender","value","ds_emp","GENDER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail.form.chk_married","value","ds_emp","MARRIED");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_detail.form.lst_pos","value","ds_emp","POS_CD");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Form_Emp_copy0.xfdl",function(){this.Form_onload=function(_a,_b){};this.fn_init=function(_a){this.transaction("svcCode","EduUrl::select_code.jsp","","ds_dept=out_dept ds_pos=out_pos","pName='' pDept=''","fn_callback");for(var _b=0;_b<this.components.length;_b++ ){if(this.components[_b]=="[object Grid]"){this.components[_b].addEventHandler("onheadclick",this.cfn_GridSort,this);}}};this.div_search_btn_dept_onclick=function(_a,_b){var _c=new ChildFrame("popDept","absolute",0,0,300,400);_c.set_formurl("EduBasic::Popup/Popup_DeptSearch.xfdl");_c.set_openalign("center middle");_c.set_dragmovetype("all");_c.showModal(this.getOwnerFrame(),{},this,"fn_callback_pop");};this.fn_callback_pop=function(_b,_c){if(_c==undefined){_c="";}if(_b=="popDept"){if(_c.length>0){var _d=_c.split("|");this.div_search.form.edt_dept_cd.set_value(_d[0]);this.div_search.form.edt_dept_nm.set_value(_d[1]);}}};this.div_search_rdo_gender_onitemchanged=function(_a,_b){this.fn_setFilter(_b.postvalue);};this.fn_setFilter=function(_b){if(_b=="A"){this.ds_emp.filter("");}else{this.ds_emp.filter("GENDER == '"+_b+"'");}};this.div_cont_btn_reset_onclick=function(_a,_b){this.div_search.form.edt_dept_cd.set_value("");this.div_search.form.edt_dept_nm.set_value("");this.div_search.form.rdo_gender.set_value("A");this.fn_setFilter("A");};this.btn_retrieve_onclick=function(_a,_b){var _c=this.div_search.form.edt_dept_cd.value;this.transaction("svcSelect","SvcUrl::selectEmpVoList.do","","ds_emp=out_ds","","fn_callback");};this.btn_add_onclick=function(_a,_b){this.ds_emp.addRow();this.ds_emp.setColumn(this.ds_emp.rowposition,"HIRE_DATE",this.fn_today());};this.btn_del_onclick=function(_a,_b){this.ds_emp.deleteRow(this.ds_emp.rowposition);};this.btn_save_onclick=function(_a,_b){var _c=this.name;var _d=nexacro.wrapQuote(this.titletext);this.transaction("svcSave","EduUrl::save_emp.jsp","in_emp=ds_emp:u","","in_var1="+_d+" in_var2="+_c,"fn_callback",true,2);};this.out_var="";this.fn_callback=function(_b,_c,_d){if(_c<0){this.alert("Error: "+_d);return;}if(_b=="svcSelect"){this.alert("Select Success");}else if(_b=="svcSave"){this.alert("Save Success"+this.out_var);}};this.fn_today=function(){var _b=new Date();var _c=_b.getFullYear().toString();_c+=(_b.getMonth()+1).toString().padLeft(2,"0");_c+=_b.getDate().toString().padLeft(2,"0");return _c;};this.fn_gender=function(_b){if(_b=="M"){return "Male";}else{return "Female";}};this.grd_list_onheadclick=function(_a,_b){this.fn_GridSort(_a,_b);};this.CONST_NONE_MARK="";this.CONST_ASC_MARK="↑";this.CONST_DESC_MARK="↓";this.CONST_SORT_FLAG=false;this.fn_GridSort=function(_a,_b){var _c=_a.getBindDataset();if(_c.rowcount==0){return false;}var _d="";var _e=(_a.getCellProperty("body",_b.col,"text")).toString().split(":");for(var _g=0;_g<_a.getCellCount("head");_g++ ){if(_a.getCellText( -1,_g)=="undefined"){continue;}var _f=_a.getCellText( -1,_g);if(_g==_b.cell){if(_f.substr(_f.length-1)==this.CONST_ASC_MARK){_a.setCellProperty("head",_g,"text",_f.substr(0,_f.length-1)+this.CONST_DESC_MARK);_c.set_keystring("S:-"+_e[1]);}else if(_f.substr(_f.length-1)==this.CONST_DESC_MARK){_a.setCellProperty("head",_g,"text",_f.substr(0,_f.length-1)+this.CONST_ASC_MARK);_c.set_keystring("S:+"+_e[1]);}else{_a.setCellProperty("head",_g,"text",_f+this.CONST_ASC_MARK);_c.set_keystring("S:+"+_e[1]);}}else{if(_f.substr(_f.length-1)==this.CONST_ASC_MARK||_f.substr(_f.length-1)==this.CONST_DESC_MARK){_a.setCellProperty("head",_g,"text",_f.substr(0,_f.length-1));}}}};this.fnClose=function(){return false;};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);this.div_detail.form.Static13.addEventHandler("onclick",this.div_detail_Static13_onclick,this);this.div_detail.form.Static04.addEventHandler("onclick",this.Div00_Static04_onclick,this);this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);};this.loadIncludeScript("Form_Emp_copy0.xfdl");this.loadPreloadList();_a=null;};})();