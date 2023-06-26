(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_Cell_FixSize_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(780,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"AA\" type=\"STRING\" size=\"256\"/><Column id=\"BB\" type=\"STRING\" size=\"256\"/><Column id=\"CC\" type=\"STRING\" size=\"256\"/><Column id=\"DD\" type=\"STRING\" size=\"256\"/><Column id=\"EE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CC\">코드</Col><Col id=\"DD\">서울</Col></Row><Row><Col id=\"CC\">코드</Col><Col id=\"DD\">서울</Col></Row><Row><Col id=\"CC\">코드</Col><Col id=\"DD\">서울</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","8","42",null,"206","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"172\"/><Column size=\"174\"/><Column size=\"59\"/><Column size=\"53\"/><Column size=\"263\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"AA\"/><Cell col=\"1\" text=\"BB\"/><Cell col=\"2\" text=\"CC\"/><Cell col=\"3\" text=\"DD\"/><Cell col=\"4\" text=\"EE\"/></Band><Band id=\"body\"><Cell text=\"bind:AA\"/><Cell col=\"1\" text=\"bind:BB\"/><Cell col=\"2\" text=\"bind:CC\"/><Cell col=\"3\" text=\"bind:DD\"/><Cell col=\"4\" text=\"bind:EE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","13","365","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("* Grid 중간에 있는 컬럼 CC, DD는 Resize에서 제외 하기");
            obj.set_background("antiquewhite");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",780,260,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Grid_Cell_FixSize_01.xfdl", function() {
        this.fv_ccCell;
        this.fv_ccSize;
        this.fv_ddCell;
        this.fv_ddSize;
        this.gridCellFixSize_onload = function(obj,e)
        {
        	this.fv_ccCell = this.Grid00.getBindCellIndex("body", "CC");
        	this.fv_ddCell = this.Grid00.getBindCellIndex("body", "DD");
        	this.fv_ccSize = this.Grid00.getFormatColProperty(this.fv_ccCell, "size");
        	this.fv_ddSize = this.Grid00.getFormatColProperty(this.fv_ddCell, "size");
        };

        this.Grid00_onsize = function(obj,e)
        {
        //	obj.setFormatColProperty(this.fv_ccCell, "size", this.fv_ccSize);
        //	obj.setFormatColProperty(this.fv_ddCell, "size", this.fv_ccSize);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gridCellFixSize_onload,this);
            this.Grid00.addEventHandler("onsize",this.Grid00_onsize,this);
        };
        this.loadIncludeScript("Grid_Cell_FixSize_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
