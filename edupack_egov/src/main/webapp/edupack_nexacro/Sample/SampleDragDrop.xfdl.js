(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleDragDrop");
            this.set_titletext("그리드 drag & drop");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">(주)가온누리엠 (4108500)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">M7106 (41085900)</Col><Col id=\"Column3\">대화역</Col><Col id=\"Column4\">서울역.YTN</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">BRT (1100200)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">471 (11002001)</Col><Col id=\"Column3\">은평뉴타운공영차고지</Col><Col id=\"Column4\">AT센터양재꽃시장</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">BRT (1100201)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">701 (11002002)</Col><Col id=\"Column3\">은평뉴타운공영차고지</Col><Col id=\"Column4\">종로2가</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">BRT (1100202)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">N37 (11002003)</Col><Col id=\"Column3\">송파공영차고지(경유)</Col><Col id=\"Column4\">은평뉴타운10단지(중)</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강인교통 (2831900)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">302 (28040002)</Col><Col id=\"Column3\">송내역</Col><Col id=\"Column4\">왕산차고지</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강인여객 (2830100)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">103 (28030014)</Col><Col id=\"Column3\">동춘동종점</Col><Col id=\"Column4\">동춘동종점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강인여객 (2830101)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">103-1 (28030020)</Col><Col id=\"Column3\">동춘동종점</Col><Col id=\"Column4\">동춘동종점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강화선진버스 (2830200)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">700 (28032023)</Col><Col id=\"Column3\">강화터미널</Col><Col id=\"Column4\">종합터미널역</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강화선진버스 (2830201)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">700-1 (28032027)</Col><Col id=\"Column3\">강화터미널</Col><Col id=\"Column4\">종합터미널역</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강화선진버스 (2830202)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">800 (28302001)</Col><Col id=\"Column3\">강화터미널</Col><Col id=\"Column4\">종합터미널역</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강화운수 (4100100)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2 (41001001)</Col><Col id=\"Column3\">마곡.하성종점</Col><Col id=\"Column4\">송정역(중)</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">강화운수 (4100101)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">3000 (41001020)</Col><Col id=\"Column3\">강화터미널</Col><Col id=\"Column4\">신촌역2호선</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">강화운수 (4100102)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">388 (41001024)</Col><Col id=\"Column3\">하늘빛마을일성트루웰</Col><Col id=\"Column4\">석수역1호선</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">강화운수 (4100103)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">80 (41001016)</Col><Col id=\"Column3\">강화터미널</Col><Col id=\"Column4\">현대백화점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">강화운수 (4100104)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">88 (41001013)</Col><Col id=\"Column3\">강화터미널</Col><Col id=\"Column4\">경방타임스퀘어.신세계백화점</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">강화운수 (4100105)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">88-1 (41001025)</Col><Col id=\"Column3\">현대아파트</Col><Col id=\"Column4\">경방타임스퀘어.신세계백화점</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100200)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1 (41002197)</Col><Col id=\"Column3\">시청</Col><Col id=\"Column4\">마을회관</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100201)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1-20 (41002480)</Col><Col id=\"Column3\">보건소.공설운동장</Col><Col id=\"Column4\">직동</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100202)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1-21 (41003544)</Col><Col id=\"Column3\">광주차고지</Col><Col id=\"Column4\">직동</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100203)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">10-5 (41002049)</Col><Col id=\"Column3\">호평동차고지</Col><Col id=\"Column4\">당고개역</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100204)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1000 (41002085)</Col><Col id=\"Column3\">호평동차고지</Col><Col id=\"Column4\">잠실역1번.11번출구</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100205)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1000-1 (41002484)</Col><Col id=\"Column3\">호평동차고지</Col><Col id=\"Column4\">잠실역1번.11번출구</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100206)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1000-2 (41002591)</Col><Col id=\"Column3\">잠실역1번.11번출구</Col><Col id=\"Column4\">잠실역1번.11번출구</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100207)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1005 (41002089)</Col><Col id=\"Column3\">외대도서관앞</Col><Col id=\"Column4\">강남역(중)</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100208)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1005-1 (41003283)</Col><Col id=\"Column3\">구미동차고지</Col><Col id=\"Column4\">서울역버스환승센터(중)</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100209)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">111 (41003277)</Col><Col id=\"Column3\">여주대하차장</Col><Col id=\"Column4\">여주대하차장</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100210)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">112 (41002005)</Col><Col id=\"Column3\">상산곡동.공영차고지</Col><Col id=\"Column4\">강변역.테크노마트앞(D)</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100211)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">114-1 (41002322)</Col><Col id=\"Column3\">곤지암터미널</Col><Col id=\"Column4\">이천터미널</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100212)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1150 (41002296)</Col><Col id=\"Column3\">외대도서관앞</Col><Col id=\"Column4\">서울역버스환승센터(중)</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100213)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">116 (41002006)</Col><Col id=\"Column3\">종점</Col><Col id=\"Column4\">잠실역1번.11번출구</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100214)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">116-1 (41002038)</Col><Col id=\"Column3\">정자역</Col><Col id=\"Column4\">원영화남아파트</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100215)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">116-3 (41003285)</Col><Col id=\"Column3\">경희대차고지</Col><Col id=\"Column4\">상대원파출소.소방소</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100216)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">119 (41002007)</Col><Col id=\"Column3\">종점</Col><Col id=\"Column4\">능동사거리</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100217)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">13 (41003276)</Col><Col id=\"Column3\">광주터미널</Col><Col id=\"Column4\">강변역.테크노마트앞(D)</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100218)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1303 (41002093)</Col><Col id=\"Column3\">외대도서관앞</Col><Col id=\"Column4\">안양역</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100219)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1311 (41002504)</Col><Col id=\"Column3\">한라아파트.탑동입구</Col><Col id=\"Column4\">강남역도시에빛</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100220)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">15 (41003037)</Col><Col id=\"Column3\">연대농장입구.도곡리종점</Col><Col id=\"Column4\">강변역(A)</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100221)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">15-1 (41002270)</Col><Col id=\"Column3\">광주크리닉센터</Col><Col id=\"Column4\">남한산성(종점)</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100222)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">1670 (41005113)</Col><Col id=\"Column3\">연대농장입구.도곡리종점</Col><Col id=\"Column4\">잠실역</Col><Col id=\"Column5\">유출입</Col></Row><Row><Col id=\"Column0\">경기고속 (4100223)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">17 (41002003)</Col><Col id=\"Column3\">광주차고지</Col><Col id=\"Column4\">숭신여자중고교.래미안금광아파트</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100224)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">17-1 (41002210)</Col><Col id=\"Column3\">광주차고지</Col><Col id=\"Column4\">숭신여자중고교.래미안금광아파트</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100225)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">17-3 (41002207)</Col><Col id=\"Column3\">시청</Col><Col id=\"Column4\">봉골종점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100226)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2 (41003126)</Col><Col id=\"Column3\">보건소.공설운동장</Col><Col id=\"Column4\">현산마을</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100227)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2-1 (41002167)</Col><Col id=\"Column3\">감오리식당</Col><Col id=\"Column4\">대주아파트종점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100228)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2-2 (41002202)</Col><Col id=\"Column3\">보건소.공설운동장</Col><Col id=\"Column4\">용수2리마을회관</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100229)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2-21 (41002420)</Col><Col id=\"Column3\">보건소.공설운동장</Col><Col id=\"Column4\">대주아파트.종점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100230)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2-22 (41002371)</Col><Col id=\"Column3\">세광아파트</Col><Col id=\"Column4\">대주아파트.종점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100231)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2-23 (41002421)</Col><Col id=\"Column3\">세광아파트</Col><Col id=\"Column4\">세광아파트</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100232)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2-24 (41003655)</Col><Col id=\"Column3\">보건소.공설운동장</Col><Col id=\"Column4\">대주아파트.종점</Col><Col id=\"Column5\">미유출</Col></Row><Row><Col id=\"Column0\">경기고속 (4100233)</Col><Col id=\"Column1\">시내</Col><Col id=\"Column2\">2-25 (41002323)</Col><Col id=\"Column3\">경안동주민센터.우체국앞</Col><Col id=\"Column4\">세광아파트</Col><Col id=\"Column5\">미유출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdTop","10","115","510",null,null,"234",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","525","115",null,null,"10","234",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10",null,null,"210","10","20",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그리드 drag & drop");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("stc","10","35",null,"70","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1. 왼쪽의 Grid에서 row를 선택 후 Drag하여 오른쪽의 Grid로 Drop한다.\r\n2. 왼쪽의 Grid에서 row를 선택 후 Drag하여 하단의 TextArea에 Drop하면 Drag한 정보가 표시된다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleDragDrop.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 그리드 drag & drop
        *  @FileName 	SampleDragDrop.xfdl
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
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
          /**
        * TextArea00_ondrop : 텍스트에어리어에 데이터 드랍시 이벤트
        * @param  : obj		   - [object]TextArea
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.TextArea00_ondrop = function(obj,e)
        {
        	var str = this.TextArea00.value;
        	if( this.gfnIsNull(str) ) {
        		str = "드래그 Target >> " + e.dragdata;
        	}else{
        		str += "\n드래그 Target >> " + e.dragdata;
        	}
        	this.TextArea00.set_value(str);
        };

        this.grdTop_ondrag = function(obj,e)
        {
        	var arrData = [];
        	arrData[0] = obj.getSelectedRows();
        	arrData[1] = obj.name;
        	arrData[2] = obj;

        	e.dragdata = arrData;

        	return true;
        };

        this.Grid00_ondrop = function(obj,e)
        {
        	var sSelectRows = e.dragdata[0];
        	var objDragName = e.dragdata[1];
        	var objDragGrid = e.dragdata[2];
        	var objDragDs = objDragGrid.getBindDataset();
        	var objDs = obj.getBindDataset();

        	if (objDragName == obj.name)
        	{
        		if (obj.selecttype == "row") objDs.moveRow(sSelectRows, e.row);
         	}
        	else
        	{
        		this.fnSetMoveData(objDragDs, objDs, sSelectRows, e.row);
         	}
        };

        /**
         * @class   그리드 Drag & Drop 이벤트 내부함수<br>
        	        데이터셋간 데이터이동
         * @param {Object}   objFromDs - 드래그 데이터셋
         * @param {Object}   objToDs - 드롭 데이터셋
         * @param {Number} FromRow - 시작로우
         * @param {Number} nToRow - 종료로우
         * @param {String}    [sMoveType] - 무브타입
         * @return  N/A
         * @example
         * this.fnSetMoveData(this.dsList, this.dsMain, 1, 2, "I");
         */
        this.fnSetMoveData = function(objFromDs, objToDs, nFromRow, nToRow, sMoveType)
        {
        	if (this.gfnIsNull(nToRow)) nToRow = -1;
        	if (this.gfnIsNull(sMoveType)) sMoveType = "I";
        	var arrFromRow;
        	var nRow;
        	var nInsertRow = nToRow;

        	if (nFromRow == -1) return;

        	if (typeof(nFromRow) == "number")
        	{
        		arrFromRow = [];
        		arrFromRow.push(nFromRow);
        	}
        	else
        	{
        		arrFromRow = nFromRow;
        	}

        	for (var i=0; i<arrFromRow.length; i++)
        	{
        		if (nToRow > -1)
        		{
        			if (sMoveType == "I") nRow = objToDs.insertRow(nInsertRow);
        			else nRow = objToDs.addRow();
        		}
        		else
        		{
        			nRow = objToDs.addRow();
        		}
        		objToDs.copyRow(nRow, objFromDs, arrFromRow[i]);

        		nInsertRow++;
        	}

        	for (var i=arrFromRow.length-1; i>-1; i--)
        	{
        		objFromDs.deleteRow(arrFromRow[i]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdTop.addEventHandler("ondrag",this.grdTop_ondrag,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.TextArea00.addEventHandler("ondrop",this.TextArea00_ondrop,this);
        };
        this.loadIncludeScript("SampleDragDrop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
