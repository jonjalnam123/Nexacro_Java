(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AdminReserveMember");
            this.set_titletext("예약관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRoomReserve", this);
            obj._setContents("<ColumnInfo><Column id=\"RESERVE_NO\" type=\"INT\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_NO\" type=\"INT\" size=\"256\"/><Column id=\"RESERVE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ROOM_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BKCOL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoomStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ROOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"BKCOL\" type=\"STRING\" size=\"256\"/><Column id=\"BORDERCOL\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TCOL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divAdminReserve","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divAdminMemberInfo",null,"55","487","347","6",null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.getSetter("onchanged").set("Div00_01_00_Div00_onchanged");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Edit("edtUserID","127","3","360","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("0");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staRoomNo","7","3","120","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("1");
            obj.set_text("방 번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtPassWord","127","52","360","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("2");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staReserveNo","7","52","120","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("3");
            obj.set_text("예약번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtRoomName","127","101","360","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("4");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staRoomName","7","101","120","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("5");
            obj.set_text("방 이름");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staUserId","7","150","120","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("6");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staName","7","199","120","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtName","127","199","360","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("8");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staReserveDate","7","248","120","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("9");
            obj.set_text("예약날짜");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Static("staReserveStatus","7","297","120","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("10");
            obj.set_text("예약상태");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("16px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtUserId","127","150","360","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("11");
            obj.set_border("1px solid pink");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Calendar("calRoomReserveDate",null,"248","360","50","0",null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCalendar");
            obj.set_backgroundcolumn("BKCOL");
            obj.set_bordercolumn("BORDERCOL");
            obj.set_datecolumn("RESERVE_DATE");
            obj.set_textcolorcolumn("TCOL");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Combo("cboReserveStatus","127","297","360","50",null,null,null,null,null,null,this.divAdminReserve.form.divAdminMemberInfo.form);
            obj.set_taborder("13");
            obj.set_innerdataset("gdsRoomStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_border("1px solid pink");
            obj.set_text("");
            this.divAdminReserve.form.divAdminMemberInfo.addChild(obj.name, obj);

            obj = new Grid("grdReserveMember","0","58",null,null,"divAdminMemberInfo:-3","14",null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRoomReserve");
            obj.set_autofittype("col");
            obj.set_border("1px solid pink");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,sort,!filter,export,import");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"예약 번호\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"1\" text=\"아이디\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"2\" text=\"이름\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"3\" text=\"방 번호\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"4\" text=\"예약 상태\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"5\" text=\"예약 날짜\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/><Cell col=\"6\" text=\"방 이름\" background=\"pink\" color=\"white\" font=\"14px/normal &quot;휴먼둥근헤드라인&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:RESERVE_NO\" font=\"14px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USERID\" font=\"14px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" font=\"14px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ROOM_NO\" font=\"14px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:RESERVE_STATUS\" displaytype=\"combotext\" edittype=\"readonly\" combodataset=\"gdsRoomStatus\" combocodecol=\"CODE\" combodatacol=\"NAME\" cssclass=\"bind:BKCOL\" font=\"14px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:RESERVE_DATE\" font=\"14px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:ROOM_TITLE\" font=\"14px/normal &quot;한컴 고딕&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Combo("cboReserveStatus",null,"20","194","30","199",null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsRoomStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("cbo00");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"20","94","30","99",null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("18px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","94","30","0",null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_font("18px/normal \"휴먼둥근헤드라인\"");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Static("staInfoLogo","0","20","110","30",null,null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("5");
            obj.set_text("예약관리");
            obj.set_font("20px/normal \"휴먼둥근헤드라인\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Static("staStatusLogo",null,"20","94","30","393",null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("6");
            obj.set_text("상태조회");
            obj.set_font("20px/normal \"휴먼둥근헤드라인\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Edit("edtSearch",null,"20","194","30","493",null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("이름으로 검색");
            this.divAdminReserve.addChild(obj.name, obj);

            obj = new Static("staStatusLogo00",null,"20","94","30","687",null,null,null,null,null,this.divAdminReserve.form);
            obj.set_taborder("8");
            obj.set_text("이름");
            obj.set_font("20px/normal \"휴먼둥근헤드라인\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divAdminReserve.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAdminReserve.form.divAdminMemberInfo.form
            obj = new Layout("default","",0,0,this.divAdminReserve.form.divAdminMemberInfo.form,function(p){});
            this.divAdminReserve.form.divAdminMemberInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAdminReserve.form
            obj = new Layout("default","",0,0,this.divAdminReserve.form,function(p){});
            this.divAdminReserve.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divAdminReserve.form.divAdminMemberInfo.form.edtUserID","value","dsRoomReserve","ROOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divAdminReserve.form.divAdminMemberInfo.form.edtPassWord","value","dsRoomReserve","RESERVE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAdminReserve.form.divAdminMemberInfo.form.edtRoomName","value","dsRoomReserve","ROOM_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAdminReserve.form.divAdminMemberInfo.form.edtName","value","dsRoomReserve","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAdminReserve.form.divAdminMemberInfo.form.edtUserId","value","dsRoomReserve","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAdminReserve.form.divAdminMemberInfo.form.calRoomReserveDate","value","dsRoomReserve","RESERVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAdminReserve.form.divAdminMemberInfo.form.cboReserveStatus","value","dsRoomReserve","RESERVE_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Kopo1115fm.xfdl", function() {
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
        this.fnDateCnt = "";


        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        /**
        * @description 온로드 이벤트
        */
        this.AdminReserveMember_onload = function(obj,e)
        {
        	this.dsRoomStatus.clearData();
        	this.dsRoomStatus.copyData(this.fvApp.gdsRoomStatus);
        	this.dsRoomStatus.insertRow(0);
        	this.dsRoomStatus.setColumn(0,"CODE","999");
        	this.dsRoomStatus.setColumn(0,"NAME","전체");
        	this.divAdminReserve.form.cboReserveStatus.set_value("999");

        	this.dsRoomReserve.clearData();
        	this.ufnFormOnLoad(this);
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/
        /**
        * @description 리스트 조회
        */
        this.divAdminReserve_divAdminMemberInfo_btnSel_onclick = function(obj,e)
        {
        	this.ufnTransaction("ReserveMemberList"
        		, "nexa/ReserveMemberList.do"
        		, ""
        		, "dsRoomReserve=dsRoomReserve"
        		, "ROOM_STATUS=" + this.divAdminReserve.form.cboReserveStatus.value + " NAME=" + this.divAdminReserve.form.edtSearch.value
        		, "fnCallback")

        };

        /**
        * @description 변경 값 저장하기 저장하면 001 코드로 예약 변경 으로 바뀜
        */
        this.divAdminMember_divAdminMemberInfo_btnSave_onclick = function(obj,e)
        {

        	if(this.divAdminReserve.form.divAdminMemberInfo.form.calRoomReserveDate.value < this.ufnGetDate()) {
        		this.ufnAlert("msg.date.today")
        		return;
        	}
        	//this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition, "RESERVE_STATUS", "001");
        	this.ufnTransaction("roomReserveChange"
        		,"nexa/roomReserve.do"
        		,"dsRoomReserve=dsRoomReserve:u" //저장
        		,""
        		,""
        		,"fnCallback");
        };

        /**
        * @description 예약 취소 누르면 DB에 004로 상태 변환 하고 예약취소로 바뀜
        */
        this.divAdminReserve_divAdminMemberInfo_btnDelete_onclick = function(obj,e)
        {
        	this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition, "RESERVE_STATUS", "004");
          	this.ufnTransaction("roomReserveCancel"
        		,"nexa/roomReserve.do"
        		,"dsRoomReserve=dsRoomReserve:u" //저장
        		,""
        		,""
        		,"fnCallback");
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 콜백
        */
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	if(svcId == "roomReserveChange") {
        		this.ufnAlert("msg.admin.roomreservesave");
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description 오늘 날짜 보다 전날 선택 하면 알림 메세지
        */
        this.divAdminReserve_divAdminMemberInfo_calRoomReserveDate_oncloseup = function(obj,e)
        {
        	if(this.divAdminReserve.form.divAdminMemberInfo.form.calRoomReserveDate.value < this.ufnGetDate()) {
        		this.ufnAlert("msg.date.today")
        		return;
        	}


        };

        /**
        * @description 예약 있는 곳에는 예약 불가능하게 하는 것
        */
        this.dsRoomReserve_cancolumnchange = function(obj,e)
        {
        	//이미 온로우포스 체인지에서 가져온 RESERVE_DATE 정보를 사용해서 예약 불가능하게 알림 띄어주기
        	if(e.columnid == "RESERVE_DATE"){
        		var nIdx = this.dsCalendar.findRow("RESERVE_DATE",e.newvalue);
        		if (nIdx >= 0) {
        			trace("=========" + nIdx)
        			this.ufnAlert("msg.date.alreadyreserve");
        			return false;
        		}
        	}else if(e.columnid == "RESERVE_STATUS") {
        		if(e.newvalue == "004") {
        			var nIdx = this.dsCalendar.findRow("RESERVE_DATE",e.newvalue);
        			if(nIdx >= 0) {
        				this.dsCalendar.deleteRow(nRow);
        			}
        		}
        	}
        };

        /**
        * @description 룸 예약이 되있으면 빨간색 없으면 흰색 보여주는 것
        */
        this.dsRoomReserve_onrowposchanged = function(obj,e)
        {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.dsSearch.setColumn(0,"ROOM_NO",this.dsRoomReserve.getColumn(this.dsRoomReserve.rowposition,"ROOM_NO"));
        	this.ufnTransaction("roomReserveCheckAdmin" //룸 정보 조회
        		,"nexa/roomReserveCheckAdmin.do"
        		,"dsSearch=dsSearch"
        		,"dsCalendar=dsCalendar"
        		,""
        		,"fnCallback")
        };

        /**
        * @description 달력 날짜 변경이 되면 상태 값 변경
        */
        this.divAdminReserve_divAdminMemberInfo_calRoomReserveDate_onchanged = function(obj,e)
        {
        	this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition,"RESERVE_STATUS","003");
        };

        /**
        * @description 엔터키로 조회버튼 기능
        */
        this.divAdminReserve_edtSearch_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) {
        		obj.updateToDataset();
        		this.divAdminReserve.form.btnSel.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AdminReserveMember_onload,this);
            this.divAdminReserve.form.divAdminMemberInfo.form.staRoomName.addEventHandler("onclick",this.divAdminReserve_divAdminMemberInfo_staNa_onclick,this);
            this.divAdminReserve.form.divAdminMemberInfo.form.staUserId.addEventHandler("onclick",this.divAdminReserve_divAdminMemberInfo_staPh_onclick,this);
            this.divAdminReserve.form.divAdminMemberInfo.form.staReserveStatus.addEventHandler("onclick",this.divAdminReserve_divAdminMemberInfo_staReserveStatus_onclick,this);
            this.divAdminReserve.form.divAdminMemberInfo.form.calRoomReserveDate.addEventHandler("oncloseup",this.divAdminReserve_divAdminMemberInfo_calRoomReserveDate_oncloseup,this);
            this.divAdminReserve.form.divAdminMemberInfo.form.calRoomReserveDate.addEventHandler("onchanged",this.divAdminReserve_divAdminMemberInfo_calRoomReserveDate_onchanged,this);
            this.divAdminReserve.form.grdReserveMember.addEventHandler("oncellposchanged",this.divAdminReserve_grdReserveMember_oncellposchanged,this);
            this.divAdminReserve.form.btnSel.addEventHandler("onclick",this.divAdminReserve_divAdminMemberInfo_btnSel_onclick,this);
            this.divAdminReserve.form.btnSave.addEventHandler("onclick",this.divAdminMember_divAdminMemberInfo_btnSave_onclick,this);
            this.divAdminReserve.form.edtSearch.addEventHandler("onkeydown",this.divAdminReserve_edtSearch_onkeydown,this);
            this.dsRoomReserve.addEventHandler("cancolumnchange",this.dsRoomReserve_cancolumnchange,this);
            this.dsRoomReserve.addEventHandler("onrowposchanged",this.dsRoomReserve_onrowposchanged,this);
        };
        this.loadIncludeScript("Kopo1115fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
