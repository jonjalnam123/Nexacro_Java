(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_EduESSEQSelect");
            this.set_titletext("교육 회차 선택");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,356);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Record", this);
            obj._setContents("<ColumnInfo><Column id=\"ES_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_STATUS", this);
            obj._setContents("");
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


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NAME2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","11",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","9","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ScheduleList","8","43",null,null,"8","47",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_Record");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"회차\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/><Cell col=\"4\" text=\"종류\"/><Cell col=\"5\" text=\"세부\"/><Cell col=\"6\" text=\"장소\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:BCHECK\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:ES_SEQ\"/><Cell col=\"2\" text=\"bind:START_DATE\"/><Cell col=\"3\" text=\"bind:END_DATE\"/><Cell col=\"4\" text=\"bind:EDU_TYPE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:EDU_TYPE_DET\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE_DET\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:EDU_AREA_CODE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_AREA_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","117","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("교육 회차 선택");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,356,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_EduESSEQSelect.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_EduESSEQSelect.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_EduESSEQSelect.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_EduESSEQSelect.xfdl","Script::CommGrid.xjs");
        this.registerScript("TE_EduESSEQSelect.xfdl", function() {
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
        this.TE_EduESSEQSelect_onload = function(obj,e)
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
        	this.dsOutput.assign(this.parent.dsCopy);
        	this.fnGetRecord(this.parent.Product_Name, this.parent.Product_Year);
        };

        this.fnSave = function()
        {
        	this.dsOutput.setColumn(0, "ES_SEQ", this.ds_Record.getColumn(this.ds_Record.rowposition, "ES_SEQ"));
        	this.commUtil.popupClose(this.dsOutput);
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

        this.fnGetRecord = function(svcId, svcId2)
        {
        	this.gfnAddSendParameter("Product_Name", svcId);
        	this.gfnAddSendParameter("Product_Year", svcId2);

        	this.gfnAddOutputDataset("ds_Record", "dsOutput");
        	this.gfnCommonTransaction("GetRecord", "TE_EduMM_S02", this.grd_ScheduleList);
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
        		if(strSvcID == "GetRecord")
        		{

        		}
        		else if(strSvcID == "gfnGetCode")
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
        		case "btn_Close" :
        			this.commUtil.popupClose();
        			break;
        		case "btn_Confirm" :
        			var bCheck = "0";
        			for(var i=0; i<this.ds_Record.getRowCount(); i++)
        			{
        				bCheck = this.ds_Record.getColumn(i, "BCHECK");
        				if(bCheck=='1')
        					break;
        			}
        			if(bCheck=="1")
        				this.fnSave();
        			else
        				alert("선택된 회차가 없습니다.");

        			break;
        	}
        };

        this.grd_ScheduleList_oncelldblclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.grd_ScheduleList_oncellclick = function(obj,e)
        {
        	var bCheck = this.ds_Record.getColumn(e.row, "BCHECK");
        	for(var i=0; i<this.ds_Record.getRowCount(); i++)
        	{
        		this.ds_Record.setColumn(i, "BCHECK", "0");
        	}

        	this.ds_Record.setColumn(e.row, "BCHECK", bCheck=="1"?"0":"1");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_EduESSEQSelect_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.grd_ScheduleList.addEventHandler("oncelldblclick",this.grd_ScheduleList_oncelldblclick,this);
            this.grd_ScheduleList.addEventHandler("oncellclick",this.grd_ScheduleList_oncellclick,this);
            this.dsOutput.addEventHandler("onload",this.dsOutput_onload,this);
            this.dsOutput.addEventHandler("onrowsetchanged",this.dsOutput_onload,this);
        };
        this.loadIncludeScript("TE_EduESSEQSelect.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
