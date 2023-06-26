(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameTop");
            this.set_titletext("탑");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsName", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","100","0",null,null,"100","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_borderRadius("0px 0px 20px 20px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLogoPhoto","0","0",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_image("url(\'imagerc::bannerLast.jpg\')");
            obj.set_stretch("fit");
            obj.set_cursor("pointer");
            obj.set_border("0px none");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","117",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_background("#ff7a90");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("sta00","0","9","50.00%","57",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Menu("mnuMenu","sta00:-357","117","800",null,null,"0",null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_innerdataset("gdsMenu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_userdatacolumn("FORM_URL");
            obj.set_font("bold 20px/normal \"한컴 고딕\"");
            obj.set_color("white");
            obj.set_wordSpacing("0px");
            obj.set_cursor("pointer");
            obj.set_background("#ff7a90");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnAdminReserve",null,"0","80",null,"185","104",null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("예약관리");
            obj.set_borderRadius("0px");
            obj.set_font("bold 21px/normal \"한컴 고딕\"");
            obj.set_color("white");
            obj.set_background("none");
            obj.set_border("0px none");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnAdminMember",null,"0","80",null,"100","104",null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("회원관리");
            obj.set_borderRadius("0px");
            obj.set_font("bold 21px/normal \"한컴 고딕\"");
            obj.set_color("white");
            obj.set_background("none");
            obj.set_border("0px none");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnLogOut",null,"0","80",null,"15","104",null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_text("로그아웃");
            obj.set_borderRadius("0px");
            obj.set_font("bold 21px/normal \"한컴 고딕\"");
            obj.set_color("white");
            obj.set_border("0px none");
            obj.set_background("none");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtWelcome",null,"93","140",null,"0","33",null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            obj.set_border("0px none");
            obj.set_readonly("true");
            obj.set_displaynulltext("이름없음");
            obj.set_font("bold 14px/normal \"한컴 고딕\"");
            obj.set_color("white");
            obj.set_background("none");
            this.divTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,150,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTop.form.edtWelcome","value","dsName","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame3000fm.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\CNCNetworks\Documents\TOBESOFT\Nexacro N\projects\Seok2Drum\FrameBase
        *	@FileName Seok2_Top.xfdl
        *	@Creator 최정석
        *	@CreateDate 2023/05/18
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2023/05/18		최정석		최초 생성
        *
        *
        */
        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        this.fvApp = nexacro.getApplication();

        /**************************************************************************
        * FORM EVENT 영역(onload)
        **************************************************************************/
        /**
        * @description 온로드 될때 메인페이지 열어주기
        */
        this.FrameTop_onload = function(obj,e)
        {

        	this.ufnFormOnLoad(this);
        	this.fvApp.avWorkFrame.set_formurl("form::Kopo1010fm.xfdl")

        	this.divTop.form.edtWelcome.set_background("none"); //사용자 표시 해주기
        	this.divTop.form.edtWelcome.set_borderRadius("20px");

        };

        /*************************************************************************
        * 사용자 FUNCTION 영역s
        **************************************************************************/
        /**
        * @description fnOpenForm 함수
        */
        this.fnOpenForm = function(pRow) {

        	trace("fnOpenForm==" + pRow);
        	var sMenuId = this.fvApp.gdsMenu.getColumn(pRow,"MENU_ID");//gdsMenu
        	var sMenuName = this.fvApp.gdsMenu.getColumn(pRow,"MENU_NAME");
        	var sFormUrl = this.fvApp.gdsMenu.getColumn(pRow,"FORM_URL");
        	trace("sFormUrl====" + sFormUrl);

        	this.fvApp.avWorkFrame.set_formurl(sFormUrl);
        }



        /**
        * @description 로그아웃 버튼 클릭시 컨펀 팝업에 확인 또는 취소 버튼 작동 하게 해주는 함수
        */
        this.fnMsgCallback = function(strId, strVal)
        {
        	if(strId == "popMsgAbstractComplete"){
        		if(strVal) {
        			this.fvApp.avVFrameSet.set_separatesize("0,0,0,*,0");
        			this.fvApp.gdsMember.clearData()
        			this.reload();
        		}
        	}
        };
        /***************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ****************************************************************************/
        /**
        * @description 탑 메뉴 버튼 클릭시 URL 호출
        */
        this.divTop_mnuMenu_onmenuclick = function(obj,e)
        {
        	var nIdx = this.fvApp.gdsMenu.findRow("MENU_ID",e.id);
        	trace(e.id + "===nIdx====" + nIdx);
        	if(nIdx >= 0){
        		this.fnOpenForm(nIdx);
        	}else{
        		alert("xxxxxx");
        	}
        };

        /**
        * @description메인 이미지 클릭시 워크 프레임에 메인 화면 띄워주기
        */
        this.divTop_imgLogoPhoto_onclick = function(obj,e)
        {
        	this.fvApp.avWorkFrame.set_formurl("form::Kopo1010fm.xfdl");
        };

        /**
        * @description 로그아웃 버튼 클릭시 물어보기
        */
        this.divTop_btnLogOut_onclick = function(obj,e)
        {
        	var sMsgId = "confirm.logout";
        	var arrArg = "";
        	var sPopId = "popMsgAbstractComplete";
        	var sCallback = "fnMsgCallback";

        	this.ufnAlert(sMsgId, arrArg, sPopId, sCallback);
        };

        /**
        * @description 회원관리 버튼 클릭시 폼 링크
        */
        this.divTop_btnAdminMember_onclick = function(obj,e)
        {
        	this.fvApp.avWorkFrame.set_formurl("admin::Kopo1114fm.xfdl")
        };

        /**
        * @description 예약관리 버튼 클릭시 폼 링크
        */
        this.divTop_btnAdminReserve_onclick = function(obj,e)
        {
        	this.fvApp.avWorkFrame.set_formurl("admin::Kopo1115fm.xfdl")
        };

        /**
        * @description 로그아웃 버튼에 마우스 올리면 색 변경
        */
        this.divTop_btnLogOut_onmouseenter = function(obj,e)
        {
        	this.divTop.form.btnLogOut.set_color("#ff7a90");
        };

        /**
        * @description 로그아웃 버튼에 마우스 빼면 색 변경
        */
        this.divTop_btnLogOut_onmouseleave = function(obj,e)
        {
        	this.divTop.form.btnLogOut.set_color("white");
        };

        /**
        * @description 회원관리 버튼에 마우스 올리면 색 변경
        */
        this.divTop_btnAdminMember_onmouseenter = function(obj,e)
        {
        	this.divTop.form.btnAdminMember.set_color("#ff7a90");
        };

        /**
        * @description 회원관리 버튼에 마우스 빼면 색 변경
        */
        this.divTop_btnAdminMember_onmouseleave = function(obj,e)
        {
        	this.divTop.form.btnAdminMember.set_color("white");
        };

        /**
        * @description 예약관리 버튼에 마우스 빼면 색 변경
        */
        this.divTop_btnAdminReserve_onmouseenter = function(obj,e)
        {
        	this.divTop.form.btnAdminReserve.set_color("#ff7a90");
        };

        /**
        * @description 예약관리 버튼에 마우스 빼면 색 변경
        */
        this.divTop_btnAdminReserve_onmouseleave = function(obj,e)
        {
        	this.divTop.form.btnAdminReserve.set_color("white");
        };

        this.btn00_onclick = function(obj,e)
        {
        	trace(this.fvApp.gdsMenu.saveXML());
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FrameTop_onload,this);
            this.divTop.form.imgLogoPhoto.addEventHandler("onclick",this.divTop_imgLogoPhoto_onclick,this);
            this.divTop.form.sta00.addEventHandler("onclick",this.divTop_sta00_onclick,this);
            this.divTop.form.mnuMenu.addEventHandler("onmenuclick",this.divTop_mnuMenu_onmenuclick,this);
            this.divTop.form.btnAdminReserve.addEventHandler("onclick",this.divTop_btnAdminReserve_onclick,this);
            this.divTop.form.btnAdminReserve.addEventHandler("onmouseenter",this.divTop_btnAdminReserve_onmouseenter,this);
            this.divTop.form.btnAdminReserve.addEventHandler("onmouseleave",this.divTop_btnAdminReserve_onmouseleave,this);
            this.divTop.form.btnAdminMember.addEventHandler("onclick",this.divTop_btnAdminMember_onclick,this);
            this.divTop.form.btnAdminMember.addEventHandler("onmouseenter",this.divTop_btnAdminMember_onmouseenter,this);
            this.divTop.form.btnAdminMember.addEventHandler("onmouseleave",this.divTop_btnAdminMember_onmouseleave,this);
            this.divTop.form.btnLogOut.addEventHandler("onclick",this.divTop_btnLogOut_onclick,this);
            this.divTop.form.btnLogOut.addEventHandler("onmouseenter",this.divTop_btnLogOut_onmouseenter,this);
            this.divTop.form.btnLogOut.addEventHandler("onmouseleave",this.divTop_btnLogOut_onmouseleave,this);
        };
        this.loadIncludeScript("Frame3000fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
