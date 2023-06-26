(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ScriptSample1");
            this.set_titletext("화면 예시");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_emp","293","205",null,null,"10","244",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"입사일자\"/><Cell col=\"4\" text=\"급여\"/><Cell col=\"5\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"4\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"expr:(GENDER == &quot;M&quot; ? &quot;Male&quot; : (GENDER == &quot;W&quot; ? &quot;Female&quot; : &quot;&quot;))\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","763","-331","39","64",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("red");
            obj.set_text("h64");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08","468","-315","29","12",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("red");
            obj.set_text("h4");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","103","-301","649","4",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","293","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dept","10","80","273",null,null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"77\"/><Column size=\"151\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CODE_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","80","30","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","80","30","95",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","80","30","180",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","80","30","265",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","293","80",null,"85","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","86","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","87","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("성      별");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","87","45","208","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_rowcount("-1");
            obj.set_innerdataset("ds_gender");
            obj.set_columncount("-1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_from","86","10","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","226","10","30","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_to","256","10","140","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("부서별 사원정보");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","293",null,null,"225","10","10",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","119","0",null,"42","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","119","41",null,"42","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","119","82",null,"42","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","119","123",null,"102","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","126","6","182","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","469","6","182","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_pos","126","47","182","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_innerdataset("ds_pos");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","126","90","182","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","472","90","182","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","469","47","182","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","126","129","555","90",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","120","42",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","343","41","120","42",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("입사일자");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","0","41","120","42",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("직급");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","0","82","120","42",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("성별");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","343","0","120","42",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("사원번호");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","343","82","120","42",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("결혼여부");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","0","123","120","102",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("비고사항");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","10","50","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("부서정보");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","294","175","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사원정보");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.cbo_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_EduScriptSample2.xfdl","lib::Lib_EduUtil.xjs");
        this.addIncludeScript("Form_EduScriptSample2.xfdl","lib::Lib_EduGrid.xjs");
        this.addIncludeScript("Form_EduScriptSample2.xfdl","lib::Lib_EduComm.xjs");
        this.registerScript("Form_EduScriptSample2.xfdl", function() {


        this.executeIncludeScript("lib::Lib_EduUtil.xjs"); /*include "lib::Lib_EduUtil.xjs"*/;
        this.executeIncludeScript("lib::Lib_EduGrid.xjs"); /*include "lib::Lib_EduGrid.xjs"*/;
        this.executeIncludeScript("lib::Lib_EduComm.xjs"); /*include "lib::Lib_EduComm.xjs"*/;

        this.Form_onload = function(obj,e)
        {

        	//조회조건 입사일자 From 이번달 1일, To 오늘날짜 기본 설정
        	this.div_search.form.cal_from.set_value(this.lfn_getFirstDay());
        	this.div_search.form.cal_to.set_value(this.lfn_getToday());

        	// Select Code Data
            var sSvcID    = "svcCode";
            var sURL      = "EduUrl::select_code_common.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_pos=out_pos ds_gender=out_gender";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	//화면 오픈시 데이터 조회
        	this.btn_search_onclick();

        };

        // Retrieve Button
        this.btn_search_onclick = function(obj,e)
        {
        	// Select Dept Data
            var sSvcID    = "svcSelectDept";
            var sURL      = "EduUrl::select_code_dept.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_dept=out_dept";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + svcID + " " + errMSG);
        		return;
        	}

        	if(svcID == "svcCode"){
        		//Radio 전체 표현
        		this.ds_gender.insertRow(0);
        		this.ds_gender.setColumn(0, "CODE", "ALL");
        		this.ds_gender.setColumn(0, "CODE_NAME", "ALL");
        	}
            else if(svcID == "svcSelectDept"){
        		//this.alert("조회되었습니다.");
        		//this.fn_selectEmp();
        	}
        	else if(svcID == "svcSaveEmp"){
        		this.lfn_alert("msg.save.success");
        	}
        }

        this.fn_selectEmp = function()
        {
        	// Select Employees Data
            var sDeptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "CODE");
            var sSvcID    = "svcSelectEmp";
            var sURL      = "EduUrl::select_emp.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_emp=out_emp";
            var sParam    = "paramDept='" + sDeptCode + "'";
            var sCallBack = "fn_callback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        }

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = this.ds_emp.addRow();

        	//사원 데이터 부서코드 설정
            var sDeptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "CODE");
        	this.ds_emp.setColumn(nRow, "DEPT_CD"  , sDeptCode);

        	//사원 데이터 입사일자에 오늘일자 설정
        	this.ds_emp.setColumn(nRow, "HIRE_DATE", this.lfn_getToday());
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
            if(this.lfn_alert("confirm.before.delete")){
                this.ds_emp.deleteRow(this.ds_emp.rowposition);
            }
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
            for(var i=0; i<this.ds_emp.rowcount; i++)
            {
                if(this.ds_emp.getRowType(i) == 1)  continue;

                var sName = this.ds_emp.getColumn(i, "FULL_NAME");
        		if(this.lfn_isNull(sName)){
                    this.lfn_alert("msg.err.validator.required", ["성명"]);
                    this.ds_emp.set_rowposition(i);
                    this.grd_emp.setCellPos(0);
                    this.grd_emp.showEditor(true);
                    this.grd_emp.setFocus();
                    return;
                }
                var sId = this.ds_emp.getColumn(i, "EMPL_ID");
        		if(this.lfn_isNull(sId)){
                    this.lfn_alert("msg.err.validator.required", [this.lfn_getWord("emp.id")]);
                    this.ds_emp.set_rowposition(i);
                    this.grd_emp.setCellPos(1);
                    this.grd_emp.showEditor(true);
                    this.grd_emp.setFocus();
                    return;
                }
                if(sId.trim().length != 5){
                    this.lfn_alert("msg.err.validator.length", ["사원번호",5]);
                    this.ds_emp.set_rowposition(i);
                    this.grd_emp.setCellPos(1);
                    this.grd_emp.showEditor(true);
                    this.grd_emp.setFocus();
                    return;
                }
            }

            var sSvcID    = "svcSaveEmp";
            var sURL      = "EduUrl::save_emp.jsp";
            var sInDs     = "in_emp=ds_emp:u";
            var sOutDs    = "";
            var sParam    = "in_var1="+nexacro.wrapQuote(this.titletext) + " in_var2="+this.name ;
            var sCallBack = "fn_callback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        };

        this.ds_dept_onrowposchanged = function(obj,e)
        {
        	this.fn_selectEmp();
        };


        this.grd_dept_onheadclick = function(obj,e)
        {
        	this.lfn_grid_onheadclick(obj, e);
        };

        this.grd_emp_onheadclick = function(obj,e)
        {
        	this.lfn_grid_onheadclick(obj, e);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.grd_dept.addEventHandler("oncellclick",this.grd_dept_oncellclick,this);
            this.grd_dept.addEventHandler("onheadclick",this.grd_dept_onheadclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.div_search.form.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.div_search.form.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_EduScriptSample2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
