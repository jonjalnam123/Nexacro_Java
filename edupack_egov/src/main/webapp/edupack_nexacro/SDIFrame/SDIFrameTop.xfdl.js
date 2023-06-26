(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameSDITop");
            this.set_titletext("FrameSDITop");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","210","29",null,"22","258",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","0","0","248",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_Main_Logo");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnNotice",null,"13","24","24","218",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_PushN");
            this.addChild(obj.name, obj);

            obj = new Static("staPushCount",null,"6","18","14","210",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_cssclass("sta_TF_PushCount");
            this.addChild(obj.name, obj);

            obj = new Static("staName",null,"15","120","20","90",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("교육사업팀 홍길동");
            obj.set_cssclass("sta_TF_UserInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogOut",null,"15","80","20","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("uWord").set("frame.logOut");
            obj.set_cssclass("btn_TF_Logout");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,80,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SDIFrameTop.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    SIDFrame > SDIFrameTop
        *  @FileName 	SDIFrameTop.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    SDI Top 메뉴
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjApp  = this.gfnGetApplication();
        this.fvObjSelectMenu = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.divTopBtn.form.set_scrollbartype("none");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 메세지 콜백
        */

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * 로그인 사용자 세팅
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnSetName = function()
        {
        	var sNameCol = "USER_NAME";
        	// 다국어 처리
        	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
        	if (sNowLang != "KO") {
        		sNameCol = sNameCol+sNowLang;
        	}

        	var sName  = this.fvObjApp.gdsUserInfo.getColumn(0, sNameCol);
        	this.staName.set_text("교육사업팀 " + sName);	//다국어 처리 안함
        };

        /**
         * topmenu를 dsMenu로 copy
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnLoad = function ()
        {
        	this.fvObjApp.gdsMenu.filter(this.FRAME_MENUCOLUMNS.menuLevel + "==0");
        	this.dsMenu.copyData(this.fvObjApp.gdsMenu, true);
        	this.fvObjApp.gdsMenu.filter("");
        	this.fnSetTopMenu();
        };

        /**
         * topmenu세팅
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnSetTopMenu = function ()
        {
        	var sNowLang        = nexacro.getEnvironmentVariable("evLanguage");
        	var sMenuNameColumn = this.FRAME_MENUCOLUMNS.menuNm;
        	var nLeft = 50;

        	for(var i=0; i<this.dsMenu.getRowCount(); i++)
        	{
        		var sMenuId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);

        		if (sNowLang != "KO") sMenuNameColumn = sMenuNameColumn + sNowLang;	// 다국어 처리
        		var sMenuName = this.dsMenu.getColumn(i, sMenuNameColumn);

        		// Creating Top Menu button
        		var objSize = nexacro.getTextSize(sMenuName, "bold 15px 'Verdana', 'Malgun Gothic'");
        		var objBtn = new Button();
        		objBtn.init("btnTop" + sMenuId, nLeft, 0, objSize.nx, objSize.ny);
        		nLeft += objSize.nx + 80;
        		this.divTopBtn.addChild(objBtn.name, objBtn);
        		objBtn.set_text(sMenuName);
        		objBtn.menuid = sMenuId;
        		objBtn.set_cssclass("btn_TF_Menu");
        		objBtn.setEventHandler("onclick", this.fnTopMenuClick, this);
        		objBtn.show();

        		if (i == 0){
        			this.fvObjSelectMenu = objBtn;
        		}
        	}
        };

        this.fnTopMenuClick = function(obj,e)
        {
        	//Left 메뉴 변경
        	this.parent.parent.divFrameLeft.form.fnChangeMenu(obj.menuid);
        	this.parent.parent.fnSetDivSize("Form");

        	//메뉴 선택한 상태로 변경
        	if(this.fvObjSelectMenu != obj){
        		this.fvObjSelectMenu.setSelectStatus(false);
        		obj.setSelectStatus(true);
        		this.fvObjSelectMenu = obj;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnLogOut_onclick = function(obj,e)
        {
        	if(system.navigatorname == "nexacro"){
        		var sMsgId = "confirm.logout";			//메세지ID
        		var arrArg = "";						//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 로그아웃 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else{
        		window.top.location.reload(true);
        	}
        };

        this.staLogo_onclick = function(obj,e)
        {
        	this.parent.parent.fnSetDivSize("Main");
        	this.fvObjSelectMenu.setSelectStatus(false);

        	if (system.navigatorname != "nexacro"){
        		var sHash 	= "MainPage";
        		var oData	= {};
        		MyHistory.setLocationHash(sHash, oData);
        	}

        };


        /**
         * @description 알림오픈버튼 클릭
        */
        this.btnNotice_onclick = function(obj,e)
        {
        	var objTagetForm = this.fvObjApp.avMainFrame.form;

        	var bAni = true;
        	//this.btnNotice.u_showYn 으로 표시 여부 제어
        	if (this.btnNotice.u_showYn == "Y"){
        		this.fnSetNoticeShow(objTagetForm, false, bAni)
        	}
        	else{
        		this.fnSetNoticeShow(objTagetForm, true, bAni)
        	}
        };

        /**
         * @description  알림여부에 맞게 알림창 초기화
         * @param  {object} objTargetForm 타겟form
         * @return none
         */
        this.fnInitNoticeShow = function(objTargetForm)
        {
        	var objForm = objTargetForm;
        	var bShow   = this.fnGetNoticeShow();
        	var bAni    = false;
        	this.fnSetNoticeShow(objForm, bShow, bAni);
        }

        /**
         * @description  현재알림상태 정보 리턴
         * @param  none
         * @return {boolean} 여부
         */
        this.fnGetNoticeShow = function()
        {
        	if (this.btnNotice.u_showYn == "Y"){
        		return true;
        	}
        	return false;
        }


        /**
         * @description  현재알림상태 정보 셋팅
         * @param  {object} objForm 적용form
         * @param  {boolean} bShow 표시여부
         * @param  {boolean} bAni 애니메이션 적용여부
         * @return none
         */
        this.fnSetNoticeShow = function(objForm, bShow, bAni)
        {
        	//표시여부 셋팅 및 디자인적용
        	if (bShow){
        		this.btnNotice.u_showYn = "Y";									//알림적용여부(u_showYn : 유저프로퍼티로 사용)
        		objForm.divNotice.form.staNotice.set_text("공지사항입니다.");	//알림내용
        	}
        	else{
        		this.btnNotice.u_showYn = "N";
        	}

        	//animation 이용여부에 따른 표시 동작호출
        	if (bAni){
        		this.fnCreateAniObject(objForm);
        		if (bShow){
        			objForm.aniShow.play();
        		}
        		else{
        			objForm.aniHide.play();
        		}
        	}
        	else{
        		if (bShow){
        			objForm.divNotice.set_height(150);
        		}
        		else{
        			objForm.divNotice.set_height(0);
        		}
        	}
        }

        this.fnCreateAniObject = function(objForm)
        {
        	//animation 미존재시 추가
        	if (!objForm.aniShow){
        		var objAniShow = new nexacro.Animation("aniShow", objForm);
        		objForm.addChild("aniShow", objAniShow);
        		objForm.aniShow.addTarget("AniItem01", objForm.divNotice, "height:120");
        		objForm.aniShow.setEventHandler("oncomplete"
        									, 	function(obj,e)
        										{
        											//trace("끝1");
        										}
        									, objForm);

        		objForm.aniShow.set_duration(500);

        		var aniObj01 = new nexacro.Animation("aniHide", objForm);
        		objForm.addChild("aniHide", aniObj01);
        		objForm.aniHide.addTarget("AniItem01", objForm.divNotice, "height:0");
        		objForm.aniHide.setEventHandler("oncomplete"
        									, 	function(obj,e)
        										{
        											//trace("끝2");
        										}
        									, objForm);
        		objForm.aniHide.set_duration(500);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divTopBtn.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.staLogo.addEventHandler("onclick",this.staLogo_onclick,this);
            this.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.btnLogOut.addEventHandler("onclick",this.btnLogOut_onclick,this);
        };
        this.loadIncludeScript("SDIFrameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
