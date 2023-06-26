(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,698);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staCenter","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","staCenter:-200","staCenter:-200","400","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("linear-gradient(#ffffff 0%,#ec4aec 20%,#d63fd9 80%,#ffffff 100%)");
            this.addChild(obj.name, obj);

            obj = new Static("text","55","36","36","53",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtId","150","36","216","49",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("text00","202","85","113","53",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("아이디를 입력하세요");
            obj.set_color("white");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("text01","57","148","70","53",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("패스워드");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPass","150","148","216","49",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chkIdSave","61","216","223","58",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("아이디 저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnLogin","114","331","188","53",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("로그인");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,698,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        this.fvApp = nexacro.getApplication();

        this.Div00_btnLogin_onclick = function(obj,e)
        {
        	this.fvApp.avVFrameSet.set_separatesize("0,50,*"); //0 = 화면이 안보이는 영역에 가버려서 안보임
        													   //50 = 바로 밑에 있는 화면
        													   //* = 밑에 더 나머지

        	//아이디 저장하기
        	if(this.Div00.form.chkIdSave.value) {
        		nexacro.setPrivateProfile("USER_ID", this.Div00.form.edtId.value);

        		var sMyMenu = nexacro.getPrivateProfile("USER_MENU"); //로그인 상태로
        		this.fvApp.gdsMyMenu.loadXML(sMyMenu);

        	} else {
        		nexacro.setPrivateProfile("USER_ID", "");
        	}
        };


        this.Form_Login_onload = function(obj,e)
        {
        	// 아이디 저장하기가 true 일때 아이디 가져오기

        	var sUserId = nexacro.getPrivateProfile("USER_ID");
        	if(sUserId != null && sUserId.length > 0) {
        		this.Div00.form.edtId.set_value(sUserId);
        		this.Div00.form.chkIdSave.set_value(true);
        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.Div00.form.chkIdSave.addEventHandler("onclick",this.Div00_chkIdSave_onclick,this);
            this.Div00.form.btnLogin.addEventHandler("onclick",this.Div00_btnLogin_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
