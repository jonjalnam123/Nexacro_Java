(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp06");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_EMP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR10</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR30</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP30</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN30</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR40</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR50</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">300</Col><Col id=\"CORP_DEPT_CD\">KR10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">300</Col><Col id=\"CORP_DEPT_CD\">KR30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00_00",null,"0","140","35","678",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10","650",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00",null,"35","140","35","678",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","10","650","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00",null,"640","140",null,"429","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","200","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("화면 유형 - Master DetailH");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00",null,"70","504",null,"10","10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("Dataset00");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"CORP_CODE\"/><Cell col=\"2\" text=\"CORP_NAME\"/><Cell col=\"3\" text=\"CORP_CEO\"/><Cell col=\"4\" text=\"CORP_EMP_NUM\"/><Cell col=\"5\" text=\"CORP_DEPT_CD\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:CORP_CODE\"/><Cell col=\"2\" text=\"bind:CORP_NAME\"/><Cell col=\"3\" text=\"bind:CORP_CEO\"/><Cell col=\"4\" text=\"bind:CORP_EMP_NUM\"/><Cell col=\"5\" text=\"bind:CORP_DEPT_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","70","504",null,null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"CORP_CODE\"/><Cell col=\"2\" text=\"CORP_NAME\"/><Cell col=\"3\" text=\"CORP_CEO\"/><Cell col=\"4\" text=\"CORP_EMP_NUM\"/><Cell col=\"5\" text=\"CORP_DEPT_CD\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:CORP_CODE\"/><Cell col=\"2\" text=\"bind:CORP_NAME\"/><Cell col=\"3\" text=\"bind:CORP_CEO\"/><Cell col=\"4\" text=\"bind:CORP_EMP_NUM\"/><Cell col=\"5\" text=\"bind:CORP_DEPT_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","13","40","177","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","514","75","10","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_02","461","41","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_02_00","490","41","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_02_00_00",null,"45","24","24","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_02_01","975","45","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Add");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Temp06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
