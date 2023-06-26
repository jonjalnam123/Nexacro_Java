(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frnGrid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Education</Col><Col id=\"Column1\">Nexacro Platform</Col><Col id=\"Column2\">173,000</Col></Row><Row><Col id=\"Column0\">Education</Col><Col id=\"Column1\">Nexacro Platform</Col><Col id=\"Column2\">173,000</Col></Row><Row><Col id=\"Column0\">Education</Col><Col id=\"Column1\">Nexacro Platform</Col><Col id=\"Column2\">173,000</Col></Row><Row><Col id=\"Column0\">Education</Col><Col id=\"Column1\">Nexacro Platform</Col><Col id=\"Column2\">173,000</Col></Row><Row><Col id=\"Column0\">Education</Col><Col id=\"Column1\">Nexacro Platform</Col><Col id=\"Column2\">173,000</Col></Row><Row><Col id=\"Column0\">Education</Col><Col id=\"Column1\">Nexacro Platform</Col><Col id=\"Column2\">173,000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","38","50","452","276",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_fillareatype("controlrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"161\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"163\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"FullName\"/><Cell col=\"1\" rowspan=\"2\" text=\"제품일정\"><Cell text=\"제품일정\"/><Cell row=\"1\" text=\"교육일정\"/></Cell><Cell col=\"2\" colspan=\"2\" text=\"Column2\"/><Cell col=\"4\" rowspan=\"2\"><Cell text=\"Column4\"/><Cell row=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Cell><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell text=\"summary\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","43","333","678","167",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_cssclass("grd_WF_HP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","43","507","678","167",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"cell_WF_BY\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","560","84","115","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","560","126","115","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","588","206","98","97",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("grd_WF_HP");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
        this.loadIncludeScript("frnGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
