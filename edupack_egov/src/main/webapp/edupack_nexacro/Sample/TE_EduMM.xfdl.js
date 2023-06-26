(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_EduMM");
            this.set_titletext("교육관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_schedule", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_PRODUCT_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Record", this);
            obj._setContents("<ColumnInfo><Column id=\"ES_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_REQ_REASON", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_AREA_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_TYPE_DET", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_EDU_STATUS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SendSMS", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmailSend", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput_print", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput_print2", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"int\" size=\"11\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"string\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"string\" size=\"20\"/><Column id=\"EMAIL\" type=\"string\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"string\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"string\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"string\" size=\"512\"/><Column id=\"QUESTION\" type=\"string\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"string\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"string\" size=\"100\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"SMS_FLAG\" type=\"string\" size=\"1\"/><Column id=\"EDU_PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EDU_TYPE\" type=\"string\" size=\"20\"/><Column id=\"EDU_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"EDU_TYPE_DET\" type=\"string\" size=\"20\"/><Column id=\"EDU_TYPE_DET_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"string\" size=\"10\"/><Column id=\"END_DATE\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput_Reference", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ChkCount", this);
            obj._setContents("<ColumnInfo><Column id=\"SALES_NUM\" type=\"STRING\" size=\"255\"/><Column id=\"SALES_CUR_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SMSSeder", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_EduMM","8","8",null,"72","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductName","8","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("0");
            obj.set_text("제품");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Combo("cmb_Year","277","8","91","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_Year");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_Year","231","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("2");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_Around","368","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("3");
            obj.set_text("회차");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Combo("cmb_ProductName","54","8","169","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_CD_EDU_PRODUCT_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("MiPlatform");
            obj.set_index("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Inquiry",null,"39","60","22","8",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_New",null,"8","60","22","138",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_tran");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"8","60","22","73",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","60","22","8",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_CertificatePrint",null,"8","76","22","351",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("9");
            obj.set_text("수료증 출력");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_TotalPrint",null,"8","68","22","279",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("10");
            obj.set_text("전체출력");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_RegisterEpisode",null,"8","68","22","207",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("11");
            obj.set_text("회차등록");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_SMSSend",null,"39","68","22","279",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("12");
            obj.set_text("SMS발송");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_EmailSend",null,"39","68","22","207",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("13");
            obj.set_text("E-Mail발송");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new CheckBox("chb_ExceptionCancel","56","39","85","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("14");
            obj.set_text("취소제외");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("1");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new CheckBox("chb_ExceptionSalesman","143","39","165","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("15");
            obj.set_text("영업추가 수강생만 출력");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Edit("edt_Discrimination","415","8","66","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("16");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_Discrimination","481","8","23","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("17");
            obj.set_text("▼");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"39","68","22","73",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("18");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("Static06","9","34",null,"1","9",null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("19");
            obj.set_text("Static06");
            obj.set_background("#c6deed");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_EduType","520","8","80","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("20");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_EduTypeDet","600","8","120","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("21");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Static("stc_Area","720","8","60","22",null,null,null,null,null,null,this.div_EduMM.form);
            obj.set_taborder("22");
            this.div_EduMM.addChild(obj.name, obj);

            obj = new Grid("grd_EduMM","8","div_EduMM:8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"60\"/><Column size=\"138\"/><Column size=\"145\"/><Column size=\"75\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"25\"/><Column size=\"69\"/><Column size=\"25\"/><Column size=\"65\"/><Column size=\"25\"/><Column size=\"145\"/><Column size=\"154\"/><Column size=\"141\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"연락번호\"/><Cell col=\"6\" text=\"E_MAIL\"/><Cell col=\"7\" text=\"등록순번\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"수강여부\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"11\" text=\"수료증 출력\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"13\" text=\"메세지 전송\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"15\" text=\"교육수강사유\"/><Cell col=\"16\" text=\"교육수강사유기타\"/><Cell col=\"17\" text=\"교육관련문의\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:DUTY_NAME\"/><Cell col=\"5\" text=\"bind:PHONE_NO\" maskedittype=\"number\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:EMAIL\"/><Cell col=\"7\" text=\"bind:ESL_SEQ\"/><Cell col=\"8\" text=\"bind:STATUS_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_STATUS\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"9\" colspan=\"2\" text=\"bind:ATTEND_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"11\" colspan=\"2\" text=\"bind:CERTIFICATES_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"13\" colspan=\"2\" text=\"bind:SMS_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"15\" text=\"bind:REQ_REASON\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_REQ_REASON\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"16\" text=\"bind:REQ_REASON_ETC\"/><Cell col=\"17\" text=\"bind:QUESTION\"/><Cell col=\"18\" displaytype=\"buttoncontrol\" text=\"회차이동\"/><Cell col=\"19\" displaytype=\"buttoncontrol\" text=\"복사\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"expr:dataset.getCaseCount(&quot;STATUS_CD!=&apos;4&apos;&quot;)\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getCaseCount(&quot;ATTEND_FLAG==&apos;1&apos;&quot;)\" displaytype=\"number\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_ScheduleList","484","192","596","308",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ScheduleList","0","0",null,"308","0",null,null,null,null,null,this.pdiv_ScheduleList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Record");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"15\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"종료일\"/><Cell col=\"4\" text=\"종류\"/><Cell col=\"5\" text=\"세부\"/><Cell col=\"6\" text=\"장소\"/></Band><Band id=\"body\"><Cell text=\"bind:ES_SEQ\"/><Cell col=\"1\" text=\"bind:START_DATE\"/><Cell col=\"2\" text=\"~\"/><Cell col=\"3\" text=\"bind:END_DATE\"/><Cell col=\"4\" text=\"bind:EDU_TYPE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:EDU_TYPE_DET\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE_DET\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:EDU_AREA_CODE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_AREA_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format></Formats>");
            this.pdiv_ScheduleList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_EduMM.form
            obj = new Layout("default","",0,0,this.div_EduMM.form,function(p){});
            this.div_EduMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_ScheduleList.form
            obj = new Layout("default","",0,0,this.pdiv_ScheduleList.form,function(p){});
            this.pdiv_ScheduleList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1290,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_EduMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_EduMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_EduMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_EduMM.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("TE_EduMM.xfdl","Script::ext_Report.xjs");
        this.registerScript("TE_EduMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 교육 등록 (TE_EduMM_S01,
        							 TE_EduMM_S02,
        							 TE_EduMM_S03)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.10.15
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_Report.xjs"); /*include "Script::ext_Report.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TE_EduMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.fnGetCode();
        	this.div_EduMM.form.cmb_ProductName.set_value(this.ds_CD_EDU_PRODUCT_CODE.getColumn(0, "CODE"));
        	this.fnGetYear(this.div_EduMM.form.cmb_ProductName.value);
        }

        //Excel Export
        this.fn_export = function(grid)
        {
        	this.gfn_excelExport(this, grid);
        };

        this.fnSend = function(type)
        {
        	/*교육 발신자 조회*/
        	this.gfnAddSendParameter("FRM_SEQ",	"268");
        	this.gfnAddSendParameter("FRMA_SEQ_IN",	"1");
        	this.gfnAddOutputDataset("ds_SMSSeder",	"dsOutput");
        	this.gfnCommonTransaction("SelectEmpInfo", "CO_FindFormAuthEmp_S01", null, false);

        	var strEmpNo = this.ds_SMSSeder.getColumn(0,"EMP_NO");
        	var strEmpName = this.ds_SMSSeder.getColumn(0,"EMP_NAME");
        	var strTelNo = this.ds_SMSSeder.getColumn(0,"OFFICE_TEL_NO");
        	var strEamil = this.ds_SMSSeder.getColumn(0,"EMAIL");

        	if(type == "btn_SMSSend")
        	{
        		this.ds_SendSMS.clearData();

        		for(var i = 0; i < this.dsOutput.rowcount; i++)
        		{
        			if(this.dsOutput.getColumn(i, "SMS_FLAG") == 1)
        			{
        				var nRow = this.ds_SendSMS.addRow();
        				this.ds_SendSMS.setColumn(nRow, "EMP_NAME", this.dsOutput.getColumn(i, "EMP_NAME"));
        				this.ds_SendSMS.setColumn(nRow, "PHONE_NO", this.dsOutput.getColumn(i, "PHONE_NO"));
        			}
        		}

        		if(this.ds_SMSSeder.rowcount<0)
        		{
        			alert("교육 SMS 발신자 설정이 안되었습니다.\n 정보관리팀에 문의하세요.");
        			return;
        		}
        		if(this.gfnIsEmpty(strTelNo))
        		{
        			alert(strEmpName+"님의 내선번호가 없습니다.\n 그룹웨어 개인정보 수정에서 전화번호(사무실)를 등록하세요.");
        			return;
        		}
        		var sArgument = {
        					dsInput:this.ds_SendSMS,
        					key:"SMSSend",
        					pv_SenderType:"APPOINT",	// "SELF" (login 접속자 번호), "EMP" (지정 사번의 번호), "MAIN" (대표번호), "APPOINT"(전화번호 직접번호)
        					pv_TelKind:"T",				// "T" (내선), 	"M" (모바일)
        					pv_Sender:strTelNo,			//  발신번호 또는 사번
        					pv_SenderName:strEmpName	//  발신자명
        				   };

        		this.commUtil.popup(this, "CS_SMSSend", "Common::CS_SMSSend.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        	else if(type == "btn_EmailSend")
        	{
        		this.ds_EmailSend.clearData();

        		for(var i = 0; i < this.dsOutput.rowcount; i++)
        		{
        			if(this.dsOutput.getColumn(i, "SMS_FLAG") == 1)
        			{
        				var nRow = this.ds_EmailSend.addRow();
        				this.ds_EmailSend.setColumn(nRow, "EMP_NAME", this.dsOutput.getColumn(i, "EMP_NAME"));
        				this.ds_EmailSend.setColumn(nRow, "EMAIL", this.dsOutput.getColumn(i, "EMAIL"));
        			}
        		}

        		var sArgument = {
        					dsInput:this.ds_EmailSend,
        					key:"EmailSend"
        				   };

        		this.commUtil.popup(this, "CE_EMailSend", "Common::CE_EMailSend.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        	else if(type == "btn_CertificatePrint")
        	{
        		//사용자가 창을 닫고 다시 눌렀을 시에 데이터 초기화 작업.
        		this.dsOutput_print2.clearData();

        		//수료증 출력 대상자에 대한 Dataset추출
        		for(var i = 0; i<this.dsOutput.rowcount; i++)
        		{
        			if(this.dsOutput.getColumn(i, "CERTIFICATES_FLAG") == 1)
        			{
        				var nRow = this.dsOutput_print2.addRow();
        				this.dsOutput_print2.copyRow(nRow, this.dsOutput, i);
        			}
        		}

        		var sArgument = {dsPrint : this.dsOutput_print2
        						,Product_Name : this.div_EduMM.form.cmb_ProductName.value
        						,Office_TelNo : strTelNo
        						,Send_Eamil : strEamil
        						};
        		this.commUtil.popup(this, "TE_CertificateInfoReg", "Technique::TE_CertificateInfoReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        };

        this.fnSetEduInfo = function(nRow)
        {
        	this.div_EduMM.form.edt_Discrimination.set_value(this.ds_Record.getColumn(nRow, "ES_SEQ"));
        	var nFindRow;
        	nFindRow = this.ds_CD_EDU_TYPE.findRow("CODE", this.ds_Record.getColumn(nRow, "EDU_TYPE"));
        	this.div_EduMM.form.stc_EduType.set_text(this.ds_CD_EDU_TYPE.getColumn(nFindRow, "CAPTION"));

        	nFindRow = this.ds_CD_EDU_TYPE_DET.findRow("CODE", this.ds_Record.getColumn(nRow, "EDU_TYPE_DET"));
        	this.div_EduMM.form.stc_EduTypeDet.set_text(this.ds_CD_EDU_TYPE_DET.getColumn(nFindRow, "CAPTION"));

        	nFindRow = this.ds_CD_EDU_AREA_CODE.findRow("CODE", this.ds_Record.getColumn(nRow, "EDU_AREA_CODE"));
        	this.div_EduMM.form.stc_Area.set_text(this.ds_CD_EDU_AREA_CODE.getColumn(nFindRow, "CAPTION"));
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_EDU_PRODUCT_CODE" 	,"EDU_PRODUCT_CODE");
        	this.gfnAddCodeDataset("ds_CD_EDU_TYPE" 			,"EDU_TYPE");
        	this.gfnAddCodeDataset("ds_CD_EDU_TYPE_DET" 		,"EDU_TYPE_DET");
        	this.gfnAddCodeDataset("ds_CD_EDU_AREA_CODE"		,"EDU_AREA_CODE");
        	this.gfnAddCodeDataset("ds_CD_EDU_STATUS" 			,"EDU_STATUS");
        	this.gfnAddCodeDataset("ds_CD_REQ_REASON"			,"REQ_REASON");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	this.gfnAddSendParameter("EDU_PRODUCT_CODE", this.div_EduMM.form.cmb_ProductName.value);
        	this.gfnAddSendParameter("ES_SEQ", this.div_EduMM.form.edt_Discrimination.value);
        	this.gfnAddSendParameter("EXCEP_CANCEL_FALG", this.div_EduMM.form.chb_ExceptionCancel.value);
        	this.gfnAddSendParameter("EXCEP_SALESMAN_FALG", this.div_EduMM.form.chb_ExceptionSalesman.value);

        	this.gfnAddOutputDataset("dsOutput", "dsOutput");
        	this.gfnCommonTransaction("Select", "TE_EduMM_S03", this.grd_EduMM);
        };

        this.fnSave = function()
        {
        	this.gfnAddInputDataset("dsOutput", "dsInput");
        	this.gfnCommonTransaction("Save", "TE_EduMM_R02");
        };

        this.fnChkCount = function(str1, str2)
        {
        	this.gfnAddSendParameter("Product_Name", str1);
        	this.gfnAddSendParameter("ES_SEQ", str2);

        	this.gfnAddOutputDataset("ds_ChkCount", "dsOutput");
        	this.gfnCommonTransaction("ChkCount", "TE_EduMM_S07",  null, false); //마지막 인덱스는 Sync / Async를 의미한다.
        };

        this.fnGetYear = function(svcId)
        {
        	this.gfnAddSendParameter("Product_Name", svcId);

        	this.gfnAddOutputDataset("ds_Year", "dsOutput");
        	this.gfnCommonTransaction("GetYear", "TE_EduMM_S01");
        };

        this.fnGetRecord = function(svcId, svcId2)
        {
        	this.gfnAddSendParameter("Product_Name", svcId);
        	this.gfnAddSendParameter("Product_Year", svcId2);

        	this.gfnAddOutputDataset("ds_Record", "dsOutput");
        	this.gfnCommonTransaction("GetRecord", "TE_EduMM_S02");
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	//에러 예외처리
        	if(nErrorCode != 0)
        	{
        		alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID == "GetYear")
        		{
        			this.div_EduMM.form.cmb_Year.set_value(this.ds_Year.getColumn(0, "CODE"));
        			this.fnGetRecord(this.div_EduMM.form.cmb_ProductName.value, this.div_EduMM.form.cmb_Year.value);
        		}
        		else if(strSvcID == "GetRecord")
        		{
        			this.fnSetEduInfo(0);
        			this.fnSearch();
        		}
        		else if(strSvcID == "gfnGetCode")
        		{

        		}
        		else if(strSvcID == "Select")
        		{

        		}
        		else if(strSvcID == "Save")
        		{
        			this.fnSearch();
        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_CertificatePrint" :
        			if(this.dsOutput.rowcount <= 0)
        			{
        				this.alert("출력할 데이터가 없습니다.!!");
        				return;
        			}
        			else
        			{
        				this.fnSend(obj.name);
        			}
        			break;
        		case "btn_TotalPrint" :
        			if(this.dsOutput.rowcount <= 0)
        			{
        				this.alert("출력할 데이터가 없습니다.!!");
        				return;
        			}
        			else
        			{
        				var EDU_DATE = "", temp = "", res = "";

        				for(var i=0; i<this.ds_Record.rowcount; i++)
        				{
        					if(this.ds_Record.getColumn(i, "ES_SEQ") == this.div_EduMM.form.edt_Discrimination.value)
        					{
        						EDU_DATE += this.ds_Record.getColumn(i, "START_DATE");
        						EDU_DATE += " " + "~" + " ";
        						EDU_DATE += this.ds_Record.getColumn(i, "END_DATE");
        						break;
        					}
        				}

        				this.dsOutput_print.clearData();
        				for(var i=0; i<this.dsOutput.rowcount; i++)
        				{

        					var nRow = this.dsOutput_print.addRow();
        					this.dsOutput_print.copyRow(nRow, this.dsOutput, i);

        					//전화번호 - 표시 제거
        					temp = this.dsOutput_print.getColumn(i, "PHONE_NO");

        					for(var j = 0; j < temp.length; j++)
        					{
        						if(temp.charAt(j) != '-')
        						{
        							res += temp.charAt(j);
        						}
        					}

        					this.dsOutput_print.setColumn(nRow, "PHONE_NO", res);
        					res = "";
        				}

        				this.dsOutput_print.applyChange();
        				// Dataset 설정
        				this.gfn_SetAddInputDs("dsOutput", this.dsOutput_print);
        				// Parameter 설정
        				this.gfn_SetAddParam("ES_SEQ", this.div_EduMM.form.edt_Discrimination.value);
        				this.gfn_SetAddParam("EDU_DATE", EDU_DATE);

        				// Report PopupViewer
        				this.gfnPopupReportViewer("EDU_PRINT.jrf");
        			}
        			break;

        		case "btn_RegisterEpisode" :
        			//var sArgument = {};
        			this.commUtil.popup(this, "TE_EduSeqMM", "Technique::TE_EduSeqMM.xfdl", -1, -1, null, null, true, true, false, null, "fnPopupCallBack");
        			break;

        		case "btn_SMSSend" :
        			if(this.dsOutput.rowcount <= 0)
        			{
        				this.alert("발송 상대가 지정되지 않았습니다.");
        				return;
        			}
        			else
        			{
        				this.fnSend(obj.name);
        			}
        			break;

        		case "btn_EmailSend" :
        			if(this.dsOutput.rowcount <= 0)
        			{
        				this.alert("발송 상대가 지정되지 않았습니다.");
        				return;
        			}
        			{
        				this.fnSend(obj.name);
        			}
        			break;

        		case "btn_Inquiry" :
        			this.fnSearch();
        			break;

        		case "btn_New" :
        			var sArgument = {
        								ds_Record : this.ds_Record,
        								ES_SEQ : this.div_EduMM.form.edt_Discrimination.value,
        								Product_Name : this.div_EduMM.form.cmb_ProductName.value
        							};

        			this.commUtil.popup(this, "TE_EduReg_New", "Technique::TE_EduReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			break;

        		case "btn_Delete" :
        			if(this.dsOutput.rowcount < 1)
        			{
        				this.alert("취소할 대상자가 존재하지 않습니다.");
        				return false;
        			}
        			if(this.confirm(this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NAME") + "님의 교육신청을 취소하시겠습니까?"))
        			{
        				this.dsOutput.deleteRow(this.dsOutput.rowposition);
        			}
        			break;

        		case "btn_Save" :
        			this.fnSave();
        			break;
        		case "btn_ExcelExport" :
        			this.fn_export(this.grd_EduMM);
        			break;
        	}
        };

        //TE_EduSeqMM에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "TE_EduSeqMM" :
        			break;

        		case "TE_EduReg_New" : //신규추가 버튼 클릭 했을 시
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);

        				var nRow = this.dsOutput.addRow();
        				this.dsOutput.copyRow(nRow, dsOutput, 0);

        			}
        			break;

        		case "TE_EduReg" : //수강생 리스트 그리드를 더블클릭 했을 시
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);

        				//getColumnInfo : DataSet에서 지정한 Column 의 ColumnInfo 객체를 반환하는 메소드입니다.
        				if(!this.gfnIsEmpty(dsOutput.getColumnInfo( "NEW_ESL_SEQ" )))
        				{8
        					this.dsOutput.copyRow(dsOutput.getColumn(0, "NEW_ESL_SEQ"), dsOutput, 0);
        				}
        				else
        				{
        					var sEslSeq = dsOutput.getColumn(0, "ESL_SEQ");

        					if(!this.gfnIsEmpty(sEslSeq))
        					{
        						var nRow = this.dsOutput.findRow("ESL_SEQ", sEslSeq);
        						this.dsOutput.copyRow(nRow, dsOutput, 0);
        					}
        				}
        			}
        			break;

        		case "CS_SMSSend" :
        			break;

        		case "CE_EMailSend" :
        			break;

        		case "TE_CertificateInfoReg" :
        			break;
        		case "EduESSEQMove" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg)
        				/*교육권한은 정원상관없이 이동 가능*/
        				var nRow = this.dsOutput.findRow("ESL_SEQ", dsOutput.getColumn(0,"ESL_SEQ"));
        				this.dsOutput.setColumn(nRow, "ES_SEQ", dsOutput.getColumn(0,"ES_SEQ"));
        				this.fnSave();
        				this.alert(dsOutput.getColumn(0, "ES_SEQ") + "회차로 이동하였습니다.");
        			}
        			break;
        		case "EduESSEQCopy" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				var dsOutput = new Dataset();
        				dsOutput.loadXML(popupArg);
        				/*교육권한은 정원상관없이 복사 가능*/
        				var nFindRow = this.dsOutput.findRow("ESL_SEQ", dsOutput.getColumn(0,"ESL_SEQ"));
        				var nRow = this.dsOutput.addRow();
        				this.dsOutput.copyRow(nRow, this.dsOutput, nFindRow);
        				this.dsOutput.setColumn(nRow, "ES_SEQ", dsOutput.getColumn(0,"ES_SEQ"));
        				this.dsOutput.setColumn(nRow, "STATUS_CD", '1');	/*신청으로 복사*/
        				this.fnSave();
        				this.alert(dsOutput.getColumn(0, "ES_SEQ") + "회차로 복사하였습니다.");
        			}
        			break;
        	}
        }

        this.div_EduMM_Button00_onclick = function(obj,e)
        {
        	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(nexacro.getApplication().mainframe, 0));
        	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(nexacro.getApplication().mainframe, 0));

        	this.pdiv_ScheduleList.trackPopup(x-76.5, y);
        };

        //제품 변경 시
        this.div_EduMM_cmb_ProductName_onitemchanged = function(obj,e)
        {
        	this.fnGetYear(this.div_EduMM.form.cmb_ProductName.value);
        };

        //년도 변경 시
        this.div_EduMM_cmb_Year_onitemchanged = function(obj,e)
        {
        	this.fnGetRecord(this.div_EduMM.form.cmb_ProductName.value, this.div_EduMM.form.cmb_Year.value);
        };

        this.pdiv_ScheduleList_grd_ScheduleList_oncellclick = function(obj,e)
        {
        	this.fnSetEduInfo(e.row);
        	this.fnSearch();
        	this.pdiv_ScheduleList.closePopup();
        };

        this.grd_EduMM_oncelldblclick = function(obj,e)
        {
        	if(!(e.col == 10 || e.col == 11 || e.col == 12 || e.col == 13))
        	{
        		this.dsOutput_Reference.clearData();

        		var nRow = this.dsOutput_Reference.addRow();
        		this.dsOutput_Reference.copyRow(nRow, this.dsOutput, e.row);

        		var sArgument = {
        						ds_Record : this.ds_Record,
        						dsOutput_Reference : this.dsOutput_Reference,
        						ESL_SEQ : this.dsOutput.getColumn(e.row, "ESL_SEQ"),
        						ES_SEQ : this.dsOutput.getColumn(e.row, "ES_SEQ"),
        						nRow : e.row
        					}

        		this.commUtil.popup(this, "TE_EduReg", "Technique::TE_EduReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        };

        this.getDate = function()
        {
        	var objDate = new Date();
        	var strMonth = "", strDate = "", resMonth = "", resDate = "";

        	strMonth = parseInt(objDate.getMonth()) + 1;
        	strDate = parseInt(objDate.getDate());

        	resMonth = strMonth.toString().padLeft(2, "0");
        	resDate = strDate.toString().padLeft(2, "0");

        	return objDate.getYear() + "-" + resMonth + "-" + resDate;
        };

        this.grd_EduMM_onheadclick = function(obj,e)
        {
        	if(e.col == 10 || e.col == 12|| e.col == 14) //10:수강여부, 11수료증 출력, 13 메세지 전송
        	{
        		var strValue = obj.getCellProperty("head", e.cell, "text")==1?0:1;
        		var strColumn = e.col==10?"ATTEND_FLAG":e.col==12?"CERTIFICATES_FLAG":"SMS_FLAG";

        		obj.setCellProperty("head", e.cell, "text", strValue);
        		for(var i=0; i<this.dsOutput.rowcount; i++)
        		{
        			if(strColumn=="CERTIFICATES_FLAG" && this.dsOutput.getColumn(i, "ATTEND_FLAG")=="0")
        				continue;
        			else
        				this.dsOutput.setColumn(i, strColumn, strValue);
        		}
        	}
        	else
        	{
        		this.gfnGridProcSort(obj, e.cell);  //헤더클릭 이벤트 있을 시 사용
        	}
        };

        this.grd_EduMM_oncellclick = function(obj,e)
        {
        	var app = nexacro.getApplication();
        	var EMP_NO = app.gdsUserInfo.getColumn(0, "EMP_NO");

        	if((obj.getCellText(e.row, e.cell) == "회차이동"))
        	{
        		if(this.commUtil.getFormAuthority(292,1))
        		{
        			this.dsCopy.clearData();
        			var nRow = this.dsCopy.addRow();
        			this.dsCopy.copyRow(nRow, this.dsOutput, e.row);

        			var sArgument = {
        								Product_Name : this.div_EduMM.form.cmb_ProductName.value,
        								Product_Year : this.div_EduMM.form.cmb_Year.value,
        								dsCopy : this.dsCopy
        							};

        			this.commUtil.popup(this, "EduESSEQMove", "Technique::TE_EduESSEQSelect.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        		}
        		else
        		{
        			this.alert("회차이동 권한이 없습니다.");
        		}
        	}
        	else if((obj.getCellText(e.row, e.cell) == "복사"))
        	{
        		if(this.commUtil.getFormAuthority(292,1))
        		{
        			this.dsCopy.clearData();
        			var nRow = this.dsCopy.addRow();
        			this.dsCopy.copyRow(nRow, this.dsOutput, e.row);

        			var sArgument = {
        								Product_Name : this.div_EduMM.form.cmb_ProductName.value,
        								Product_Year : this.div_EduMM.form.cmb_Year.value,
        								dsCopy : this.dsCopy
        							};

        			this.commUtil.popup(this, "EduESSEQCopy", "Technique::TE_EduESSEQSelect.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        		}
        		else
        		{
        			this.alert("복사 권한이 없습니다.");
        		}
        	}
        };

        this.dsOutput_cancolumnchange = function(obj,e)
        {
        	if(e.columnid=="CERTIFICATES_FLAG" && obj.getColumn(e.row, "ATTEND_FLAG")=="0")
        		return false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_EduMM_onload,this);
            this.div_EduMM.form.cmb_Year.addEventHandler("onitemchanged",this.div_EduMM_cmb_Year_onitemchanged,this);
            this.div_EduMM.form.cmb_ProductName.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);
            this.div_EduMM.form.btn_Inquiry.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_New.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_CertificatePrint.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_TotalPrint.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_RegisterEpisode.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_SMSSend.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_EmailSend.addEventHandler("onclick",this.comm_Click,this);
            this.div_EduMM.form.btn_Discrimination.addEventHandler("onclick",this.div_EduMM_Button00_onclick,this);
            this.div_EduMM.form.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);
            this.grd_EduMM.addEventHandler("oncelldblclick",this.grd_EduMM_oncelldblclick,this);
            this.grd_EduMM.addEventHandler("onheadclick",this.grd_EduMM_onheadclick,this);
            this.grd_EduMM.addEventHandler("oncellclick",this.grd_EduMM_oncellclick,this);
            this.pdiv_ScheduleList.form.grd_ScheduleList.addEventHandler("oncellclick",this.pdiv_ScheduleList_grd_ScheduleList_oncellclick,this);
            this.dsOutput.addEventHandler("cancolumnchange",this.dsOutput_cancolumnchange,this);
        };
        this.loadIncludeScript("TE_EduMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
