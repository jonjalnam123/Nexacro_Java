(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testUbrReport");
            this.set_titletext("Ubi Report");
            this.getSetter("classname").set("NexacroForm");
            if (Form == this.constructor)
            {
                this._setFormPosition(1033,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTID\" type=\"string\" size=\"255\"/><Column id=\"DETAILCATEGORYID\" type=\"string\" size=\"255\"/><Column id=\"COMPANY\" type=\"string\" size=\"255\"/><Column id=\"MODELNAME\" type=\"string\" size=\"255\"/><Column id=\"UNITCOST\" type=\"string\" size=\"22\"/><Column id=\"DESCRIPTION\" type=\"string\" size=\"255\"/><Column id=\"DISCOUNTRATE\" type=\"string\" size=\"6\"/></ColumnInfo><Rows><Row><Col id=\"PRODUCTID\">AAA</Col><Col id=\"DETAILCATEGORYID\">식품</Col><Col id=\"COMPANY\">청정원</Col><Col id=\"MODELNAME\">A1</Col><Col id=\"UNITCOST\">100</Col><Col id=\"DESCRIPTION\">설명 111</Col><Col id=\"DISCOUNTRATE\">5</Col></Row><Row><Col id=\"PRODUCTID\">BBB</Col><Col id=\"DETAILCATEGORYID\">과자</Col><Col id=\"COMPANY\">농심</Col><Col id=\"MODELNAME\">B1</Col><Col id=\"UNITCOST\">200</Col><Col id=\"DESCRIPTION\">설명 222</Col><Col id=\"DISCOUNTRATE\">10</Col></Row><Row><Col id=\"PRODUCTID\">CCC</Col><Col id=\"DETAILCATEGORYID\">청과</Col><Col id=\"COMPANY\">사과</Col><Col id=\"MODELNAME\">C1</Col><Col id=\"UNITCOST\">300</Col><Col id=\"DESCRIPTION\">설명 333</Col><Col id=\"DISCOUNTRATE\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIGAGENTID\" type=\"STRING\" size=\"256\"/><Column id=\"BIGAGENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"value\">Form 임베디드</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"value\">Div 임베디드</Col></Row><Row><Col id=\"code\">C</Col><Col id=\"value\">팝업(Child Form)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_blob", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BLOB_IMG\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_large", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Col1\" type=\"STRING\" size=\"256\"/><Column id=\"Col2\" type=\"STRING\" size=\"256\"/><Column id=\"Col3\" type=\"STRING\" size=\"256\"/><Column id=\"Col4\" type=\"STRING\" size=\"256\"/><Column id=\"Col5\" type=\"STRING\" size=\"256\"/><Column id=\"Col6\" type=\"STRING\" size=\"256\"/><Column id=\"Col7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1건</Col><Col id=\"value\">1건</Col></Row><Row><Col id=\"code\">50</Col><Col id=\"value\">50건</Col></Row><Row><Col id=\"code\">100</Col><Col id=\"value\">1백건</Col></Row><Row><Col id=\"code\">500</Col><Col id=\"value\">5백건</Col></Row><Row><Col id=\"code\">1000</Col><Col id=\"value\">1천건</Col></Row><Row><Col id=\"code\">5000</Col><Col id=\"value\">5천건</Col></Row><Row><Col id=\"code\">10000</Col><Col id=\"value\">1만건</Col></Row><Row><Col id=\"code\">50000</Col><Col id=\"value\">5만건</Col></Row><Row><Col id=\"code\">100000</Col><Col id=\"value\">10만건</Col></Row><Row><Col id=\"code\">150000</Col><Col id=\"value\">15만건</Col></Row><Row><Col id=\"code\">200000</Col><Col id=\"value\">20만건</Col></Row><Row><Col id=\"value\">30만건</Col><Col id=\"code\">300000</Col></Row><Row><Col id=\"code\">400000</Col><Col id=\"value\">40만건</Col></Row><Row><Col id=\"code\">500000</Col><Col id=\"value\">50만건</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid3","756","10","260","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid2");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"144\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"BIGAGENTID\"/><Cell col=\"1\" text=\"BIGAGENTNAME\"/></Band><Band id=\"body\"><Cell text=\"bind:BIGAGENTID\"/><Cell col=\"1\" text=\"bind:BIGAGENTNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridView","8","213","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("그리드 조회");
            this.addChild(obj.name, obj);

            obj = new Combo("cbViewType","98","243","123","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_text("Form 임베디드");
            obj.set_value("A");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnDb","224","243","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("DB");
            this.addChild(obj.name, obj);

            obj = new Button("btnService","301","243","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Service");
            this.addChild(obj.name, obj);

            obj = new Button("btnLocalDs","378","243","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Local DS");
            this.addChild(obj.name, obj);

            obj = new Button("btnRuntimeV","455","243","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Runtime(V)");
            this.addChild(obj.name, obj);

            obj = new Button("btnRuntimeH","530","243","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Runtime(H)");
            this.addChild(obj.name, obj);

            obj = new UbiReport("UbiViewer","8","270","452","450",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chSize","7","245","88","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사이즈고정");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Div("UbiDiv","470","270","546","490",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnBlob_DS","606","213","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Blob(DS)");
            this.addChild(obj.name, obj);

            obj = new Button("btnBlob_SVC","606","243","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Blob(SVC)");
            this.addChild(obj.name, obj);

            obj = new Button("btnSVC_Large_XML","378","213","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("SVC(XML)");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbRowCnt","98","213","122","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_list2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_text("50건");
            obj.set_value("50");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnLocalDs_Large_XML","224","213","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("LDS(XML)");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLocalDs_Large_SSV","301","213","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("LDS(SSV)");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSVC_Large_SSV","455","213","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("SVC(SSV)");
            this.addChild(obj.name, obj);

            obj = new Button("btnSVC_Large_SSV2","531","213","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("SVC(SSV)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1","8","10","736","200",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_grid1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"117\"/><Column size=\"123\"/><Column size=\"225\"/><Column size=\"80\"/><Column size=\"262\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"PRODUCTID\"/><Cell col=\"1\" text=\"DETAILCATEGORYID\"/><Cell col=\"2\" text=\"COMPANY\"/><Cell col=\"3\" text=\"MODELNAME\"/><Cell col=\"4\" text=\"UNITCOST\"/><Cell col=\"5\" text=\"DESCRIPTION\"/><Cell col=\"6\" text=\"DISCOUNTRATE\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTID\"/><Cell col=\"1\" text=\"bind:DETAILCATEGORYID\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:COMPANY\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:MODELNAME\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNITCOST\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DESCRIPTION\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:DISCOUNTRATE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:getSum(&quot;parseInt(UNITCOST)&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","706","227","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.UbiDiv
            obj = new Layout("default","",0,0,this.UbiDiv.form,function(p){});
            this.UbiDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampletUbiReport.xfdl", function() {
        /************************************************************************************
        * 뷰어 초기 설정
        ************************************************************************************/
        var svcurl = this.gfnGetServerUrl(); //"http://localhost:8017/nexacro";

        this.UbiViewer.key = getRandomKey();
        this.UbiViewer.ubiserverurl = svcurl + "/UbiServer";
        this.UbiViewer.resource = svcurl + "/ubi4/js";
        this.UbiViewer.reporturl = svcurl + "/ubi4/work/";
        this.UbiViewer.resid = "UBIHTML";
        this.UbiViewer.scale = "-9998";
        this.UbiViewer.datasource = "Tutorial";	// 런타임용

        /************************************************************************************
        * 기타 API
        this.UbiViewer.setUserSaveList('Image,Pdf,Docx,Xls,Pptx,Hml,Cell');
        this.UbiViewer.setUserPrintList('Ubi,Html,Pdf');
        this.UbiViewer.setHmlExtension("HWP");
        this.UbiViewer.addEventHandler('PrintEnd', this.UbiPrintEnd, this);
        this.UbiViewer.addEventHandler('ExportEnd', this.UbiExportEnd, this);
        this.UbiViewer.addEventHandler('LinkButtonDown', this.UbiLinkButtonDown, this);
        this.UbiViewer.printHTML();		// HTML PrintSet
        this.UbiViewer.printPDF();		// PDF PrintSet
        this.UbiViewer.export('PDF');	// PDF/EXCEL/EXCEL_NO/HWP/PPTX/HML/DOCX/CELL/IMAGE
        this.UbiViewer.print();			// Direct Print(전용뷰어)
        this.UbiViewer.printSet();		// PrintSet(전용뷰어)
        ************************************************************************************/


        ////////////////////////////////////////////////////////////////////////////////
        this.ubiDataType; 		// 데이타 유형 ( -1:조회안함, 0:DB, 1:Service, 2:Local DS, 3:Runtime Report)
        this.ubiIsRuntime;		// 런타임 리포트 여부
        this.ubiReportFile;		// 리포트 파일명
        this.ubiSvcUrl;			// 데이타셑을 가져오는 서비스 정보
        this.ubiLocalDS;		// 로컬 데이타셑 정보
        this.ubiGridObj;		// 런트임 리포트에서 사용하는 그리드 객체
        this.ubiArg;			// 리포트에서 사용하는 아규먼트
        ////////////////////////////////////////////////////////////////////////////////

        /************************************************************************************
        * 뷰어 및 DIV 사이즈 초기화
        ************************************************************************************/
        this.NexaForm_oninit = function(obj, e)
        {
        	this.UbiViewer.set_left(8);
        	this.UbiViewer.set_top(270);
        	this.UbiViewer.set_width(1008);
        	this.UbiViewer.set_height(490);

        	this.UbiDiv.set_left(8);
        	this.UbiDiv.set_top(270);
        	this.UbiDiv.set_width(1008);
        	this.UbiDiv.set_height(490);
        }

        /************************************************************************************
        * 그리드 조회*
        ************************************************************************************/
        this.btnGridView_onclick = function(obj,  e)
        {
        	var nexaParam = "method=getList&nbsp;sqlId=selectMenuList selectMenuGroupList&nbsp;GROUP_ID=ADMIN&nbsp;";
        	this.transaction("grid_search", svcurl + "/nexadata/ds_all.jsp", "input1=ds_input", "ds_grid1=product ds_grid2=agent", nexaParam, "", true, 0);
        }

        /************************************************************************************
        * 일반 출력물 조회@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        * Data : DB 사용
        ************************************************************************************/
        this.btnDb_onclick = function(obj,  e)
        {
        	this.ubiDataType = 0;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "ubinexa_db.jrf";
        	this.ubiSvcUrl = null;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 일반 출력물 조회@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        * Data : Service URL 사용
        ************************************************************************************/
        this.btnService_onclick = function(obj,  e)
        {
        	var svcUrl = [];
        	var argument = "";

        	svcUrl.push(["ubireport_preview", svcurl + "/nexadata/ds_all.jsp", "ds_list=list", "product=SQL01 agent=SQL02", argument, 0, this]);

        	this.ubiDataType = 1;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "ubinexa_url.jrf";
        	this.ubiSvcUrl = svcUrl;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 일반 출력물 조회
        * Data : Local Dataset 사용
        ************************************************************************************/
        this.btnLocalDs_onclick = function(obj,  e)
        {
        	var localDs = [];
        	localDs.push(["SQL01", this.ds_grid1]);
        	localDs.push(["SQL02", this.ds_grid2]);

        	this.ubiDataType = 2;
        	this.ubiIsRuntime = false;
        	//this.ubiReportFile = "ubinexa_ds.jrf";
        	this.ubiReportFile = "vertical.jrf";

        	this.ubiSvcUrl = null;
        	this.ubiLocalDs = localDs;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	//alert("localDs.length : " + localDs.length + "\n" + this.ds_grid1.saveXML());
        	this.ubiPreview();
        }

        /************************************************************************************
        * 자동 출력물(Runtime Report) 조회. 세로템플릿.
        * Data : Local Dataset 사용
        ************************************************************************************/
        this.btnRuntimeV_onclick = function(obj,  e)
        {
        	this.ubiDataType = 3;
        	this.ubiIsRuntime = true;
        	this.ubiReportFile = "vertical.jrf";
        	this.ubiSvcUrl = null;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = this.Grid1;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 자동 출력물(Runtime Report) 조회. 가로템플릿.
        * Data : Local Dataset 사용
        ************************************************************************************/
        this.btnRuntimeH_onclick = function(obj,  e)
        {
        	this.ubiDataType = 3;
        	this.ubiIsRuntime = true;
        	this.ubiReportFile = "horizontal.jrf";
        	this.ubiSvcUrl = null;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = this.Grid1;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * Blob Image 출력물 조회
        * Data : Local Dataset 사용
        ************************************************************************************/
        this.btnBlob_DS_onclick = function(obj,  e)
        {
        	// Blob image를 위한 Local Dataset 생성
        	this.transaction("blob_search", svcurl + "/nexadata/ds_blob.jsp", "", "ds_blob=dataset01", "", "localBlob_Callback", true, 0);
        }

        /************************************************************************************
        * 로컬 데이타셑(Blob IMAGE) 바인딩 후 리포트 조회를 위한 콜백 함수
        ************************************************************************************/
        this.localBlob_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	var localDs = [];
        	localDs.push(["SQL01", this.ds_blob]);

        	this.ubiDataType = 2;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "ubinexa_ds_blob.jrf";
        	this.ubiSvcUrl = null;
        	this.ubiLocalDs = localDs;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * Blob Image 출력물 조회
        * Data : Service URL 사용
        ************************************************************************************/
        this.btnBlob_SVC_onclick = function(obj,  e)
        {
        	var svcUrl = [];
        	//datasetid1=sqlid1 datasetid2=sqlid2 ...
        	svcUrl.push(["report_viewing", svcurl + "/nexadata/ds_blob.jsp", "", "dataset01=SQL01", "", 0, this]);

        	this.ubiDataType = 1;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "ubinexa_url_blob.jrf";
        	this.ubiSvcUrl = svcUrl;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 대량 데이터 출력물 조회
        * Data : Local Dataset 사용
        * 서비스 URL에서 XML 형태로 데이타를 전송함
        * 서식형태 : 리스트
        * 콜백함수(LocalDs_XML_Callback)에서 출력물 미리보기 처리
        ************************************************************************************/
        this.btnLocalDs_Large_XML_onclick = function(obj,  e)
        {
        	var argument = "";
        	argument = "row=" + this.cbRowCnt.value + " ";
        	this.transaction("load_data", svcurl + "/nexadata/ds_large_xml.jsp", "", "ds_large=DS1", argument, "LocalDs_XML_Callback", true, 0);
        }

        /************************************************************************************
        * 로컬 데이타셑 바인딩 후 리포트 조회를 위한 콜백 함수
        ************************************************************************************/
        this.LocalDs_XML_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	alert("로컬 데이타 생성(" + this.ds_large.getRowCount() + "건, XML) 후 미리보기 시작");

        	var localDs = [];
        	localDs.push(["SQL1", this.ds_large]);

        	this.ubiDataType = 2;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "large1.jrf";
        	this.ubiSvcUrl = null;
        	this.ubiLocalDs = localDs;
        	this.ubiGridObj = null;
        	this.ubiArg = "";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 대량 데이터 출력물 조회
        * Data : Local Dataset 사용
        * 서비스 URL에서 SSV 형태로 데이타를 전송함
        * 서식형태 : 리스트
        * 콜백함수(LocalDs_SSV_Callback)에서 출력물 미리보기 처리
        ************************************************************************************/
        this.btnLocalDs_Large_SSV_onclick = function(obj,  e)
        {
        	var argument = "";
        	argument = "row=" + this.cbRowCnt.value + " ";
        	this.transaction("load_data", svcurl + "/nexadata/ds_large_ssv1.jsp", "", "ds_large=DS1", argument, "LocalDs_SSV_Callback", true, 2);
        }

        /************************************************************************************
        * 로컬 데이타셑 바인딩 후 리포트 조회를 위한 콜백 함수
        ************************************************************************************/
        this.LocalDs_SSV_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	alert("로컬 데이타 생성(" + this.ds_large.getRowCount() + "건, SSV) 후 미리보기 시작");

        	var runtime = (nexacro.Browser == "Runtime");
        	if( runtime ) {
        		trace("=====" + this.ds_large.getRowCount());
        		trace("=====" + this.ds_large.saveSSV());
        	}
        	else {
        		console.log("=====" + this.ds_large.getRowCount());
        		console.log("=====" + this.ds_large.saveSSV());
        	}
        	var localDs = [];
        	localDs.push(["SQL1", this.ds_large]);

        	this.ubiDataType = 2;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "large1.jrf";
        	this.ubiSvcUrl = null;
        	this.ubiLocalDs = localDs;
        	this.ubiGridObj = null;
        	this.ubiArg = "";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 대량 데이터 출력물 조회
        * Data : Service URL 사용
        * 서비스 URL에서 XML 형태로 데이타를 전송함
        * 서식형태 : 리스트
        ************************************************************************************/
        this.btnSVC_Large_XML_onclick = function(obj,  e)
        {
        	alert("서비스 호출 방식으로 (" + this.cbRowCnt.value + "건, XML) 미리보기 시작");

        	var argument = "";
        	argument = "row=" + this.cbRowCnt.value + " ";

        	var svcUrl = [];
        	svcUrl.push(["ubireport_preview", svcurl + "/nexadata/ds_large_xml.jsp", "", "DS1=SQL1", argument, 0, this]);

        	this.ubiDataType = 1;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "large1.jrf";
        	this.ubiSvcUrl = svcUrl;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 대량 데이터 출력물 조회
        * Data : Service URL 사용
        * 서비스 URL에서 SSV 형태로 데이타를 전송함
        * 서식형태 : 리스트
        ************************************************************************************/
        this.btnSVC_Large_SSV1_onclick = function(obj,  e)
        {
        	alert("서비스 호출 방식으로 (" + this.cbRowCnt.value + "건, SSV) 미리보기 시작");

        	var argument = "";
        	argument = "row=" + this.cbRowCnt.value + " ";

        	var svcUrl = [];
        	svcUrl.push(["ubireport_preview", svcurl + "/nexadata/ds_large_ssv1.jsp", "", "DS1=SQL1", argument, 0, 2, this]);

        	this.ubiDataType = 1;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "large1.jrf";
        	this.ubiSvcUrl = svcUrl;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 대량 데이터 출력물 조회
        * Data : Service URL 사용
        * 서비스 URL에서 SSV 형태로 데이타를 전송함
        * 서식형태 : 프리폼
        ************************************************************************************/
        this.btnSVC_Large_SSV2_onclick = function(obj,  e)
        {
        	alert("대량 데이터 리포트 미리보기 시작(서비스 호출 방식, SSV)(프리폼 서식)");
        	if( this.cbRowCnt.value > 10000 ) {

        		alert('조회 건수가 너무 많습니다. 10,000건 이하로 조회해 주세요');
        		return false;
        	}

        	var argument1 = "";
        	argument1 = "row=" + this.cbRowCnt.value + " ";
        	argument1 += "gubun=DS1" + " ";

        	var argument2 = "";
        	argument2 = "row=" + this.cbRowCnt.value + " ";
        	argument2 += "gubun=DS2" + " ";

        	var svcUrl = [];
        	svcUrl.push(["master_data", svcurl + "/nexadata/ds_large_ssv2.jsp", "", "DS1=SQL1", argument1, 0, 2, this]);
        	// master_data 가 1000건이면 detail_data는 7000건 생성됨.
        	svcUrl.push(["detail_data", svcurl + "/nexadata/ds_large_ssv2.jsp", "", "DS2=SQL2", argument2, 0, 2, this]);

        	this.ubiDataType = 1;
        	this.ubiIsRuntime = false;
        	this.ubiReportFile = "large2.jrf";
        	this.ubiSvcUrl = svcUrl;
        	this.ubiLocalDs = null;
        	this.ubiGridObj = null;
        	this.ubiArg = "COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#";

        	this.ubiPreview();
        }

        /************************************************************************************
        * 미리보기 방식에 따라 분기 처리
        ************************************************************************************/
        this.ubiPreview = function()
        {
        	// Reload시 오류로 임시 조치
        	this.UbiViewer.localdatasets = [];
        	//alert("this.UbiViewer.localdatasets : " + this.UbiViewer.localdatasets);

        	if( this.cbViewType.value == "A" ) {		//폼 Embeded

        		if( this.ubiDataType == 3 )
        			this.showEmbededRuntimeReport();
        		else
        			this.showEmbededReport();
        	}
        	else if( this.cbViewType.value == "B" ) {	// DIV 임베디드 폼

        		this.UbiDiv.set_url("");
        		this.UbiDiv.set_url("Cmm::CmmUbiReport.xfdl");
        	}
        	else if( this.cbViewType.value == "C" ) {	// 팝업 폼

        		var argList = {ubiIsRuntime:this.ubiIsRuntime, ubiReportFile:this.ubiReportFile, ubiSvcUrl:this.ubiSvcUrl, ubiLocalDs:this.ubiLocalDs, ubiGridObj:this.ubiGridObj, ubiArg:this.ubiArg};
        		this.showPopupReport(argList);
        	}
        	else if( this.cbViewType.value == "D" ) {	// 새창(브라우저)

        		var argList = {ubiIsRuntime:this.ubiIsRuntime, ubiReportFile:this.ubiReportFile, ubiSvcUrl:this.ubiSvcUrl, ubiLocalDs:this.ubiLocalDs, ubiGridObj:this.ubiGridObj, ubiArg:this.ubiArg};
        		nexacro.open("print_popup", "Cmm::CmmUbiReport.xfdl", this, {a:'aaa', b:'bbb'}, "showtitlebar=true showstatusbar=false", 0, 0, 640, 480);
        	}
        	else {
        		alert("조회 형태를 선택하세요.");
        	}
        }

        /************************************************************************************
        * 현재 Form 상의 UbiViewer에서 출력물 조회@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        ************************************************************************************/
        this.showEmbededReport = function(argList)
        {
        	this.UbiViewer.jrffile = this.ubiReportFile;
        	this.UbiViewer.arg = this.ubiArg;

        	if( this.ubiDataType == 1 ) {

        		if( this.ubiSvcUrl != null ) {

        			for( var i = 0; i < this.ubiSvcUrl.length; i++ ) {

        				var data = this.ubiSvcUrl[i];
        				if( data.length > 7 ) {

        					this.UbiViewer.addTransaction2(data[7], data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
        				}
        				else {
        					this.UbiViewer.addTransaction(data[6], data[0], data[1], data[2], data[3], data[4], data[5]);
        				}
        			}
        		}
        	}
        	else if( this.ubiDataType == 2 ) {

        		if( this.ubiLocalDs != null ) {

        			for( var i = 0; i < this.ubiLocalDs.length; i++ ) {

        				var data = this.ubiLocalDs[i];
        				this.UbiViewer.setDataset(data[0], data[1]);
        			}
        		}
        	}
        	this.UbiViewer.retrieve(this, "UbiPreviewEnd");
        }

        /************************************************************************************
        * 팝업 Form의 UbiViewer에서 출력물 조회
        ************************************************************************************/
        this.showPopupReport = function(argList)
        {
        	var objChildFrame = new ChildFrame();
        	//objChildFrame.init( "UbiReport", null, null, 300, "400px", "80%", 300, "Cmm::CmmUbiReport.xfdl" );
        	objChildFrame.init("UbiReport", 30, 30, 900, 600, null, null, "Cmm::CmmUbiReport.xfdl");
        	//var varRet = objChildFrame.showModal(null, argList, this);
        	var varRet = objChildFrame.showModal(null, argList, this);
        }

        /************************************************************************************
        * 현재 Form 상의 UbiViewer에서 자동 출력물(Runtime Report) 조회
        ************************************************************************************/
        this.showEmbededRuntimeReport = function(argList)
        {
        	this.UbiViewer.jrffile = this.ubiReportFile;
        	this.UbiViewer.arg = this.ubiArg;

        	var formatRowCount = this.ubiGridObj.getFormatRowCount();
        	var formatColCount = this.ubiGridObj.getFormatColCount();

        	var widthArray = new Array;
        	var heightArray = new Array;

        	var headBgColor = "230.230.230";	// 헤더 배경색
        	var summBgColor = "240.240.240";	// 합계 배경색
        	var i = 0;
        	var j = 0;
        	var k = 0;

        	// Grid의 Row의 높이를 도출
        	var subidx = 0;
        	var bandtype = "";
        	var prebandtype = "";
        	var bodyStartRow = 0;
        	var summStartRow = 0;
        	for( i = 0; i < formatRowCount; i++ ) {

        		bandtype = this.ubiGridObj.getFormatRowProperty(i, "band");
        		if (bandtype == prebandtype) {

        			subidx++;
        		} else {

        			subidx = 0;
        		}

        		//heightArray[i] = this.ubiGridObj.getRealRowSize(i, subidx, false);
        		heightArray[i] = this.ubiGridObj.getFormatRowSize(i, subidx, false);

        		prebandtype = bandtype;
        	}

        	// Grid의 Column 넓이 도출
        	for( i = 0; i < formatColCount; i++ ) {

        		widthArray[i] = this.ubiGridObj.getRealColSize(i);
        	}

        	var cellcount = 0;
        	var rowcount = 0;

        	// ------------------------------------------------------------
        	// 디자인정보를 담고있는 Dataset 생성
        	// ------------------------------------------------------------
        	// 추가 2015.03.10 : START
        	// 컬럼 생성
        	var designDataset = this.UbiViewer.getDesignDataset(this);

        	prebandtype = "";
        	var bandRow = 0;
        	var nRow = 0;
        	var rowidx = 0;
        	var colidx = 0;
        	var colspan = 0;
        	var rowspan = 0;
        	var colwidth = 0;
        	var colheight = 0;
        	var startIdx = 0;
        	var endIdx = 0;
        	var bgcolor = "";

        	// 전체 높이와 넒이를 담은 Row 생성
        	nRow = designDataset.addRow();
        	designDataset.setColumn(nRow, "type", "widths");
        	designDataset.setColumn(nRow, "text", widthArray);
        	designDataset.setColumn(nRow, "summarytype", this.ubiGridObj.summarytype); //추가

        	nRow = designDataset.addRow();
        	designDataset.setColumn(nRow, "type", "heights");
        	designDataset.setColumn(nRow, "text", heightArray);


        	for( i = 0; i < formatRowCount; i++ ) {

        		bandtype = this.ubiGridObj.getFormatRowProperty(i, "band");
        		if( bandtype != prebandtype ) {

        			if( bandtype == "head" ) {

        				bandRow = -1;
        				bgcolor = headBgColor;
        			} else if( bandtype == "body" ) {

        				bandRow = 0;
        				bgcolor = "";
        			} else if( bandtype == "summ" ) {

        				bandRow = -2;
        				bgcolor = summBgColor;
        			}

        			cellcount = this.ubiGridObj.getCellCount(bandtype);

        			for( j = 0; j < cellcount; j++ ) {

        				rowidx = this.ubiGridObj.getCellProperty(bandtype, j, "row");
        				colidx = this.ubiGridObj.getCellProperty(bandtype, j, "col");
        				rowspan = this.ubiGridObj.getCellProperty(bandtype, j, "rowspan");
        				colspan = this.ubiGridObj.getCellProperty(bandtype, j, "colspan");

        				nRow = designDataset.addRow();
        				designDataset.setColumn(nRow, "type", bandtype);
        				designDataset.setColumn(nRow, "row", rowidx);
        				designDataset.setColumn(nRow, "col", colidx);
        				designDataset.setColumn(nRow, "rowspan", rowspan);
        				designDataset.setColumn(nRow, "colspan", colspan);
        				designDataset.setColumn(nRow, "align", this.ubiGridObj.getCellProperty(bandtype, j, "align"));
        				if( bandRow != 0 ) {

        					designDataset.setColumn(nRow, "text", this.ubiGridObj.getCellText(bandRow, j));
        				}
        				designDataset.setColumn(nRow, "bgcolor", bgcolor);
        				designDataset.setColumn(nRow, "leftmargin", "2");
        				designDataset.setColumn(nRow, "rightmargin", "2");
        			}
        		}
        		prebandtype = bandtype;
        	}

        	this.addChild(designDataset.name, designDataset);

        	// ------------------------------------------------------------
        	// 그리드의 텍스트를 Dataset으로 생성
        	// ------------------------------------------------------------
        	cellcount = this.ubiGridObj.getCellCount("Body");
        	rowcount = this.ubiGridObj.rowcount;

        	var gridDataset = new Dataset("dsGrid", this);
        	this.addChild(gridDataset.name, gridDataset);

        	// column 생성
        	for( i = 0; i < cellcount; i++ ) {

        		gridDataset.addColumn("column" + i, "string");
        	}

        	// 그리드 데이터 입력
        	for( j = 0; j < rowcount; j++ ) {

        		gridDataset.addRow();
        		for( k = 0; k < cellcount; k++ ) {

        			gridDataset.setColumn(j, k, this.ubiGridObj.getCellText(j, k));
        		}
        	}

        	// dataset SSV 전송에 필요한 정보 생성
        	this.UbiViewer.setRuntimeData(designDataset, gridDataset);

        	// 동적으로 생성된 Dataset 제거
        	this.removeChild(designDataset.name);
        	this.removeChild(gridDataset.name);

        	this.UbiViewer.retrieve(this, "UbiPreviewEnd");
        }

        /************************************************************************************
        * 미리보기 완료 후 이벤트 처리
        ************************************************************************************/
        this.UbiPreviewEnd = function()
        {
        	// 전용뷰어 사용 기준 페이지 : 50페이지 이상이면 전용뷰어 인쇄만 활성화 됩니다.
        	var basePageNum = 50;
        	try {
        		if( basePageNum <= this.UbiViewer.getTotalPage() ) {

        			this.UbiViewer.setEnableToolbar("PRINT_PDF", false);
        			this.UbiViewer.setEnableToolbar("PRINT_HTML", false);
        			this.UbiViewer.setEnableToolbar("PRINT_UBI", true);
        			this.UbiViewer.setPluginProgress(true);
        		}
        		else {

        			this.UbiViewer.setEnableToolbar("PRINT_PDF", true);
        			this.UbiViewer.setEnableToolbar("PRINT_HTML", true);
        			this.UbiViewer.setEnableToolbar("PRINT_UBI", false);
        			this.UbiViewer.setPluginProgress(false);
        		}
        	}
        	catch (e) {}
        	if (nexacro.Browser == 'Runtime')
        		this.UbiViewer.setPluginProgress(true);
        }

        /************************************************************************************
        * 인쇄  완료 후 콜백
        ************************************************************************************/
        this.UbiPrintEnd = function(flag)
        {
        	if (nexacro.Browser == 'Runtime')
        		trace("Print Flag - " + this.UbiViewer.getPrintStatus());
        	else
        		console.log("Print Flag - " + flag);
        }

        /************************************************************************************
        * 저장 완료 후 콜백
        ************************************************************************************/
        this.UbiExportEnd = function(flag, fileName)
        {
        	if (nexacro.Browser == 'Runtime')
        		trace("Export FileName - " + this.UbiViewer.getVariable('exportFilePath'));
        	else
        		console.log("Export Flag - " + flag + ", FileName - " + fileName);
        }

        /************************************************************************************
        * 링크 콜백
        ************************************************************************************/
        this.UbiLinkButtonDown = function(fileName, args)
        {
        }

        /************************************************************************************
        * 미리보기 타입 설정
        ************************************************************************************/
        this.cbViewType_onitemchanged = function(obj, e)
        {
        	this.ubiDataType = null;
        	this.ubiIsRuntime = null;
        	this.ubiReportFile = null;
        	this.ubiSvcUrl = null;
        	this.ubiLocalDS = null;
        	this.ubiGridObj = null;
        	this.ubiArg = null;

        	if( this.cbViewType.value == "A" ) {		// Form Embeded

        		this.UbiViewer.set_visible(true);
        		this.UbiDiv.set_visible(false);
        	}
        	else if( this.cbViewType.value == "B" ) {	// Div Embeded

        		this.UbiViewer.set_visible(false);
        		this.UbiDiv.set_visible(true);
        	}
        	else {										// Popup

        		this.UbiViewer.set_visible(false);
        		this.UbiDiv.set_visible(false);
        	}
        }

        /************************************************************************************
        * 사이즈 Checkbox 변경 시 처리
        ************************************************************************************/
        this.chSize_onchanged = function(obj, e)
        {
        	if( this.chSize.value ) {		// 사이즈 고정

        		this.UbiViewer.set_width(1008);
        		this.UbiViewer.set_height(490);
        		this.UbiViewer.set_right(0);
        		this.UbiViewer.set_bottom(0);

        		this.UbiDiv.set_width(1008);
        		this.UbiDiv.set_height(490);
        		this.UbiDiv.set_right(0);
        		this.UbiDiv.set_bottom(0);
        	}
        	else {								// 리사이즈 처리

        		this.UbiViewer.set_width(0);
        		this.UbiViewer.set_height(0);
        		this.UbiViewer.set_right(8);
        		this.UbiViewer.set_bottom(8);

        		this.UbiDiv.set_width(0);
        		this.UbiDiv.set_height(0);
        		this.UbiDiv.set_right(8);
        		this.UbiDiv.set_bottom(8);
        	}
        }

        this.NexaForm_onload = function(obj, e)
        {
        /*
        	var runtime = (nexacro.Browser == "Runtime");
        	if( runtime ) {
        		this.btnPlugin_DS.set_visible(false);
        		this.btnPlugin_SVC.set_visible(false);
        		this.btnPlugin_DS_DP.set_visible(false);
        		this.btnPlugin_SVC_DP.set_visible(false);
        		this.btnExport_DS.set_visible(false);
        		this.btnExport_SVC.set_visible(false);
        		this.btnExport2_DS.set_visible(false);
        		this.btnExport2_SVC.set_visible(false);
        	}
        	else {
        		this.btnLocalDs_Large_XML.set_visible(false);
        		this.btnLocalDs_Large_SSV.set_visible(false);
        		this.btnSVC_Large_XML.set_visible(false);
        		this.btnSVC_Large_SSV.set_visible(false);
        		this.btnSVC_Large_SSV2.set_visible(false);
        		this.cbRowCnt.set_visible(false);
        	}
        */
        }


        /************************************************************************************
        * 문자열 치환 함수(유틸)
        ************************************************************************************/
        this.replaceAll = function(str, searchStr, replaceStr)
        {
        	return str.split(searchStr).join(replaceStr);
        }

        /************************************************************************************
        * 랜덤 Key 생성 함수(유틸)
        ************************************************************************************/
        function getRandomKey()
        {
        	var key = "";
        	var nowdate = new Date();
        	var year  = nowdate.getFullYear();
        	var month = nowdate.getMonth() + 1;
        	var day   = nowdate.getDate();
        	var hour  = nowdate.getHours();
        	var min   = nowdate.getMinutes();
        	var sec   = nowdate.getSeconds();
        	var milsec = nowdate.getMilliseconds();

        	if (("" + month).length == 1) { month = "0" + month; }
        	if (("" + day).length   == 1) { day   = "0" + day;   }
        	if (("" + hour).length  == 1) { hour  = "0" + hour;  }
        	if (("" + min).length   == 1) { min   = "0" + min;   }
        	if (("" + sec).length   == 1) { sec   = "0" + sec;   }

        	key = ('' + year + month + day + hour + min + sec + milsec) + '_' + ((Math.random() * (1 << 30)).toString(16).replace('.', ''));

        	return key;
        }


        this.btn00_onclick = function(obj,e)
        {
        	ubiLocalDs = [];
        	ubiLocalDs.push(["aaa", this.ds_grid1]);
        	ubiLocalDs.push(["bbb", null]);

        	for( var i = 0; i < ubiLocalDs.length; i++)
        	{
        		trace("======= i : " + i);
        		var data = ubiLocalDs[i];
        		this.UbiViewer.setDataset(data[0], data[1]);
        	}

        	this.UbiDiv.set_url("");
        	this.UbiDiv.set_url("Cmm::CmmUbiReport.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NexaForm_onload,this);
            this.addEventHandler("oninit",this.NexaForm_oninit,this);
            this.btnGridView.addEventHandler("onclick",this.btnGridView_onclick,this);
            this.cbViewType.addEventHandler("onitemchanged",this.cbViewType_onitemchanged,this);
            this.btnDb.addEventHandler("onclick",this.btnDb_onclick,this);
            this.btnService.addEventHandler("onclick",this.btnService_onclick,this);
            this.btnLocalDs.addEventHandler("onclick",this.btnLocalDs_onclick,this);
            this.btnRuntimeV.addEventHandler("onclick",this.btnRuntimeV_onclick,this);
            this.btnRuntimeH.addEventHandler("onclick",this.btnRuntimeH_onclick,this);
            this.chSize.addEventHandler("onchanged",this.chSize_onchanged,this);
            this.btnBlob_DS.addEventHandler("onclick",this.btnBlob_DS_onclick,this);
            this.btnBlob_SVC.addEventHandler("onclick",this.btnBlob_SVC_onclick,this);
            this.btnSVC_Large_XML.addEventHandler("onclick",this.btnSVC_Large_XML_onclick,this);
            this.cbRowCnt.addEventHandler("onitemchanged",this.cbViewType_onitemchanged,this);
            this.btnLocalDs_Large_XML.addEventHandler("onclick",this.btnLocalDs_Large_XML_onclick,this);
            this.btnLocalDs_Large_SSV.addEventHandler("onclick",this.btnLocalDs_Large_SSV_onclick,this);
            this.btnSVC_Large_SSV.addEventHandler("onclick",this.btnSVC_Large_SSV1_onclick,this);
            this.btnSVC_Large_SSV2.addEventHandler("onclick",this.btnSVC_Large_SSV2_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("SampletUbiReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
