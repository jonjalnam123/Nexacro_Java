(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_grid_108");
            this.set_titletext("New Form");
            this.set_scrollbartype("auto fixed");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Restaurant\" type=\"STRING\" size=\"256\"/><Column id=\"Service\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Restaurant\">Burgerking</Col><Col id=\"Service\">2</Col><Col id=\"Value\">3</Col></Row><Row><Col id=\"Restaurant\">McDonald&apos;s</Col><Col id=\"Value\">2</Col><Col id=\"Service\">1</Col></Row><Row><Col id=\"Restaurant\">SHAKE SHACK</Col><Col id=\"Value\">2</Col><Col id=\"Service\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","20","410","137",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"113\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Restaurant\"/><Cell col=\"1\" colspan=\"3\" text=\"Service\" textAlign=\"center\"/><Cell col=\"4\" colspan=\"3\" text=\"Value\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"1\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"2\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"3\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" text=\"1\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"2\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" text=\"3\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:Restaurant\"/><Cell col=\"1\" text=\"bind:Service\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\"/><Cell col=\"2\" text=\"bind:Service\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"2\"/><Cell col=\"3\" text=\"bind:Service\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"3\"/><Cell col=\"4\" text=\"bind:Value\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\"/><Cell col=\"5\" text=\"bind:Value\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"2\"/><Cell col=\"6\" text=\"bind:Value\" edittype=\"radioitem\" displaytype=\"radioitemcontrol\" radioitemcodevalue=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","20","167","249","103",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Restaurant\"/><Cell col=\"1\" text=\"Service\"/><Cell col=\"2\" text=\"Value\"/></Band><Band id=\"body\"><Cell text=\"bind:Restaurant\"/><Cell col=\"1\" text=\"bind:Service\"/><Cell col=\"2\" text=\"bind:Value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
            this.Dataset00.addEventHandler("oncolumnchanged",this.Dataset00_oncolumnchanged,this);
        };
        this.loadIncludeScript("Comp_Grid_radio.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
