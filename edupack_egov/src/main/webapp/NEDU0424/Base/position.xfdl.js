(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("position");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","20","20","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","27","130","133","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기준");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","165","130","133","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","303","130","133","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","441","130","133","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","176","220","85","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","260","220","82","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","341","220","146","64",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","63","220","114","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("기준");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"24","136","48","19",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button05");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","978","84",null,"52","12",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button06");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","45","326","301","64",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("교육");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","Button07:28","316","330","69",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Button08");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","42","414","322","54",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","Button09:29","414","295","54",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Button10");
            this.addChild(obj.name, obj);

            obj = new Button("Button11",null,"170","130","44","440",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Button11");
            this.addChild(obj.name, obj);

            obj = new Button("Button11_00",null,"170","130","44","170",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Button11");
            this.addChild(obj.name, obj);

            obj = new Button("Button11_01",null,"170","130","44","305",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Button11");
            this.addChild(obj.name, obj);

            obj = new Button("Button11_02",null,"170","130","44","35",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Button11");
            this.addChild(obj.name, obj);

            obj = new Button("Button12",null,"326","130","40","26",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_00",null,"281","130","40","26",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_01",null,"371","130","40","26",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_02",null,"461","130","40","26",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("더 보기");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_03",null,"416","130","40","26",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("목록");
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
        this.registerScript("position.xfdl", function() {

        this.Button07_onclick = function(obj,e)
        {

        };

        this.Button09_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
        };
        this.loadIncludeScript("position.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
