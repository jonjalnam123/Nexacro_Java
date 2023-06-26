(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_BM_Education_Reg");
            this.set_titletext("정기교육신청(영업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"SALES_EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"hname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">MP</Col><Col id=\"name\">MiPlatform</Col><Col id=\"hname\">마이플랫폼</Col></Row><Row><Col id=\"code\">XP</Col><Col id=\"name\">XPLATFORM</Col><Col id=\"hname\">엑스플랫폼</Col></Row><Row><Col id=\"code\">NP14</Col><Col id=\"name\">nexacro14</Col><Col id=\"hname\">넥사크로플랫폼14</Col></Row><Row><Col id=\"code\">NP17</Col><Col id=\"name\">nexacro17</Col><Col id=\"hname\">넥사크로플랫폼17</Col></Row><Row><Col id=\"code\">NPN</Col><Col id=\"name\">nexacroN</Col><Col id=\"hname\">넥사크로플랫폼N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Record", this);
            obj._setContents("<ColumnInfo><Column id=\"ES_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_STATUS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput_Reference", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SalesNum", this);
            obj._setContents("<ColumnInfo><Column id=\"SALES_NUM\" type=\"STRING\" size=\"255\"/><Column id=\"SALES_CUR_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_AREA_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_TYPE_DET", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NAME2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ChkCount", this);
            obj._setContents("<ColumnInfo><Column id=\"SALES_NUM\" type=\"STRING\" size=\"255\"/><Column id=\"SALES_CUR_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_EduMM","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductName","8","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("0");
            obj.set_text("제품");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Combo("cmb_Year","277","8","91","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_Year");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_Year","231","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("2");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_Around","376","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("3");
            obj.set_text("회차");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Combo("cmb_ProductName","54","8","169","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_Product");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("MiPlatform");
            obj.set_index("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Inquiry",null,"8","60","22","8",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_New",null,"8","60","22","203",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_tran");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"8","60","22","138",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","60","22","73",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Edit("edt_Discrimination","423","8","66","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("9");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Discrimination","489","8","23","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("10");
            obj.set_text("▼");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_TotalView","529","8","106","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("11");
            obj.set_text("전체 명단보기");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_NumberOfPeople",null,"8","190","22","410",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("12");
            obj.set_text("신청가능 인원수 (현재/최대) : ");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_PresentCount",null,"8","22","22","388",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_Separator",null,"8","22","22","366",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("14");
            obj.set_text("/");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_MaxCount",null,"8","22","22","345",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"8","68","22","267",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("16");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Grid("grd_EduMM","9","div_EduMM:8",null,null,"7","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"147\"/><Column size=\"264\"/><Column size=\"141\"/><Column size=\"94\"/><Column size=\"158\"/><Column size=\"274\"/><Column size=\"133\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"연락번호\"/><Cell col=\"6\" text=\"E_MAIL\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:DUTY_NAME\"/><Cell col=\"5\" text=\"bind:PHONE_NO\"/><Cell col=\"6\" text=\"bind:EMAIL\"/><Cell col=\"7\" text=\"bind:SALES_EMP_NAME\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"회차이동\"/><Cell col=\"9\" text=\"복사\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_ScheduleList","1372","0","596","308",null,null,null,null,null,null,this);
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ScheduleList","-1","26","597","282",null,null,null,null,null,null,this.pdiv_ScheduleList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Record");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"15\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"종료일\"/><Cell col=\"4\" text=\"종류\"/><Cell col=\"5\" text=\"세부\"/><Cell col=\"6\" text=\"장소\"/></Band><Band id=\"body\"><Cell text=\"bind:ES_SEQ\"/><Cell col=\"1\" text=\"bind:START_DATE\"/><Cell col=\"2\" text=\"~\"/><Cell col=\"3\" text=\"bind:END_DATE\"/><Cell col=\"4\" text=\"bind:EDU_TYPE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:EDU_TYPE_DET\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE_DET\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:EDU_AREA_CODE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_AREA_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format></Formats>");
            this.pdiv_ScheduleList.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"0","68","22","8",null,null,null,null,null,this.pdiv_ScheduleList.form);
            obj.set_taborder("1");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.pdiv_ScheduleList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_EduMM.form
            obj = new Layout("default","",0,0,this.div_EduMM.form,function(p){});
            this.div_EduMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_ScheduleList.form
            obj = new Layout("default","",0,0,this.pdiv_ScheduleList.form,function(p){});
            this.pdiv_ScheduleList.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("TE_SalesEduMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 교육 등록 ()
        * 03. 화면설명 :
        * 04. 작성일   : 2018.10.15
        * 05. 작성자   : 안주환
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

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TE_BM_Education_Reg_onload = function(obj, e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.fnGetCode();
        };

        //Excel Export
        this.fn_export = function(grid)
        {
        	this.gfn_excelExport(this, grid);
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_EDU_STATUS" 			,"EDU_STATUS");
        	this.gfnAddCodeDataset("ds_CD_EDU_TYPE" 			,"EDU_TYPE");
        	this.gfnAddCodeDataset("ds_CD_EDU_TYPE_DET" 		,"EDU_TYPE_DET");
        	this.gfnAddCodeDataset("ds_CD_EDU_AREA_CODE"		,"EDU_AREA_CODE");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	this.gfnAddSendParameter("EDU_PRODUCT_CODE", this.div_EduMM.form.cmb_ProductName.value);
        	this.gfnAddSendParameter("ES_SEQ", this.div_EduMM.form.edt_Discrimination.value);
        	this.gfnAddSendParameter("EXCEP_SALESMAN_FALG", "1");

        	this.gfnAddOutputDataset("dsOutput", "dsOutput");
        	this.gfnCommonTransaction("Select", "TE_EduMM_S03", this.grd_EduMM);
        };

        this.fnSave = function()
        {
        	this.fnGetSalesNum();
        	var nSalesCnt 		= parseInt(this.ds_SalesNum.getColumn(0, "SALES_NUM"));
        	var nSalesCurCnt 	= parseInt(this.ds_SalesNum.getColumn(0, "SALES_CUR_NUM"));
        	var nDeletedCnt 	= this.dsOutput.getDeletedRowCount();
        	var nInsertedCnt 	= 0;

        	for(var i = 0 ; i<this.dsOutput.rowcount; i++)
        	{
        		var rowType = this.dsOutput.getRowType(i);

        		if(rowType == 2)
        		{
        			nInsertedCnt++;
        		}
        	}

        	if(nSalesCnt >= (nSalesCurCnt-nDeletedCnt+nInsertedCnt)) //삭제한 Row를 빼주어야 한다. 예를 들어서 nSalesCnt가 10이고, nSalesCurCnt가 10일 때 사용자가 한행을 지우고 저장시 저장이되야하지만,
        															 //사용자가 지운 Row는 Back단에 다녀오지 않았기 때문에 저장이 안된다. 따라서 nDeletedCnt를 빼주어야 한다.
        	{
        		this.gfnAddInputDataset("dsOutput", "dsInput");
        		this.gfnCommonTransaction("Save", "TE_EduMM_R04");
        	}else{
        		alert("최대 신청인원을 초과하여 등록할 수 없습니다.( " + nSalesCurCnt + " / " + nSalesCnt + " )");
        	}
        };

        this.fnGetSalesNum = function()
        {
        	this.gfnAddSendParameter("Product_Name", this.div_EduMM.form.cmb_ProductName.value);
        	this.gfnAddSendParameter("ES_SEQ", this.div_EduMM.form.edt_Discrimination.value);

        	this.gfnAddOutputDataset("ds_SalesNum", "dsOutput");
        	this.gfnCommonTransaction("GetSalesNum", "TE_EduMM_S07", null, false); //마지막 인덱스는 Sync / Async를 의미한다.
        };

        this.fnChkCount = function(str1, str2)
        {
        	this.gfnAddSendParameter("Product_Name", str1);
        	this.gfnAddSendParameter("ES_SEQ", str2);

        	this.gfnAddOutputDataset("ds_ChkCount", "dsOutput");
        	this.gfnCommonTransaction("ChkCount", "TE_EduMM_S07",  null, false); //마지막 인덱스는 Sync / Async를 의미한다.
        };

        this.fnGetYear = function(svcId)
        {
        	this.gfnAddSendParameter("Product_Name", svcId);

        	this.gfnAddOutputDataset("ds_Year", "dsOutput");
        	this.gfnCommonTransaction("GetYear", "TE_EduMM_S01");
        };

        this.fnGetRecord = function(svcId, svcId2)
        {
        	this.gfnAddSendParameter("Product_Name", svcId);
        	this.gfnAddSendParameter("Product_Year", svcId2);

        	this.gfnAddOutputDataset("ds_Record", "dsOutput");
        	this.gfnCommonTransaction("GetRecord", "TE_EduMM_S02");
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
        		if(strSvcID == "GetYear")
        		{
        			this.div_EduMM.form.cmb_Year.set_value(this.ds_Year.getColumn(0, "CODE"));
        			this.fnGetRecord(this.div_EduMM.form.cmb_ProductName.value, this.div_EduMM.form.cmb_Year.value);
        		}
        		else if(strSvcID == "GetRecord")
        		{
        			this.div_EduMM.form.edt_Discrimination.set_value(this.ds_Record.getColumn(0, "ES_SEQ"));
        			this.fnSearch();
        		}
        		else if(strSvcID == "Select")
        		{
        			this.fnGetSalesNum();
        		}
        		else if(strSvcID == "gfnGetCode")
        		{
        			this.div_EduMM.form.cmb_ProductName.set_index(3);	//nexa17 기본으로
        			this.fnGetYear(this.div_EduMM.form.cmb_ProductName.value);
        		}
        		else if(strSvcID == "Save")
        		{
        			alert("저장되었습니다.");
        			this.fnSearch();
        		}
        		else if(strSvcID == "GetSalesNum")
        		{
        			var strMaxCount;
        			if(this.gfnIsEmpty(this.ds_SalesNum.getColumn(0, "SALES_NUM")))
        				strMaxCount = 0;
        			else
        				strMaxCount = this.ds_SalesNum.getColumn(0, "SALES_NUM");

        			this.div_EduMM.form.stc_MaxCount.set_text(strMaxCount); //영업추가 최대 인원 수
        		}
        		else if(strSvcID == "ChkCount")
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
        		case "btn_Inquiry" :
        			this.fnSearch();
        			break;
        		case "btn_New" :
        			if(this.div_EduMM.form.stc_PresentCount.text == this.div_EduMM.form.stc_MaxCount.text)
        			{
        				this.alert("영업이 추가할 수 있는 최대 인원은 " + this.div_EduMM.form.stc_MaxCount.text + "명 입니다.");
        				return;
        			}

        			var sArgument = {
        								ES_SEQ : this.div_EduMM.form.edt_Discrimination.value,
        								Product_Name : this.div_EduMM.form.cmb_ProductName.value
        							};

        			this.commUtil.popup(this, "TE_SalesEduReg_New", "Technique::TE_SalesEduReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			break;
        		case "btn_Delete" :
        			if(this.dsOutput.rowcount < 1)
        			{
        				this.alert("취소할 대상자가 존재하지 않습니다.");
        				return false;
        			}

        			this.dsOutput.deleteRow(this.dsOutput.rowposition);
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        		case "btn_TotalView" :
        			var sArgument = {
        								Product_Name : this.div_EduMM.form.cmb_ProductName.value,
        								Product_Discrimination : this.div_EduMM.form.edt_Discrimination.value
        							};

        			this.commUtil.popup(this, "TE_SalesEduESSEQView", "Technique::TE_SalesEduESSEQView.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			break;
        		case "btn_ExcelExport" :
        			this.gfn_excelExport(this, this.grd_EduMM);
        			break;
        	}
        };

        this.div_EduMM_Button00_onclick = function(obj,e)
        {
        	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(nexacro.getApplication().mainframe, 0));
        	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(nexacro.getApplication().mainframe, 0));

        	this.pdiv_ScheduleList.trackPopup(x-76.5, y);
        };

        this.pdiv_ScheduleList_grd_ScheduleList_oncellclick = function(obj,e)
        {
        	this.div_EduMM.form.edt_Discrimination.set_value(this.ds_Record.getColumn(e.row, "ES_SEQ"));
        	this.fnSearch();
        	this.pdiv_ScheduleList.closePopup();
        };

        this.grd_EduMM_oncelldblclick = function(obj,e)
        {
        	var app = nexacro.getApplication();
        	var EMP_NM = app.gdsUserInfo.getColumn(0, "EMP_NM");

        	if(this.dsOutput.getColumn(e.row, "SALES_EMP_NAME") == EMP_NM)
        	{
        		this.dsOutput_Reference.clearData();

        		var nRow = this.dsOutput_Reference.addRow();
        		this.dsOutput_Reference.copyRow(nRow, this.dsOutput, e.row);

        		var sArgument = {
        							dsOutput_Reference : this.dsOutput_Reference,
        							ESL_SEQ : this.dsOutput.getColumn(e.row, "ESL_SEQ"),
        							nRow : e.row
        						};

        		this.commUtil.popup(this, "TE_SalesEduReg", "Technique::TE_SalesEduReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        	else
        	{
        		this.alert("본인이 등록한 신청내역만 수정이 가능합니다.");
        	}
        };

        //TE_SalesEduReg정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "TE_SalesEduReg_New" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);

        				var nRow = this.dsOutput.addRow();
        				this.dsOutput.copyRow(nRow, dsOutput, 0);
        			}
        			break;

        		case "TE_SalesEduReg" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);

        				//getColumnInfo : DataSet에서 지정한 Column 의 ColumnInfo 객체를 반환하는 메소드입니다.
        				if(!this.gfnIsEmpty(dsOutput.getColumnInfo("NEW_ESL_SEQ")))
        				{
        					this.dsOutput.copyRow(dsOutput.getColumn(0, "NEW_ESL_SEQ"), dsOutput, 0);
        				}
        				else
        				{
        					var sEslSeq = dsOutput.getColumn(0, "ESL_SEQ");

        					if(!this.gfnIsEmpty(sEslSeq))
        					{
        						var nRow = this.dsOutput.findRow("ESL_SEQ", sEslSeq);
        						this.dsOutput.copyRow(nRow, dsOutput, 0);
        					}
        				}
        			}
        			break;
        		case "EduESSEQMove" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);
        				this.fnChkCount(dsOutput.getColumn(0, "EDU_PRODUCT_CODE"), dsOutput.getColumn(0, "ES_SEQ")); //트랜잭션 Async처리 하였기 때문에 순차적으로 로직이 실행된다.

        				var nSalesCnt 		= parseInt(this.ds_ChkCount.getColumn(0, "SALES_NUM"));
        				var nSalesCurCnt 	= parseInt(this.ds_ChkCount.getColumn(0, "SALES_CUR_NUM"));

        				if(nSalesCnt > nSalesCurCnt)
        				{
        					var nRow = this.dsOutput.findRow("ESL_SEQ", dsOutput.getColumn(0,"ESL_SEQ"));
        					this.dsOutput.setColumn(nRow, "ES_SEQ", dsOutput.getColumn(0,"ES_SEQ"));
        					this.fnSave();
        					this.alert(dsOutput.getColumn(0, "ES_SEQ") + "회차로 이동하였습니다.");
        				}
        				else
        				{
        					this.alert(dsOutput.getColumn(0, "ES_SEQ") + "회차에는 최대 신청인원을 초과하여 이동할 수 없습니다.");
        				}
        			}
        			break;
        		case "EduESSEQCopy" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);
        				this.fnChkCount(dsOutput.getColumn(0, "EDU_PRODUCT_CODE"), dsOutput.getColumn(0, "ES_SEQ")); //트랜잭션 Async처리 하였기 때문에 순차적으로 로직이 실행된다.

        				var nSalesCnt 		= parseInt(this.ds_ChkCount.getColumn(0, "SALES_NUM"));
        				var nSalesCurCnt 	= parseInt(this.ds_ChkCount.getColumn(0, "SALES_CUR_NUM"));

        				if(nSalesCnt > nSalesCurCnt)
        				{
        					var nFindRow = this.dsOutput.findRow("ESL_SEQ", dsOutput.getColumn(0,"ESL_SEQ"));
        					var nRow = this.dsOutput.addRow();
        					this.dsOutput.copyRow(nRow, this.dsOutput, nFindRow);
        					this.dsOutput.setColumn(nRow, "ES_SEQ", dsOutput.getColumn(0,"ES_SEQ"));
        					this.dsOutput.setColumn(nRow, "STATUS_CD", '5');	/*영업추가로 복사*/
        					this.fnSave();
        					this.alert(dsOutput.getColumn(0, "ES_SEQ") + "회차로 복사하였습니다.");
        				}
        				else
        				{
        					this.alert(dsOutput.getColumn(0, "ES_SEQ") + "회차에는 최대 신청인원을 초과하여 복사할 수 없습니다.");
        				}
        			}
        			break;
        	}
        }

        this.dsOutput_onload = function(obj,e)
        {
        	this.div_EduMM.form.stc_PresentCount.set_text(obj.rowcount); //현재인원.
        };

        this.div_EduMM_cmb_Year_onitemchanged = function(obj,e)
        {
        	this.fnGetRecord(this.div_EduMM.form.cmb_ProductName.value, this.div_EduMM.form.cmb_Year.value);
        };

        this.div_EduMM_cmb_ProductName_onitemchanged = function(obj,e)
        {
        	this.fnGetYear(this.div_EduMM.form.cmb_ProductName.value);
        };

        this.grd_EduMM_oncellclick = function(obj, e)
        {
        	var app = nexacro.getApplication();
        	var EMP_NM = app.gdsUserInfo.getColumn(0, "EMP_NM");

        	if(obj.getCellText(e.row, e.cell) == "회차이동")
        	{
        		if(this.dsOutput.getColumn(e.row, "SALES_EMP_NAME") == EMP_NM)
        		{
        			this.dsCopy.clearData();
        			var nRow = this.dsCopy.addRow();
        			this.dsCopy.copyRow(nRow, this.dsOutput, e.row);

        			var sArgument = {
        								Product_Name : this.div_EduMM.form.cmb_ProductName.value,
        								Product_Year : this.div_EduMM.form.cmb_Year.value,
        								dsCopy : this.dsCopy
        							};

        			this.commUtil.popup(this, "EduESSEQMove", "Technique::TE_EduESSEQSelect.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        		}
        		else
        		{
        			this.alert("본인이 등록한 신청내역만 회차이동이 가능합니다.");
        		}
        	}
        	else if((obj.getCellText(e.row, e.cell) == "복사"))
        	{
        		if(this.dsOutput.getColumn(e.row, "SALES_EMP_NAME") == EMP_NM)
        		{
        			this.dsCopy.clearData();
        			var nRow = this.dsCopy.addRow();
        			this.dsCopy.copyRow(nRow, this.dsOutput, e.row);

        			var sArgument = {
        								Product_Name : this.div_EduMM.form.cmb_ProductName.value,
        								Product_Year : this.div_EduMM.form.cmb_Year.value,
        								dsCopy : this.dsCopy
        							};

        			this.commUtil.popup(this, "EduESSEQCopy", "Technique::TE_EduESSEQSelect.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        		}
        		else
        		{
        			this.alert("본인이 등록한 신청내역만 복사가 가능합니다.");
        		}
        	}
        };

        this.pdiv_ScheduleList_btn_ExcelExport_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this, this.pdiv_ScheduleList.form.grd_ScheduleList, "교육일정");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_BM_Education_Reg_onload,this);
            this.div_EduMM.form.cmb_Year.addEventHandler("onitemchanged",this.div_EduMM_cmb_Year_onitemchanged,this);
            this.div_EduMM.form.cmb_ProductName.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);
            this.div_EduMM.form.btn_Inquiry.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_New.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_Discrimination.addEventHandler("onclick",this.div_EduMM_Button00_onclick,this);
            this.div_EduMM.form.btn_TotalView.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);
            this.grd_EduMM.addEventHandler("oncelldblclick",this.grd_EduMM_oncelldblclick,this);
            this.grd_EduMM.addEventHandler("oncellclick",this.grd_EduMM_oncellclick,this);
            this.pdiv_ScheduleList.form.grd_ScheduleList.addEventHandler("oncellclick",this.pdiv_ScheduleList_grd_ScheduleList_oncellclick,this);
            this.pdiv_ScheduleList.form.btn_ExcelExport.addEventHandler("onclick",this.pdiv_ScheduleList_btn_ExcelExport_onclick,this);
            this.dsOutput.addEventHandler("onload",this.dsOutput_onload,this);
            this.dsOutput.addEventHandler("onrowsetchanged",this.dsOutput_onload,this);
        };
        this.loadIncludeScript("TE_SalesEduMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
