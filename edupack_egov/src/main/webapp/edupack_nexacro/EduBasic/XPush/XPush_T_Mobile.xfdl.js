(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("XPush_T_Mobile");
            this.set_titletext("T_Mobile 테이블확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Mobile", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BUNDLE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEVICE_TOKEN\" type=\"STRING\" size=\"256\"/><Column id=\"OS\" type=\"STRING\" size=\"256\"/><Column id=\"OS_VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIVE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WFSA");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","16","13","46","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Type");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("T_MOBILE");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"5","60","30","9",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","95",null,null,"396","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_Mobile");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"PROJECT_ID\"/><Cell col=\"2\" text=\"BUNDLE_ID\"/><Cell col=\"3\" text=\"USER_ID\"/><Cell col=\"4\" text=\"DEVICE_TOKEN\"/><Cell col=\"5\" text=\"OS\"/><Cell col=\"6\" text=\"OS_VERSION\"/><Cell col=\"7\" text=\"REGISTER_DATE\"/><Cell col=\"8\" text=\"MODIFIED_DATE\"/><Cell col=\"9\" text=\"REGISTER\"/><Cell col=\"10\" text=\"ACTIVE\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:PROJECT_ID\"/><Cell col=\"2\" text=\"bind:BUNDLE_ID\"/><Cell col=\"3\" text=\"bind:USER_ID\"/><Cell col=\"4\" text=\"bind:DEVICE_TOKEN\"/><Cell col=\"5\" text=\"bind:OS\"/><Cell col=\"6\" text=\"bind:OS_VERSION\"/><Cell col=\"7\" text=\"bind:REGISTER_DATE\"/><Cell col=\"8\" text=\"bind:MODIFIED_DATE\"/><Cell col=\"9\" text=\"bind:REGISTER\"/><Cell col=\"10\" text=\"bind:ACTIVE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"95","380",null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","128","216","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","128","183","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00","128","352","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01_01","128","319","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","128","150","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01","128","85","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00","128","19","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","128","52","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","128","117","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_project_id","133","57","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("PROJECT_ID","9","52","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("PROJECT_ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","9","249","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("등록일시");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15_00","128","249","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","133","254","230","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##:##");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("ID","9","19","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_id","133","24","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("BUNDLE_ID","9","85","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("BUNDLE_ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id","133","90","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("DEVICE_TOKEN","9","150","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("DEVICE_TOKEN");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id00","133","155","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("REGISTER","9","319","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("등록자");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id01","133","324","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("ERROR_CODE","9","352","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("ACTIVE");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id01_00","133","357","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("BUNDLE_ID01","9","117","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("USER ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id02","133","122","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("OS","9","183","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("OS");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id00_00","133","188","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("OS00","9","216","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("27");
            obj.set_text("OS Version");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id00_00_00","133","221","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("28");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12_00","9","282","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("30");
            obj.set_text("수정일시");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15_00_00","128","282","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","133","287","230","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("32");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##:##");
            this.div_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.ed_id","value","ds_Mobile","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.ed_project_id","value","ds_Mobile","PROJECT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.ed_boundle_id","value","ds_Mobile","BUNDLE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.ed_boundle_id02","value","ds_Mobile","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.ed_boundle_id00","value","ds_Mobile","DEVICE_TOKEN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.ed_boundle_id00_00","value","ds_Mobile","OS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.ed_boundle_id00_00_00","value","ds_Mobile","OS_VERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.MaskEdit00","value","ds_Mobile","REGISTER_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.MaskEdit00_00","value","ds_Mobile","MODIFIED_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_detail.form.ed_boundle_id01","value","ds_Mobile","REGISTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_detail.form.ed_boundle_id01_00","value","ds_Mobile","ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_T_Mobile.xfdl", function() {

        this.Form_onload = function(obj,e)
        {


        };


        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_topic.addRow();
        	this.ds_topic.setColumn(this.ds_topic.rowposition,"ACTIVE","Y");
        	this.ds_topic.setColumn(this.ds_topic.rowposition,"TOPIC_TYPE","ALL");
        };

        this.btn_del_onclick = function(obj,e)
        {

        };

        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.transaction("TopicSelect","SvcXpushURL::Service_T_Mobile.jsp","","ds_Mobile=OUTPUT","","fn_call");
        };

        this.fn_call = function(svcid, ecd, emsg)
        {

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.ed_project_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.PROJECT_ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.BUNDLE_ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.DEVICE_TOKEN.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.REGISTER.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id01.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.ERROR_CODE.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id01_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.BUNDLE_ID01.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id02.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.OS.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id00_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.OS00.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id00_00_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
        };
        this.loadIncludeScript("XPush_T_Mobile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
