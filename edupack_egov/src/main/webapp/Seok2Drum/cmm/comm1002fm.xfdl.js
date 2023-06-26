(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormJoin");
            this.set_titletext("회원가입");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMember", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORDDOUBL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ADRD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"IDCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"ADRCHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staCenter","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divJoin","staCenter:-240","staCenter:-160","480","460",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserID","120","0","253","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staID","0","0","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("12");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staPassWord","0","49","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("13");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new Edit("edtName","120","147","360","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("3");
            obj.set_border("1px solid pink");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staName","0","147","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("14");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staPhone","0","196","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("15");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new MaskEdit("mskPhone","120","196","360","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_border("1px solid pink");
            obj.set_textAlign("left");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_taborder("4");
            this.divJoin.addChild(obj.name, obj);

            obj = new Edit("edtAdr","120","245","253","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("5");
            obj.set_border("1px solid pink");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staAdr","0","245","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("16");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new Edit("edtAdRd","120","294","360","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("6");
            obj.set_border("1px solid pink");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staAdrd","0","294","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("17");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new Edit("edtEmail","120","343","360","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("7");
            obj.set_border("1px solid pink");
            obj.set_displaynulltext("ex) mark1234@naver.com");
            obj.set_text("ex)mark1234@naver.com");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staEmail","0","343","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("18");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new Button("btnIdCheck","383","5","92","40",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("10");
            obj.set_text("아이디 중복");
            obj.set_color("white");
            obj.set_background("pink");
            obj.set_font("12pt/normal \"휴먼매직체\"");
            this.divJoin.addChild(obj.name, obj);

            obj = new Button("btnFindAdr","383","250","92","40",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("11");
            obj.set_text("주소 찾기");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("12pt/normal \"휴먼매직체\"");
            this.divJoin.addChild(obj.name, obj);

            obj = new Button("btnOk","130","410","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("8");
            obj.set_text("확인");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            this.divJoin.addChild(obj.name, obj);

            obj = new Button("btnCancel","253","410","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            this.divJoin.addChild(obj.name, obj);

            obj = new Edit("edtPassWord","120","49","253","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("1");
            obj.set_border("1px solid pink");
            obj.set_password("true");
            obj.set_displaynulltext("특수문자 포함 13자리까지 입력 해 주세요.");
            this.divJoin.addChild(obj.name, obj);

            obj = new Edit("edtPasswordDoubleCheck","120","98","253","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("2");
            obj.set_border("1px solid pink");
            obj.set_displaynulltext("위 와 동일하게 입력 해 주세요.");
            obj.set_password("true");
            this.divJoin.addChild(obj.name, obj);

            obj = new Static("staName00","0","98","120","50",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("19");
            obj.set_text("비밀번호 \r\n확인");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divJoin.addChild(obj.name, obj);

            obj = new Button("btnPassWordShow","383","54","92","40",null,null,null,null,null,null,this.divJoin.form);
            obj.set_taborder("20");
            obj.set_text("비밀번호 보기");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("12pt/normal \"휴먼매직체\"");
            this.divJoin.addChild(obj.name, obj);

            obj = new ImageViewer("imgMainLogo","staCenter:-131","staCenter:-320","263","149",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_image("url(\'imagerc::drum.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #ffffff");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","30","356","284","258",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divJoin.form
            obj = new Layout("default","",0,0,this.divJoin.form,function(p){});
            this.divJoin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divJoin.form.edtUserID","value","dsMember","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divJoin.form.edtName","value","dsMember","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divJoin.form.mskPhone","value","dsMember","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divJoin.form.edtAdr","value","dsMember","ADR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divJoin.form.edtAdRd","value","dsMember","ADRD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divJoin.form.edtEmail","value","dsMember","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divJoin.form.edtPassWord","value","dsMember","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divJoin.form.btnCancel","text","dsCancel","Cancel_Name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divJoin.form.edtPasswordDoubleCheck","value","dsMember","PASSWORDDOUBL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comm1002fm.xfdl", function() {
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
        this.fnMemberCnt = "";

        /**************************************************************************
        * FORM EVENT 영역(onload)
        **************************************************************************/

        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */
        this.FormJoin_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        	this.dsMember.clearData();
        	this.dsMember.addRow();
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description 패스워드 형식의 비밀번호 보기 버튼
        */
        this.divJoin_btnPassWordShow_onclick = function(obj,e)
        {
        	this.divJoin.form.edtPassWord.set_password(false);
        	this.divJoin.form.edtPasswordDoubleCheck.set_password(false);
        };

        /**
        * @description 취소버튼 클릭시 기능
        */
        this.divJoin_btnCancel_onclick = function(obj,e)
        {
        	this.go("cmm::comm1001fm.xfdl");
        };

        /**
        * @description 우편번호 찾기 팝업 호출
        */
        this.divJoin_btnFindAdr_onclick = function(obj,e)
        {
        	this.ufnPostSearchDaum(this.webPost);
        };

        /**
        * @description 우편번호 선택 시 호출
        */
        this.webPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	// e.userdata==>OK!!!:::서울특별시 송파구 백제고분로36가길 9, 101 (석촌동, 스카이타워):::서울특별시 송파구 백제고분로36가길 9:::(석촌동, 스카이타워):::9, Baekjegobun-ro 36ga-gil, Songpa-gu, Seoul:::서울특별시 송파구 석촌동 58-33 스카이타워:::05614:::101
        	if (strPost.indexOf("OK!!!:::") == 0)
        	{
        		/*
        		//e.userdata ==>(식별자 ::: 구우편번호 앞 3자리 ::: 구우편번호 뒷 3자리 :::  신규우편번호 ::: 도로명주소 ::: 지번 주소 ::: 조합형 주소여부에 따른 주소)
        		*/
        		var arrAddr = strPost.split(":::");

        		this.divJoin.form.edtAdr.set_value(arrAddr[3]);	// 신규 우편번호
        		this.divJoin.form.edtAdRd.set_value(arrAddr[6]);	// 조합형 주소여부에 따른 주소
        	}
        };

        /**
        * @description 아이디중복 버튼 기능
        */
        this.divJoin_btnIdCheck_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.divJoin.form.edtUserID.value)) {

        		var sMsgId = "msg.join.idcheckbrforenull";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractCompleteIdCheck";
        		var sCallback = "fnMsgCallback";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);


        	}else {
        		var sId = this.divJoin.form.edtUserID.value;
        		this.ufnTransaction("trCheck"
        			,"checkMemberID.do"
        			,""
        			,""
        			,"paramID=" + nexacro.wrapQuote(sId) //에디트에 입력된 값 파라미터로
        			,"fnCallback");
        	}
        };

        /**
        * @description 확인버튼 기능
        */
        this.divJoin_btnOk_onclick = function(obj,e)
        {

        	if(this.ufnIsNull(this.dsMember.getColumn(this.dsMember.rowposition,"IDCHECK")))
        	{
        		this.ufnAlert("msg.join.idchecknull");
        		return false;
        	}

        	var sId = this.divJoin.form.edtUserID.value;
        	this.ufnTransaction("trCheckjoin"
        		,"checkMemberID.do"
        		,""
        		,""
        		,"paramID=" + nexacro.wrapQuote(sId) //에디트에 입력된 값 파라미터로
        		,"fnCallback");


        	if(!this.ufnIsNull(this.divJoin.form.edtPassWord.value)){ //비밀번호 값이 있으면

        		if(!this.ufnIsSpecialChar(this.divJoin.form.edtPassWord.value)) { //특수기호 사용해서 유효성 검사
        			this.ufnAlert("msg.join.pwchecktuksu");
        			this.divJoin.form.edtPassWord.setFocus();
        			return;
        		}
        	}

        	this.ufnClearValidation(this.dsMember);
        	this.ufnSetValidation(this.dsMember, "USERID", "아이디", "required");
        	this.ufnSetValidation(this.dsMember, "PASSWORD", "비밀번호", "required,length:13");
        	this.ufnSetValidation(this.dsMember, "PASSWORDDOUBL", "비밀번호 확인", "required,equalto:PASSWORD");
        	this.ufnSetValidation(this.dsMember, "NAME", "이름", "required");
        	this.ufnSetValidation(this.dsMember, "PHONE", "핸드폰", "required,digits");
        	this.ufnSetValidation(this.dsMember, "ADR", "우편번호", "required,digits");
        	this.ufnSetValidation(this.dsMember, "ADRD", "상세주소", "required");
        	this.ufnSetValidation(this.dsMember, "EMAIL", "이메일", "required,isemail");
        	if (this.ufnValidation(this.dsMember, "A") == false) return;

        	if(this.fnMemberCnt > 0) {

        		this.ufnAlert("msg.join.idchekagain")
        		return;

        	}else if (this.dsMember.getColumn(0,"IDCHECK") == "Y") {
        		this.ufnTransaction("trJoin"
        			,"nexa/saveMember.do"
        			,"inMember=dsMember:u" //저장
        			,""
        			,""
        			,"fnCallback")
        	}
        };

        /**
        * @description 엔터키로 확인버튼 기능
        */
        this.divJoin_edtEmail_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) {
        		obj.updateToDataset();
        		this.divJoin.form.btnOk.click();
        	}
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup$end$)
        **************************************************************************/

        /**
        * @description 입력되지 않은 부분들 알림으로 알려주기 콜백
        */
        this.fnCallback = function(svcId, errCd, errMsg) {
        	if(svcId == "trCheck") {
        		if(this.fnMemberCnt > 0) {
        			this.dsMember.setColumn(this.dsMember.rowposition, "IDCHECK", "N");
        			this.ufnAlert("msg.join.idcheckcancel"); //서버에서 받아온거
        			this.divJoin.form.edtUserID.setFocus(); //아디입력 컴포로 포커스
        			return;
        		}
        		else{
        			this.ufnAlert("msg.join.idcheckok");
        			this.dsMember.setColumn(this.dsMember.rowposition, "IDCHECK", "Y");
        			this.divJoin.form.edtPassWord.setFocus(); //비번입력 컴포로 포커스
        		}
        	}else if(svcId == "trJoin"){
        		var sMsgId = "msg.join.ok";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractComplete";
        		var sCallback = "fnMsgCallback";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        	}
        };

        /**
        * @description 메시지 알림 콜백
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.go("cmm::comm1001fm.xfdl");
        		}
        	}
        };

        /**
        * @description 아이디 중복 버튼 메세지 알림 콜백
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractCompleteIdCheck"){
        		if(strVal) {
        			this.divJoin.form.edtUserID.setFocus(true);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormJoin_onload,this);
            this.divJoin.form.mskPhone.addEventHandler("onchanged",this.divJoin_mskPhone_onchanged,this);
            this.divJoin.form.edtEmail.addEventHandler("onkeydown",this.divJoin_edtEmail_onkeydown,this);
            this.divJoin.form.btnIdCheck.addEventHandler("onclick",this.divJoin_btnIdCheck_onclick,this);
            this.divJoin.form.btnFindAdr.addEventHandler("onclick",this.divJoin_btnFindAdr_onclick,this);
            this.divJoin.form.btnOk.addEventHandler("onclick",this.divJoin_btnOk_onclick,this);
            this.divJoin.form.btnCancel.addEventHandler("onclick",this.divJoin_btnCancel_onclick,this);
            this.divJoin.form.btnPassWordShow.addEventHandler("onclick",this.divJoin_btnPassWordShow_onclick,this);
            this.divJoin.form.btnPassWordShow.addEventHandler("onkillfocus",this.divJoin_btnPassWordShow_onkillfocus,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
        };
        this.loadIncludeScript("comm1002fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
