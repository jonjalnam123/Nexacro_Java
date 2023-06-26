(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormReserveCheck");
            this.set_titletext("회원 예약 확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRoomReserve", this);
            obj._setContents("<ColumnInfo><Column id=\"RESERVE_NO\" type=\"INT\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_NO\" type=\"INT\" size=\"256\"/><Column id=\"RESERVE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ROOM_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BKCOL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/><Column id=\"ROOM_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divReserveList","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRoomReserveList","0","70",null,null,"0","70",null,null,null,null,this.divReserveList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRoomReserve");
            obj.set_autofittype("col");
            obj.set_border("1px solid pink");
            obj.set_borderRadius("20px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"117\"/><Column size=\"80\"/><Column size=\"233\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"예약번호\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"1\" text=\"아이디\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"2\" text=\"이름\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"3\" text=\"방 이름\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"4\" text=\"예약상태\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"5\" text=\"예약날짜\" background=\"pink\" color=\"white\" font=\"18px/normal &quot;휴먼둥근헤드라인&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:RESERVE_NO\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"1\" text=\"bind:USERID\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"3\" text=\"bind:ROOM_TITLE\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/><Cell col=\"4\" text=\"bind:RESERVE_STATUS\" displaytype=\"combotext\" edittype=\"readonly\" combodataset=\"gdsRoomStatus\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\" cssclass=\"bind:BKCOL\"/><Cell col=\"5\" text=\"bind:RESERVE_DATE\" displaytype=\"date\" textAlign=\"center\" font=\"16px/normal &quot;한컴 고딕&quot;\"/></Band></Format></Formats>");
            this.divReserveList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdRoomReserveList:18",null,"50","0",null,null,null,null,null,this.divReserveList.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("CompGuide::CmmPaging.xfdl");
            this.divReserveList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","80","30","85",null,null,null,null,null,this.divReserveList.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divReserveList.addChild(obj.name, obj);

            obj = new Combo("cboCnt",null,"20","110","30","170",null,null,null,null,null,this.divReserveList.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divReserveList_form_cboCnt_innerdataset = new nexacro.NormalDataset("divReserveList_form_cboCnt_innerdataset", obj);
            divReserveList_form_cboCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divReserveList_form_cboCnt_innerdataset);
            obj.set_text("2");
            obj.set_value("2");
            obj.set_index("0");
            this.divReserveList.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"20","80","30","0",null,null,null,null,null,this.divReserveList.form);
            obj.set_taborder("4");
            obj.set_text("예약취소");
            obj.set_color("white");
            obj.set_font("12px/normal \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divReserveList.addChild(obj.name, obj);

            obj = new Static("staLogo","0","20","110","30",null,null,null,null,null,null,this.divReserveList.form);
            obj.set_taborder("5");
            obj.set_text("예약확인");
            obj.set_font("20px/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divReserveList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divReserveList.form.divPaging
            obj = new Layout("default","",0,0,this.divReserveList.form.divPaging.form,function(p){});
            this.divReserveList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReserveList.form
            obj = new Layout("default","",0,0,this.divReserveList.form,function(p){});
            this.divReserveList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divReserveList.form.divMyPage.form.edtRoomReserveNo","value","dsRoomReserve","RESERVE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divReserveList.form.divMyPage.form.edtUserId","value","dsRoomReserve","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divReserveList.form.divMyPage.form.edtRoomNo","value","dsRoomReserve","ROOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divReserveList.form.divMyPage.form.edtStatus","value","dsRoomReserve","RESERVE_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divReserveList.form.divMyPage.form.edReserveDate","value","dsRoomReserve","RESERVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divReserveList.form.edtSearch","accessibilityaction","dsSearch","ROOM_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CompGuide::CmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("Kopo1050fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\form
        *	@FileName Kopo1012fm.xfdl
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
        this.FormReserveCheck_onload = function(obj,e)
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
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "records", this.fvRecords);
        	this.dsSearch.setColumn(0, "recordsOffset", this.fvRecordsOffset);
        	this.dsSearch.setColumn(0, "USERID", this.fvApp.gdsMember.getColumn(0,"USERID"));

         	var strSvcId    = "selectReserveList";
        	var strSvcUrl   = "nexa/selectReserveList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsRoomReserve=dsRoomReserve dsPagingInfo=dsPagingInfo";
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
        	case "selectReserveList":
        		this.fnPagingSetting(); //make paging
        		break;
        	}

        	if(svcID == "roomReserveCancel") {
        		this.ufnAlert("msg.room.canceldone");
        		this.go("form::Kopo1030fm.xfdl");
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
        	this.fvRecords=this.divReserveList.form.cboCnt.value; //목록갯수
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
        	this.divReserveList.form.divPaging.form.fnCreatePage("fnPagingCallback",
        		this.fvTotalCount,
        		this.fvRecords,
        		this.fvPage,
        		this.fvPageCount);
        };

        /**
        * @description 삭제버튼 클릭시 트랜잭션
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition, "RESERVE_STATUS", "004");
        			this.ufnTransaction("roomReserveCancel"
        				,"nexa/roomReserve.do"
        				,"dsRoomReserve=dsRoomReserve:u" //저장
        				,""
        				,""
        				,"fnCallBack");
        		}
        	}
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 검색 기능
        */
        this.divComuList_btnSearch_onclick = function(obj,e)
        {
        	this.fnPageInit();
        };

        /**
        * @description 예약 취소 누르면 DB에 004로 상태 변환 하고 예약취소로 바뀜
        */
        this.divReserveList_btnCancel_onclick = function(obj,e)
        {
        	var sRoomName = this.dsRoomReserve.getColumn(this.dsRoomReserve.rowposition, "ROOM_TITLE");

        	var sMsgId = "msg.room.reservecancel";
        	var arrArg =  [sRoomName];
        	var sPopId = "popMsgAbstractComplete";
        	var sCallback = "fnMsgCallback";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormReserveCheck_onload,this);
            this.divReserveList.form.btnSearch.addEventHandler("onclick",this.divComuList_btnSearch_onclick,this);
            this.divReserveList.form.btnCancel.addEventHandler("onclick",this.divReserveList_btnCancel_onclick,this);
        };
        this.loadIncludeScript("Kopo1050fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
