(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Form_Emp_Ex");this.set_titletext("New Form");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds00",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">교육팀</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">홍길동</Col><Col id=\"SALARY\">100000</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">이순신</Col><Col id=\"SALARY\">1000000</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_pos",this);_a._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("sta00","9","9","143","32",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("사원관리");_a.set_cssclass("sta_WF_TitleMain");this.addChild(_a.name,_a);_a=new Div("div00",null,"3","335","41","10",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("div00");_a.set_background("transparent");this.addChild(_a.name,_a);_a=new Button("btn00","1","8","68","16",null,null,null,null,null,null,this.div00.form);_a.set_taborder("0");_a.set_text("조회");_a.set_cssclass("btn_WF_FrmMain");this.div00.addChild(_a.name,_a);_a=new Button("btn01","74","8","68","16",null,null,null,null,null,null,this.div00.form);_a.set_taborder("1");_a.set_text("입력");_a.set_cssclass("btn_WF_FrmMain");this.div00.addChild(_a.name,_a);_a=new Button("btn02","147","8","68","16",null,null,null,null,null,null,this.div00.form);_a.set_taborder("2");_a.set_text("삭제");_a.set_cssclass("btn_WF_FrmMain");this.div00.addChild(_a.name,_a);_a=new Button("btn03","220","8","68","16",null,null,null,null,null,null,this.div00.form);_a.set_taborder("3");_a.set_text("저장");_a.set_cssclass("btn_WF_FrmMain");this.div00.addChild(_a.name,_a);_a=new Div("div01","10","60",null,"104","10",null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("div01");_a.set_background("");_a.set_cssclass("div_WF_Search");this.addChild(_a.name,_a);_a=new Static("sta00","15","18","124","72",null,null,null,null,null,null,this.div01.form);_a.set_taborder("0");_a.set_text("부서코드/부서명");_a.set_cssclass("sta_WF_SearchLabel");this.div01.addChild(_a.name,_a);_a=new Edit("edt00","180","18","141","58",null,null,null,null,null,null,this.div01.form);_a.set_taborder("1");this.div01.addChild(_a.name,_a);_a=new Button("btn00","340","33","30","28",null,null,null,null,null,null,this.div01.form);_a.set_taborder("2");_a.set_cssclass("btn_WF_Find");_a.set_textAlign("center");this.div01.addChild(_a.name,_a);_a=new Edit("edt01","427","18","140","45",null,null,null,null,null,null,this.div01.form);_a.set_taborder("3");this.div01.addChild(_a.name,_a);_a=new Static("sta01","580","33","76","28",null,null,null,null,null,null,this.div01.form);_a.set_taborder("4");_a.set_text("성별");_a.set_cssclass("sta_WF_SearchLabel");this.div01.addChild(_a.name,_a);_a=new Radio("rdo00","630","23","233","46",null,null,null,null,null,null,this.div01.form);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("4");var _b=new nexacro.NormalDataset("div01_form_rdo00_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">All</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여성</Col></Row><Row><Col id=\"codecolumn\">Etc</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");_a.set_innerdataset(_b);this.div01.addChild(_a.name,_a);_a=new Static("sta01","14","178","104","50",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("사원목록");_a.set_cssclass("sta_WF_TitleSub");this.addChild(_a.name,_a);_a=new Div("div02",null,"220","453","416","10",null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("div02");_a.set_border("1px solid black");this.addChild(_a.name,_a);_a=new Static("sta00","10","9","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("0");_a.set_text("성명");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_00","10","47","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("1");_a.set_text("사원번호");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_01","10","85","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("2");_a.set_text("부서");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_01_00","10","123","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("3");_a.set_text("직급");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_01_01","10","161","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("4");_a.set_text("성별");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_01_01_00","10","313","130","92",null,null,null,null,null,null,this.div02.form);_a.set_taborder("5");_a.set_text("비고");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_01_00_00","10","275","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("6");_a.set_text("급여");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_01_02","10","237","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("7");_a.set_text("입사일자");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Static("sta00_00_00","10","199","130","39",null,null,null,null,null,null,this.div02.form);_a.set_taborder("8");_a.set_text("결혼여부");_a.set_cssclass("sta_WF_DetailLabel");this.div02.addChild(_a.name,_a);_a=new Edit("edt00","148","14","288","26",null,null,null,null,null,null,this.div02.form);_a.set_taborder("9");_a.set_cssclass("edt_WF_Essential");this.div02.addChild(_a.name,_a);_a=new MaskEdit("msk00","148","49","288","31",null,null,null,null,null,null,this.div02.form);_a.set_taborder("10");_a.set_cssclass("msk_WF_Essential");_a.set_type("string");_a.set_format("AA-###");this.div02.addChild(_a.name,_a);_a=new Combo("cbo00","148","90","288","30",null,null,null,null,null,null,this.div02.form);_a.set_taborder("11");_a.set_innerdataset("ds_dept");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_text("cbo00");this.div02.addChild(_a.name,_a);_a=new ListBox("lst00","148","126","288","32",null,null,null,null,null,null,this.div02.form);_a.set_taborder("12");_a.set_innerdataset("ds_pos");_a.set_codecolumn("POS_CD");_a.set_datacolumn("POS_NAME");this.div02.addChild(_a.name,_a);_a=new Radio("rdo00","148","170","288","26",null,null,null,null,null,null,this.div02.form);_a.set_taborder("13");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("3");_a.set_direction("horizontal");var _c=new nexacro.NormalDataset("div02_form_rdo00_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여성</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");_a.set_innerdataset(_c);this.div02.addChild(_a.name,_a);_a=new CheckBox("chk00","148","208","56","28",null,null,null,null,null,null,this.div02.form);_a.set_taborder("14");_a.set_text("chk00");this.div02.addChild(_a.name,_a);_a=new Calendar("cal00","148","240","288","30",null,null,null,null,null,null,this.div02.form);_a.set_taborder("15");_a.set_cssclass("cal_WF_Essential");_a.set_backgroundcolumn("backgroundcolumn");_a.set_bordercolumn("bordercolumn");_a.set_datecolumn("datecolumn");_a.set_textcolorcolumn("textcolorcolumn");var _d=new nexacro.NormalDataset("div02_form_cal00_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" size=\"256\"/><Column id=\"bordercolumn\" size=\"256\"/><Column id=\"datecolumn\" size=\"256\"/><Column id=\"textcolorcolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datecolumn\">20230701</Col><Col id=\"backgroundcolumn\">black</Col><Col id=\"bordercolumn\">red</Col><Col id=\"textcolorcolumn\">yellow</Col></Row></Rows>");_a.set_innerdataset(_d);this.div02.addChild(_a.name,_a);_a=new MaskEdit("msk01","148","282","288","28",null,null,null,null,null,null,this.div02.form);_a.set_taborder("16");_a.set_format("#,##0.00");this.div02.addChild(_a.name,_a);_a=new TextArea("txt00","148","323","288","73",null,null,null,null,null,null,this.div02.form);_a.set_taborder("17");this.div02.addChild(_a.name,_a);_a=new Calendar("cal01","223","203","223","32",null,null,null,null,null,null,this.div02.form);_a.set_taborder("18");this.div02.addChild(_a.name,_a);_a=new Grid("grd00","9","222",null,null,"div02:5","10",null,null,null,null,this);_a.set_taborder("4");_a.set_binddataset("ds_emp");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"231\"/><Column size=\"131\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"No2\"/><Cell col=\"2\" text=\"var1\"/><Cell col=\"3\" text=\"var2\"/><Cell col=\"4\" text=\"fn\"/><Cell col=\"5\" text=\"사원정보\"/><Cell col=\"6\" text=\"사번\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"부서\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"입사일자\"/><Cell col=\"11\" text=\"급여\"/><Cell col=\"12\" text=\"성별\"/><Cell col=\"13\" text=\"결혼여부\"/><Cell col=\"14\" text=\"MEMO\"/><Cell col=\"15\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:dataset.getRowCount() - currow\"/><Cell col=\"2\" text=\"expr:comp.parent.var1\"/><Cell col=\"3\" text=\"expr:comp.parent.var2\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_name(currow+1)\"/><Cell col=\"5\" text=\"expr:EMPL_ID + &quot;-&quot; + FULL_NAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:FULL_NAME\"/><Cell col=\"8\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"9\" text=\"bind:POS_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\"/><Cell col=\"10\" text=\"bind:HIRE_DATE\"/><Cell col=\"11\" text=\"bind:SALARY\"/><Cell col=\"12\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남성&quot; : GENDER == &quot;W&quot; ? &quot;여성&quot; : &quot;기타&quot;\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"14\" text=\"bind:MEMO\"/><Cell col=\"15\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount() + &apos;건&apos;\"/><Cell col=\"1\" text=\"expr:comp.parent.ds_emp.getRowCount() + &apos;건&apos;\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta02","grd00:0","178","120","26",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("상세정보");_a.set_cssclass("sta_WF_TitleSub");this.addChild(_a.name,_a);_a=new Button("btn00","201","15","109","35",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("btn00");this.addChild(_a.name,_a);_a=new Button("btn01","652","175","154","34",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("컬럼 선택해서 정보 GET");this.addChild(_a.name,_a);_a=new Button("btn02","824","174","98","29",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("잘못된것");this.addChild(_a.name,_a);_a=new Button("btn03","576","13","98","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("btn03");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div00.form,function(_e){});this.div00.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div01.form,function(_e){});this.div01.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div02.form,function(_e){});this.div02.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_e){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","div02.form.edt00","value","ds_emp","FULL_NAME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div02.form.msk00","value","ds_emp","EMPL_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div02.form.chk00","value","ds_emp","MARRIED");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div02.form.msk01","value","ds_emp","SALARY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div02.form.txt00","value","ds_emp","MEMO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div02.form.cal00","value","ds_emp","HIRE_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div02.form.cbo00","value","ds_emp","DEPT_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div02.form.lst00","value","ds_emp","POS_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div02.form.rdo00","value","ds_emp","GENDER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div02.form.cal01","visible","ds_emp","MARRIED");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div02.form.txt00","background","ds_emp","MEMO");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Form_Emp_Ex.xfdl",function(){var _b="abc";this.var2="123";this.fn_name=function(_c){return _c+'pos';};this.sta02_onclick=function(_a,_c){};this.btn00_onclick=function(_a,_c){trace(this.ds_emp.saveXML());var _d=nexacro.getApplication();trace(_d.gdsMenu.saveXML());};this.btn01_onclick=function(_a,_c){trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"FULL_NAME"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"EMPL_ID"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"DEPT_CD"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"POS_CD"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"GENDER"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"MARRIED"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"HIRE_DATE"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"SALARY"));trace(this.ds_emp.getColumn(this.ds_emp.rowposition,"MEMO"));var _d=this.ds_emp.getColCount();for(var _e=0;_e<_d;_e++ ){trace(this.ds_emp.get.column(this.ds_emp.rowposition,this.ds_emp.getColId(_e)));}};this.btn02_onclick=function(_a,_c){trace(this.ds_emp.saveXML());};this.ds_emp_oncolumnchanged=function(_a,_c){trace(_c.newvalue);};this.nRowPos=0;this.div00_btn00_onclick=function(_a,_c){this.nRowPos=this.ds_emp.rowposition;this.transaction("strSelect","Eclipse::select_emp.jsp?sDept="+this.div01.form.edt00.text,"","ds_emp=out_emp","paramDept="+nexacro.wrapQuote(this.div01.form.edt00.text),"fnCallback",true,0);};this.strAddVar="";this.fnCallback=function(_c,_d,_e){if(_d>=0){if(_c=="strSelect"){alert(this.ds_emp.getRowCount()+'건 조회'+"=="+this.strAddVar);return;}else if(_c=="strSave"){alert("저장성공");}}else{alert("오류 : "+_d+":"+_e);}};this.div00_btn01_onclick=function(_a,_c){this.ds_emp.addRow();this.ds_emp.setColumn(this.ds_emp.rowposition,"GENDER","M");this.ds_emp.setColumn(this.ds_emp.rowposition,"HIRE_DATE","20230421");};this.div00_btn02_onclick=function(_a,_c){this.ds_emp.deleteRow(this.ds_emp.rowposition);};this.div00_btn03_onclick=function(_a,_c){this.transaction("strSave","Eclipse::save_emp.jsp","in_emp=ds_emp:U","","a=b c="+nexacro.wrapQuote("c e"),"fnCallback");};this.Form_Emp_Ex_onload=function(_a,_c){this.transaction("strCode","Eclipse::select_code.jsp?a=b&c=d","","ds_dept=out_dept ds_pos=out_pos","a=b c="+nexacro.wrapQuote("c e"),"fnCallback");};this.btn03_onclick=function(_a,_c){trace("a c");trace(nexacro.wrapQuote("a c"));};this.div01_btn00_onclick=function(_a,_c){var _d=new ChildFrame();_d.init("chf_popup1",0,0,400,400,null,null,"EduBasic::Popup/Popup_DeptSearch.xfdl");_d.set_openalign("center middle");_d.set_overlaycolor("RGBA(196,196,196,0.5)");_d.set_dragmovetype("all");_d.showModal(this.getOwnerFrame(),"",this,"fn_popupCallback");};this.fn_popupCallback=function(_c,_d){if(_d==undefined){return;}if(_c=="chf_popup1"){trace("Return Value: "+_d);var _e=_d.split(":");this.div01.form.edt00.set_value(_e[0]);this.div01.form.edt01.set_value(_e[1]);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_Emp_Ex_onload,this);this.sta00.addEventHandler("onclick",this.sta00_onclick,this);this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);this.div00.form.btn02.addEventHandler("onclick",this.div00_btn02_onclick,this);this.div00.form.btn03.addEventHandler("onclick",this.div00_btn03_onclick,this);this.div01.form.btn00.addEventHandler("onclick",this.div01_btn00_onclick,this);this.div02.form.rdo00.addEventHandler("onitemchanged",this.div02_rdo00_onitemchanged,this);this.sta02.addEventHandler("onclick",this.sta02_onclick,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.btn01.addEventHandler("onclick",this.btn01_onclick,this);this.btn02.addEventHandler("onclick",this.btn02_onclick,this);this.btn03.addEventHandler("onclick",this.btn03_onclick,this);this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);};this.loadIncludeScript("Form_Emp_Ex.xfdl");this.loadPreloadList();_a=null;};})();