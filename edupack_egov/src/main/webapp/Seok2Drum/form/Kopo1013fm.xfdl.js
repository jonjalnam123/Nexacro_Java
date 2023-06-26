(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormContactWrite");
            this.set_titletext("문의사항 글쓰기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsContactBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"CONBOARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"CONBOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONBOARD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CONBOARD_HIT\" type=\"STRING\" size=\"256\"/><Column id=\"CONBOARD_WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CONBOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReply", this);
            obj._setContents("<ColumnInfo><Column id=\"ADMREP_NO\" type=\"INT\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"CONBOARD_NO\" type=\"INT\" size=\"256\"/><Column id=\"ADMREP_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ADMREP_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContactWrite","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","0","170",null,null,"0","100",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Edit("edtTitle","100","100",null,"50","0",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("1");
            obj.set_border("1px solid pink");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Static("staTitle","0","100","100","50",null,null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Static("staId","350","51","100","50",null,null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Edit("edtConNo","100","51","250","50",null,null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("4");
            obj.set_border("1px solid pink");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Static("staID01","0","51","100","50",null,null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("5");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"5","102","40","0",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("6");
            obj.set_text("뒤로");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Static("staDate","720","51","100","50",null,null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("7");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Edit("edtId","450","51","270","50",null,null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("8");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new MaskEdit("mskConBoardWriteDate","staDate:-1","51",null,"50","0",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_border("1px solid pink");
            obj.set_background("white");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Div("divBtnG",null,"5","226","40","94",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","102","40","120",null,null,null,null,null,this.divContactWrite.form.divBtnG.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.form.divBtnG.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"0","102","40","13",null,null,null,null,null,this.divContactWrite.form.divBtnG.form);
            obj.set_taborder("0");
            obj.set_text("완료/수정");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.form.divBtnG.addChild(obj.name, obj);

            obj = new Grid("grdReply","0",null,null,"82","510","6",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsReply");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("등록된 댓글이 없습니다.");
            obj.set_border("1px solid pink");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"412\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ADMREP_CONTENT\" wordWrap=\"char\" font=\"14px/normal &quot;Verdana&quot;,&quot;Malgun Gothic&quot;\"/><Cell col=\"1\" text=\"bind:ADMREP_DATE\" displaytype=\"date\" edittype=\"none\" font=\"14px/normal &quot;Verdana&quot;,&quot;Malgun Gothic&quot;\"/></Band></Format></Formats>");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnReplyWrite",null,null,"97","36","100","52",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("12");
            obj.set_text("댓글쓰기");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new TextArea("txtReply",null,null,"300","82","204","6",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("13");
            obj.set_border("1px solid pink");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnReplyDelete",null,null,"97","36","0","52",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("14");
            obj.set_text("댓글삭제");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContactWrite.form.divBtnG.form
            obj = new Layout("default","",0,0,this.divContactWrite.form.divBtnG.form,function(p){});
            this.divContactWrite.form.divBtnG.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContactWrite.form
            obj = new Layout("default","",0,0,this.divContactWrite.form,function(p){});
            this.divContactWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContactWrite.form.edtConNo","value","dsContactBoard","CONBOARD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContactWrite.form.edtId","value","dsContactBoard","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContactWrite.form.edtTitle","value","dsContactBoard","CONBOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContactWrite.form.webEditor","accessibilityaction","dsContactBoard","CONBOARD_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContactWrite.form.mskConBoardWriteDate","value","dsContactBoard","CONBOARD_WRITEDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Kopo1013fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\form
        *	@FileName Kopo1013fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/19
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/19		최정석		최초 생성
        *
        *
        */

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/

        this.fvDocWeb = "";
        this.fvRtnHeight=260; //버튼사이즈
        this.fvApp = nexacro.getApplication();

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/

        /**
        * @description 화면 onload 시 리스트에서 Flag 아이디 준 값으로 페이지 분할
        */
        this.FormContactWrite_onload = function(obj,e)
        {

        	if(this.fvApp.avWorkFrame.objParam.Flag == "ConWrite") {

        		var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";
        		this.divContactWrite.form.webEditor.set_url(sUrl);

        		this.divContactWrite.form.divBtnG.form.btnDelete.set_visible(false);
        		this.divContactWrite.form.grdReply.set_visible(false);
        		this.divContactWrite.form.txtReply.set_visible(false);
        		this.divContactWrite.form.btnReplyWrite.set_visible(false);
        		this.divContactWrite.form.btnReplyDelete.set_visible(false);

        		this.dsContactBoard.addRow();

        		//this.dsContactBoard.setColumn(this.dsContactBoard.rowposition, "CONBOARD_WRITEDATE", this.fvApp.avWorkFrame.objParam.CONBOARD_WRITEDATE)

        		this.dsContactBoard.setColumn(this.dsContactBoard.rowposition, "CONBOARD_WRITEDATE", this.ufnGetDate())
        		this.dsContactBoard.setColumn(this.dsContactBoard.rowposition, "NAME", this.fvApp.gdsMember.getColumn(this.fvApp.gdsMember.rowposition,"NAME"));
        		this.dsContactBoard.setColumn(this.dsContactBoard.rowposition, "USERID", this.fvApp.gdsMember.getColumn(this.fvApp.gdsMember.rowposition,"USERID"));


        	}else if(this.fvApp.avWorkFrame.objParam.Flag == "ConModify") {
        		if(this.fvApp.gdsMember.getColumn(0,"USERID") == this.fvApp.avWorkFrame.objParam.USERID) {
        			this.divContactWrite.form.divBtnG.set_visible(true);
        			this.divContactWrite.form.txtReply.set_visible(false);
        			this.divContactWrite.form.btnReplyWrite.set_visible(false);
        			this.divContactWrite.form.btnReplyDelete.set_visible(false);

        			var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";
        			this.divContactWrite.form.webEditor.set_url(sUrl);

        		}else if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin"){

        			this.divContactWrite.form.divBtnG.set_visible(true);

        			var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";
        			this.divContactWrite.form.webEditor.set_url(sUrl);

        		}else if(this.fvApp.gdsMember.getColumn(0,"USERID") != this.fvApp.avWorkFrame.objParam.USERID) {

        			this.divContactWrite.form.edtTitle.set_readonly(true);
        			this.divContactWrite.form.edtTitle.set_background("white");

        			this.divContactWrite.form.divBtnG.set_visible(false);
        			this.divContactWrite.form.txtReply.set_visible(false);
        			this.divContactWrite.form.btnReplyWrite.set_visible(false);
        			this.divContactWrite.form.btnReplyDelete.set_visible(false);

        			var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2_readonly.html";
        			this.divContactWrite.form.webEditor.set_url(sUrl);
        		}

        		this.dsSearch.clearData();
        		this.dsSearch.addRow();
        		this.dsSearch.setColumn(this.dsSearch.rowposition, "CONBOARD_NO", this.fvApp.avWorkFrame.objParam.CONBOARD_NO);
        		this.ufnTransaction("conBoardDetailView"
        			,"nexa/conBoardDetailView.do"
        			,"dsSearch=dsSearch"
        			,"dsContactBoard=dsContactBoard"
        			,"paramHit=" + this.fvApp.avWorkFrame.objParam.CONBOARD_NO
        			,"fnCallBack")
        	}
        	this.ufnFormOnLoad(this);
        };

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/

        /**
        * @description 웹 에디터 콜백
        */
        this.fnEditorCallback = function(sType)
        {
        	if( (sType == "onload_win") || (sType == "onload_nexacro")  || (sType == "onload_title"))
        	{
        		if(this.fvApp.avWorkFrame.objParam.Flag == "ConModify")
        		{
        			var sContents = this.dsContactBoard.getColumn(this.dsContactBoard.rowposition,"CONBOARD_CONTENT");
        			this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        			this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        		}
        	}
        };

        /**
        * @description 글쓰기 콜백
        */
        this.fnCallbackWrite = function (svcId, errDd, errMsg)
        {
        	var sMsgId = "msg.save.success";
        	var arrArg = "";
        	var sPopId = "popMsgAbstractCompleteWrite";
        	var sCallback = "fnMsgCallbackw";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        };

        /**
        * @description 글쓰기/수정메시지 알림 콜백
        */
        this.fnMsgCallbackw = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractCompleteWrite"){
        		if(strVal) {
        			this.go("form::Kopo1012fm.xfdl");
        		}
        	}
        };

        /**
        * @description 화면 온로드 조회 후 조회수 증가 트랜잭션
        */
        this.fnCallBack = function(svcId, errDd, errMsg) {
        	if(svcId == "selectReply" ) {

        	}else if(svcId == "conBoardDetailView") { //온로드 되면서 조회 트랜잭션이 끝나고 한 이유 :
        		this.fnReplySearch();
        	}else if(svcId == "saveReply"){
        		this.reload();
        	}
        }

        /**
        * @description 삭제버튼 클릭 트랜잭션 콜백
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.dsReplyDelete();
        			this.dsContactBoard.deleteRow(this.dsContactBoard.rowposition);
        			this.ufnTransaction("ConBoardWrite"
        				,"nexa/ConBoardWrite.do"
        				,"dsContactBoard=dsContactBoard:u" //저장
        				,""
        				,""
        				,"fnCallBack");
        			this.ufnAlert("msg.delete.success")
        			this.go("form::Kopo1012fm.xfdl")
        		}
        	}
        };
        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /**
        * @description 삭제버튼 클릭 컨펌
        */
        this.divContactWrite_divBtnG_btnDelete_onclick = function(obj,e)
        {
        	var sMsgId = "msg.before.delete";
        	var arrArg = "";
        	var sPopId = "popMsgAbstractComplete";
        	var sCallback = "fnMsgCallback";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        };

        /**
        * @description 완료버튼 클릭 트랜잭션
        */
        this.divContactWrite_divBtnG_btnOk_onclick = function(obj,e)
        {
        	this.ufnClearValidation(this.dsContactBoard);
        	this.ufnSetValidation(this.dsContactBoard, "CONBOARD_TITLE", "제목", "required");
        	if (this.ufnValidation(this.dsContactBoard, "A") == false) return;

        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
         	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");

        	this.dsContactBoard.setColumn(0, "CONBOARD_CONTENT", sEditorData);

        	this.ufnTransaction("ConBoardWrite"
        		,"nexa/ConBoardWrite.do"
        		,"dsContactBoard=dsContactBoard:u" //저장
        		,""
        		,""
        		,"fnCallbackWrite");
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
        * @description 웹 에디터 사이즈
        */
        this.fnResize = function(nWidth, nHeight)
        {
        	var sValue = nWidth+","+nHeight;

        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };

        /**
        * @description 댓글조회 함수
        */
        this.fnReplySearch = function()
        {
        	var sNoticeSeq 	= this.fvApp.avWorkFrame.objParam.CONBOARD_NO;

        	var strSvcId   	= "selectReply";
        	var strSvcUrl   = "nexa/selectReply.do";
        	var inData      = "";
        	var outData     = "dsReply=dsReply";
        	var strArg      = "paramNoticeSeq=" + nexacro.wrapQuote(sNoticeSeq);
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.ufnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        		strSvcUrl , 	// trabsaction을 요청할 주소
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        		callBackFnc, 	// transaction의 결과를 받을 Function 이름
        		isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
        * @description 웹 에디터 함수
        */
        this.webEditor_onusernotify = function(obj,e)
        {
        	try
        	{
        		// parent의 최상의 Form에 이벤트 발생시킴
        		var oForm = this;
        		if (oForm && oForm.fnEditorCallback)
        		{
        			if( (e.userdata == "onload_win") || (e.userdata == "onload_nexacro")  || (e.userdata == "onload_title"))
        			{
        				var initHeight = this.divContactWrite.form.webEditor.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-this.fvRtnHeight);
        			}

        			oForm.fnEditorCallback(e.userdata);
        		}
        	}
        	catch(e){
        		trace("SampleNaverEditor.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };

        /**
        * @description 댓글 삭제 함수
        */
        this.dsReplyDelete = function() {

        	this.dsReply.deleteRow(this.dsReply.rowposition);
        	this.ufnTransaction("saveReplyDelete"
        		,"nexa/saveReply.do"
        		,"dsReply=dsReply:u" //저장
        		,""
        		,""
        		,"fnCallBack");

        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
        * @description 웹 에디터 온로드 성공시
        */
        this.divContactWrite_webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.divContactWrite.form.webEditor.getProperty("document").getProperty("all");
        };

        /**
        * @description 뒤로가기 버튼 클릭시
        */
        this.divContactWrite_btnCancel_onclick = function(obj,e)
        {
        	this.go("form::Kopo1012fm.xfdl");
        };

        /**
        * @description 댓글쓰기 버튼 클릭시
        */
        this.divContactWrite_btnReplyWrite_onclick = function(obj,e)
        {
        	var nRow = 0;
        	if (this.dsReply.rowcount == 0)
        	{
        		nRow=0;
        	}else{
        		if(this.dsReply.rowposition==0)
        		{
        			nRow=1;
        		}else{
        			nRow=this.dsReply.rowposition+1;
        		}
        	}
        	var nRow = this.dsReply.insertRow(nRow);
        	if(this.ufnIsNull(this.divContactWrite.form.txtReply.value)) {
        		this.ufnAlert("msg.com.repnone")
        		return false;
        	}

        	this.dsReply.setColumn(nRow,"CONBOARD_NO",this.fvApp.avWorkFrame.objParam.CONBOARD_NO);
        	this.dsReply.setColumn(nRow,"USERID",this.fvApp.gdsMember.getColumn(0,"USERID"));
        	this.dsReply.setColumn(nRow,"ADMREP_CONTENT",this.divContactWrite.form.txtReply.value);

        	var strSvcUrl = "nexa/saveReply.do";
        	var inData    = "dsReply=dsReply:U";
        	var outData   = "";
        	var strArg    = "";

        	this.ufnTransaction("saveReply", strSvcUrl, inData, outData, strArg, "fnCallBack", true);
        	this.ufnAlert("msg.com.repwrite");
        };

        /**
        * @description 삭제버튼 클릭시
        */
        this.divContactWrite_btnReplyDelete_onclick = function(obj,e)
        {
        	this.dsReplyDelete();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormContactWrite_onload,this);
            this.divContactWrite.form.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.divContactWrite.form.webEditor.addEventHandler("onsize",this.webEditor_onsize,this);
            this.divContactWrite.form.webEditor.addEventHandler("onloadcompleted",this.divContactWrite_webEditor_onloadcompleted,this);
            this.divContactWrite.form.btnCancel.addEventHandler("onclick",this.divContactWrite_btnCancel_onclick,this);
            this.divContactWrite.form.divBtnG.form.btnDelete.addEventHandler("onclick",this.divContactWrite_divBtnG_btnDelete_onclick,this);
            this.divContactWrite.form.divBtnG.form.btnOk.addEventHandler("onclick",this.divContactWrite_divBtnG_btnOk_onclick,this);
            this.divContactWrite.form.btnReplyWrite.addEventHandler("onclick",this.divContactWrite_btnReplyWrite_onclick,this);
            this.divContactWrite.form.btnReplyDelete.addEventHandler("onclick",this.divContactWrite_btnReplyDelete_onclick,this);
        };
        this.loadIncludeScript("Kopo1013fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
