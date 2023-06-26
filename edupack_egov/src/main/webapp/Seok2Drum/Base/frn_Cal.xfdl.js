(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frn_Cal");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00","145","60","245","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","432","64","304","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","135","170","245","240",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_usetrailingday("true");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","736","250","245","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_usetrailingday("true");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01","400","170","245","240",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_usetrailingday("true");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","665","357","231","65",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_weekformat("S M T W T F S");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","140","480","274","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("ID를 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","424","480","274","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("123456789000");
            obj.set_textAlign("left");
            obj.set_text("123456789000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","265","592","285","68",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_format("AAAA-####");
            obj.set_type("string");
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
        this.registerScript("frn_Cal.xfdl", function() {

        this.MaskEdit00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frn_Cal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
