(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("SampleScript");this.set_titletext("script 표준");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("Script 표준");_a.set_cssclass("sta_WF_TitleMain");this.addChild(_a.name,_a);_a=new Static("sta03","10","35",null,"842","10",null,"980",null,null,null,this);_a.set_taborder("1");_a.set_text("※ Script 작성시 표준을 정의한 내용이다. Script 탭의 소스에서 확인 가능하다.\r\r\n\r\r\r\r\r\n/**\r\r\r\n*  Necacro EduPack\r\r\r\n*  @MenuPath    샘플 > script 표준\r\r\r\n*  @FileName      SampleScript.xfdl \r\r\r\n*  @Creator          Education\r\r\r\n*  @CreateDate    2022.05.01\r\r\r\n*  @Desction    스크립트 표준 및 주석 표준 정의\r\r\r\n************** 소스 수정 이력 ***********************************************\r\r\r\n*  date          \t\tModifier                Description\r\r\r\n*******************************************************************************\r\r\r\n*  2022.05.01     \tEducation \t                최초 생성\r\r\n*******************************************************************************\r\r\r\n*/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * FORM 변수 선언 영역\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * FORM EVENT 영역(onload, onbeforeclose)\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * CALLBACK 콜백 처리부분(Transaction, Popup)\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * CRUD 및 TRANSACTION 서비스 호출 처리\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * 사용자 FUNCTION 영역\r\r\r\r\r\n ************************************************************************************************/\r\r\r\r\r\n\r\r\r\r\r\n/************************************************************************************************\r\r\r\r\r\n * 각 COMPONENT 별 EVENT 영역\r\r\r\r\r\n ************************************************************************************************/");_a.set_cssclass("sta_WF_Desc");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("SampleScript.xfdl",function(){this.fvTest="aaa";this.form_onload=function(_a,_b){this.gfnFormOnLoad(this);};this.fnClose=function(){return true;};this.fnCallback=function(_b,_c,_d){if(_c!=0){return;}switch(_b){case "search":break;case "save":this.gfnAlert("msg.save.success");break;}};this.fnPopupCallback=function(_b,_c){trace(" strId : "+_b+" strVal : "+_c);};this.fnSearch=function(){this.dsInput.setColumn(0,"id",this.gfnNvl(this.divSearch.form.edtId.value,""));var _b="search";var _c="transactionSelectTest.do";var _d="dsInput=dsInput";var _e="dsList=dsList";var _f="name="+this.gfnNvl(this.divSearch.form.edtName.value,"");var _g="fnCallback";var _h=true;this.gfnTransaction(_b,_c,_d,_e,_f,_g,_h);};this.fnAdd=function(){this.dsList.addRow();};this.fnDel=function(){this.dsList.deleteRow(this.dsList.rowposition);};this.fnSave=function(){if(this.gfnDsIsUpdated(this.dsList)==false){this.gfnAlert("msg.save.nochange");return;}this.gfnClearValidation(this.dsList);this.gfnSetValidation(this.dsList,"ID","아이디","required,length:5");if(this.gfnValidation(this.dsList,"U")==false){return;}var _b="transactionSaveTest.do";var _c="dsList=dsList:U";var _d="dsList=dsList";this.gfnTransaction("save",_b,_c,_d);};this.fnExcel=function(){};this.fnPrint=function(){};this.fnTest=function(_b){trace(_b);};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);};this.loadIncludeScript("SampleScript.xfdl");this.loadPreloadList();_a=null;};})();