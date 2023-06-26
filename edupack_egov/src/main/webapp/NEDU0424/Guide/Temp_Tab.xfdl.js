(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_Tab");
            this.set_titletext("Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BRITHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"BRITHDAY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"RESIGNATION_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTRATION_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ANNIVERSARY_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMPANY\">투비소프트</Col><Col id=\"DEPT_CD\">1000</Col><Col id=\"DEPT_NAME\">개발융합팀</Col><Col id=\"EMP_NO\">A10000</Col><Col id=\"NAME\">투비</Col><Col id=\"MARRIED\">Y</Col><Col id=\"REGISTRATION_NO\">20221234561234567</Col><Col id=\"ANNIVERSARY_DT\">20001212</Col><Col id=\"POSITION\">수석</Col><Col id=\"EMAIL\">tobe@tobesoft.com</Col><Col id=\"ADDRESS_DETAIL\">인탑스빌딩</Col><Col id=\"ADDRESS\">서울시 강남구 봉은사로 617</Col><Col id=\"BRITHDAY_GUBUN\">1</Col><Col id=\"BRITHDAY\">20000701</Col><Col id=\"HIRE_DATE\">20000101</Col><Col id=\"COMPANY_TEL_NO\">02-1234-5678</Col><Col id=\"PHONE_NO\">010-1234-5678</Col><Col id=\"TEL_NO\">02-1234-5678</Col><Col id=\"ZIP_CODE\">123456</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","10","81","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","10","374",null,"266","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_visible("true");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("인적사항");
            obj.set_url("Temp::Temp_TabPage01.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("학력정보");
            obj.set_url("Temp::Temp_TabPage02.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab00);
            obj.set_text("경력사항");
            obj.set_url("Temp::Temp_TabPage03.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab00);
            obj.set_text("발령사항");
            obj.set_url("Temp::Temp_TabPage04.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab00);
            obj.set_text("인사서류 첨부");
            obj.set_url("Temp::Temp_TabPage05.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","196","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("화면 유형 -Tab");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"5","63","24","142",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"5","63","24","76",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","63","24","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","10","339","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("상세 정보");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01","10","35",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","548","8","28","28",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Find");
            this.div00_01.addChild(obj.name, obj);

            obj = new Edit("edt00","376","8","172","28",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("1");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("sta01","293","8","83","28",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("2");
            obj.set_text("검색 조건");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div00_01.addChild(obj.name, obj);

            obj = new Combo("cbo01","83","8","110","28",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_01_form_cbo01_innerdataset = new nexacro.NormalDataset("div00_01_form_cbo01_innerdataset", obj);
            div00_01_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">이름</Col><Col id=\"datacolumn\">이름</Col></Row><Row><Col id=\"codecolumn\">휴대전화번호</Col><Col id=\"datacolumn\">휴대전화번호</Col></Row><Row><Col id=\"codecolumn\">이메일</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">부서</Col><Col id=\"datacolumn\">부서</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_form_cbo01_innerdataset);
            obj.set_text("이름");
            obj.set_value("이름");
            obj.set_index("0");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("sta00","0","8","83","28",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("4");
            obj.set_text("검색 구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div00_01.addChild(obj.name, obj);

            obj = new Div("div00","10","116",null,"223","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("divMain");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","280","148","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta10","280","185","738","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","157","223",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","280","0","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","156","37","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("법인/회사");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03","156","74","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta04","156","148","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("전화번호(휴대폰)");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta05","156","185","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("회사 이메일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta07","280","37","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta08","280","111","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta11","280","74","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta12","156","0","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta13","443","0","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta14","730","0","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("성명(영문)");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta15","443","37","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta16","730","37","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta17","443","74","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("퇴사여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta18","730","74","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta19","443","148","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("전화번호(집)");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta20","730","148","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("전화번호(사무실)");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new ImageViewer("img00","6","6","145","178",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'imagerc::img_emp13.png\')");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","36","191","84","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("사진등록");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FrmSub");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","285","5","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt02","285","42","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","285","79","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt04","285","153","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt06","285","190","280","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta04_00","156","111","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_text("급여 이체 은행");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta19_00","443","111","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta20_00","730","111","125","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo01","285","116","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_text("cbo01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00","567","0","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","572","5","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","854","0","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt01","859","5","148","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_value("chun Ji Young");
            obj.set_text("chun Ji Young");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","567","37","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","854","37","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo00","859","42","148","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt03","572","42","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","854","74","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","567","74","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal01","859","79","148","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","572","79","126","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">재직</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">퇴직</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00","567","111","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00","854","111","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt09","859","116","148","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt08","572","116","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00_00","567","148","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00_00","854","148","164","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","859","153","148","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt05","572","153","146","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab00.Tabpage1
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage3
            obj = new Layout("default","",0,0,this.tab00.Tabpage3.form,function(p){});
            this.tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage4
            obj = new Layout("default","",0,0,this.tab00.Tabpage4.form,function(p){});
            this.tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage5
            obj = new Layout("default","",0,0,this.tab00.Tabpage5.form,function(p){});
            this.tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_01.form
            obj = new Layout("default","",0,0,this.div00_01.form,function(p){});
            this.div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.Edit00_00_00","value","dsInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.Edit00_00_00_00","value","dsInfo","RESIGNATION_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.Edit00_01_01","value","dsInfo","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.Edit00_01_01_01","value","dsInfo","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.Edit00_00","value","dsInfo","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.Edit00_01","value","dsInfo","ZIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Temp::Temp_TabPage01.xfdl");
            this._addPreloadList("fdl","Temp::Temp_TabPage02.xfdl");
            this._addPreloadList("fdl","Temp::Temp_TabPage03.xfdl");
            this._addPreloadList("fdl","Temp::Temp_TabPage04.xfdl");
            this._addPreloadList("fdl","Temp::Temp_TabPage05.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TPLDSN005M00_onload,this);
            this.tab00.addEventHandler("onchanged",this.divDetail_tab00_onchanged,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div00_01.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
        };
        this.loadIncludeScript("Temp_Tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
