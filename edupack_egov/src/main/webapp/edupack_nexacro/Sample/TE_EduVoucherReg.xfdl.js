(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_EduVoucherReg");
            this.set_titletext("교육바우처관리");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"string\" size=\"4\"/><Column id=\"VOUCHER_NO\" type=\"string\" size=\"7\"/><Column id=\"VOUCHER_CD\" type=\"string\" size=\"20\"/><Column id=\"VOUCHER_CD_NAME\" type=\"string\" size=\"100\"/><Column id=\"USE_FLAG\" type=\"string\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_VOUCHER_CD1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_VOUCHER_CD2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_EduManageDetail","4","38",null,null,"4","43",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","9",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Year","14","8","44","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.div_Search.addChild(obj.name, obj);

            obj = new Spin("sp_Year","67","9","70","20",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_min("2019");
            obj.set_max("10000");
            obj.set_value("2019");
            this.div_Search.addChild(obj.name, obj);

            obj = new Radio("rd_Voucher","233","9","240","20",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_CD_VOUCHER_CD1");
            obj.set_datacolumn("CAPTION");
            obj.set_codecolumn("CODE");
            obj.set_rowcount("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Inquiry",null,"8","60","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Voucher","158","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("바우처구분");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EduSeqDetailMM","4","div_Search:4",null,null,"4","stc_BottomFrame:4",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"바우처번호\"/><Cell col=\"2\" text=\"바우처구분\"/><Cell col=\"3\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:VOUCHER_NO\"/><Cell col=\"2\" text=\"bind:VOUCHER_CD_NAME\"/><Cell col=\"3\" text=\"bind:USE_FLAG\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","117","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("교육바우처관리");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,null,"60","22","78","8",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,null,"60","22","btn_Delete:8","8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"60","22","10","8",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Add","135","591","330","148",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CompanyReg2","0","35",null,null,"0","0",null,null,null,null,this.div_Add.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            this.div_Add.addChild(obj.name, obj);

            obj = new Static("stc_PopupTitle","0","0",null,"35","0",null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("URL(\"theme://images/frm_popBg.png\")");
            this.div_Add.addChild(obj.name, obj);

            obj = new Button("btn_PopClose",null,"10","15","15","12",null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.div_Add.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","141","22",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("3");
            obj.set_text("바우처 추가");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            this.div_Add.addChild(obj.name, obj);

            obj = new Static("stc_Year","14","43","60","22",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("4");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Add.addChild(obj.name, obj);

            obj = new Spin("sp_Year","91","44","70","20",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("5");
            obj.set_min("2019");
            obj.set_max("10000");
            obj.set_value("2019");
            this.div_Add.addChild(obj.name, obj);

            obj = new Radio("rd_Voucher","91","73","184","20",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_CD_VOUCHER_CD2");
            obj.set_datacolumn("CAPTION");
            obj.set_codecolumn("CODE");
            obj.set_rowcount("1");
            this.div_Add.addChild(obj.name, obj);

            obj = new Button("btn_PopSave","100","118","60","22",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("7");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_tran");
            this.div_Add.addChild(obj.name, obj);

            obj = new Button("btn_PopCancel","168","118","60","22",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.div_Add.addChild(obj.name, obj);

            obj = new Static("stc_Voucher","14","72","60","22",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("9");
            obj.set_text("바우처구분");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Add.addChild(obj.name, obj);

            obj = new Static("stc_Count","166","43","60","22",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("10");
            obj.set_text("갯수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Add.addChild(obj.name, obj);

            obj = new Spin("sp_Count","243","44","70","20",null,null,null,null,null,null,this.div_Add.form);
            obj.set_taborder("11");
            obj.set_min("1");
            obj.set_max("300");
            obj.set_value("1");
            this.div_Add.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Add.form
            obj = new Layout("default","",0,0,this.div_Add.form,function(p){});
            this.div_Add.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_EduVoucherReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_EduVoucherReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_EduVoucherReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_EduVoucherReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("TE_EduVoucherReg.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 교육바우처관리
        * 03. 화면설명 :
        * 04. 작성일   : 2019.07.12
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

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TE_EduVoucherReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	if(this.parent.bEduVoucherReg)
        	{
        		var nYear = new Date().getFullYear();
        		this.div_Search.form.sp_Year.set_value(nYear);
        		this.div_Search.form.sp_Year.set_max(nYear+1);
        		this.btn_Add.set_visible(true);
        		this.btn_Delete.set_visible(true);
        		this.btn_Save.set_visible(true);
        	}
        	else
        	{
        		this.Static00.set_text("교육바우처선택");
        		this.div_Search.form.sp_Year.set_enable(false);
        		this.div_Search.form.sp_Year.set_value(this.parent.Year);
        	}

        	this.fnGetCode();
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_VOUCHER_CD1" 	,"VOUCHER_CD", true);
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	if(!this.parent.bEduVoucherReg)
        		this.gfnAddSendParameter("USE_FLAG", "0");
        	if(this.div_Search.form.rd_Voucher.index>0)
        		this.gfnAddSendParameter("VOUCHER_CD", this.div_Search.form.rd_Voucher.value);
        	this.gfnAddSendParameter("YEAR", this.div_Search.form.sp_Year.value);
        	this.gfnAddOutputDataset("dsList", "dsOutput");
        	this.gfnCommonTransaction("Select", "TE_EduVoucher_S02", this.grd_EduSeqDetailMM);
        };

        this.fnSave = function(strType)
        {
        	if(strType=="A")
        	{
        		this.gfnAddSendParameter("YEAR", this.div_Add.form.sp_Year.value);
        		this.gfnAddSendParameter("VOUCHER_CD", this.div_Add.form.rd_Voucher.value);
        		this.gfnAddSendParameter("CNT", this.div_Add.form.sp_Count.value);
        		this.dsInput.clearData();
        		this.dsInput.addRow();
        		this.gfnAddInputDataset("dsInput", "dsInput");
        		this.gfnCommonTransaction("SaveA", "TE_EduVoucher_R02");
        	}
        	else if(strType=="D")
        	{
        		this.gfnAddInputDataset("dsList", "dsInput");
        		this.gfnCommonTransaction("SaveD", "TE_EduVoucher_R01");
        	}
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
        			if(this.parent.bEduVoucherReg)
        				this.div_Search.form.rd_Voucher.set_index(0);
        			else
        				this.div_Search.form.rd_Voucher.set_index(1);
        			this.ds_CD_VOUCHER_CD2.copyData(this.ds_CD_VOUCHER_CD1);
        			this.ds_CD_VOUCHER_CD2.filter("CODE!=''");
        			this.fnSearch();
        		}
        		else if(strSvcID == "SaveA")
        		{
        			this.fnSearch();
        		}
        		else if(strSvcID == "SaveD")
        		{
        			this.fnSearch();
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
        		case "btn_Inquiry" :
        			this.fnSearch();
        			break;
        		case "btn_Add" :
        			/*정기가 사용된 경우가 있을경우 정기를 선택할수 없음*/
        			this.dsList.filter("VOUCHER_CD=='Y'&&USE_FLAG=='1'");
        			var nCntY = this.dsList.getRowCount();
        			this.dsList.filter("");
        			if(nCntY>0)
        				this.ds_CD_VOUCHER_CD2.filter("CODE!=''&&CODE!='Y'");
        			this.div_Add.form.rd_Voucher.set_index(0);
        			this.div_Add.set_top(231);
        			this.div_Add.set_left(135);
        			this.div_Add.set_visible(true);
        			break;
        		case "btn_Delete" :
        			if(this.dsList.getColumn(this.dsList.rowposition, "USE_FLAG")=="1")
        			{
        				this.alert("사용한 바우처는 삭제할수 없습니다.");
        				return;
        			}
        			else if(this.dsList.getColumn(this.dsList.rowposition, "VOUCHER_CD")=="Y")
        			{
        				this.alert("정기 바우처는 삭제할수 없습니다.");
        				return;
        			}
        			this.dsList.deleteRow(this.dsList.rowposition);
        			break;
        		case "btn_Save" :
        			this.fnSave("D");
        			break;
        		case "btn_PopSave" :
        			this.fnSave("A");
        			this.fnSearch();
        			this.div_Add.set_visible(false);
        			break;
        		case "btn_PopClose" :
        		case "btn_PopCancel" :
        			this.div_Add.set_visible(false);
        			break;
        		case "btn_Close" :
        			this.commUtil.popupClose();
        			break;
        	}
        };

        this.div_Add_rd_Voucher_onitemchanged = function(obj,e)
        {
        	if(e.postvalue=="Y")
        	{
        		this.div_Add.form.sp_Count.set_enable(true);
        	}
        	else
        	{
        		this.div_Add.form.sp_Count.set_value(1);
        		this.div_Add.form.sp_Count.set_enable(false);
        	}
        };

        this.div_Search_rd_Voucher_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.grd_EduSeqDetailMM_oncelldblclick = function(obj,e)
        {
        	if(!this.parent.bEduVoucherReg)
        	{
        		if(this.dsList.getColumn(this.dsList.rowposition, "USE_FLAG")=="1")
        		{
        			this.alert("사용한 바우처는 선택할수 없습니다.");
        			return;
        		}
        		var strVOUCHER_NO = this.dsList.getColumn(this.dsList.rowposition, "VOUCHER_NO");
        		this.commUtil.popupClose(strVOUCHER_NO);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_EduVoucherReg_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.rd_Voucher.addEventHandler("onitemchanged",this.div_Search_rd_Voucher_onitemchanged,this);
            this.div_Search.form.btn_Inquiry.addEventHandler("onclick",this.comm_Click,this);
            this.grd_EduSeqDetailMM.addEventHandler("oncelldblclick",this.grd_EduSeqDetailMM_oncelldblclick,this);
            this.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Add.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.div_Add.form.btn_PopClose.addEventHandler("onclick",this.comm_Click,this);
            this.div_Add.form.rd_Voucher.addEventHandler("onitemchanged",this.div_Add_rd_Voucher_onitemchanged,this);
            this.div_Add.form.btn_PopSave.addEventHandler("onclick",this.comm_Click,this);
            this.div_Add.form.btn_PopCancel.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("TE_EduVoucherReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
