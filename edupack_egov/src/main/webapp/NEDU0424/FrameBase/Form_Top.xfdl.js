(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("New Form");
            this.set_cssclass("sta_LOGIN_Bg");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1298,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","248","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","248","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_LF_NexacroLogo");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","206","96","514","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsMenu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_userdatacolumn("FORM_URL");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","300","0",null,"50","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"6","133","16","68",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'><fc v=\'#f5a11d\'>운영자</fc></b>님 환영합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"6","60","16","7",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Button("btnPre",null,"25","24","24","31",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_Prev");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"25","24","24","7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_Next");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1298,50,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.Menu00_onmenuclick = function(obj,e)
        {

        };

        //메뉴 선택하면 왼쪽에 정보 보여지게 하는 것
        this.Form_Top_onload = function(obj,e)
        {
        	this.fvApp.gdsMenu.filter("MENU_LEVEL=='0'"); //레벨 0 값 가진애들 보여줌

        	//Dataset.copyData( objDataset [, bFilteredOnly] )
        	//dsmenu = top에 만들어놓은 데이터 셋 gdsmenu = 전역 데이터 셋
        	this.dsMenu.copyData(this.fvApp.gdsMenu, true); //dsmenu 데이터셋에  gdsmenu에 있는 데이터 셋을 카피 한다 전역변수를 지역변수로 카피
        	this.fvApp.gdsMenu.filter(""); //필터를 풀 때는 조건을 주지 않는다, DataSet 에 로드된 데이터를 조건에 만족하는 데이터(Row) 만 보이게 필터링하는 메소드입니다.

        	this.fnCreateMenu();
        };

        var objBtn = "";
        var nX = 0; //임의로 선언한 변수
        var nGap = 50;

        this.fnCreateMenu  = function() {

        	// dsMenu rowcount
        	for(var i=0; i<this.dsMenu.rowcount; i++){ //rowcount가 돌아가면서
        		var sMenuId = this.dsMenu.getColumn(i, "MENU_ID"); //아이디 구한다
        		var sMenuName = this.dsMenu.getColumn(i, "MENU_NAME"); //네임 구한다

        		//nexacro.getTextSize( strText, strFont [, nLimitWidth, strWordWrap] );
        		var objSize = nexacro.getTextSize(sMenuName, "bold 15px 'Verdana, Malgun Gothic'"); //nx,ny 를 구하기 위해서 씀 텍스트의 크기

        		trace(objSize.nx);

        		//동적으로 버튼 생성하기
        		// new init - strName,vLeft, vTop, vWidth, vHeight
        		objBtn = new Button(sMenuId, nX, 5, objSize.nx, 40); //nx=메소드가 가지고 있는 가로 길이

        		// addCild , Form.addChild( strChildID, objComp )
        		this.divMenu.addChild(sMenuId, objBtn); //sMenuId 에 오브젝트 메뉴 추가\

		//uId = 변경 정보를 식별하기 위한 고유 ID 속성값입니다.
        		objBtn.uId = sMenuId;
        		objBtn.set_text(sMenuName);
        		objBtn.set_cssclass("btn_TF_Menu"); //꾸미는 것

        		// show
        		objBtn.setEventHandler("onclick",this.fnMenuClick,this); //동적 이벤트 생성
        		objBtn.show();

        		nX += (objSize.nx + nGap);
        	}

        	//스타트페이지에 gdsMenuDataset에서 MENU_ID가 10인애들을 나타내주려고 씀
        	this.fvApp.gdsMenu.filter("MENU_ID.substring(0,2) == '10'");
        }
        					//클릭 메뉴 만들때 기본값 obj, e 넣어야됨
        this.fnMenuClick = function(obj, e) { //0번째 ~ 2번째 글자 까지 나눠서 보여지게 함 10,20,30
        	this.fvApp.gdsMenu.filter("MENU_ID.substring(0,2) == '" + obj.uId + "'");

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
