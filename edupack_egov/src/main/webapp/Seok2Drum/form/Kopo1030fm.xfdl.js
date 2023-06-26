(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormReserve");
            this.set_titletext("룸 정보 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRoom", this);
            obj._setContents("<ColumnInfo><Column id=\"ROOM_NO\" type=\"INT\" size=\"256\"/><Column id=\"ROOM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_PHOTO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/><Column id=\"ROOM_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPaging","100",null,null,"50","100","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("CompGuide::CmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divRoomList","sta00:-540","sta00:-185",null,null,"100","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch",null,"20","200","30","265",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("본문 내용 검색");
            obj.set_visible("false");
            obj.set_text("제목으로 검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnWrite",null,"20","80","30","100",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("글쓰기");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","80","30","185",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRoomLogo","100","20","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("룸 정보");
            obj.set_font("20px/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRoomList.form
            obj = new Layout("default","",0,0,this.divRoomList.form,function(p){});
            this.divRoomList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","edtSearch","accessibilityaction","dsSearch","ROOM_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CompGuide::CmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("Kopo1030fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\TblnPJT\tbln
        *	@FileName tbln1600fm.xfdl
        *	@Creator 김선욱
        *	@CreateDate 2023/05/22
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/22		김선욱		최초 생성
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
        this.fvRecords=0; 			//목록갯수
        this.fvPage=0;	 			//페이지번호
        this.fvRecordsOffset=0;		//시작rownum
        this.fvTotalCount=0;		//전체데이터갯수
        this.fvPageCount=0; 		//실제표출페이지갯수
        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        /**
        * @description 온로드 이벤트
        */
        this.FormReserve_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        	this.fnPageInit();

        	if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin"){
        		this.btnWrite.set_visible(true);
        	}else{
        		this.btnWrite.set_visible(false);
        	}
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**
        * @description 조회조건 함수 및 페이징 함수 트랜잭션
        */
        this.fnSearch = function()
        {
        	// 조회조건 설정
        	//데이터를 넘길 경우 데이터셋에 추가해서 넘기는 방식과
        	//아규먼트를 추가해서 넘기는 방식 모두 사용가능

        	this.dsSearch.setColumn(0, "records", this.fvRecords);
        	this.dsSearch.setColumn(0, "recordsOffset", this.fvRecordsOffset);

         	var strSvcId    = "roomInfo";
        	var strSvcUrl   = "nexa/roomInfo.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsRoom=dsRoom dsPagingInfo=dsPagingInfo";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.ufnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        		strSvcUrl , 	// trabsaction을 요청할 주소
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        		callBackFnc, 	// transaction의 결과를 받을 Function 이름
        		isAsync); 		// 비동기통신 여부 [생략가능]
        }

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description TRANSACTION콜백 트랜젝션 후, 반드시페이지 메이킹 함수 호출
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	switch(svcID)
        	{
        	case "roomInfo":
        		this.fnPagingSetting(); //make paging
        		this.fnCreate();
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
         	//pagin info init setting
        	this.fvRecords= 8; //목록갯수
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
        	this.divPaging.form.fnCreatePage("fnPagingCallback",
        		this.fvTotalCount,
        		this.fvRecords,
        		this.fvPage,
        		this.fvPageCount);
        };

        /**
        * @description 동적 div 생성
        */
        this.fnCreate = function()
        {

        	this.fn_CreateDiv();
        	var xPos = 0;  //left
        	var yPos = 0;  //top

        	for(var i=0; i<this.dsRoom.getRowCount(); i++)
        	{
        		//		if(i==4)
        		if (((i)%4) == 0)
        		{
        			if(i == 0) yPos = 0;
        			else yPos = yPos+230;

        			xPos = 0;
        		}	else {
        			xPos = xPos + 100;
        		}

        		var objDiv = "objDiv" + i;
        		objDiv = new Div();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        		objDiv.init("div" + i, xPos, yPos, 210, 210); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        		this.divRoomList.form.addChild("div" + i, objDiv); // 생성했는데 화면에다가 붙여주는 것
        		objDiv.set_border("1px solid white");  // 배경색깔
        		objDiv.show();  // 화면에보여줄려고 하는 메소드 show

        		xPos  = xPos+180;

        		var objDivTmp = "div"+i;
        		objDivTmp = this.divRoomList.form.components[objDivTmp];

        		var objImageViewer = new ImageViewer();
        		objImageViewer.init("ima", 10, 0, 190, 190);
        		objDivTmp.form.addChild("ima", objImageViewer);
        		var sUrl = this.ufnGetServerUrl() + "upload_file/room_phohto/" +  this.dsRoom.getColumn(i, "ROOM_PHOTO");
        		objImageViewer.set_image(sUrl);
        		objImageViewer.ROOM_NO = this.dsRoom.getColumn(i, "ROOM_NO");
        		objImageViewer.ROOM_TITLE = this.dsRoom.getColumn(i, "ROOM_TITLE");
        		objImageViewer.ROOM_INFO = this.dsRoom.getColumn(i, "ROOM_INFO");
        		objImageViewer.ROOM_PHOTO = this.dsRoom.getColumn(i, "ROOM_PHOTO");

        		objImageViewer.set_stretch("fit");
        		objImageViewer.set_border("3px solid pink");
        		objImageViewer.set_borderRadius("50px");
        		objImageViewer.show();

        		objDivTmp.form.ima.addEventHandler("onclick", this.fnCourseView, this);

        		var objStatic = new Static();
        		objStatic.init("static0", 10, 120, 160, 160);
        		objDivTmp.form.addChild("static0", objStatic);
        		objStatic.set_text(this.dsRoom.getColumn(i, "ROOM_TITLE"));
        		objStatic.set_wordWrap("char");
        		objStatic.set_font("bold 14px 한컴고딕");

        		objStatic.show();
        	}
        }

        /**
        * @description 글 보기 플래그
        */
        this.fnCourseView = function(obj,e)
        {
        	var Param = { "ROOM_NO" : obj.ROOM_NO
        		, "ROOM_TITLE" : obj.ROOM_TITLE
        		, "ROOM_INFO" : obj.ROOM_INFO
        		, "ROOM_PHOTO" : obj.ROOM_PHOTO
        		, "Flag" : "RoomModify"};
        	this.fvApp.avWorkFrame.objParam = Param;

        	this.go("admin::Kopo1116fm.xfdl");
        };

        /**
        * @description 동적 div 영역 설정
        */
        this.fn_CreateDiv = function()
        {

        	if(this.isValidObject(this.divRoomList))
        	{
        		var divWidth = this.divRoomList.getOffsetWidth();
        		var objDiv = this.removeChild("divRoomList");    //삭제할때는 아래 단계를 무조건 해줘야함 1
        		objDiv.destroy();											// 2
        		objDiv = null;

        		//(아이디, left, top, width, height)
        		//Div.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
        		var objDiv = new Div();

        		objDiv.init("divRoomList","sta00:-510px", "sta00:-240", 1050, 440);
        		this.addChild("divRoomList", objDiv);

        		objDiv.set_background("white");		// 생성된 버튼의 초기값 설정
        		objDiv.show();

        	} else {
        		var objDiv = new Div();
        		objDiv.init("divRoomList","sta00:-510px", 120, 1050, 440);
        		this.addChild("divRoomList", objDiv);

        		objDiv.set_background("white");		// 생성된 버튼의 초기값 설정
        		objDiv.show();

        	}

        };
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description 검색 버튼 이벤트
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnPageInit();
        };

        /**
        * @description 글쓰기 버튼 이벤트
        */
        this.btnWrite_onclick = function(obj,e)
        {
        	var objArg = {
        		Flag    : "RoomWrite",  			// 메뉴 dataset
        		ROOM_NO  : ""     	// 선택된
        	};
        	this.fvApp.avWorkFrame.objParam = objArg;
        	this.go("admin::Kopo1116fm.xfdl")
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.Form_Reserve_onsize,this);
            this.addEventHandler("onload",this.FormReserve_onload,this);
            this.divRoomList.addEventHandler("onsize",this.divRoomList_onsize,this);
            this.btnWrite.addEventHandler("onclick",this.btnWrite_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("Kopo1030fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
