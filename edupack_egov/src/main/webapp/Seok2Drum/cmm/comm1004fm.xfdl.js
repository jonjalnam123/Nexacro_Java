(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormFindPw");
            this.set_titletext("비밀번호 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFindPw", this);
            obj._setContents("<ColumnInfo><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staCenter","0","0","50.00%","50.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divPwFind","staCenter:-200","staCenter:-100","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","80","225","120","50",null,null,null,null,null,null,this.divPwFind.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_background("pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divPwFind.addChild(obj.name, obj);

            obj = new Button("btnCancel","205","225","120","50",null,null,null,null,null,null,this.divPwFind.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_background("pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_color("white");
            this.divPwFind.addChild(obj.name, obj);

            obj = new Static("staPhone","39","89","80","50",null,null,null,null,null,null,this.divPwFind.form);
            obj.set_taborder("4");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("10pt \"휴먼매직체\"");
            this.divPwFind.addChild(obj.name, obj);

            obj = new Edit("edtUserID","118","40","240","50",null,null,null,null,null,null,this.divPwFind.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            this.divPwFind.addChild(obj.name, obj);

            obj = new Static("staID","39","40","80","50",null,null,null,null,null,null,this.divPwFind.form);
            obj.set_taborder("5");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("10pt \"휴먼매직체\"");
            this.divPwFind.addChild(obj.name, obj);

            obj = new MaskEdit("mskPhone","118","89","240","50",null,null,null,null,null,null,this.divPwFind.form);
            obj.set_border("1px solid pink");
            obj.set_textAlign("left");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_taborder("1");
            this.divPwFind.addChild(obj.name, obj);

            obj = new ImageViewer("imgLoginLogo","staCenter:-130","staCenter:-254","260","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_image("url(\'imagerc::drum.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPwFind.form
            obj = new Layout("default","",0,0,this.divPwFind.form,function(p){});
            this.divPwFind.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPwFind.form.mskPhone","value","dsMember","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comm1004fm.xfdl", function() {
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

        /*************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();

        /**************************************************************************
        * FORM EVENT 영역(onload)
        **************************************************************************/

        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */
        this.FormFindPw_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        	this.dsFindPw.clearData();
        };

        /************************************************************************************************
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
        * @description 찾기 버튼 클릭시 트랜잭션
        */
        this.divPwFind_btnOK_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.divPwFind.form.edtUserID.value)) { //아이디 값 없을때 알림

        		var sMsgId = "msg.join.idnull";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractCompleteidnull";
        		var sCallback = "fnMsgCallback";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        		return;

        	}else if(this.ufnIsNull(this.divPwFind.form.mskPhone.value)) { //핸드폰 값 없을때 알림

        		var sMsgId = "msg.join.phonenull";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractCompletephonenull";
        		var sCallback = "fnMsgCallback";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        		return;
        	}

        	var sId = this.divPwFind.form.edtUserID.value;
        	var sPh = this.divPwFind.form.mskPhone.value;

        	this.ufnTransaction("pwFind"
        		,"nexa/PwFind.do"
        		,""
        		,"dsFindPw=dsFindPw" //받아오는 부분
        		,"pID=" + nexacro.wrapQuote(sId) + " pPHONE=" + nexacro.wrapQuote(sPh) //파라미터로 보내는 부분
        		,"fnCallback");
        };

        /**
        * @description 비밀번호 입력후 엔터키로 확인버튼
        */
        this.divPwFind_mskPhone_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) {
        		obj.updateToDataset();
        		this.divPwFind.form.btnOK.click();
        	}
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 비밀번호 찾기 결과 콜백
        */
        this.fnCallback = function (svcId, errCd, errMsg)
        {
        	if(svcId == "pwFind" ) {
        		if (this.dsFindPw.rowcount > 0) {

        			var sMsgId = "msg.pwfind.result";
        			var arrArg =  [this.dsFindPw.getColumn(0,"PASSWORD")];
        			var sPopId = "popMsgAbstractComplete";
        			var sCallback = "fnMsgCallback";
        			this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        		}else{
        			this.ufnAlert("msg.pwfind.undefined")
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
        	}else if (strId == "popMsgAbstractCompleteidnull") {
        		if(strVal) {
        			this.divPwFind.form.edtUserID.setFocus();
        		}
        	}else if (strId == "popMsgAbstractCompletephonenull") {
        		if(strVal) {
        			this.divPwFind.form.mskPhone.setFocus();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormFindPw_onload,this);
            this.divPwFind.form.btnOK.addEventHandler("onclick",this.divPwFind_btnOK_onclick,this);
            this.divPwFind.form.btnCancel.addEventHandler("onclick",this.divLogin_btnJoin_onclick,this);
            this.divPwFind.form.mskPhone.addEventHandler("onchanged",this.divJoin_mskPhone_onchanged,this);
            this.divPwFind.form.mskPhone.addEventHandler("onkeydown",this.divPwFind_mskPhone_onkeydown,this);
        };
        this.loadIncludeScript("comm1004fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
