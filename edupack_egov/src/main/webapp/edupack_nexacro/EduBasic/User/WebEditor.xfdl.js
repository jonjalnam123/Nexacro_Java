(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WebEditor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","10","0","221","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("네이버 에디터");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"40","252",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("WebBrowser 컴포넌트를 이용한 네이버 에디터 연동 샘플이다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","10","85",null,"450","742",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"305","30","30","702",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btn01",null,"265","30","30","702",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00",null,"85","440","448","252",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","1047","123","163","337",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsBoard");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"BOARD_TITLE\"/><Cell col=\"1\" text=\"BOARD_CONTENT\"/></Band><Band id=\"body\"><Cell text=\"bind:BOARD_TITLE\"/><Cell col=\"1\" text=\"bind:BOARD_CONTENT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","186","576","789","93",null,null,null,null,null,null,this);
            obj.set_taborder("7");
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
        this.registerScript("WebEditor.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > 네이버 에디터
        *  @FileName 	SampleNaverEditor.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvDocWeb = "";
        this.fvRtnHeight=260; //버튼사이즈
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	var sUrl = this.gfnGetServerUrl() + "smartEditor/SmartEditor2.html";

        	this.webEditor.set_url(sUrl);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnEditorCallback = function(sType)
        {
        	switch (sType)
        	{
        		case "onload" :
        			var sContents = "";
        			this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        			this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        			break;
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnResize = function(nWidth, nHeight)
        {
        	var sValue = nWidth+","+nHeight;

        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.webEditor.getProperty("document").getProperty("all");
        };

        this.webEditor_onusernotify = function(obj,e)
        {
        	trace(e.userdata);

        	try
        	{
        		// parent의 최상의 Form에 이벤트 발생시킴
        		var oForm = this;
        		if (oForm && oForm.fnEditorCallback)
        		{
        			if (e.userdata == "onload")
        			{
        				var initHeight = this.webEditor.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-this.fvRtnHeight);
        			}

        			oForm.fnEditorCallback(e.userdata);
        		}
        	}
        	catch(e){
        		trace("WebEditor.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };

        this.btn00_onclick = function(obj,e)
        {
        	var sContents = this.txt00.value;

        	if(this.gfnIsNull(sContents)) sContents = "";
        	this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        	this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
         	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");

        	this.txt00.set_value(sEditorData);

        	var nRow = this.dsBoard.addRow();
        	this.dsBoard.setColumn(nRow, "BOARD_CONTENT", sEditorData);
        	this.dsBoard.setColumn(nRow, "BOARD_TITLE", this.edt00.text);

        	trace(this.dsBoard.saveXML());

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.webEditor.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.webEditor.addEventHandler("onsize",this.webEditor_onsize,this);
            this.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };
        this.loadIncludeScript("WebEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
