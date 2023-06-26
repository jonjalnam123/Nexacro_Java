(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormFindId");
            this.set_titletext("아이디 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFindId", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMember", this);
            obj._setContents("<ColumnInfo><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staCenter","0","0","50.00%","50.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divIdFind","staCenter:-200","staCenter:-100","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","80","225","120","50",null,null,null,null,null,null,this.divIdFind.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_background("pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divIdFind.addChild(obj.name, obj);

            obj = new Button("btnCancel","205","225","120","50",null,null,null,null,null,null,this.divIdFind.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_background("pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divIdFind.addChild(obj.name, obj);

            obj = new Static("staEmail","39","89","80","50",null,null,null,null,null,null,this.divIdFind.form);
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("10pt \"휴먼매직체\"");
            this.divIdFind.addChild(obj.name, obj);

            obj = new Edit("edtEmail","118","89","240","50",null,null,null,null,null,null,this.divIdFind.form);
            obj.set_taborder("1");
            obj.set_border("1px solid pink");
            obj.set_displaynulltext("ex) mark1234@naver.com");
            this.divIdFind.addChild(obj.name, obj);

            obj = new Edit("edtName","118","40","240","50",null,null,null,null,null,null,this.divIdFind.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            this.divIdFind.addChild(obj.name, obj);

            obj = new Static("staName","39","40","80","50",null,null,null,null,null,null,this.divIdFind.form);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("10pt \"휴먼매직체\"");
            this.divIdFind.addChild(obj.name, obj);

            obj = new ImageViewer("imgMainLogo","staCenter:-130","staCenter:-254","260","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_image("url(\'imagerc::drum.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divIdFind.form
            obj = new Layout("default","",0,0,this.divIdFind.form,function(p){});
            this.divIdFind.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divIdFind.form.edtEmail","value","dsMember","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comm1003fm.xfdl", function() {
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

        /**************************************************************************
        * FORM EVENT 영역(onload)
        **************************************************************************/

        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */
        this.FormFindId_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        	this.dsFindId.clearData();
        };

        /***********************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
        * @description 로그인페이지로 가기
        */
        this.divLogin_btnJoin_onclick = function(obj,e)
        {
        	this.go("cmm::comm1001fm.xfdl");
        };

        /**
        * @description 아이디 찾기 버튼 클릭시 이벤트
        */
        this.divIdFind_btnOk_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.divIdFind.form.edtName.value)) { //아이디 미입력시 알림

        		var sMsgId = "msg.join.namenull";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractCompleteIdCheck";
        		var sCallback = "fnMsgCallback";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        		return;

        	}else if(this.ufnIsNull(this.divIdFind.form.edtEmail.value)) {// 이메일 미입력시 알림

        		var sMsgId = "msg.join.emailnull";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractCompleteEmailCheck";
        		var sCallback = "fnMsgCallback";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        		return;
        	}


        	this.ufnClearValidation(this.dsMember);
        	this.ufnSetValidation(this.dsMember,"EMAIL", "이메일", "required,isemail");
        	if (this.ufnValidation(this.dsMember, "A") == false) return;

        	var sName 	= this.divIdFind.form.edtName.value;
        	var sEmail 	= this.divIdFind.form.edtEmail.value;

        	this.ufnTransaction("IdFind"
        		,"nexa/IdFind.do"
        		,""
        		,"dsFindId=dsFindId" //받아오는 부분
        		,"pNAME=" + nexacro.wrapQuote(sName) + " pEMAIL=" + nexacro.wrapQuote(sEmail) //파라미터로 보내는 부분
        		,"fnCallback");
        };

        /**
        * @description 비밀번호 입력후 엔터키로 확인버튼
        */
        this.divIdFind_edtEmail_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) {
        		obj.updateToDataset();
        		this.divIdFind.form.btnOk.click();
        	}
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 아이디 찾기 결과 및 결과 없을시 리턴
        */
        this.fnCallback = function (svcId, errCd, errMsg)
        {
        	if(svcId == "IdFind") {
        		if (this.dsFindId.rowcount > 0) { //아이디 값 있으면 알림으로 보여주기

        			var sMsgId = "msg.idfind.result";
        			var arrArg =  [this.dsFindId.getColumn(0,"USERID")];
        			var sPopId = "popMsgAbstractComplete";
        			var sCallback = "fnMsgCallback";

        			this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        		}else{

        			var sMsgId = "msg.idfind.undefined"; //아이디 값 없으면 알림으로 보여주기
        			var arrArg = "";
        			var sPopId = "popMsgAbstractCompleteidpwfalse";
        			var sCallback = "fnMsgCallback";

        			this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        			return;

        		}
        	}
        };

        /**
        * @description 메시지 알림 콜백
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.go("cmm::comm1001fm.xfdl")
        		}
        	}else if(strId == "popMsgAbstractCompleteIdCheck") {
        		if(strVal) {
        			this.divIdFind.form.edtName.setFocus();
        		}
        	}else if(strId == "popMsgAbstractCompleteEmailCheck") {
        		if(strVal) {
        			this.divIdFind.form.edtEmail.setFocus();

        		}else if(strId == "popMsgAbstractCompleteidpwfalse") {
        			if(strVal) {

        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormFindId_onload,this);
            this.divIdFind.form.btnOk.addEventHandler("onclick",this.divIdFind_btnOk_onclick,this);
            this.divIdFind.form.btnCancel.addEventHandler("onclick",this.divLogin_btnJoin_onclick,this);
            this.divIdFind.form.edtEmail.addEventHandler("onchanged",this.divIdFind_edtEmail_onchanged,this);
            this.divIdFind.form.edtEmail.addEventHandler("onkeydown",this.divIdFind_edtEmail_onkeydown,this);
        };
        this.loadIncludeScript("comm1003fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
