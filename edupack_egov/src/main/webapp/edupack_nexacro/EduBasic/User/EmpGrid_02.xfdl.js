(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EmpGrid_02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"STRING\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">5000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">50000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">48000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd03_00","230","60","710","580",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.getSetter("griduserproperty").set("userheader");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"91\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"text mode\"/><Cell row=\"1\" colspan=\"4\" text=\"text\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"number\"/><Cell row=\"2\" text=\"EMPL_ID\" userheadgrid=\"bind:EMPL_ID\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" text=\"text\"/><Cell row=\"2\" col=\"2\" text=\"editControl\"/><Cell row=\"2\" col=\"3\" rowspan=\"2\" text=\"textArea\"/><Cell row=\"2\" col=\"4\" text=\"maskedit\"/><Cell row=\"2\" col=\"5\" rowspan=\"2\" text=\"number\"/><Cell row=\"3\" text=\"FULL_NAME\" userheadgrid=\"bind:FULL_NAME\"/><Cell row=\"3\" col=\"2\" text=\"decoText\"/><Cell row=\"3\" col=\"4\" text=\"mask\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:POS_CD\"/><Cell col=\"4\"/><Cell col=\"5\" rowspan=\"2\"/><Cell row=\"1\" text=\"bind:FULL_NAME\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"4\"/></Band></Format></Formats>");
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
        this.registerScript("EmpGrid_02.xfdl", function() {

        this.EmpGrid_02_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EmpGrid_02_onload,this);
        };
        this.loadIncludeScript("EmpGrid_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
