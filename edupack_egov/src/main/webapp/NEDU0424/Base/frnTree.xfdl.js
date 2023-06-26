(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frnTree");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">NexacroTheme</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">blue</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">gray</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Theme</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">blue</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">xcss</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">image</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">gray</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">xcss</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">image</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">0424</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">xcss</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">image</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">XCSSResource</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">EDU0424</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">NexacroTheme</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">blue</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">gray</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Theme</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">blue</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">xcss</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">image</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">gray</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">xcss</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">image</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">0424</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">xcss</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">image</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">XCSSResource</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">EDU0424</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid01","60","22","200","268",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"45\"/></Rows><Band id=\"head\"><Cell text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","290","22","200","318",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"45\"/></Rows><Band id=\"head\"><Cell text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","518","21","202","312",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"192\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treestate=\"bind:level\" cssclass=\"expr:level == &quot;0&quot; ? &quot;cell_WF_TreeLevel10&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","741","24","185","304",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"163\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"52\"/></Rows><Band id=\"head\"><Cell text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\" cssclass=\"expr:level == &quot;0&quot; ? &quot;cell_WF_TreeLevel0&quot; : &quot;&quot;\"/></Band></Format></Formats>");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frnTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
