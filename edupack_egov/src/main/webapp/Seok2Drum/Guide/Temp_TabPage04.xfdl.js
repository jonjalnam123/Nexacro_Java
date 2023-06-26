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
            this.set_titletext("발령사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1015,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListTab4", this);
            obj._setContents("<ColumnInfo><Column id=\"TASK\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"OS\" type=\"STRING\" size=\"256\"/><Column id=\"DEVELOPER_LANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DBMS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TASK\">마이플랫폼 CS/센터 기술지원</Col><Col id=\"FROM_DT\">20100102</Col><Col id=\"CUSTOMER_NAME\">한국전력</Col><Col id=\"COMPANY\">투비소프트</Col><Col id=\"TO_DT\">20120502</Col><Col id=\"POSITION\">기술지원</Col><Col id=\"OS\">WIndow</Col><Col id=\"DEVELOPER_LANGUAGE\">MiPlatform</Col><Col id=\"DBMS\">ORACLE</Col><Col id=\"TOOL\">PID</Col></Row><Row><Col id=\"TASK\">ABC원가관리</Col><Col id=\"FROM_DT\">20100102</Col><Col id=\"CUSTOMER_NAME\">한국중국업</Col><Col id=\"COMPANY\">투비소프트</Col><Col id=\"TO_DT\">20120502</Col><Col id=\"POSITION\">기술지원</Col><Col id=\"OS\">WIndow</Col><Col id=\"DEVELOPER_LANGUAGE\">MiPlatform</Col><Col id=\"DBMS\">ORACLE</Col><Col id=\"TOOL\">PID</Col></Row><Row><Col id=\"TASK\">신경영정보시스템</Col><Col id=\"FROM_DT\">20100102</Col><Col id=\"CUSTOMER_NAME\">농심(주)</Col><Col id=\"COMPANY\">투비소프트</Col><Col id=\"TO_DT\">20120502</Col><Col id=\"POSITION\">개발</Col><Col id=\"OS\">WIndow</Col><Col id=\"DEVELOPER_LANGUAGE\">XPLATFORM</Col><Col id=\"DBMS\">ORACLE</Col><Col id=\"TOOL\">UxStudio</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","5","35",null,"190","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsListTab4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"143\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"업무명\"/><Cell col=\"1\" colspan=\"2\" text=\"참여기간\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객사\"/><Cell col=\"4\" rowspan=\"2\" text=\"근무회사\"/><Cell col=\"5\" rowspan=\"2\" text=\"역할\"/><Cell col=\"6\" colspan=\"4\" text=\"개발환경\"/><Cell row=\"1\" col=\"1\" text=\"FROM_DT\"/><Cell row=\"1\" col=\"2\" text=\"TO_DT\"/><Cell row=\"1\" col=\"6\" text=\"OS\"/><Cell row=\"1\" col=\"7\" text=\"개발언어\"/><Cell row=\"1\" col=\"8\" text=\"DBMS\"/><Cell row=\"1\" col=\"9\" text=\"TOOL\"/></Band><Band id=\"body\"><Cell text=\"bind:TASK\"/><Cell col=\"1\" text=\"bind:FROM_DT\"/><Cell col=\"2\" text=\"bind:TO_DT\"/><Cell col=\"3\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"4\" text=\"bind:COMPANY\"/><Cell col=\"5\" text=\"bind:POSITION\"/><Cell col=\"6\" text=\"bind:OS\"/><Cell col=\"7\" text=\"bind:DEVELOPER_LANGUAGE\"/><Cell col=\"8\" text=\"bind:DBMS\"/><Cell col=\"9\" text=\"bind:TOOL\"/></Band></Format></Formats>");
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
        this.loadIncludeScript("Temp_TabPage04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
