(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("IntronHistory");
            this.set_titletext("학원 소개 및 연혁");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"레슨\" type=\"STRING\" size=\"256\"/><Column id=\"레슨진행률\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"레슨\">보컬</Col><Col id=\"레슨진행률\">95</Col></Row><Row><Col id=\"레슨\">키보드</Col><Col id=\"레슨진행률\">85</Col></Row><Row><Col id=\"레슨\">일렉</Col><Col id=\"레슨진행률\">80</Col></Row><Row><Col id=\"레슨\">베이스</Col><Col id=\"레슨진행률\">55</Col></Row><Row><Col id=\"레슨\">드럼</Col><Col id=\"레슨진행률\">70</Col></Row><Row><Col id=\"레슨\">작곡/미디</Col><Col id=\"레슨진행률\">60</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00",null,"60","270",null,"1290","26",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"레슨\"/><Cell col=\"1\" text=\"인기순위\"/></Band><Band id=\"body\"><Cell text=\"bind:레슨\"/><Cell col=\"1\" text=\"bind:인기순위\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnColumn","-150","10","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Column");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staHistoryInfo",null,"0","530",null,"100","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("<2019년>\r\n서울시 소재 \"석이드럼\" 실용음악학원 설립\r\n\r\n<2020년>\r\n서울시 주관 실용음악 페스티벌 \"석이드럼\" 찬조공연\r\n서울시 선정 현재 가장 HOT 한 음악학원 TOP100 등극\r\n\r\n<2021년>\r\n\"석이드럼\" 학원생 단독 공연 주최\r\n뚝섬유원지역 고정 버스킹팀 등록\r\n서울시 선정 잘 가르치는 학원 TOP10 등극\r\n\r\n<2022년>\r\n서울예술대학교, 동아방송예술대학교, 호원대학교 입시률 \"80%\"\r\n홍익대학교, 서경대학교, 한양대학교, 경희대학교 입시률 \"70%\"\r\n백석예술대학교 입시률 \"90%\"\r\n\r\n<2023년>\r\n\"석이드럼\" x \"투비소프트\" 형제계약 체결");
            obj.set_font("bold 19px/normal \"한컴 고딕\"");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divChartParentParent","100","30",null,null,"staHistoryInfo:60","30",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divChartParent","0","0",null,null,"0","0",null,null,null,null,this.divChartParentParent.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Area");
            this.divChartParentParent.addChild(obj.name, obj);

            obj = new WebBrowser("webChart","0","0",null,null,"0","0",null,null,null,null,this.divChartParentParent.form.divChartParent.form);
            obj.set_taborder("0");
            this.divChartParentParent.form.divChartParent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChartParentParent.form.divChartParent.form
            obj = new Layout("default","",0,0,this.divChartParentParent.form.divChartParent.form,function(p){});
            this.divChartParentParent.form.divChartParent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChartParentParent.form
            obj = new Layout("default","",0,0,this.divChartParentParent.form,function(p){});
            this.divChartParentParent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Kopo1011fm.xfdl","Lib::rMateChartH5.xjs");
        this.registerScript("Kopo1011fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\form
        *	@FileName Kopo10111fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/06/15
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/06/15		최정석		최초 생성
        *
        *
        */

        /************************************************************************************************
         * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
         ************************************************************************************************/
        this.executeIncludeScript("Lib::rMateChartH5.xjs"); /*include "Lib::rMateChartH5.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.IntronHistory_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this);
        	this.ufnCreateChart(this.divChartParentParent.form.divChartParent.form.webChart);

        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        //아래 함수명 변경 불가
        this.rMateChartOnLoad = function()
        {

        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.ufnSetChart(this.divChartParentParent.form.divChartParent.form.webChart, this.dsData, sType, arrOption);
        	this.btnColumn.click();
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
        * 컬럼 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnColumn_onclick = function(obj,e)
        {
        	var arrOption = {title:"학원생 레슨 현황", subtitle:"( % )", xfield:"레슨", yfield:"레슨진행률", displayName : "레슨진행률", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Column";
        	this.ufnSetChart(this.divChartParentParent.form.divChartParent.form.webChart, this.dsData, sType, arrOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.IntronHistory_onload,this);
            this.btnColumn.addEventHandler("onclick",this.btnColumn_onclick,this);
            this.staHistoryInfo.addEventHandler("onclick",this.staHistoryInfo_onclick,this);
            this.divChartParentParent.form.divChartParent.form.webChart.addEventHandler("onusernotify",this.divChartParentParent_divChartParent_webChart_onusernotify,this);
        };
        this.loadIncludeScript("Kopo1011fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
