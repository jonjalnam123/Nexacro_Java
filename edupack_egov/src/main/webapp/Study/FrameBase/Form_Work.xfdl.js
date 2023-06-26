(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMember", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","694","61","493","189",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","140","620","358",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMember");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"USERID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"PHONE\"/></Band><Band id=\"body\"><Cell text=\"bind:USERID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:PHONE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.alert("안녕");

        	this.ufnTransaction("MemberList"
        		, "nexa/MemberList.do"
        		, "" //저장
        		, "dsMember=dsMember" //조회
        		, ""// 파라미터 값 전달.
        		, "fnCallback")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
