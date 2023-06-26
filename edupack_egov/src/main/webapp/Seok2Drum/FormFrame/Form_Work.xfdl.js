(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,698);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnMyMenu","10","5","17","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("btn_WF_Mymnu");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","31","5","560","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","0","37",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","251","123","120","50",null,null,null,null,null,null,this.divWork.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.divWork.addChild(obj.name, obj);

            obj = new Button("Button02","230","213","120","40",null,null,null,null,null,null,this.divWork.form);
            obj.set_taborder("1");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic01");
            this.divWork.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1050,698,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.sMenuID = "";

        this.Form_Work_onload = function(obj,e)
        {
        	//부모 프레임 반환
        	var objCF = this.getOwnerFrame();

        	// 파라미터 받기
        	this.sMenuID = objCF.param.MENU_ID;
        	var sMenuName = objCF.param.MENU_NAME;
        	var sFormUrl = objCF.param.FORM_URL;

        	//파라미터 받아온거 내 폼에 대입 한겨 가운데 id 값은 컴포넌트 만들때 id 속성 지정 해 줌
        	this.staTitle.set_text(sMenuName);
        	this.divWork.set_url(sFormUrl);
        	this.divWork.form.resetScroll();
        	this.set_titletext(sMenuName);

        	//저장한 아이디로 로그인 했을때 마이메뉴에 저장된거 즐겨찾기 눌린상태 빼면서 마이메뉴에서 삭제
        	var nRow = this.fvApp.gdsMyMenu.findRow("MENU_ID", this.sMenuID);
        	if(nRow > -1) {
        		this.btnMyMenu.set_cssclass("btn_WF_MymnuS");
        	}
        };
        //즐겨찾기 메뉴 눌렀을때 바뀌는거랑 눌르면서 마이메뉴에 등록 되는 기능
        this.btnMyMenu_onclick = function(obj,e)
        {
        	var sMyMenu = (obj.cssclass == "btn_WF_Mymnu" ? "btn_WF_MymnuS" : "btn_WF_Mymnu");
        	obj.set_cssclass(sMyMenu);
        	trace("--------------" + sMyMenu);

        //	즐겨찾기 버튼 눌렀을때 눌른 모양으로 변경 하는 법
        // 	if(sMyMenu == "btn_WF_Mymnu") {
        // 	obj.set_cssclass("btn_WF_MymnuS");
        // 	}else{
        // 	obj.set_cssclass("btn_WF_Mymnu");
        // 	}

        	// 마이메뉴 등록
        	if(sMyMenu == "btn_WF_MymnuS") {
        		var nRow = this.fvApp.gdsMenu.findRow("MENU_ID", this.sMenuID);
        		var nNewRow = this.fvApp.gdsMyMenu.addRow();

        		this.fvApp.gdsMyMenu.copyRow(nNewRow, this.fvApp.gdsMenu, nRow);

        	}else{ //마이메뉴 삭제

        		var nRow = this.fvApp.gdsMyMenu.findRow("MENU_ID", this.sMenuID);
        		this.fvApp.gdsMyMenu.deleteRow(nRow);
        	}

        	nexacro.setPrivateProfile("USER_MENU", this.fvApp.gdsMyMenu.saveXML());
        };

        this.Form_Work_onbeforeclose = function(obj,e)
        {
        	//sMenuID
        	var tObj = this.fvApp.avMdiFrame.form.tabMdi.tabpages;
        	trace("9999 " + tObj);
        	trace("첫번째" + tObj[0]);
        	trace("두번째" + tObj[1]);
        	trace("세번째" + tObj[2]);
        	for(var i=0; i<tObj.length; i++) {
        		trace(tObj[i]);
        		trace(tObj[i].name);
        		//Tab.removeTabpage( nIndex )
        		if(tObj[i].name == this.sMenuID) {
        			this.fvApp.avMdiFrame.form.tabMdi.removeTabpage(i);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onbeforeclose",this.Form_Work_onbeforeclose,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
