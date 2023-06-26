(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">전자결재</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">결재양식</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">101010</Col><Col id=\"MENU_NAME\">결재요청문서</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Template::Template_List01.xfdl</Col></Row><Row><Col id=\"MENU_ID\">101020</Col><Col id=\"MENU_NAME\">임시보관문서</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Template::Template_ListDetail01.xfdl</Col></Row><Row><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_NAME\">결재문서</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">102010</Col><Col id=\"MENU_NAME\">미결함</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompGuide::CompGuide01.xfdl</Col></Row><Row><Col id=\"MENU_ID\">102020</Col><Col id=\"MENU_NAME\">기결함</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompGuide::CompGuide02.xfdl</Col></Row><Row><Col id=\"MENU_ID\">102030</Col><Col id=\"MENU_NAME\">수신참조함</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompGuide::CompGuide03.xfdl</Col></Row><Row><Col id=\"MENU_ID\">102040</Col><Col id=\"MENU_NAME\">반려함</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompGuide::CompGuide04.xfdl</Col></Row><Row><Col id=\"MENU_ID\">1030</Col><Col id=\"MENU_NAME\">결재설정</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">103010</Col><Col id=\"MENU_NAME\">결재라인설정</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">전자 우편</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">전체편지함</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">받은편지함</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2030</Col><Col id=\"MENU_NAME\">보낸편지함</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2040</Col><Col id=\"MENU_NAME\">임시보관함</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">2050</Col><Col id=\"MENU_NAME\">지운편지함</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">일정</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">개인일정</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">301010</Col><Col id=\"MENU_NAME\">일정</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">301020</Col><Col id=\"MENU_NAME\">메모</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">301030</Col><Col id=\"MENU_NAME\">할일</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">공유일정</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">302010</Col><Col id=\"MENU_NAME\">통합일정검색</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">302020</Col><Col id=\"MENU_NAME\">주간일정</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">302030</Col><Col id=\"MENU_NAME\">월간일정</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">3030</Col><Col id=\"MENU_NAME\">업무보고</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">303010</Col><Col id=\"MENU_NAME\">업무보고작성</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">303020</Col><Col id=\"MENU_NAME\">업무보고확인</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">303030</Col><Col id=\"MENU_NAME\">업무보고참조</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">303040</Col><Col id=\"MENU_NAME\">주간업무보고</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">메시지</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">쪽지함</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">401010</Col><Col id=\"MENU_NAME\">쪽지쓰기</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">401020</Col><Col id=\"MENU_NAME\">받은쪽지함</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">401030</Col><Col id=\"MENU_NAME\">보낸쪽지함</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_NAME\">문서함</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">402010</Col><Col id=\"MENU_NAME\">문서쓰기</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">402020</Col><Col id=\"MENU_NAME\">받은문서함</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">402030</Col><Col id=\"MENU_NAME\">보낸문서함</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">402040</Col><Col id=\"MENU_NAME\">삭제문서함</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">마이페이지</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">5010</Col><Col id=\"MENU_NAME\">급여명세서</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">501010</Col><Col id=\"MENU_NAME\">급여명세서</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">501020</Col><Col id=\"MENU_NAME\">급여현황</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">5020</Col><Col id=\"MENU_NAME\">근태정보</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">502010</Col><Col id=\"MENU_NAME\">개인연차확인</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">502020</Col><Col id=\"MENU_NAME\">개인근태확인</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">502030</Col><Col id=\"MENU_NAME\">부서연차확인</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">502040</Col><Col id=\"MENU_NAME\">부서근태현황</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">5030</Col><Col id=\"MENU_NAME\">기타</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">503010</Col><Col id=\"MENU_NAME\">부서 경비확인</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">503020</Col><Col id=\"MENU_NAME\">사내교육 신청</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">503030</Col><Col id=\"MENU_NAME\">교육이력 확인</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">503040</Col><Col id=\"MENU_NAME\">증명서 발급신청</Col><Col id=\"MENU_LEVEL\">2</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("FullFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"FrameBase::Form_Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Login.xfdl");


            var frame2 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame2.set_showtitlebar("false");
            frame2.set_dragmovetype("none");
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("FrameBase::Form_Top.xfdl");


            var frame3 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("248,*");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_dragmovetype("none");
            frame3.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::Form_Left.xfdl");


            var frame5 = new VFrameSet("VFrameSet01",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("40,0,*");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("MdiFrame",null,null,null,null,null,null,"FrameBase::Form_Mdi.xfdl",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_dragmovetype("none");
            frame5.addChild(frame6.name, frame6);
            frame6.set_formurl("FrameBase::Form_Mdi.xfdl");


            var frame7 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame5);
            frame5.addChild(frame7.name, frame7);

            var frame8 = new ChildFrame("MainFrame",null,null,null,null,null,null,"FrameBase::Form_Main.xfdl",frame5);
            frame8.set_showtitlebar("false");
            frame8.set_dragmovetype("none");
            frame5.addChild(frame8.name, frame8);
            frame8.set_formurl("FrameBase::Form_Main.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.avVFrameSet   = "";
        this.avTopFrame    = "";
        this.avHFrameSet   = "";
        this.avLeftFrame   = "";
        this.avVFrameSet1  = "";
        this.avMdiFrame    = "";
        this.avWorkFrame   = "";

        this.Application_onload = function(obj,e)
        {
            this.avVFrameSet   = this.mainframe.VFrameSet00;
            this.avTopFrame    = this.mainframe.VFrameSet00.TopFrame;
            this.avHFrameSet   = this.mainframe.VFrameSet00.HFrameSet00;
            this.avLeftFrame   = this.mainframe.VFrameSet00.HFrameSet00.LeftFrame;
            this.avVFrameSet1  = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01;
            this.avMdiFrame    = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.MdiFrame;
            this.avWorkFrame   = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame;
        };
        });
        this.checkLicense("NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
