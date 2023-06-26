(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormFirstPage");
            this.set_titletext("메인 페이지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSub", this);
            obj.set_progressload("false");
            obj._setContents("<ColumnInfo><Column id=\"mainiD\" type=\"string\" size=\"10\"/><Column id=\"id\" type=\"string\" size=\"10\"/><Column id=\"title\" type=\"string\" size=\"50\"/><Column id=\"url\" type=\"string\" size=\"10\"/><Column id=\"publishedAt\" type=\"string\" size=\"10\"/><Column id=\"viewCount\" type=\"int\" size=\"10\"/><Column id=\"likeCount\" type=\"int\" size=\"10\"/><Column id=\"description\" type=\"string\" size=\"10\"/><Column id=\"sort_key\" type=\"string\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"url\">J96xvH723_g</Col><Col id=\"title\">석이드럼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowserMain","0","30",null,null,"0","30","500",null,"283",null,this.divMain.form);
            obj.set_taborder("0");
            this.divMain.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","-400","-1","300",null,null,"30",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
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
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"title\"/></Band><Band id=\"body\"><Cell text=\"bind:title\"/></Band></Format></Formats>");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Kopo1010fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\form
        *	@FileName Kopo1010fm.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/06/01
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/06/01		최정석		최초 생성
        *
        *
        */

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        /**
        * @description dsSub 데이터 셋에 onrowposchanged 이벤트
        */
        this.dsSub_onrowposchanged = function(obj,e)
        {
        	var sURL = this.dsSub.getColumn(this.dsSub.rowposition, "url");

        	//운영반영시 밑에 HTML로 바꿔야함. 이게 하단 '전체보기' 기능 사용 가능한 부분
        	//this.WebBrowser00.set_url("http://demo.nexacro.com/EduPlay/test/_web_/File/webbrowser.html?sURL="+sURL);
            //테스트시 --> 근데 아래와 해도 전체보기 가능하지? 2020.03.17test
        	this.divMain.form.WebBrowserMain.set_url("https://www.youtube.com/embed/"+sURL);
            this.resetScroll();

        };

        /**
        * @description WebBrowser '전체보기' 기능 사용하기 위해 html에 iframe 형식으로 오픈
        */
        this.divMain_WebBrowserMain_onloadcompleted = function(obj,e)
        {
        	this.divMain.form.WebBrowserMain.setProperty("allowfullscreen", ""); // webbrowser에 allowfullscreen 세팅
        	this.divMain.form.WebBrowserMain.callMethod("set_allowfullscreen"); // 링크된 html 의 함수 호출
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divMain.form.WebBrowserMain.addEventHandler("onloadcompleted",this.divMain_WebBrowserMain_onloadcompleted,this);
            this.dsSub.addEventHandler("onrowposchanged",this.dsSub_onrowposchanged,this);
        };
        this.loadIncludeScript("Kopo1010fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
