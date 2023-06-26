(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ReSize");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn00","150","56","9.38%","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","btn00:50","56","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","156","104","34","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("sta00");
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
        this.registerScript("ReSize.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("ReSize.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
