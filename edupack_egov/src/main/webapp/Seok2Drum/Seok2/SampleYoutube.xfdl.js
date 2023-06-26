(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sub1");
            this.set_titletext("nexaco platform");
            if (Form == this.constructor)
            {
                this._setFormPosition(1022,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSub", this);
            obj.set_progressload("false");
            obj._setContents("<ColumnInfo><Column id=\"mainiD\" type=\"string\" size=\"10\"/><Column id=\"id\" type=\"string\" size=\"10\"/><Column id=\"title\" type=\"string\" size=\"50\"/><Column id=\"url\" type=\"string\" size=\"10\"/><Column id=\"publishedAt\" type=\"string\" size=\"10\"/><Column id=\"viewCount\" type=\"int\" size=\"10\"/><Column id=\"likeCount\" type=\"int\" size=\"10\"/><Column id=\"description\" type=\"string\" size=\"10\"/><Column id=\"sort_key\" type=\"string\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"url\">J96xvH723_g</Col><Col id=\"title\">석이드럼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","310","44","699","396",null,null,"500",null,"283",null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","310","WebBrowser00:8","702","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_contstitleTxt");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staDesc","310","staTitle:10","702","119",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_desc");
            obj.set_wordWrap("char");
            obj.set_verticalAlign("top");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","44","300",null,null,"3",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_scrollbarsize("10");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_mouseovertype("cell");
            obj.set_treeuseimage("false");
            obj.set_useselcolor("true");
            obj.set_scrollbartrackbarsize("200");
            obj.set_binddataset("dsSub");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"258\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"expr:title.substr(title.indexOf(&quot;]&quot;)+1)\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1022,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleYoutube.xfdl", function() {
        this.dsSub_onrowposchanged = function(obj,e)
        {
        	var sURL = this.dsSub.getColumn(this.dsSub.rowposition, "url");

        	//운영반영시 밑에 HTML로 바꿔야함. 이게 하단 '전체보기' 기능 사용 가능한 부분
        	//this.WebBrowser00.set_url("http://demo.nexacro.com/EduPlay/test/_web_/File/webbrowser.html?sURL="+sURL);
            //테스트시 --> 근데 아래와 해도 전체보기 가능하지? 2020.03.17test
        	this.WebBrowser00.set_url("https://www.youtube.com/embed/"+sURL);
            this.resetScroll();

        };

        //WebBrowser '전체보기' 기능 사용하기 위해 html에 iframe 형식으로 오픈
        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	this.WebBrowser00.setProperty("allowfullscreen", ""); // webbrowser에 allowfullscreen 세팅
        	this.WebBrowser00.callMethod("set_allowfullscreen"); // 링크된 html 의 함수 호출
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Sub1_onload,this);
            this.addEventHandler("onbindingvaluechanged",this.Sub1_onbindingvaluechanged,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.grdMenuList.addEventHandler("oncellclick",this.grdMenuList_oncellclick,this);
            this.dsSub.addEventHandler("onrowposchanged",this.dsSub_onrowposchanged,this);
        };
        this.loadIncludeScript("SampleYoutube.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
