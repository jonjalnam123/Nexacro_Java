(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DaumAdr");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webPost","80","64","524","306",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","340","400","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBasAddr","648","109","265","51",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSculZip","640","32","280","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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
        this.registerScript("DaumAdr.xfdl", function() {



        this.btn00_onclick = function(obj,e)
        {
        	this.gfnPostSearchDaum(this.webPost);
        };

        this.webPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	trace("strPost ==> " + strPost);
        	// e.userdata==>OK!!!:::서울특별시 송파구 백제고분로36가길 9, 101 (석촌동, 스카이타워):::서울특별시 송파구 백제고분로36가길 9:::(석촌동, 스카이타워):::9, Baekjegobun-ro 36ga-gil, Songpa-gu, Seoul:::서울특별시 송파구 석촌동 58-33 스카이타워:::05614:::101
        	if (strPost.indexOf("OK!!!:::") == 0)
        	{
        		/*
        		 //e.userdata ==>(식별자 ::: 구우편번호 앞 3자리 ::: 구우편번호 뒷 3자리 :::  신규우편번호 ::: 도로명주소 ::: 지번 주소 ::: 조합형 주소여부에 따른 주소)
        		 */
        		var aAddr = strPost.split(":::");

        		trace("onusernotify -------------------------------------------");
        		trace("array[1]=>구우편번호 앞 3자리          ==> " +	aAddr[1] );
        		trace("array[2]=>구우편번호 뒷 3자리          ==> " +	aAddr[2] );
        		trace("array[3]=>신규우편번호                  ==> " + aAddr[3] );
        		trace("array[4]=>도로명주소                    ==> " +	aAddr[4] );
        		trace("array[5]=>지번주소                      ==> " +	aAddr[5] );
        		trace("array[6]=>조합형 주소여부에 따른 주소	==> " +	aAddr[6] );
        		trace("-------------------------------------------------------");

        		this.edtSculZip.set_value(aAddr[3]);	// 신규 우편번호
        		this.edtBasAddr.set_value(aAddr[6]);	// 조합형 주소여부에 따른 주소
        	}
        };

        this.DaumAdr_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DaumAdr_onload,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("DaumAdr.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
