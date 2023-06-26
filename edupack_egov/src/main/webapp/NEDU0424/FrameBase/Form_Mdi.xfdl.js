(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Mdi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnMain","0","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Main");
            obj.set_cssclass("btn_MDI_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMdi","btnMain:5","10",null,"30","150",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_MDI_Menu");
            obj.set_usecontrolkey("false");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabMdi);
            obj.set_text("Tabpage2");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"19","21","16","94",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_Max");
            obj.set_tooltiptext("Max");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"19","21","16","73",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_Min");
            obj.set_tooltiptext("Min");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"19","21","16","52",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_H");
            obj.set_tooltiptext("Horizontal");
            this.addChild(obj.name, obj);

            obj = new Button("btnTilevertical",null,"19","21","16","31",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_V");
            obj.set_tooltiptext("Horizontal");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"19","21","16","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("CloseAll");
            obj.set_cssclass("btn_MDI_Allx");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMdi.Tabpage2
            obj = new Layout("default","",0,0,this.tabMdi.Tabpage2.form,function(p){});
            this.tabMdi.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Mdi.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.fnAddTab = function (objParam) {

        	// Tab.insertTabpage( strID, nIndex : -1 마지막 [,strURL [,strText [,nTabBtnWidth [,nTabBtnHeight]]]] )
        	// ID
        	// Name

        	//var objParam = {MENU_ID:sMenuId, MENU_NAME:sMenuName, FORM_URL:sFormUrl};
        	this.tabMdi.insertTabpage(objParam.MENU_ID, -1, "", objParam.MENU_NAME);
        }

        this.Form_Mdi_onload = function(obj,e)
        {
        	this.tabMdi.removeTabpage(0);
        };


        //1번 화면에서 탭에 있는 2번 화면을 누르면 2번 화면 띄우게 만드는 것
        this.tabMdi_onchanged = function(obj,e)
        {
        	// Work Focus
        	var sFormId = obj.tabpages[e.postindex].name; //새로 변경된 페이지 로우
        	this.fvApp.avWorkFrame[sFormId].form.setFocus();
        	this.fvApp.avVFrameSet1.set_separatesize("40, *, 0");
        };

        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
        	// tabpage remove
        	// form close
        	var sFormId = obj.tabpages[e.index].name; //현재 인덱스 값 (현재 누른 탭)
        	this.fvApp.avWorkFrame[sFormId].form.close(); //탭은 안 사라 지고 페이지만 삭제
        	obj.removeTabpage(e.index); //현재 선택된 탭과 페이지 삭제s
        };

        this.btnMain_onclick = function(obj,e)
        {
        	this.fvApp.avVFrameSet1.set_separatesize("40, 0, *"); //메인화면 가운데로 보이기
        };

        this.Button_onClick = function(obj,e)
        {
        	var sType = obj.name.replace("btn","");// btn 제거
        	sType = sType.toLowerCase(); //소문자

        	var objWork = this.fvApp.avWorkFrame.frames;
        	trace(objWork);
        	// 	 set_openstatus - maximize
        	// 	 form close - closeall
        	// 	 arrange - cascade/ horizontal / tilevertical

        	switch(sType) {
        	case "maximize" : //여러개 창 하나 선택해서 보여주는 것
        		for(var i=0; i<objWork.length; i++)
        		{
        			objWork[i].set_showtitlebar(false);
        			objWork[i].set_resizable(true);
        			objWork[i].set_openstatus("maximize");

        		}
        		break;
        	case "closeall" : //전부다 닫아!
        		for(var i=objWork.length-1; i>=0; i--) //전체 삭제
        		{
        			objWork[i].form.close();
        			this.tabMdi.removeTabpage(i);
        		}
        		break;
        	default: //나머지 것들 기능
        		this.fvApp.avWorkFrame.arrange(sType);
        		for(var i=0; i<objWork.length; i++) {
        			objWork[i].set_showtitlebar(true);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.Form_Mdi_onclick,this);
            this.addEventHandler("onload",this.Form_Mdi_onload,this);
            this.btnMain.addEventHandler("onclick",this.btnMain_onclick,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.btnMaximize.addEventHandler("onclick",this.Button_onClick,this);
            this.btnCascade.addEventHandler("onclick",this.Button_onClick,this);
            this.btnHorizontal.addEventHandler("onclick",this.Button_onClick,this);
            this.btnTilevertical.addEventHandler("onclick",this.Button_onClick,this);
            this.btnCloseAll.addEventHandler("onclick",this.Button_onClick,this);
        };
        this.loadIncludeScript("Form_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
