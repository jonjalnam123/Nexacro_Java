(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleRestapiData30");
            this.set_titletext("정부 데이터 3.0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column type=\"string\" id=\"arsId\" size=\"100\"/><Column type=\"string\" id=\"avgCf1\" size=\"100\"/><Column type=\"string\" id=\"avgCf2\" size=\"100\"/><Column type=\"string\" id=\"brdrde_Num1\" size=\"100\"/><Column type=\"string\" id=\"brdrde_Num2\" size=\"100\"/><Column type=\"string\" id=\"brerde_Div1\" size=\"100\"/><Column type=\"string\" id=\"busType1\" size=\"100\"/><Column type=\"string\" id=\"busType2\" size=\"100\"/><Column type=\"string\" id=\"dir\" size=\"100\"/><Column type=\"string\" id=\"expCf1\" size=\"100\"/><Column type=\"string\" id=\"expCf2\" size=\"100\"/><Column type=\"string\" id=\"exps1\" size=\"100\"/><Column type=\"string\" id=\"exps2\" size=\"100\"/><Column type=\"string\" id=\"firstTm\" size=\"100\"/><Column type=\"string\" id=\"full1\" size=\"100\"/><Column type=\"string\" id=\"full2\" size=\"100\"/><Column type=\"string\" id=\"goal1\" size=\"100\"/><Column type=\"string\" id=\"goal2\" size=\"100\"/><Column type=\"string\" id=\"isArrive1\" size=\"100\"/><Column type=\"string\" id=\"isArrive2\" size=\"100\"/><Column type=\"string\" id=\"isLast1\" size=\"100\"/><Column type=\"string\" id=\"isLast2\" size=\"100\"/><Column type=\"string\" id=\"kalCf1\" size=\"100\"/><Column type=\"string\" id=\"kalCf2\" size=\"100\"/><Column type=\"string\" id=\"kals1\" size=\"100\"/><Column type=\"string\" id=\"kals2\" size=\"100\"/><Column type=\"string\" id=\"lastTm\" size=\"100\"/><Column type=\"string\" id=\"mkTm\" size=\"100\"/><Column type=\"string\" id=\"namin2Sec1\" size=\"100\"/><Column type=\"string\" id=\"namin2Sec2\" size=\"100\"/><Column type=\"string\" id=\"neuCf1\" size=\"100\"/><Column type=\"string\" id=\"neuCf2\" size=\"100\"/><Column type=\"string\" id=\"neus1\" size=\"100\"/><Column type=\"string\" id=\"neus2\" size=\"100\"/><Column type=\"string\" id=\"nmain2Ord1\" size=\"100\"/><Column type=\"string\" id=\"nmain2Ord2\" size=\"100\"/><Column type=\"string\" id=\"nmain2Stnid1\" size=\"100\"/><Column type=\"string\" id=\"nmain2Stnid2\" size=\"100\"/><Column type=\"string\" id=\"nmain3Ord1\" size=\"100\"/><Column type=\"string\" id=\"nmain3Ord2\" size=\"100\"/><Column type=\"string\" id=\"nmain3Sec1\" size=\"100\"/><Column type=\"string\" id=\"nmain3Sec2\" size=\"100\"/><Column type=\"string\" id=\"nmain3Stnid1\" size=\"100\"/><Column type=\"string\" id=\"nmain3Stnid2\" size=\"100\"/><Column type=\"string\" id=\"nmainOrd1\" size=\"100\"/><Column type=\"string\" id=\"nmainOrd2\" size=\"100\"/><Column type=\"string\" id=\"nmainSec1\" size=\"100\"/><Column type=\"string\" id=\"nmainSec2\" size=\"100\"/><Column type=\"string\" id=\"nmainStnid1\" size=\"100\"/><Column type=\"string\" id=\"nmainStnid2\" size=\"100\"/><Column type=\"string\" id=\"nstnId1\" size=\"100\"/><Column type=\"string\" id=\"nstnId2\" size=\"100\"/><Column type=\"string\" id=\"nstnOrd1\" size=\"100\"/><Column type=\"string\" id=\"nstnOrd2\" size=\"100\"/><Column type=\"string\" id=\"nstnSec1\" size=\"100\"/><Column type=\"string\" id=\"nstnSec2\" size=\"100\"/><Column type=\"string\" id=\"nstnSpd1\" size=\"100\"/><Column type=\"string\" id=\"nstnSpd2\" size=\"100\"/><Column type=\"string\" id=\"rerdie_Div1\" size=\"100\"/><Column type=\"string\" id=\"rerdie_Div2\" size=\"100\"/><Column type=\"string\" id=\"reride_Num1\" size=\"100\"/><Column type=\"string\" id=\"reride_Num2\" size=\"100\"/><Column type=\"string\" id=\"routeType\" size=\"100\"/><Column type=\"string\" id=\"rtNm\" size=\"100\"/><Column type=\"string\" id=\"sectOrd1\" size=\"100\"/><Column type=\"string\" id=\"sectOrd2\" size=\"100\"/><Column type=\"string\" id=\"stId\" size=\"100\"/><Column type=\"string\" id=\"stNm\" size=\"100\"/><Column type=\"string\" id=\"staOrd\" size=\"100\"/><Column type=\"string\" id=\"term\" size=\"100\"/><Column type=\"string\" id=\"traSpd1\" size=\"100\"/><Column type=\"string\" id=\"traSpd2\" size=\"100\"/><Column type=\"string\" id=\"traTime1\" size=\"100\"/><Column type=\"string\" id=\"traTime2\" size=\"100\"/><Column type=\"string\" id=\"vehId1\" size=\"100\"/><Column type=\"string\" id=\"vehId2\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","128",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"arsId\"/><Cell col=\"1\" text=\"avgCf1\"/><Cell col=\"2\" text=\"avgCf2\"/><Cell col=\"3\" text=\"brdrde_Num1\"/><Cell col=\"4\" text=\"brdrde_Num2\"/><Cell col=\"5\" text=\"brerde_Div1\"/><Cell col=\"6\" text=\"busType1\"/><Cell col=\"7\" text=\"busType2\"/><Cell col=\"8\" text=\"dir\"/><Cell col=\"9\" text=\"expCf1\"/><Cell col=\"10\" text=\"expCf2\"/><Cell col=\"11\" text=\"exps1\"/><Cell col=\"12\" text=\"exps2\"/><Cell col=\"13\" text=\"firstTm\"/><Cell col=\"14\" text=\"full1\"/><Cell col=\"15\" text=\"full2\"/><Cell col=\"16\" text=\"goal1\"/><Cell col=\"17\" text=\"goal2\"/><Cell col=\"18\" text=\"isArrive1\"/><Cell col=\"19\" text=\"isArrive2\"/><Cell col=\"20\" text=\"isLast1\"/><Cell col=\"21\" text=\"isLast2\"/><Cell col=\"22\" text=\"kalCf1\"/><Cell col=\"23\" text=\"kalCf2\"/><Cell col=\"24\" text=\"kals1\"/><Cell col=\"25\" text=\"kals2\"/><Cell col=\"26\" text=\"lastTm\"/><Cell col=\"27\" text=\"mkTm\"/><Cell col=\"28\" text=\"namin2Sec1\"/><Cell col=\"29\" text=\"namin2Sec2\"/><Cell col=\"30\" text=\"neuCf1\"/><Cell col=\"31\" text=\"neuCf2\"/><Cell col=\"32\" text=\"neus1\"/><Cell col=\"33\" text=\"neus2\"/><Cell col=\"34\" text=\"nmain2Ord1\"/><Cell col=\"35\" text=\"nmain2Ord2\"/><Cell col=\"36\" text=\"nmain2Stnid1\"/><Cell col=\"37\" text=\"nmain2Stnid2\"/><Cell col=\"38\" text=\"nmain3Ord1\"/><Cell col=\"39\" text=\"nmain3Ord2\"/><Cell col=\"40\" text=\"nmain3Sec1\"/><Cell col=\"41\" text=\"nmain3Sec2\"/><Cell col=\"42\" text=\"nmain3Stnid1\"/><Cell col=\"43\" text=\"nmain3Stnid2\"/><Cell col=\"44\" text=\"nmainOrd1\"/><Cell col=\"45\" text=\"nmainOrd2\"/><Cell col=\"46\" text=\"nmainSec1\"/><Cell col=\"47\" text=\"nmainSec2\"/><Cell col=\"48\" text=\"nmainStnid1\"/><Cell col=\"49\" text=\"nmainStnid2\"/><Cell col=\"50\" text=\"nstnId1\"/><Cell col=\"51\" text=\"nstnId2\"/><Cell col=\"52\" text=\"nstnOrd1\"/><Cell col=\"53\" text=\"nstnOrd2\"/><Cell col=\"54\" text=\"nstnSec1\"/><Cell col=\"55\" text=\"nstnSec2\"/><Cell col=\"56\" text=\"nstnSpd1\"/><Cell col=\"57\" text=\"nstnSpd2\"/><Cell col=\"58\" text=\"rerdie_Div1\"/><Cell col=\"59\" text=\"rerdie_Div2\"/><Cell col=\"60\" text=\"reride_Num1\"/><Cell col=\"61\" text=\"reride_Num2\"/><Cell col=\"62\" text=\"routeType\"/><Cell col=\"63\" text=\"rtNm\"/><Cell col=\"64\" text=\"sectOrd1\"/><Cell col=\"65\" text=\"sectOrd2\"/><Cell col=\"66\" text=\"stId\"/><Cell col=\"67\" text=\"stNm\"/><Cell col=\"68\" text=\"staOrd\"/><Cell col=\"69\" text=\"term\"/><Cell col=\"70\" text=\"traSpd1\"/><Cell col=\"71\" text=\"traSpd2\"/><Cell col=\"72\" text=\"traTime1\"/><Cell col=\"73\" text=\"traTime2\"/><Cell col=\"74\" text=\"vehId1\"/><Cell col=\"75\" text=\"vehId2\"/></Band><Band id=\"body\"><Cell text=\"bind:arsId\"/><Cell col=\"1\" text=\"bind:avgCf1\"/><Cell col=\"2\" text=\"bind:avgCf2\"/><Cell col=\"3\" text=\"bind:brdrde_Num1\"/><Cell col=\"4\" text=\"bind:brdrde_Num2\"/><Cell col=\"5\" text=\"bind:brerde_Div1\"/><Cell col=\"6\" text=\"bind:busType1\"/><Cell col=\"7\" text=\"bind:busType2\"/><Cell col=\"8\" text=\"bind:dir\"/><Cell col=\"9\" text=\"bind:expCf1\"/><Cell col=\"10\" text=\"bind:expCf2\"/><Cell col=\"11\" text=\"bind:exps1\"/><Cell col=\"12\" text=\"bind:exps2\"/><Cell col=\"13\" text=\"bind:firstTm\"/><Cell col=\"14\" text=\"bind:full1\"/><Cell col=\"15\" text=\"bind:full2\"/><Cell col=\"16\" text=\"bind:goal1\"/><Cell col=\"17\" text=\"bind:goal2\"/><Cell col=\"18\" text=\"bind:isArrive1\"/><Cell col=\"19\" text=\"bind:isArrive2\"/><Cell col=\"20\" text=\"bind:isLast1\"/><Cell col=\"21\" text=\"bind:isLast2\"/><Cell col=\"22\" text=\"bind:kalCf1\"/><Cell col=\"23\" text=\"bind:kalCf2\"/><Cell col=\"24\" text=\"bind:kals1\"/><Cell col=\"25\" text=\"bind:kals2\"/><Cell col=\"26\" text=\"bind:lastTm\"/><Cell col=\"27\" text=\"bind:mkTm\"/><Cell col=\"28\" text=\"bind:namin2Sec1\"/><Cell col=\"29\" text=\"bind:namin2Sec2\"/><Cell col=\"30\" text=\"bind:neuCf1\"/><Cell col=\"31\" text=\"bind:neuCf2\"/><Cell col=\"32\" text=\"bind:neus1\"/><Cell col=\"33\" text=\"bind:neus2\"/><Cell col=\"34\" text=\"bind:nmain2Ord1\"/><Cell col=\"35\" text=\"bind:nmain2Ord2\"/><Cell col=\"36\" text=\"bind:nmain2Stnid1\"/><Cell col=\"37\" text=\"bind:nmain2Stnid2\"/><Cell col=\"38\" text=\"bind:nmain3Ord1\"/><Cell col=\"39\" text=\"bind:nmain3Ord2\"/><Cell col=\"40\" text=\"bind:nmain3Sec1\"/><Cell col=\"41\" text=\"bind:nmain3Sec2\"/><Cell col=\"42\" text=\"bind:nmain3Stnid1\"/><Cell col=\"43\" text=\"bind:nmain3Stnid2\"/><Cell col=\"44\" text=\"bind:nmainOrd1\"/><Cell col=\"45\" text=\"bind:nmainOrd2\"/><Cell col=\"46\" text=\"bind:nmainSec1\"/><Cell col=\"47\" text=\"bind:nmainSec2\"/><Cell col=\"48\" text=\"bind:nmainStnid1\"/><Cell col=\"49\" text=\"bind:nmainStnid2\"/><Cell col=\"50\" text=\"bind:nstnId1\"/><Cell col=\"51\" text=\"bind:nstnId2\"/><Cell col=\"52\" text=\"bind:nstnOrd1\"/><Cell col=\"53\" text=\"bind:nstnOrd2\"/><Cell col=\"54\" text=\"bind:nstnSec1\"/><Cell col=\"55\" text=\"bind:nstnSec2\"/><Cell col=\"56\" text=\"bind:nstnSpd1\"/><Cell col=\"57\" text=\"bind:nstnSpd2\"/><Cell col=\"58\" text=\"bind:rerdie_Div1\"/><Cell col=\"59\" text=\"bind:rerdie_Div2\"/><Cell col=\"60\" text=\"bind:reride_Num1\"/><Cell col=\"61\" text=\"bind:reride_Num2\"/><Cell col=\"62\" text=\"bind:routeType\"/><Cell col=\"63\" text=\"bind:rtNm\"/><Cell col=\"64\" text=\"bind:sectOrd1\"/><Cell col=\"65\" text=\"bind:sectOrd2\"/><Cell col=\"66\" text=\"bind:stId\"/><Cell col=\"67\" text=\"bind:stNm\"/><Cell col=\"68\" text=\"bind:staOrd\"/><Cell col=\"69\" text=\"bind:term\"/><Cell col=\"70\" text=\"bind:traSpd1\"/><Cell col=\"71\" text=\"bind:traSpd2\"/><Cell col=\"72\" text=\"bind:traTime1\"/><Cell col=\"73\" text=\"bind:traTime2\"/><Cell col=\"74\" text=\"bind:vehId1\"/><Cell col=\"75\" text=\"bind:vehId2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBusRouteId","105","95","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("100100055");
            obj.set_text("100100055");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","95","83","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("busRouteId");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","290","95","101","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("정부 데이터 3.0");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","35",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Rest API 정부 데이터 3.0 연동 샘플이다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleRestapiData30.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > 정부 데이터 3.0
        *  @FileName 	SampleRestAPI.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        this.Button00_onclick = function(obj,e)
        {
        	this.transaction("Select","http://localhost:8088/edupack_egov/jsp/restapi.jsp","","Dataset00=output","busRouteId=" +  this.edtBusRouteId.value,"fn_call");
        };
        this.fn_call = function(sid, ecd, emsg)
        {
        	if(ecd >= 0)
        	{
        		this.alert(this.Dataset00.getRowCount() + '건 조회되었습니다.');
        	} else {
        		this.alert("error");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("SampleRestapiData30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
