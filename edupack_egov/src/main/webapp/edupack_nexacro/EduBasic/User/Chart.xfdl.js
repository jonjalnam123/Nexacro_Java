(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Chart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"256\"/><Column id=\"Vancouver\" type=\"INT\" size=\"256\"/><Column id=\"Toronto\" type=\"STRING\" size=\"256\"/><Column id=\"Calgary\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Vancouver\">91</Col><Col id=\"Toronto\">85</Col><Col id=\"Calgary\">45</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Vancouver\">87</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">75</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Vancouver\">88</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Vancouver\">86</Col><Col id=\"Toronto\">78</Col><Col id=\"Calgary\">78</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Vancouver\">82</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">56</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Vancouver\">80</Col><Col id=\"Toronto\">68</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Vancouver\">79</Col><Col id=\"Toronto\">57</Col><Col id=\"Calgary\">54</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Vancouver\">72</Col><Col id=\"Toronto\">67</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Vancouver\">90</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">85</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Vancouver\">95</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Vancouver\">40</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Vancouver\">60</Col><Col id=\"Toronto\">65</Col><Col id=\"Calgary\">79</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","50","34","400","346",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_background("ivory");
            this.addChild(obj.name, obj);

            obj = new Div("div01","520","30","400","346",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div01");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_background("ivory");
            this.addChild(obj.name, obj);

            obj = new Div("div02","288","440","809","236",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web00","134","32","605","177",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            this.div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form
            obj = new Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmRmateChartAll.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Chart.xfdl","Lib::rMateChartH5.xjs");
        this.registerScript("Chart.xfdl", function() {
        this.executeIncludeScript("Lib::rMateChartH5.xjs"); /*include "Lib::rMateChartH5.xjs"*/;

        this.layoutStr1;
        this.layoutStr2;

        this.chartData1;
        this.chartData2;

        this.Chart_onload = function(obj,e)
        {

        	this.gfnFormOnLoad(this);
        	this.gfnCreateChart(this.div02.form.web00);

        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="Rainfall" textAlign="center" />'
        				+'<SubCaption text="( mm )" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="Month"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="100" interval="10" />'
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="Vancouver" displayName="Vancouver">'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';

        	// 차트 데이터
        	this.chartData1 = [  {"Month":"Jan","Vancouver":40},
        						{"Month":"Feb","Vancouver":50},
        						{"Month":"Mar","Vancouver":47},
        						{"Month":"Apr","Vancouver":57},
        						{"Month":"May","Vancouver":68},
        						{"Month":"Jun","Vancouver":52},
        						{"Month":"Jul","Vancouver":36},
        						{"Month":"Aug","Vancouver":42},
        						{"Month":"Sep","Vancouver":33},
        						{"Month":"Oct","Vancouver":39},
        						{"Month":"Nov","Vancouver":45},
        						{"Month":"Dec","Vancouver":40}];

        		// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr2 =
        					'<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="Rainfall" textAlign="center" />'
        							+'<SubCaption text="( mm )" textAlign="right" />'
        						 +'<Legend />'
        					 +'</Options>'
        					 +'<Bar2DChart showDataTips="true">'
        						   +'<horizontalAxis>'
        							   +'<LinearAxis maximum="100"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<CategoryAxis categoryField="Month"/>'
        						 +'</verticalAxis>'
        							+'<series>'
        							   +'<Bar2DSeries labelPosition="inside" xField="Vancouver" displayName="Vancouver" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">'
        									+'<showDataEffect>'
        									   +'<SeriesInterpolate/>'
        								  +'</showDataEffect>'
        							  +'</Bar2DSeries>'
        						 +'</series>'
        					  +'</Bar2DChart>'
        				  +'</rMateChart>';

        	// 차트 데이터
        	this.chartData2 = [  {"Month":"Jan", "Vancouver":21},
        						{"Month":"Feb", "Vancouver":29},
        						{"Month":"Mar", "Vancouver":48},
        						{"Month":"Apr", "Vancouver":38},
        						{"Month":"May", "Vancouver":59},
        						{"Month":"Jun", "Vancouver":77.2},
        						{"Month":"Jul", "Vancouver":68},
        						{"Month":"Aug", "Vancouver":58},
        						{"Month":"Sep", "Vancouver":44},
        						{"Month":"Oct", "Vancouver":23}];

        	this.div00.form.fnSetChart("chart1", this.layoutStr1, this.rMateChartDataSetToXml(this.dsData));
        	this.div01.form.fnSetChart("chart2", this.layoutStr2, this.rMateChartDataSetToXml(this.dsData));

        };

        this.rMateChartOnLoad = function()
        {
        	trace('============= rMateChartOnLoad');

        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.gfnSetChart(this.div02.form.web00, this.dsData, sType, arrOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Chart_onload,this);
        };
        this.loadIncludeScript("Chart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
