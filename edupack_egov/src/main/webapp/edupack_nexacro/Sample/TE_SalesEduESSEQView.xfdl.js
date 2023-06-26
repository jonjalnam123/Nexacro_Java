(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_SalesEduESSEQView");
            this.set_titletext("전체 명단보기");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(976,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTotalView", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NAME2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_STATUS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","2",null,null,"38","1","2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TotalView","10","44","957","428",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTotalView");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"81\"/><Column size=\"165\"/><Column size=\"82\"/><Column size=\"83\"/><Column size=\"178\"/><Column size=\"292\"/><Column size=\"83\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"연락번호\"/><Cell col=\"6\" text=\"E_MAIL\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:DUTY_NAME\"/><Cell col=\"5\" text=\"bind:PHONE_NO\"/><Cell col=\"6\" text=\"bind:EMAIL\"/><Cell col=\"7\" text=\"bind:EMP_NAME2\"/><Cell col=\"8\" combodataset=\"ds_CD_EDU_STATUS\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:STATUS_CD\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","117","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전체 명단보기");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",976,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_SalesEduESSEQView.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_SalesEduESSEQView.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_SalesEduESSEQView.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_SalesEduESSEQView.xfdl","Script::CommGrid.xjs");
        this.registerScript("TE_SalesEduESSEQView.xfdl", function() {
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
        this.TE_SalesEduESSEQView_onload = function(obj,e)
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
        	this.fnTotalView(this.parent.Product_Name, this.parent.Product_Discrimination);
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_EDU_STATUS" 			,"EDU_STATUS");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnTotalView = function(str1, str2)
        {
        	this.gfnAddSendParameter("EDU_PRODUCT_CODE", str1);
        	this.gfnAddSendParameter("ES_SEQ", str2);

        	this.gfnAddOutputDataset("dsTotalView", "dsOutput");
        	this.gfnCommonTransaction("TotalView", "TE_EduMM_S03", this.grd_TotalView);
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
        		if(strSvcID == "TotalView")
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
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_SalesEduESSEQView_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("TE_SalesEduESSEQView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
