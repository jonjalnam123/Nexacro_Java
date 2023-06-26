(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_200721");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","229","65","3","73",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("2px solid");
            obj.set_cursor("ew-resize");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","57","65",null,null,"Static00:4","450",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Div_Resize.xfdl", function() {

        this.test_200721_ondrag = function(obj,e)
        {
        	if(e.fromreferenceobject instanceof Static)
        	{
        		e.set_userdata(e.fromreferenceobject.name);
        		return true;
        	}
        };

        this.test_200721_ondragmove = function(obj,e)
        {
        	if(e.userdata == "Static00")
        	{
        		this.Static00.set_left(e.clientx);
        		//this.Static01.set_width(this.Div00.getOffsetWidth());
        	}
        	else if(e.userdata == "Static01")
        	{
        	//	this.Static01.set_top(e.clienty);
        	//	this.Static00.set_height(this.Div00.getOffsetHeight());
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrag",this.test_200721_ondrag,this);
            this.addEventHandler("ondragmove",this.test_200721_ondragmove,this);
        };
        this.loadIncludeScript("Div_Resize.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
