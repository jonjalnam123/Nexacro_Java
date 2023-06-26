(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Paging_Sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn00","60","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Paging");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","90","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Paging");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01","120","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Paging");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","0","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PagingDPrev");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","30","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PagingPrev");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_01","240","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_PagingNext");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","270","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_PagingDNext");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,30,this,function(p){});
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
        this.loadIncludeScript("Temp_List Paging_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
