(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Exe2_Chap1_Dataset");this.set_titletext("Exe2_Chap1_Dataset");if(Form==this.constructor){this._setFormPosition(1000,700);}_a=new Dataset("Dataset1",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">John@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("Dataset4",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("Dataset5",this);_a.set_keystring("");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("Dataset6",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("Grid1","10","70",null,"226","10",null,null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("Dataset1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:MARRIED\" textAlign=\"center\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Exercise2 - Dataset");_a.set_cssclass("sta_WF_Subtitle");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Static("Static07","10","40","350","30",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Exe1, Exe2, Exe3 Base Data - Dataset1");_a.set_cssclass("sta_WF_TypeTitle");this.addChild(_a.name,_a);_a=new Grid("Grid6","10","70","980","317",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_binddataset("Dataset6");_a.set_positionstep("2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"SALARY\"/><Cell col=\"4\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SALARY\"/><Cell col=\"4\" text=\"bind:GENDER\" textAlign=\"center\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_Filter","510","627","60","30",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("Filter");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe1_1","10","427","60","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("1_1");this.addChild(_a.name,_a);_a=new Button("btn_Exe1_2","10","467","60","30",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("1_2");this.addChild(_a.name,_a);_a=new Static("Static02","10","40","250","30",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Exe4 Base Data - Dataset4");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Grid("Grid4","10","70","480","226",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_binddataset("Dataset4");_a.set_positionstep("1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"98\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Row\"/><Cell col=\"1\" text=\"EMPL_ID\"/><Cell col=\"2\" text=\"FULL_NAME\"/><Cell col=\"3\" text=\"DEPT_CODE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"RowType\"/></Band><Band id=\"body\"><Cell text=\"expr:currow\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"6\" text=\"expr:dataset.getRowType(currow)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Exe4_1","15","427","60","30",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("4_1");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe4_2","15","467","60","30",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("4_2");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe4_3","15","507","60","30",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("4_3");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe4_4","15","547","60","30",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("4_4");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe4_5","15","587","60","30",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text("4_5");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe4_Check","15","627","60","30",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("Check");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_1","510","427","60","30",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("3_1");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_2","510","467","60","30",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text("3_2");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_3","510","507","60","30",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text("3_3");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_4","510","547","60","30",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_text("3_4");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe3_05","510","587","60","30",null,null,null,null,null,null,this);_a.set_taborder("19");_a.set_text("3_5");_a.set_positionstep("0");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_1","10","547","60","30",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_text("2_1");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_2","10","587","60","30",null,null,null,null,null,null,this);_a.set_taborder("21");_a.set_text("2_2");this.addChild(_a.name,_a);_a=new Button("btn_Exe2_3","10","627","60","30",null,null,null,null,null,null,this);_a.set_taborder("22");_a.set_text("2_3");this.addChild(_a.name,_a);_a=new Grid("Grid5","510","70",null,"317","10",null,null,null,null,null,this);_a.set_taborder("23");_a.set_binddataset("Dataset5");_a.set_positionstep("1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"/></Formats>");this.addChild(_a.name,_a);_a=new Static("Static03","510","40","250","30",null,null,null,null,null,null,this);_a.set_taborder("24");_a.set_text("Exe5 Base Data - Dataset5");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe5_1","510","427","60","30",null,null,null,null,null,null,this);_a.set_taborder("25");_a.set_text("5_1");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe5_2","510","467","60","30",null,null,null,null,null,null,this);_a.set_taborder("26");_a.set_text("5_2");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe5_3","510","507","60","30",null,null,null,null,null,null,this);_a.set_taborder("27");_a.set_text("5_3");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_Exe5_4","510","547","60","30",null,null,null,null,null,null,this);_a.set_taborder("28");_a.set_text("5_4");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static00","10","40","250","24",null,null,null,null,null,null,this);_a.set_taborder("29");_a.set_text("Exe6 Base Data - Dataset6");_a.set_cssclass("sta_WF_TypeTitle");_a.set_positionstep("2");this.addChild(_a.name,_a);_a=new Button("btn_Exe6_3","10","505","60","30",null,null,null,null,null,null,this);_a.set_taborder("30");_a.set_text("6_3");_a.set_positionstep("2");this.addChild(_a.name,_a);_a=new Button("btn_Exe6_5","10","545","60","30",null,null,null,null,null,null,this);_a.set_taborder("31");_a.set_text("6_5");_a.set_positionstep("2");this.addChild(_a.name,_a);_a=new Static("Static01","10","397","120","30",null,null,null,null,null,null,this);_a.set_taborder("32");_a.set_text("Exe1");_a.set_cssclass("sta_WF_LabelTxt");this.addChild(_a.name,_a);_a=new Static("Static04","10","517","120","30",null,null,null,null,null,null,this);_a.set_taborder("33");_a.set_text("Exe2");_a.set_cssclass("sta_WF_LabelTxt");this.addChild(_a.name,_a);_a=new Static("Static05","510","397","120","30",null,null,null,null,null,null,this);_a.set_taborder("34");_a.set_text("Exe3");_a.set_cssclass("sta_WF_LabelTxt");this.addChild(_a.name,_a);_a=new Static("Static08","80","427","398","30",null,null,null,null,null,null,this);_a.set_taborder("35");_a.set_text("데이터셋의 컬럼(Column) 개수와 레코드(Row) 개수, 컬럼명(Column ID)을 구하기. ");_a.set_wordWrap("english");this.addChild(_a.name,_a);_a=new Static("Static09","80","467","398","30",null,null,null,null,null,null,this);_a.set_taborder("36");_a.set_text("컬럼추가 - ID가 “COL_CHK”인 STRING 컬럼을 추가. ");_a.set_wordWrap("english");this.addChild(_a.name,_a);_a=new Static("Static10","80","587","398","30",null,null,null,null,null,null,this);_a.set_taborder("37");_a.set_text("복합조건 - 부서코드가 “K10”이고 급여가 5,000 이하인 사원 구하기.");_a.set_wordWrap("english");this.addChild(_a.name,_a);_a=new Static("Static11","80","547","398","30",null,null,null,null,null,null,this);_a.set_taborder("38");_a.set_text("단일조건 - 사원번호가 “KR120”인 사원의 성명 구하기.");_a.set_wordWrap("english");this.addChild(_a.name,_a);_a=new Static("Static12","80","627","398","30",null,null,null,null,null,null,this);_a.set_taborder("39");_a.set_text("부서가 “K10”인 사원 목록 구하기. ");_a.set_wordWrap("english");this.addChild(_a.name,_a);_a=new Static("Static13","580","427","378","30",null,null,null,null,null,null,this);_a.set_taborder("40");_a.set_text("남성과 여성의 평균 급여 계산. ");this.addChild(_a.name,_a);_a=new Static("Static14","580","467","378","30",null,null,null,null,null,null,this);_a.set_taborder("41");_a.set_text("급여와 보너스를 합친 금액의 평균 금액 계산. ");this.addChild(_a.name,_a);_a=new Static("Static15","580","507","378","30",null,null,null,null,null,null,this);_a.set_taborder("42");_a.set_text("입사일을 기준으로 내림차순 정렬. ");this.addChild(_a.name,_a);_a=new Static("Static16","580","547","378","30",null,null,null,null,null,null,this);_a.set_taborder("43");_a.set_text("남성이고 미혼인 데이터만 필터하여 표현. ");this.addChild(_a.name,_a);_a=new Static("Static17","580","587","378","30",null,null,null,null,null,null,this);_a.set_taborder("44");_a.set_text("원본 레코드 개수와 필터해서 보이는 레코드의 개수 비교.");this.addChild(_a.name,_a);_a=new Static("Static18","80","427","393","30",null,null,null,null,null,null,this);_a.set_taborder("45");_a.set_text("최상위에 새로운 Row를 삽입하고 Row 상태값을 확인.");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static19","80","467","393","30",null,null,null,null,null,null,this);_a.set_taborder("46");_a.set_text("두번째 Row의 성명 컬럼을 “Nexacro”로 변경하고 레코드 상태값 확인.  ");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static20","80","507","393","30",null,null,null,null,null,null,this);_a.set_taborder("47");_a.set_text("변경되기 전과 후의 성명 데이터 확인.");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static21","80","547","393","30",null,null,null,null,null,null,this);_a.set_taborder("48");_a.set_text("Row Index가 3, 4, 5인 레코드를 멀티 삭제. ");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static22","80","587","393","30",null,null,null,null,null,null,this);_a.set_taborder("49");_a.set_text("삭제한 레코드 개수와 삭제한 성명 데이터 구하기 ");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static23","80","627","393","30",null,null,null,null,null,null,this);_a.set_taborder("50");_a.set_text("데이터 변경여부 체크.");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new TextArea("txtRtn1","10","301","980","86",null,null,null,null,null,null,this);_a.set_taborder("51");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static24","580","427","385","30",null,null,null,null,null,null,this);_a.set_taborder("52");_a.set_text("Dataset4를 Dataset5로 복사. ");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static25","580","467","385","30",null,null,null,null,null,null,this);_a.set_taborder("53");_a.set_text("Exe4에서 입력, 수정한 정보 모두 복사.");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static26","580","507","385","30",null,null,null,null,null,null,this);_a.set_taborder("54");_a.set_text("Dataset4에서 사원번호(EMPL_ID)가 “KR040”인 Row만 Dataset5에 복사. ");_a.set_positionstep("1");_a.set_wordWrap("english");this.addChild(_a.name,_a);_a=new Static("Static27","580","547","385","30",null,null,null,null,null,null,this);_a.set_taborder("55");_a.set_text("사원번호가 “KR210”인 Row 중 성명과 사원번호 컬럼만 Dataset5에 복사. ");_a.set_positionstep("1");_a.set_wordWrap("english");this.addChild(_a.name,_a);_a=new TextArea("txtRtn2","10","301","480","86",null,null,null,null,null,null,this);_a.set_taborder("56");_a.set_positionstep("1");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static28","80","505","464","30",null,null,null,null,null,null,this);_a.set_taborder("57");_a.set_text("데이터를 변경하는 스크립트를 작성 후 실행하여 이벤트 발생 순서 확인. ");_a.set_positionstep("2");this.addChild(_a.name,_a);_a=new Static("Static29","80","545","344","30",null,null,null,null,null,null,this);_a.set_taborder("58");_a.set_text("데이터 변경시 이벤트 발생 멈추기 ");_a.set_positionstep("2");this.addChild(_a.name,_a);_a=new Static("Static05_00","10","397","120","30",null,null,null,null,null,null,this);_a.set_taborder("59");_a.set_text("Exe4");_a.set_cssclass("sta_WF_LabelTxt");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static05_00_00","510","397","120","30",null,null,null,null,null,null,this);_a.set_taborder("60");_a.set_text("Exe5");_a.set_cssclass("sta_WF_LabelTxt");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static05_00_00_00","10","397","120","30",null,null,null,null,null,null,this);_a.set_taborder("61");_a.set_text("Exe6");_a.set_cssclass("sta_WF_LabelTxt");_a.set_positionstep("2");this.addChild(_a.name,_a);_a=new Static("Static17_00","580","627","378","30",null,null,null,null,null,null,this);_a.set_taborder("62");_a.set_text("성명에 영문 “e” 가 포함되어 있는 데이터만 필터\r\n( 대소문자 구별 없이)");this.addChild(_a.name,_a);_a=new Static("Static05_00_00_00_00","10","425","800","72",null,null,null,null,null,null,this);_a.set_taborder("63");_a.set_text("6-1 Dataset6의 cancolumnchange, oncolumnchanged 이벤트에 함수 생성.\r\n6-2 각각의 함수에 trace() 또는 alert()을 이용하여 로그를 확인\r\n6-3 데이터를 변경하는 스크립트를 작성 후 실행하여 이벤트 발생 순서 확인.");_a.set_cssclass("sta_WF_LabelTxt");_a.set_positionstep("2");this.addChild(_a.name,_a);_a=new Button("btn00","12","664","196","28",null,null,null,null,null,null,this);_a.set_taborder("64");_a.set_text("위에꺼를 다른 방식의 코드로");this.addChild(_a.name,_a);_a=new Button("btn01","777","516","55","26",null,null,null,null,null,null,this);_a.set_taborder("65");_a.set_text("오름차\r\n순정렬");this.addChild(_a.name,_a);_a=new Button("btn02","833","557","120","21",null,null,null,null,null,null,this);_a.set_taborder("66");_a.set_text("여성이고\r\n결혼한사람");this.addChild(_a.name,_a);_a=new Button("btn03","362","548","70","34",null,null,null,null,null,null,this);_a.set_taborder("67");_a.set_text("전체삭제");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn04","820","469","70","27",null,null,null,null,null,null,this);_a.set_taborder("68");_a.set_text("btn04");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Layout("default","",1000,700,this,function(_b){});_a.set_stepcount("3");_a.set_stepindex("0");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Exe_Chap1_Dataset.xfdl",function(){this.btn_Exe1_1_onclick=function(_a,_b){var _c=this.Dataset1.getColCount();var _d=this.Dataset1.getRowCount();trace("ColCoun="+_c+"RowCount="+_d);this.txtRtn1.set_value("ColCoun="+_c+"RowCount="+_d);for(var _g=0;_g<_c;_g++ ){var _e=this.Dataset1.getColID(_g);trace("col id = "+_e);var _f=this.Dataset1.getColumnInfo(_g);trace(_f.id+":"+_f.type+":"+_f.size);}};this.btn_Exe1_2_onclick=function(_a,_b){this.Dataset1.addColumn("COL_CHK","STRING",1);};this.btn_Exe2_1_onclick=function(_a,_b){var _c=this.Dataset1.lookup("EMPL_ID","KR120","FULL_NAME");trace(_c);this.txtRtn1.set_value(_c);};this.btn_Exe2_2_onclick=function(_a,_b){var _c=this.Dataset1.findRowExpr("DEPT_CODE == 'K10' && SALARY <=5000");var _d=this.Dataset1.getColumn(_c,"FULL_NAME");trace(_d);this.txtRtn1.set_value(_d);};this.btn_Exe2_3_onclick=function(_a,_b){var _c=this.Dataset1.extractRows("DEPT_CODE == 'K10'");for(var _e=0;_e<_c.length;_e++ ){var _d=this.Dataset1.getColumn(_c[_e],"FULL_NAME");trace(_e+":"+_d);}};this.btn00_onclick=function(_a,_b){var _c=this.Dataset1.getRowCount();for(var _e=0;_e<_c;_e++ ){var _d=this.Dataset1.findRow("DEPT_CODE","K10",_e, -1);if(_d>=0){_e=_d;trace(_d+"==="+_e+"=="+this.Dataset1.getColumn(_e,"FULL_NAME"));}}};this.btn_Exe3_1_onclick=function(_a,_b){var _c=this.Dataset1.getCaseAvg("GENDER == 'M'","SALARY");var _d=this.Dataset1.getCaseAvg("GENDER == 'W'","SALARY");var _e=this.Dataset1.getCaseAvg("GENDER == 'W'","SALARY",0, -1,false);trace("nAvgM="+_c+"==>"+nexacro.round(_c,2));trace("nAvgW1="+_d);trace("nAvgW2="+_e);};this.btn_Exe3_2_onclick=function(_a,_b){var _c=this.Dataset1.getAvg("SALARY + BONUS");};this.btn_Exe3_3_onclick=function(_a,_b){this.Dataset1.set_keystring("S: -HIRE_DATE");};this.btn01_onclick=function(_a,_b){this.Dataset1.set_keystring("S: +HIRE_DATE");};this.btn_Exe3_4_onclick=function(_a,_b){this.Dataset1.filter("GENDER == 'M' && MARRIED == '0'");};this.btn02_onclick=function(_a,_b){this.Dataset1.filter("GENDER == 'W' && MARRIED == '1'");};this.btn_Exe3_5_onclick=function(_a,_b){var _c=this.Dataset1.getRowCount();var _d=this.Dataset1.getRowCountNF();trace(_c+"=="+_d);};this.btn_Exe3_Filter_onclick=function(_a,_b){var _c="e";this.Dataset1.filter("String(FULL_NAME).toUpperCase().indexOf('"+nexacro.replaceAll(_c,"'","\\'").toUpperCase()+"') >= 0");};this.btn_Exe4_1_onclick=function(_a,_b){var _c=this.Dataset4.insertRow(0);var _d=this.Dataset4.getRowType(_c);trace("Insert Row = "+_c);};this.btn_Exe4_2_onclick=function(_a,_b){this.Dataset4.setColumn(1,"FULL_NAME","NEXACRO");var _c=this.Dataset4.getRowType(1);trace("Update Row = "+_c);};this.btn_Exe4_3_onclick=function(_a,_b){var _c=this.Dataset4.getColumn(1,"FULL_NAME");var _d=this.Dataset4.getOrgColumn(1,"FULL_NAME");trace("nCurData = "+_c+": nOrgData = "+_d);};this.btn_Exe4_4_onclick=function(_a,_b){var _c=[3,4,5];this.Dataset4.set_updatecontrol(false);this.Dataset4.setRowType(3,Dataset.ROWTYPE_DELETE);this.Dataset4.setRowType(4,Dataset.ROWTYPE_DELETE);this.Dataset4.setRowType(5,Dataset.ROWTYPE_DELETE);this.Dataset4.set_updatecontrol(true);};this.btn03_onclick=function(_a,_b){var _c=this.Dataset4.getRowCount();this.Dataset4.set_enableevent(false);for(var _d=_c;_d>=0;_d-- ){this.Dataset4.deleteRow(_d);}this.Dataset4.set_enableevent(true);};this.btn_Exe4_5_onclick=function(_a,_b){var _c=this.Dataset4.getDeletedRowCount();var _d=this.Dataset4.getDeletedColumn(0,"FULL_NAME");trace("nDelCnt="+_c+":"+_d);};this.btn_Exe4_Check_onclick=function(_a,_b){var _c=this.fn_dataCheck(this.Dataset4);alert(_c);};this.fn_dataCheck=function(_b){if(_b.getDeletedRowCount()>0){return true;}for(var _d=0;_d<_b.rowcount;_d++ ){var _c=_b.getRowType(_d);if(nRowtype==2||nRowType==4){return true;}}return true;};this.Exe2_Chap1_Dataset_onbeforeclose=function(_a,_b){if(this.fn_dataCheck(this.Dataset4)){return "정말 닫으시겠습니까?";}};this.btn_Exe5_1_onclick=function(_a,_b){this.Dataset5.copyData(this.Dataset4);this.Grid5.createFormat();};this.btn_Exe5_2_onclick=function(_a,_b){this.Dataset5.assign(this.Dataset4);this.Grid5.createFormat();};this.btn04_onclick=function(_a,_b){for(var _c=0;_c<this.Dataset5.rowcount;_c++ ){trace(_c+"=="+this.Dataset5.getRowType(_c));}};this.btn_Exe5_3_onclick=function(_a,_b){var _c=this.Dataset4.findRow("EMPL_ID","KR040");var _d=this.Dataset5.addRow();this.Dataset5.copyRow(_d,this.Dataset4,_c);};this.btn_Exe5_4_onclick=function(_a,_b){var _c=this.Dataset4.findRow("EMPL_ID","KR040");var _d=this.Dataset5.addRow();var _e="EMPL_ID=EMPL_ID, FULL_NAME=FULL_NAME";this.Dataset5.copyRow(_d,this.Dataset4,_c);};this.Dataset6_cancolumnchange=function(_a,_b){trace("cancolumnchange");var _c=_a.findRowExpr("FULL_NAME == '"+_b.newvalue+"' && currow != "+_b.row);if(_c>=0){this.alert("데이터 중복발생");return false;}};this.Dataset6_oncolumnchanged=function(_a,_b){trace("cancolumnchange");};this.btn_Exe6_3_onclick=function(_a,_b){this.Dataset6.setColumn(0,"FULL_NAME","NEXACRO");};this.btn_Exe6_5_onclick=function(_a,_b){this.Dataset6.set_enableevent(false);for(var _c=0;_c<this.Dataset6.rowcount;_c++ ){this.Dataset6.setColumn(_c,"FULL_NAME","NEXACRO"+_c);}this.Dataset6.set_enableevent(true);};this.Dataset6_onrowposchanged=function(_a,_b){trace("Dataset6_canrowposchange");};this.Dataset6_canrowposchange=function(_a,_b){trace("Dataset6_canrowposchange");};});this.on_initEvent=function(){this.addEventHandler("onbeforeclose",this.Exe2_Chap1_Dataset_onbeforeclose,this);this.btn_Exe3_Filter.addEventHandler("onclick",this.btn_Exe3_Filter_onclick,this);this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);this.btn_Exe1_2.addEventHandler("onclick",this.btn_Exe1_2_onclick,this);this.btn_Exe4_1.addEventHandler("onclick",this.btn_Exe4_1_onclick,this);this.btn_Exe4_2.addEventHandler("onclick",this.btn_Exe4_2_onclick,this);this.btn_Exe4_3.addEventHandler("onclick",this.btn_Exe4_3_onclick,this);this.btn_Exe4_4.addEventHandler("onclick",this.btn_Exe4_4_onclick,this);this.btn_Exe4_5.addEventHandler("onclick",this.btn_Exe4_5_onclick,this);this.btn_Exe4_Check.addEventHandler("onclick",this.btn_Exe4_Check_onclick,this);this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);this.btn_Exe3_2.addEventHandler("onclick",this.btn_Exe3_2_onclick,this);this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);this.btn_Exe3_4.addEventHandler("onclick",this.btn_Exe3_4_onclick,this);this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);this.btn_Exe2_3.addEventHandler("onclick",this.btn_Exe2_3_onclick,this);this.btn_Exe5_1.addEventHandler("onclick",this.btn_Exe5_1_onclick,this);this.btn_Exe5_2.addEventHandler("onclick",this.btn_Exe5_2_onclick,this);this.btn_Exe5_3.addEventHandler("onclick",this.btn_Exe5_3_onclick,this);this.btn_Exe5_4.addEventHandler("onclick",this.btn_Exe5_4_onclick,this);this.btn_Exe6_3.addEventHandler("onclick",this.btn_Exe6_3_onclick,this);this.btn_Exe6_5.addEventHandler("onclick",this.btn_Exe6_5_onclick,this);this.btn00.addEventHandler("onclick",this.btn00_onclick,this);this.btn01.addEventHandler("onclick",this.btn01_onclick,this);this.btn02.addEventHandler("onclick",this.btn02_onclick,this);this.btn03.addEventHandler("onclick",this.btn03_onclick,this);this.btn04.addEventHandler("onclick",this.btn04_onclick,this);this.Dataset6.addEventHandler("cancolumnchange",this.Dataset6_cancolumnchange,this);this.Dataset6.addEventHandler("oncolumnchanged",this.Dataset6_oncolumnchanged,this);this.Dataset6.addEventHandler("onrowposchanged",this.Dataset6_onrowposchanged,this);this.Dataset6.addEventHandler("canrowposchange",this.Dataset6_canrowposchange,this);};this.loadIncludeScript("Exe_Chap1_Dataset.xfdl");this.loadPreloadList();_a=null;};})();