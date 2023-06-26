(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("CompExt_DataObject_twoway");this.set_titletext("CompExt_DataObject_twoway");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new DataObject("data_object",this);_a.set_preload("false");_a._setContents({});this.addChild(_a.name,_a);_a=new Dataset("ds_emp",this);_a.set_keystring("");_a.set_binddataobject("data_object");_a.set_dataobjectbindmode("twoway");_a.set_dataobjectpath("$.Rows[*]");_a._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\" datapath=\"@.EMPL_ID\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\" datapath=\"@.FULL_NAME\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\" datapath=\"@.DEPT_CD\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\" datapath=\"@.POS_CD\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\" datapath=\"@.HIRE_DATE\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\" datapath=\"@.SALARY\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\" datapath=\"@.GENDER\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\" datapath=\"@.MARRIED\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\" datapath=\"@.MEMO\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Button("btn_retrieve",null,"40","84","28","95",null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("get JSON");this.addChild(_a.name,_a);_a=new Button("btn_saveJson",null,"40","80","28","10",null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("saveJson");this.addChild(_a.name,_a);_a=new Grid("grd_list","10","73","400",null,null,"10",null,null,null,null,this);_a.set_taborder("2");_a.set_binddataset("ds_emp");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"POS_CD\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:POS_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_label","10","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text(" Basic Usage");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new TextArea("ta_contents","415","73",null,null,"10","10",null,null,null,null,this);_a.set_taborder("4");this.addChild(_a.name,_a);_a=new Static("sta00","10","0","336","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("JSON / DataObject >Json twoway");_a.set_cssclass("sta_WF_TitleMain");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_b){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("CompExt_DataObject_twoway.xfdl",function(){this.data_object_onsuccess=function(_a,_b){trace("onsuccess");_a.removeChangedInfo(_b.serviceid);if(_b.method!="GET"){_b.preventDefault();}};this.btn_retrieve_onclick=function(_a,_b){this.data_object.request("get1","GET","EduUrl::dataobject_emp.json");};this.btn_saveJson_onclick=function(_a,_b){this.ta_contents.set_value(this.ds_emp.saveJSON());};this.btn_save_onclick=function(_a,_b){this.ds_emp.applyChange();};this.data_object_ondatachanged=function(_a,_b){var _c="EduUrl::dataobject_emp.json";var _d=_a.getChangedInfo();for(var _k=0,_l=_d.length;_k<_l;_k++ ){var _e=_d[_k];var _f=_e.uid;var _g=_e.type=="update"?"PUT":(_e.type=="add"||_e.type=="insert")?"POST":"DELETE";var _h=JSON.stringify(_e.data);var _i=_e.data.id;if(_g=="POST"){_i="";}var _j={'httpheader':{'Content-Type':'application/json'},'postdata':_h};this.DataObject00.request(_f,_g,_c+"/"+_i,_j);for(var _m=0;_m<10000000;_m++ ){}}_d=_b.infoarray;for(var _k=0,_l=_d.length;_k<_l;_k++ ){var _e=_d[_k];var _f=_e.uid;var _g=_e.type=="update"?"PUT":(_e.type=="add"||_e.type=="insert")?"POST":"DELETE";var _h=JSON.stringify(_e.data);var _i=_e.data.id;if(_g=="POST"){_i="";}var _j={'httpheader':{'Content-Type':'application/json'},'postdata':_h};this.data_object.request(_f,_g,_c+"/"+_i,_j);for(var _m=0;_m<10000000;_m++ ){}}};this.data_object_onvaluechanged=function(_a,_b){var _c=_b.index;var _d=_a.getObjectByPath(_b.dataobjectpath)[_b.index];var _e=_d.id;var _f="dataobject_emp.json";var _g="PUT";var _h=JSON.stringify(_d);var _i={'httpheader':{'Content-Type':'application/json'},'postdata':_h};this.data_object.request(_h,_g,_f+"/"+_e,_i);};});this.on_initEvent=function(){this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);this.btn_saveJson.addEventHandler("onclick",this.btn_saveJson_onclick,this);this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);this.data_object.addEventHandler("onerror",this.data_object_onerror,this);this.data_object.addEventHandler("onload",this.data_object_onload,this);this.data_object.addEventHandler("onsuccess",this.data_object_onsuccess,this);this.data_object.addEventHandler("ondatachanged",this.data_object_ondatachanged,this);this.data_object.addEventHandler("onvaluechanged",this.data_object_onvaluechanged,this);this.ds_emp.addEventHandler("onload",this.ds_emp_onload,this);};this.loadIncludeScript("CompExt_DataObject_twoway.xfdl");this.loadPreloadList();_a=null;};})();