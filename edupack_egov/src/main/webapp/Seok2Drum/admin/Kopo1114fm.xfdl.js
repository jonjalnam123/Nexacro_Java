(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AdminUserCheck");
            this.set_titletext("회원관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divAdminMember","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divAdminMemberInfo",null,"54","490","348","0",null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.getSetter("onchanged").set("Div00_01_00_Div00_onchanged");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Edit("edtUserID","130","4","360","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staID","10","4","120","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staPw","10","53","120","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("2");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtName","130","102","360","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("3");
            obj.set_border("1px solid pink");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staNa","10","102","120","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staPh","10","151","120","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new MaskEdit("mskPhone","130","151","360","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("6");
            obj.set_border("1px solid pink");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtAdr","130","200","250","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("7");
            obj.set_border("1px solid pink");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staAd","10","200","120","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("8");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtAdRd","130","249","360","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("9");
            obj.set_border("1px solid pink");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staAdr","10","249","120","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("10");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtEmail","130","298","360","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("11");
            obj.set_border("1px solid pink");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staEm","10","298","120","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("12");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Button("btnFindAdr","398","205","92","40",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("13");
            obj.set_text("주소 찾기");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("10pt/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new MaskEdit("mskPassWord","130","53","360","50",null,null,null,null,null,null,this.divAdminMember.form.divAdminMemberInfo.form);
            obj.set_taborder("14");
            obj.set_type("string");
            obj.set_border("1px solid pink");
            obj.set_format("{@@@}@@@@@@@{@@@}");
            this.divAdminMember.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Grid("grdUser","0","58",null,null,"divAdminMemberInfo:-6","14",null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("0");
            obj.set_binddataset("gdsMember");
            obj.set_autofittype("col");
            obj.set_border("1px solid pink");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,sort,!filter,export,import");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"75\"/><Column size=\"40\"/><Column size=\"190\"/><Column size=\"110\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"아이디\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"1\" text=\"비밀번호\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"2\" text=\"이름\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"3\" text=\"핸드폰\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"4\" text=\"우편번호\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"5\" text=\"주소\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"6\" text=\"이메일\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USERID\" font=\"13px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:PASSWORD\" font=\"13px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\" wordWrap=\"char\" displaytype=\"mask\" maskeditformat=\"{@@@}@@@@@@@{@@@}\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:NAME\" font=\"13px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:PHONE\" font=\"13px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"###-####-####\" edittype=\"readonly\" maskedittype=\"string\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:ADR\" font=\"13px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:ADRD\" font=\"13px/normal &quot;한컴 고딕&quot;\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:EMAIL\" font=\"13px/normal &quot;한컴 고딕&quot;\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Div("divCalFromTo",null,"20","345","30","478",null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("Comm::commCalFromTo.xfdl");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Static("staInfoLogo","0","20","110","30",null,null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("3");
            obj.set_text("회원관리");
            obj.set_font("20px/normal \"휴먼둥근헤드라인\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Static("staSearchLogo",null,"20","100","28","823",null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("4");
            obj.set_text("날짜");
            obj.set_font("20px/normal \"휴먼둥근헤드라인\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","94","30","31",null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("18px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"20","94","30","130",null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("18px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"20","94","30","229",null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("7");
            obj.set_text("입력");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("18px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"20","94","30","328",null,null,null,null,null,this.divAdminMember.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("18px/normal \"휴먼둥근헤드라인\"");
            this.divAdminMember.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","28","490","284","258",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAdminMember.form.divAdminMemberInfo.form
            obj = new Layout("default","",0,0,this.divAdminMember.form.divAdminMemberInfo.form,function(p){});
            this.divAdminMember.form.divAdminMemberInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAdminMember.form.divCalFromTo
            obj = new Layout("default","",0,0,this.divAdminMember.form.divCalFromTo.form,function(p){});
            this.divAdminMember.form.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAdminMember.form
            obj = new Layout("default","",0,0,this.divAdminMember.form,function(p){});
            this.divAdminMember.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divAdminMember.form.divAdminMemberInfo.form.edtUserID","value","gdsMember","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAdminMember.form.divAdminMemberInfo.form.edtName","value","gdsMember","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAdminMember.form.divAdminMemberInfo.form.mskPhone","value","gdsMember","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAdminMember.form.divAdminMemberInfo.form.edtAdr","value","gdsMember","ADR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAdminMember.form.divAdminMemberInfo.form.edtAdRd","value","gdsMember","ADRD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAdminMember.form.divAdminMemberInfo.form.edtEmail","value","gdsMember","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAdminMember.form.divCalFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divAdminMember.form.divCalFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divAdminMember.form.divAdminMemberInfo.form.mskPassWord","value","gdsMember","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::commCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("Kopo1114fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\admin
        *	@FileName Kopo1114fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/24
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/24		최정석		최초 생성
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
        this.AdminUserCheck_onload = function(obj,e)
        {
        	var objForm = this.divAdminMember.form.divCalFromTo.form;
        	var sDate ;

        	objForm.fnSetFromDate(this.ufnGetDate());
        	objForm.fnSetToDate(this.ufnGetLastDate());

        	this.fvApp.gdsMember.clearData();
        	//this.fvApp.gdsMember.addRow();
        	this.ufnFormOnLoad(this);

        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**
        * @description 조회 트랜잭션
        */
        this.divAdminMember_btnSel_onclick = function(obj,e)
        {
        	var objForm = this.divAdminMember.form.divCalFromTo.form;

        	var sFromDate = objForm.fnGetFromDate();
        	var sToDate = objForm.fnGetToDate();

        	this.ufnTransaction("seokMemberList"
        		, "nexa/seokMemberList.do"
        		, ""
        		, "gdsMember=gdsSeokMember"
        		, "sFromDate=" + sFromDate + " sToDate=" + sToDate
        		, "fnCallback")
        };

        /**
        * @description 저장
        */
        this.divAdminMember_btnSave_onclick = function(obj,e)
        {
        	this.ufnClearValidation(this.fvApp.gdsMember);
        	this.ufnSetValidation(this.fvApp.gdsMember, "USERID", "아이디", "required");
        	this.ufnSetValidation(this.fvApp.gdsMember, "PASSWORD", "비밀번호", "required");
        	this.ufnSetValidation(this.fvApp.gdsMember, "NAME", "이름", "required");
        	this.ufnSetValidation(this.fvApp.gdsMember, "PHONE", "핸드폰", "required,digits");
        	this.ufnSetValidation(this.fvApp.gdsMember, "ADR", "우편번호", "required,digits");
        	this.ufnSetValidation(this.fvApp.gdsMember, "ADRD", "상세주소", "required");
        	this.ufnSetValidation(this.fvApp.gdsMember, "EMAIL", "이메일", "required,isemail");
        	if (this.ufnValidation(this.fvApp.gdsMember, "A") == false) return;

        	this.ufnTransaction("saveMemberSave"
        		,"nexa/saveMember.do"
        		,"inMember=gdsMember:u" //저장
        		,""
        		,""
        		,"fnCallback");
        };

        /**
        * @description 삭제 할때 컨펌 알림 후 삭제
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.fvApp.gdsMember.deleteRow(this.fvApp.gdsMember.rowposition);
        			this.ufnTransaction("saveMemberDelete"
        				,"nexa/saveMember.do"
        				,"inMember=gdsMember:u" //저장
        				,""
        				,""
        				,"fnCallback");
        		}
        	}
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 콜백
        */
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	if(svcId == "saveMemberSave"){
        		this.ufnAlert("msg.save.success")
        	}else if( svcId == "saveMemberDelete"){
        		this.ufnAlert("msg.delete.success")
        	}
        };

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

        		this.divAdminMember.form.divAdminMemberInfo.form.edtAdr.set_value(arrAddr[3]);	// 신규 우편번호
        		this.divAdminMember.form.divAdminMemberInfo.form.edtAdRd.set_value(arrAddr[6]);	// 조합형 주소여부에 따른 주소
        	}
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description 입력 이벤트
        */
        this.divAdminMember_btnAdd_onclick = function(obj,e)
        {
        	this.fvApp.gdsMember.addRow();

        };

        /**
        * @description 삭제 이벤트
        */
        this.divAdminMember_btnDel_onclick = function(obj,e)
        {
        	var sMsgId = "msg.before.delete";
        	var arrArg = "";
        	var sPopId = "popMsgAbstractComplete";
        	var sCallback = "fnMsgCallback";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        };


        /**
        * @description 우편번호 찾기 팝업 호출
        */
        this.divAdminMember_divAdminMemberInfo_btnFindAdr_onclick = function(obj,e)
        {
        	this.ufnPostSearchDaum(this.webPost);
        };

        /**
        * @description 엔터키로 저장버튼 기능
        */
        this.divAdminMember_divAdminMemberInfo_edtEmail_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) {
        		obj.updateToDataset();
        		this.divAdminMember.form.divAdminMemberInfo.form.edtEmail.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AdminUserCheck_onload,this);
            this.divAdminMember.form.divAdminMemberInfo.form.mskPhone.addEventHandler("onchanged",this.divAdminMember_divAdminMemberInfo_mskPhone_onchanged,this);
            this.divAdminMember.form.divAdminMemberInfo.form.edtEmail.addEventHandler("onchanged",this.Div00_01_00_Div00_edtEmail_onchanged,this);
            this.divAdminMember.form.divAdminMemberInfo.form.edtEmail.addEventHandler("onkeydown",this.divAdminMember_divAdminMemberInfo_edtEmail_onkeydown,this);
            this.divAdminMember.form.divAdminMemberInfo.form.btnFindAdr.addEventHandler("onclick",this.divAdminMember_divAdminMemberInfo_btnFindAdr_onclick,this);
            this.divAdminMember.form.btnSave.addEventHandler("onclick",this.divAdminMember_btnSave_onclick,this);
            this.divAdminMember.form.btnDel.addEventHandler("onclick",this.divAdminMember_btnDel_onclick,this);
            this.divAdminMember.form.btnAdd.addEventHandler("onclick",this.divAdminMember_btnAdd_onclick,this);
            this.divAdminMember.form.btnSel.addEventHandler("onclick",this.divAdminMember_btnSel_onclick,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
        };
        this.loadIncludeScript("Kopo1114fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
