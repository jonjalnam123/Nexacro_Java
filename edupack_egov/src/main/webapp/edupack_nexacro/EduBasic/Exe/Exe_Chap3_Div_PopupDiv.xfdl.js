(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap3_Div_PopupDiv");
            this.set_titletext("Exe2_Chap3_Div_PopupDiv");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Div / PopupDiv");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exe 1 - PopupDiv1");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv1","590","10","400","250",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_border("1px solid darkgray");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","40","378","161",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_Close","10","211","100","30",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("1");
            obj.set_text("Exe1_Close");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","81","30",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("2");
            obj.set_text("Contents");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","110","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","80","110","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","210","110","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","320","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv2","590","270","400","250",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_border("1px solid darkgray");
            obj.set_url("EduBasic::Exe/Exe_Chap3_Div_PopupDiv_Sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","230","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept2","80","230","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name2","210","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id2","320","230","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","170","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Exe 2 - PopupDiv2");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","290","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Exe 3 - PopupDiv3");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","10","350","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_value("20230401");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","183","350","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_value("20230420");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","166","350","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","15","403","430","280",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_border("1px solid #919396");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","10","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("cal_to","220","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","130","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","220","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Static("Static03","10","70","406","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Contents로 구성된 PopupDiv1을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","200","407","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Linked Form으로 구성된 PopupDiv2을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","320","408","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("PopupDiv를 이용하여 기간 달력 기능 구현. ");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","416","360","100","33",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv1.form
            obj = new Layout("default","",0,0,this.PopupDiv1.form,function(p){});
            this.PopupDiv1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv2
            obj = new Layout("default","",0,0,this.PopupDiv2.form,function(p){});
            this.PopupDiv2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv3.form
            obj = new Layout("default","",0,0,this.PopupDiv3.form,function(p){});
            this.PopupDiv3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Exe/Exe_Chap3_Div_PopupDiv_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Exe_Chap3_Div_PopupDiv.xfdl", function() {

        //팝업 div를 열리게 하는 기능 (폼에 있는 div)
        //popupdiv 외 다른 영역을 선택하면 사라짐
        this.btn_Exe1_1_onclick = function(obj,e)
        {
        	var nX = parseInt(0); //숫자는 팝업이 열릴때 나오는 좌표를 조정해줌
        	var nY = obj.height; //obj는 첫번째 기준이 되는 좌표 이다. var nY = 500; 이런식으로 조정 해줄 수 있다.

        	this.PopupDiv1.trackPopupByComponent(obj, nX, nY);
        };

        //url로 걸려있는 팝업은 div 통으로만 눌리고 내가 직접 그린 것 은 따로 따로 선택 가능


        //열린 팝업을 이용해서 값 대입 하는 기능
        this.PopupDiv1_btn_Exe1_Close_onclick = function(obj,e)
        {
        	//내가 그리드에 값 중 고른 값 추출
        	var sDept = this.Dataset1.getColumn(this.Dataset1.rowposition, "DEPT_NAME");
        	var sName = this.Dataset1.getColumn(this.Dataset1.rowposition, "FULL_NAME");
        	var sId = this.Dataset1.getColumn(this.Dataset1.rowposition, "EMPL_ID");

        	//선택한 값 로그
        	trace("sDept=" + sDept);
        	trace("sName=" + sName);
        	trace("sId=" + sId);

        	//컴포넌트에 값 입력 하게해준 것
        	this.edt_dept.set_value(sDept);
        	this.edt_name.set_value(sName);
        	this.edt_id.set_value(sId);

        	//팝업 닫는거
        	this.PopupDiv1.closePopup();
        };

        //링크로 되 어있는 DIV 로 값 받아오기
        this.btn_Exe2_1_onclick = function(obj,e)
        {
        	//항상 버튼이 기준
        	var nX = parseInt(0);
        	var nY = obj.height;

        	this.PopupDiv2.trackPopupByComponent(obj, nX, nY,
        		null, null, "fn_pDivCallback");	 //fn_pDivCallback 후 처리 함수
        };

        //URL팝업 디아브 안에서 값을 전달 받았을때 리던 하는 것
        this.fn_pDivCallback = function(objID, rtnValue)
        {
        	if(rtnValue == "")
        	{
        		return;
        	}
        	if( objID = "PopupDiv2")
        	{
        		trace(rtnValue);
        		//전달 받아온 값을 화면 칼럼에 보여주는 것
        		this.edt_dept2.set_value(rtnValue[0]);
        		this.edt_name2.set_value(rtnValue[1]);
        		this.edt_id2.set_value(rtnValue[2]);
        	}
        }

        //속성에 popuptype 을 none 으로 해주면 popup이 자동으로 안뜬다.
        //popupdiv를 띄우기 (캘린더) event에 ondropdown 선택해서
        this.cal_from_ondropdown = function(obj,e)
        {
        	var nX = parseInt(0);
        	var nY = obj.height;

        	this.PopupDiv3.trackPopupByComponent(obj, nX, nY);

        	//캘린더에 입력된 값을 팝업뛰운 캘린더에 반영해주는 코드
        	this.PopupDiv3.form.cal_from.set_value(this.cal_from.value);
        	this.PopupDiv3.form.cal_to.set_value(this.cal_to.value);
        };


        //캘린더팝업에 날짜 선택하고 컨펌 누르면 캘린더에 값 입력 됨
        this.PopupDiv3_btn_confirm_onclick = function(obj,e)
        {
        	var sFrom = this.PopupDiv3.form.cal_from.value;
        	var sTo = this.PopupDiv3.form.cal_to.value;

        	this.cal_from.set_value(sFrom);
        	this.cal_to.set_value(sTo);

        	this.PopupDiv3.closePopup(); //선택하면 닫음

        };

        //팝업 닫는 코드
        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup()
        };

        //event에 oncloseup 을 선택해서 만듬 시작 날짜 보다 끝나는 날짜가 더 앞날이면 알림 뜨게 만듬
        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.cal_from.value > this.cal_to.value)
        	{
        		alert("from 날짜가 to 날짜보다 작아야 합니다.");
        		this.cal_to.set_value("");
        	}
        };


        //그리드를 선택해서 event 속성에 oncelldblclick 에 더블클릭 후 이벤트를 주고 위에 만든 기능을 고대로 가져옴
        this.PopupDiv1_Grid00_oncelldblclick = function(obj,e)
        {
        	this.PopupDiv1_btn_Exe1_Close_onclick(); //위에 닫는 버튼 누르면 값 입력 되게 만든 기능을 고대로 가져옴
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.PopupDiv1.form.Grid00.addEventHandler("oncelldblclick",this.PopupDiv1_Grid00_oncelldblclick,this);
            this.PopupDiv1.form.btn_Exe1_Close.addEventHandler("onclick",this.PopupDiv1_btn_Exe1_Close_onclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.PopupDiv2.addEventHandler("oncloseup",this.PopupDiv2_oncloseup,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap3_Div_PopupDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
