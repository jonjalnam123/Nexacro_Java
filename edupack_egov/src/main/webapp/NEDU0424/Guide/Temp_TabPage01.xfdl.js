(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TPLDSN005M00");
            this.set_titletext("인적정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1015,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMarried", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">기혼</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">미혼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBirth", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">음력</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">양력</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMilitary", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">군필</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">미필</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_00_00_01","795","148",null,"75","5",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_02","462","148","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","462","185","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","795","42",null,"38","5",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","462","42","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","462","5","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","129","79",null,"70","5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","129","185","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","129","148","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","129","42","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","129","5","210","38",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","5","5","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","5","42","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","338","148","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("경력시작일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","671","42","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("병역 구분");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta17","5","185","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("경력 일수");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta15","338","42","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("결혼기념일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta13","338","5","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta14","671","5","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("양력/음력 구분");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","5","148","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("최종학력");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta18","338","185","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("개발자 등급");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","5","79","125","70",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자택주소");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","134","10","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","467","10","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo01","136","47","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsMarried");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal01","467","47","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","134","153","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal02","467","153","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","134","190","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","467","190","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("cbo01");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo02","800","47","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("dsMilitary");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","134","116","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("\\");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","134","84","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("sta06_00","671","148","125","75",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("메모");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","800","153",null,"62","24",null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","466","116",null,"28","24",null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","283","84","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("우편번호 검색");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","795","5",null,"38","5",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","800","10","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsBirth");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1015,230,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divDetail.form.tab00.Tabpage1.form.cal00_00","value","dsList","Column3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.rdo00_00","value","dsInfo","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TPLDSN005M00_onload,this);
        };
        this.loadIncludeScript("Temp_TabPage01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
