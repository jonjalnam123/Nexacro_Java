(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormCommnunityWrite");
            this.set_titletext("커뮤니티 글쓰기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILED_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"COMBOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"COMBOARD_NO\" type=\"INT\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"50\"/><Column id=\"COMBOARD_TITLE\" type=\"STRING\" size=\"100\"/><Column id=\"COMBOARD_CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"COMBOARD_HIT\" type=\"INT\" size=\"256\"/><Column id=\"COMBOARD_WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardKey", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_KEY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"COMBOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComRep", this);
            obj._setContents("<ColumnInfo><Column id=\"REP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"COMBOARD_NO\" type=\"INT\" size=\"256\"/><Column id=\"REP_CONTENT\" type=\"STRING\" size=\"1000\"/><Column id=\"REP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REP_DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"REP_PARENT\" type=\"STRING\" size=\"256\"/><Column id=\"REP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContactWrite","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","430","160",null,null,"0","140",null,null,null,null,this.divContactWrite.form);
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
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
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

            obj = new Grid("grdFileList","0",null,"420","59",null,"10",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_border("1px solid pink");
            obj.set_nodatatext("등록된 파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"131\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일이름\" font=\"bold 14px/normal &quot;휴먼매직체&quot;\" background=\"pink\" color=\"white\"/><Cell col=\"1\" text=\"삭제\" background=\"pink\" color=\"white\" font=\"bold 14px/normal &quot;휴먼매직체&quot;\"/><Cell col=\"2\" text=\"다운\" background=\"pink\" color=\"white\" font=\"bold 14px/normal &quot;휴먼매직체&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\"/><Cell col=\"1\" text=\"삭제\" edittype=\"button\" displaytype=\"buttoncontrol\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" text=\"다운\" edittype=\"button\"/></Band></Format></Formats>");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnFileClick",null,null,"90","38","0","97",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("10");
            obj.set_text("파일 선택");
            obj.set_borderRadius("0px");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new ImageViewer("imgRoom","0","160","420",null,null,"80",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_stretch("fit");
            obj.set_visible("true");
            obj.set_border("1px solid pink");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new MaskEdit("mskConBoardWriteDate","staDate:-1","51",null,"50","0",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("11");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_border("1px solid pink");
            obj.set_background("white");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Grid("grdComRep","430",null,null,"125","315","10",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsComRep");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 댓글이 없습니다.");
            obj.set_border("1px solid pink");
            obj.set_autosizingtype("none");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"180\"/><Column size=\"70\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" wordWrap=\"char\" font=\"14px/normal &quot;Verdana&quot;,&quot;Malgun Gothic&quot;\"/><Cell col=\"1\" text=\"expr:comp.parent.parent.parent.fnDepth(REP_DEPTH,REP_CONTENT)\" wordWrap=\"char\" font=\"14px/normal &quot;Verdana&quot;,&quot;Malgun Gothic&quot;\"/><Cell col=\"2\" text=\"bind:REP_DATE\" displaytype=\"date\" wordWrap=\"char\" font=\"14px/normal &quot;Verdana&quot;,&quot;Malgun Gothic&quot;\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"리플달기\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnWriteRep",null,null,"90","38","0","54",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("14");
            obj.set_text("댓글쓰기");
            obj.set_borderRadius("0px");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnDeleteRep",null,null,"90","38","0","11",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("15");
            obj.set_text("댓글삭제");
            obj.set_borderRadius("0px");
            obj.set_color("white");
            obj.set_font("bold 14pt/normal \"휴먼매직체\"");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new TextArea("txtComRep",null,null,"215","125","95","10",null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("16");
            obj.set_border("1px solid pink");
            obj.set_displaynulltext("달려 있는 댓글의 이름을 클릭하면 태그가되고 리플을 달 수 있습니다.");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnUpdate",null,"5","102","40","106",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("17");
            obj.set_text("수정");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"5","102","40","212",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"5","102","40","106",null,null,null,null,null,this.divContactWrite.form);
            obj.set_taborder("19");
            obj.set_text("글쓰기");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("bold 16pt/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divContactWrite.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContactWrite.form
            obj = new Layout("default","",0,0,this.divContactWrite.form,function(p){});
            this.divContactWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContactWrite.form.edtConNo","value","dsComBoard","COMBOARD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContactWrite.form.edtId","value","dsComBoard","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContactWrite.form.edtTitle","value","dsComBoard","COMBOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContactWrite.form.mskConBoardWriteDate","value","dsComBoard","COMBOARD_WRITEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContactWrite.form.mskConBoardWriteDate","accessibilityaction","dsComBoard","COMBOARD_WRITEDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Kopo1022fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\form
        *	@FileName Kopo1022fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/22
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/22		최정석		최초 생성
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
        this.fvDocWeb = "";
        this.fvDeleteFileName = "";

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        /**
        * @description 온로드 플래그 값으로 나눠서 보여주기
        */
        this.FormCommnunityWrite_onload = function(obj,e)
        {

        	this.ufnFormOnLoad(this);
        	trace("온로드 엑셈=====" + this.dsComRep.saveXML());

        	if(this.fvApp.avWorkFrame.objParam.Flag == "ComWrite") {

        		var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";
        		this.divContactWrite.form.webEditor.set_url(sUrl);

        		this.divContactWrite.form.btnDelete.set_visible(false);
        		this.divContactWrite.form.btnUpdate.set_visible(false);
        		this.divContactWrite.form.btnWriteRep.set_visible(false);
        		this.divContactWrite.form.btnDeleteRep.set_visible(false);

        		this.dsComBoard.addRow();
        		this.dsComBoard.setColumn(this.dsComBoard.rowposition, "COMBOARD_WRITEDATE", this.ufnGetDate());
        		this.dsComBoard.setColumn(this.dsComBoard.rowposition, "NAME", this.fvApp.gdsMember.getColumn(this.fvApp.gdsMember.rowposition,"NAME"));
        		this.dsComBoard.setColumn(this.dsComBoard.rowposition, "USERID", this.fvApp.gdsMember.getColumn(this.fvApp.gdsMember.rowposition,"USERID"))

        		trace(this.dsComBoard.saveXML());

        	}else if(this.fvApp.avWorkFrame.objParam.Flag == "ComModify") {
        		this.fnSelectComment();
        		if(this.fvApp.gdsMember.getColumn(0,"USERID") == this.fvApp.avWorkFrame.objParam.USERID) {
        			this.divContactWrite.form.btnOk.set_visible(false);

        			var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";
        			this.divContactWrite.form.webEditor.set_url(sUrl);

        		}else if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin"){
        			this.divContactWrite.form.btnOk.set_visible(false);

        			var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";
        			this.divContactWrite.form.webEditor.set_url(sUrl);

        		}else if(this.fvApp.gdsMember.getColumn(0,"USERID") != this.fvApp.avWorkFrame.objParam.USERID) {
        			var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2_readonly.html";
        			this.divContactWrite.form.webEditor.set_url(sUrl);

        			this.divContactWrite.form.edtTitle.set_readonly(true);
        			this.divContactWrite.form.edtTitle.set_background("white");
        			this.divContactWrite.form.btnFileClick.set_visible(false);
        			this.divContactWrite.form.btnDelete.set_visible(false);
        			this.divContactWrite.form.btnOk.set_visible(false);
        			this.divContactWrite.form.btnUpdate.set_visible(false);

        			this.divContactWrite.form.grdFileList.setFormatColProperty(1,"size",0); //그리드 컬럼 숨기기


        		}

        		this.dsSearch.clearData();
        		this.dsSearch.addRow();
        		this.dsSearch.setColumn(this.dsSearch.rowposition, "COMBOARD_NO", this.fvApp.avWorkFrame.objParam.COMBOARD_NO);

        		this.ufnTransaction("boardDetailView"
        			,"nexa/boardDetailView.do"
        			,"dsSearch=dsSearch"
        			,"dsComBoard=dsComBoard"
        			,"COMBOARD_NO=" + this.fvApp.avWorkFrame.objParam.COMBOARD_NO //조회수 증가 파라미터보내주기
        			,"fnCallback")
        	}
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**
        * @description 파일목록 조회
        */
        this.divContactWrite_btnFileList_onclick = function(obj,e)
        {
        	this.ufnTransaction("svcFileList"
        		,"nexa/getFileList.do"
        		,""
        		,"dsFile=dsFile"
        		,"userPath='nexa_edu'"
        		,"fnCallback")
        };

        /**
        * @description 셀에 버튼 만들어준 곳 삭제 또는 다운로드 기능
        */
        this.divContactWrite_grdFileList_oncellclick = function(obj,e)
        {
        	if(e.col == 1) {
        		if(this.fvApp.avWorkFrame.objParam.USERID == this.fvApp.gdsMember.getColumn(0,"USERID")){ //아이디 일치시 삭제
        			//삭제
        			var sFileName = this.dsFile.getColumn(e.row, "FILE_ID");
        			this.ufnTransaction("svcFileDelete"
        				,"nexa/deleteFile.do"
        				,""
        				,""
        				,"fileid=" + nexacro.wrapQuote(sFileName)
        				,"fnCallback")
        		}else if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin"){ //관리자 삭제버튼 활성
        			//삭제
        			var sFileName = this.dsFile.getColumn(e.row, "FILE_ID");
        			this.ufnTransaction("svcFileDelete"
        				,"nexa/deleteFile.do"
        				,""
        				,""
        				,"fileid=" + nexacro.wrapQuote(sFileName)
        				,"fnCallback")
        		}else{
        			return;
        		}
        	}
        	else if(e.col == 2) {
        		//다운
        		var sFileId = this.dsFile.getColumn(e.row, "FILE_ID");
        		var sUrl = "SvcUrl::nexa/downloadFile.do";
        		trace("파일아이디==========" + sFileId);
        		this.FileDownTransfer.setPostData("downFileId", sFileId); //"a.text,b.text,ctxt"
        		this.FileDownTransfer.set_downloadfilename(encodeURIComponent(encodeURIComponent(sFileId))); //NRE 에서만 작동하는데 다운로드 누르면 파일명 확장자까지 입력되어 있는 것
        		this.FileDownTransfer.download(sUrl);
        	}
        };

        /**
        * @description 삭제버튼 클릭시 컨펌
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
        * @description 글쓰기 버튼
        */
        this.divContactWrite_divBtnG_btnOk_onclick = function(obj,e)
        {

        	this.ufnClearValidation(this.dsComBoard);
        	this.ufnSetValidation(this.dsComBoard, "COMBOARD_TITLE", "제목", "required");
        	if (this.ufnValidation(this.dsComBoard, "A") == false) return;
        	this.ufnTransaction("GetBoardKey"
        		,"nexa/GetBoardKey.do"
        		,""
        		,"dsBoardKey=dsBoardKey"
        		,""
        		,"fnCallback");
        };

        /**
        * @description 댓글 입력
        */
        this.fnInsertComment = function ()
        {
        	this.ufnTransaction("comReply"
        		,"nexa/comReply.do"
        		,"dsComRep=dsComRep:u"
        		,""
        		,""
        		,"fnCallback");
        };

        /**
        * @description 댓글 조회
        */
        this.fnSelectComment = function () {
        	this.ufnTransaction("selectComReply"
        		,"nexa/selectComReply.do"
        		,""
        		,"dsComRep=dsComRep"
        		,"COMBOARD_NO=" + this.fvApp.avWorkFrame.objParam.COMBOARD_NO
        		,"fnCallback");
        }

        /**
        * @description 댓글 삭제시 작성자만 삭제할 수 있다.
        */
        this.divContactWrite_btnDeleteRep_onclick = function(obj,e)
        {

        	trace(this.divContactWrite.form.grdComRep.getCellValue(this.dsComRep.rowposition,3));

        	if(this.dsComRep.getColumn(this.dsComRep.rowposition,"USERID") == this.fvApp.gdsMember.getColumn(0,"USERID"))
        	{
        		//this.dsComRep.deleteRow(this.dsComRep.rowposition);
        		this.dsComRep.setColumn(this.dsComRep.rowposition,"REP_CONTENT","삭제된 댓글 입니다.");
        		this.dsComRep.setColumn(this.dsComRep.rowposition,"NAME","");

        		this.ufnTransaction("comDeleteReply"
        			,"nexa/comDeleteReply.do"
        			,"dsComRep=dsComRep:u"
        			,""
        			,""
        			,"fnCallback");

        	}else if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin")
        	{
        		//댓글삭제
        		this.dsComRep.deleteRow(this.dsComRep.rowposition);
        		this.ufnTransaction("comDeleteReply"
        			,"nexa/comDeleteReply.do"
        			,"dsComRep=dsComRep:u"
        			,""
        			,""
        			,"fnCallback");
        	}else
        	{
        		this.ufnAlert("msg.comrep.deletevali")
        	}
        };

        /**
        * @description 글 수정
        */
        this.divContactWrite_btnUpdate_onclick = function(obj,e)
        {
        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
        	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");
        	this.dsComBoard.setColumn(0, "COMBOARD_CONTENT", sEditorData);

        	this.dsFile.setColumn(0, "COMBOARD_NO",this.dsComBoard.getColumn(0,"COMBOARD_NO"));
        	this.ufnTransaction("ComBoardWriteUpdate"
        		,"nexa/ComBoardWrite.do"
        		,"dsComBoard=dsComBoard:u dsFile=dsFile:u" //저장
        		,""
        		,""
        		,"fnCallback");
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 파일 삭제 콜백
        */
        this.fnCallback = function (svcId, errCd, errMsg) {
        	if(svcId == "svcFileDelete") {
        		var nRow = this.dsFile.findRow("FILE_ID", this.fvDeleteFileName);
        		this.dsFile.deleteRow(nRow);
        	}else if(svcId == "boardDetailView") {
        		this.dsSearch.clearData();
        		this.dsSearch.addRow();
        		this.dsSearch.setColumn(this.dsSearch.rowposition, "COMBOARD_NO", this.fvApp.avWorkFrame.objParam.COMBOARD_NO);

        		this.ufnTransaction("boardDetailFileList"
        			,"nexa/boardDetailFileList.do"
        			,"dsSearch=dsSearch"
        			,"	dsFile=dsFile"
        			,"COMBOARD_NO=" + this.fvApp.avWorkFrame.objParam.COMBOARD_NO //조회수 증가 파라미터보내주기
        			,"fnCallback")

        	}else if(svcId == "boardDetailFileList") {
        		if(this.dsFile.rowcount > 0) {
        			this.divContactWrite.form.imgRoom.set_image(this.ufnGetServerUrl() + "upload_file/nexa_edu/" + this.dsFile.getColumn(0,"FILE_ID"))
        		}
        	} else if(svcId == "ComBoardWrite") {

        		var sMsgId = "msg.save.success";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractCompleteWrite";
        		var sCallback = "fnMsgCallbackw";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        	}else if(svcId== "GetBoardKey"){
        		this.dsComBoard.setColumn(this.dsComBoard.rowposition,"COMBOARD_NO", this.dsBoardKey.getColumn(0,"BOARD_KEY"));
        		for(var i=0;i<this.dsFile.rowcount; i++)
        		{
        			this.dsFile.setColumn(i,"COMBOARD_NO",this.dsBoardKey.getColumn(0,"BOARD_KEY"));
        		}
        		//글쓰기
        		this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
        		var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");
        		this.dsComBoard.setColumn(0, "COMBOARD_CONTENT", sEditorData);
        		this.ufnTransaction("ComBoardWrite"
        			,"nexa/ComBoardWrite.do"
        			,"dsComBoard=dsComBoard:u dsFile=dsFile:u" //저장
        			,""
        			,""
        			,"fnCallback");
        	}else if(svcId == "comReply") {
        		this.fnSelectComment();
        		this.divContactWrite.form.txtComRep.set_value("");
        	}else if(svcId == "selectComReply") {

        	}else if(svcId == "comDeleteReply") {

        		this.ufnAlert("msg.delete.success");

        	}else if(svcId == "ComBoardWriteUpdate") {

        		var sMsgId = "msg.update.success";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractCompleteUpdate";
        		var sCallback = "fnMsgCallbacku";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        	}else{
        		this.alert("등록 불가!");
        		this.go("form::Kopo1020fm.xfdl")

        	}
        }

        /**
        * @description 글쓰기/수정메시지 알림 콜백
        */
        this.fnMsgCallbacku = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractCompleteUpdate"){
        		if(strVal) {
        			this.go("form::Kopo1020fm.xfdl")
        		}
        	}
        };

        /**
        * @description 웹 에디터 콜백
        */
        this.fnEditorCallback = function(sType)
        {
        	if( (sType == "onload_win") || (sType == "onload_nexacro")  || (sType == "onload_title"))
        	{

        		if(this.fvApp.avWorkFrame.objParam.Flag == "ComModify")
        		{
        			var sContents = this.dsComBoard.getColumn(this.dsComBoard.rowposition,"COMBOARD_CONTENT");
        			this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        			this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        		}
        	}
        };

        /**
        * @description 삭제버튼 클릭시 트랜잭션
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.dsFile.deleteRow(this.dsFile.rowposition);
        			this.dsComBoard.deleteRow(this.dsComBoard.rowposition);
        			this.dsComRep.deleteRow(this.dsComRep.rowposition);
        			this.ufnTransaction("ComBoardWriteDelete"
        				,"nexa/ComBoardWriteDelete.do"
        				,"dsComBoard=dsComBoard:u dsFile=dsFile:u dsComRep=dsComRep:u" //저장
        				,""
        				,""
        				,"fnCallback");
        			this.ufnAlert("msg.delete.success");
        			this.go("form::Kopo1020fm.xfdl");
        		}


        	}
        };

        /*************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**
        * @description 글쓰기/수정메시지 알림 콜백
        */
        this.fnMsgCallbackw = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractCompleteWrite"){
        		if(strVal) {
        			this.go("form::Kopo1020fm.xfdl");
        		}
        	}
        };

        /**
        * @description 웹 에디터 사이즈 함수
        */
        this.fnResize = function(nWidth, nHeight)
        {
        	var sValue = nWidth+","+nHeight;

        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };

        /**
        * @description 첨부파일 닫을때 함수
        */
        this.FileDialog_onclose = function(obj,e)
        {
        	var objFileList = e.virtualfiles;

        	this.dsFile.set_enableevent(false);
        	for(var i=0; i<objFileList.length; i++)
        	{
        		var bExist = this.FileUpTransfer.existFile(objFileList[i]);
        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			this.FileUpTransfer.addFile(sFileName,objFileList[i]);

        			var nRow = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow, "FILE_ID", sFileName);
        			this.dsFile.setColumn(nRow, "FILE_NAME", sFileName);

        		}
        	}
        	this.dsFile.set_enableevent(true);

        	var sUrl = "SvcUrl::nexa/uploadFile.do";
        	this.FileUpTransfer.setPostData("userPath", "nexa_edu");
        	this.FileUpTransfer.upload(sUrl);
        };

        /**
        * @description 첨부파일 성공했을때
        */
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	for(var i=0; i<objDs.rowcount; i++)
        	{
        		var nRow = this.dsFile.findRow("FILE_NAME", objDs.getColumn(i, "FILE_NAME"));
        		this.dsFile.setColumn(nRow, "FILE_ID", objDs.getColumn(i, "FILE_ID"));
        		this.dsFile.setColumn(nRow, "FILE_NAME", objDs.getColumn(i, "FILE_NAME"));
        		this.dsFile.setColumn(nRow, "FILE_SIZE", objDs.getColumn(i, "FILE_SIZE"));
        		this.dsFile.setColumn(this.dsFile.rowposition, "FILE_ID", objDs.getColumn(i, "FILE_ID"));
        		var sUrl = this.ufnGetServerUrl() + "upload_file/nexa_edu/" +  objDs.getColumn(i, "FILE_ID");
        		this.divContactWrite.form.imgRoom.set_image(sUrl);
        	}
        };

        /**
        * @description 댓글함수
        */
        this.fnMaxOrder = function (parent)
        {
        	var rtn = 1;
        	if(!this.ufnIsNull(this.dsComRep.getCaseCount("REP_PARENT == '" + parent + "'"))) {
        		rtn = nexacro.toNumber(this.dsComRep.getCaseCount("REP_PARENT == '" + parent + "'")) + 1;
        	}
        	return rtn;
        };

        /**
        * @description 대댓글 기호 표시
        */
        this.fnDepth = function(argDepth,argComment)
        {
        	var rtnString = "";
        	if (nexacro.toNumber(argDepth) > 1) // argDepth
        	{
        		if(this.ufnIsNull(argComment))
        		{
        			return argComment;
        		} else {
        			return this.fnLpad(rtnString, argDepth," ") + "└ " + argComment ;
        		}
        	}else {
        		return argComment;
        	}
        };

        /**
        * @description 대댓글 기호 표시
        */
        this.fnLpad = function (str, padLen, padStr)
        {
        	if(padStr.length > padLen) {
        		return str;
        	}

        	str += "";
        	padStr += "";
        	while(str.length < padLen)
        	str = padStr + str;
        	str = str.length >= padLen ? str.substring(0, padLen) : str;
        	return str;
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description 온로드가 성공할때
        */
        this.divContactWrite_webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.divContactWrite.form.webEditor.getProperty("document").getProperty("all");
        };

        /**
        * @description 넥사크로 쪽으로 정보 전달
        */
        this.webEditor_onusernotify = function(obj,e)
        {
        	trace(e.userdata);

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
        * @description 그리드에 파일 드래그앤 드랍으로 넣는 기능
        */
        this.divContactWrite_grdFileList_ondrop = function(obj,e)
        {
        	var objFileList = e.filelist;

        	for(var i=0; i<objFileList.length; i++)
        	{
        		var bExist = this.FileUpTransfer.existFile(objFileList[i]);
        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			this.FileUpTransfer.addFile(sFileName,objFileList[i]);

        			var nRow = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow, "FILE_ID", sFileName);
        			this.dsFile.setColumn(nRow, "FILE_NAME", sFileName);

        		}
        	}
        };

        /**
        * @description 선택 다운로드
        */
        this.divContactWrite_btnClickDown_onclick = function(obj,e)
        {
        	var arrRow = this.dsFile.extractRows("gridcmmcheck == '1'"); //[1,3,5]
        	if(arrRow.length == 0) {
        		alert("선택하세요");
        	}
        	else if(arrRow.length ==1) {
        		//단건다운
        		var sFileId = this.dsFile.getColumn(e.row, "FILE_ID");

        		var sUrl = "SvcUrl::nexa/downloadFile.do";
        		this.FileDownTransfer.setPostData("downFileId", sFileId); //"a.text,b.text,ctxt"
        		this.FileDownTransfer.set_downloadfilename(sFileId); //NRE 에서만 작동하는데 다운로드 누르면 파일명 확장자까지 입력되어 있는 것
        		this.FileDownTransfer.download(sUrl);
        	}
        	else {
        		this.dsTemp.clearData(); //클리어데이터가 데이터만 지워주는 것
        		for(var i=0; i<arrRow.length; i++){
        			var nRow = this.dsTemp.addRow();
        			this.dsTemp.copyRow(nRow, this.dsFile, arrRow[i]);
        		}
        		var sUrl = "SvcUrl::nexa/downloadFile.do";
        		this.FileDownTransfer.setPostData("downFileId", ""); //"a.text,b.text,ctxt"
        		this.FileDownTransfer.setPostData("downFileDs",encodeURIComponent(encodeURIComponent(this.dsTemp.saveXML())));
        		this.FileDownTransfer.set_downloadfilename("첨부파일.zip"); //NRE 에서만 작동하는데 다운로드 누르면 파일명 확장자까지 입력되어 있는 것
        		this.FileDownTransfer.download(sUrl);
        	}
        };

        /**
        * @description 파일 선택 버튼 눌렀을때 바로 열리는 경로
        */
        this.divContactWrite_btnFileClick_onclick = function(obj,e)
        {
        	this.FileDialog.open("File Select", 1, "%MYDOCUMENT%");
        };

        /**
        * @description 뒤로가기 버튼 이벤트
        */
        this.divContactWrite_btnCancel_onclick = function(obj,e)
        {
        	this.go("form::Kopo1020fm.xfdl")
        };

        /**
        * @description 댓글쓰기 버튼 이벤트
        */
        this.btnWriteRep_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.divContactWrite.form.txtComRep.value)) {
        		this.divContactWrite.form.txtComRep.setFocus();
        		this.ufnAlert("msg.comu.replrequest")
        		return;
        	}else if(this.divContactWrite.form.txtComRep.value == "@" + this.divContactWrite.form.grdComRep.getCellValue(this.dsComRep.rowposition,0)+ " "){
        		this.ufnAlert("msg.com.replcheck")
        		return;
        	}else if (this.divContactWrite.form.txtComRep.value == "@") {
        		this.ufnAlert("msg.com.replcheck")
        		return;
        	}

        	var nRow = this.dsComRep.insertRow();
        	this.dsComRep.setColumn(nRow, "REP_NO","");
        	this.dsComRep.setColumn(nRow, "USERID", this.fvApp.gdsMember.getColumn(0,"USERID"));
        	this.dsComRep.setColumn(nRow,"NAME", this.fvApp.gdsMember.getColumn(0,"NAME"));
        	this.dsComRep.setColumn(nRow, "COMBOARD_NO",this.fvApp.avWorkFrame.objParam.COMBOARD_NO);
        	this.dsComRep.setColumn(nRow, "REP_CONTENT",this.divContactWrite.form.txtComRep.value);
        	this.dsComRep.setColumn(nRow, "REP_DEPTH",1);
        	this.dsComRep.setColumn(nRow, "REP_PARENT","");
        	this.dsComRep.setColumn(nRow, "REP_ORDER",this.fnMaxOrder(1));
        	this.fnInsertComment();

        };

        /**
        * @description 대댓글 쓰기 버튼
        */
        this.divContactWrite_grdComRep_oncellclick = function(obj,e)
        {
        	if(e.col== 3) {
        		if(this.ufnIsNull(this.divContactWrite.form.txtComRep.value)){
        			this.ufnAlert("msg.combaord.replynull")
        			return;
        		}else if(this.divContactWrite.form.txtComRep.value.indexOf("@") < 0){
        			this.ufnAlert("msg.com.replchecktorepl")
        			return;
        		}else{
        			var nRow = this.dsComRep.insertRow(e.row + 1);
        			var depth = this.dsComRep.getColumn(e.row, "REP_DEPTH");
        			var parent = this.dsComRep.getColumn(e.row, "REP_NO");
        			this.dsComRep.setColumn(nRow, "REP_NO","");
        			this.dsComRep.setColumn(nRow, "USERID", this.fvApp.gdsMember.getColumn(0,"USERID"));
        			this.dsComRep.setColumn(nRow,"NAME",this.fvApp.gdsMember.getColumn(0,"NAME"));
        			this.dsComRep.setColumn(nRow, "COMBOARD_NO",this.fvApp.avWorkFrame.objParam.COMBOARD_NO);
        			this.dsComRep.setColumn(nRow, "REP_CONTENT",this.divContactWrite.form.txtComRep.value);
        			this.dsComRep.setColumn(nRow, "REP_DEPTH", (nexacro.toNumber(this.dsComRep.getColumn(e.row, "REP_DEPTH"))+1));
        			this.dsComRep.setColumn(nRow, "REP_PARENT",this.dsComRep.getColumn(e.row,"REP_NO"));
        			this.dsComRep.setColumn(nRow, "REP_ORDER",this.fnMaxOrder(parent));
        			this.fnInsertComment();
        		}
        	}
        };



        /**
        * @description 댓글 @태그 처럼 보이게 만들기
        */
        this.divContactWrite_grdComRep_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) {
        		this.divContactWrite.form.txtComRep.set_value("@" + this.divContactWrite.form.grdComRep.getCellValue(this.dsComRep.rowposition,0) + " ");
        		this.divContactWrite.form.txtComRep.setFocus();
        	}else{
        		this.divContactWrite.form.txtComRep.set_value("");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormCommnunityWrite_onload,this);
            this.divContactWrite.form.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.divContactWrite.form.webEditor.addEventHandler("onloadcompleted",this.divContactWrite_webEditor_onloadcompleted,this);
            this.divContactWrite.form.btnCancel.addEventHandler("onclick",this.divContactWrite_btnCancel_onclick,this);
            this.divContactWrite.form.grdFileList.addEventHandler("ondrop",this.divContactWrite_grdFileList_ondrop,this);
            this.divContactWrite.form.grdFileList.addEventHandler("oncellclick",this.divContactWrite_grdFileList_oncellclick,this);
            this.divContactWrite.form.btnFileClick.addEventHandler("onclick",this.divContactWrite_btnFileClick_onclick,this);
            this.divContactWrite.form.imgRoom.addEventHandler("ondrop",this.divRoom_imgRoom_ondrop,this);
            this.divContactWrite.form.grdComRep.addEventHandler("oncellclick",this.divContactWrite_grdComRep_oncellclick,this);
            this.divContactWrite.form.grdComRep.addEventHandler("oncelldblclick",this.divContactWrite_grdComRep_oncelldblclick,this);
            this.divContactWrite.form.btnWriteRep.addEventHandler("onclick",this.btnWriteRep_onclick,this);
            this.divContactWrite.form.btnDeleteRep.addEventHandler("onclick",this.divContactWrite_btnDeleteRep_onclick,this);
            this.divContactWrite.form.btnUpdate.addEventHandler("onclick",this.divContactWrite_btnUpdate_onclick,this);
            this.divContactWrite.form.btnDelete.addEventHandler("onclick",this.divContactWrite_divBtnG_btnDelete_onclick,this);
            this.divContactWrite.form.btnOk.addEventHandler("onclick",this.divContactWrite_divBtnG_btnOk_onclick,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("Kopo1022fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
