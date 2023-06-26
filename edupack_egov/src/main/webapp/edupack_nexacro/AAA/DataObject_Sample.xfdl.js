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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","9.47%","102",null,"50","78.81%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("JSON");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","9.47%","184",null,"50","78.81%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("XML");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","235","100","431","269",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
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
        this.registerScript("DataObject_Sample.xfdl", function() {

        this.Button00_onclick = function(obj, e)
        {
        	this.oReq = new XMLHttpRequest();
        	this.addChild("XMLHttpRequest", this.oReq);

        //	var url = "http://172.10.13.54:8080/XP/Accessibility.json";
        	var url = "http://support.tobesoft.co.kr/Next_JSP/nexacro/Service/json.jsp";
        	this.oReq.onreadystatechange = this.reqListener;
        	this.oReq.open("GET", url, false);
        	this.oReq.send();

        	//this.fn_addData(this.Dataset00, this.retHttpString);
        	this.Grid00.createFormat();
        }

        this.reqListener = function() {

        		if (this.readyState == 4 && this.status == 200) {
        //			var parseXml = this.responseText;
        			var revcJsonObj = JSON.parse(this.responseText);
        			this.parent.fn_createDatasetColInfo(this.parent.Dataset00);
        			this.parent.fn_addData(this.parent.Dataset00,revcJsonObj );
        		}
        }

        // dataset 초기화
        this.fn_createDatasetColInfo = function(ds)
        {
        	var nIndex = ds.addColumn( "name", "string" );
        	nIndex = ds.addColumn( "surname", "string", 120 );
        };

        // data processing
        this.fn_addData = function(ds, jsonObj)
        {
        	for (var j = 0 ; j < jsonObj.length ; j++)
        	{
        		jObj = jsonObj[j];
        		var rIdx = ds.addRow();
        		ds.setColumn(rIdx, "name", jObj.name);
        		ds.setColumn(rIdx, "surname", jObj.surname);
        	}
        };

        this.Button01_onclick = function(obj, e)
        {
        	var xmlhttp = new XMLHttpRequest();
        	var url = "http://localhost:8088/edusys/testData.xml";

        	xmlhttp.onreadystatechange = function()
        	{
        	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        			var parseXml = xmlhttp.responseText;

        			trace("parseXml >> "+parseXml);

        		}
        	}
        	xmlhttp.open("GET", url, true);
        	xmlhttp.send();

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("DataObject_Sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
