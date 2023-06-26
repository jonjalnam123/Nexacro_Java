(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test2");
            this.set_titletext("XMLHttpRequest");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","10","60",null,"50","86.33%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("XML");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XMLHttpRequest.xfdl", function() {

        this.Button01_onclick = function(obj, e)
        {

        	var xmlhttp = new XMLHttpRequest();
        	var url = "http://demo.nexacro.com/edu/nexacro17/testData.xml";

        	xmlhttp.onreadystatechange = function() {
        		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        			var parseXml = xmlhttp.responseText;
        			trace(parseXml);
        		}
        	}
        	xmlhttp.open("GET", url, true);
        	xmlhttp.send();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("XMLHttpRequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
