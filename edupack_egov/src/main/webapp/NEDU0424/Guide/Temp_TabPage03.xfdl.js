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
            this.set_titletext("경력사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1015,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListTab2", this);
            obj._setContents("<ColumnInfo><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FROM_DT\">19950101</Col><Col id=\"TO_DT\">20050431</Col><Col id=\"COMPANY_NAME\">@@정보통신</Col><Col id=\"POSITION\">과장</Col><Col id=\"REMARK\">개발</Col></Row><Row><Col id=\"FROM_DT\">20050501</Col><Col id=\"TO_DT\"/><Col id=\"COMPANY_NAME\">투비소프트</Col><Col id=\"POSITION\">수석</Col><Col id=\"REMARK\">교육</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","5","35",null,"190","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsListTab2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"167\"/><Column size=\"139\"/><Column size=\"182\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"재직기간\"/><Cell col=\"2\" rowspan=\"2\" text=\"재직회사\"/><Cell col=\"3\" rowspan=\"2\" text=\"직위\"/><Cell col=\"4\" rowspan=\"2\" text=\"담당업무\"/><Cell row=\"1\" text=\"입사일\"/><Cell row=\"1\" col=\"1\" text=\"퇴사일\"/></Band><Band id=\"body\"><Cell text=\"bind:FROM_DT\"/><Cell col=\"1\" text=\"bind:TO_DT\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:REMARK\"/></Band></Format></Formats>");
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
        this.loadIncludeScript("Temp_TabPage03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
