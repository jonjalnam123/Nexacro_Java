(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tbln1600fm");
            this.set_titletext("강좌신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCourse", this);
            obj._setContents("<ColumnInfo><Column id=\"COURSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COURSE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"COURSE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"COURSE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"COURSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COURSE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"COURSE_IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COURSE_ID\"/><Col id=\"COURSE_ORG\"/><Col id=\"COURSE_DATE\"/><Col id=\"COURSE_TITLE\"/><Col id=\"COURSE_NAME\"/><Col id=\"COURSE_STATUS\"/></Row><Row><Col id=\"COURSE_ID\"/><Col id=\"COURSE_ORG\"/><Col id=\"COURSE_DATE\"/><Col id=\"COURSE_TITLE\"/><Col id=\"COURSE_NAME\"/><Col id=\"COURSE_STATUS\"/></Row><Row><Col id=\"COURSE_ID\"/><Col id=\"COURSE_ORG\"/><Col id=\"COURSE_DATE\"/><Col id=\"COURSE_TITLE\"/><Col id=\"COURSE_NAME\"/><Col id=\"COURSE_STATUS\"/></Row><Row><Col id=\"COURSE_ID\"/><Col id=\"COURSE_ORG\"/><Col id=\"COURSE_DATE\"/><Col id=\"COURSE_TITLE\"/><Col id=\"COURSE_NAME\"/><Col id=\"COURSE_STATUS\"/></Row><Row><Col id=\"COURSE_ID\"/><Col id=\"COURSE_ORG\"/><Col id=\"COURSE_DATE\"/><Col id=\"COURSE_TITLE\"/><Col id=\"COURSE_NAME\"/><Col id=\"COURSE_STATUS\"/></Row><Row><Col id=\"COURSE_ID\"/><Col id=\"COURSE_ORG\"/><Col id=\"COURSE_DATE\"/><Col id=\"COURSE_TITLE\"/><Col id=\"COURSE_NAME\"/><Col id=\"COURSE_STATUS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/><Column id=\"col_dept\" type=\"STRING\" size=\"256\"/><Column id=\"col_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","60","10","180","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("강좌신청");
            obj.set_font("bold 24px/normal \"Noto Sans KR Regular\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","50","90","1180","770",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("greenyellow");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","50","871","1180","69",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("CompGuide::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","264","12","144","72",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","544","17","160","55",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CompGuide::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("tbln1600fm.xfdl", function() {
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

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/
        this.fnSearch = function()
        {
        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "records", this.fvRecords);
        	this.dsSearch.setColumn(nRow, "recordsOffset", this.fvRecordsOffset);

        	this.ufnTransaction("strSelect"
        						,"tbln/selectCourseList.do"
        						,"dsSearch=dsSearch"
        						,"dsCourse=dsCourse dsPagingInfo=dsPagingInfo"
        						,""
        						,"fnCallback"
        						,true);
        }

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg) //ecd : error code,   emsg : error message
        {
        	if(svcId=="strSelect") {
        		trace("전체 조회 완료");
        		this.fnCreate();
        		this.fnPagingSetting();
        		return;
        	}
        }

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
        this.fnPageInit = function ()
         {
         	//pagin info init setting
        	this.fvRecords=12; //목록갯수
        	this.fvPage=0;	 								 //페이지번호
        	this.fvRecordsOffset=0;							 //시작rownum
        	this.fvPageCount=10;							 //실제표출페이지갯수
        	this.fnSearch();
         };

         /**
         * @description 페이징만들기
        */
        this.fnPagingSetting = function ()
        {
        	this.fvTotalCount = nexacro.toNumber(this.dsPagingInfo.getColumn("totalCount")); //전체로우갯수
        	//create page
        	trace("토탈개수= " + this.fvTotalCount);
        	this.divPage.form.fnCreatePage("fnPagingCallback",
        									this.fvTotalCount,
        									this.fvRecords,
        									this.fvPage,
        									this.fvPageCount);
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        this.tbln1600fm_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        	this.fnPageInit();
        };

        this.fnCreate = function()
        {

        	this.fn_CreateDiv();


        	var xPos = 0;  //left
        	var yPos = 0;  //top

        	for(var i=0; i<this.dsCourse.getRowCount(); i++)
        	{
        		//		if(i==4)
        		if (((i)%4) == 0)
        		{
        			if(i == 0) yPos = 0;
        			else yPos = yPos+270;

        			xPos = 0;
        		}	else {
        				trace(i + "== else ==" + xPos);
        			xPos = xPos + 100;
        		}

        		var objDiv = "objDiv" + i;
        		objDiv = new Div();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        		objDiv.init("div" + i, xPos, yPos, 200, 230); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        		this.divMain.form.addChild("div" + i, objDiv); // 생성했는데 화면에다가 붙여주는 것
        		/*objDiv.set_border("1px solid red");*/  // 배경색깔
        		objDiv.show();  // 화면에보여줄려고 하는 메소드 show

        		xPos  = xPos+220;

        		var objDivTmp = "div"+i;
        		objDivTmp = this.divMain.form.components[objDivTmp];
        		trace("@@@@@@@@@@"+objDivTmp);

        		var objImageViewer0 = new ImageViewer();
        		objImageViewer0.init("ima0", 10, 0, 160, 160);
        		objDivTmp.form.addChild("ima0", objImageViewer0);
        		var sUrl = this.ufnGetServerUrl() + "upload_file/nexa_edu/" +  this.dsCourse.getColumn(i, "COURSE_IMAGE");
        		objImageViewer0.set_image(sUrl);
        		objImageViewer0.COURSE_ID = this.dsCourse.getColumn(i, "COURSE_ID"); // 이미지뷰어에 class_no값 넣어주기
        		objImageViewer0.set_stretch("fit");
        		//objImageViewer0.set_text( this.dsClass.getColumn(i, "class_no"));
        		objImageViewer0.set_border("1px solid gray");
        		objImageViewer0.show();

        		objDivTmp.form.ima0.addEventHandler("onclick", this.fnCourseView, this);

        		var objStatic = new Static();
        		objStatic.init("static0", 10, 115, 160, 160);
        		objDivTmp.form.addChild("static0", objStatic);
        		objStatic.set_text(this.dsCourse.getColumn(i, "COURSE_TITLE"));
        		objStatic.set_wordWrap("char");
        		objStatic.set_font("bold 14px arial, sans-serif");

        		//objImageViewer0.set_text( this.dsClass.getColumn(i, "class_no"));
        		//objImageViewer0.set_border("1px solid gray");
        		objStatic.show();
        	}
        }

        this.fnCourseView = function(obj, e)
        {
        	trace(obj.id + "코스아이디=" + obj.COURSE_ID);

        	var objParam = {
        		COURSE_ID :  obj.COURSE_ID
        	};
        	this.fvApp.avWorkFrame.objParam = objParam;
        	this.fvApp.avWorkFrame.form.div00.set_url("tbln::tbln1601fm.xfdl");
        };

        this.fn_CreateDiv = function()
        {

        	if(this.isValidObject(this.divMain))
        	{
        		var objDiv = this.removeChild("divMain");    //삭제할때는 아래 단계를 무조건 해줘야함 1
        		objDiv.destroy();											// 2
        		objDiv = null;

        		var objDiv = new Div();
        		objDiv.init("divMain",50, 90, 1180, 770);
        		this.addChild("divMain", objDiv);

        		objDiv.set_background("white");		// 생성된 버튼의 초기값 설정
        		objDiv.show();



        	} else {
        		var objDiv = new Div();
        		objDiv.init("divMain",50, 90, 1180, 770);
        		this.addChild("divMain", objDiv);

        		objDiv.set_background("white");		// 생성된 버튼의 초기값 설정
        		objDiv.show();

        	}

        };

        this.btn01_onclick = function(obj,e)
        {

        	this.fnCreate();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tbln1600fm_onload,this);
            this.divMain.addEventHandler("onclick",this.divMain_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };
        this.loadIncludeScript("tbln1600fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
