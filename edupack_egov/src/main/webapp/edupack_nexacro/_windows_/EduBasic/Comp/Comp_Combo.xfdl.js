(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Comp_Combo");this.set_titletext("Component-Combo");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_dept",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">Finances Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Human Resource Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Marketing Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Sales 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">06</Col><Col id=\"DEPT_NAME\">Sales 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">07</Col><Col id=\"DEPT_NAME\">Sales 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">08</Col><Col id=\"DEPT_NAME\">Sales Management Team</Col></Row><Row><Col id=\"DEPT_CD\">09</Col><Col id=\"DEPT_NAME\">Consulting 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">Consulting 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">11</Col><Col id=\"DEPT_NAME\">Consulting 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">12</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">13</Col><Col id=\"DEPT_NAME\">Mobile Team</Col></Row><Row><Col id=\"DEPT_CD\">14</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row><Row><Col id=\"DEPT_CD\">15</Col><Col id=\"DEPT_NAME\">Technical Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">16</Col><Col id=\"DEPT_NAME\">Technical Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">17</Col><Col id=\"DEPT_NAME\">Technical Support 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">18</Col><Col id=\"DEPT_NAME\">Customer Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">19</Col><Col id=\"DEPT_NAME\">Customer Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">Customer Support 3 Team</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static04","10","40","260","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Basic Usage - innerdataset");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Radio("Radio00","16","179","460","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_rowcount("1");_a.set_fittocontents("width");var _b=new nexacro.NormalDataset("Radio00_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dropdown</Col><Col id=\"datacolumn\">dropdown</Col></Row><Row><Col id=\"codecolumn\">search</Col><Col id=\"datacolumn\">search</Col></Row><Row><Col id=\"codecolumn\">filter</Col><Col id=\"datacolumn\">filter</Col></Row><Row><Col id=\"datacolumn\">filterlike</Col><Col id=\"codecolumn\">filterlike</Col></Row><Row><Col id=\"codecolumn\">readonly</Col><Col id=\"datacolumn\">readonly</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_value("dropdown");_a.set_index("0");this.addChild(_a.name,_a);_a=new Combo("cmb_type","18","212","160","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_innerdataset("ds_dept");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_text("");_a.set_value("");_a.set_index("-1");this.addChild(_a.name,_a);_a=new Combo("Combo00","18","73","178","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");var _c=new nexacro.NormalDataset("Combo00_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_text("Combo00");this.addChild(_a.name,_a);_a=new Static("Static00","10","146","248","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Combo Type (Prop. type)");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static01","10","391","318","28",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("Null Text (Prop. displaynulltext)");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Combo("Combo03","201","73","178","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_innerdataset("ds_dept");_a.set_text("Combo00");this.addChild(_a.name,_a);_a=new Combo("cmb_count","97","320","198","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_codecolumn("DEPT_CD");_a.set_datacolumn("DEPT_NAME");_a.set_innerdataset("ds_dept");_a.set_displayrowcount("5");_a.set_text("Accounting Team");_a.set_value("01");_a.set_index("0");this.addChild(_a.name,_a);_a=new Static("Static02","10","285","360","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("Display Count (Prop. displayrowcount)");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Spin("spn_count","18","318","74","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_min("5");_a.set_max("20");_a.set_value("5");this.addChild(_a.name,_a);_a=new Combo("Combo01","18","424","198","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_displaynulltext("Please Select...");var _d=new nexacro.NormalDataset("Combo01_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");_a.set_innerdataset(_d);this.addChild(_a.name,_a);_a=new Static("Static00_00","10","0","250","35",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("Combo");_a.set_cssclass("sta_WF_TitleMain");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_e){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);_a=new BindItem("item0","Button01","text","gds_dept","DEPT_NM");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("Comp_Combo.xfdl",function(){this.Radio00_onitemchanged=function(_a,_b){if(_b.postvalue=="readonly"){this.cmb_type.set_readonly(true);}else{this.cmb_type.set_readonly(false);this.cmb_type.set_type(_b.postvalue);}};this.spn_count_onchanged=function(_a,_b){this.cmb_count.set_displayrowcount(_a.value);};});this.on_initEvent=function(){this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);this.spn_count.addEventHandler("onchanged",this.spn_count_onchanged,this);};this.loadIncludeScript("Comp_Combo.xfdl");this.loadPreloadList();_a=null;};})();