(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Exe2_Sample_Detail");this.set_titletext("Exe2_Sample_Detail");this.set_border("1px solid #9c9c9c");if(Form==this.constructor){this._setFormPosition(450,220);}_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_pop",this);_a.set_keystring("a");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_pos",this);_a._setContents("<ColumnInfo><Column id=\"POS_CODE\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CODE\">10</Col><Col id=\"POS_NAME\">Manager</Col></Row><Row><Col id=\"POS_CODE\">20</Col><Col id=\"POS_NAME\">Staff</Col></Row><Row><Col id=\"POS_CODE\">30</Col><Col id=\"POS_NAME\">Intern</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer00","10","10","168","188",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_image("URL(\"imagerc::img_emp20.png\")");_a.set_stretch("fixaspectratio");this.addChild(_a.name,_a);_a=new Static("Static04","195","10","80","30",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Name");this.addChild(_a.name,_a);_a=new Static("Static05","195","50","80","30",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("Dept");this.addChild(_a.name,_a);_a=new Static("Static06","195","90","80","30",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("Position");this.addChild(_a.name,_a);_a=new Static("Static07","195","130","80","30",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("Phone No");this.addChild(_a.name,_a);_a=new Static("Static08","195","170","80","30",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("E Mail");this.addChild(_a.name,_a);_a=new Edit("edt_name","277","10","150","30",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_border("0px none");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Combo("cmb_dept","277","50","150","30",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_innerdataset("ds_dept");_a.set_codecolumn("DEPT_CODE");_a.set_datacolumn("DEPT_NAME");_a.set_buttonsize("0 0");_a.set_border("0px none");_a.set_readonly("true");_a.set_text("Combo00");this.addChild(_a.name,_a);_a=new Combo("cmb_pos","277","90","150","30",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_innerdataset("ds_pos");_a.set_codecolumn("POS_CODE");_a.set_datacolumn("POS_NAME");_a.set_buttonsize("0 0");_a.set_border("0px none");_a.set_readonly("true");_a.set_text("Combo00");this.addChild(_a.name,_a);_a=new Edit("edt_mail","277","170","150","30",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_border("0px none");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Edit("edt_phone","277","130","150","30",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_border("0px none");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Layout("default","",450,220,this,function(_b){});_a.set_stepcount("0");this.addLayout(_a.name,_a);_a=new BindItem("item0","ImageViewer00","image","ds_pop","IMG_URL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","edt_name","value","ds_pop","FULL_NAME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","cmb_dept","value","ds_pop","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","cmb_pos","value","ds_pop","POS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_mail","value","ds_pop","E_MAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","edt_phone","value","ds_pop","PHONE_NO");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Exe2_Sample_Detail.xfdl",function(){this.Form_onload=function(_a,_b){var _c=this.parent.param1;var _d=this.parent.parma2;this.ds_pop.copyData(_c);this.ds_pop.set_rowposition(_d);};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);};this.loadIncludeScript("Exe2_Sample_Detail.xfdl");this.loadPreloadList();_a=null;};})();