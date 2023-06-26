(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleGridCalendar");
            this.set_titletext("그리드 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"day0\" type=\"STRING\" size=\"256\"/><Column id=\"day1\" type=\"STRING\" size=\"256\"/><Column id=\"day2\" type=\"STRING\" size=\"256\"/><Column id=\"day3\" type=\"STRING\" size=\"256\"/><Column id=\"day4\" type=\"STRING\" size=\"256\"/><Column id=\"day5\" type=\"STRING\" size=\"256\"/><Column id=\"day6\" type=\"STRING\" size=\"256\"/><Column id=\"hol0\" type=\"STRING\" size=\"256\"/><Column id=\"hol1\" type=\"STRING\" size=\"256\"/><Column id=\"hol2\" type=\"STRING\" size=\"256\"/><Column id=\"hol3\" type=\"STRING\" size=\"256\"/><Column id=\"hol4\" type=\"STRING\" size=\"256\"/><Column id=\"hol5\" type=\"STRING\" size=\"256\"/><Column id=\"hol6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdCal","10","105",null,null,"10","7",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsCalendar");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"61\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"◀\"/><Cell col=\"2\" colspan=\"10\"/><Cell col=\"12\" colspan=\"2\" text=\"▶\"/><Cell row=\"1\" colspan=\"2\" text=\"일요일\" expandchar=\"sunday\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"월요일\" expandchar=\"monday\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"화요일\" expandchar=\"tuesday\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"수요일\" expandchar=\"wednesday\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"목요일\" expandchar=\"thursday\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" text=\"금요일\" expandchar=\"friday\"/><Cell row=\"1\" col=\"12\" colspan=\"2\" text=\"토요일\" expandchar=\"saturday\"/></Band><Band id=\"body\"><Cell text=\"bind:day0\" color=\"red\"/><Cell col=\"1\" text=\"bind:hol0\" color=\"red\"/><Cell col=\"2\" text=\"bind:day1\"/><Cell col=\"3\" text=\"bind:hol1\"/><Cell col=\"4\" text=\"bind:day2\"/><Cell col=\"5\" text=\"bind:hol2\"/><Cell col=\"6\" text=\"bind:day3\"/><Cell col=\"7\" text=\"bind:hol3\"/><Cell col=\"8\" text=\"bind:day4\"/><Cell col=\"9\" text=\"bind:hol4\"/><Cell col=\"10\" text=\"bind:day5\"/><Cell col=\"11\" text=\"bind:hol5\"/><Cell col=\"12\" text=\"bind:day6\" color=\"blue\"/><Cell col=\"13\" text=\"bind:hol6\" color=\"blue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","161","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("그리드 달력");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("stc","10","35",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid를 통해 달력을 표현한 샘플이다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleGridCalendar.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 그리드 달력
        *  @FileName 	SampleGridCalendar.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	// gfnGetToday() 함수는 로컬의 날짜이므로 주의
        	var sToday = this.gfnGetDate();
        	this.fnDrawCalendar(this.dsCalendar, this.grdCal, sToday.substr(0,6));

        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnDrawCalendar : 달력그리기
        * @param  : dsCalendarObj  - [object]ds
        * @param  : grdObj		      - [object]Grid
        * @param  : yyyymm		      - [string] YYYYMM
        * @return : N/A
        * @example :
        */
        this.fnDrawCalendar = function(dsCalendarObj, grdObj, yyyymm)
        {
        	var i, day, row, colid;
        	var start_day, end_date, lunar;
        	var holiday, aHolidays;

        	grdObj.UserData = yyyymm;
        	aHolidays = this.gfnGetHolidays(parseInt(yyyymm.substr(0,4), 10));

        	// Grid Header설정
        	grdObj.setCellProperty("Head",1,"text", yyyymm.substr(0, 4) + " - " + parseInt(yyyymm.substr(4,2)) );

        	// Dataset 만들기
        	dsCalendarObj.clearData();
        	start_day = this.gfnGetDay(yyyymm+"01");
        	end_date = this.gfnGetLastDate(yyyymm).substr(6,2);

        	row = dsCalendarObj.addRow();
        	for( i = 1, day = start_day ; i <= end_date ; i++ )
        	{
        		// 달력 Data설정
        		dsCalendarObj.setColumn(row, "day"+day, i);

        		// 휴일
        		holiday = this.fnIsHoliday(yyyymm+this.gfnRight("0"+i, 2), aHolidays);

        		if( holiday != "" ){
        			dsCalendarObj.setColumn(row, "hol"+day, holiday);
        		}

        		// 달력 Data Row추가
        		day = (day+1)%7;
        		if( day == 0 && i != end_date )
        			row = dsCalendarObj.addRow();
        	}

        };
        /**
        * fnIsHoliday : 날짜에 휴일있는지 확인
        * @param  : sDate  		- [string]yyyymmdd
        * @param  : aHolidays  - [array] 휴일정보 array
        * @return : [string] 휴일정보
        * @example :
        */
        this.fnIsHoliday = function(sDate, aHolidays)
        {
        	var i;

        	for( i = 0 ; i < aHolidays.length ; i++ )
        	{
        		if( aHolidays[i].substr(0,8) == sDate ){
        			return aHolidays[i].substr(8);
        		}
        	}
        	return "";
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * grdCal_onheadclick : 그리드 헤드클릭 이벤트
        * @param  : obj		   - [object]Grid
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.grdCal_onheadclick = function(obj,e)
        {
        	var yyyymm, add_date;

        	yyyymm = obj.UserData;
        	if( e.cell == 0 )
        	{
        		add_date = this.gfnAddMonth(yyyymm+"01", -1);
        		yyyymm = add_date.substr(0, 6);
        		this.fnDrawCalendar(this.dsCalendar, obj, yyyymm);
        	}
        	else if( e.cell == 2 )
        	{
        		add_date = this.gfnAddMonth(yyyymm+"01", 1);
        		yyyymm = add_date.substr(0, 6);
        		this.fnDrawCalendar(this.dsCalendar, obj, yyyymm);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdCal.addEventHandler("onheadclick",this.grdCal_onheadclick,this);
        };
        this.loadIncludeScript("SampleGridCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
