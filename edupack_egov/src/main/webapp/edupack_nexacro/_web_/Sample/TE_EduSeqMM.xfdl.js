(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("TE_EduReg");this.set_titletext("회차등록");this.set_cssclass("frm_popBg");if(Form==this.constructor){this._setFormPosition(1016,512);}_a=new Dataset("ds_CD_EDU_PRODUCT_CODE",this);_a._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"hname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsOutput",this);_a._setContents("<ColumnInfo><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ES_SEQ\" type=\"INT\" size=\"10\"/><Column id=\"START_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"END_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"EDU_TYPE\" type=\"STRING\" size=\"20\"/><Column id=\"EDU_TYPE_DET\" type=\"STRING\" size=\"20\"/><Column id=\"EDU_AREA_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ONLINE_OPEN_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"ONLINE_NUM\" type=\"INT\" size=\"10\"/><Column id=\"SALES_NUM\" type=\"INT\" size=\"10\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_TYPE",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_AREA_CODE",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_CD_EDU_TYPE_DET",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_OpenFlag",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">폐강</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">개강</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_NewEsSeq",this);_a._setContents("<ColumnInfo><Column id=\"NEW_ES_SEQ\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Button("btn_Close",null,"10","15","15","9",null,null,null,null,null,this);_a.set_taborder("0");_a.set_cssclass("btn_POP_Cls");_a.set_escapebutton("true");this.addChild(_a.name,_a);_a=new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("");_a.set_cssclass("div_WF_SchList");_a.set_formscrollbartype("none none");_a.set_formscrolltype("none");this.addChild(_a.name,_a);_a=new Static("stc_Product","14","8","44","22",null,null,null,null,null,null,this.div_Search.form);_a.set_taborder("0");_a.set_text("제 품");_a.set_cssclass("sta_WF_DetailTit");_a.set_textAlign("center");this.div_Search.addChild(_a.name,_a);_a=new Combo("cmb_Product","67","8","122","22",null,null,null,null,null,null,this.div_Search.form);_a.set_taborder("1");_a.set_innerdataset("ds_CD_EDU_PRODUCT_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("CAPTION");_a.set_text("");this.div_Search.addChild(_a.name,_a);_a=new Button("btn_Save",null,"8","60","22","8",null,null,null,null,null,this.div_Search.form);_a.set_taborder("2");_a.set_text("저장");_a.set_cssclass("btn_WF_tran");this.div_Search.addChild(_a.name,_a);_a=new Button("btn_Delete","874","8","60","22",null,null,null,null,null,null,this.div_Search.form);_a.set_taborder("3");_a.set_text("삭제");_a.set_cssclass("btn_WF_tran");this.div_Search.addChild(_a.name,_a);_a=new Button("btn_New","810","8","60","22",null,null,null,null,null,null,this.div_Search.form);_a.set_taborder("4");_a.set_text("신규");_a.set_cssclass("btn_WF_tran");this.div_Search.addChild(_a.name,_a);_a=new Button("btn_ManageDetail","640","8","94","22",null,null,null,null,null,null,this.div_Search.form);_a.set_taborder("5");_a.set_text("세부과정관리");this.div_Search.addChild(_a.name,_a);_a=new Button("btn_Excel","738","8","68","22",null,null,null,null,null,null,this.div_Search.form);_a.set_taborder("6");_a.set_text("Excel");_a.set_cssclass("btn_WF_Excel");this.div_Search.addChild(_a.name,_a);_a=new CheckBox("cb_All","202","9","150","20",null,null,null,null,null,null,this.div_Search.form);_a.set_taborder("7");_a.set_text("전 회차");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_Search.addChild(_a.name,_a);_a=new Grid("grd_EduSeqMM","4","div_Search:4",null,null,"4","4",null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("dsOutput");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a.set_cellmovingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"132\"/><Column size=\"132\"/><Column size=\"63\"/><Column size=\"108\"/><Column size=\"101\"/><Column size=\"71\"/><Column size=\"69\"/><Column size=\"78\"/><Column size=\"25\"/><Column size=\"120\"/><Column size=\"131\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회차\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"종류\"/><Cell col=\"3\" text=\"세부\"/><Cell col=\"4\" text=\"시작일\"/><Cell col=\"5\" text=\"종료일\"/><Cell col=\"6\" text=\"개강여부\"/><Cell col=\"7\" text=\"장소\"/><Cell col=\"8\" text=\"인터넷 오픈\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"영업신청인원수\"/><Cell col=\"11\" text=\"온라인신청인원수\"/></Band><Band id=\"body\"><Cell text=\"bind:ES_SEQ\"/><Cell col=\"1\" text=\"bind:EDU_PRODUCT_CODE\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_PRODUCT_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:EDU_TYPE\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:EDU_TYPE_DET\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_TYPE_DET\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:START_DATE\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:END_DATE\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:OPEN_FLAG\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_OpenFlag\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"7\" text=\"bind:EDU_AREA_CODE\" displaytype=\"combotext\" combodataset=\"ds_CD_EDU_AREA_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"8\" colspan=\"2\" text=\"bind:ONLINE_OPEN_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:SALES_NUM\" edittype=\"text\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:ONLINE_NUM\" displaytype=\"number\" edittype=\"text\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","8","5","77","22",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("회차등록");_a.set_color("white");_a.set_cssclass("sta_POP_Title");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_Search.form,function(_b){});this.div_Search.form.addLayout(_a.name,_a);_a=new Layout("default","",1016,512,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommSystem.xjs");this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommTrans.xjs");this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommUtil.xjs");this.addIncludeScript("TE_EduSeqMM.xfdl","Script::CommGrid.xjs");this.registerScript("TE_EduSeqMM.xfdl",function(){this.executeIncludeScript("Script::CommSystem.xjs");this.executeIncludeScript("Script::CommTrans.xjs");this.executeIncludeScript("Script::CommUtil.xjs");this.executeIncludeScript("Script::CommGrid.xjs");this.TE_EduReg_onload=function(_a,_b){this.fnFormInit();};this.fnFormInit=function(){this.fnGetCode();};this.fn_export=function(_b){this.gfn_excelExport(this,_b);};this.fnGetCode=function(){this.gfnAddCodeDataset("ds_CD_EDU_PRODUCT_CODE","EDU_PRODUCT_CODE",true);this.gfnAddCodeDataset("ds_CD_EDU_TYPE","EDU_TYPE");this.gfnAddCodeDataset("ds_CD_EDU_TYPE_DET","EDU_TYPE_DET");this.gfnAddCodeDataset("ds_CD_EDU_AREA_CODE","EDU_AREA_CODE");this.gfnCodeTransaction();};this.fnSearch=function(){this.gfnAddSendParameter("EDU_PRODUCT_CODE",this.div_Search.form.cmb_Product.value);this.gfnAddSendParameter("ALL_FLAG",this.div_Search.form.cb_All.value);this.gfnAddOutputDataset("dsOutput","dsOutput");this.gfnCommonTransaction("Select","TE_EduMM_S05",this.grd_EduSeqMM);};this.fnSave=function(){for(var _b=0;_b<this.dsOutput.rowcount;_b++ ){if(this.gfnIsEmpty(this.dsOutput.getColumn(_b,"EDU_PRODUCT_CODE"))){alert("제품을 지정해야 합니다.");return;}else if(this.gfnIsEmpty(this.dsOutput.getColumn(_b,"START_DATE"))){alert("시작일을 지정해야 합니다.");return;}else if(this.gfnIsEmpty(this.dsOutput.getColumn(_b,"END_DATE"))){alert("종료일을 지정해야 합니다.");return;}}this.gfnAddInputDataset("dsOutput","dsInput");this.gfnCommonTransaction("Save","TE_EduMM_R03");};this.fnCallBack=function(_b,_c,_d){if(_c!=0){alert("strSvcID : "+_b+"\n"+"nErrorCode : "+_c+"\n"+"strErrorMag : "+_d);return;}else{if(_b=="Select"){}else if(_b=="gfnGetCode"){this.div_Search.form.cmb_Product.set_index(0);this.fnSearch();}else if(_b=="Save"){}}};this.fnPopupCallBack=function(_b,_c){_c=this.commUtil.popupReturn();switch(_b){case "TE_EduSeqDetailMM":if(!this.gfnIsEmpty(_c)){this.fnGetCode();}break;}};this.comm_Click=function(_a,_b){switch(_a.name){case "btn_New":var _c=this.dsOutput.addRow();this.dsOutput.setColumn(_c,"EDU_PRODUCT_CODE",this.div_Search.form.cmb_Product.value);this.dsOutput.setColumn(_c,"EDU_TYPE","A");this.dsOutput.setColumn(_c,"EDU_TYPE_DET","001");this.dsOutput.setColumn(_c,"EDU_AREA_CODE","001");this.dsOutput.setColumn(_c,"OPEN_FLAG","1");this.dsOutput.setColumn(_c,"ONLINE_OPEN_FLAG","1");this.dsOutput.setColumn(_c,"SALES_NUM",0);this.dsOutput.setColumn(_c,"ONLINE_NUM",100);break;case "btn_Close":this.commUtil.popupClose();break;case "btn_Delete":this.dsOutput.deleteRow(this.dsOutput.rowposition);break;case "btn_Save":this.fnSave();break;case "btn_Excel":this.fn_export(this.grd_EduSeqMM);break;case "btn_ManageDetail":this.commUtil.popup(this,"TE_EduSeqDetailMM","Technique::TE_EduSeqDetailMM.xfdl", -1, -1,400,352,true,false,false,null,"fnPopupCallBack");break;}};this.cmb_Product_onitemchanged=function(_a,_b){this.fnSearch();};this.grd_EduSeqMM_onheadclick=function(_a,_b){if(_b.col==8){if(this.gfnIsEmpty(_a.getCellProperty("head",_b.cell,"text"))||_a.getCellProperty("head",_b.cell,"text")==0){_a.setCellProperty("head",_b.cell,"text",1);}else{_a.setCellProperty("head",_b.cell,"text",0);}if(_a.getCellProperty("head",_b.cell,"text")==1){for(var _c=0;_c<this.dsOutput.rowcount;_c++ ){this.dsOutput.setColumn(_c,"ONLINE_OPEN_FLAG",1);}}else if(_a.getCellProperty("head",_b.cell,"text")==0){for(var _c=0;_c<this.dsOutput.rowcount;_c++ ){this.dsOutput.setColumn(_c,"ONLINE_OPEN_FLAG",0);}}}else if(!(_b.col==7)){this.gfnGridProcSort(_a,_b.cell);}};this.div_Search_cb_All_onchanged=function(_a,_b){this.fnSearch();};});this.on_initEvent=function(){this.addEventHandler("onload",this.TE_EduReg_onload,this);this.btn_Close.addEventHandler("onclick",this.comm_Click,this);this.div_Search.form.cmb_Product.addEventHandler("onitemchanged",this.cmb_Product_onitemchanged,this);this.div_Search.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);this.div_Search.form.btn_Delete.addEventHandler("onclick",this.comm_Click,this);this.div_Search.form.btn_New.addEventHandler("onclick",this.comm_Click,this);this.div_Search.form.btn_ManageDetail.addEventHandler("onclick",this.comm_Click,this);this.div_Search.form.btn_Excel.addEventHandler("onclick",this.comm_Click,this);this.div_Search.form.cb_All.addEventHandler("onchanged",this.div_Search_cb_All_onchanged,this);this.grd_EduSeqMM.addEventHandler("onheadclick",this.grd_EduSeqMM_onheadclick,this);};this.loadIncludeScript("TE_EduSeqMM.xfdl");this.loadPreloadList();_a=null;};})();