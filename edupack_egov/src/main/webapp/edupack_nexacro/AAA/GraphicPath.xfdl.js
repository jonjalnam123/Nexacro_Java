(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GraphicPath");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","44","40","120","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("GraphicsLine");
            this.addChild(obj.name, obj);

            obj = new Graphics("Graphics00","94","114","513","235",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GraphicPath.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var objGLine = new nexacro.GraphicsLine();
        	this.Graphics00.addChild( "GraphicsLine00", objGLine );
        	objGLine.set_x(10);
        	objGLine.set_y(10);
        	objGLine.set_x2(50);
        	objGLine.set_y2(50);
        	objGLine.set_strokepen('1px solid red');
        	this.Graphics00.redraw();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("GraphicPath.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
