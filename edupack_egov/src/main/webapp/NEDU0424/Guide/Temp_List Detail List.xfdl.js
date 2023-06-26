(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_ListDetail");
            this.set_titletext("ListDetailList");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"GROUP_CODE\">A100</Col><Col id=\"GROUP_NAME\">Department</Col><Col id=\"REMARK\">Management of department code information</Col><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"STATUS\">Y</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"GROUP_CODE\">A200</Col><Col id=\"GROUP_NAME\">Products</Col><Col id=\"REMARK\">Product code management</Col><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"STATUS\">Y</Col><Col id=\"UPDATE_DATE\">20220603121023</Col><Col id=\"UPDATE_EMP_NO\">admin</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"GROUP_CODE\">A300</Col><Col id=\"GROUP_NAME\">Family</Col><Col id=\"REMARK\">Family relationship</Col><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"STATUS\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">100</Col><Col id=\"NAME\">Education(KR)</Col><Col id=\"REMARK\">Education</Col><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"UPDATE_DATE\">20220602121023</Col><Col id=\"UPDATE_EMP_NO\">guest</Col><Col id=\"STATUS\">Y</Col><Col id=\"GROUP_CODE\">A100</Col></Row><Row><Col id=\"CODE\">200</Col><Col id=\"NAME\">Marketing(KR)</Col><Col id=\"REMARK\"/><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"UPDATE_DATE\">20220602121023</Col><Col id=\"UPDATE_EMP_NO\">guest</Col><Col id=\"STATUS\">Y</Col><Col id=\"GROUP_CODE\">A100</Col></Row><Row><Col id=\"CODE\">300</Col><Col id=\"NAME\">Sales(KR)</Col><Col id=\"REMARK\"/><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"UPDATE_DATE\">20220602121023</Col><Col id=\"UPDATE_EMP_NO\">guest</Col><Col id=\"STATUS\">N</Col><Col id=\"GROUP_CODE\">A100</Col></Row><Row><Col id=\"CODE\">400</Col><Col id=\"NAME\">Education(JP)</Col><Col id=\"REMARK\"/><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"UPDATE_DATE\">20220602121023</Col><Col id=\"UPDATE_EMP_NO\">test</Col><Col id=\"STATUS\">Y</Col><Col id=\"GROUP_CODE\">A100</Col></Row><Row><Col id=\"CODE\">500</Col><Col id=\"NAME\">Sales(JP)</Col><Col id=\"REMARK\"/><Col id=\"INSERT_DT\">20220601121023</Col><Col id=\"INSERT_EMP_NO\">guest</Col><Col id=\"UPDATE_DATE\">20220602121023</Col><Col id=\"UPDATE_EMP_NO\">guest</Col><Col id=\"STATUS\">Y</Col><Col id=\"GROUP_CODE\">A100</Col></Row><Row><Col id=\"NAME\">Education(CN)</Col><Col id=\"GROUP_CODE\">A100</Col><Col id=\"CODE\">600</Col></Row><Row><Col id=\"NAME\">Marketing(CN)</Col><Col id=\"GROUP_CODE\">A100</Col><Col id=\"CODE\">700</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GroupCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A100</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">A200</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">A300</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GroupName", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Department</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Products</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">Family</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","116",null,null,"690","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("dsGroup");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"126\"/><Column size=\"154\"/><Column size=\"83\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그룹코드\"/><Cell col=\"2\" text=\"그룹명칭\"/><Cell col=\"3\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:GROUP_CODE\"/><Cell col=\"2\" text=\"bind:GROUP_NAME\"/><Cell col=\"3\" text=\"bind:STATUS\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","Grid00:10","81","670","221",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","133","35",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","35","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03","119","35","216","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03_00","453","35","217","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","334","35","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("그룹명칭");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","72","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("간략설명");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03_01","119","72","551","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt01_00","458","40","171","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt01","125","77","504","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","0","109","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("입력일시");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03_02","119","109","216","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","334","109","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03_00_00","453","109","217","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03_02_00","119","146","216","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","334","146","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03_00_00_00","453","146","217","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00_02_00","0","146","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt03","458","114","171","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("cal00","125","151","171","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt03_00","458","151","171","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03_00_02_00_00","0","183","120","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_03_02_00_00","119","183","551","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cbo00","125","188","171","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("cal01","125","114","171","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","125","40","171","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_type("string");
            obj.set_format("A###");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("div_search","10","35",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Static("Static03","0","8","78","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("그룹코드");
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
            obj.set_innerdataset("ds_GroupCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","406","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_GroupName");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","328","8","78","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("그룹명칭");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","656","8","66","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("작성자");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","722","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","213","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("화면 유형- List Detail List");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","81","76","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","Grid00:10","337",null,"303","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("dsCode");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"84\"/><Column size=\"156\"/><Column size=\"182\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"담당업무\"/><Cell col=\"4\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:GROUP_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:REMARK\"/><Cell col=\"4\" text=\"bind:STATUS\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","Grid00:10","302","76","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divDetail.form.edt01_00","value","dsGroup","GROUP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.edt01","value","dsGroup","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edt03","value","dsGroup","INSERT_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.cal00","value","dsGroup","UPDATE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edt03_00","value","dsGroup","UPDATE_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.cal01","value","dsGroup","INSERT_DT");
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
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
        };
        this.loadIncludeScript("Temp_List Detail List.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
