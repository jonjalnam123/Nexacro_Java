(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frnImage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","63","30","135","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_background("url(\'theme://images/btn_WF_Edge.png\') repeat bottom");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","590","21","150","118",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            obj.set_edge("url(\'theme://images/btn_WF_Edge.png\') 0px 0px");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","215","16","178","93",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            obj.set_icon("url(\'theme://images/btn_MDI_Home.png\')");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 20px");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","64","124","165","88",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            obj.set_background("url(\'theme://images/btn_WF_Edge.png\') repeat-x left top");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","259","119","261","98",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("url(\'theme://images/sta_TF_NexacroN.png\') no-repeat center center white");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","60","240","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button03");
            obj.set_background("url(\'theme://images/sta_WF_NexacroIcon.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","390","240","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button03");
            obj.set_background("url(\'theme://images/sta_WF_NexacroIcon.png\') no-repeat center center /cover");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","50","460","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button03");
            obj.set_background("url(\'theme://images/sta_WF_NexacroIcon.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_01","390","460","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button03");
            obj.set_background("url(\'theme://images/sta_WF_NexacroIcon.png\') no-repeat center center /100% 100%");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","435","30","135","68",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button00");
            obj.set_icon("url(\'theme://images/btn_MDI_Home.png\')");
            obj.set_iconPosition("right");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","750","22","150","118",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button00");
            obj.set_edge("url(\'theme://images/btn_WF_Edge.png\') 10px 10px");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","750","153","150","118",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Button00");
            obj.set_edge("url(\'theme://images/btn_WF_Edge.png\') 3px 3px");
            obj.set_border("0px none");
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
        this.loadIncludeScript("frnImage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
