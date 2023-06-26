(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Step");
            this.set_titletext("스텝");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_explorer", this);
            obj._setContents("<ColumnInfo><Column id=\"TREE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TREE_ID\">10</Col><Col id=\"TREE_NM\">Products</Col><Col id=\"TREE_LEVEL\">0</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">20</Col><Col id=\"TREE_NM\">nexacro platform 17</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">30</Col><Col id=\"TREE_NM\">nexacro platform 14</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">40</Col><Col id=\"TREE_NM\">XPLATFORM</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">50</Col><Col id=\"TREE_NM\">MiPlatform</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">60</Col><Col id=\"TREE_NM\">Nex-UP</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">70</Col><Col id=\"TREE_NM\">Education</Col><Col id=\"TREE_LEVEL\">0</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">80</Col><Col id=\"TREE_NM\">교육공지</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">90</Col><Col id=\"TREE_NM\">교육자료</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">100</Col><Col id=\"TREE_NM\">교육일정</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">110</Col><Col id=\"TREE_NM\">교육신청</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">120</Col><Col id=\"TREE_NM\">접수현황</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">130</Col><Col id=\"TREE_NM\">Community</Col><Col id=\"TREE_LEVEL\">0</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">140</Col><Col id=\"TREE_NM\">공지사항</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">150</Col><Col id=\"TREE_NM\">자료실</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">160</Col><Col id=\"TREE_NM\">팁게시판</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid Type : Tree");
            obj.set_cssclass("sta_MBF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tree","10","60","460",null,null,"45",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_explorer");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseline("false");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"410\"/></Columns><Rows><Row size=\"60\"/></Rows><Band id=\"body\"><Cell text=\"bind:TREE_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:TREE_LEVEL\" cssclass=\"expr:TREE_LEVEL == 0 ? &quot;grd_tree_lev0&quot; : &quot;grd_tree_lev1&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid Type : normal");
            obj.set_cssclass("sta_MBF_subtitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","60","460",null,null,"45",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"70\" band=\"head\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,850,this,function(p){});
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Step.xfdl", function() {

        //tree펼침 제어
        this.grd_tree_oncellclick = function(obj,e)
        {
        	var nGridRow = obj.getTreeRow(e.row);
        	var nStatus  = obj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);

        	obj.setTreeStatus(nGridRow, nStatus);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_tree.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.grd_tree.addEventHandler("oncellclick",this.grd_tree_oncellclick,this);
            this.grd_list.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("Mobile_Step.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
