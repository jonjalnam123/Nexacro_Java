(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTabMoveSample");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","10","60","380","370",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("사이즈가다른 버튼");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Tabpage3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("Tabpage4");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("stTabMove","465","65","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#333333");
            obj.set_background("linear-gradient(to top, #fcfcfc, #fafafa)");
            obj.set_border("1px solid #c7c7c7");
            obj.set_padding("6px 10px 6px 10px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

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
        this.registerScript("frmTabMoveSample.xfdl", function() {
        //Drag&Drop 정보를 관리할 오브젝트
        this.objDargChecker;

        this.frmTabMoveSample_onload = function(obj,e)
        {
        	//Drag 이벤트 발생시 전달할 정보 오브젝트로 만들기
        	this.objDargChecker = 	{
        							"x" : 0, "y" : 0,
        							"dragFlag" : false,
        							"targetObj" : null,
        							"dragMoveComp" : this.stTabMove,
        							"tabIdx" : -1
        						};
        };

        this.Tab00_onlbuttondown = function(obj,e)
        {
        	var nTabIdx;
        	var objDrag = this.objDargChecker;

        	//Drag 여부값 설정(드래그 시작)
        	objDrag.dragFlag = true;

        	//클릭된 좌표값 설정
        	objDrag.x = e.canvasx;
        	objDrag.y = e.canvasy;

        	//클릭된 컴포넌트 설정
        	objDrag.targetObj = obj;

        	nTabIdx = obj.getIndex(objDrag.x, objDrag.y);

        	if(nTabIdx>-1)
        	{
        		objDrag.tabIdx = nTabIdx;
        		objDrag.dragMoveComp.setOffsetHeight(obj.tabpages[nTabIdx]._tabbuttonitem.getOffsetHeight());
        		objDrag.dragMoveComp.setOffsetWidth(obj.tabpages[nTabIdx]._tabbuttonitem.getOffsetWidth());
        		objDrag.dragMoveComp.set_text(obj.tabpages[nTabIdx].text);
        		objDrag.dragMoveComp.set_visible(true);
        	}
        };

        this.Tab00_onlbuttonup = function(obj,e)
        {
        	var nDragTabIdx;
        	var nDropTabIdx;
        	var objDrag = this.objDargChecker;

        	//Drag 여부값 설정(드래그 종료)
        	objDrag.dragFlag = false;
        	objDrag.dragMoveComp.set_visible(false);

        	if(objDrag.tabIdx>-1)
        	{
        		nDragTabIdx = objDrag.tabIdx;
                nDropTabIdx = obj.getIndex(e.canvasx, e.canvasy);

        		if(nDragTabIdx>-1&&nDropTabIdx>-1&&nDragTabIdx!=nDropTabIdx)
        		{
        			obj.moveTabpage(nDragTabIdx, nDropTabIdx);
        		}
        	}
        };

        this.frmTabMoveSample_onmousemove = function(obj,e)
        {
        	var objDrag = this.objDargChecker;

        	//Drag 여부값이 시작 상태일 경우
        	if(objDrag.dragFlag==true)
        	{
        		objDrag.dragMoveComp.move(e.clientx+10, e.clienty+10);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onmousemove",this.frmTabMoveSample_onmousemove,this);
            this.addEventHandler("onload",this.frmTabMoveSample_onload,this);
            this.Tab00.addEventHandler("onlbuttondown",this.Tab00_onlbuttondown,this);
            this.Tab00.addEventHandler("onlbuttonup",this.Tab00_onlbuttonup,this);
        };
        this.loadIncludeScript("frmTabMoveSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
