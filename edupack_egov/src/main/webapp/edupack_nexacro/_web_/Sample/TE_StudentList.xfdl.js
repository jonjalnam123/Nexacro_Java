(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("TE_StudentList");this.set_titletext("교육생조회");if(Form==this.constructor){this._setFormPosition(1290,570);}_a=new Dataset("ds_CD_EDU_PRODUCT_CODE",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_List",this);_a._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Record",this);_a._setContents("<ColumnInfo><Column id=\"ES_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"255\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Print",this);_a._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"int\" size=\"11\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"string\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"string\" size=\"20\"/><Column id=\"EMAIL\" type=\"string\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"string\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"string\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"string\" size=\"512\"/><Column id=\"QUESTION\" type=\"string\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"string\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME2\" type=\"string\" size=\"255\"/><Column id=\"SMS_FLAG\" type=\"string\" size=\"1\"/><Column id=\"EDU_PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EDU_TYPE\" type=\"string\" size=\"20\"/><Column id=\"EDU_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"EDU_TYPE_DET\" type=\"string\" size=\"20\"/><Column id=\"EDU_TYPE_DET_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"string\" size=\"10\"/><Column id=\"END_DATE\" type=\"string\" size=\"10\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_SMSSeder",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_TYPE",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("dsOutput_Reference",this);_a._setContents("<ColumnInfo><Column id=\"ESL_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON\" type=\"STRING\" size=\"20\"/><Column id=\"REQ_REASON_ETC\" type=\"STRING\" size=\"512\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"512\"/><Column id=\"ATTEND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CERTIFICATES_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CONSULTING_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MARKETING_AGREE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_SendSMS",this);_a._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_EmailSend",this);_a._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_EduMM","8","8",null,"72","8",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("");_a.set_cssclass("div_WF_SchList");_a.set_formscrollbartype("none none");_a.set_formscrolltype("none");this.addChild(_a.name,_a);_a=new Static("stc_ProductName","8","8","60","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("0");_a.set_text("교육제품");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Combo("cmb_ProductName","79","8","169","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("1");_a.set_innerdataset("ds_CD_EDU_PRODUCT_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("CAPTION");_a.set_text("MiPlatform");_a.set_index("0");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_Inquiry",null,"8","60","22","8",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("8");_a.set_text("조회");_a.set_cssclass("btn_WF_SchText");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_ExcelExport",null,"8","68","22","136",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("9");_a.set_text("Excel");_a.set_cssclass("btn_WF_Excel");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_CertificatePrint",null,"40","80","22","8",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("10");_a.set_text("수료증 출력");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_Save",null,"8","60","22","btn_Inquiry:4",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("15");_a.set_text("저장");_a.set_cssclass("btn_WF_tran");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_EduMonth","9","41","60","20",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("7");_a.set_text("교육기간");_a.set_textAlign("right");_a.set_cssclass("sta_WF_DetailTit");this.div_EduMM.addChild(_a.name,_a);_a=new Combo("cmb_SearchKind","567","9","86","20",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");var _b=new nexacro.NormalDataset("div_EduMM_form_cmb_SearchKind_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">이름</Col><Col id=\"codecolumn\">EMP_NAME</Col></Row><Row><Col id=\"datacolumn\">회사명</Col><Col id=\"codecolumn\">COMPANY_NAME</Col></Row><Row><Col id=\"datacolumn\">연락번호</Col><Col id=\"codecolumn\">PHONE_NO</Col></Row><Row><Col id=\"datacolumn\">이메일</Col><Col id=\"codecolumn\">EMAIL</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("이름");_a.set_value("EMP_NAME");_a.set_index("0");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_SearchKind","497","9","60","20",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("4");_a.set_text("검색조건");_a.set_textAlign("right");_a.set_cssclass("sta_WF_DetailTit");this.div_EduMM.addChild(_a.name,_a);_a=new Edit("edt_SearchText","661","9","164","20",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("6");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_EduType","264","8","60","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("2");_a.set_text("교육종류");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Combo("cmb_EduType","334","8","153","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("3");_a.set_innerdataset("ds_CD_EDU_TYPE");_a.set_codecolumn("CODE");_a.set_datacolumn("CAPTION");_a.set_text("MiPlatform");_a.set_index("0");this.div_EduMM.addChild(_a.name,_a);_a=new Static("Static06","9","34",null,"1","9",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("11");_a.set_text("Static06");_a.set_background("#c6deed");this.div_EduMM.addChild(_a.name,_a);_a=new Calendar("cal_Start","79","40","108","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("12");_a.set_dateformat("yyyy-MM-dd");this.div_EduMM.addChild(_a.name,_a);_a=new Static("stc_ContractYear00","190","40","10","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("13");_a.set_text("~");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("right");this.div_EduMM.addChild(_a.name,_a);_a=new Calendar("cal_End","207","40","108","22",null,null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("14");_a.set_dateformat("yyyy-MM-dd");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_EmailSend",null,"40","80","22","btn_CertificatePrint:4",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("17");_a.set_text("E-Mail발송");this.div_EduMM.addChild(_a.name,_a);_a=new Button("btn_SMSSend",null,"40","80","22","btn_EmailSend:4",null,null,null,null,null,this.div_EduMM.form);_a.set_taborder("16");_a.set_text("SMS발송");this.div_EduMM.addChild(_a.name,_a);_a=new Grid("grd_List","8","div_EduMM:8",null,null,"8","8",null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("ds_List");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a.set_cellmovingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"연락번호\"/><Cell col=\"6\" text=\"E_MAIL\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"수강여부\"/><Cell col=\"9\" text=\"수료증 출력\"/><Cell col=\"10\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"11\" text=\"메시지전송\"/><Cell col=\"12\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"13\" text=\"회차\"/><Cell col=\"14\" text=\"제품\"/><Cell col=\"15\" text=\"교육종류\"/><Cell col=\"16\" text=\"장소\"/><Cell col=\"17\" text=\"교육과정\"/><Cell col=\"18\" text=\"시작일\"/><Cell col=\"19\" text=\"종료일\"/><Cell col=\"20\" text=\"등록ID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DUTY_NAME\"/><Cell col=\"5\" text=\"bind:PHONE_NO\" maskedittype=\"number\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:EMAIL\"/><Cell col=\"7\" text=\"bind:STATUS_NAME\"/><Cell col=\"8\" text=\"bind:ATTEND_FLAG\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" colspan=\"2\" text=\"bind:CERTIFICATES_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"11\" colspan=\"2\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:SMS_FLAG\"/><Cell col=\"13\" text=\"bind:ES_SEQ\"/><Cell col=\"14\" text=\"bind:EDU_PRODUCT_NAME\"/><Cell col=\"15\" text=\"bind:EDU_TYPE_NAME\"/><Cell col=\"16\" text=\"bind:EDU_AREA\"/><Cell col=\"17\" text=\"bind:EDU_TYPE_DET_NAME\"/><Cell col=\"18\" text=\"bind:START_DATE\"/><Cell col=\"19\" text=\"bind:END_DATE\"/><Cell col=\"20\" text=\"bind:INSERT_EMP_NO\" textAlign=\"left\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_EduMM.form,function(_c){});this.div_EduMM.form.addLayout(_a.name,_a);_a=new Layout("default","",1290,570,this,function(_c){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.addIncludeScript("TE_StudentList.xfdl","Script::CommSystem.xjs");this.addIncludeScript("TE_StudentList.xfdl","Script::CommTrans.xjs");this.addIncludeScript("TE_StudentList.xfdl","Script::CommUtil.xjs");this.addIncludeScript("TE_StudentList.xfdl","Script::CommGrid.xjs");this.addIncludeScript("TE_StudentList.xfdl","Script::ext_Report.xjs");this.registerScript("TE_StudentList.xfdl",function(){this.executeIncludeScript("Script::CommSystem.xjs");this.executeIncludeScript("Script::CommTrans.xjs");this.executeIncludeScript("Script::CommUtil.xjs");this.executeIncludeScript("Script::CommGrid.xjs");this.executeIncludeScript("Script::ext_Report.xjs");this.TE_StudentList_onload=function(_a,_b){this.gfnCompInit(_a);this.fnFormInit();};this.fnFormInit=function(){this.fnGetCode();var _b=this.gfnToday();this.div_EduMM.form.cal_Start.set_value(this.gfnAddMonth(_b, -1));this.div_EduMM.form.cal_End.set_value(_b);};this.fnGetCode=function(){this.gfnAddCodeDataset("ds_CD_EDU_PRODUCT_CODE","EDU_PRODUCT_CODE",true);this.gfnAddCodeDataset("ds_CD_EDU_TYPE","EDU_TYPE",true);this.gfnCodeTransaction();};this.fnSearch=function(){if(this.gfnIsEmpty(this.div_EduMM.form.edt_SearchText.value)){this.alert("검색조건을 입력하세요");this.div_EduMM.form.edt_SearchText.setFocus();return;}if(this.div_EduMM.form.cmb_ProductName.index>0){this.gfnAddSendParameter("EDU_PRODUCT_CODE",this.div_EduMM.form.cmb_ProductName.value);}if(this.div_EduMM.form.cmb_EduType.index>0){this.gfnAddSendParameter("EDU_TYPE",this.div_EduMM.form.cmb_EduType.value);}this.gfnAddSendParameter("START_DATE",this.div_EduMM.form.cal_Start.value);this.gfnAddSendParameter("END_DATE",this.div_EduMM.form.cal_End.value);this.gfnAddSendParameter(this.div_EduMM.form.cmb_SearchKind.value,this.div_EduMM.form.edt_SearchText.value);this.gfnAddOutputDataset("ds_List","dsOutput");this.gfnCommonTransaction("Select","TE_StudentList_S01",this.grd_List);};this.fnSave=function(){this.gfnAddInputDataset("ds_List","dsInput");this.gfnCommonTransaction("Save","TE_EduMM_R04");};this.fnCallBack=function(_b,_c,_d){if(_c!=0){alert("strSvcID : "+_b+"\n"+"nErrorCode : "+_c+"\n"+"strErrorMag : "+_d);return;}else{if(_b=="gfnGetCode"){this.div_EduMM.form.cmb_ProductName.set_index(0);this.div_EduMM.form.cmb_EduType.set_index(0);}else if(_b=="Select"){}}};this.comm_Click=function(_a,_b){switch(_a.name){case "btn_CertificatePrint":if(this.ds_List.rowcount<=0){this.alert("출력할 데이터가 없습니다.!!");return;}else{this.gfnAddSendParameter("FRM_SEQ","268");this.gfnAddSendParameter("FRMA_SEQ_IN","1");this.gfnAddOutputDataset("ds_SMSSeder","dsOutput");this.gfnCommonTransaction("SelectEmpInfo","CO_FindFormAuthEmp_S01",null,false);var _c=this.ds_SMSSeder.getColumn(0,"EMP_NO");var _d=this.ds_SMSSeder.getColumn(0,"EMP_NAME");var _e=this.ds_SMSSeder.getColumn(0,"OFFICE_TEL_NO");var _f=this.ds_SMSSeder.getColumn(0,"EMAIL");this.ds_Print.clearData();for(var _i=0;_i<this.ds_List.rowcount;_i++ ){if(this.ds_List.getColumn(_i,"CERTIFICATES_FLAG")==1){var _g=this.ds_Print.addRow();this.ds_Print.copyRow(_g,this.ds_List,_i);}}var _h={dsPrint:this.ds_Print,Office_TelNo:_e,Send_Eamil:_f};this.commUtil.popup(this,"TE_CertificateInfoReg","Technique::TE_CertificateInfoReg.xfdl", -1, -1,null,null,true,true,false,_h,"fnPopupCallBack");}break;case "btn_Inquiry":this.fnSearch();break;case "btn_ExcelExport":this.gfn_excelExport(this,this.grd_List);break;case "btn_Save":this.fnSave();break;case "btn_SMSSend":if(this.ds_List.rowcount<=0){this.alert("발송 상대가 지정되지 않았습니다.");return;}else{this.fnSend(_a.name);}break;case "btn_EmailSend":if(this.ds_List.rowcount<=0){this.alert("발송 상대가 지정되지 않았습니다.");return;}{this.fnSend(_a.name);}break;}};this.fnPopupCallBack=function(_b,_c){_c=this.commUtil.popupReturn();switch(_b){case "TE_CertificateInfoReg":break;default:break;}};this.grd_List_onheadclick=function(_a,_b){if(_b.col==10){var _c=_a.getCellProperty("head",_b.cell,"text")==1?0:1;_a.setCellProperty("head",_b.cell,"text",_c);for(var _d=0;_d<this.ds_List.rowcount;_d++ ){if(this.ds_List.getColumn(_d,"ATTEND_FLAG")=="1"){this.ds_List.setColumn(_d,"CERTIFICATES_FLAG",_c);}}}else if(_b.col==12){var _c=_a.getCellProperty("head",_b.cell,"text")==1?0:1;_a.setCellProperty("head",_b.cell,"text",_c);for(var _d=0;_d<this.ds_List.rowcount;_d++ ){this.ds_List.setColumn(_d,"SMS_FLAG",_c);}}else{this.gfnGridProcSort(_a,_b.cell);}};this.div_EduMM_edt_SearchText_onkeydown=function(_a,_b){if(_b.keycode==13){this.fnSearch();}};this.ds_List_cancolumnchange=function(_a,_b){if(_b.columnid=="CERTIFICATES_FLAG"&&_a.getColumn(_b.row,"ATTEND_FLAG")=="0"){return false;}};this.grd_List_oncelldblclick=function(_a,_b){this.dsOutput_Reference.clearData();var _c=this.dsOutput_Reference.addRow();this.dsOutput_Reference.copyRow(_c,this.ds_List,_b.row);var _d={sParent:this.name,dsOutput_Reference:this.dsOutput_Reference,ESL_SEQ:this.ds_List.getColumn(_b.row,"ESL_SEQ"),nRow:_b.row};this.commUtil.popup(this,"TE_SalesEduReg","Technique::TE_SalesEduReg.xfdl", -1, -1,null,null,true,true,false,_d,"fnPopupCallBack");};this.fnPopupCallBack=function(_b,_c){_c=this.commUtil.popupReturn();switch(_b){case "TE_SalesEduReg":if(!this.gfnIsEmpty(_c)){var _d=new Dataset();_d.loadXML(_c);var _e=_d.getColumn(0,"ESL_SEQ");if(!this.gfnIsEmpty(_e)){var _f=this.ds_List.findRow("ESL_SEQ",_e);this.ds_List.copyRow(_f,_d,0);}}break;case "CS_SMSSend":break;case "CE_EMailSend":break;}};this.fnSend=function(_b){this.gfnAddSendParameter("FRM_SEQ","268");this.gfnAddSendParameter("FRMA_SEQ_IN","1");this.gfnAddOutputDataset("ds_SMSSeder","dsOutput");this.gfnCommonTransaction("SelectEmpInfo","CO_FindFormAuthEmp_S01",null,false);var _c=this.ds_SMSSeder.getColumn(0,"EMP_NO");var _d=this.ds_SMSSeder.getColumn(0,"EMP_NAME");var _e=this.ds_SMSSeder.getColumn(0,"OFFICE_TEL_NO");var _f=this.ds_SMSSeder.getColumn(0,"EMAIL");if(_b=="btn_SMSSend"){this.ds_SendSMS.clearData();for(var _i=0;_i<this.ds_List.rowcount;_i++ ){if(this.ds_List.getColumn(_i,"SMS_FLAG")==1){var _g=this.ds_SendSMS.addRow();this.ds_SendSMS.setColumn(_g,"EMP_NAME",this.ds_List.getColumn(_i,"EMP_NAME"));this.ds_SendSMS.setColumn(_g,"PHONE_NO",this.ds_List.getColumn(_i,"PHONE_NO"));}}if(this.ds_SMSSeder.rowcount<0){alert("교육 SMS 발신자 설정이 안되었습니다.\n 정보관리팀에 문의하세요.");return;}if(this.gfnIsEmpty(_e)){alert(_d+"님의 내선번호가 없습니다.\n 그룹웨어 개인정보 수정에서 전화번호(사무실)를 등록하세요.");return;}var _h={dsInput:this.ds_SendSMS,key:"SMSSend",pv_SenderType:"APPOINT",pv_TelKind:"T",pv_Sender:_e,pv_SenderName:_d};this.commUtil.popup(this,"CS_SMSSend","Common::CS_SMSSend.xfdl", -1, -1,null,null,true,true,false,_h,"fnPopupCallBack");}else if(_b=="btn_EmailSend"){this.ds_EmailSend.clearData();for(var _i=0;_i<this.ds_List.rowcount;_i++ ){if(this.ds_List.getColumn(_i,"SMS_FLAG")==1){var _g=this.ds_EmailSend.addRow();this.ds_EmailSend.setColumn(_g,"EMP_NAME",this.ds_List.getColumn(_i,"EMP_NAME"));this.ds_EmailSend.setColumn(_g,"EMAIL",this.ds_List.getColumn(_i,"EMAIL"));}}var _h={dsInput:this.ds_EmailSend,key:"EmailSend"};this.commUtil.popup(this,"CE_EMailSend","Common::CE_EMailSend.xfdl", -1, -1,null,null,true,true,false,_h,"fnPopupCallBack");}};});this.on_initEvent=function(){this.addEventHandler("onload",this.TE_StudentList_onload,this);this.div_EduMM.form.cmb_ProductName.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);this.div_EduMM.form.btn_Inquiry.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_CertificatePrint.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.edt_SearchText.addEventHandler("onkeydown",this.div_EduMM_edt_SearchText_onkeydown,this);this.div_EduMM.form.cmb_EduType.addEventHandler("onitemchanged",this.div_EduMM_cmb_ProductName_onitemchanged,this);this.div_EduMM.form.cal_Start.addEventHandler("onchanged",this.Com_Search_onChanged,this);this.div_EduMM.form.cal_End.addEventHandler("onchanged",this.Com_Search_onChanged,this);this.div_EduMM.form.btn_EmailSend.addEventHandler("onclick",this.comm_Click,this);this.div_EduMM.form.btn_SMSSend.addEventHandler("onclick",this.comm_Click,this);this.grd_List.addEventHandler("onheadclick",this.grd_List_onheadclick,this);this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);this.ds_List.addEventHandler("cancolumnchange",this.ds_List_cancolumnchange,this);};this.loadIncludeScript("TE_StudentList.xfdl");this.loadPreloadList();_a=null;};})();