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
            this.set_titletext("학력정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1015,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListTab1", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADUATION_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"GRADUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRADUATION_YEAR\">19930203</Col><Col id=\"SCHOOL_NAME\">ㅇㅇ대학교</Col><Col id=\"MAJOR\">컴퓨터과학과</Col><Col id=\"GRADUATION\">졸업</Col><Col id=\"ADDRESS\">서울시 </Col></Row><Row><Col id=\"GRADUATION_YEAR\">20020205</Col><Col id=\"SCHOOL_NAME\">ㅇㅇ고등학교</Col><Col id=\"MAJOR\">상과</Col><Col id=\"GRADUATION\">졸업</Col><Col id=\"ADDRESS\">서울특별시</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","5","35",null,"189","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsListTab1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"134\"/><Column size=\"167\"/><Column size=\"139\"/><Column size=\"76\"/><Column size=\"182\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"졸업년월\"/><Cell col=\"1\" text=\"학교명\"/><Cell col=\"2\" text=\"전공\"/><Cell col=\"3\" text=\"졸업여부\"/><Cell col=\"4\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:GRADUATION_YEAR\"/><Cell col=\"1\" text=\"bind:SCHOOL_NAME\"/><Cell col=\"2\" text=\"bind:MAJOR\"/><Cell col=\"3\" text=\"bind:GRADUATION\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ADDRESS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn01",null,"5","24","24","35",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"5","24","24","6",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Del");
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
        this.loadIncludeScript("Temp_TabPage02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
