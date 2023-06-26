(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frnStyle");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","50","50","379","119",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_cssclass("btn_TF_Save");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","464","49","192","81",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","50","181","379","119",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","561","162","131","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","236","352","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("DELETE");
            obj.set_cssclass("btn_TF_DELETE");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","460","360","206","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","349","504","199","170",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","110","350","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Home");
            obj.set_cssclass("btn_TF_Home");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","649","429","210","85",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button05");
            obj.set_cssclass("btn_TF_Save");
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
        this.registerScript("frnStyle.xfdl", function() {

        this.Button03_onclick = function(obj,e)
        {
        	this.alert("삭제")
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.alert("홈가기")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("frnStyle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
