(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_StudentList");
            this.set_titletext("교육생조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_EDU_PRODUCT_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_List", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Record", this);
            obj._setContents("<ColumnInfo><Column id=\"ES_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Print", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"int\" size=\"11\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"string\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"string\" size=\"20\"/><Column id=\"EMAIL\" type=\"string\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"string\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"string\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"string\" size=\"512\"/><Column id=\"QUESTION\" type=\"string\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"string\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME2\" type=\"string\" size=\"255\"/><Column id=\"SMS_FLAG\" type=\"string\" size=\"1\"/><Column id=\"EDU_PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EDU_TYPE\" type=\"string\" size=\"20\"/><Column id=\"EDU_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"EDU_TYPE_DET\" type=\"string\" size=\"20\"/><Column id=\"EDU_TYPE_DET_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"string\" size=\"10\"/><Column id=\"END_DATE\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SMSSeder", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput_Reference", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SendSMS", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmailSend", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_EduMM","8","8",null,"72","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductName","8","8","60","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("0");
            obj.set_text("교육제품");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Combo("cmb_ProductName","79","8","169","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_CD_EDU_PRODUCT_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("MiPlatform");
            obj.set_index("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Inquiry",null,"8","60","22","8",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"8","68","22","136",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("9");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_CertificatePrint",null,"40","80","22","8",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("10");
            obj.set_text("수료증 출력");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","60","22","btn_Inquiry:4",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_EduMonth","9","41","60","20",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("7");
            obj.set_text("교육기간");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchKind","567","9","86","20",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_EduMM_form_cmb_SearchKind_innerdataset = new nexacro.NormalDataset("div_EduMM_form_cmb_SearchKind_innerdataset", obj);
            div_EduMM_form_cmb_SearchKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">이름</Col><Col id=\"codecolumn\">EMP_NAME</Col></Row><Row><Col id=\"datacolumn\">회사명</Col><Col id=\"codecolumn\">COMPANY_NAME</Col></Row><Row><Col id=\"datacolumn\">연락번호</Col><Col id=\"codecolumn\">PHONE_NO</Col></Row><Row><Col id=\"datacolumn\">이메일</Col><Col id=\"codecolumn\">EMAIL</Col></Row></Rows>");
            obj.set_innerdataset(div_EduMM_form_cmb_SearchKind_innerdataset);
            obj.set_text("이름");
            obj.set_value("EMP_NAME");
            obj.set_index("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_SearchKind","497","9","60","20",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("4");
            obj.set_text("검색조건");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Edit("edt_SearchText","661","9","164","20",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("6");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_EduType","264","8","60","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("2");
            obj.set_text("교육종류");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Combo("cmb_EduType","334","8","153","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_CD_EDU_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("MiPlatform");
            obj.set_index("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("Static06","9","34",null,"1","9",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("11");
            obj.set_text("Static06");
            obj.set_background("#c6deed");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Calendar("cal_Start","79","40","108","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_ContractYear00","190","40","10","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Calendar("cal_End","207","40","108","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_EmailSend",null,"40","80","22","btn_CertificatePrint:4",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("17");
            obj.set_text("E-Mail발송");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_SMSSend",null,"40","80","22","btn_EmailSend:4",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("16");
            obj.set_text("SMS발송");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Grid("grd_List","8","div_EduMM:8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_List");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"연락번호\"/><Cell col=\"6\" text=\"E_MAIL\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"수강여부\"/><Cell col=\"9\" text=\"수료증 출력\"/><Cell col=\"10\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"11\" text=\"메시지전송\"/><Cell col=\"12\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"13\" text=\"회차\"/><Cell col=\"14\" text=\"제품\"/><Cell col=\"15\" text=\"교육종류\"/><Cell col=\"16\" text=\"장소\"/><Cell col=\"17\" text=\"교육과정\"/><Cell col=\"18\" text=\"시작일\"/><Cell col=\"19\" text=\"종료일\"/><Cell col=\"20\" text=\"등록ID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DUTY_NAME\"/><Cell col=\"5\" text=\"bind:PHONE_NO\" maskedittype=\"number\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:EMAIL\"/><Cell col=\"7\" text=\"bind:STATUS_NAME\"/><Cell col=\"8\" text=\"bind:ATTEND_FLAG\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" colspan=\"2\" text=\"bind:CERTIFICATES_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"11\" colspan=\"2\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:SMS_FLAG\"/><Cell col=\"13\" text=\"bind:ES_SEQ\"/><Cell col=\"14\" text=\"bind:EDU_PRODUCT_NAME\"/><Cell col=\"15\" text=\"bind:EDU_TYPE_NAME\"/><Cell col=\"16\" text=\"bind:EDU_AREA\"/><Cell col=\"17\" text=\"bind:EDU_TYPE_DET_NAME\"/><Cell col=\"18\" text=\"bind:START_DATE\"/><Cell col=\"19\" text=\"bind:END_DATE\"/><Cell col=\"20\" text=\"bind:INSERT_EMP_NO\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_EduMM.form
            obj = new Layout("default","",0,0,this.div_EduMM.form,function(p){});
            this.div_EduMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1290,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_StudentList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_StudentList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_StudentList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_StudentList.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("TE_StudentList.xfdl","Script::ext_Report.xjs");
        this.registerScript("TE_StudentList.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 교육생 조회 (TE_StudentList)
        * 03. 화면설명 :
        * 04. 작성일   :
        * 05. 작성자   :
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_Report.xjs"); /*include "Script::ext_Report.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TE_StudentList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.fnGetCode();

        	var sToday = this.gfnToday();
        	this.div_EduMM.form.cal_Start.set_value(this.gfnAddMonth(sToday, -1));
        	this.div_EduMM.form.cal_End.set_value(sToday);
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_EDU_PRODUCT_CODE" ,"EDU_PRODUCT_CODE", true);
        	this.gfnAddCodeDataset("ds_CD_EDU_TYPE" ,"EDU_TYPE", true);
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	if(this.gfnIsEmpty(this.div_EduMM.form.edt_SearchText.value))
        	{
        		this.alert("검색조건을 입력하세요");
        		this.div_EduMM.form.edt_SearchText.setFocus();
        		return;
        	}

        	if(this.div_EduMM.form.cmb_ProductName.index>0)
        		this.gfnAddSendParameter("EDU_PRODUCT_CODE", this.div_EduMM.form.cmb_ProductName.value);
        	if(this.div_EduMM.form.cmb_EduType.index>0)
        		this.gfnAddSendParameter("EDU_TYPE", this.div_EduMM.form.cmb_EduType.value);
        	this.gfnAddSendParameter("START_DATE", this.div_EduMM.form.cal_Start.value); //this.div_EduMM.form.div_Search_yyyyMM_FromTo.getFromYYYYMM());
        	this.gfnAddSendParameter("END_DATE", this.div_EduMM.form.cal_End.value); //this.div_EduMM.form.div_Search_yyyyMM_FromTo.getToYYYYMM());
        	this.gfnAddSendParameter(this.div_EduMM.form.cmb_SearchKind.value, this.div_EduMM.form.edt_SearchText.value);

        	this.gfnAddOutputDataset("ds_List", "dsOutput");
        	this.gfnCommonTransaction("Select", "TE_StudentList_S01", this.grd_List);
        };

        this.fnSave = function()
        {
        	this.gfnAddInputDataset("ds_List", "dsInput");
        	this.gfnCommonTransaction("Save", "TE_EduMM_R04");
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	//에러 예외처리
        	if(nErrorCode != 0)
        	{
        		alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID == "gfnGetCode")
        		{
        			this.div_EduMM.form.cmb_ProductName.set_index(0);
        			this.div_EduMM.form.cmb_EduType.set_index(0);
        		}
        		else if(strSvcID == "Select")
        		{

        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_CertificatePrint" :
        			if(this.ds_List.rowcount <= 0)
        			{
        				this.alert("출력할 데이터가 없습니다.!!");
        				return;
        			}
        			else
        			{
        				/*교육 발신자 조회*/
        				this.gfnAddSendParameter("FRM_SEQ",	"268");
        				this.gfnAddSendParameter("FRMA_SEQ_IN",	"1");
        				this.gfnAddOutputDataset("ds_SMSSeder",	"dsOutput");
        				this.gfnCommonTransaction("SelectEmpInfo", "CO_FindFormAuthEmp_S01", null, false);

        				var strEmpNo = this.ds_SMSSeder.getColumn(0,"EMP_NO");
        				var strEmpName = this.ds_SMSSeder.getColumn(0,"EMP_NAME");
        				var strTelNo = this.ds_SMSSeder.getColumn(0,"OFFICE_TEL_NO");
        				var strEamil = this.ds_SMSSeder.getColumn(0,"EMAIL");

        				//사용자가 창을 닫고 다시 눌렀을 시에 데이터 초기화 작업.
        				this.ds_Print.clearData();

        				//수료증 출력 대상자에 대한 Dataset추출
        				for(var i = 0; i<this.ds_List.rowcount; i++)
        				{
        					if(this.ds_List.getColumn(i, "CERTIFICATES_FLAG") == 1)
        					{
        						var nRow = this.ds_Print.addRow();
        						this.ds_Print.copyRow(nRow, this.ds_List, i);
        					}
        				}

        				var sArgument = {dsPrint : this.ds_Print
        						,Office_TelNo : strTelNo
        						,Send_Eamil : strEamil};
        				this.commUtil.popup(this, "TE_CertificateInfoReg", "Technique::TE_CertificateInfoReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			}
        			break;
        		case "btn_Inquiry" :
        			this.fnSearch();
        			break;
        		case "btn_ExcelExport" :
        			this.gfn_excelExport(this, this.grd_List);
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        		case "btn_SMSSend" :
        			if(this.ds_List.rowcount <= 0)
        			{
        				this.alert("발송 상대가 지정되지 않았습니다.");
        				return;
        			}
        			else
        			{
        				this.fnSend(obj.name);
        			}
        			break;
        		case "btn_EmailSend" :
        			if(this.ds_List.rowcount <= 0)
        			{
        				this.alert("발송 상대가 지정되지 않았습니다.");
        				return;
        			}
        			{
        				this.fnSend(obj.name);
        			}
        			break;
        	}
        };

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "TE_CertificateInfoReg" :
        			break;
        		default:
        			break;
        	}
        };

        this.grd_List_onheadclick = function(obj,e)
        {
        	if(e.col == 10) //수료증 출력
        	{
        		var strValue = obj.getCellProperty("head", e.cell, "text")==1?0:1;

        		obj.setCellProperty("head", e.cell, "text", strValue);
        		for(var i=0; i<this.ds_List.rowcount; i++)
        		{
        			if(this.ds_List.getColumn(i, "ATTEND_FLAG")=="1")
        				this.ds_List.setColumn(i, "CERTIFICATES_FLAG", strValue);
        		}
        	}
        	else if(e.col == 12 ) //12 메세지 전송
        	{
        		var strValue = obj.getCellProperty("head", e.cell, "text")==1?0:1;

        		obj.setCellProperty("head", e.cell, "text", strValue);
        		for(var i=0; i<this.ds_List.rowcount; i++)
        		{
        			this.ds_List.setColumn(i, "SMS_FLAG", strValue);
        		}
        	}
        	else
        	{
        		this.gfnGridProcSort(obj, e.cell);  //헤더클릭 이벤트 있을 시 사용
        	}
        };

        this.div_EduMM_edt_SearchText_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        		this.fnSearch();
        };

        this.ds_List_cancolumnchange = function(obj,e)
        {
        	if(e.columnid=="CERTIFICATES_FLAG" && obj.getColumn(e.row, "ATTEND_FLAG")=="0")
        		return false;
        };

        this.grd_List_oncelldblclick = function(obj,e)
        {
        		this.dsOutput_Reference.clearData();

        		var nRow = this.dsOutput_Reference.addRow();
        		this.dsOutput_Reference.copyRow(nRow, this.ds_List, e.row);

        		var sArgument = {
        							sParent : this.name,
        							dsOutput_Reference : this.dsOutput_Reference,
        							ESL_SEQ : this.ds_List.getColumn(e.row, "ESL_SEQ"),
        							nRow : e.row
        						};

        		this.commUtil.popup(this, "TE_SalesEduReg", "Technique::TE_SalesEduReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        };

        //TE_SalesEduReg정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	switch(popupId)
        	{
        		case "TE_SalesEduReg" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);

        				var sEslSeq = dsOutput.getColumn(0, "ESL_SEQ");
        				if(!this.gfnIsEmpty(sEslSeq))
        				{
        					var nRow = this.ds_List.findRow("ESL_SEQ", sEslSeq);
        					this.ds_List.copyRow(nRow, dsOutput, 0);
        				}
        			}
        			break;

        		case "CS_SMSSend" :
        			break;

        		case "CE_EMailSend" :
        			break;
        	}
        }

        this.fnSend = function(type)
        {
        	/*교육 발신자 조회*/
        	this.gfnAddSendParameter("FRM_SEQ",	"268");
        	this.gfnAddSendParameter("FRMA_SEQ_IN",	"1");
        	this.gfnAddOutputDataset("ds_SMSSeder",	"dsOutput");
        	this.gfnCommonTransaction("SelectEmpInfo", "CO_FindFormAuthEmp_S01", null, false);

        	var strEmpNo = this.ds_SMSSeder.getColumn(0,"EMP_NO");
        	var strEmpName = this.ds_SMSSeder.getColumn(0,"EMP_NAME");
        	var strTelNo = this.ds_SMSSeder.getColumn(0,"OFFICE_TEL_NO");
        	var strEamil = this.ds_SMSSeder.getColumn(0,"EMAIL");

        	if(type == "btn_SMSSend")
        	{
        		this.ds_SendSMS.clearData();

        		for(var i = 0; i < this.ds_List.rowcount; i++)
        		{
        			if(this.ds_List.getColumn(i, "SMS_FLAG") == 1)
        			{
        				var nRow = this.ds_SendSMS.addRow();
        				this.ds_SendSMS.setColumn(nRow, "EMP_NAME", this.ds_List.getColumn(i, "EMP_NAME"));
        				this.ds_SendSMS.setColumn(nRow, "PHONE_NO", this.ds_List.getColumn(i, "PHONE_NO"));
        			}
        		}

        		if(this.ds_SMSSeder.rowcount<0)
        		{
        			alert("교육 SMS 발신자 설정이 안되었습니다.\n 정보관리팀에 문의하세요.");
        			return;
        		}
        		if(this.gfnIsEmpty(strTelNo))
        		{
        			alert(strEmpName+"님의 내선번호가 없습니다.\n 그룹웨어 개인정보 수정에서 전화번호(사무실)를 등록하세요.");
        			return;
        		}
        		var sArgument = {
        					dsInput:this.ds_SendSMS,
        					key:"SMSSend",
        					pv_SenderType:"APPOINT",	// "SELF" (login 접속자 번호), "EMP" (지정 사번의 번호), "MAIN" (대표번호), "APPOINT"(전화번호 직접번호)
        					pv_TelKind:"T",				// "T" (내선), 	"M" (모바일)
        					pv_Sender:strTelNo,			//  발신번호 또는 사번
        					pv_SenderName:strEmpName	//  발신자명
        				   };

        		this.commUtil.popup(this, "CS_SMSSend", "Common::CS_SMSSend.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        	else if(type == "btn_EmailSend")
        	{
        		this.ds_EmailSend.clearData();

        		for(var i = 0; i < this.ds_List.rowcount; i++)
        		{
        			if(this.ds_List.getColumn(i, "SMS_FLAG") == 1)
        			{
        				var nRow = this.ds_EmailSend.addRow();
        				this.ds_EmailSend.setColumn(nRow, "EMP_NAME", this.ds_List.getColumn(i, "EMP_NAME"));
        				this.ds_EmailSend.setColumn(nRow, "EMAIL", this.ds_List.getColumn(i, "EMAIL"));
        			}
        		}

        		var sArgument = {
        					dsInput:this.ds_EmailSend,
        					key:"EmailSend"
        				   };

        		this.commUtil.popup(this, "CE_EMailSend", "Common::CE_EMailSend.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_StudentList_onload,this);
            this.div_EduMM.form.cmb_ProductName.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);
            this.div_EduMM.form.btn_Inquiry.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_CertificatePrint.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.edt_SearchText.addEventHandler("onkeydown",this.div_EduMM_edt_SearchText_onkeydown,this);
            this.div_EduMM.form.cmb_EduType.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);
            this.div_EduMM.form.cal_Start.addEventHandler("onchanged",this.Com_Search_onChanged,this);
            this.div_EduMM.form.cal_End.addEventHandler("onchanged",this.Com_Search_onChanged,this);
            this.div_EduMM.form.btn_EmailSend.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_SMSSend.addEventHandler("onclick",this.comm_Click,this);
            this.grd_List.addEventHandler("onheadclick",this.grd_List_onheadclick,this);
            this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.ds_List.addEventHandler("cancolumnchange",this.ds_List_cancolumnchange,this);
        };
        this.loadIncludeScript("TE_StudentList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
