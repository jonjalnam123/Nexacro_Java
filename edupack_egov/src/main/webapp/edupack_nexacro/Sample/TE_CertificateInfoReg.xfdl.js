(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TE_CertificateInfoReg");
            this.set_titletext("수료증출력");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,296);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">MP</Col><Col id=\"NAME\">v3.2</Col></Row><Row><Col id=\"CODE\">MP</Col><Col id=\"NAME\">v3.3</Col></Row><Row><Col id=\"CODE\">XP</Col><Col id=\"NAME\">v9.1</Col></Row><Row><Col id=\"CODE\">XP</Col><Col id=\"NAME\">v9.2</Col></Row><Row><Col id=\"CODE\">NP14</Col><Col id=\"NAME\">nexacro platform 14</Col></Row><Row><Col id=\"CODE\">NP17</Col><Col id=\"NAME\">nexacro platform 17</Col></Row><Row><Col id=\"CODE\">NPN</Col><Col id=\"NAME\">NEXACRO N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_print", this);
            obj._setContents("<ColumnInfo><Column id=\"cer_no\" type=\"STRING\" size=\"256\"/><Column id=\"req_nm\" type=\"STRING\" size=\"256\"/><Column id=\"company_nm\" type=\"STRING\" size=\"256\"/><Column id=\"course_nm\" type=\"STRING\" size=\"256\"/><Column id=\"period\" type=\"STRING\" size=\"256\"/><Column id=\"yyyy\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/><Column id=\"dd\" type=\"STRING\" size=\"256\"/><Column id=\"imgLogo\" type=\"STRING\" size=\"256\"/><Column id=\"imgStamp\" type=\"STRING\" size=\"256\"/><Column id=\"outLine\" type=\"STRING\" size=\"256\"/><Column id=\"getTime\" type=\"STRING\" size=\"256\"/><Column id=\"CEO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ESL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"product_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompanyList", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_REG_NO\" type=\"STRING\" size=\"30\"/><Column id=\"CEO_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"BUSINESS_FORM_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"BUSINESS_KIND_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"30\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"30\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"10\"/><Column id=\"POST_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SendMail", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insendmail", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM\" type=\"STRING\" size=\"256\"/><Column id=\"TO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"ESL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COURSE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CertificateReg","4","39",null,null,"4","44",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductVer","14","48","54","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제품 버전");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Count","375","78","14","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Total","337","78","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Border","246","48","54","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("테두리");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ProductVer","76","48","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_Product");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Border","308","48","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_Border_innerdataset = new nexacro.NormalDataset("cmb_Border_innerdataset", obj);
            cmb_Border_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">n</Col><Col id=\"datacolumn\">무</Col></Row><Row><Col id=\"codecolumn\">y</Col><Col id=\"datacolumn\">유</Col></Row></Rows>");
            obj.set_innerdataset(cmb_Border_innerdataset);
            obj.set_text("유");
            obj.set_value("y");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"9","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Preview",null,null,"84","22","14","9",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("미리보기");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("수료증출력");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailSend",null,null,"120","22","103","9",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("수료증 메일 전송");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Email","12","108",null,null,"12","52",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("안녕하세요\n투비소프트 교육팀입니다.");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductVer00","14","78","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("수료증 메일 내용");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductVer00_00","246","78","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("수료증 출력 대상");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,296,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TE_CertificateInfoReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TE_CertificateInfoReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TE_CertificateInfoReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TE_CertificateInfoReg.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("TE_CertificateInfoReg.xfdl","Script::ext_Report.xjs");
        this.registerScript("TE_CertificateInfoReg.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 교육 등록 ()
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
        this.FV_LOGIN_EMP_NO = nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO");
        this.FV_LOGIN_EMP_NM = nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NM");
        this.FV_LOGIN_EMAIL = nexacro.getApplication().gdsUserInfo.getColumn(0, "EMAIL");
        this.FV_TEL_NO = "02-2140-7700";

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TE_CertificateInfoReg_onload = function(obj,e)
        {
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.fnGetCompanyList();
        	if (!this.gfnIsEmpty(this.parent.Office_TelNo))
        		this.FV_TEL_NO = this.parent.Office_TelNo;
        	if (this.gfnIsEmpty(this.parent.Product_Name))
        	{
        		this.cmb_ProductVer.set_enable(false);
        		this.cmb_ProductVer.set_index(-1);
        		this.cmb_Border.set_index(1);
        	}
        	else
        	{
        		this.ds_Product.filter("CODE == '" + this.parent.Product_Name + "'");
        		this.cmb_ProductVer.set_index(this.ds_Product.rowcount-1);
        	}

        	this.ds_main.assign(this.parent.dsPrint);
        	this.stc_Total.set_text(this.ds_main.rowcount);
        };

        // 수료증 메일전송 입력값 처리
        this.fn_setSendMailInputDs = function()
        {
        	this.ds_insendmail.clearData();
        	for (var i=0; i<this.ds_print.rowcount; i++)
        	{
        		var nAddRow = this.ds_insendmail.addRow();

        		var strProductNmae = this.ds_print.getColumn(i, "product_nm");
        		this.ds_insendmail.setColumn(nAddRow, "USER_ID", 		this.FV_LOGIN_EMP_NO);
        		this.ds_insendmail.setColumn(nAddRow, "FROM",			this.FV_LOGIN_EMAIL);
        		this.ds_insendmail.setColumn(nAddRow, "TO",				this.ds_print.getColumn(i, "EMAIL"));
        		this.ds_insendmail.setColumn(nAddRow, "TO_NAME",		this.ds_print.getColumn(i, "req_nm"));
        		this.ds_insendmail.setColumn(nAddRow, "PRODUCT_NAME",	strProductNmae);
        		this.ds_insendmail.setColumn(nAddRow, "TITLE",			"[투비소프트]" + strProductNmae +" 수료증");
        		this.ds_insendmail.setColumn(nAddRow, "ESL_SEQ",		this.ds_print.getColumn(i, "ESL_SEQ"));
        		this.ds_insendmail.setColumn(nAddRow, "CER_NO",			this.ds_print.getColumn(i, "cer_no"));
        		this.ds_insendmail.setColumn(nAddRow, "COURSE_NM",		this.ds_print.getColumn(i, "course_nm"));

        		var strContents =
        				 "<DIV style='MARGIN: auto'> "
        				+"	<DIV style='HEIGHT: 300px; WIDTH: 650px; BACKGROUND-IMAGE: url(http://www.tobesoft.co.kr/upload/license/images/tobe_bg2.png); PADDING-TOP: 90px; MARGIN: auto'> "
        				+"		<TABLE style='MARGIN: auto' borderColor=#db0003 cellSpacing=12 width=580 align=center border=0 cstyle='table-layout'> "
        				+"			<TBODY> "
        				+"				<TR> "
        				+"					<TD vAlign=top align=left> "
        				+"						<SPAN style='FONT-SIZE: 18pt; FONT-FAMILY: 돋움; FONT-WEIGHT: bold'>"+ strProductNmae +"수료증</SPAN> <br/><br/>"
        				+"						<pre style='FONT-SIZE: 10pt; FONT-FAMILY: 돋움'>"+this.ta_Email.text+"</pre> <br/>"
        				+"						<SPAN style='FONT-SIZE: 10pt; FONT-FAMILY: 돋움'> "
        				+"							"+ this.ds_print.getColumn(i, "course_nm")+" 과정 교육에 참여해 주셔서 감사합니다.  <p/> "
        				+"						</SPAN> "
        				+"					</TD> "
        				+"				</TR> "
        				+"			</TBODY> "
        				+"		</TABLE> "
        				+"	</DIV> "
        				+" "
        				+"	<DIV style='BORDER-TOP: #bdbdbd 1px solid; HEIGHT: 100px; BORDER-RIGHT: #bdbdbd 1px solid; WIDTH: 650px; BORDER-BOTTOM: #bdbdbd 1px solid; BORDER-LEFT: #bdbdbd 1px solid;  MARGIN: auto'>  "
        				+"		<TABLE height=100 cellSpacing=0 cellPadding=0 align=right border=0> "
        				+"		<TBODY> "
        				+"			<TR> "
        				+"				<TD width=400 align=right><FONT color=#676666 size=2 face=돋움>(주)투비소프트</FONT></TD> "
        				+"				<TD rowSpan=3 width=130 align=center><A href='http://www.tobesoft.co.kr'><IMG border=0 alt=TOBESOFT_LOGO src='http://www.tobesoft.co.kr/upload/license/images/tobe_logo.png' width=90 height=30></A></TD>"
        				+"			</TR> "
        				+"			<TR> "
        				+"				<TD><DIV align=right><FONT color=#676666 size=2 face=돋움>서울시 강남구 봉은사로 617 인탑스빌딩 2-5층</FONT></DIV></TD> "
        				+"			</TR> "
        				+"			<TR> "
        				+"				<TD align=right><FONT color=#676666 size=2 face=돋움>Tel : "+this.FV_TEL_NO+" &nbsp; <A href='http://www.tobesoft.co.kr'>www.tobesoft.co.kr</A></FONT></TD> "
        				+"			</TR> "
        				+"		</TBODY> "
        				+"		</TABLE> "
        				+"	</DIV> "
        				+"</DIV> "
        		this.ds_insendmail.setColumn(nAddRow, "CONTENTS",		strContents);
        	}
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCompanyList = function()
        {
        	this.gfnAddOutputDataset("dsCompanyList", "dsOutput");
        	this.gfnCommonTransaction("fnGetCompanyList", "SP_PurchaseRegSiReport_S01", null, false);
        };

        // 서버에 수료증 생성
        this.fn_EduCertificateFileSave = function()
        {
        	this.fnSetPrintInput(true);

        	var strURL	= "ServiceURL::ubi4/ubiexport_Certificate.jsp";
        	var strInDatasets = "ds_Print=ds_print";
        	var strArgument = "";

        	/*
        	var strArgument = "PRODUCT_TYPE=" + this.FV_PRODUCT_TYPE;
        		strArgument += " LANGUAGE=" + this.rd_Language.value;
        		strArgument += " LICENSE_FILENM=" + sFileNm;
        	*/
        	this.transaction("PDF_Save", strURL, strInDatasets, "", strArgument, "fnCallBack");
         };

        // 수료증 메일전송
        this.fnSendMail = function()
        {
        	this.fn_setSendMailInputDs();

        	this.gfnAddInputDataset("ds_insendmail","ds_input");
        	this.gfnCommonTransaction("SendMail",	"TE_CertificateSendMail_R01");
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
        		if (strSvcID == "PDF_Save") {
        			// 메일 전송
        			this.fnSendMail();
        		} else if(strSvcID == "SendMail") {
        			this.alert("수료증 메일 전송이 완료 되었습니다.");
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
        		case "btn_Close" :
        			this.commUtil.popupClose();
        			break;
        		case "btn_Preview" :
        			this.fnSetPrintInput(false);
        			// Dataset 설정
        			this.gfn_SetAddInputDs("ds_print", this.ds_print);

        			// Report PopupViewer
        			this.gfnPopupReportViewer("EDU_CERTIFICATE.jrf");
        			break;
        		case "btn_EmailSend" :
        			this.fn_EduCertificateFileSave();
        			break;
        	}
        };


        this.fnSetPrintInput = function (bEmail)
        {
        	//사용자가 테두리 양식에 대해서 변경하고 출력할때마다 데이터 초기화 작업.
        	this.ds_print.clearData();
        	var course_nm="";
        	var env = nexacro.getEnvironment();
        	var scvUrl = env.services["ServiceURL"].url;

        	for(var i = 0; i<this.ds_main.rowcount; i++)
        	{
        		var nRow = this.ds_print.addRow();

        		var strProductNmae;
        		var strProductCode = this.ds_main.getColumn(i, "EDU_PRODUCT_CODE");
        		var strStartDate = this.ds_main.getColumn(i, "START_DATE");
        		var strEndDate = this.ds_main.getColumn(i, "END_DATE");
        		var date = strEndDate.split("-");	/*수료증 발급일은 교육종료일*/
        		var nDuration = parseInt(this.gfnGetDiffDay(strStartDate.replace("-","").replace("-",""),strEndDate.replace("-","").replace("-","")))+1;
        		var strEduTypeDet = this.ds_main.getColumn(i, "EDU_TYPE_DET_NAME");
        		var getTime = nDuration*6;

        		var strEslseq = this.ds_main.getColumn(i, "ESL_SEQ");
        		this.ds_print.setColumn(nRow, "ESL_SEQ", strEslseq);
        		this.ds_print.setColumn(nRow, "EMAIL", this.ds_main.getColumn(i, "EMAIL"));

        		//cer_no (호수)
        		//원본(Miplatform) : 2018 - 01-1112-12345 : yyyy(년) - 01(종료월)-1112(시작일자,종료일자)-12345(수강생회차번호)
        		var cer_no	= strStartDate.substr(0,4) + " - " +strEndDate.substr(5,2) + "-" +strStartDate.substr(8,2) +strEndDate.substr(8,2) + "-" + strEslseq;
        		this.ds_print.setColumn(nRow, "cer_no", cer_no);

        		//req_nm (이름)
        		var req_nm = this.ds_main.getColumn(i, "EMP_NAME");
        		this.ds_print.setColumn(nRow, "req_nm", req_nm);

        		//company_nm (소속)
        		var company_nm = this.ds_main.getColumn(i, "COMPANY_NAME");
        		this.ds_print.setColumn(nRow, "company_nm", company_nm);
        		var strProductVer;
        		if(strProductCode == "MP")
        		{
        			strProductVer = this.gfnIsEmpty(this.cmb_ProductVer.text)?"v3.2":this.cmb_ProductVer.text;
        			course_nm = "X-Internet 및 Miplatform™ " + strProductVer + "(마이플랫폼)";
        			strProductNmae = "Miplatform "+strProductVer;
        		}
        		else if(strProductCode == "XP")
        		{
        			strProductVer = this.gfnIsEmpty(this.cmb_ProductVer.text)?"v9.2":this.cmb_ProductVer.text;
        			course_nm = "REA 및 XPLATFORM™ " + strProductVer + "(엑스플랫폼)";
        			strProductNmae = "XPLATFORM "+strProductVer;
        		}
        		else if(strProductCode == "NP14")
        		{
        			course_nm = "nexacro platform 14™ "+strEduTypeDet;
        			strProductNmae = "nexacro platform 14";
        		}
        		else if(strProductCode == "NP17")
        		{
        			course_nm = "nexacro platform 17™ "+strEduTypeDet;
        			strProductNmae = "nexacro platform 17";
        		}
        		else if(strProductCode == "NPN")
        		{
        			course_nm = "NEXACRO N™ "+strEduTypeDet;
        			strProductNmae = "NEXACRO N";
        		}

        		//course_nm (과정명)
        		this.ds_print.setColumn(nRow, "product_nm", strProductNmae);
        		this.ds_print.setColumn(nRow, "course_nm", course_nm);
        		//getTime(총시간)
        		this.ds_print.setColumn(nRow, "getTime", getTime);


        		//기간
        		// 세부과정코드: 010(퍼블리싱 심화), 011(전문가양성과정)
        		if (this.ds_main.getColumn(i, "EDU_TYPE_DET") == "010" || this.ds_main.getColumn(i, "EDU_TYPE_DET") == "011") {
        			this.ds_print.setColumn(nRow, "period", strStartDate + " ~ " +strEndDate);
        		} else {
        			this.ds_print.setColumn(nRow, "period", strStartDate);
        		}
        		//yyyy (년도)
        		this.ds_print.setColumn(nRow, "yyyy", date[0]);
        		//mm (월)
        		this.ds_print.setColumn(nRow, "mm", date[1]);
        		//dd (일)
        		this.ds_print.setColumn(nRow, "dd", date[2]);
        		//CEO_NAME(대표자명)
        		this.ds_print.setColumn(nRow, "CEO_NAME", this.dsCompanyList.getColumn(0, "CEO_NAME"));

        		//이미지(테두리, 인감도장, 회사로고)
        		this.ds_print.setColumn(nRow, "imgLogo", scvUrl + "NEXTp/Report/edu_Certificate_Logo.jpg");
        		this.ds_print.setColumn(nRow, "imgStamp", scvUrl + "NEXTp/Report/edu_Certificate_Stamp.jpg");
        		//cer_out (경계선)
        		if(this.cmb_Border.value == "y" || bEmail)
        		{
        			this.ds_print.setColumn(nRow, "outLine", scvUrl + "NEXTp/Report/edu_Certificate_Outline.jpg");
        		}
        	}
        };


        //현재날짜측정
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TE_CertificateInfoReg_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Preview.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmailSend.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("TE_CertificateInfoReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
