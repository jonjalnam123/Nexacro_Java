(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormLogin");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staCenter","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgMainLogo","staCenter:-130","staCenter:-254","260","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_image("url(\'imagerc::drum.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","staCenter:-185","staCenter:-87","370","275",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkIdSave","245","149","94","18",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("아이디 저장");
            obj.set_font("12pt/normal \"휴먼매직체\"");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","61","225","120","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_background("pink");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnJoin","186","225","120","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("회원가입");
            obj.set_background("pink");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staFindId","24","177","99","23",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("아이디 찾기");
            obj.set_font("14pt/normal \"휴먼매직체\"");
            obj.set_cursor("pointer");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staFindPw","126","177","111","23",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호 찾기");
            obj.set_font("14pt/normal \"휴먼매직체\"");
            obj.set_cursor("pointer");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staAdminLogin","240","177","111","23",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_text("관리자 로그인");
            obj.set_font("14pt/normal \"휴먼매직체\"");
            obj.set_cursor("pointer");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staPw","20","89","89","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPassWord","109","89","240","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_border("1px solid pink");
            obj.set_password("true");
            obj.set_text("2184");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserID","109","40","240","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            obj.set_text("peter2184");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staID","20","40","89","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("9");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comm1001fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\cmm
        *	@FileName cmmJoin1002fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/18
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/18		최정석		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        this.fvApp = nexacro.getApplication();
        this.fnLoginCnt = "";

        /**************************************************************************
        * FORM EVENT 영역(onload)
        **************************************************************************/

        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */
        this.FormLogin_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);

        	// 아이디 저장하기가 true 일때 아이디 가져오기\
	var sUserId = nexacro.getPrivateProfile("USER_ID");
        	if(sUserId != null && sUserId.length > 0) {
        		this.divLogin.form.edtUserID.set_value(sUserId);
        		this.divLogin.form.chkIdSave.set_value(true);
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
        * @description 회원가입 버튼 클릭시 기능
        */
        this.divLogin_btnJoin_onclick = function(obj,e)
        {
        	this.go("cmm::comm1002fm.xfdl");
        };

        /**
        * @description 아이디 찾기 클릭시 기능
        */
        this.divLogin_staFindId_onclick = function(obj,e)
        {
        	this.go("cmm::comm1003fm.xfdl");
        };

        /**
        * @description 비밀번호 찾기시 기능
        */
        this.divLogin_staFindPw_onclick = function(obj,e)
        {
        	this.go("cmm::comm1004fm.xfdl");
        };

        /**
        * @description 관리자로그인시 기능
        */
        this.divLogin_staAdminLogin_onclick = function(obj,e)
        {
        	this.fvApp.avVFrameSet.set_separatesize("0,0,0,0,*");
        };

        /**
        * @description 로그인 클릭시 프레임 화면 조절 및 아이디 저장 기능
        */
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.divLogin.form.edtUserID.value)) {
        		this.ufnAlert("msg.join.idnull");
        		this.divLogin.form.edtUserID.setFocus();
        		return;
        	}else if(this.divLogin.form.edtUserID.value.indexOf("Admin") >= 0) {
        		this.ufnAlert("msg.login.admincheck");
        		this.divLogin.form.edtUserID.setFocus();
        		return;
        	}else if(this.ufnIsNull(this.divLogin.form.edtPassWord.value)) {
        		this.ufnAlert("msg.login.passwordnull");
        		this.divLogin.form.edtPassWord.setFocus();
        		return;
        	}

        	var sId	= this.divLogin.form.edtUserID.value;
        	var sPw	= this.divLogin.form.edtPassWord.value;
        	this.ufnTransaction("loginCheck"
        		,"nexa/checkIdPw.do"
        		,""
        		,"gdsMember=dsMember"
        		,"paramID=" + nexacro.wrapQuote(sId) + " paramPW=" + nexacro.wrapQuote(sPw)
        		,"fnCallback");

        	//아이디 저장하기
        	if(this.divLogin.form.chkIdSave.value) {
        		nexacro.setPrivateProfile("USER_ID", this.divLogin.form.edtUserID.value);
        		var sMyMenu = nexacro.getPrivateProfile("USER_MENU"); //로그인 상태로
        		this.fvApp.gdsMyMenu.loadXML(sMyMenu);
        	} else {
        		nexacro.setPrivateProfile("USER_ID", "");
        	}
        };

        /**
        * @description 비밀번호 입력후 엔터키로 확인버튼
        */
        this.divLogin_edtPassWord_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) {
        		this.divLogin.form.btnLogin.click();
        	}
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 로그인 진행시 콜백
        */
        this.fnCallback = function (svcId, errCd, errMsg) {

        	if(this.fnLoginCnt > 0) {
        		this.fvApp.avVFrameSet.set_separatesize("150,*,100,0,0");
        		this.visibleMemberAdminBtn();

        		var sIdLogin = this.fvApp.gdsMember.getColumn(0,"NAME")
        		this.fvApp.avTopFrame.form.divTop.form.edtWelcome.set_value(sIdLogin + "님 안녕하세요."); //로그인할때 탑에 사용자 인사

        	}else{
        		this.ufnAlert("msg.login.idpwcheck");
        		this.fvApp.gdsMember.clearData();
        		this.reload();
        		return;
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**
        * @description 로그인 할때 회원관리 버튼 보이게 안보이게 설정
        */
        this.visibleMemberAdminBtn = function ()
        {
        	if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin"){
        		this.fvApp.avTopFrame.form.divTop.form.btnAdminMember.set_visible(true);
        		this.fvApp.avTopFrame.form.divTop.form.btnAdminReserve.set_visible(true);
        	}else{
        		this.fvApp.avTopFrame.form.divTop.form.btnAdminMember.set_visible(false);
        		this.fvApp.avTopFrame.form.divTop.form.btnAdminReserve.set_visible(false);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormLogin_onload,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.btnJoin.addEventHandler("onclick",this.divLogin_btnJoin_onclick,this);
            this.divLogin.form.staFindId.addEventHandler("onclick",this.divLogin_staFindId_onclick,this);
            this.divLogin.form.staFindPw.addEventHandler("onclick",this.divLogin_staFindPw_onclick,this);
            this.divLogin.form.staAdminLogin.addEventHandler("onclick",this.divLogin_staAdminLogin_onclick,this);
            this.divLogin.form.edtPassWord.addEventHandler("onkeydown",this.divLogin_edtPassWord_onkeydown,this);
        };
        this.loadIncludeScript("comm1001fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
