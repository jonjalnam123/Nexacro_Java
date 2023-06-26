(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_dataobject_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            obj.set_preload("false");
            obj._setContents({
            });
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.data[*]");
            obj._setContents("<ColumnInfo><Column id=\"id\" datapath=\"@.id\" type=\"STRING\" size=\"256\"/><Column id=\"employee_name\" datapath=\"@.employee_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee_salary\" datapath=\"@.employee_salary\" type=\"STRING\" size=\"256\"/><Column id=\"employee_age\" datapath=\"@.employee_age\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","40","33","550","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"employee_name\"/><Cell col=\"2\" text=\"employee_salary\"/><Cell col=\"3\" text=\"employee_age\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:employee_name\"/><Cell col=\"2\" text=\"bind:employee_salary\"/><Cell col=\"3\" text=\"bind:employee_age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","620","30","100","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
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
        this.registerScript("DataObject_Sample2.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.DataObject00.set_url("http://demo.nexacro.com/developer_guide/17/FileSample/data_sample_dataobject_01.json");
        	this.DataObject00.load();
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset00.clearData();
        };

        this.DataObject00_onload = function(obj,e)
        {
        	trace("onload");
        };

        this.DataObject00_onerror = function(obj,e)
        {
        	trace("onerror");
        };

        this.DataObject00_onsuccess = function(obj,e)
        {
        	trace("onsuccess");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.DataObject00.addEventHandler("onload",this.DataObject00_onload,this);
            this.DataObject00.addEventHandler("onerror",this.DataObject00_onerror,this);
            this.DataObject00.addEventHandler("onsuccess",this.DataObject00_onsuccess,this);
        };
        this.loadIncludeScript("DataObject_Sample2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
