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
                this._setFormPosition(1038,650);
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

            obj = new Static("sta01","14","178","104","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사원목록");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Div("div02",null,"220","453","416","10",null,null,null,null,null,this);
            obj.set_taborder("6");
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

            obj = new Grid("grd00","9","222",null,null,"div02:5","115",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"231\"/><Column size=\"131\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"No2\"/><Cell col=\"2\" text=\"var1\"/><Cell col=\"3\" text=\"var2\"/><Cell col=\"4\" text=\"fn\"/><Cell col=\"5\" text=\"사원정보\"/><Cell col=\"6\" text=\"사번\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"부서\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"입사일자\"/><Cell col=\"11\" text=\"급여\"/><Cell col=\"12\" text=\"성별\"/><Cell col=\"13\" text=\"결혼여부\"/><Cell col=\"14\" text=\"MEMO\"/><Cell col=\"15\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:dataset.getRowCount() - currow\"/><Cell col=\"2\" text=\"expr:comp.parent.var1\"/><Cell col=\"3\" text=\"expr:comp.parent.var2\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_name(currow+1)\"/><Cell col=\"5\" text=\"expr:EMPL_ID + &quot;-&quot; + FULL_NAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:FULL_NAME\"/><Cell col=\"8\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"9\" text=\"bind:POS_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\"/><Cell col=\"10\" text=\"bind:HIRE_DATE\"/><Cell col=\"11\" text=\"bind:SALARY\"/><Cell col=\"12\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남성&quot; : GENDER == &quot;W&quot; ? &quot;여성&quot; : &quot;기타&quot;\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"14\" text=\"bind:MEMO\"/><Cell col=\"15\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount() + &apos;건&apos;\"/><Cell col=\"1\" text=\"expr:comp.parent.ds_emp.getRowCount() + &apos;건&apos;\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","grd00:0","178","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","201","15","109","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","652","175","154","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("컬럼 선택해서 정보 GET");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","824","174","98","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("잘못된것");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","576","13","98","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","10",null,null,"41","472","70",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("Cmm::CmmPaging.xfdl");
            obj.set_text("");
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

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Emp_Ex.xfdl", function() {
        var var1 = "abc";
        this.var2 = "123";
        this.fn_name = function(arg)
        {
        	return arg + 'pos';
        }

        this.fvRecords=0; 			//목록갯수
        this.fvPage=0;	 			//페이지번호
        this.fvRecordsOffset=0;		//시작rownum
        this.fvTotalCount=0;		//전체데이터갯수
        this.fvPageCount=0; 		//실제표출페이지갯수



        this.sta02_onclick = function(obj,e)
        {

        };

        this.btn00_onclick = function(obj,e)
        {
        	trace(this.ds_emp.saveXML());
        	var objApp = nexacro.getApplication();
        	trace(objApp.gdsMenu.saveXML()); //글로벌 변수 로그 남기는 법
        };

        //컬럼 데이터 가져오는 방법
        this.btn01_onclick = function(obj,e)
        {
        	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "FULL_NAME"));
        	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "EMPL_ID"));
         	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "DEPT_CD"));
         	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "POS_CD"));
         	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "GENDER"));
        	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "MARRIED"));
        	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "HIRE_DATE"));
        	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "SALARY"));
        	trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "MEMO"));

        		var nColCnt = this.ds_emp.getColCount();
        		for(var i=0; i<nColCnt; i++)
        		{
        			trace(this.ds_emp.get.column(this.ds_emp.rowposition, this.ds_emp.getColId(i)));
        		}
        };


        this.btn02_onclick = function(obj,e)
        {
        	trace(this.ds_emp.saveXML());
        };



        this.ds_emp_oncolumnchanged = function(obj,e)
        {
        	trace(e.newvalue);
        };



        //조회하기
        this.nRowPos = 0; //조회하면 눌렀던 로우로 가게 해주는 것
        this.div00_btn00_onclick = function(obj,e)
        {
        // 	this.transaction(
        // 	"strSelect", //서비스 구분자
        // 	"Eclipse::select_emp.jsp?a=b&c=d", //호출할 URL 서비스 주소 (GET 방식 할라면 여기다 ?a=b&c=d)
        // 	"", //저장시 server ds = client ds
        // 	"ds_emp=out_emp", //조회시 client ds = server ds
        // 	"a=b c=" + nexacro.wrapQuote("c e"), //전달값 (POST 방식으로 할라면 여기다 c=d) , nexacro.wrapQuote("c e") 예외 상황이 발생하지 않도록 꼭 씀
        // 	"fnCallback"); //해당 서비스의 끝 callback 함수
        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "records", this.fvRecords);
        	this.dsSearch.setColumn(nRow, "recordsOffset", this.fvRecordsOffset);

        	this.nRowPos = this.ds_emp.rowposition; //로우 값 찾는 것 //조회하면 눌렀던 로우로 가게 해주는 것
        	this.transaction(
        	"strSelect", //서비스 구분자
        	"Eclipse::select_emp.jsp?sDept="+this.div01.form.edt00.text, //get 방식으로 값을 보내주는 곳
        	"dsSearch=dsSearch", //보내줄시 server ds = client ds ss
        	"ds_emp=out_emp dsPagingInfo=dsPagingInfo", //조회시 client ds = server ds
        	"paramDept=" + nexacro.wrapQuote(this.div01.form.edt00.text), //전달값 (POST 방식으로 할라면 여기다 c=d) , nexacro.wrapQuote("c e") 예외 상황이 발생하지 않도록 꼭 씀
        	"fnCallback", true, 0); //해당 서비스의 끝 callback 함수
        };
        this.strAddVar =""; //서버에서 변수를 받아올때 쓰는 법 꼭 초기화

        this.fnCallback = function(sid, ecd, emsg)
        {


        	if(ecd >= 0)
        	{
        		if(sid == "strSelect")
        		{
        			this.fnPagingSetting();
        			alert(this.ds_emp.getRowCount() + '건 조회' + "==" + this.strAddVar); //+ "==" + this.strAddVar 서버에서 변수를 받아올때 쓰는 법
        //			this.ds_emp.set_rowposition(this.nRowPos); //조회하면 눌렀던 로우로 가게 해주는 것
        			return;

        		}else if(sid == "strSave")
        		{
        			alert("저장성공");
        		}

        	}else {
        		alert("오류 : " + ecd + ":" + emsg);
        	}
        }


        //입력은 통신하고 상관 없음
        this.div00_btn01_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();

        	//선택한 그리드 컬럼에 값 입력
        // 	this.div02.form.cal00.set_value("2023.04.21");
        // 	this.div02.form.rdo00.set_value("E")

        	//이렇게 하는게 좋다
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "GENDER", "M")
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "HIRE_DATE", "20230421")
        };

        //로우 삭제 기능
        this.div00_btn02_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };
        //저장하기
        this.div00_btn03_onclick = function(obj,e)
        {
        		this.transaction(
        		"strSave", //서비스 구분자
        		"Eclipse::save_emp.jsp", //호출할 URL 서비스 주소 (GET 방식 할라면 여기다 ?a=b&c=d)
        		"in_emp=ds_emp:U", //저장시 in_emp=ds_emp:U (U=변경된 것만 넘어감 A=조회,추가,삭제 저장을 다 넘겨줌 절대 X)
        		"",
        		"a=b c=" + nexacro.wrapQuote("c e"), //전달값 (POST 방식으로 할라면 여기다 c=d) , nexacro.wrapQuote("c e") 예외 상황이 발생하지 않도록 꼭 씀
        		"fnCallback"); //해당 서비스의 끝 callback 함수
        };

        //form이 처음에 로드 될때 서버에 있는 정보를 가져 오기 위한 것
        this.Form_Emp_Ex_onload = function(obj,e)
        {


        	this.gfnFormOnLoad(this);
        	this.transaction(
        	"strCode", //서비스 구분자
        	"Eclipse::select_code.jsp?a=b&c=d", //호출할 URL 서비스 주소 (GET 방식 할라면 여기다 ?a=b&c=d)
        	"", // 저장 하는거 아니니까 안씀
        	"ds_dept=out_dept ds_pos=out_pos",
        	"a=b c=" + nexacro.wrapQuote("c e"), //전달값 (POST 방식으로 할라면 여기다 c=d) , nexacro.wrapQuote("c e") 예외 상황이 발생하지 않도록 꼭 씀
        	"fnCallback"); //해당 서비스의 끝 callback 함수
        };

        this.btn03_onclick = function(obj,e)
        {
        	trace("a c");
        	trace(nexacro.wrapQuote("a c"));
        };

        //팝업 창 뛰우고 선택하고 ok 하면 값 넣어주기
        this.div01_btn00_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame(); //objChildFrame - 새로운 폼을 만들고 초기 값 설정
        	objChildFrame.init("chf_popup1" //차일드 팝업 이름
        		,0 //사이즈 정보
        		,0
        		,400 //width
        		,400 //height
        		, null
        		, null
        		, "EduBasic::Popup/Popup_DeptSearch.xfdl"); //띄우려고 하는 팝업 링크

        	objChildFrame.set_openalign("center middle"); //오픈 할때 위치
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)"); //부모 폼 (뒤쪽) 색상을 지정
        	objChildFrame.set_dragmovetype("all"); //폼을 드래그 하는 옵션
        	// 	objChildFrame.set_resizable(false);
        	// 	objChildFrame.set_showstatusbar(false);

        // 	//값 넘겨주는 것
        // 	var objParam = {param1:this.Edit3_1.value
        // 		, param2:this.Edit3_2.value
        // 		, param3:this.ds_dept};
        //
        	//showModal 창이 뜸
        	objChildFrame.showModal(this.getOwnerFrame()
        		,"" //값 안넘겨주면 안쓰기
        		, this
        		, "fn_popupCallback");	//닫는다는 신호 받기
        };

        this.fn_popupCallback = function(strPopupId, strReturn)
        {
        	if(strReturn == undefined) {
        		return;
        	}
        	if(strPopupId == "chf_popup1") {
        		trace("Return Value: " + strReturn);
        		var arrRtn = strReturn.split(":");
        		this.div01.form.edt00.set_value(arrRtn[0]);
        		this.div01.form.edt01.set_value(arrRtn[1]);
        	}

        };

        this.fnPagingSetting = function ()
        {
        	this.fvTotalCount = nexacro.toNumber(this.dsPagingInfo.getColumn("totalCount")); //전체로우갯수
        	//create page
        	this.divPage.form.fnCreatePage("fnPagingCallback",
        									this.fvTotalCount,
        									this.fvRecords,
        									this.fvPage,
        									this.fvPageCount);
        };






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
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_Emp_Ex.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
