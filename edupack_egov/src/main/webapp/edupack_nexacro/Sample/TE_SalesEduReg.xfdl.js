(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_SalesEduReg");
            this.set_titletext("영업 교육등록");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(532,208);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"SALES_EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_ClientReg","4","39",null,null,"6","44",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","9",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","78","9",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","10","9",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Name","14","47","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name","90","47","170","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Department","14","77","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Department","90","77","170","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Telephone","90","107","170","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Telephone","14","107","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("연락번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Email","268","107","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Email","345","107","171","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CompanyName","345","47","171","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CompanyName","269","47","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Class","269","77","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Class","345","77","171","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("교육등록");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_LoginID","14","137","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("로그인ID");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LoginID","90","137","170","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",532,208,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_Name","value","dsOutput","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_Department","value","dsOutput","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_Telephone","value","dsOutput","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_Email","value","dsOutput","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_CompanyName","value","dsOutput","COMPANY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_Class","value","dsOutput","DUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_LoginID","value","dsOutput","INSERT_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_SalesEduReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_SalesEduReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_SalesEduReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_SalesEduReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("TE_SalesEduReg.xfdl", function() {
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
        this.TE_SalesEduReg_onload = function(obj,e)
        {
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	if(this.parent.sParent=="TE_StudentList")
        	{
        		this.edt_LoginID.set_visible(true);
        		this.stc_LoginID.set_visible(true);
        	}
        	if(!this.gfnIsEmpty(this.parent.ESL_SEQ)){ //수강생 리스트 그리드를 더블클릭 했을 시
        		this.dsOutput.assign(this.parent.dsOutput_Reference);
        		}
        	else									  //신규버튼 클릭 시 && ESL_SEQ가 아직 추가안된 상태로 수강생 리스트 그리드를 더블클릭 했을 시
        	{
        		if(this.gfnIsEmpty(this.parent.dsOutput_Reference)) {
        			var nRow = this.dsOutput.addRow();

        			//Table에 NotNull인 것 강제 맵핑
        			this.dsOutput.setColumn(nRow, "EDU_PRODUCT_CODE", this.parent.Product_Name);
        			this.dsOutput.setColumn(nRow, "ES_SEQ", this.parent.ES_SEQ);
        			this.dsOutput.setColumn(nRow, "STATUS_CD", "5");

        			this.dsOutput.setColumn(nRow, "ATTEND_FLAG", "0");
        			this.dsOutput.setColumn(nRow, "CERTIFICATES_FLAG", "0");
        			this.dsOutput.setColumn(nRow, "CONSULTING_FLAG", "0");
        			this.dsOutput.setColumn(nRow, "MARKETING_AGREE_FLAG", "0");
        			this.dsOutput.setColumn(nRow, "SALES_EMP_NAME", nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NM"));
        		}
        		else
        		{
        			this.dsOutput.assign(this.parent.dsOutput_Reference);
        		}
        	}
        };

        this.fnValidation = function()
        {
        	if(this.gfnIsEmpty(this.edt_Name.value))
        	{
        		return false;
        	}
        	else if(this.gfnIsEmpty(this.edt_Telephone.value))
        	{
        		return false;
        	}
        	else if(this.gfnIsEmpty(this.edt_Email.value))
        	{
        		return false;
        	}
        	return true;
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
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

        	}
        }


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Confirm" :
        			if(this.fnValidation())
        			{
        				if(this.gfnIsEmpty(this.dsOutput.getColumn(0, "ESL_SEQ")))
        				{
        					this.dsOutput.addColumn("NEW_ESL_SEQ", "STRING", 100);
        					this.dsOutput.setColumn(0, "NEW_ESL_SEQ", this.parent.nRow); //부모창에서 더블클릭한 그리드 행번호가 넘어옴(nRow : ESL_SEQ값이 없을때를 대비하여 넘긴 값)
        				}

        				this.commUtil.popupClose(this.dsOutput);
        			}
        			break;
        		case "btn_Cancel" :
        			this.commUtil.popupClose();
        			break;
        		case "btn_Close" :
        			this.commUtil.popupClose();
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_SalesEduReg_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Cancel.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("TE_SalesEduReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
