(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CommAlert");
            this.set_titletext("알림창");
            this.set_borderRadius("20px");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnOk",null,null,"90","30","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_POP_Ok");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgContent","80","30","290","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_POP_Contents");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","0","30","80","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_image("url(\'imagerc::KakaoTalk_20230503_095106561.jpg\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("fit");
            obj.set_border("1px solid white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,180,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("commAlert.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Alert 화면
        *  @FileName 	CmmAlert.xfdl
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

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.ufnFormOnLoad(this); //초기화[필수]

        	var sContents = this.getOwnerFrame().paramContents;
        	this.fnMsgSetting(sContents);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
        this.fnMsgSetting = function (sMsgContent)
        {
        	this.staMsgContent.set_text(sMsgContent);
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        /**
        * @description 비밀번호 입력후 ESC로 확인버튼
        */
        this.CommAlert_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) {
        		this.btnOk.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.CommAlert_onkeydown,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("commAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
