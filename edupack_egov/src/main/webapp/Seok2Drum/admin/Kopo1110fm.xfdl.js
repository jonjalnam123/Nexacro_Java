(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AdminLogin");
            this.set_titletext("관리자 로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staCenter","0","0","50.00%","50.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLoginLogo","staCenter:-130","staCenter:-254","260","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_image("url(\'imagerc::drum.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","staCenter:-185","staCenter:-87","370","275",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkIdSave","245","156","94","18",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("아이디 저장");
            obj.set_font("12pt/normal \"휴먼매직체\"");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","61","225","120","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_background("pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnCancel","186","225","120","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_background("pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staPw","20","89","89","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
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
            obj.set_text("1234");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserID","109","40","240","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            obj.set_text("Admin");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staID","20","40","89","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
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
        this.registerScript("Kopo1110fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\admin
        *	@FileName Kopo1110fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/06/05
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/06/05		최정석		최초 생성
        *
        *
        */

        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        this.fvApp = nexacro.getApplication();
        this.fnLoginCnt = "";

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        /**
        * @description 온로드 이벤트
        */
        this.AdminLogin_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);

        	// 아이디 저장하기가 true 일때 아이디 가져오기
        	var sUserId = nexacro.getPrivateProfile("USERID");
        	if(sUserId != null && sUserId.length > 0) {
        		this.divLogin.form.edtUserID.set_value(sUserId);
        		this.divLogin.form.chkIdSave.set_value(true);
        	}
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 로그인 체크 콜백
        */
        this.fnCallback = function (svcId, errCd, errMsg) {
        	if(this.fnLoginCnt > 0) {
        		this.fvApp.avVFrameSet.set_separatesize("150,*,100,0,0");
        		var sIdLogin = this.fvApp.gdsMember.getColumn(0,"NAME")
        		this.fvApp.avTopFrame.form.divTop.form.edtWelcome.set_value(sIdLogin + "님 안녕하세요.");
        	}
        	else {
        		this.ufnAlert("msg.login.idpwcheck");
        		this.fvApp.gdsMember.clearData();
        		return false;
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description 로그인 버튼 이벤트
        */
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.divLogin.form.edtUserID.value)){
        		this.ufnAlert("msg.join.idnull")
        		return;
        	}else if(this.divLogin.form.edtUserID.value != "Admin") {
        		this.ufnAlert("msg.login.adminlogcheck")
        		return;
        	}else if(this.ufnIsNull(this.divLogin.form.edtPassWord.value)) {
        		this.ufnAlert("msg.login.passwordnull")
        		return;
        	}
        	var sId = this.divLogin.form.edtUserID.value;
        	var sPw = this.divLogin.form.edtPassWord.value;
        	//입력한 값 파라미터로 보내서 정보있는지 체크
        	this.ufnTransaction("trCheck"
        		,"nexa/checkIdPw.do"
        		,""
        		,"gdsMember=dsMember"
        		,"paramID=" + nexacro.wrapQuote(sId) + " paramPW=" + nexacro.wrapQuote(sPw)
        		,"fnCallback");

        	//아이디 저장하기
        	if(this.divLogin.form.chkIdSave.value) {
        		nexacro.setPrivateProfile("USERID", this.divLogin.form.edtUserID.value);
        		var sMyMenu = nexacro.getPrivateProfile("USERMENU"); //로그인 상태로
        		this.fvApp.gdsMyMenu.loadXML(sMyMenu);
        	} else {
        		nexacro.setPrivateProfile("USERID", "");
        	}
        };

        /**
        * @description 취소 버튼 클릭 이벤트
        */
        this.divLogin_btnCancel_onclick = function(obj,e)
        {
        	this.fvApp.avVFrameSet.set_separatesize("0,0,0,*,0");
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AdminLogin_onload,this);
            this.divLogin.form.chkIdSave.addEventHandler("onclick",this.divLogin_chkIdSave_onclick,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.btnCancel.addEventHandler("onclick",this.divLogin_btnCancel_onclick,this);
            this.divLogin.form.edtPassWord.addEventHandler("onkeydown",this.divLogin_edtPassWord_onkeydown,this);
            this.divLogin.form.edtPassWord.addEventHandler("onchanged",this.divLogin_edtPassWord_onchanged,this);
        };
        this.loadIncludeScript("Kopo1110fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
