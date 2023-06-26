(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(248,738);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","7","40",null,null,"7","7",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsMenu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"Menu\"><Columns><Column size=\"132\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format><Format id=\"MyMenu\"><Columns><Column size=\"86\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu",null,"5","115","30","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("마이메뉴");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu",null,"5","115","30","126",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메뉴");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",248,738,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        //왼쪽 카테고리 눌렀을때 차일드프레임에 보여주게 만들기
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fnOpenForm(obj.getBindDataset(), e.row);
        };

        //(obj.getBindDataset(), e.row) 두개 값을 (objDs, pRow)로 받음 선언하지 않아도 순서만 맞게해주면됨
        this.fnOpenForm = function(objDs, pRow) {

        	//ChildFrame.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom [,strUrl]] )
        	var sMenuId = objDs.getColumn(pRow,"MENU_ID");//gdsMenu
        	var sMenuName = objDs.getColumn(pRow,"MENU_NAME");
        	var sFormUrl = objDs.getColumn(pRow,"FORM_URL");

        	//화면 url 없으면 return
        	if(sFormUrl.length <1) return;
        	this.fvApp.avVFrameSet1.set_separatesize("40, *, 0"); //

        	//화면이 열려있다면 setFocus 한번 연 화면 다시 들어가면 오류 떳는데 그거 잡아 줬음
        	var arrObj = this.fvApp.avWorkFrame.all;
        	for(var i=0; i<arrObj.length; i++){
        		if(arrObj[i].name == sMenuId) { //네임과 아이디가 같다면 (이미 열려져 있다면)
        			arrObj[i].setFocus(); //포커스가 열려있는 곳으로 되고
        			this.fvApp.avMdiFrame.form.tabMdi.set_tabindex(i); //left 탭 클릭하면 탑에 탭에 포커스 준다.
        			return; //작업 하지 않겠다 리턴
        		}
        	}

        	//화면을 띄우기 위한 ChildFrame 생성
        	var objCF = new ChildFrame(sMenuId, 0, 0, 800, 600); //child frame의 크기 sMenuId를 쓴 이유는 겹치지 않기 위해
        	this.fvApp.avWorkFrame.addChild(sMenuId, objCF); //avWorkFrame경로에 차일드를 추가

        	objCF.set_showtitlebar(false); //타이틀바 닫기 늘리기 있는거 바 없애기
        	objCF.set_resizable(true);
        	objCF.set_openstatus("maximize");
        	objCF.set_formurl("FrameBase::Form_Work.xfdl"); //url 지정

        	var objParam = {MENU_ID:sMenuId, MENU_NAME:sMenuName, FORM_URL:sFormUrl};
        	objCF.param = objParam
        	objCF.show(); //버튼, 차일드 만들때 다 쓴다

        	//fnAddTap 기능을 가져옴
        	this.fvApp.avMdiFrame.form.fnAddTab(objParam);

        }


        this.btnMenu_onclick = function(obj,e)
        {
        	this.Grid00.set_binddataset("gdsMenu"); //지디에스 메뉴 데이터
        	this.Grid00.set_formatid("Menu"); //메뉴 그리드 열기
        };

        this.btnMyMenu_onclick = function(obj,e)
        {
        	this.Grid00.set_binddataset("gdsMyMenu"); //마이 메뉴 데이터
        	this.Grid00.set_formatid("MyMenu"); //마이 메뉴 그리드 열기
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
