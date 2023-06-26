(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_EduManageDetail");
            this.set_titletext("세부과정관리");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,352);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_New_Code", this);
            obj._setContents("<ColumnInfo><Column id=\"NEW_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"100\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"100\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"100\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32767\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_EduManageDetail","4","38",null,null,"4","stc_BottomFrame:4",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","9",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","332","320","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"320","60","24","btn_Save:8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"320","60","24","btn_Delete:8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EduSeqDetailMM","8","43",null,null,"8","stc_BottomFrame:5",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"명칭\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CODE\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:CAPTION\" displaytype=\"normal\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","117","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("세부과정관리");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,352,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_EduSeqDetailMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_EduSeqDetailMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_EduSeqDetailMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_EduSeqDetailMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("TE_EduSeqDetailMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 교육 등록 (TE_EduMM_S04,
        							 TE_EduMM_R01)
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
        this.TE_EduManageDetail_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnSearch();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	this.gfnAddOutputDataset("dsOutput", "dsOutput");
        	this.gfnCommonTransaction("Select", "TE_EduMM_S04", this.grd_EduSeqDetailMM);
        };

        this.fnSave = function()
        {
        	this.gfnAddInputDataset("dsOutput", "dsInput");
        	this.gfnCommonTransaction("Save", "TE_EduMM_R01");
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
        		if(strSvcID == "Save")
        		{
        			this.fnSearch();
        		}
        		else if(strSvcID == "Select")
        		{

        		}
        	}
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Add" :
        			var nRow = this.dsOutput.addRow();
        			this.dsOutput.setColumn(nRow, "CM_CODE", "EDU_TYPE_DET");
        			break;
        		case "btn_Delete" :
        			this.dsOutput.deleteRow(this.dsOutput.rowposition);
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        		case "btn_Close" :
        			this.commUtil.popupClose("close");
        			break;
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_EduManageDetail_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Add.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("TE_EduSeqDetailMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
