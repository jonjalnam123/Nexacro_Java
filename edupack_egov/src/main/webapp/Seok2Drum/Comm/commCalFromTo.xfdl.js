(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmCalFromTo");
            this.set_titletext("기간달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(258,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calFrom","0","0","46.51%","28",null,null,"120",null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","calFrom:5","2","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","Static00:5","0","46.51%","28",null,null,"120",null,null,null,this);
            obj.set_taborder("0");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","30","350","270",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","350","240",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_PdvCalbg");
            obj.set_border("1px solid pink");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("기간선택");
            obj.getSetter("uWord").set("popup.periodselect");
            obj.set_cssclass("sta_POP_Title");
            obj.set_background("pink");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"5","21","21","11",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalFrom","8","43","160","179",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_usetrailingday("false");
            obj.set_popuptype("none");
            obj.set_value("");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalTo","180","43","160","179",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvConfirm","111","232","60","28",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_POP_Btn");
            obj.set_background("pink");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvCancle","177","232","60","28",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            obj.set_cssclass("btn_POP_Btn");
            obj.set_background("pink");
            this.pdvCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCal.form
            obj = new Layout("default","",0,0,this.pdvCal.form,function(p){});
            this.pdvCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",258,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commCalFromTo.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmCalFromTo (공통 기간달력)
        *  @FileName 	CmmCalFromTo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    기간달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	Education 	               최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.ufnFormOnLoad(this);//초기화[필수]
        	this.fnInit(); //달력초기화
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.calFrom.set_value("");	//FROM 달력 셋팅
        	this.calTo.set_value("");		//TO 달력 셋팅
        };

        /**
        * @description from 일자 갖고오기
        */
        this.fnGetFromDate = function ()
        {
        	var sDate = this.calFrom.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.fnGetToDate = function ()
        {
        	var sDate = this.calTo.value;
        	return sDate;
        };

        /**
        * @description from일자 세팅하기
        */
        this.fnSetFromDate = function (sDate)
        {
        	this.calFrom.set_value(sDate);
        };

        /**
        * @description to일자 세팅하기
        */
        this.fnSetToDate = function (sDate)
        {
        	this.calTo.set_value(sDate);
        };

        /**
        * @description enable true/false세팅
        */
        this.fnSetEnable = function (bValue)
        {
        	this.calFrom.set_enable(bValue);
        	this.calTo.set_enable(bValue);
        };

        /**
        * @description readonly true/false세팅
        */
        this.fnSetReadonly = function (bValue)
        {
        	this.calFrom.set_readonly(bValue);
        	this.calTo.set_readonly(bValue);
        };

        /**
        * @description Essential true/false세팅
        */
        this.fnSetEssential  = function (bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue){
        		this.calFrom.set_background("yellow");
        		this.calTo.set_background("yellow");
        	}else{
        		this.calFrom.set_background("");
        		this.calTo.set_background("");
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calFrom_ondropdown = function(obj,e)
        {
        	var sDate = this.ufnGetDate(); //default today = 해당월1일부터 오늘까지

        	//from달력세팅
        	if (this.ufnIsNull(this.calFrom.value)) {
        		this.pdvCal.form.pdvCalFrom.set_value(sDate.substr(0,6) + "01");
        	} else {
        		this.pdvCal.form.pdvCalFrom.set_value(this.calFrom.value);
        	}

        	//TO 달력 셋팅
        	if (this.ufnIsNull(this.calTo.value)) {
        		this.pdvCal.form.pdvCalTo.set_value(sDate);
        	} else {
        		this.pdvCal.form.pdvCalTo.set_value(this.calTo.value);
        	}
        /*
        	var oForm = this.parent.parent;
        	var nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop);
        */
        	//Div 안에 넣을 경우 팝업 위치 이상해서 수정
        	this.pdvCal.trackPopupByComponent(this.calFrom, 0, obj.height);

        };

        /**
        * @description 기간 popDiv컴포넌트 확인(적용) 버튼 클릭
        */
        this.pdvCal_btnPdvConfirm_onclick = function(obj,e)
        {
        	var sFromValue = this.pdvCal.form.pdvCalFrom.value;
        	var sToValue = this.pdvCal.form.pdvCalTo.value;

        	this.calFrom.set_value(sFromValue);
        	this.calTo.set_value(sToValue);
        	this.pdvCal.closePopup();
        };

        /**
        * @description 기간 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calFrom.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.calTo.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.pdvCal.form.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.btnPdvConfirm.addEventHandler("onclick",this.pdvCal_btnPdvConfirm_onclick,this);
            this.pdvCal.form.btnPdvCancle.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
        };
        this.loadIncludeScript("commCalFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
