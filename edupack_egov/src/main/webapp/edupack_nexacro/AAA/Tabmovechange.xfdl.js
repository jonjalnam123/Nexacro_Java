(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NX17");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1110,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","23","60","1057","288",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("TAB1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("TabPage1");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("TAB222");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("TabPage2");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("TAB3333333");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("TabPage3");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("TAB444444444444");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("TabPage4");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("TAB55");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("TabPage5");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Tab00);
            obj.set_text("TAB666666666666");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_text("TabPage6");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.Tab00);
            obj.set_text("TAB777777");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage7.form);
            obj.set_taborder("0");
            obj.set_text("TabPage7");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage7.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.Tab00);
            obj.set_text("TAB888888888888888888888888");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","66","70","223","58",null,null,null,null,null,null,this.Tab00.Tabpage8.form);
            obj.set_taborder("0");
            obj.set_text("TabPage8");
            obj.set_font("16pt \"Arial\"");
            this.Tab00.Tabpage8.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage5.form,function(p){});
            this.Tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage6.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage6.form,function(p){});
            this.Tab00.Tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage7.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage7.form,function(p){});
            this.Tab00.Tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage8.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage8.form,function(p){});
            this.Tab00.Tabpage8.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1110,440,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Tabmovechange.xfdl", function() {

        var dragTab, dropTab;

        this.Tab00_ondrag = function(obj,e)
        {
        	dragTab = obj.tabindex;
        	return true;
        };

        this.Tab00_ondrop = function(obj,e)
        {
        	dropTab = this.Tab00.getIndex(e.canvasx, e.canvasy);
        	this.Tab00.moveTabpage(dragTab, dropTab);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.NX17_ontimer,this);
            this.Tab00.addEventHandler("ondrag",this.Tab00_ondrag,this);
            this.Tab00.addEventHandler("ondrop",this.Tab00_ondrop,this);
            this.Tab00.Tabpage4.form.Static00.addEventHandler("onclick",this.Tab00_Tabpage4_Static00_onclick,this);
        };
        this.loadIncludeScript("Tabmovechange.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
