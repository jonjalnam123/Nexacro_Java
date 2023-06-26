(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp_Ex");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch2", this);
            obj._setContents("<ColumnInfo><Column id=\"col_dept\" type=\"STRING\" size=\"256\"/><Column id=\"col_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMember", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","9","9","143","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원관리");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Div("div00",null,"3","335","41","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","1","8","68","16",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_FrmMain");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","74","8","68","16",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("입력");
            obj.set_cssclass("btn_WF_FrmMain");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn02","147","8","68","16",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_FrmMain");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn03","220","8","68","16",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_FrmMain");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","10","60",null,"104","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div01");
            obj.set_background("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","15","18","124","72",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("부서코드/부서명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","180","18","141","58",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn00","340","33","30","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Find");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt01","427","18","140","45",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01","580","33","76","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","630","23","233","46",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("4");
            var div01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_form_rdo00_innerdataset", obj);
            div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">All</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여성</Col></Row><Row><Col id=\"codecolumn\">Etc</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdo00_innerdataset);
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02",null,"172","453","416","232",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div02");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","9","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","10","47","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_01","10","85","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","10","123","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","10","161","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","10","313","130","92",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","10","275","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_text("급여");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_01_02","10","237","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","10","199","130","39",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edt00","148","14","288","26",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_Essential");
            this.div02.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","148","49","288","31",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("10");
            obj.set_cssclass("msk_WF_Essential");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div02.addChild(obj.name, obj);

            obj = new Combo("cbo00","148","90","288","30",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("cbo00");
            this.div02.addChild(obj.name, obj);

            obj = new ListBox("lst00","148","126","288","32",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div02.addChild(obj.name, obj);

            obj = new Radio("rdo00","148","170","288","26",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            var div02_form_rdo00_innerdataset = new nexacro.NormalDataset("div02_form_rdo00_innerdataset", obj);
            div02_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여성</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(div02_form_rdo00_innerdataset);
            this.div02.addChild(obj.name, obj);

            obj = new CheckBox("chk00","148","208","56","28",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("14");
            obj.set_text("chk00");
            this.div02.addChild(obj.name, obj);

            obj = new Calendar("cal00","148","240","288","30",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_backgroundcolumn("backgroundcolumn");
            obj.set_bordercolumn("bordercolumn");
            obj.set_datecolumn("datecolumn");
            obj.set_textcolorcolumn("textcolorcolumn");
            var div02_form_cal00_innerdataset = new nexacro.NormalDataset("div02_form_cal00_innerdataset", obj);
            div02_form_cal00_innerdataset._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" size=\"256\"/><Column id=\"bordercolumn\" size=\"256\"/><Column id=\"datecolumn\" size=\"256\"/><Column id=\"textcolorcolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datecolumn\">20230701</Col><Col id=\"backgroundcolumn\">black</Col><Col id=\"bordercolumn\">red</Col><Col id=\"textcolorcolumn\">yellow</Col></Row></Rows>");
            obj.set_innerdataset(div02_form_cal00_innerdataset);
            this.div02.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","148","282","288","28",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("16");
            obj.set_format("#,##0.00");
            this.div02.addChild(obj.name, obj);

            obj = new TextArea("txt00","148","323","288","73",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("17");
            this.div02.addChild(obj.name, obj);

            obj = new Calendar("cal01","223","203","223","32",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("18");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grd00","9","175",null,null,"690","32",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"POS_CD\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"MEMO\"/><Cell col=\"9\" text=\"COL_CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:POS_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/><Cell col=\"9\" text=\"bind:COL_CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","201","15","109","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","576","13","98","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","10",null,null,"41","472","70",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("Cmm::CmmPaging.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","1072","170","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사원 조회 - 전체");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","1072","207","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사원 조회 - 조회조건 부서코드");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","1072","244","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사원 조회 - 부서코드 성명");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","1072","281","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사원조회 - 조회조건 DS 전달");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","1072","318","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("부서코드, 직급코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("btn06_00","1072","355","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("코드 데이터 가져오기 (A001,B001,F001)");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","1070","422","220","116",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_code");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","1072","387","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("div03","293","44","757","596",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div03");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","40","49","264","74",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt01","42","138","262","72",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02","40","224","270","83",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("2");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_00","40","320","270","83",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01","40","410","270","83",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("4");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn00","389","49","120","21",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("5");
            obj.set_text("아이디 중복");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn01","281","524","120","21",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("6");
            obj.set_text("회원가입");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn07_00","1072","547","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("아이디 중복체크");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","1072","577","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form
            obj = new Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div03.form
            obj = new Layout("default","",0,0,this.div03.form,function(p){});
            this.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div02.form.edt00","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div02.form.msk00","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div02.form.chk00","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div02.form.msk01","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div02.form.txt00","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div02.form.cal00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div02.form.cbo00","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div02.form.lst00","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div02.form.rdo00","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div02.form.cal01","visible","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div02.form.txt00","background","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div01.form.edt00","value","dsSearch2","col_dept");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div01.form.edt01","value","dsSearch2","col_name");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Emp_eGov.xfdl", function() {
        //조회
        this.btn01_onclick = function(obj,e)
        {
        	this.gfnTransaction("tr1"
        						,"nexa/selectEmpList.do"
        						,""
        						,"ds_emp=dsEmp"
        						,""
        						,"");

        };
        //조건 조회
        this.btn02_onclick = function(obj,e)
        {
        		this.gfnTransaction("tr2"
        						,"nexa/selectEmpListParam1.do"
        						,""
        						,"ds_emp=dsEmp"
        						,"paramDept=" + this.div01.form.edt00.value
        						,"");
        };

        this.btn04_onclick = function(obj,e)
        {
        		var sDeptCd =  this.div01.form.edt00.value
        		var sName = this.div01.form.edt01.value;

        		this.gfnTransaction("tr3"
        						,"nexa/selectEmpListParam2.do"
        						,""
        						,"ds_emp=dsEmp"
        						,"paramDept=" + sDeptCd + " paramName=" + nexacro.wrapQuote(sName)
        						,"");

        };

        this.btn05_onclick = function(obj,e)
        {
        			this.gfnTransaction("tr4"
        						,"nexa/selectEmpListParamDs.do"
        						,"paramDs=dsSearch2" //파라미터 전달
        						,"ds_emp=dsEmp"
        						,""
        						,"");
        };

        this.btn06_onclick = function(obj,e)
        {
        			this.gfnTransaction("tr5"
        						,"nexa/selectDeptPosList.do"
        						,""
        						,"ds_dept=dsDept ds_pos=dsPos" //DB조회
        						,""
        						,"");

        };

        this.btn06_00_onclick = function(obj,e)
        {			//A001, B001, F001
        			var arrCode = ["A001", "B001", "F001"];
        			this.gfnTransaction("tr6"
        						,"nexa/selectCodeList.do"
        						,""
        						,"ds_code=dsCode"
        						,"paramCode=" + arrCode.toString() //파라미터로 전달
        						,"fb");
        };

        this.fb = function() {
        	this.grd01.createFormat();
        }

        this.btn07_onclick = function(obj,e)
        {

        			this.gfnTransaction("tr5"
        						,"nexa/saveEmp.do"
        						,"in_emp=ds_emp:u" //저장
        						,""
        						,""
        						,"");

        };

        this.div00_btn01_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };

        this.div00_btn02_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };



        this.btn07_00_onclick = function(obj,e)
        {
        			this.gfnTransaction("trCheck"
        					,"nexa/checkEmpID.do"
        					,"" //저장
        					,""
        					,"paramID=" + this.edt00.value //에디트에 입력된 값 파라미터로
        					,"fnCallback");
        };

        this.emp_cnt = ""; //서버에서 넘겨진 변수값을 받을 수 있다.
        this.fnCallback = function(svcId, errCd, errMsg) {
        	if(this.emp_cnt >0) {
        		alert(errMsg); //서버에서 받아온거
        	}
        	else {
        		alert("사용해도 됨");
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Emp_Ex_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);
            this.div00.form.btn02.addEventHandler("onclick",this.div00_btn02_onclick,this);
            this.div00.form.btn03.addEventHandler("onclick",this.div00_btn03_onclick,this);
            this.div01.form.btn00.addEventHandler("onclick",this.div01_btn00_onclick,this);
            this.div02.form.rdo00.addEventHandler("onitemchanged",this.div02_rdo00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn06_00.addEventHandler("onclick",this.btn06_00_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn07_00.addEventHandler("onclick",this.btn07_00_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_Emp_eGov.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
