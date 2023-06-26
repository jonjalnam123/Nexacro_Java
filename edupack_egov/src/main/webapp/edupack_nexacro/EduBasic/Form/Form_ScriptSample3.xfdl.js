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
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"-90","10",null,"345","90",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","763","-331","39","64",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("red");
            obj.set_text("h64");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08","468","-315","29","12",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("red");
            obj.set_text("h4");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","103","-301","649","4",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","293","38","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dept","10","71","273",null,null,"9",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!no,checkbox,!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"151\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","28","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"0","60","28","75",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"0","60","28","140",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","28","205",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","293","71",null,"85","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","8","86","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","30","41","87","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("성      별");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","117","41","208","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_rowcount("-1");
            obj.set_innerdataset("ds_gender00");
            obj.set_columncount("-1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","101","8","310","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmCalFromTo.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10","0","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("부서별 사원정보");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","293",null,null,"225","10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","119","0",null,"40","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","119","39",null,"40","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","119","78",null,"40","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","119","117",null,"102","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","126","6","182","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_maxlength("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","489","6","182","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_trimtype("both");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_pos","126","45","182","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_innerdataset("ds_pos");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","126","84","182","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_gender");
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","492","84","182","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","489","45","182","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","126","124","555","88",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","120","40",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","363","39","120","40",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("입사일자");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","0","39","120","40",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("직급");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","0","78","120","40",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("성별");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","363","0","120","40",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("사원번호");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","363","78","120","40",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("결혼여부");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","0","117","120","102",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("비고사항");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","10","38","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("부서정보");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","294","166","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사원정보");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_emp","293","199",null,null,"10","230",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"입사일자\"/><Cell col=\"4\" text=\"급여\"/><Cell col=\"5\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"4\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"expr:(GENDER == &quot;M&quot; ? &quot;Male&quot; : (GENDER == &quot;W&quot; ? &quot;Female&quot; : &quot;&quot;))\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","500","28","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form.divCalFromTo
            obj = new Layout("default","",0,0,this.div_search.form.divCalFromTo.form,function(p){});
            this.div_search.form.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
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

            obj = new BindItem("item5","div_detail.form.rdo_gender","value","ds_gender","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.divCalFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.divCalFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.divCalFromTo00.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.divCalFromTo00.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("Form_ScriptSample3.xfdl", function() {
        this.fvEnv = nexacro.getEnvironment();

        /**
        *	개발 표준화 작업
        *	@MenuPath C:\EduPack\workspace\edupack_egov\src\main\edupack_nexacro\EduBasic\Form
        *	@FileName Form_ScriptSample3.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/09
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/09		최정석		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        this.Form_onload = function(obj,e)
        {
           //trace(this);
           //trace(this["fn_callback"]);

           this.gfnFormOnLoad(this);

           var objForm = this.div_search.form.divCalFromTo.form;
           objForm.fnSetFromDate(this.gfnGetFirstDate());
           objForm.fnSetToDate(this.gfnGetDate());

           var arrCode = new Array();
           arrCode.push({codeGroup:"A001", obj:this.ds_pos}); // 직급
           arrCode.push({codeGroup:"C001", obj:this.ds_gender}); // 성별
           arrCode.push({codeGroup:"C001", obj:this.div_search.form.rdo_gender, first:"0"}); // 성별
           this.gfnGetCommonCode(arrCode);

           //화면 오픈시 데이터 조회
           this.btn_search_onclick();
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/
        // Retrieve Button
        this.btn_search_onclick = function(obj,e)
        {
           // Select Position Code Data,
            var sSvcID    = "svcCode";
            var sURL      = "select_code.jsp"; //http://172.10.14.135:8088/edupack_egov/edu/edupack_jsp/
            var sInDs     = "";
           var sOutDs    = "ds_dept=out_dept";
            var sParam    = "";
            var sCallBack = "fn_callback";
           this.gfnTransaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

           //this.fn_selectEmp();

        };

        this.fn_selectEmp = function(nRow) {
           // Select Employees Data
            //var sDeptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CD");
           var sDeptCode = this.ds_dept.getColumn(nRow, "DEPT_CD"); // newrow하고 oldrow 처리가 필요할 경우 이렇게
            var sSvcID    = "svcSelectEmp";
            var sURL      = "select_emp.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_emp=out_emp";
            var sParam    = "paramDept='" + sDeptCode + "'";
            var sCallBack = "fn_callback";

           this.gfnTransaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        }

        this.fn_callback = function(svcID, errCD, errMSG)
        {
           if(errCD < 0){
              this.alert("Error: " + svcID + " " + errMSG);
              return;
           }

            if(svcID == "svcSelectEmp"){
              //this.alert("조회되었습니다.");
           } else if (svcID == "svcCode") {

           } else if(svcID == "svcSaveEmp"){
              this.gfnAlert("msg.save.success");
           }
        }

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
           var nRow = this.ds_emp.addRow();

           //사원 데이터 부서코드 설정
            var sDeptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "CODE");
           this.ds_emp.setColumn(nRow, "DEPT_CD"  , sDeptCode);

           //사원 데이터 입사일자에 오늘일자 설정
           this.ds_emp.setColumn(nRow, "HIRE_DATE", this.gfnGetDate());

        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
           var sMsgId = "confirm.before.delete";            //메세지ID
           var arrArg = "";                        //메세지취환될값 배열[생략가능]
           var sPopId = sMsgId;                     //메세지팝업ID[생략가능]   *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
           var sMsgCallback = "fnMsgCallback";            //메세지콜백[생략가능]       * confirm성 메시지를 사용 시 반드시 필요

           // 변경된 내역을 저장 하시겠습니까?
           this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);   // can 처리를 할수가 없음.
        };


        this.fnMsgCallback = function (strId, strVal)
        {
           if(strId == "confirm.before.delete"){
              trace("strVal : " + strVal);
              if(strVal) {
                 this.ds_emp.deleteRow(this.ds_emp.rowposition);
              }
           }
        };


        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
           this.gfnClearValidation(this.ds_emp);

           this.gfnSetValidation(this.ds_emp, "FULL_NAME", "성명", "required");
           this.gfnSetValidation(this.ds_emp, "EMPL_ID", "사원번호", "required,length:5");

           if(this.gfnValidation(this.ds_emp, "U") == false) return;

            var sSvcID    = "svcSaveEmp";
            var sURL      = "EduUrl::save_emp.jsp";
            var sInDs     = "in_emp=ds_emp:u";
            var sOutDs    = "";
            var sParam    = "in_var1="+nexacro.wrapQuote(this.titletext) + " in_var2="+this.name ;
            var sCallBack = "fn_callback";
           this.gfnTransaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.ds_dept_onrowposchanged = function(obj,e)
        {
           trace(e.newrow + "===" + e.oldrow + "===");
           this.fn_selectEmp(e.newrow);
        };

        this.btn00_onclick = function(obj,e)
        {

        	trace(this.fvEnv.set_httptimeout(10));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_dept.addEventHandler("oncellclick",this.grd_dept_oncellclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.div_detail.form.Static17.addEventHandler("onclick",this.div_detail_Static17_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.rdo_gender.addEventHandler("onitemchanged",this.div_detail_rdo_gender_onitemchanged,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_ScriptSample3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
