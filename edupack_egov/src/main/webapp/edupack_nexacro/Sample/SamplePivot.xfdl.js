(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePivot");
            this.set_titletext("Pivot 그리드");
            this.getSetter("classname").set("Sample_1");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Category\" type=\"STRING\" size=\"256\"/><Column id=\"Region\" type=\"String\" size=\"256\"/><Column id=\"Rep\" type=\"String\" size=\"256\"/><Column id=\"Item\" type=\"String\" size=\"256\"/><Column id=\"Units\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UnitCost\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">95</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">50</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">36</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">27</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">56</Col><Col id=\"UnitCost\">2</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">60</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">75</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Thompson</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">32</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">60</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Howard</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">29</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">81</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">35</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">2</Col><Col id=\"UnitCost\">125</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">16</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">28</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">64</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">15</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">96</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">67</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">74</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">46</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">87</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">4</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">7</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">50</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">66</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Howard</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">96</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">53</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">80</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">5</Col><Col id=\"UnitCost\">125</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">62</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">55</Col><Col id=\"UnitCost\">12.49</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">42</Col><Col id=\"UnitCost\">23.95</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">3</Col><Col id=\"UnitCost\">275</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">7</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">76</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Thompson</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">57</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">14</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">11</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">94</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">28</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Category\">Sub</Col><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pivot_info", this);
            obj._setContents("<ColumnInfo><Column id=\"pivotInfo\" type=\"STRING\" size=\"256\"/><Column id=\"colID\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"titleText\" type=\"STRING\" size=\"256\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/><Column id=\"colsize\" type=\"STRING\" size=\"256\"/><Column id=\"show\" type=\"STRING\" size=\"256\"/><Column id=\"displayType\" type=\"STRING\" size=\"256\"/><Column id=\"headAlign\" type=\"STRING\" size=\"256\"/><Column id=\"bodyAlign\" type=\"STRING\" size=\"256\"/><Column id=\"bkColor\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"mask\" type=\"STRING\" size=\"256\"/><Column id=\"comboDataset\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"cssclass\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pivotInfo\">GROUP</Col><Col id=\"colID\">Category</Col><Col id=\"seq\">1</Col><Col id=\"titleText\">구분</Col><Col id=\"sort\">ASC</Col><Col id=\"show\">0</Col><Col id=\"displayType\">text</Col><Col id=\"headAlign\">center</Col><Col id=\"bodyAlign\">left</Col><Col id=\"colsize\">80</Col><Col id=\"bkColor\"/></Row><Row><Col id=\"pivotInfo\">GROUP</Col><Col id=\"colID\">Region</Col><Col id=\"seq\">2</Col><Col id=\"titleText\">지역</Col><Col id=\"sort\">ASC</Col><Col id=\"show\">1</Col><Col id=\"displayType\">text</Col><Col id=\"headAlign\">center</Col><Col id=\"bodyAlign\">left</Col><Col id=\"colsize\">100</Col><Col id=\"bkColor\"/></Row><Row><Col id=\"pivotInfo\">GROUP</Col><Col id=\"colID\">Rep</Col><Col id=\"seq\">3</Col><Col id=\"titleText\">담당자</Col><Col id=\"sort\">ASC</Col><Col id=\"show\">0</Col><Col id=\"displayType\">text</Col><Col id=\"headAlign\">center</Col><Col id=\"bodyAlign\">left</Col><Col id=\"bkColor\"/><Col id=\"color\"/><Col id=\"mask\"/><Col id=\"comboDataset\"/><Col id=\"comboCode\"/><Col id=\"comboText\"/><Col id=\"colsize\">100</Col></Row><Row><Col id=\"pivotInfo\">PIVOT</Col><Col id=\"colID\">Item</Col><Col id=\"seq\">1</Col><Col id=\"titleText\">품명</Col><Col id=\"sort\">ASC</Col><Col id=\"show\">1</Col><Col id=\"displayType\">text</Col><Col id=\"headAlign\">center</Col><Col id=\"bodyAlign\">left</Col><Col id=\"bkColor\"/><Col id=\"color\"/><Col id=\"mask\"/><Col id=\"comboDataset\"/><Col id=\"comboCode\"/><Col id=\"comboText\"/><Col id=\"colsize\">100</Col></Row><Row><Col id=\"pivotInfo\">FACTOR</Col><Col id=\"colID\">Units</Col><Col id=\"seq\">1</Col><Col id=\"titleText\">수량</Col><Col id=\"sort\">ASC</Col><Col id=\"show\">1</Col><Col id=\"displayType\">text</Col><Col id=\"headAlign\">center</Col><Col id=\"bodyAlign\">right</Col><Col id=\"bkColor\"/><Col id=\"color\"/><Col id=\"mask\">#,###.#</Col><Col id=\"comboDataset\"/><Col id=\"comboCode\"/><Col id=\"comboText\"/><Col id=\"colsize\">80</Col></Row><Row><Col id=\"pivotInfo\">FACTOR</Col><Col id=\"colID\">UnitCost</Col><Col id=\"seq\">2</Col><Col id=\"titleText\">단가</Col><Col id=\"sort\">ASC</Col><Col id=\"show\">1</Col><Col id=\"displayType\">text</Col><Col id=\"headAlign\">center</Col><Col id=\"bodyAlign\">right</Col><Col id=\"bkColor\"/><Col id=\"color\"/><Col id=\"mask\">#,###.##</Col><Col id=\"comboDataset\"/><Col id=\"comboCode\"/><Col id=\"comboText\"/><Col id=\"colsize\">80</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","10","630","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("pivot 생성");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","663",null,"280","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Pivot 그리드");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"590","10",null,"980",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1.Pivot Grid \r\n  1) 데이터는 합계(Sum) 처리만 가능 하다. 평균(Avg),개수(Count) 등 추가 시 웹의 한계에 따른 성능상의 문제가 발생할 수 있어 처리되지 않았다.\r\n  2) 합계의 기준은 아래 “GROUP”을 기준으로 한다.\r\n  3) Summary의 Factor 컬럼은 하기 Format Dataset의 FACTOR 컬럼 기준으로 처리된다.\r\n  4) 그리드 정보용 Dataset이 반드시 필요하며 하기 내용을 참고한다.\r\n  5) Factor Column은 Dataset의 숫자 필드만 가능하다.\r\n\r\n2.컬럼별 상세내용\r\n  * GROUP : 그리드 우측 Pivot 데이터의 기준 컬럼\r\n  * PIVOT : Pivoting 되는 컬럼\r\n  * FACTOR : Pivoting시 기준이 되는 Value 컬럼.\r\n      - colID : 원본데이터의 Column ID 로 원본데이터에 반드시 존재하여야 함. \r\n      - seq : column이 나열되는 순서\r\n      - titleText : 그리드 헤드 및 Pivoting UI에서 표기되는 title\r\n      - sort : 그리드에 표현될 때 컬럼의 sorting 방법 “ASC”,”DESC”중 택일\r\n      - show : 그리드 표현 여부. 그리드에 보여주지 않더라도 사용자의 오퍼레이션으로 정보를 변경등으로 필요한 경우는 show : “0”으로 입력 “0”,”1”중 택일\r\n      - colsize : column size \r\n      - displayType : cell display type 예) normal, number, text\r\n      - headAlign : 그리드 헤드의 Align 예) center, left\r\n      - bodyAlign : 그디드 바디의 Align 예) center, left,right\r\n      - bkColor : 필요시 기입. Cell별 BackGround Color 지정하며 지정시 background, background2가 동시에 적용되며, \r\n                       소계사용시 색상이 틀려지므로 소계적용시 비권장\r\n      - color : 필요시 기입. Cell별 text Color 지정.\r\n      - mask : 필요시 기입. Cell별 mask 지정. 주로 FACTOR 컬럼에 설정.\r\n      - comboDataset : displayType이 “combo”로 설정하고 combo로 사용시 inner Dataset\r\n      - comboCode : comboDataset의 Code Column\r\n      - comboText : comboDataset의 Text Column");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SamplePivot.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > Pivot 그리드
        *  @FileName 	SamplePivot.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.Button00_onclick = function(obj,  e)
        {
        	this.Grid00.set_showAvg(true);
        	this.Grid00.set_pivotUI(true);
        	this.Grid00.set_pivotSubSum(true,true);
         	this.Grid00.set_pivotFactorOnlyNumber(false);
        //	this.Grid00.set_pivotSubSumColor(true);				// 소계 색상
        	var arrColor = ["#fbf0a1","#c4f8a4","#adefe0","#a5f7de","#a3dcf9","#c4b3e9"];
        	this.Grid00.set_pivotSubSumColor(true,arrColor);	// 소계 색상
         //	this.Grid00.set_pivotFactorType("AVG");
         	this.Grid00.set_showPivotRightSummary(true,100,"합계","center",false);
        	this.Grid00.set_showPivotSummary(true,"합계","center");

        	this.Grid00.reCalcPivot(this.ds_pivot_info,this.Dataset00);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
        };
        this.loadIncludeScript("SamplePivot.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
