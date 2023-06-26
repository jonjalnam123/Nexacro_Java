(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AdminUserRoomReserve");
            this.set_titletext("룸 정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILED_SIZE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ROOM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoomReserve", this);
            obj._setContents("<ColumnInfo><Column id=\"RESERVE_NO\" type=\"INT\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_NO\" type=\"INT\" size=\"256\"/><Column id=\"RESERVE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ROOM_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoom", this);
            obj._setContents("<ColumnInfo><Column id=\"ROOM_NO\" type=\"INT\" size=\"256\"/><Column id=\"ROOM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_PHOTO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"BKCOL\" type=\"STRING\" size=\"256\"/><Column id=\"BORDERCOL\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TCOL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divRoom","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtRoomInfo","640","85",null,null,"70","85",null,null,null,null,this.divRoom.form);
            obj.set_taborder("2");
            obj.set_border("1px solid pink");
            obj.set_displaynulltext("방에 대한 설명을 적어주세요.");
            obj.set_background("white");
            this.divRoom.addChild(obj.name, obj);

            obj = new ImageViewer("imgRoom","146","85","484",null,null,"85",null,null,null,null,this.divRoom.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_stretch("fit");
            obj.set_visible("true");
            obj.set_border("1px solid pink");
            this.divRoom.addChild(obj.name, obj);

            obj = new Button("btnUploadPhoto","278",null,"220","40",null,"30",null,null,null,null,this.divRoom.form);
            obj.set_taborder("1");
            obj.set_text("사진첨부");
            obj.set_color("white");
            obj.set_font("bold 14pt \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divRoom.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"10","100","32","103",null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_color("white");
            obj.set_font("bold 14pt \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divRoom.addChild(obj.name, obj);

            obj = new Button("btnGoList",null,"10","100","32","0",null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("4");
            obj.set_text("목록");
            obj.set_color("white");
            obj.set_font("bold 14pt \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divRoom.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"10","100","32","103",null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_color("white");
            obj.set_font("bold 14pt \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divRoom.addChild(obj.name, obj);

            obj = new Button("btnReserve",null,"10","100","32","103",null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("6");
            obj.set_text("예약하기");
            obj.set_color("white");
            obj.set_font("bold 14pt \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divRoom.addChild(obj.name, obj);

            obj = new Calendar("calRoomReserveDate",null,"10","220","32","btnOk:3",null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCalendar");
            obj.set_backgroundcolumn("BKCOL");
            obj.set_bordercolumn("BORDERCOL");
            obj.set_datecolumn("RESERVE_DATE");
            obj.set_textcolorcolumn("TCOL");
            this.divRoom.addChild(obj.name, obj);

            obj = new Edit("edtTitle","227","38","155","40",null,null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("8");
            obj.set_border("1px solid pink");
            obj.set_background("white");
            this.divRoom.addChild(obj.name, obj);

            obj = new Static("staTitle","146","38","81","40",null,null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("9");
            obj.set_text("방 이름");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            obj.set_background("pink");
            obj.set_color("white");
            obj.set_border("1px solid pink");
            obj.set_font("bold 14pt \"휴먼매직체\"");
            this.divRoom.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","25","104","68","72",null,null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.divRoom.addChild(obj.name, obj);

            obj = new Button("btnUpdate",null,"45","100","32","0",null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_color("white");
            obj.set_font("bold 14pt \"휴먼매직체\"");
            obj.set_borderRadius("0px");
            this.divRoom.addChild(obj.name, obj);

            obj = new Static("staInfor","0","20","110","30",null,null,null,null,null,null,this.divRoom.form);
            obj.set_taborder("12");
            obj.set_text("룸 정보");
            obj.set_font("20px/normal \"휴먼매직체\"");
            obj.set_textAlign("center");
            obj.set_background("pink");
            obj.set_color("white");
            this.divRoom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRoom.form
            obj = new Layout("default","",0,0,this.divRoom.form,function(p){});
            this.divRoom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divRoom.form.txtRoomInfo","value","dsRoom","ROOM_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divRoom.form.calRoomReserveDate","value","dsRoomReserve","RESERVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divRoom.form.edtTitle","value","dsRoom","ROOM_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divRoom.form.msk00","value","dsRoom","ROOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Kopo1116fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\admin
        *	@FileName Kopo1116fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/25
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/25		최정석		최초 생성
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
        * @description Flag로 리스트에서 값을 전달 해 줌 쓰기 클릭시 Write 셀 더블 클릭시 Modify
        */
        this.AdminUserRoomReserve_onload = function(obj,e)
        {

        	this.ufnFormOnLoad(this);
        	this.dsRoomReserve.addRow();
        	//누가 로그인 한건지에 따라 컴포넌트 보이게 안보이게 설정
        	if(this.fvApp.avWorkFrame.objParam.Flag == "RoomWrite") {
        		if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin" ){
        			this.divRoom.form.btnReserve.set_visible(false);
        			this.divRoom.form.btnDelete.set_visible(false);
        			this.divRoom.form.calRoomReserveDate.set_visible(false);
        			this.divRoom.form.btnUpdate.set_visible(false);
        		}
        		this.dsRoom.clearData();
        		this.dsRoom.addRow();

        		//누가 로그인 한건지에 따라 컴포넌트 보이게 안보이게 설정
        	}else if(this.fvApp.avWorkFrame.objParam.Flag == "RoomModify") {
        		if(this.fvApp.gdsMember.getColumn(0,"USERID") != "Admin" ) {
        			this.divRoom.form.btnOk.set_visible(false);
        			this.divRoom.form.btnUploadPhoto.set_visible(false);
        			this.divRoom.form.btnDelete.set_visible(false);
        			this.divRoom.form.txtRoomInfo.set_readonly(true);
        			this.divRoom.form.btnUpdate.set_visible(false);
        			this.divRoom.form.edtTitle.set_readonly(true);
        		}else if(this.fvApp.gdsMember.getColumn(0,"USERID") == "Admin" ){
        			this.divRoom.form.btnReserve.set_visible(false);
        			this.divRoom.form.btnOk.set_visible(false);
        			this.divRoom.form.btnUpdate.set_visible(true);
        		}
        		this.dsSearch.clearData();
        		this.dsSearch.addRow();

        		this.dsSearch.setColumn(this.dsSearch.rowposition, "ROOM_NO", this.fvApp.avWorkFrame.objParam.ROOM_NO); //키 값으로 값을 가져옴
        		this.ufnTransaction("roomDetailView" //룸 정보 조회
        			,"nexa/roomDetailView.do"
        			,"dsSearch=dsSearch"
        			,"dsRoom=dsRoom dsCalendar=dsCalendar"
        			,""
        			,"fnCallBack")
        	}
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**
        * @description 글작성 클릭시 룸 정보 인서트
        */
        this.divRoom_btnOk_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.divRoom.form.edtTitle.value)) {
        		this.ufnAlert("msg.admin.roomname")
        		return;
        	}else if(this.ufnIsNull(this.dsRoom.getColumn(0,"ROOM_PHOTO"))){
        		this.ufnAlert("msg.admin.roomphoto")
        		return;
        	}else if(this.ufnIsNull(this.divRoom.form.txtRoomInfo.value)){
        		this.ufnAlert("msg.admin.roominfo")
        		return;
        	}
        	this.ufnTransaction("roomInfoList"
        		,"nexa/roomInfoList.do"
        		,"dsRoom=dsRoom:u"
        		,""
        		,""
        		,"fnCallBack");
        };

        /**
        * @description 글수정 클릭시 수정
        */
        this.divRoom_btnUpdate_onclick = function(obj,e)
        {

        	//수정 컨펌 알림
        	var sMsgId = "confirm.before.save";
        	var arrArg = "";
        	var sPopId = "popMsgAbstractUpdate";
        	var sCallback = "fnMsgCallback";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**
        * @description 콜백
        */
        this.fnCallBack = function(svcId, errCd, errMsg) {
        	if(svcId == "roomDetailView") {
        		this.divRoom.form.imgRoom.set_image(this.ufnGetServerUrl() + "upload_file/room_phohto/" + this.dsRoom.getColumn(0,"ROOM_PHOTO"))
        	}else if (svcId == "roomReserveCheck" ) {
        		if( this.fnDateCnt > 0 ) {
        			this.ufnAlert("msg.date.alreadyreserve")
        			return false;
        		}else{
        			var sMsgId = "msg.room.reserveok";
        			var arrArg = "";
        			var sPopId = "popMsgAbstractReserveok";
        			var sCallback = "fnMsgCallbackReserveok";

        			this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        		}

        	}else if(svcId == "roomInfoList") {

        		var sMsgId = "msg.save.success";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractRoonInfoCom";
        		var sCallback = "fnMsgCallbackRoomInfo";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        	}else if(svcId == "roomInfoListDelete") {

        		var sMsgId = "msg.delete.success";
        		var arrArg = "";
        		var sPopId = "popMsgAbstractRoomDelete";
        		var sCallback = "fnMsgCallbackRoomDelete";

        		this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);


        	}
        };


        /**
        * @description 예약하기 알림 콜백
        */
        this.fnMsgCallbackReserveok = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractReserveok"){
        		if(strVal) {
        			this.go("form::Kopo1050fm.xfdl");
        		}
        	}
        };

        /**
        * @description 글 삭제 컨펌 후  알림 콜백
        */
        this.fnMsgCallbackRoomDelete = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractRoomDelete"){
        		if(strVal) {
        			this.go("form::Kopo1030fm.xfdl")
        		}
        	}
        };

        /**
        * @description 룸 등록 알림 콜백
        */
        this.fnMsgCallbackRoomInfo = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractRoonInfoCom"){
        		if(strVal) {
        			this.go("form::Kopo1030fm.xfdl");
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
        			this.dsRoom.deleteRow(this.dsRoom.rowposition);
        			this.ufnTransaction("roomInfoListDelete"
        				,"nexa/roomInfoList.do"
        				,"dsRoom=dsRoom:u" //저장
        				,""
        				,""
        				,"fnCallBack");
        		}
        	}else if(strId == "popMsgAbstractUpdate") {
        		if(strVal) {
        			this.ufnTransaction("roomInfoList"
        				,"nexa/roomInfoList.do"
        				,"dsRoom=dsRoom:u"
        				,""
        				,""
        				,"fnCallBack");

        		}
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 파일 선택 눌렀을때 어디서 가져올지 경로 정하는 곳
        */
        this.divRoom_btnUploadPhoto_onclick = function(obj,e)
        {
        	this.FileDialog.open("File Select", 1, "%MYDOCUMENT%"); //파일 선택 버튼 눌렀을때 바로 열리는 경로
        };

        /**
        * @description 파일 업로드창이 닫힐때 이벤트
        */
        this.FileDialog_onclose = function(obj,e)
        {
        	var objFileList = e.virtualfiles;

        	for(var i=0; i<objFileList.length; i++)
        	{
        		var bExist = this.FileUpTransfer.existFile(objFileList[i]);
        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".")+1); //마지막 점 이후의 값을 가져옴
        			this.FileUpTransfer.addFile(sFileName,objFileList[i]);

        			var nRow = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow, "FILE_ID", sFileName);
        			this.dsFile.setColumn(nRow, "FILE_NAME", sFileName);

        		}
        	}

        	var sUrl = "SvcUrl::nexa/uploadRoomFile.do";
        	this.FileUpTransfer.setPostData("userPath", "room_phohto"); //파일이 업로드될 경로 지정
        	this.FileUpTransfer.upload(sUrl);

        };

        /**
        * @description 파일 업로드가 잘되면 이벤트
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
        		this.dsRoom.setColumn(this.dsRoom.rowposition, "ROOM_PHOTO", objDs.getColumn(i, "FILE_ID"));
        		var sUrl = this.ufnGetServerUrl() + "upload_file/room_phohto/" +  objDs.getColumn(i, "FILE_ID");
        		this.divRoom.form.imgRoom.set_image(sUrl);
        	}
        };

        /**
        * @description 리스트로 돌아가기
        */
        this.divRoom_btnGoList_onclick = function(obj,e)
        {
        	this.go("form::Kopo1030fm.xfdl");
        };

        /**
        * @description 예약하기 이벤트
        */
        this.divRoom_btnReserve_onclick = function(obj,e)
        {

        	if(this.ufnIsNull(this.divRoom.form.calRoomReserveDate.value)){	//날짜 선택 안하면 알림
        		this.ufnAlert("msg.room.dateselect")
        		return;
        	}else if(this.divRoom.form.calRoomReserveDate.value < this.ufnGetDate()){ //오늘날짜 전으로 예약 못하게
        		this.divRoom.form.calRoomReserveDate.setFocus();
        		this.ufnAlert("msg.date.today")
        		return;
        	}
        	//값 셋팅
        	this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition, "USERID", this.fvApp.gdsMember.getColumn(this.fvApp.gdsMember.rowposition,"USERID"));
        	this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition, "ROOM_NO", this.dsRoom.getColumn(this.dsRoom.rowposition,"ROOM_NO"));
        	this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition, "ROOM_TITLE", this.dsRoom.getColumn(this.dsRoom.rowposition,"ROOM_TITLE"));
            this.dsRoomReserve.setColumn(this.dsRoomReserve.rowposition, "RESERVE_STATUS", "001");

        	//보내줄 파라미터 wrapQuote 하기위해 변수로 지정
        	var sDate = this.divRoom.form.calRoomReserveDate.value;
        	var sTitle = this.divRoom.form.edtTitle.value;
        	var sStatus	= this.dsRoomReserve.getColumn(this.dsRoomReserve.rowposition,"RESERVE_STATUS");

        	this.ufnTransaction("roomReserveCheck" //예약하기 시 예약된건지 조회
        		,"nexa/roomReserveCheck.do"
        		,"dsRoomReserve=dsRoomReserve:u"
        		,""
        		,"paramDate=" + nexacro.wrapQuote(sDate) + " paramTitle=" + nexacro.wrapQuote(sTitle)  + " paramStatus=" + nexacro.wrapQuote(sStatus) //에디트에 입력된 값 파라미터로"
        		,"fnCallBack");

        };

        /**
        * @description 삭제 이벤트
        */
        this.divRoom_btnDelete_onclick = function(obj,e)
        {
        	//삭제 컨펌 알림
        	var sMsgId = "msg.before.delete";
        	var arrArg = "";
        	var sPopId = "popMsgAbstractComplete";
        	var sCallback = "fnMsgCallback";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);

        };

        /**
        * @description 달력 날짜 확인 이벤트
        */
        this.divRoom_calRoomReserveDate_oncloseup = function(obj,e)
        {
        	if(this.divRoom.form.calRoomReserveDate.value < this.ufnGetDate()) { //날짜 확인 알림
        		this.ufnAlert("msg.date.today")
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AdminUserRoomReserve_onload,this);
            this.divRoom.form.imgRoom.addEventHandler("ondrop",this.divRoom_imgRoom_ondrop,this);
            this.divRoom.form.btnUploadPhoto.addEventHandler("onclick",this.divRoom_btnUploadPhoto_onclick,this);
            this.divRoom.form.btnOk.addEventHandler("onclick",this.divRoom_btnOk_onclick,this);
            this.divRoom.form.btnGoList.addEventHandler("onclick",this.divRoom_btnGoList_onclick,this);
            this.divRoom.form.btnDelete.addEventHandler("onclick",this.divRoom_btnDelete_onclick,this);
            this.divRoom.form.btnReserve.addEventHandler("onclick",this.divRoom_btnReserve_onclick,this);
            this.divRoom.form.calRoomReserveDate.addEventHandler("oncloseup",this.divRoom_calRoomReserveDate_oncloseup,this);
            this.divRoom.form.calRoomReserveDate.addEventHandler("onchanged",this.divRoom_calRoomReserveDate_onchanged,this);
            this.divRoom.form.btnUpdate.addEventHandler("onclick",this.divRoom_btnUpdate_onclick,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("Kopo1116fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
