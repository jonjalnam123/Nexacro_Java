(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleArrangement");
            this.set_titletext("아코디언 (Arrangement 방식)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"DECIMAL\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">kimyk</Col><Col id=\"DATE_FROM\">20171101</Col><Col id=\"DATE_TO\">20171130</Col><Col id=\"MAX_NUM\">10</Col><Col id=\"DECIMAL\">1.25</Col><Col id=\"COMPARE_1\">10</Col><Col id=\"COMPARE_2\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"INT\" size=\"256\"/><Column id=\"MIN_NUM\" type=\"INT\" size=\"256\"/><Column id=\"LENGTH_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"RANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample00", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","105","1018","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","80","28","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("접기");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","10","6","178","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("1) 타이틀 1");
            obj.set_cssclass("sta_WF_TitleType1");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","10","144","1018","180",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            obj.set_background("#fffaa6");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","6","178","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("컨텐츠");
            obj.set_cssclass("sta_WF_TitleType1");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","10","Div01:10",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"80","28","10","4",null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("접기");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","10","6","228","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("2) 타이틀 2");
            obj.set_cssclass("sta_WF_TitleType1");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","10","Div02:-1","1018","450",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Area");
            obj.set_background("#fffaa6");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","30",null,"40","30",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"80","28","10","4",null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("접기");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","10","6","178","28",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2-1) 타이틀 2-1");
            obj.set_cssclass("sta_WF_TitleType1");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","30","69",null,"150","30",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            obj.set_background("#bfffff");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","20","6","178","28",null,null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("컨텐츠 2-1");
            obj.set_cssclass("sta_WF_TitleType1");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","30","Div01:10",null,"40","30",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"80","28","10","4",null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("접기");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","10","6","178","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("2-2) 타이틀 2-2");
            obj.set_cssclass("sta_WF_TitleType1");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","30","Div02:-1",null,"150","30",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Area");
            obj.set_background("#bfffff");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","20","6","178","28",null,null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("컨텐츠 2-2");
            obj.set_cssclass("sta_WF_TitleType1");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","281","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아코디언 (상대좌표 지정)");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"60","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1. Design탭에서 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정한다.\r\n2. 숨길때 Div의 height를 0 으로 지정하고, 펼치때는 원래 Div의 height로 지정한다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div00.form
            obj = new Layout("default","",0,0,this.Div03.form.Div00.form,function(p){});
            this.Div03.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div01.form
            obj = new Layout("default","",0,0,this.Div03.form.Div01.form,function(p){});
            this.Div03.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div02.form
            obj = new Layout("default","",0,0,this.Div03.form.Div02.form,function(p){});
            this.Div03.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form.Div03.form,function(p){});
            this.Div03.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

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
        this.registerScript("SampleArrangement.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 연동 > 아코디언
        *  @FileName 	SampleArrangement.xfdl
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
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	this.Div02_Button00_onclick(this.Div02.form.Button00,{});
        };

        this.Div00_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "접기")
        	{
        		this.Div01.setOffsetHeight(0);
        		obj.set_text("펼치기");
        	}
        	else
        	{
        		this.Div01.setOffsetHeight(180);
        		obj.set_text("접기");
        	}
        	this.resetScroll();
        };

        this.Div02_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "접기")
        	{
        		this.Div03.setOffsetHeight(0);
        		obj.set_text("펼치기");
        	}
        	else
        	{
        		this.Div03.setOffsetHeight(450);
        		obj.set_text("접기");
        	}
        	this.resetScroll();
        };

        this.Div03_Div00_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "접기")
        	{
        		this.Div03.form.Div01.setOffsetHeight(0);
        		obj.set_text("펼치기");
        	}
        	else
        	{
        		this.Div03.form.Div01.setOffsetHeight(150);
        		obj.set_text("접기");
        	}
        	this.Div03.form.resetScroll();
        };

        this.Div03_Div02_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "접기")
        	{
        		this.Div03.form.Div03.setOffsetHeight(0);
        		obj.set_text("펼치기");
        	}
        	else
        	{
        		this.Div03.form.Div03.setOffsetHeight(150);
        		obj.set_text("접기");
        	}
        	this.Div03.form.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div02.form.Button00.addEventHandler("onclick",this.Div02_Button00_onclick,this);
            this.Div03.form.Div00.form.Button00.addEventHandler("onclick",this.Div03_Div00_Button00_onclick,this);
            this.Div03.form.Div02.form.Button00.addEventHandler("onclick",this.Div03_Div02_Button00_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
        };
        this.loadIncludeScript("SampleArrangement.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
