(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Comp_ProgreessBar");this.set_titletext("Component-ProgressBar");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Static("Static11","10","146","342","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_text(" Direction (Prop. direction, smooth)");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text(" Default");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar01","20","212","256","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("");_a.set_min("0");_a.set_max("100");_a.set_pos("50");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar00","20","73","256","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("");_a.set_min("0");_a.set_max("100");_a.set_pos("50");this.addChild(_a.name,_a);_a=new Button("Button00","284","73","80","28",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_text("Start");this.addChild(_a.name,_a);_a=new Button("Button01","284","212","80","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_text("Start");this.addChild(_a.name,_a);_a=new Radio("Radio00","20","179","200","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("2");var _b=new nexacro.NormalDataset("Radio00_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">forward</Col><Col id=\"datacolumn\">forward</Col></Row><Row><Col id=\"codecolumn\">backward</Col><Col id=\"datacolumn\">backward</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_value("forward");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","272","179","78","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("smooth");_a.set_value("true");this.addChild(_a.name,_a);_a=new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_text("ProgressBar");_a.set_cssclass("sta_WF_TitleMain");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_c){});_a.set_mobileorientation("landscape");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Comp_ProgressBar.xfdl",function(){this.Button00_onclick=function(_a,_b){this.ProgressBar00.set_pos(0);this.setTimer(1,30);};this.Form_ontimer=function(_a,_b){if(_b.timerid==1){if(this.ProgressBar00.pos==100){this.killTimer(1);}this.ProgressBar00.getNumSetter("pos").postInc();}else if(_b.timerid==2){if(this.ProgressBar01.pos==100){this.killTimer(1);}this.ProgressBar01.getNumSetter("pos").postInc();}};this.Button01_onclick=function(_a,_b){this.ProgressBar01.set_pos(0);this.ProgressBar01.set_direction(this.Radio00.value);this.ProgressBar01.set_smooth(this.CheckBox00.value);this.setTimer(2,30);};});this.on_initEvent=function(){this.addEventHandler("ontimer",this.Form_ontimer,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);this.Button01.addEventHandler("onclick",this.Button01_onclick,this);};this.loadIncludeScript("Comp_ProgressBar.xfdl");this.loadPreloadList();_a=null;};})();