(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SampleValidation");this.set_titletext("정합성 체크");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("dsList",this);_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECIMAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMPARE_1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">kimyk</Col><Col id=\"DATE_FROM\">20171101</Col><Col id=\"DATE_TO\">20171130</Col><Col id=\"MAX_NUM\">10</Col><Col id=\"DECIMAL\">1.25</Col><Col id=\"COMPARE_1\">10</Col><Col id=\"COMPARE_2\">20</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("dsList2",this);_a._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"INT\" size=\"256\"/><Column id=\"MIN_NUM\" type=\"INT\" size=\"256\"/><Column id=\"LENGTH_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"RANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("divVali","10","1186","490","116",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("div_WF_Area");this.addChild(_a.name,_a);_a=new Static("Static03","260","10","71","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("6");_a.set_text("필수(Edit)");_a.set_cssclass("sta_WF_LabelE");this.divVali.addChild(_a.name,_a);_a=new Edit("edt01","334","10","146","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("5");_a.set_cssclass("edt_WF_Essential\n");this.divVali.addChild(_a.name,_a);_a=new Static("Static08","10","10","71","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("7");_a.set_text("필수(날짜)");_a.set_cssclass("sta_WF_LabelE");this.divVali.addChild(_a.name,_a);_a=new Calendar("cal","84","10","146","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");this.divVali.addChild(_a.name,_a);_a=new Static("Static30","10","43","71","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("8");_a.set_text("최대값100");this.divVali.addChild(_a.name,_a);_a=new Edit("edtMax","84","43","146","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("3");this.divVali.addChild(_a.name,_a);_a=new Static("Static29","260","43","71","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("9");_a.set_text("최소값10");this.divVali.addChild(_a.name,_a);_a=new Edit("edtMin","334","43","146","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("2");this.divVali.addChild(_a.name,_a);_a=new Static("Static20","10","76","71","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("10");_a.set_text("최소길이3");this.divVali.addChild(_a.name,_a);_a=new Edit("edtLegthMin","84","76","146","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("1");this.divVali.addChild(_a.name,_a);_a=new Static("Static54","260","76","71","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("11");_a.set_text("범위(1~5)");this.divVali.addChild(_a.name,_a);_a=new Static("Static55","410","84",null,"28","78",null,null,null,null,null,this.divVali.form);_a.set_taborder("12");_a.set_cssclass("sta_WF_InputBg");this.divVali.addChild(_a.name,_a);_a=new Edit("edtRange","334","76","146","28",null,null,null,null,null,null,this.divVali.form);_a.set_taborder("0");this.divVali.addChild(_a.name,_a);_a=new Grid("grdVali","10","988",null,"140","10",null,null,null,null,null,this);_a.set_taborder("0");_a.set_autofittype("col");_a.set_nodatatext("No Data");_a.set_binddataset("dsList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"148\"/><Column size=\"135\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"137\"/><Column size=\"137\"/><Column size=\"137\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"필수,길이(5)\"/><Cell col=\"1\" text=\"주민등록번호\"/><Cell col=\"2\" colspan=\"2\" text=\"from ~ to\"/><Cell col=\"4\" text=\"최대값(10)\"/><Cell col=\"5\" text=\"소숫점2자리\"/><Cell col=\"6\" colspan=\"2\" text=\"비교\"/><Cell row=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"1\" text=\"SSN\"/><Cell row=\"1\" col=\"2\" text=\"DATE_FROM\"/><Cell row=\"1\" col=\"3\" text=\"DATE_TO\"/><Cell row=\"1\" col=\"4\" text=\"MAX_NUM\"/><Cell row=\"1\" col=\"5\" text=\"DECIMAL\"/><Cell row=\"1\" col=\"6\" text=\"COMPARE_1\"/><Cell row=\"1\" col=\"7\" text=\"COMPARE_2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SSN\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DATE_FROM\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DATE_TO\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:MAX_NUM\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DECIMAL\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:COMPARE_1\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:COMPARE_2\" edittype=\"mask\" maskeditautoselect=\"true\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btnGrdCheck",null,"957","60","28","10",null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("체크");_a.set_cssclass("btn_WF_GridControl");this.addChild(_a.name,_a);_a=new Button("btnDivCheck","438","1153","60","30",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("체크");_a.set_cssclass("btn_WF_GridControl");this.addChild(_a.name,_a);_a=new Static("Static06","0","1405",null,"20","0",null,null,null,null,null,this);_a.set_taborder("4");_a.set_background("salmon");_a.set_textAlign("center");_a.set_visible("false");_a.set_opacity("0.00");_a.set_text("20px");this.addChild(_a.name,_a);_a=new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text("정합성 체크");_a.set_cssclass("sta_WF_TitleMain");this.addChild(_a.name,_a);_a=new Static("Static00","10","955","218","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("1) Grid Validation Check");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static01","10","1153","248","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("2) Component Validation Check");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("sta03","10","35",null,"880","10",null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("1.Validation 공통함수는 아래와 같이 4개의 함수가 제공된다.\r\n  1) Dataset에 설정된 정합성체크 RuleSet을 Clear한다.\r\n       this.gfnClearValidation(this.dsList);\r\n  2) Dataset의 Column별로 정합성체크 Rule을 등록한다.\r\n       this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,length:5\");\r\n  3) Dataset의 Column별로 설정된 정합성체크 Rule을 제거한다.\r\n       this.gfnRemoveValidation(this.dsList, \"ID\");\r\n  4) Dataset에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.\r\n       this.gfnValidation(this.dsList,this.dsList2,this.dsList3, \"U\");\r\n\r\n2. gfnSetValidation에 등록할 수 있는 Validation 체크 Rule의 종류\r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,equalto:NAME\");\r\n  required - 필수 체크\r\n  length:7 - 길이가 7자리인지 체크\r\n  rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크\r\n  maxlength:7 - 길이가 7보다 작은지 체크\r\n  minlength:3 - 길이가 3보다 큰지 체크\r\n  maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크\r\n  minlengthbyte:3 - byte의 길이가 3보다 큰지 체크\r\n  digits - 숫자여부 체크\r\n  min:7 - 값이 7보다 작은지 체크\r\n  max:7 - 값이 7보다 큰지 체크\r\n  declimit:3 - 소수점의 자리수가 3자리인지 체크\r\n  date - 년월일형태의 날짜가 맞는지 체크\r\n  dateym - 년월형태의 날짜가 맞는지 체크\r\n  range:40:100 - 값이 40 ~ 100 사이의 값인지 체크\r\n  code:1:2:3 - 값이 1,2,3 의 값인지 체크\r\n  equalto:NAME - NAME 칼럼의 값과 같은지 체크 \r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,equalto:NAME\");\r\n  fromto:DATE_FROM - 등록된 날짜가 DATE_TO의 칼럼의 값 보다 큰지 \r\n  예) this.gfnSetValidation(this.dsList, \"DATE_TO\", \"종료일자,시작일자\", \"required,date,fromto:DATE_FROM\");\r\n  comparebig:NAME - NAME 칼럼의 값보다 큰지 체크 \r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,comparebig:NAME\");\r\n  comparesmall:NAME - NAME 칼럼의 값보다 작은지 체크 \r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,comparesmall:NAME\");\r\n  isssn - 공통함수 gfnIsSSN로 주민번호 체크\r\n  isfrn - 공통함수 gfnIsFrnrIdNo로 외국인등록번호 체크\r\n  isbzid - 공통함수 gfnIsBzIdNo로 사업자등록번호 체크\r\n  isfirmid - 공통함수 gfnIsFirmIdNo로 법인등록번호 체크\r\n  iscardno - 공통함수 gfnIsCardNo로 신용카드번호 체크\r\n  isemail - 공통함수 gfnIsEmail로 이메일 체크");_a.set_cssclass("sta_WF_Desc");this.addChild(_a.name,_a);_a=new Static("Static02","560","1153","298","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("3) Grid와 Component Validation Check");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Button("btnAll","688","1186","60","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("체크");_a.set_cssclass("btn_WF_GridControl");this.addChild(_a.name,_a);_a=new Button("btnAdd",null,"957","60","28","140",null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("추가");this.addChild(_a.name,_a);_a=new Button("btnDel",null,"957","60","28","75",null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("삭제");this.addChild(_a.name,_a);_a=new Radio("rdoGubun","560","1186","100","50",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");var _b=new nexacro.NormalDataset("rdoGubun_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">값으로 체크</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">길이로 체크</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("값으로 체크");_a.set_value("1");_a.set_index("0");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divVali.form,function(_c){});this.divVali.form.addLayout(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_c){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","divVali.form.cal","value","dsList2","DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","divVali.form.edt01","value","dsList2","EDIT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","divVali.form.edtMax","value","dsList2","MAX_NUM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","divVali.form.edtMin","value","dsList2","MIN_NUM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","divVali.form.edtLegthMin","value","dsList2","LENGTH_MIN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","divVali.form.edtRange","value","dsList2","RANGE");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("SampleValidation.xfdl",function(){this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);};this.fnClose=function(){if(this.gfnDsIsUpdated(this.dsList)){return false;}else{return true;}};this.fnCallback=function(_b,_c,_d){if(_c!=0){return;}};this.fnAdd=function(){this.dsList.addRow();};this.fnDel=function(){this.dsList.deleteRow(this.dsList.rowposition);};this.btn_grdVali_onclick=function(_a,_b){this.gfnClearValidation(this.dsList);this.gfnSetValidation(this.dsList,"ID",this.gfnGetWord("user.id"),"required,length:5");this.gfnSetValidation(this.dsList,"DATE_FROM",this.gfnGetWord("date.start"),"required,date");this.gfnSetValidation(this.dsList,"DATE_TO",this.gfnGetWord("date.end")+","+this.gfnGetWord("date.start"),"required,date,fromto:DATE_FROM");this.gfnSetValidation(this.dsList,"MAX_NUM",this.gfnGetWord("value.max"),"required,digits,max:10");this.gfnSetValidation(this.dsList,"DECIMAL",this.gfnGetWord("value.interest"),"required,digits,declimit:2");this.gfnSetValidation(this.dsList,"COMPARE_1",this.gfnGetWord("value.1st"),"required,digits");this.gfnSetValidation(this.dsList,"COMPARE_2",this.gfnGetWord("value.2nd")+","+this.gfnGetWord("value.1st"),"required,digits,comparebig:COMPARE_1");if(this.gfnValidation(this.dsList,"A")==false){return;}alert("Validation이 통과 되었습니다.");};this.btn_compVali_onclick=function(_a,_b){if(this.dsList2.rowcount==0){this.dsList2.addRow();}this.gfnClearValidation(this.dsList2);this.gfnSetValidation(this.dsList2,"DATE","필수(날짜)","required,date");this.gfnSetValidation(this.dsList2,"EDIT","필수(Edit)","required");this.gfnSetValidation(this.dsList2,"MAX_NUM","최대값100","required,digits,max:100");this.gfnSetValidation(this.dsList2,"MIN_NUM","최소값10","required,digits,min:10");this.gfnSetValidation(this.dsList2,"LENGTH_MIN","최소길이3","required,minlength:3");this.gfnSetValidation(this.dsList2,"RANGE","범위(1~5)","required,digits,range:1:5");if(this.gfnValidation(this.dsList2,"U")==false){return;}alert("Validation이 통과 되었습니다.");};this.btnAll_onclick=function(_a,_b){if(this.dsList2.rowcount==0){this.dsList2.addRow();}this.gfnClearValidation(this.dsList);this.gfnSetValidation(this.dsList,"ID","아이디","required,length:5");this.gfnSetValidation(this.dsList,"SSN",this.gfnGetWord("user.jumin"),"required,isssn");this.gfnSetValidation(this.dsList,"DATE_FROM","시작일자","required,date");this.gfnSetValidation(this.dsList,"DATE_TO","종료일자,시작일자","required,date,fromto:DATE_FROM");this.gfnSetValidation(this.dsList,"MAX_NUM","최대값","required,digits,max:10");this.gfnSetValidation(this.dsList,"DECIMAL","금리","required,digits,declimit:2");this.gfnSetValidation(this.dsList,"COMPARE_1","1번째값","required,digits");this.gfnSetValidation(this.dsList,"COMPARE_2","2번째값,1번째값","required,digits,comparebig:COMPARE_1");this.gfnClearValidation(this.dsList2);this.gfnSetValidation(this.dsList2,"DATE","필수(날짜)","required,date");this.gfnSetValidation(this.dsList2,"EDIT","필수(Edit)","required");if(this.rdoGubun.value==1){this.gfnSetValidation(this.dsList2,"MAX_NUM","최대값100","required,digits,max:100");this.gfnSetValidation(this.dsList2,"MIN_NUM","최소값10","required,digits,min:10");}else{this.gfnSetValidation(this.dsList2,"LENGTH_MIN","최소길이3","required,minlength:3");}this.gfnSetValidation(this.dsList2,"RANGE","범위(1~5)","required,digits,range:1:5");if(this.gfnValidation(this.dsList,this.dsList2,"A")==false){return;}alert("Validation이 통과 되었습니다.");};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.btnGrdCheck.addEventHandler("onclick",this.btn_grdVali_onclick,this);this.btnDivCheck.addEventHandler("onclick",this.btn_compVali_onclick,this);this.sta03.addEventHandler("onclick",this.sta03_onclick,this);this.btnAll.addEventHandler("onclick",this.btnAll_onclick,this);this.btnAdd.addEventHandler("onclick",this.fnAdd,this);this.btnDel.addEventHandler("onclick",this.fnDel,this);};this.loadIncludeScript("SampleValidation.xfdl");this.loadPreloadList();_a=null;};})();