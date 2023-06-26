(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workflow");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLines", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"fromPosition\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"toPosition\" type=\"STRING\" size=\"256\"/><Column id=\"startCap\" type=\"STRING\" size=\"256\"/><Column id=\"endCap\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"from\">01</Col><Col id=\"to\">02</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col><Col id=\"startCap\">true</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"from\">02</Col><Col id=\"to\">03</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col><Col id=\"startCap\">true</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"from\">03</Col><Col id=\"to\">04</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">04</Col><Col id=\"from\">03</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">09</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">05</Col><Col id=\"from\">04</Col><Col id=\"to\">05</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">06</Col><Col id=\"to\">07</Col><Col id=\"from\">04</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">07</Col><Col id=\"from\">05</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">06</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">08</Col><Col id=\"from\">06</Col><Col id=\"fromPosition\">right</Col><Col id=\"to\">07</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">09</Col><Col id=\"from\">07</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">08</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"from\">08</Col><Col id=\"to\">09</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">11</Col><Col id=\"from\">09</Col><Col id=\"to\">10</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">12</Col><Col id=\"from\">09</Col><Col id=\"to\">11</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">13</Col><Col id=\"from\">09</Col><Col id=\"to\">12</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">14</Col><Col id=\"from\">09</Col><Col id=\"to\">13</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">15</Col><Col id=\"from\">09</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">14</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">16</Col><Col id=\"to\">23</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"from\">09</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">17</Col><Col id=\"from\">14</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">15</Col><Col id=\"toPosition\">top</Col></Row><Row><Col id=\"id\">18</Col><Col id=\"from\">15</Col><Col id=\"to\">16</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">19</Col><Col id=\"from\">15</Col><Col id=\"to\">19</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">20</Col><Col id=\"from\">16</Col><Col id=\"to\">17</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">21</Col><Col id=\"from\">16</Col><Col id=\"to\">18</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">22</Col><Col id=\"from\">17</Col><Col id=\"to\">18</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">23</Col><Col id=\"from\">19</Col><Col id=\"to\">20</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">24</Col><Col id=\"from\">19</Col><Col id=\"to\">21</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">25</Col><Col id=\"from\">19</Col><Col id=\"to\">22</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">26</Col><Col id=\"from\">23</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">24</Col><Col id=\"toPosition\">top</Col></Row><Row><Col id=\"id\">27</Col><Col id=\"from\">24</Col><Col id=\"to\">25</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">28</Col><Col id=\"from\">24</Col><Col id=\"to\">26</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">29</Col><Col id=\"from\">25</Col><Col id=\"to\">27</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">30</Col><Col id=\"from\">26</Col><Col id=\"to\">28</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">31</Col><Col id=\"from\">28</Col><Col id=\"to\">29</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">32</Col><Col id=\"from\">28</Col><Col id=\"to\">30</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItems", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"x\" type=\"STRING\" size=\"256\"/><Column id=\"y\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"type\">type01</Col><Col id=\"title\">고객내점</Col><Col id=\"x\">400</Col><Col id=\"y\">0</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"type\">type01</Col><Col id=\"title\">투자성향파악</Col><Col id=\"x\">600</Col><Col id=\"y\">0</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"type\">type02</Col><Col id=\"title\">기존고객유무</Col><Col id=\"x\">600</Col><Col id=\"y\">50</Col></Row><Row><Col id=\"id\">04</Col><Col id=\"type\">type02</Col><Col id=\"title\">당행신규고객</Col><Col id=\"x\">400</Col><Col id=\"y\">50</Col></Row><Row><Col id=\"id\">05</Col><Col id=\"title\">신규고객등록</Col><Col id=\"type\">type01</Col><Col id=\"y\">100</Col><Col id=\"x\">200</Col></Row><Row><Col id=\"id\">06</Col><Col id=\"title\">입출금통장개설</Col><Col id=\"type\">type01</Col><Col id=\"x\">200</Col><Col id=\"y\">150</Col></Row><Row><Col id=\"id\">07</Col><Col id=\"title\">상품상담</Col><Col id=\"type\">type01</Col><Col id=\"x\">400</Col><Col id=\"y\">150</Col></Row><Row><Col id=\"id\">08</Col><Col id=\"title\">상품가입</Col><Col id=\"type\">type01</Col><Col id=\"x\">400</Col><Col id=\"y\">200</Col></Row><Row><Col id=\"id\">09</Col><Col id=\"type\">type02</Col><Col id=\"title\">조건변경여부</Col><Col id=\"x\">600</Col><Col id=\"y\">200</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"title\">전입신규</Col><Col id=\"type\">type01</Col><Col id=\"x\">800</Col><Col id=\"y\">100</Col></Row><Row><Col id=\"id\">11</Col><Col id=\"title\">(연금)펀드전환</Col><Col id=\"type\">type01</Col><Col id=\"y\">150</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">12</Col><Col id=\"title\">명의변경</Col><Col id=\"type\">type01</Col><Col id=\"y\">200</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">13</Col><Col id=\"title\">사모펀드예약</Col><Col id=\"type\">type01</Col><Col id=\"y\">250</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">14</Col><Col id=\"type\">type01</Col><Col id=\"title\">입금</Col><Col id=\"x\">400</Col><Col id=\"y\">350</Col></Row><Row><Col id=\"id\">15</Col><Col id=\"type\">type02</Col><Col id=\"title\">거래취소여부</Col><Col id=\"x\">400</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">16</Col><Col id=\"title\">기준시간전</Col><Col id=\"type\">type02</Col><Col id=\"x\">200</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">17</Col><Col id=\"title\">본부승인신청</Col><Col id=\"type\">type01</Col><Col id=\"x\">0</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">18</Col><Col id=\"title\">거래취소</Col><Col id=\"type\">type01</Col><Col id=\"y\">450</Col><Col id=\"x\">200</Col></Row><Row><Col id=\"id\">19</Col><Col id=\"title\">펀드유형</Col><Col id=\"type\">type02</Col><Col id=\"y\">500</Col><Col id=\"x\">400</Col></Row><Row><Col id=\"id\">20</Col><Col id=\"type\">type01</Col><Col id=\"title\">다계좌입금</Col><Col id=\"x\">200</Col><Col id=\"y\">550</Col></Row><Row><Col id=\"id\">21</Col><Col id=\"type\">type01</Col><Col id=\"title\">MMF 입금</Col><Col id=\"x\">200</Col><Col id=\"y\">600</Col></Row><Row><Col id=\"id\">22</Col><Col id=\"type\">type01</Col><Col id=\"title\">일반펀드 입금</Col><Col id=\"x\">200</Col><Col id=\"y\">650</Col></Row><Row><Col id=\"id\">23</Col><Col id=\"type\">type01</Col><Col id=\"title\">출금/해지</Col><Col id=\"x\">600</Col><Col id=\"y\">350</Col></Row><Row><Col id=\"id\">24</Col><Col id=\"type\">type02</Col><Col id=\"title\">거래취소여부</Col><Col id=\"x\">600</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">25</Col><Col id=\"type\">type02</Col><Col id=\"title\">기준시간전</Col><Col id=\"x\">800</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">26</Col><Col id=\"type\">type01</Col><Col id=\"title\">인출가능금액조회</Col><Col id=\"x\">600</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">27</Col><Col id=\"type\">type01</Col><Col id=\"title\">거래취소</Col><Col id=\"x\">800</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">28</Col><Col id=\"type\">type02</Col><Col id=\"title\">펀드유형</Col><Col id=\"x\">600</Col><Col id=\"y\">500</Col></Row><Row><Col id=\"id\">29</Col><Col id=\"type\">type01</Col><Col id=\"title\">출금해지(당일,별단)</Col><Col id=\"x\">800</Col><Col id=\"y\">500</Col></Row><Row><Col id=\"id\">30</Col><Col id=\"type\">type01</Col><Col id=\"title\">일반출금해지</Col><Col id=\"x\">800</Col><Col id=\"y\">550</Col></Row><Row><Col id=\"id\">31</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">310</Col><Col id=\"y\">40</Col></Row><Row><Col id=\"id\">32</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">410</Col><Col id=\"y\">80</Col></Row><Row><Col id=\"id\">33</Col><Col id=\"type\">type03</Col><Col id=\"title\">신규</Col><Col id=\"x\">500</Col><Col id=\"y\">40</Col></Row><Row><Col id=\"id\">34</Col><Col id=\"type\">type03</Col><Col id=\"title\">기존</Col><Col id=\"x\">620</Col><Col id=\"y\">80</Col></Row><Row><Col id=\"id\">35</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">675</Col><Col id=\"y\">190</Col></Row><Row><Col id=\"id\">36</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">610</Col><Col id=\"y\">230</Col></Row><Row><Col id=\"id\">37</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 이후&#10;   &#10;-업무마감전</Col><Col id=\"x\">50</Col><Col id=\"y\">380</Col></Row><Row><Col id=\"id\">38</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 전</Col><Col id=\"x\">250</Col><Col id=\"y\">425</Col></Row><Row><Col id=\"id\">39</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">310</Col><Col id=\"y\">390</Col></Row><Row><Col id=\"id\">40</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">410</Col><Col id=\"y\">430</Col></Row><Row><Col id=\"id\">41</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">670</Col><Col id=\"y\">390</Col></Row><Row><Col id=\"id\">42</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">610</Col><Col id=\"y\">425</Col></Row><Row><Col id=\"id\">43</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 이후:&#10; &#10;취소불가</Col><Col id=\"x\">920</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">44</Col><Col id=\"type\">type03</Col><Col id=\"title\">기준시간 전</Col><Col id=\"x\">850</Col><Col id=\"y\">425</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Graphics("Graphics00","10","60","940","630",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","865","10","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("실행");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Workflow.xfdl","AAA::lib_workflow.xjs");
        this.registerScript("Workflow.xfdl", function() {
        /**
        *  @MenuPath    techtip > workflow
        *  techtip Graphics Component를 활용한 워크플로우
        *  @FileName	workflow.xfdl
        *******************************************************************************
        *  2020.02.18		daewon			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("AAA::lib_workflow.xjs"); /*include "AAA::lib_workflow.xjs"*/; //해당 폼에서만 사용 할때 인클루드 사용 하면 좋다.

        /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/
        //Drag&Drop 정보를 관리할 오브젝트
        this.objDargChecker;

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
         /**
         * @description 화면 onload시 처리내역
        */
         this.workflow_onload = function(obj,e)
        {

        	//Drag 이벤트 발생시 전달할 정보 오브젝트로 만들기
        	this.objDargChecker = 	{
        							"x" : 0, "y" : 0,
        							"dragFlag" : false,
        							"targetObj" : null,
        							"targetReferenceObj" : null
        						};
        };

         /**
         * @description 화면 onmoucemove시 처리내역
        */
        this.workflow_onmousemove = function(obj,e)
        {
        	var objDrag = this.objDargChecker;

        	//Drag 여부값이 시작 상태일 경우
        	if(objDrag.dragFlag==true)
        	{
        		var nX1, nX2, nY1, nY2;
        		var objGraphics;
        		var objPath;
        		var objSelectPath;
        		var arrId;

        		//Drag가 발생한 오브젝트 가져오기
        		objGraphics = objDrag.targetObj;
        		objPath = objDrag.targetReferenceObj;
        		objSelectPath = objGraphics.selectPath;

        		//Drag 시작 X/Y좌표
        		nX1 = objDrag.x;
        		nY1 = objDrag.y;

        		//현재 X/Y좌표
        		nX2 = e.screenx;
        		nY2 = e.screeny;

        		this.gfnMoveWorkFlow(objGraphics, nX1, nX2, nY1, nY2);
        	}
        };

        /**************************************************************************
         * CALLBACK 콜백 처리부분(Transaction)
         **************************************************************************/

        /**************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         **************************************************************************/

         /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/

         /**
         * @description Graphics Component onlbuttondown 시 처리내역
        */
        this.Graphics00_onlbuttondown = function(obj,e)
        {
        	var objDrag = this.objDargChecker;
        	var objPath = obj.hitTest(e.canvasx, e.canvasy);
        	var arrId;
        	var sTargetId;
        	var objTargetPath;

        	//Drag 여부값 설정(드래그 시작)
        	objDrag.dragFlag = true;

        	//클릭된 좌표값 설정
        	objDrag.x = e.screenx;
        	objDrag.y = e.screeny;

        	//클릭된 컴포넌트 설정
        	objDrag.targetObj = obj;
        	objDrag.targetReferenceObj = objPath;

        	//조직도 오브젝트들을 관리하는 그룹 오브젝트 가져오기
        	objBoard = obj.getObjectByID("board");

        	//그룹오브젝트가 존재할 경우
        	if(objBoard)
        	{
        		//현재 x, y좌표값을 orgX, orgY에 저장
        		//DragMove시 기준좌표로 사용하기 위함
        		objBoard.orgX = objBoard.x;
        		objBoard.orgY = objBoard.y;
        	}
        };

        /**
         * @description Graphics Component onlbuttonup 시 처리내역
        */
        this.Graphics00_onlbuttonup = function(obj,e)
        {
        	//Drag 여부값 설정(드래그 종료)
        	this.objDargChecker.dragFlag = false;
        };

        /**
         * @description 실행 버튼 onclick 시 처리내역
        */
        this.Button00_onclick = function(obj,e)
        {
        	var objConfig = {
        						//노드 데이터셋
        						"itemsDs" : this.dsItems,
        						//연결선 데이터셋
        						"linesDs" : this.dsLines,

        						//노드 포멧 정보 01
        						"type01" : {
        										"x" : 0, "y" : 0,
        										"width" : 140, "height" : 30,
        										"fillstyle" : "#8547FE",
        										title : {
        											"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
        											"color" : "#ffffff",
        											"textAlign" : "center",
        											"verticalAlign" : "middle",
        										}
        									},

        						//노드 포멧 정보 02
        						"type02" : {
        										"x" : 0, "y" : 0,
        										"width" : 140, "height" : 30,
        										"radiusx" : 70, "radiusy" : 15,
        										"fillstyle" : "#8547FE",
        										title : {
        											"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
        											"color" : "#ffffff",
        											"textAlign" : "center",
        											"verticalAlign" : "middle",
        										}
        									},

        						//노드 포멧 정보 03
        						"type03" : {
        										"x" : 0, "y" : 0,
        										"width" : 140, "height" : 30,
        										title : {
        											"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
        											"color" : "#000000",
        											"textAlign" : "center",
        											"verticalAlign" : "middle",
        										}
        									},
        						//연결선 정보
        						"line" : {
        										"fillstyle" : "#8547FE",
        										"strokepen" : "1px solid #8547FE",
        										"capwidth" : 10, "capheight" : 10
        									}
        					}

        	//워크플로우 그리기 함수 호출
        	this.gfnDrawWorkFlow(this.Graphics00, objConfig);
        };

        /**************************************************************************
         * 사용자 FUNCTION 영역
        **************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onmousemove",this.workflow_onmousemove,this);
            this.addEventHandler("onload",this.workflow_onload,this);
            this.Graphics00.addEventHandler("onlbuttondown",this.Graphics00_onlbuttondown,this);
            this.Graphics00.addEventHandler("onlbuttonup",this.Graphics00_onlbuttonup,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Workflow.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
