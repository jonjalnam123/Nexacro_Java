(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DivSample");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","50","10","240","212",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","17","65","110","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","60","29","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Div("div01","330","20","224","195",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div01");
            obj.set_background("aqua");
            obj.set_url("Cmm::CmmWebpage.xfdl");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","64","264","326","248",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new Button("btn00","52","44","165","76",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new Button("btn00","24","32","68","30",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo00","85","85","223","79",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("cbo00");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab01","422","272","258","234",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_preload("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab01);
            obj.set_text("Tabpage1");
            obj.set_url("EduBasic::Application/Application_variable_scope.xfdl");
            this.tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab01);
            obj.set_text("Tabpage2");
            obj.set_url("EduBasic::Comp/Comp_ImageViewer.xfdl");
            this.tab01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab01.Tabpage1
            obj = new Layout("default","",0,0,this.tab01.Tabpage1.form,function(p){});
            this.tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab01.Tabpage2
            obj = new Layout("default","",0,0,this.tab01.Tabpage2.form,function(p){});
            this.tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmWebpage.xfdl");
            this._addPreloadList("fdl","EduBasic::Application/Application_variable_scope.xfdl");
            this._addPreloadList("fdl","EduBasic::Comp/Comp_ImageViewer.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("DivSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
