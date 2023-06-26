(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TPLDSN005M00");
            this.set_titletext("인사서류첨부");
            if (Form == this.constructor)
            {
                this._setFormPosition(1015,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">졸업증명서</Col><Col id=\"Column1\">투비대학교 졸업증명서.pdf</Col><Col id=\"Column2\">삭제</Col><Col id=\"Column3\">내려받기</Col></Row><Row><Col id=\"Column0\">자격증</Col><Col id=\"Column1\">정보처리가사 자격증</Col><Col id=\"Column2\">삭제</Col><Col id=\"Column3\">내려받기</Col></Row><Row><Col id=\"Column0\">자격증</Col><Col id=\"Column1\">컴퓨터 활용능력 자격증</Col><Col id=\"Column2\">삭제</Col><Col id=\"Column3\">내려받기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","5","35",null,"190","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"98\"/><Column size=\"314\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"파일구분\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00",null,"5","80","24","90",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_FrmSub");
            obj.set_text("파일선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"5","80","24","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_FrmSub");
            obj.set_text("내려받기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1015,230,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divDetail.form.tab00.Tabpage1.form.cal00_00","value","dsList","Column3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TPLDSN005M00_onload,this);
        };
        this.loadIncludeScript("Temp_TabPage05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
