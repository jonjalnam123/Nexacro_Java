(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormMyPage");
            this.set_titletext("마이페이지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staCenter","0","0","50.00%","50.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divMyPage","staCenter:-240","staCenter:-230","480","461",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserID","120","0","360","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staID","0","0","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Edit("edtPassWord","120","49","250","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("2");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_password("true");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staPw","0","49","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Edit("edtName","120","147","360","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("4");
            obj.set_border("1px solid pink");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staNa","0","147","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staPh","0","196","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("6");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new MaskEdit("mskPhone","120","196","360","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("7");
            obj.set_border("1px solid pink");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Edit("edtAdr","120","245","250","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("8");
            obj.set_border("1px solid pink");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staAd","0","245","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Edit("edtAdRd","120","294","360","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("10");
            obj.set_border("1px solid pink");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staAdr","0","294","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("11");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Edit("edtEmail","120","343","360","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("12");
            obj.set_border("1px solid pink");
            obj.set_displaynulltext("ex) mark1234@naver.com");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staEm","0","343","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("13");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Button("btnFindAdr","388","250","92","40",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("14");
            obj.set_text("주소 찾기");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("12pt/normal \"휴먼매직체\"");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Button("btnOk","130","411","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("15");
            obj.set_text("수정");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Button("btnCancel","253","411","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Button("btnPassWordShow","388","54","92","40",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("17");
            obj.set_text("비밀번호 보기");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("12pt/normal \"휴먼매직체\"");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Edit("edtPassWordChange","120","98","250","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("18");
            obj.set_border("1px solid pink");
            obj.set_background("white");
            obj.set_password("true");
            this.divMyPage.addChild(obj.name, obj);

            obj = new Static("staPw00","0","98","120","50",null,null,null,null,null,null,this.divMyPage.form);
            obj.set_taborder("19");
            obj.set_text("비밀번호 \r\n변경");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divMyPage.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","10","200","284","258",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","100","20","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("마이페이지");
            obj.set_font("20px/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMyPage.form
            obj = new Layout("default","",0,0,this.divMyPage.form,function(p){});
            this.divMyPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMyPage.form.edtUserID","value","gdsMember","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMyPage.form.edtPassWord","value","gdsMember","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMyPage.form.edtName","value","gdsMember","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMyPage.form.mskPhone","value","gdsMember","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMyPage.form.edtAdr","value","gdsMember","ADR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMyPage.form.edtAdRd","value","gdsMember","ADRD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMyPage.form.edtEmail","value","gdsMember","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMyPage.form.edtPassWordChange","value","gdsMember","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Kopo1040fm.xfdl", function() {

        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\form
        *	@FileName Kopo1040fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/18
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/18		정윤성		최초 생성
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

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        /**
        * @description 온로드 이벤트
        */
        this.FormMyPage_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/



        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 컨펌 알림 주면서 수정 트랜잭션 및 밸리데이션 체크
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.ufnTransaction("saveMember"
        				,"nexa/saveMember.do"
        				,"inMember=gdsMember:u" //저장
        				,""
        				,""
        				,"fnCallback");
        		}
        	}
        };

        /**
        * @description 콜백
        */
        this.fnCallback = function(svcId, errCd, errMsg) {
        	if(svcId == "saveMember") {
        		this.ufnAlert("msg.update.success");
        	}
        }

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

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

        		this.divMyPage.form.edtAdr.set_value(arrAddr[3]);	// 신규 우편번호
        		this.divMyPage.form.edtAdRd.set_value(arrAddr[6]);	// 조합형 주소여부에 따른 주소
        	}
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description 우편번호 찾기 팝업 호출
        */
        this.divMyPage_btnFindAdr_onclick = function(obj,e)
        {
        	this.ufnPostSearchDaum(this.webPost); //다음 주소 찾기
        };

        /**
        * @description 취소 버튼 클릭시 메인 페이지로
        */
        this.divMyPage_btnCancel_onclick = function(obj,e)
        {
        	this.fvApp.avWorkFrame.set_formurl("form::Kopo1010fm.xfdl");
        };

        /**
        * @description 마이페이지 사용자 수정 이벤트 컨펌 알림
        */
        this.divMyPage_btnOk_onclick = function(obj,e)
        {

        	if(!this.ufnIsNull(this.divMyPage.form.edtPassWordChange.value)){ //비밀번호 값이 있으면

        		if(!this.ufnIsSpecialChar(this.divMyPage.form.edtPassWordChange.value)) { //특수기호 사용해서 유효성 검사
        			this.divMyPage.form.edtPassWordChange.setFocus();
        			this.ufnAlert("msg.join.pwchecktuksu");
        			return;
        		}
        	}

        	this.ufnClearValidation(this.fvApp.gdsMember);
        	this.ufnSetValidation(this.fvApp.gdsMember, "PASSWORD", "비밀번호", "required,length:13");
        	this.divMyPage.form.edtPassWordChange.setFocus();
        	this.ufnSetValidation(this.fvApp.gdsMember, "NAME", "이름", "required");
        	this.ufnSetValidation(this.fvApp.gdsMember, "PHONE", "핸드폰", "required");
        	this.ufnSetValidation(this.fvApp.gdsMember, "ADR", "우편번호", "required,digits");
        	this.ufnSetValidation(this.fvApp.gdsMember, "ADRD", "상세주소", "required");
        	this.ufnSetValidation(this.fvApp.gdsMember, "EMAIL", "이메일", "required,isemail");
        	if (this.ufnValidation(this.fvApp.gdsMember, "A") == false) return;

        	var sMsgId = "confirm.before.save";
        	var arrArg = "";
        	var sPopId = "popMsgAbstractComplete";
        	var sCallback = "fnMsgCallback";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        };

        this.divMyPage_btnPassWordShow_onclick = function(obj,e)
        {
        	this.divMyPage.form.edtPassWord.set_password(false);
        	this.divMyPage.form.edtPassWordChange.set_password(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormMyPage_onload,this);
            this.divMyPage.form.btnFindAdr.addEventHandler("onclick",this.divMyPage_btnFindAdr_onclick,this);
            this.divMyPage.form.btnOk.addEventHandler("onclick",this.divMyPage_btnOk_onclick,this);
            this.divMyPage.form.btnCancel.addEventHandler("onclick",this.divMyPage_btnCancel_onclick,this);
            this.divMyPage.form.btnPassWordShow.addEventHandler("onclick",this.divMyPage_btnPassWordShow_onclick,this);
            this.divMyPage.form.staPw00.addEventHandler("onclick",this.divMyPage_staPw00_onclick,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
            this.staLogo.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Kopo1040fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
