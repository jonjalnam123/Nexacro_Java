(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleScript");
            this.set_titletext("script 표준");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Script 표준");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"842","10",null,"980",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("※ Script 작성시 표준을 정의한 내용이다. Script 탭의 소스에서 확인 가능하다.\r\r\n\r\r\r\r\r\n/**\r\r\r\n*  Necacro EduPack\r\r\r\n*  @MenuPath    샘플 > script 표준\r\r\r\n*  @FileName      SampleScript.xfdl \r\r\r\n*  @Creator          Education\r\r\r\n*  @CreateDate    2022.05.01\r\r\r\n*  @Desction    스크립트 표준 및 주석 표준 정의\r\r\r\n************** 소스 수정 이력 ***********************************************\r\r\r\n*  date          \t\tModifier                Description\r\r\r\n*******************************************************************************\r\r\r\n*  2022.05.01     \tEducation \t                최초 생성\r\r\n*******************************************************************************\r\r\r\n*/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * FORM 변수 선언 영역\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * FORM EVENT 영역(onload, onbeforeclose)\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * CALLBACK 콜백 처리부분(Transaction, Popup)\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * CRUD 및 TRANSACTION 서비스 호출 처리\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * 사용자 FUNCTION 영역\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * 각 COMPONENT 별 EVENT 영역\r\r\r\r\r\n ************************************************************************************************/");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleScript.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 스크립트 표준
        *  @FileName 	SampleScript.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
         ************************************************************************************************/
        //include "lib::libCommon.xjs";


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvTest = "aaa";	// form변수 Sample


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /**
         * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
         * @return {boolean} true(화면 닫음) / false(화면 닫지 않음)
        */
        this.fnClose = function()
        {
            return true;
        // 	if (this.gfnDsIsUpdated(this.dsList)) {
        // 		return false;
        // 	}
        // 	else {
        // 		return true;
        // 	}
        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			// trace(this.dsList.saveXML());
        			break;

        		case "save":
        			// 저장 되었습니다.
        			this.gfnAlert("msg.save.success");
        			break;
        	}
        };

        /**
         * @description Popup CallBack 함수(선택)
        */
        this.fnPopupCallback = function(strId, strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        };


        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearch = function ()
        {
        	// 조회조건 설정
         	this.dsInput.setColumn(0,"id",this.gfnNvl(this.divSearch.form.edtId.value,""));

         	var strSvcId    = "search";
        	var strSvcUrl   = "transactionSelectTest.do";
        	var inData      = "dsInput=dsInput";
        	var outData     = "dsList=dsList";
        	var strArg      = "name=" + this.gfnNvl(this.divSearch.form.edtName.value,"");
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
         * @description 입력
        */
        this.fnAdd = function()
        {
        	this.dsList.addRow();
        };

        /**
         * @description 삭제
        */
        this.fnDel = function()
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        /**
         * @description 저장
        */
        this.fnSave = function()
        {
        	// 변경사항 체크
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 변경된 내역이 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// Validation 체크
        	this.gfnClearValidation(this.dsList);
        	this.gfnSetValidation(this.dsList, "ID", "아이디", "required,length:5");
         	if (this.gfnValidation(this.dsList, "U") == false) return;

        	var strSvcUrl   = "transactionSaveTest.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "dsList=dsList";

        	this.gfnTransaction("save", strSvcUrl, inData, outData);
        };

        /**
         * @description 엑셀
        */
        this.fnExcel = function()
        {

        };

        /**
         * @description 출력
        */
        this.fnPrint = function()
        {

        };


        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 사용자 함수
        */
        this.fnTest = function(sMessage)
        {
        	trace(sMessage);
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("SampleScript.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
