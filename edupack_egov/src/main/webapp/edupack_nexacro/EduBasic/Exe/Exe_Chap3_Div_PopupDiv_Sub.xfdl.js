(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chapter3_Div_PopupDiv_Sub");
            this.set_titletext("Exe2_Chapter3_Div_PopupDiv_Sub");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset2", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","10","81","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Linked");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid2","10","40","378","161",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_Close","10","211","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exe2_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,250,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap3_Div_PopupDiv_Sub.xfdl", function() {

        //원래 내 폼으로 값을 전달 해주는 방법 배열로 넘겨줘야 함
        this.btn_Exe2_Close_onclick = function(obj,e)
        {
        	//값 보내주는 것
        	var arrRtn = [];
        	arrRtn[0] = this.Dataset2.getColumn(this.Dataset2.rowposition,"DEPT_NAME");
        	arrRtn[1] = this.Dataset2.getColumn(this.Dataset2.rowposition,"FULL_NAME");
        	arrRtn[2] = this.Dataset2.getColumn(this.Dataset2.rowposition,"EMPL_ID");

        	//경로 보여주는 로그
        	trace("1="  + this.name);
        	trace("2="  + this.parent.name);
        	trace("3="  + this.parent.parent.name);

        	//폼에 있는 div 닫는다
        	this.parent.parent.PopupDiv2.closePopup(arrRtn);
        };

        this.Grid2_oncelldblclick = function(obj,e)
        {
        	this.btn_Exe2_Close_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid2.addEventHandler("oncelldblclick",this.Grid2_oncelldblclick,this);
            this.btn_Exe2_Close.addEventHandler("onclick",this.btn_Exe2_Close_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap3_Div_PopupDiv_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
