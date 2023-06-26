(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QuickCode_Temp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("View");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FreeFormView");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new View("View00","10","74","980","226",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("View00");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.View00
            obj = new Layout("default","",0,0,this.View00.form,function(p){});
            this.View00.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("QuickCode_Temp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
