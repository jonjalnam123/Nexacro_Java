(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_EduReg");
            this.set_titletext("회차등록");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1016,512);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_EDU_PRODUCT_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"hname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"START_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"END_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"20\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"20\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"ONLINE_NUM\" type=\"INT\" size=\"10\"/><Column id=\"SALES_NUM\" type=\"INT\" size=\"10\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
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


            obj = new Dataset("ds_OpenFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">폐강</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">개강</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NewEsSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"NEW_ES_SEQ\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"10","15","15","9",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Product","14","8","44","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("제 품");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_Product","67","8","122","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_CD_EDU_PRODUCT_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","60","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Delete","874","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_New","810","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_ManageDetail","640","8","94","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("세부과정관리");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Excel","738","8","68","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new CheckBox("cb_All","202","9","150","20",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("전 회차");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_EduSeqMM","4","div_Search:4",null,null,"4","4",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"132\"/><Column size=\"132\"/><Column size=\"63\"/><Column size=\"108\"/><Column size=\"101\"/><Column size=\"71\"/><Column size=\"69\"/><Column size=\"78\"/><Column size=\"25\"/><Column size=\"120\"/><Column size=\"131\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"종류\"/><Cell col=\"3\" text=\"세부\"/><Cell col=\"4\" text=\"시작일\"/><Cell col=\"5\" text=\"종료일\"/><Cell col=\"6\" text=\"개강여부\"/><Cell col=\"7\" text=\"장소\"/><Cell col=\"8\" text=\"인터넷 오픈\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"영업신청인원수\"/><Cell col=\"11\" text=\"온라인신청인원수\"/></Band><Band id=\"body\"><Cell text=\"bind:ES_SEQ\"/><Cell col=\"1\" text=\"bind:EDU_PRODUCT_CODE\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_PRODUCT_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:EDU_TYPE\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:EDU_TYPE_DET\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_TYPE_DET\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:START_DATE\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:END_DATE\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:OPEN_FLAG\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_OpenFlag\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"7\" text=\"bind:EDU_AREA_CODE\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_AREA_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"8\" colspan=\"2\" text=\"bind:ONLINE_OPEN_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:SALES_NUM\" edittype=\"text\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:ONLINE_NUM\" displaytype=\"number\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("회차등록");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1016,512,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("TE_EduSeqMM.xfdl", function() {
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
        this.TE_EduReg_onload = function(obj,e)
        {
        	this.fnFormInit();
        };


        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.fnGetCode(); //공통코드 조회
        }

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
        	this.gfnAddCodeDataset("ds_CD_EDU_PRODUCT_CODE" 	,"EDU_PRODUCT_CODE", true);
        	this.gfnAddCodeDataset("ds_CD_EDU_TYPE" 			,"EDU_TYPE");
        	this.gfnAddCodeDataset("ds_CD_EDU_TYPE_DET" 		,"EDU_TYPE_DET");
        	this.gfnAddCodeDataset("ds_CD_EDU_AREA_CODE"		,"EDU_AREA_CODE");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	this.gfnAddSendParameter("EDU_PRODUCT_CODE", this.div_Search.form.cmb_Product.value);
        	this.gfnAddSendParameter("ALL_FLAG", this.div_Search.form.cb_All.value);

        	this.gfnAddOutputDataset("dsOutput", "dsOutput");
        	this.gfnCommonTransaction("Select", "TE_EduMM_S05", this.grd_EduSeqMM);
        };

        this.fnSave = function()
        {
        	for(var i=0; i<this.dsOutput.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.dsOutput.getColumn(i, "EDU_PRODUCT_CODE")))
        		{
        			alert("제품을 지정해야 합니다.");
        			return;
        		}
        		else if(this.gfnIsEmpty(this.dsOutput.getColumn(i, "START_DATE")))
        		{
        			alert("시작일을 지정해야 합니다.");
        			return;
        		}
        		else if(this.gfnIsEmpty(this.dsOutput.getColumn(i, "END_DATE")))
        		{
        			alert("종료일을 지정해야 합니다.");
        			return;
        		}
        	}
        	this.gfnAddInputDataset("dsOutput", "dsInput");
        	this.gfnCommonTransaction("Save", "TE_EduMM_R03");
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
        		if(strSvcID == "Select")
        		{

        		}
        		else if(strSvcID == "gfnGetCode")
        		{
        			this.div_Search.form.cmb_Product.set_index(0);
        			this.fnSearch();
        		}
        		else if(strSvcID == "Save")
        		{

        		}
        	}
        }

        //TE_EduSeqDetailMM에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "TE_EduSeqDetailMM" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				this.fnGetCode();
        			}
        			break;
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_New" :
        			var nRow = this.dsOutput.addRow();
        			this.dsOutput.setColumn(nRow, "EDU_PRODUCT_CODE", this.div_Search.form.cmb_Product.value);
        			this.dsOutput.setColumn(nRow, "EDU_TYPE", "A");
        			this.dsOutput.setColumn(nRow, "EDU_TYPE_DET", "001");
        			this.dsOutput.setColumn(nRow, "EDU_AREA_CODE", "001");
        			this.dsOutput.setColumn(nRow, "OPEN_FLAG", "1");
        			this.dsOutput.setColumn(nRow, "ONLINE_OPEN_FLAG", "1");
        			this.dsOutput.setColumn(nRow, "SALES_NUM", 0);
        			this.dsOutput.setColumn(nRow, "ONLINE_NUM", 100);
        			break;
        		case "btn_Close" :
        			this.commUtil.popupClose();
        			break;
        		case "btn_Delete" :
        			this.dsOutput.deleteRow(this.dsOutput.rowposition);
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        		case "btn_Excel" :
        			this.fn_export(this.grd_EduSeqMM);
        			break;
        		case "btn_ManageDetail" :
        			this.commUtil.popup(this, "TE_EduSeqDetailMM", "Technique::TE_EduSeqDetailMM.xfdl", -1, -1, 400, 352, true, false, false, null, "fnPopupCallBack");
        			break;
        	}
        };

        this.cmb_Product_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.grd_EduSeqMM_onheadclick = function(obj,e)
        {
        	if(e.col == 8) //인터넷 오픈
        	{
        		if(this.gfnIsEmpty(obj.getCellProperty("head", e.cell, "text")) || obj.getCellProperty("head", e.cell, "text") == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);
        		}

        		if(obj.getCellProperty("head", e.cell, "text") == 1)
        		{
        			for(var i=0; i<this.dsOutput.rowcount; i++)
        			{
        				this.dsOutput.setColumn(i, "ONLINE_OPEN_FLAG", 1);
        			}
        		}
        		else if(obj.getCellProperty("head", e.cell, "text") == 0)
        		{
        			for(var i=0; i<this.dsOutput.rowcount; i++)
        			{
        				this.dsOutput.setColumn(i, "ONLINE_OPEN_FLAG", 0);
        			}
        		}
        	}
        	else if(!(e.col == 7))
        	{
        		this.gfnGridProcSort(obj, e.cell);  //헤더클릭 이벤트 있을 시 사용
        	}
        };

        this.div_Search_cb_All_onchanged = function(obj,e)
        {
        	this.fnSearch ();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_EduReg_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.cmb_Product.addEventHandler("onitemchanged",this.cmb_Product_onitemchanged,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.btn_New.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.btn_ManageDetail.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.cb_All.addEventHandler("onchanged",this.div_Search_cb_All_onchanged,this);
            this.grd_EduSeqMM.addEventHandler("onheadclick",this.grd_EduSeqMM_onheadclick,this);
        };
        this.loadIncludeScript("TE_EduSeqMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
