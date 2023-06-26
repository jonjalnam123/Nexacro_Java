(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frnListBox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">asd</Col><Col id=\"DEPT_ID\">1</Col></Row><Row><Col id=\"code\">asdqwe</Col><Col id=\"DEPT_ID\">2</Col></Row><Row><Col id=\"code\">qwe</Col><Col id=\"DEPT_ID\">3</Col></Row><Row><Col id=\"code\">cvx</Col><Col id=\"DEPT_ID\">4</Col></Row><Row><Col id=\"code\">fg</Col><Col id=\"DEPT_ID\">5</Col></Row><Row><Col id=\"code\">vbn</Col><Col id=\"DEPT_ID\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ListBox("ListBox00","30","20","277","208",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">컨설팅팀</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">인사팀</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">교육팀</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">영업팀</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">인사팀</Col><Col id=\"codecolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","400","390","371","255",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("투피소프트투피소프트투피소프트투피소프트투피소프트투피소프트투피소프트투피소프트투피소프트투피소프트투피소프트");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","105","389","239","180",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00_00","317","20","277","208",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_ListBox0");
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var ListBox00_00_innerdataset = new nexacro.NormalDataset("ListBox00_00_innerdataset", obj);
            ListBox00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">컨설팅팀</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">인사팀</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">교육팀</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">영업팀</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">인사팀</Col><Col id=\"codecolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00_00_00","603","20","277","208",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_itemheight("50");
            var ListBox00_00_00_innerdataset = new nexacro.NormalDataset("ListBox00_00_00_innerdataset", obj);
            ListBox00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">컨설팅팀</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">인사팀</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">교육팀</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">영업팀</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">인사팀</Col><Col id=\"codecolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_00_00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ListBox00","value","Dataset00","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ListBox00_00","value","Dataset00","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ListBox00_00_00","value","Dataset00","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frnListBox.xfdl", function() {

        this.ListBox00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ListBox00.addEventHandler("onitemchanged",this.ListBox00_onitemchanged,this);
        };
        this.loadIncludeScript("frnListBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
