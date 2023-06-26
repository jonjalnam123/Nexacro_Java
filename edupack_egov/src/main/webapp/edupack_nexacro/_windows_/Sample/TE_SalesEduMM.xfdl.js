(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("TE_BM_Education_Reg");this.set_titletext("정기교육신청(영업)");if(Form==this.constructor){this._setFormPosition(1290,570);}_a=new Dataset("dsOutput",this);_a._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"SALES_EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Product",this);_a._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"hname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">MP</Col><Col id=\"name\">MiPlatform</Col><Col id=\"hname\">마이플랫폼</Col></Row><Row><Col id=\"code\">XP</Col><Col id=\"name\">XPLATFORM</Col><Col id=\"hname\">엑스플랫폼</Col></Row><Row><Col id=\"code\">NP14</Col><Col id=\"name\">nexacro14</Col><Col id=\"hname\">넥사크로플랫폼14</Col></Row><Row><Col id=\"code\">NP17</Col><Col id=\"name\">nexacro17</Col><Col id=\"hname\">넥사크로플랫폼17</Col></Row><Row><Col id=\"code\">NPN</Col><Col id=\"name\">nexacroN</Col><Col id=\"hname\">넥사크로플랫폼N</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_Year",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Record",this);_a._setContents("<ColumnInfo><Column id=\"ES_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_STATUS",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("dsOutput_Reference",this);_a._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_SalesNum",this);_a._setContents("<ColumnInfo><Column id=\"SALES_NUM\" type=\"STRING\" size=\"255\"/><Column id=\"SALES_CUR_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_TYPE",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_AREA_CODE",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_TYPE_DET",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("dsCopy",this);_a._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NAME2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ChkCount",this);_a._setContents("<ColumnInfo><Column id=\"SALES_NUM\" type=\"STRING\" size=\"255\"/><Column id=\"SALES_CUR_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_EduMM","8","8",null,"40","8",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("");_a.set_cssclass("div_WF_SchList");_a.set_formscrollbartype("none none");_a.set_formscrolltype("none");this.addChild(_a.name,_a);_a=new Static("stc_ProductName","8","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("0");_a.set_text("제품");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Combo("cmb_Year","277","8","91","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("1");_a.set_innerdataset("ds_Year");_a.set_codecolumn("CODE");_a.set_datacolumn("NAME");_a.set_text("");_a.set_index("-1");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_Year","231","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("2");_a.set_text("년도");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_Around","376","8","38","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("3");_a.set_text("회차");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Combo("cmb_ProductName","54","8","169","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("4");_a.set_innerdataset("ds_Product");_a.set_codecolumn("code");_a.set_datacolumn("name");_a.set_text("MiPlatform");_a.set_index("0");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_Inquiry",null,"8","60","22","8",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("5");_a.set_text("조회");_a.set_cssclass("btn_WF_SchText");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_New",null,"8","60","22","203",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("6");_a.set_text("신규");_a.set_cssclass("btn_WF_tran");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_Delete",null,"8","60","22","138",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("7");_a.set_text("삭제");_a.set_cssclass("btn_WF_tran");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_Save",null,"8","60","22","73",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("8");_a.set_text("저장");_a.set_cssclass("btn_WF_tran");this.div_EduMM.addChild(_a.name,_a);_a=new Edit("edt_Discrimination","423","8","66","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("9");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_Discrimination","489","8","23","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("10");_a.set_text("▼");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_TotalView","529","8","106","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("11");_a.set_text("전체 명단보기");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_NumberOfPeople",null,"8","190","22","410",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("12");_a.set_text("신청가능 인원수 (현재/최대) : ");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_PresentCount",null,"8","22","22","388",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("13");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("center");_a.set_text("0");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_Separator",null,"8","22","22","366",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("14");_a.set_text("/");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("center");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_MaxCount",null,"8","22","22","345",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("15");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("center");_a.set_text("0");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_ExcelExport",null,"8","68","22","267",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("16");_a.set_text("Excel");_a.set_cssclass("btn_WF_Excel");this.div_EduMM.addChild(_a.name,_a);_a=new Grid("grd_EduMM","9","div_EduMM:8",null,null,"7","8",null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("dsOutput");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a.set_cellmovingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"147\"/><Column size=\"264\"/><Column size=\"141\"/><Column size=\"94\"/><Column size=\"158\"/><Column size=\"274\"/><Column size=\"133\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"연락번호\"/><Cell col=\"6\" text=\"E_MAIL\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:DUTY_NAME\"/><Cell col=\"5\" text=\"bind:PHONE_NO\"/><Cell col=\"6\" text=\"bind:EMAIL\"/><Cell col=\"7\" text=\"bind:SALES_EMP_NAME\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"회차이동\"/><Cell col=\"9\" text=\"복사\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new PopupDiv("pdiv_ScheduleList","1372","0","596","308",null,null,null,null,null,null,this);_a.set_visible("false");this.addChild(_a.name,_a);_a=new Grid("grd_ScheduleList","-1","26","597","282",null,null,null,null,null,null,this.pdiv_ScheduleList.form);_a.set_taborder("0");_a.set_binddataset("ds_Record");_a.set_autofittype("col");_a.set_cellmovingtype("col");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"15\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"종료일\"/><Cell col=\"4\" text=\"종류\"/><Cell col=\"5\" text=\"세부\"/><Cell col=\"6\" text=\"장소\"/></Band><Band id=\"body\"><Cell text=\"bind:ES_SEQ\"/><Cell col=\"1\" text=\"bind:START_DATE\"/><Cell col=\"2\" text=\"~\"/><Cell col=\"3\" text=\"bind:END_DATE\"/><Cell col=\"4\" text=\"bind:EDU_TYPE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:EDU_TYPE_DET\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_TYPE_DET\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:EDU_AREA_CODE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_EDU_AREA_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format></Formats>");this.pdiv_ScheduleList.addChild(_a.name,_a);_a=new Button("btn_ExcelExport",null,"0","68","22","8",null,null,null,null,null,this.pdiv_ScheduleList.form);_a.set_taborder("1");_a.set_text("Excel");_a.set_cssclass("btn_WF_Excel");this.pdiv_ScheduleList.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_EduMM.form,function(_b){});this.div_EduMM.form.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.pdiv_ScheduleList.form,function(_b){});this.pdiv_ScheduleList.form.addLayout(_a.name,_a);_a=new Layout("default","",1290,570,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommSystem.xjs");this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommTrans.xjs");this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommUtil.xjs");this.addIncludeScript("TE_SalesEduMM.xfdl","Script::CommGrid.xjs");this.registerScript("TE_SalesEduMM.xfdl",function(){this.executeIncludeScript("Script::CommSystem.xjs");this.executeIncludeScript("Script::CommTrans.xjs");this.executeIncludeScript("Script::CommUtil.xjs");this.executeIncludeScript("Script::CommGrid.xjs");this.TE_BM_Education_Reg_onload=function(_a,_b){this.gfnCompInit(_a);this.fnFormInit();};this.fnFormInit=function(){this.fnGetCode();};this.fn_export=function(_b){this.gfn_excelExport(this,_b);};this.fnGetCode=function(){this.gfnAddCodeDataset("ds_CD_EDU_STATUS","EDU_STATUS");this.gfnAddCodeDataset("ds_CD_EDU_TYPE","EDU_TYPE");this.gfnAddCodeDataset("ds_CD_EDU_TYPE_DET","EDU_TYPE_DET");this.gfnAddCodeDataset("ds_CD_EDU_AREA_CODE","EDU_AREA_CODE");this.gfnCodeTransaction();};this.fnSearch=function(){this.gfnAddSendParameter("EDU_PRODUCT_CODE",this.div_EduMM.form.cmb_ProductName.value);this.gfnAddSendParameter("ES_SEQ",this.div_EduMM.form.edt_Discrimination.value);this.gfnAddSendParameter("EXCEP_SALESMAN_FALG","1");this.gfnAddOutputDataset("dsOutput","dsOutput");this.gfnCommonTransaction("Select","TE_EduMM_S03",this.grd_EduMM);};this.fnSave=function(){this.fnGetSalesNum();var _b=parseInt(this.ds_SalesNum.getColumn(0,"SALES_NUM"));var _c=parseInt(this.ds_SalesNum.getColumn(0,"SALES_CUR_NUM"));var _d=this.dsOutput.getDeletedRowCount();var _e=0;for(var _g=0;_g<this.dsOutput.rowcount;_g++ ){var _f=this.dsOutput.getRowType(_g);if(_f==2){_e++ ;}}if(_b>=(_c-_d+_e)){this.gfnAddInputDataset("dsOutput","dsInput");this.gfnCommonTransaction("Save","TE_EduMM_R04");}else{alert("최대 신청인원을 초과하여 등록할 수 없습니다.( "+_c+" / "+_b+" )");}};this.fnGetSalesNum=function(){this.gfnAddSendParameter("Product_Name",this.div_EduMM.form.cmb_ProductName.value);this.gfnAddSendParameter("ES_SEQ",this.div_EduMM.form.edt_Discrimination.value);this.gfnAddOutputDataset("ds_SalesNum","dsOutput");this.gfnCommonTransaction("GetSalesNum","TE_EduMM_S07",null,false);};this.fnChkCount=function(_b,_c){this.gfnAddSendParameter("Product_Name",_b);this.gfnAddSendParameter("ES_SEQ",_c);this.gfnAddOutputDataset("ds_ChkCount","dsOutput");this.gfnCommonTransaction("ChkCount","TE_EduMM_S07",null,false);};this.fnGetYear=function(_b){this.gfnAddSendParameter("Product_Name",_b);this.gfnAddOutputDataset("ds_Year","dsOutput");this.gfnCommonTransaction("GetYear","TE_EduMM_S01");};this.fnGetRecord=function(_b,_c){this.gfnAddSendParameter("Product_Name",_b);this.gfnAddSendParameter("Product_Year",_c);this.gfnAddOutputDataset("ds_Record","dsOutput");this.gfnCommonTransaction("GetRecord","TE_EduMM_S02");};this.fnCallBack=function(_b,_c,_d){if(_c!=0){alert("strSvcID : "+_b+"\n"+"nErrorCode : "+_c+"\n"+"strErrorMag : "+_d);return;}else{if(_b=="GetYear"){this.div_EduMM.form.cmb_Year.set_value(this.ds_Year.getColumn(0,"CODE"));this.fnGetRecord(this.div_EduMM.form.cmb_ProductName.value,this.div_EduMM.form.cmb_Year.value);}else if(_b=="GetRecord"){this.div_EduMM.form.edt_Discrimination.set_value(this.ds_Record.getColumn(0,"ES_SEQ"));this.fnSearch();}else if(_b=="Select"){this.fnGetSalesNum();}else if(_b=="gfnGetCode"){this.div_EduMM.form.cmb_ProductName.set_index(3);this.fnGetYear(this.div_EduMM.form.cmb_ProductName.value);}else if(_b=="Save"){alert("저장되었습니다.");this.fnSearch();}else if(_b=="GetSalesNum"){var _e;if(this.gfnIsEmpty(this.ds_SalesNum.getColumn(0,"SALES_NUM"))){_e=0;}else{_e=this.ds_SalesNum.getColumn(0,"SALES_NUM");}this.div_EduMM.form.stc_MaxCount.set_text(_e);}else if(_b=="ChkCount"){}}};this.comm_Click=function(_a,_b){switch(_a.name){case "btn_Inquiry":this.fnSearch();break;case "btn_New":if(this.div_EduMM.form.stc_PresentCount.text==this.div_EduMM.form.stc_MaxCount.text){this.alert("영업이 추가할 수 있는 최대 인원은 "+this.div_EduMM.form.stc_MaxCount.text+"명 입니다.");return;}var _c={ES_SEQ:this.div_EduMM.form.edt_Discrimination.value,Product_Name:this.div_EduMM.form.cmb_ProductName.value};this.commUtil.popup(this,"TE_SalesEduReg_New","Technique::TE_SalesEduReg.xfdl", -1, -1,null,null,true,true,false,_c,"fnPopupCallBack");break;case "btn_Delete":if(this.dsOutput.rowcount<1){this.alert("취소할 대상자가 존재하지 않습니다.");return false;}this.dsOutput.deleteRow(this.dsOutput.rowposition);break;case "btn_Save":this.fnSave();break;case "btn_TotalView":var _c={Product_Name:this.div_EduMM.form.cmb_ProductName.value,Product_Discrimination:this.div_EduMM.form.edt_Discrimination.value};this.commUtil.popup(this,"TE_SalesEduESSEQView","Technique::TE_SalesEduESSEQView.xfdl", -1, -1,null,null,true,true,false,_c,"fnPopupCallBack");break;case "btn_ExcelExport":this.gfn_excelExport(this,this.grd_EduMM);break;}};this.div_EduMM_Button00_onclick=function(_a,_b){var _c=nexacro.toNumber(nexacro.System.getCursorX())-nexacro.toNumber(system.clientToScreenX(nexacro.getApplication().mainframe,0));var _d=nexacro.toNumber(nexacro.System.getCursorY())-nexacro.toNumber(system.clientToScreenY(nexacro.getApplication().mainframe,0));this.pdiv_ScheduleList.trackPopup(_c-76.5,_d);};this.pdiv_ScheduleList_grd_ScheduleList_oncellclick=function(_a,_b){this.div_EduMM.form.edt_Discrimination.set_value(this.ds_Record.getColumn(_b.row,"ES_SEQ"));this.fnSearch();this.pdiv_ScheduleList.closePopup();};this.grd_EduMM_oncelldblclick=function(_a,_b){var _c=nexacro.getApplication();var _d=_c.gdsUserInfo.getColumn(0,"EMP_NM");if(this.dsOutput.getColumn(_b.row,"SALES_EMP_NAME")==_d){this.dsOutput_Reference.clearData();var _e=this.dsOutput_Reference.addRow();this.dsOutput_Reference.copyRow(_e,this.dsOutput,_b.row);var _f={dsOutput_Reference:this.dsOutput_Reference,ESL_SEQ:this.dsOutput.getColumn(_b.row,"ESL_SEQ"),nRow:_b.row};this.commUtil.popup(this,"TE_SalesEduReg","Technique::TE_SalesEduReg.xfdl", -1, -1,null,null,true,true,false,_f,"fnPopupCallBack");}else{this.alert("본인이 등록한 신청내역만 수정이 가능합니다.");}};this.fnPopupCallBack=function(_b,_c){_c=this.commUtil.popupReturn();switch(_b){case "TE_SalesEduReg_New":if(!this.gfnIsEmpty(_c)){var _d=new Dataset();_d.loadXML(_c);var _e=this.dsOutput.addRow();this.dsOutput.copyRow(_e,_d,0);}break;case "TE_SalesEduReg":if(!this.gfnIsEmpty(_c)){var _d=new Dataset();_d.loadXML(_c);if(!this.gfnIsEmpty(_d.getColumnInfo("NEW_ESL_SEQ"))){this.dsOutput.copyRow(_d.getColumn(0,"NEW_ESL_SEQ"),_d,0);}else{var _f=_d.getColumn(0,"ESL_SEQ");if(!this.gfnIsEmpty(_f)){var _e=this.dsOutput.findRow("ESL_SEQ",_f);this.dsOutput.copyRow(_e,_d,0);}}}break;case "EduESSEQMove":if(!this.gfnIsEmpty(_c)){var _d=new Dataset();_d.loadXML(_c);this.fnChkCount(_d.getColumn(0,"EDU_PRODUCT_CODE"),_d.getColumn(0,"ES_SEQ"));var _g=parseInt(this.ds_ChkCount.getColumn(0,"SALES_NUM"));var _h=parseInt(this.ds_ChkCount.getColumn(0,"SALES_CUR_NUM"));if(_g>_h){var _e=this.dsOutput.findRow("ESL_SEQ",_d.getColumn(0,"ESL_SEQ"));this.dsOutput.setColumn(_e,"ES_SEQ",_d.getColumn(0,"ES_SEQ"));this.fnSave();this.alert(_d.getColumn(0,"ES_SEQ")+"회차로 이동하였습니다.");}else{this.alert(_d.getColumn(0,"ES_SEQ")+"회차에는 최대 신청인원을 초과하여 이동할 수 없습니다.");}}break;case "EduESSEQCopy":if(!this.gfnIsEmpty(_c)){var _d=new Dataset();_d.loadXML(_c);this.fnChkCount(_d.getColumn(0,"EDU_PRODUCT_CODE"),_d.getColumn(0,"ES_SEQ"));var _g=parseInt(this.ds_ChkCount.getColumn(0,"SALES_NUM"));var _h=parseInt(this.ds_ChkCount.getColumn(0,"SALES_CUR_NUM"));if(_g>_h){var _i=this.dsOutput.findRow("ESL_SEQ",_d.getColumn(0,"ESL_SEQ"));var _e=this.dsOutput.addRow();this.dsOutput.copyRow(_e,this.dsOutput,_i);this.dsOutput.setColumn(_e,"ES_SEQ",_d.getColumn(0,"ES_SEQ"));this.dsOutput.setColumn(_e,"STATUS_CD",'5');this.fnSave();this.alert(_d.getColumn(0,"ES_SEQ")+"회차로 복사하였습니다.");}else{this.alert(_d.getColumn(0,"ES_SEQ")+"회차에는 최대 신청인원을 초과하여 복사할 수 없습니다.");}}break;}};this.dsOutput_onload=function(_a,_b){this.div_EduMM.form.stc_PresentCount.set_text(_a.rowcount);};this.div_EduMM_cmb_Year_onitemchanged=function(_a,_b){this.fnGetRecord(this.div_EduMM.form.cmb_ProductName.value,this.div_EduMM.form.cmb_Year.value);};this.div_EduMM_cmb_ProductName_onitemchanged=function(_a,_b){this.fnGetYear(this.div_EduMM.form.cmb_ProductName.value);};this.grd_EduMM_oncellclick=function(_a,_b){var _c=nexacro.getApplication();var _d=_c.gdsUserInfo.getColumn(0,"EMP_NM");if(_a.getCellText(_b.row,_b.cell)=="회차이동"){if(this.dsOutput.getColumn(_b.row,"SALES_EMP_NAME")==_d){this.dsCopy.clearData();var _e=this.dsCopy.addRow();this.dsCopy.copyRow(_e,this.dsOutput,_b.row);var _f={Product_Name:this.div_EduMM.form.cmb_ProductName.value,Product_Year:this.div_EduMM.form.cmb_Year.value,dsCopy:this.dsCopy};this.commUtil.popup(this,"EduESSEQMove","Technique::TE_EduESSEQSelect.xfdl", -1, -1,null,null,true,true,false,_f,"fnPopupCallBack");}else{this.alert("본인이 등록한 신청내역만 회차이동이 가능합니다.");}}else if((_a.getCellText(_b.row,_b.cell)=="복사")){if(this.dsOutput.getColumn(_b.row,"SALES_EMP_NAME")==_d){this.dsCopy.clearData();var _e=this.dsCopy.addRow();this.dsCopy.copyRow(_e,this.dsOutput,_b.row);var _f={Product_Name:this.div_EduMM.form.cmb_ProductName.value,Product_Year:this.div_EduMM.form.cmb_Year.value,dsCopy:this.dsCopy};this.commUtil.popup(this,"EduESSEQCopy","Technique::TE_EduESSEQSelect.xfdl", -1, -1,null,null,true,true,false,_f,"fnPopupCallBack");}else{this.alert("본인이 등록한 신청내역만 복사가 가능합니다.");}}};this.pdiv_ScheduleList_btn_ExcelExport_onclick=function(_a,_b){this.gfn_excelExport(this,this.pdiv_ScheduleList.form.grd_ScheduleList,"교육일정");};});this.on_initEvent=function(){this.addEventHandler("onload",this.TE_BM_Education_Reg_onload,this);this.div_EduMM.form.cmb_Year.addEventHandler("onitemchanged",this.div_EduMM_cmb_Year_onitemchanged,this);this.div_EduMM.form.cmb_ProductName.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);this.div_EduMM.form.btn_Inquiry.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_New.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_Delete.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_Discrimination.addEventHandler("onclick",this.div_EduMM_Button00_onclick,this);this.div_EduMM.form.btn_TotalView.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);this.grd_EduMM.addEventHandler("oncelldblclick",this.grd_EduMM_oncelldblclick,this);this.grd_EduMM.addEventHandler("oncellclick",this.grd_EduMM_oncellclick,this);this.pdiv_ScheduleList.form.grd_ScheduleList.addEventHandler("oncellclick",this.pdiv_ScheduleList_grd_ScheduleList_oncellclick,this);this.pdiv_ScheduleList.form.btn_ExcelExport.addEventHandler("onclick",this.pdiv_ScheduleList_btn_ExcelExport_onclick,this);this.dsOutput.addEventHandler("onload",this.dsOutput_onload,this);this.dsOutput.addEventHandler("onrowsetchanged",this.dsOutput_onload,this);};this.loadIncludeScript("TE_SalesEduMM.xfdl");this.loadPreloadList();_a=null;};})();