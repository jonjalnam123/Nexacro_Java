(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("CompExt_Sketch");this.set_titletext("Component-Sketch");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Static("Static03","10","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text(" Basic Usage");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Sketch("skc_base","20","172","470","170",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("skt_base");_a.set_border("1px solid #9c9c9c");this.addChild(_a.name,_a);_a=new Static("Static00","20","73","93","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("Brush Color");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Radio("rdo_color","118","73","312","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_rowcount("-1");_a.set_enable("true");_a.set_columncount("-1");var _b=new nexacro.NormalDataset("rdo_color_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">red</Col><Col id=\"datacolumn\">red</Col></Row><Row><Col id=\"codecolumn\">blue</Col><Col id=\"datacolumn\">blue</Col></Row><Row><Col id=\"codecolumn\">green</Col><Col id=\"datacolumn\">green</Col></Row><Row><Col id=\"codecolumn\">yellow</Col><Col id=\"datacolumn\">yellow</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("red");_a.set_value("red");_a.set_index("0");this.addChild(_a.name,_a);_a=new Static("Static01","20","106","93","28",null,null,null,null,null,null,this);_a.set_taborder("11");_a.set_text("Brush Size");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Radio("rdo_size","118","106","262","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_rowcount("-1");_a.set_enable("true");_a.set_columncount("-1");var _c=new nexacro.NormalDataset("rdo_size_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3px</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5px</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7px</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9px</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_text("3px");_a.set_value("3");_a.set_index("0");this.addChild(_a.name,_a);_a=new Static("Static02","20","139","93","28",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("Brush Type");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Radio("rdo_type","118","139","242","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_rowcount("-1");_a.set_enable("true");_a.set_columncount("-1");var _d=new nexacro.NormalDataset("rdo_type_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">round</Col><Col id=\"datacolumn\">round</Col></Row><Row><Col id=\"codecolumn\">square</Col><Col id=\"datacolumn\">square</Col></Row><Row><Col id=\"codecolumn\">butt</Col><Col id=\"datacolumn\">butt</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_text("round");_a.set_value("round");_a.set_index("0");this.addChild(_a.name,_a);_a=new Button("btn_undo","362","139","60","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("Undo");this.addChild(_a.name,_a);_a=new Button("btn_redo","430","139","60","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("Redo");this.addChild(_a.name,_a);_a=new Static("Static04","515","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text(" Draw");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Sketch("skc_draw","525","110","255","229",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_border("1px solid #9c9c9c");this.addChild(_a.name,_a);_a=new Button("btn_draw","525","73","80","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("Draw");this.addChild(_a.name,_a);_a=new Button("btn_erase","610","73","80","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("Erase");this.addChild(_a.name,_a);_a=new Button("btn_text","695","73","80","28",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("Text");this.addChild(_a.name,_a);_a=new Sketch("skc_sign","21","436","229","95",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_border("1px solid #9c9c9c");this.addChild(_a.name,_a);_a=new Button("btn_load","20","403","110","28",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text("Image Load");this.addChild(_a.name,_a);_a=new Button("btn_save","140","403","110","28",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text("Save & View");this.addChild(_a.name,_a);_a=new Sketch("skc_view","289","436","229","95",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_border("1px solid #9c9c9c");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer00","527","436","229","95",null,null,null,null,null,null,this);_a.set_taborder("19");_a.set_border("1px solid #9c9c9c");this.addChild(_a.name,_a);_a=new Static("Static05","10","370","250","28",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_text(" Sketch Save");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static07","289","403","83","28",null,null,null,null,null,null,this);_a.set_taborder("21");_a.set_text("Sketch");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Static("Static08","527","403","103","28",null,null,null,null,null,null,this);_a.set_taborder("22");_a.set_text("ImageViewer");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Static("sta00","10","0","266","28",null,null,null,null,null,null,this);_a.set_taborder("23");_a.set_text("Sketch");_a.set_cssclass("sta_WF_TitleMain");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_e){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("CompExt_Sketch.xfdl",function(){this.CompExt_Sketch_onload=function(_a,_b){this.fn_setBrush();};this.fn_setBrush=function(){this.skc_base.setBrushColor(this.rdo_color.value);this.skc_base.setBrushSize(this.rdo_size.value);this.skc_base.setBrushType(this.rdo_type.value);};this.btn_undo_onclick=function(_a,_b){this.skc_base.undo();};this.btn_redo_onclick=function(_a,_b){this.skc_base.redo();};this.btn_draw_onclick=function(_a,_b){this.idx=0;this.btn_draw.set_cursor("wait");this.btn_erase.set_cursor("wait");this.setTimer(1,300);};this.btn_erase_onclick=function(_a,_b){this.idx=0;this.btn_draw.set_cursor("wait");this.btn_erase.set_cursor("wait");this.setTimer(2,300);};this.CompExt_Sketch_ontimer=function(_a,_b){if(_b.timerid==1){this.fn_draw();}else if(_b.timerid==2){this.fn_erase();}};this.idx=0;this.fn_draw=function(){var _b=[100,36,200,0,164,100];var _c=[0,200,73,73,200,0];this.skc_draw.drawStroke(_b[this.idx],_c[this.idx],true);this.idx++ ;this.skc_draw.drawStroke(_b[this.idx],_c[this.idx]);if(this.idx==6){this.killTimer(1);this.btn_draw.set_cursor("default");this.btn_erase.set_cursor("default");}};this.fn_erase=function(_a,_b){this.skc_draw.setEraseSize(3);var _c=[100,36,200,0,164,100];var _d=[0,200,73,73,200,0];this.skc_draw.drawErase(_c[this.idx],_d[this.idx],true);this.idx++ ;this.skc_draw.drawErase(_c[this.idx],_d[this.idx]);if(this.idx==6){this.killTimer(2);this.btn_draw.set_cursor("default");this.btn_erase.set_cursor("default");}};this.fn_text=function(_a,_b){this.skc_draw.drawText(10,10,"Nexacro\nTOBESOFT",true);};this.btn_load_onclick=function(_a,_b){this.skc_sign.loadSketch("imagerc::img_sign.png");};this.btn_save_onclick=function(_a,_b){this.skc_sign.saveSketch();var _c=this.skc_sign.value;this.skc_view.loadSketch(_c);this.ImageViewer00.set_image(_c);};});this.on_initEvent=function(){this.addEventHandler("onload",this.CompExt_Sketch_onload,this);this.addEventHandler("ontimer",this.CompExt_Sketch_ontimer,this);this.rdo_color.addEventHandler("onitemchanged",this.fn_setBrush,this);this.rdo_size.addEventHandler("onitemchanged",this.fn_setBrush,this);this.rdo_type.addEventHandler("onitemchanged",this.fn_setBrush,this);this.btn_undo.addEventHandler("onclick",this.btn_undo_onclick,this);this.btn_redo.addEventHandler("onclick",this.btn_redo_onclick,this);this.btn_draw.addEventHandler("onclick",this.btn_draw_onclick,this);this.btn_erase.addEventHandler("onclick",this.btn_erase_onclick,this);this.btn_text.addEventHandler("onclick",this.fn_text,this);this.skc_sign.addEventHandler("onsuccess",this.skc_sign_onsuccess,this);this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);};this.loadIncludeScript("CompExt_Sketch.xfdl");this.loadPreloadList();_a=null;};})();