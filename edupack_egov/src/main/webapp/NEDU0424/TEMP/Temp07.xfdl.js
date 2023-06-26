(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp07");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_EMP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR10</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR30</Col><Col id=\"COL_CHK\">1</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">265</Col><Col id=\"CORP_DEPT_CD\">KR20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"CORP_CEO\">ひでみ</Col><Col id=\"CORP_EMP_NUM\">25</Col><Col id=\"CORP_DEPT_CD\">JP30</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN10</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN20</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"CORP_CEO\">英美</Col><Col id=\"CORP_EMP_NUM\">600</Col><Col id=\"CORP_DEPT_CD\">CN30</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR40</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">홍길동</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR50</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">200</Col><Col id=\"CORP_DEPT_CD\">KR10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">300</Col><Col id=\"CORP_DEPT_CD\">KR10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"CORP_CEO\">양인범</Col><Col id=\"CORP_EMP_NUM\">300</Col><Col id=\"CORP_DEPT_CD\">KR30</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Work\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Work\">Do</Col></Row><Row><Col id=\"Work\">Ou</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00",null,"0","10","650","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("w10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10","650",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00",null,"0","140","35","478",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","99","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면유형 - Tab");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","35",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","357","8","91","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("검색 조건");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","7","8","83","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("검색 구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","90","8","167","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","448","8","167","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","587","8","28","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Find");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","50","24","116",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"6","50","24","63",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"6","50","24","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","10","81","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00",null,"81","140","35","418",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","116",null,"228","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_background("green");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","151","38","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("법인/회사");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","276","0","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","151","0","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","151","76","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02","151","190","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("회사 이메일");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03","151","114","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("급여 이체 은행");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_04","151","152","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("전화번호(휴대폰)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","276","38","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01","276","190",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_02","276","152","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_03","276","76","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_04","276","114","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","565","152","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","440","152","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("전화번호(집)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","440","114","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","565","114","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","440","76","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("퇴사 여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","565","76","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","565","38","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_05","440","38","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","440","0","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_05","565","0","164","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","854","152",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00","729","152","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("전화번호(사무실)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_04_00_00","854","114",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","729","114","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00","854","76",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","729","76","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","854","38",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_05_00","729","38","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_05_00","854","0",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","729","0","125","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("성명(영문)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","151","228",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","3","4","145","186",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_image("url(\'theme://images/file_icon_PDF.png\')");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","38","198","74","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_FrmSub");
            obj.set_text("사진등록");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","281","5","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","281","43","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","281","81","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","281","119","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","281","157","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","281","195","279","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","571","5","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_03","571","43","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","571","80","106","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">재직</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">퇴사</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00","571","119","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00","571","157","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01","862","119","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_02","862","157","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","862","81","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","862","43","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_text("Combo01");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","862","5","149","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_value("Jung Seok");
            obj.set_text("Jung Seok");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","12","344","56","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","376",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            obj.set_showtabbuttonicon("false");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("인적사항");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("학력정보");
            obj.set_url("TEMP::Tap01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("경력사항");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","35",null,"179","0",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"재직기간\"/><Cell col=\"2\" rowspan=\"2\" text=\"재직회사\"/><Cell col=\"3\" rowspan=\"2\" text=\"직위\"/><Cell col=\"4\" rowspan=\"2\" text=\"담당업무\"/><Cell row=\"1\" text=\"입사일\"/><Cell row=\"1\" col=\"1\" text=\"퇴사일\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:CORP_CODE\"/><Cell col=\"2\" text=\"bind:CORP_NAME\"/><Cell col=\"3\" text=\"bind:CORP_CEO\"/><Cell col=\"4\" text=\"bind:CORP_EMP_NUM\"/></Band></Format></Formats>");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00",null,"0","140","35","418",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button00",null,"5","24","24","26",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Add");
            obj.set_text("");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"5","24","24","0",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Del");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("발령사항");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("인사서류 첨부");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00",null,"640","140","10","408",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage5.form,function(p){});
            this.Tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","TEMP::Tap01.xfdl");
        };
        
        // User Script
        this.registerScript("Temp07.xfdl", function() {

        this.Tab00_onchanged = function(obj,e)
        {

        };

        this.Div01_Static01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static01.addEventHandler("onclick",this.Div01_Static01_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("Temp07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
