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
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"COL_CHK\">0</Col></Row></Rows>");
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

            obj = new Grid("grd00","9","431",null,null,"div02:5","10",null,null,null,null,this);
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

            obj = new Grid("grd01","17","216","538","196",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CD\"/><Cell col=\"1\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
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

        };
        
        // User Script
        this.registerScript("Form_Emp_Ex2.xfdl", function() {
        var var1 = "abc";
        this.var2 = "123";

        this.fn_name = function(arg)
        {
        	return arg + 'pos';
        }



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


        this.grd01_oncellclick = function(obj,e)
        {
        // 	var objDs = obj.getBindDataset();
        // 	this.ds_emp.filter("DEPT_CD == '" + objDs.getColumn(e.row,"DEPT_CD") + "'");
        // 	this.de_emp.set_rowposition(0);
        };



        this.ds_dept_onrowposchanged = function(obj,e)
        {
        	this.ds_emp.filter("DEPT_CD == '" + obj.getColumn(e.newrow,"DEPT_CD") +"'");
        	this.ds_emp.set_rowposition(0);
        };

        this.div00_onclick = function(obj,e)
        {

        };

        this.div00_btn01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.div00.addEventHandler("onclick",this.div00_onclick,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);
            this.div02.form.rdo00.addEventHandler("onitemchanged",this.div02_rdo00_onitemchanged,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.grd01.addEventHandler("oncellclick",this.grd01_oncellclick,this);
            this.grd01.addEventHandler("onselectchanged",this.grd01_onselectchanged,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_Emp_Ex2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
