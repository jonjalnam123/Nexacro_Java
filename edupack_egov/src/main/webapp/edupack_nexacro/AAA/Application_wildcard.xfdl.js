(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wildcard");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">투비소프트</Col></Row><Row><Col id=\"NAME\">넥사크로</Col></Row><Row><Col id=\"NAME\">홍길동</Col></Row><Row><Col id=\"NAME\">bird123bird</Col></Row><Row><Col id=\"NAME\">123bird123bird123</Col></Row><Row><Col id=\"NAME\">s[pe]c 3 re$ex 6 cha^rs</Col></Row><Row><Col id=\"NAME\">should not match&quot;, &quot;should noo*oot match</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"WILDCARD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WILDCARD\">*비*</Col></Row><Row><Col id=\"WILDCARD\">넥사*</Col></Row><Row><Col id=\"WILDCARD\">*bird*</Col></Row><Row><Col id=\"WILDCARD\">bird*bird</Col></Row><Row><Col id=\"WILDCARD\">*bird*bird*</Col></Row><Row><Col id=\"WILDCARD\">s[pe]c*re$ex*cha^rs</Col></Row><Row><Col id=\"WILDCARD\">should noo*oot match</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","384","18","132","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Examples");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","35","356","471","304",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"281\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","36","80","467","250",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"WILDCARD\"/></Band><Band id=\"body\"><Cell text=\"bind:WILDCARD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","32","21","138","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("unfilter");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Application_wildcard.xfdl", function() {

        //Short code
        this.matchRuleShort = function(str, rule) {
          var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
          return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
        }


        this.Button00_onclick = function(obj,e)
        {

        //Examples
        	alert(
        		"1. " + this.matchRuleShort("bird123", "bird*") + "\n" +
        		"2. " + this.matchRuleShort("123bird", "*bird") + "\n" +
        		"3. " + this.matchRuleShort("123bird123", "*bird*") + "\n" +
        		"4. " + this.matchRuleShort("bird123bird", "bird*bird") + "\n" +
        		"5. " + this.matchRuleShort("123bird123bird123", "*bird*bird*") + "\n" +
        		"6. " + this.matchRuleShort("s[pe]c 3 re$ex 6 cha^rs", "s[pe]c*re$ex*cha^rs") + "\n" +
        		"7. " + this.matchRuleShort("should not match", "should noo*oot match") + "\n"
        	);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset00.filter("");
        };

        this.Dataset01_onrowposchanged = function(obj,e)
        {
        	var strText = "*bird";
        	this.Dataset00.filter("this.parent.matchRuleShort(NAME,'" + obj.getColumn(e.newrow,"WILDCARD") + "') == true ");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Dataset01.addEventHandler("onrowposchanged",this.Dataset01_onrowposchanged,this);
        };
        this.loadIncludeScript("Application_wildcard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
