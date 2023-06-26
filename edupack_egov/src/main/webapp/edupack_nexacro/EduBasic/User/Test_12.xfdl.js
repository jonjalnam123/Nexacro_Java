(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Test_12");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj.set_keystring("G:-p_category");
            obj._setContents("<ColumnInfo><Column id=\"p_id\" type=\"STRING\" size=\"256\"/><Column id=\"p_name\" type=\"STRING\" size=\"256\"/><Column id=\"p_price\" type=\"INT\" size=\"256\"/><Column id=\"p_category\" type=\"STRING\" size=\"256\"/><Column id=\"p_count\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"p_id\">p-3927</Col><Col id=\"p_name\">Galaxy Tab 6</Col><Col id=\"p_price\">700000</Col><Col id=\"p_category\">01</Col><Col id=\"p_count\">27</Col></Row><Row><Col id=\"p_id\">p-3949</Col><Col id=\"p_name\">Apple Watch 3</Col><Col id=\"p_price\">500000</Col><Col id=\"p_category\">01</Col><Col id=\"p_count\">15</Col></Row><Row><Col id=\"p_id\">p-1423</Col><Col id=\"p_name\">Starbucks Tumbler</Col><Col id=\"p_price\">34000</Col><Col id=\"p_category\">03</Col><Col id=\"p_count\">9</Col></Row><Row><Col id=\"p_id\">p-2384</Col><Col id=\"p_name\">BullsOne</Col><Col id=\"p_price\">20000</Col><Col id=\"p_category\">02</Col><Col id=\"p_count\">49</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"c_id\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"c_id\">01</Col><Col id=\"c_name\">lectronic</Col></Row><Row><Col id=\"c_id\">02</Col><Col id=\"c_name\">Starbucks</Col></Row><Row><Col id=\"c_id\">03</Col><Col id=\"c_name\">Car Item</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","60","80","680","267",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_product");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"p_id\"/><Cell col=\"1\" text=\"p_name\"/><Cell col=\"2\" text=\"p_price\"/><Cell col=\"3\" text=\"p_category\"/><Cell col=\"4\" text=\"p_count\"/><Cell col=\"5\" text=\"p_sum\"/></Band><Band id=\"body\"><Cell text=\"bind:p_id\" textAlign=\"left\" displaytype=\"text\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:p_name\" textAlign=\"left\" displaytype=\"text\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:p_price\" displaytype=\"number\" textAlign=\"right\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:p_category\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_category\" combocodecol=\"c_id\" combodatacol=\"c_name\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"4\" text=\"bind:p_count\" displaytype=\"number\" textAlign=\"right\" suppress=\"1\"/><Cell col=\"5\" text=\"expr:p_price * p_count\" displaytype=\"number\" textAlign=\"right\" suppress=\"1\"/></Band><Band id=\"summary\"><Cell background=\"yellow\"/><Cell col=\"1\" background=\"yellow\"/><Cell col=\"2\" background=\"yellow\"/><Cell col=\"3\" background=\"yellow\"/><Cell col=\"4\" text=\"Total\" background=\"yellow\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;p_price * p_count&quot;);\" displaytype=\"number\" textAlign=\"right\" background=\"yellow\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","532","28","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","662","28","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","650","364","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Save");
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
        this.registerScript("Test_12.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var Add = this.ds_product.addRow();
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	var Del = this.ds_product.deleteRow(this.ds_product.rowposition);
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	this.transaction(
        	"exam", //서비스 구분자
        	"Eclipse::/exam.nex", //호출할 URL 서비스 주소 (GET 방식 할라면 여기다 ?a=b&c=d)
        	"in_ds=ds_product:U", //저장시 server ds = client ds
        	"", //조회시 client ds = server ds
        	"" , //전달값 (POST 방식으로 할라면 여기다 c=d) , nexacro.wrapQuote("c e") 예외 상황이 발생하지 않도록 꼭 씀
        	"fn_Callback"); //해당 서비스의 끝 callback 함수
        };

        this.rowCount = 0; //서버에서 추가 파라미터가 필요하면 초기화 해야한다.
        this.fn_Callback = function (id,code,errMsg)
        {
        	this.alert("Complete");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
        };
        this.loadIncludeScript("Test_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
