(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("XPush_T_Notification");this.set_titletext("T_Notification 테이블확인");if(Form==this.constructor){this._setFormPosition(800,600);}_a=new Dataset("ds_Notification",this);_a.set_keystring("");_a._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BUNDLE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEVICE_TOKEN\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);_a.set_taborder("4");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("div_WFSA");this.addChild(_a.name,_a);_a=new Static("Static04","16","13","46","24",null,null,null,null,null,null,this.div_search.form);_a.set_taborder("1");_a.set_text("Type");this.div_search.addChild(_a.name,_a);_a=new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("T_NOTIFICATION");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_cssclass("sta_WF_emptitle");this.addChild(_a.name,_a);_a=new Button("btn_retrieve",null,"5","60","30","9",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("조회");_a.getSetter("leftbase").set("");_a.getSetter("topbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Grid("grd_list","10","95",null,null,"396","10",null,null,null,null,this);_a.set_taborder("3");_a.getSetter("leftbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");_a.set_binddataset("ds_Notification");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"PROJECT_ID\"/><Cell col=\"2\" text=\"BUNDLE_ID\"/><Cell col=\"3\" text=\"MESSAGE_ID\"/><Cell col=\"4\" text=\"DEVICE_TOKEN\"/><Cell col=\"5\" text=\"TOPIC_TYPE\"/><Cell col=\"6\" text=\"TOPIC_ID\"/><Cell col=\"7\" text=\"MESSAGE\"/><Cell col=\"8\" text=\"CHECK_DATE\"/><Cell col=\"9\" text=\"RESULT\"/><Cell col=\"10\" text=\"ERROR_CODE\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:PROJECT_ID\"/><Cell col=\"2\" text=\"bind:BUNDLE_ID\"/><Cell col=\"3\" text=\"bind:MESSAGE_ID\"/><Cell col=\"4\" text=\"bind:DEVICE_TOKEN\"/><Cell col=\"5\" text=\"bind:TOPIC_TYPE\"/><Cell col=\"6\" text=\"bind:TOPIC_ID\"/><Cell col=\"7\" text=\"bind:MESSAGE\"/><Cell col=\"8\" text=\"bind:CHECK_DATE\"/><Cell col=\"9\" text=\"bind:RESULT\"/><Cell col=\"10\" text=\"bind:ERROR_CODE\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_detail",null,"95","380",null,"10","10",null,null,null,null,this);_a.set_taborder("2");_a.set_text("Div00");_a.getSetter("leftbase").set("");_a.getSetter("bottombase").set("");_a.getSetter("rightbase").set("");_a.getSetter("widthbase").set("");_a.getSetter("heightbase").set("");this.addChild(_a.name,_a);_a=new Static("Static02_01_01_00","128","352","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("30");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static02_01_01","128","319","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("27");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static02_01_00","128","187","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("24");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static02_01","128","85","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("21");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static02_00","128","19","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("18");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static02","128","52","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("1");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static01","128","117","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("2");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static09","128","220","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("4");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Static("Static15","128","253","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("7");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Edit("ed_project_id","133","57","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("0");this.div_detail.addChild(_a.name,_a);_a=new Static("staTopicType","9","220","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("3");_a.set_text("토픽 타입");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablelabel");this.div_detail.addChild(_a.name,_a);_a=new Static("PROJECT_ID","9","52","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("5");_a.set_text("PROJECT_ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("Static12","9","286","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("6");_a.set_text("체크일시");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Static("staUserId","9","117","359","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("8");_a.set_text("MESSAGE_ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("ed_message_id","9","156","359","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("9");this.div_detail.addChild(_a.name,_a);_a=new Static("Static00_00","9","253","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("10");_a.set_text("토픽 아이디");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("edt_name00_00","133","258","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("11");this.div_detail.addChild(_a.name,_a);_a=new Static("Static15_00","128","286","240","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("12");_a.set_text("");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_tablebg");this.div_detail.addChild(_a.name,_a);_a=new Combo("Combo00","133","226","159","22",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("13");_a.set_innerdataset("gds_topicType");_a.set_codecolumn("CODE");_a.set_datacolumn("NAME");_a.set_text("Combo00");this.div_detail.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","133","291","230","25",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("14");_a.set_type("string");_a.set_format("####-##-## ##:##:##");this.div_detail.addChild(_a.name,_a);_a=new TextArea("TextArea00","9","394","360","88",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("15");this.div_detail.addChild(_a.name,_a);_a=new Static("ID","9","19","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("16");_a.set_text("ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("ed_id","133","24","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("17");this.div_detail.addChild(_a.name,_a);_a=new Static("BUNDLE_ID","9","85","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("19");_a.set_text("BUNDLE_ID");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("ed_boundle_id","133","90","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("20");this.div_detail.addChild(_a.name,_a);_a=new Static("DEVICE_TOKEN","9","187","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("22");_a.set_text("DEVICE_TOKEN");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("ed_boundle_id00","133","192","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("23");this.div_detail.addChild(_a.name,_a);_a=new Static("BUNDLE_ID00","9","319","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("25");_a.set_text("결과");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("ed_boundle_id01","133","324","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("26");this.div_detail.addChild(_a.name,_a);_a=new Static("ERROR_CODE","9","352","120","34",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("28");_a.set_text("ERROR_CODE");_a.set_background("");_a.set_padding("");_a.set_cssclass("sta_WF_table_required");this.div_detail.addChild(_a.name,_a);_a=new Edit("ed_boundle_id01_00","133","357","162","24",null,null,null,null,null,null,this.div_detail.form);_a.set_taborder("29");this.div_detail.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_search.form,function(_b){});this.div_search.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_detail.form,function(_b){});this.div_detail.form.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_detail.form.ed_id","value","ds_Notification","ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_detail.form.ed_project_id","value","ds_Notification","PROJECT_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail.form.ed_boundle_id","value","ds_Notification","BUNDLE_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_detail.form.ed_message_id","value","ds_Notification","MESSAGE_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_detail.form.ed_boundle_id00","value","ds_Notification","DEVICE_TOKEN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_detail.form.Combo00","value","ds_Notification","TOPIC_TYPE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_detail.form.edt_name00_00","value","ds_Notification","TOPIC_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail.form.TextArea00","value","ds_Notification","MESSAGE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_detail.form.MaskEdit00","value","ds_Notification","CHECK_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_detail.form.ed_boundle_id01","value","ds_Notification","RESULT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_detail.form.ed_boundle_id01_00","accessibilityaction","ds_Notification","ERROR_CODE");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("XPush_T_Notification.xfdl",function(){this.Form_onload=function(_a,_b){};this.btn_add_onclick=function(_a,_b){this.ds_topic.addRow();this.ds_topic.setColumn(this.ds_topic.rowposition,"ACTIVE","Y");this.ds_topic.setColumn(this.ds_topic.rowposition,"TOPIC_TYPE","ALL");};this.btn_del_onclick=function(_a,_b){};this.btn_retrieve_onclick=function(_a,_b){this.transaction("TopicSelect","SvcXpushURL::Service_T_Notification.jsp","","ds_Notification=OUTPUT","","fn_call");};this.fn_call=function(_b,_c,_d){};});this.on_initEvent=function(){this.addEventHandler("onload",this.Form_onload,this);this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);this.div_detail.form.ed_project_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.PROJECT_ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.ed_message_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.edt_name00_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.ed_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.BUNDLE_ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.ed_boundle_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.DEVICE_TOKEN.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.ed_boundle_id00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.BUNDLE_ID00.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.ed_boundle_id01.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);this.div_detail.form.ERROR_CODE.addEventHandler("onclick",this.div_detail_Static10_onclick,this);this.div_detail.form.ed_boundle_id01_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);};this.loadIncludeScript("XPush_T_Notification.xfdl");this.loadPreloadList();_a=null;};})();