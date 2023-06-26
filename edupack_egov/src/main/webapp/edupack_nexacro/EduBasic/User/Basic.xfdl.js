(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Basic");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn00","-107","15","54","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","64","100","104","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","63","155","105","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn02");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","64","205","104","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn03");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","64","46","104","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","316","155","104","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Basic.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Basic.xfdl", function() {
        //코드 스니핏 - 코드 다 드래그 해서 오른쪽 버튼 하고 등록하기.(gfn)
        /****************************************************************
        /* 프로그램명 : C:\EduPack\workspace\edupack_egov\src\main\edupack_nexacro\EduBasic\User\Basic.xfdl
        /* 작성일자 : 2023/04/17
        /* 작성자 : 홍길동
        /* 간략설명 :
        *****************************************************************/

        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        //코드 들여쓰기 한번에 컨트롤 a 누르고 컨트롤 에프팔
        this.btn00_onclick = function(obj,e)
        {
        	if(e.altkey)
        	{
        		alert("true");
        	} else {
        		alert("false");
        	}
        };

        this.div00_btn00_onclick = function(obj,e)
        {
        	this.div00.form.btn00.set_text("안녕");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Basic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
