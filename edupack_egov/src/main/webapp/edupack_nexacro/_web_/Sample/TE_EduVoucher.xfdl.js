(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("TE_EduVoucher");this.set_titletext("교육바우처");if(Form==this.constructor){this._setFormPosition(1290,570);}_a=new Dataset("ds_CD_VOUCHER_CD",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_List",this);_a._setContents("<ColumnInfo><Column id=\"VOUCHER_NO\" type=\"string\" size=\"7\"/><Column id=\"VOUCHER_CD_NAME\" type=\"string\" size=\"100\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"END_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"WORK_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CONFIRM_NAME\" type=\"string\" size=\"100\"/><Column id=\"EDU_COUNT\" type=\"int\" size=\"11\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_EduMM","8","8",null,"40","8",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("");_a.set_cssclass("div_WF_SchList");_a.set_formscrollbartype("none none");_a.set_formscrolltype("none");this.addChild(_a.name,_a);_a=new Button("btn_Inquiry",null,"8","60","22","8",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("0");_a.set_text("조회");_a.set_cssclass("btn_WF_SchText");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_ExcelExport",null,"8","68","22","btn_Inquiry:8",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("1");_a.set_text("Excel");_a.set_cssclass("btn_WF_Excel");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_EduMonth","9","8","60","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("2");_a.set_text("기간");_a.set_textAlign("right");_a.set_cssclass("sta_WF_DetailTit");this.div_EduMM.addChild(_a.name,_a);_a=new Div("div_Search_yyyyMM_FromTo","79","8","300","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("3");_a.set_url("Common::COM_yyyyMM_FromTo.xfdl");_a.getSetter("user_onchanged").set("fnSearch");this.div_EduMM.addChild(_a.name,_a);_a=new Combo("cmb_VoucherCD","490","8","169","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("4");_a.set_innerdataset("ds_CD_VOUCHER_CD");_a.set_codecolumn("CODE");_a.set_datacolumn("CAPTION");_a.set_text("MiPlatform");_a.set_index("0");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_VoucherCD","412","8","70","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("5");_a.set_text("바우처 구분");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_EduVoucherReg",null,"8","92","22","btn_ExcelExport:8",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("6");_a.set_text("교육바우처관리");this.div_EduMM.addChild(_a.name,_a);_a=new Grid("grd_List","8","div_EduMM:8",null,null,"8","8",null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("ds_List");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a.set_cellmovingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"바우처 번호\"/><Cell col=\"1\" text=\"바우처 구분\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"영업대표\"/><Cell col=\"4\" text=\"계약제품\"/><Cell col=\"5\" text=\"교육시작일\"/><Cell col=\"6\" text=\"교육종료일\"/><Cell col=\"7\" text=\"강사\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"참석자\"/><Cell col=\"10\" text=\"실참석자\"/><Cell col=\"11\" text=\"고객사\"/><Cell col=\"12\" text=\"프로젝트명\"/></Band><Band id=\"body\"><Cell text=\"bind:VOUCHER_NO\"/><Cell col=\"1\" text=\"bind:VOUCHER_CD_NAME\"/><Cell col=\"2\" text=\"bind:INSERT_DEPT_NM\"/><Cell col=\"3\" text=\"bind:INSERT_EMP_NAME\"/><Cell col=\"4\" text=\"bind:PRODUCT_NAME\"/><Cell col=\"5\" text=\"bind:START_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:END_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:WORK_EMP_NAME\"/><Cell col=\"8\" text=\"bind:CONFIRM_NAME\"/><Cell col=\"9\" text=\"bind:EDU_COUNT\"/><Cell col=\"10\" text=\"bind:EDU_REAL_COUNT\"/><Cell col=\"11\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_EduMM.form.div_Search_yyyyMM_FromTo.form,function(_b){});this.div_EduMM.form.div_Search_yyyyMM_FromTo.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_EduMM.form,function(_b){});this.div_EduMM.form.addLayout(_a.name,_a);_a=new Layout("default","",1290,570,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){this._addPreloadList("fdl","Common::COM_yyyyMM_FromTo.xfdl");};this.addIncludeScript("TE_EduVoucher.xfdl","Script::CommSystem.xjs");this.addIncludeScript("TE_EduVoucher.xfdl","Script::CommTrans.xjs");this.addIncludeScript("TE_EduVoucher.xfdl","Script::CommUtil.xjs");this.addIncludeScript("TE_EduVoucher.xfdl","Script::CommGrid.xjs");this.addIncludeScript("TE_EduVoucher.xfdl","Script::ext_Report.xjs");this.registerScript("TE_EduVoucher.xfdl",function(){this.executeIncludeScript("Script::CommSystem.xjs");this.executeIncludeScript("Script::CommTrans.xjs");this.executeIncludeScript("Script::CommUtil.xjs");this.executeIncludeScript("Script::CommGrid.xjs");this.executeIncludeScript("Script::ext_Report.xjs");this.TE_EduVoucher_onload=function(_a,_b){this.gfnCompInit(_a);this.fnFormInit();};this.fnFormInit=function(){if(this.commUtil.getAuthority(172)){this.div_EduMM.form.btn_EduVoucherReg.set_enable(true);}else{this.div_EduMM.form.btn_EduVoucherReg.set_enable(false);}this.fnGetCode();};this.fnGetCode=function(){this.gfnAddCodeDataset("ds_CD_VOUCHER_CD","VOUCHER_CD",true);this.gfnCodeTransaction();};this.fnSearch=function(){if(this.div_EduMM.form.cmb_VoucherCD.index>0){this.gfnAddSendParameter("VOUCHER_CD",this.div_EduMM.form.cmb_VoucherCD.value);}this.gfnAddSendParameter("START_DATE",this.div_EduMM.form.div_Search_yyyyMM_FromTo.getFromYYYYMM());this.gfnAddSendParameter("END_DATE",this.div_EduMM.form.div_Search_yyyyMM_FromTo.getToYYYYMM());this.gfnAddOutputDataset("ds_List","dsOutput");this.gfnCommonTransaction("Select","TE_EduVoucher_S01",this.grd_List);};this.fnCallBack=function(_b,_c,_d){if(_c!=0){alert("strSvcID : "+_b+"\n"+"nErrorCode : "+_c+"\n"+"strErrorMag : "+_d);return;}else{if(_b=="gfnGetCode"){this.div_EduMM.form.cmb_VoucherCD.set_index(0);}else if(_b=="Select"){}}};this.comm_Click=function(_a,_b){switch(_a.name){case "btn_Inquiry":this.fnSearch();break;case "btn_ExcelExport":this.gfn_excelExport(this,this.grd_List);break;case "btn_EduVoucherReg":var _c={bEduVoucherReg:true};this.commUtil.popup(this,"TE_EduVoucherReg","Technique::TE_EduVoucherReg.xfdl", -1, -1,null,null,true,true,false,_c,"fnPopupCallBack");break;}};this.fnPopupCallBack=function(_b,_c){_c=this.commUtil.popupReturn();switch(_b){case "TE_EduVoucherReg":break;default:break;}};});this.on_initEvent=function(){this.addEventHandler("onload",this.TE_EduVoucher_onload,this);this.div_EduMM.form.btn_Inquiry.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.cmb_VoucherCD.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);this.div_EduMM.form.btn_EduVoucherReg.addEventHandler("onclick",this.comm_Click,this);};this.loadIncludeScript("TE_EduVoucher.xfdl");this.loadPreloadList();_a=null;};})();