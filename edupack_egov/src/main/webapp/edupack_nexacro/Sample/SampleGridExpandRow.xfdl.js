(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleGridExpandRow");
            this.set_titletext("그리드 Row 확장");
            this.getSetter("classname").set("grid_multitype");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">동해물과 백두산이 마르고 닳도록&#10;하느님이 보우하사 우리 나라 만세&#10;무궁화 삼천리 화려강산&#10;대한사람 대한으로 길이 보전하세&#10;남산 위에 저 소나무 철갑을 두른 듯&#10;바람 서리 불변함은 우리 기상일세&#10;가을 하늘 공활한데 높고 구름 없이&#10;밝은 달은 우리 가슴 일편단심일세&#10;이 기상과 이 맘으로 충성을 다하여&#10;괴로우나 즐거우나 나라 사랑하세</Col><Col id=\"Column2\">애국가</Col><Col id=\"Column3\">안익태</Col><Col id=\"Column0\"/><Col id=\"Column4\">대한민국</Col><Col id=\"Column5\"/></Row><Row><Col id=\"Column1\">너를 보던 그 순간 &#10;Pick me Pick me Pick me &#10;시선 고정 너에게 &#10;Pick me Pick me Pick me &#10;눈부셔 Shining Shining &#10;제발 내 맘을 Pick me Pick me &#10;Pick me Pick me Pick me &#10;너와 있는 이 시간 &#10;Pick me Pick me Pick me &#10;난 너무 빨라 불안해 &#10;Pick me Pick me Pick me &#10;멈춰줘 hold me hold me &#10;마지막까지 Pick me Pick me &#10;너는 내게 너무 예뻐서 &#10;꿈일까 난 너무 두려워 &#10;기억해 제발 이 순간 Tonight &#10;오늘 밤 주인공은 나야 나 나야 나 &#10;너만을 기다려 온 나야 나 나야 나 &#10;네 맘을 훔칠 사람 나야 나 나야 나 &#10;마지막 단 한 사람 나야 나 나야 나 &#10;오늘 밤 주인공은 나야 나 나야 나 &#10;너만을 기다려 온 나야 나 나야 나 &#10;네 맘을 훔칠 사람 나야 나 나야 나 &#10;마지막 단 한 사람 나야 나 나야 나</Col><Col id=\"Column2\">나야 나 (PICK ME)</Col><Col id=\"Column3\">프로듀스 101 시즌2</Col><Col id=\"Column0\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column1\">곰 세 마리가 한집에 있어 &#10;아빠 곰 엄마 곰 애기 곰&#10;아빠 곰은 뚱뚱해 엄마 곰은 날씬해 &#10;애기 곰은 너무 귀여워 히쭉 히쭉 잘 한다&#10;&#10;곰 세 마리가 한집에 있어 &#10;아빠 곰 엄마 곰 애기 곰&#10;아빠 곰은 뚱뚱해 엄마 곰은 날씬해 &#10;애기 곰은 너무 귀여워 히쭉 히쭉 잘 한다</Col><Col id=\"Column2\">곰세마리</Col><Col id=\"Column3\">작자미상</Col><Col id=\"Column0\"/><Col id=\"Column4\"/><Col id=\"Column5\">동요</Col></Row><Row><Col id=\"Column1\">1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890</Col><Col id=\"Column2\">QWEHJKFKSFJSFHSFHJSFHJKSD]</Col><Col id=\"Column3\">QWEHJKFKSFJSF</Col><Col id=\"Column0\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","110",null,null,"10","25",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_selecttype("cell");
            obj.set_useselcolor("false");
            obj.set_autosizebandtype("allband");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"20\"/><Column size=\"20\"/><Column size=\"20\"/><Column size=\"20\"/><Column size=\"557\"/></Columns><Rows><Row size=\"83\"/><Row size=\"0\"/><Row size=\"0\"/><Row size=\"0\"/><Row size=\"0\"/></Rows><Band id=\"body\"><Cell colspan=\"5\"><Cell edittype=\"expand\" text=\"expr:Column0==1?&quot;URL(&apos;theme://images/btn_WF_Del.png&apos;)&quot;:&quot;URL(&apos;theme://images/btn_WF_Add.png&apos;)&quot;\" wordWrap=\"char\" autosizecol=\"limitmin\" displaytype=\"imagecontrol\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Cell><Cell col=\"5\" text=\"bind:Column1\" wordWrap=\"char\" autosizecol=\"limitmin\"/><Cell row=\"1\" colspan=\"5\" wordWrap=\"char\" autosizerow=\"none\" text=\"제목\" textAlign=\"right\"/><Cell row=\"1\" col=\"5\" text=\"bind:Column2\" wordWrap=\"char\" autosizerow=\"none\"/><Cell row=\"2\" colspan=\"5\" autosizerow=\"none\" text=\"작곡\" textAlign=\"right\"/><Cell row=\"2\" col=\"5\" text=\"bind:Column3\" wordWrap=\"char\" autosizerow=\"none\"/><Cell row=\"3\" colspan=\"5\" autosizerow=\"none\" text=\"국가\" textAlign=\"right\"/><Cell row=\"3\" col=\"5\" text=\"bind:Column4\" wordWrap=\"char\" autosizerow=\"none\"/><Cell row=\"4\" colspan=\"5\" autosizerow=\"none\" text=\"비고\" textAlign=\"right\"/><Cell row=\"4\" col=\"5\" text=\"bind:Column5\" wordWrap=\"char\" autosizerow=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("그리드 Row 확장");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"70","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그리드의 Row를 확장하여 상세 내용을 볼수 있도록 그리드를 구성한 샘플입니다.\r\n첫번째 컬럼을 클릭하면 확장/축소 기능이 작동됩니다. ");
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
        this.registerScript("SampleGridExpandRow.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 그리드 Row 확장
        *  @FileName 	SampleGridExpandRow.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/

        this.Grid00_oncellclick = function(obj, e)
        {
        	//trace(e.cell + " : " + e.row);
        	if(e.cell == 0) {
        		if(this.Dataset00.getColumn(e.row, "Column0") == "1") {
        			this.Dataset00.setColumn(e.row, "Column0", "0");
        			this.Grid00.setRealRowSize(e.row, 0, 1);
         			this.Grid00.setRealRowSize(e.row, 0, 2);
        			this.Grid00.setRealRowSize(e.row, 0, 3);
        			this.Grid00.setRealRowSize(e.row, 0, 4);

        		} else {
        			this.Dataset00.setColumn(e.row, "Column0", "1");
        			this.Grid00.setRealRowSize(e.row, 20, 1);
         			this.Grid00.setRealRowSize(e.row, 20, 2);
        			this.Grid00.setRealRowSize(e.row, 20, 3);
        			this.Grid00.setRealRowSize(e.row, 20, 4);
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
        };
        this.loadIncludeScript("SampleGridExpandRow.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
