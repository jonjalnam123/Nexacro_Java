(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("roundDight");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnBasic","32","25","122","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btnBasic");
            this.addChild(obj.name, obj);

            obj = new Button("btnRound","32","77","120","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("roundDight");
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
        this.registerScript("roundDight.xfdl", function() {

        this.roundDight = function(n, digits)
        {
        	if (digits >= 0)
        	{
        		return parseFloat(n.toFixed(digits));
        	} else {
        		digits = Math.pow(10, digits);
        		var t = Math.round(n * digits); // digits;
        		return parseFloat(t.toFixed(0));
        	}
        }
        this.btnBasic_onclick = function(obj,e)
        {
        	trace(1000/3);
        };

        this.btnRound_onclick = function(obj,e)
        {
        	trace(this.roundDight(1000/3, 1));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnBasic.addEventHandler("onclick",this.btnBasic_onclick,this);
            this.btnRound.addEventHandler("onclick",this.btnRound_onclick,this);
        };
        this.loadIncludeScript("roundDight.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
