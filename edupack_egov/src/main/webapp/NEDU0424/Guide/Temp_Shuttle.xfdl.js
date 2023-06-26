(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_Shuttle");
            this.set_titletext("Shuttle");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"11\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTH_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corp", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","10","114","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","149",null,"491","546",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_scrolltype("none");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"법인\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"사원번호\"/><Cell col=\"5\" text=\"입사일자\"/><Cell col=\"6\" text=\"연봉\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CORP_CODE\" combodataset=\"ds_corp\" combocodecol=\"CORP_CODE\" combodatacol=\"CORP_NAME\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:FULL_NAME\"/><Cell col=\"4\" text=\"bind:EMPL_ID\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" calendarpopupsize=\"156 179\"/><Cell col=\"6\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","763","-331","39","64",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("red");
            obj.set_text("h64");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GuideRed");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","-331","748","64",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","89","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","8","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","248","8","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨1");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","346","8","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","496","8","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("조회라벨2");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","594","8","140","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","0","33","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("조회라벨4");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit04","98","33","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","248","33","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("조회라벨5");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit05","346","33","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","496","33","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("조회라벨6");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit06","594","33","140","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_08","468","-315","29","12",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("red");
            obj.set_text("h4");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GuideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","103","-301","649","4",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GuideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","grd_list:10","349","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_RShuttle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list00","552","149",null,"491","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj.set_scrolltype("none");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"법인\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"사원번호\"/><Cell col=\"5\" text=\"입사일자\"/><Cell col=\"6\" text=\"연봉\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CORP_CODE\" combodataset=\"ds_corp\" combocodecol=\"CORP_CODE\" combodatacol=\"CORP_NAME\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:FULL_NAME\"/><Cell col=\"4\" text=\"bind:EMPL_ID\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" calendarpopupsize=\"156 179\"/><Cell col=\"6\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","grd_list:10","399","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_LShuttle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","213","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("화면 유형 - Shuttle");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","35",null,"79","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","8","54","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","78","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","406","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","328","8","54","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","656","8","54","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","710","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","328","41","78","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("입사일자");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","0","41","78","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("사원번호");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","406","41","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","78","41","123","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_type("string");
            obj.set_format("AA###");
            obj.set_value("KR040");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_28","200","41","28","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Find");
            obj.set_visible("true");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.div_search.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.div_search.form.Static02.addEventHandler("onclick",this.div_search_Static02_onclick,this);
            this.div_search.form.btn_28.addEventHandler("onclick",this.div_search_btn_28_onclick,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
        };
        this.loadIncludeScript("Temp_Shuttle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
