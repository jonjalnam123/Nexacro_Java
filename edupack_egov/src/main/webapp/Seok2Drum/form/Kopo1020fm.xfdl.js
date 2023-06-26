(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormCommunity");
            this.set_titletext("커뮤니티 리스트");
            this.getSetter("griduserproperty").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"COMBOARD_NO\" type=\"INT\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"50\"/><Column id=\"COMBOARD_TITLE\" type=\"STRING\" size=\"100\"/><Column id=\"COMBOARD_CONTENT\" type=\"STRING\" size=\"4000\"/><Column id=\"COMBOARD_HIT\" type=\"INT\" size=\"256\"/><Column id=\"COMBOARD_WRITEDATE\" type=\"DATETIME\" size=\"256\"/><Column id=\"REP_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/><Column id=\"COMBOARD_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILED_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"COMBOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divComuList","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdContactList","0","70",null,null,"0","70",null,null,null,null,this.divComuList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsComBoard");
            obj.set_autofittype("col");
            obj.set_border("1px solid pink");
            obj.set_borderRadius("20px");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,sort,!filter,!export,!import");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"700\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"번호\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"1\" text=\"작성자\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"2\" text=\"제목\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"3\" text=\"조회수\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"4\" text=\"작성일\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:COMBOARD_NO\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"1\" text=\"bind:NAME\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"2\" text=\"expr:REP_CNT == 0 ? COMBOARD_TITLE : COMBOARD_TITLE + &quot; [댓글 :&quot; + REP_CNT + &quot;] 개&quot;\" textAlign=\"left\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"3\" text=\"bind:COMBOARD_HIT\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"4\" text=\"bind:COMBOARD_WRITEDATE\" displaytype=\"date\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/></Band></Format></Formats>");
            this.divComuList.addChild(obj.name, obj);

            obj = new Static("staInfor","0","20","110","30",null,null,null,null,null,null,this.divComuList.form);
            obj.set_taborder("1");
            obj.set_text("자유게시판");
            obj.set_font("20px/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divComuList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdContactList:18",null,"50","0",null,null,null,null,null,this.divComuList.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("CompGuide::CmmPaging.xfdl");
            this.divComuList.addChild(obj.name, obj);

            obj = new Button("btnWrite",null,"20","80","30","0",null,null,null,null,null,this.divComuList.form);
            obj.set_taborder("3");
            obj.set_text("글쓰기");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divComuList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","80","30","85",null,null,null,null,null,this.divComuList.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divComuList.addChild(obj.name, obj);

            obj = new Edit("edtSearch",null,"20","200","30","165",null,null,null,null,null,this.divComuList.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("제목으로 검색");
            obj.set_text("제목으로 검색");
            this.divComuList.addChild(obj.name, obj);

            obj = new Combo("cboCnt",null,"20","110","30","369",null,null,null,null,null,this.divComuList.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divComuList_form_cboCnt_innerdataset = new nexacro.NormalDataset("divComuList_form_cboCnt_innerdataset", obj);
            divComuList_form_cboCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divComuList_form_cboCnt_innerdataset);
            obj.set_text("2");
            obj.set_value("2");
            obj.set_index("0");
            this.divComuList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divComuList.form.divPaging
            obj = new Layout("default","",0,0,this.divComuList.form.divPaging.form,function(p){});
            this.divComuList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComuList.form
            obj = new Layout("default","",0,0,this.divComuList.form,function(p){});
            this.divComuList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divComuList.form.edtSearch","value","dsSearch","COMBOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divComuList.form.divAdminButton.form.edtSearch","value","dsSearch","CONBOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CompGuide::CmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("Kopo1020fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\form
        *	@FileName Kopo1020fm.xfdl
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
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        this.fvApp = nexacro.getApplication();
        this.fvRecords=0; 			//목록갯수
        this.fvPage=0;	 			//페이지번호
        this.fvRecordsOffset=0;		//시작rownum
        this.fvTotalCount=0;		//전체데이터갯수
        this.fvPageCount=0; 		//실제표출페이지갯수

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        /**
        * @description 온로드
        */
        this.FormCommunity_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        	this.fnPageInit();
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/
        /**
        * @description 조회이벤트
        */
        this.fnSearch = function(obj,e)
        {
        	// 조회조건 설정
        	//데이터를 넘길 경우 데이터셋에 추가해서 넘기는 방식과
        	//아규먼트를 추가해서 넘기는 방식 모두 사용가능

        	this.dsSearch.setColumn(0, "records", this.fvRecords);
        	this.dsSearch.setColumn(0, "recordsOffset", this.fvRecordsOffset);

         	var strSvcId    = "contactComBoardList";
        	var strSvcUrl   = "nexa/contactComBoardList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsComBoard=dsComBoard dsPagingInfo=dsPagingInfo";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.ufnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        		strSvcUrl , 	// trabsaction을 요청할 주소
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        		callBackFnc, 	// transaction의 결과를 받을 Function 이름
        		isAsync); 		// 비동기통신 여부 [생략가능]

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description TRANSACTION콜백 트랜젝션 후, 반드시페이지 메이킹 함수 호출
        */
        this.fnCallBack = function(svcID,errorCode,errorMsg)
        {
        	switch(svcID)
        	{
        	case "contactComBoardList":
        		this.fnPagingSetting(); //make paging
        		break;
        	}
        };

        /**
        * @description 페이징콜백 페이징화면에서 눌린페이지 넘겨줌
        */
        this.fnPagingCallback = function(nPage, nRecordsOffset)
        {
        	this.fvPage = nPage;
        	this.fvRecordsOffset = nRecordsOffset;

        	this.fnSearch(); //조회함수호출
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**
        * @description 최초조회시, 전역변수 초기화
        */
        this.fnPageInit = function ()
        {
        	this.fvRecords=this.divComuList.form.cboCnt.value; //목록갯수
        	this.fvPage=0;	 								 //페이지번호
        	this.fvRecordsOffset=0;							 //시작rownum
        	this.fvPageCount = 10;							 //실제표출페이지갯수


        	this.fnSearch();
        };

        /**
        * @description 페이징만들기
        */
        this.fnPagingSetting = function ()
        {
        	this.fvTotalCount = nexacro.toNumber(this.dsPagingInfo.getColumn("totalCount")); //전체로우갯수
        	//create page
        	this.divComuList.form.divPaging.form.fnCreatePage("fnPagingCallback",
        		this.fvTotalCount,
        		this.fvRecords,
        		this.fvPage,
        		this.fvPageCount);
        };

        /**
        * @description 리스트에 보여지는 정보들 파라미터로 상세페이지로 보내주기
        */
        this.fnRead = function (nRow)
        {
        	var sBoardNo = this.dsComBoard.getColumn(nRow,"COMBOARD_NO");
        	var sUserId = this.dsComBoard.getColumn(nRow,"USERID");
        	var sBoardTitle = this.dsComBoard.getColumn(nRow,"COMBOARD_TITLE");
        	var sBoardContent = this.dsComBoard.getColumn(nRow,"COMBOARD_CONTENT");
        	var sBoardHit = this.dsComBoard.getColumn(nRow,"COMBOARD_HIT");
        	var sBoardDate = this.dsComBoard.getColumn(nRow,"COMBOARD_WRITEDATE");
        	var sFileId = this.ufnGetServerUrl() + "upload_file/nexa_edu/" + this.dsFile.getColumn(nRow,"FILE_ID");

        	var Param = { "COMBOARD_NO" : sBoardNo
        		, "USERID" : sUserId
        		, "FILE_ID" : sFileId
        		, "Flag" : "ComModify"};
        	this.fvApp.avWorkFrame.objParam = Param;
        	this.go("form::Kopo1022fm.xfdl");
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description 검색 버튼 fnPageInit 호출
        */
        this.divComuList_btnSearch_onclick = function(obj,e)
        {
        	this.fnPageInit();
        };

        /**
        * @description 글쓰기 버튼 클릭시 글쓰기로
        */
        this.divComuList_btnWrite_onclick = function(obj,e)
        {
        	var sBoardDate = this.dsComBoard.getColumn(0,"COMBOARD_WRITEDATE");

        	var objArg = {
        		"COMBOARD_WRITEDATE" : sBoardDate,
        		Flag    : "ComWrite",  			// 메뉴 dataset
        		COMBOARD_NO  : ""     	// 선택된
        	};
        	this.fvApp.avWorkFrame.objParam = objArg;
        	this.go("form::Kopo1022fm.xfdl");
        };

        /**
        * @description 글쓰기 버튼 클릭시 글쓰기로
        */
        this.divComuList_grdContactList_oncelldblclick = function(obj,e)
        {
        	this.fnRead(e.row);
        };

        /**
        * @description 관리자 버튼
        */
        this.divComuList_divAdminButton_btnAdminSave_onclick = function(obj,e)
        {
        	this.ufnTransaction("ComBoardWrite"
        		,"nexa/ComBoardWrite.do"
        		,"dsComBoard=dsComBoard:u dsFile=dsFile:u" //저장
        		,""
        		,""
        		,"fnCallBack");
        };

        /**
        * @description 제목 검색 엔터로
        */
        this.divComuList_edtSearch_onkeydown = function(obj,e)
        {
        		if(e.keycode==13) {
        		obj.updateToDataset();
        		this.divComuList.form.btnSearch.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormCommunity_onload,this);
            this.divComuList.form.grdContactList.addEventHandler("oncelldblclick",this.divComuList_grdContactList_oncelldblclick,this);
            this.divComuList.form.btnWrite.addEventHandler("onclick",this.divComuList_btnWrite_onclick,this);
            this.divComuList.form.btnSearch.addEventHandler("onclick",this.divComuList_btnSearch_onclick,this);
            this.divComuList.form.edtSearch.addEventHandler("onkeydown",this.divComuList_edtSearch_onkeydown,this);
        };
        this.loadIncludeScript("Kopo1020fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
