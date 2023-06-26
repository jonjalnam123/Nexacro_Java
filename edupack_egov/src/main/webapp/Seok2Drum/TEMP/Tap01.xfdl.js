(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tap01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1015,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_EMP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR10</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR30</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP30</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN30</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR40</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR50</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">300</Col><Col id=\"CORP_DEPT_CD\">KR10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">300</Col><Col id=\"CORP_DEPT_CD\">KR30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","21",null,"179","-1",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"CORP_CODE\"/><Cell col=\"2\" text=\"CORP_NAME\"/><Cell col=\"3\" text=\"CORP_CEO\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:CORP_CODE\"/><Cell col=\"2\" text=\"bind:CORP_NAME\"/><Cell col=\"3\" text=\"bind:CORP_CEO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1015,230,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        this.loadIncludeScript("Tap01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
