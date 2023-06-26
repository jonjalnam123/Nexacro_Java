(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_File");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"file_id\" type=\"STRING\" size=\"256\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/><Column id=\"file_size\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"file_id\" type=\"STRING\" size=\"256\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/><Column id=\"file_size\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","156","96","909","364",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("checkbox,!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"282\"/><Column size=\"282\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"63\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"file_id\"/><Cell col=\"1\" text=\"file_name\"/><Cell col=\"2\" text=\"file_type\"/><Cell col=\"3\" text=\"file_size\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:file_id\"/><Cell col=\"1\" text=\"bind:file_name\"/><Cell col=\"2\" text=\"bind:file_type\"/><Cell col=\"3\" text=\"bind:file_size\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" text=\"삭제\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","164","37","172","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","341","37","172","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","518","37","172","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","695","37","172","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 내려받기");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00","872","37","172","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택 내려받기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_File.xfdl", function() {
        this.Form_File_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };



        this.btn00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("File Select", 3, "%MYDOCUMENT%"); //파일 선택 버튼 눌렀을때 바로 열리는 경로
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFileList = e.virtualfiles;

        	for(var i=0; i<objFileList.length; i++)
        	{
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".")+1); //마지막 점 이후의 값을 가져옴
        			this.FileUpTransfer00.addFile(sFileName,objFileList[i]);

        			var nRow = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow, "file_id", sFileName);
        			this.dsFile.setColumn(nRow, "file_name", sFileName);
        			this.dsFile.setColumn(nRow, "file_type", sFileType);
        		}
        	}
        };

        this.btn01_onclick = function(obj,e)
        {
        	var sUrl = "SvcUrl::nexa/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userPath", "nexa_edu"); //파일이 업로드될 경로 지정
        	this.FileUpTransfer00.upload(sUrl);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	for(var i=0; i<objDs.rowcount; i++)
        	{
        		var nRow = this.dsFile.findRow("file_name", objDs.getColumn(i, "file_name"));
        		this.dsFile.setColumn(nRow, "file_id", objDs.getColumn(i, "file_id"));
        		this.dsFile.setColumn(nRow, "file_name", objDs.getColumn(i, "file_name"));
        		this.dsFile.setColumn(nRow, "file_size", objDs.getColumn(i, "file_size"));
        	}
        };

        this.grd00_ondrop = function(obj,e)
        {

        	var objFileList = e.filelist;

        	for(var i=0; i<objFileList.length; i++)
        	{
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".")+1); //마지막 점 이후의 값을 가져옴
        			this.FileUpTransfer00.addFile(sFileName,objFileList[i]);

        			var nRow = this.dsFile.addRow();
        			this.dsFile.setColumn(nRow, "file_id", sFileName);
        			this.dsFile.setColumn(nRow, "file_name", sFileName);
        			this.dsFile.setColumn(nRow, "file_type", sFileType);
        		}
        	}
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.gfnTransaction("svcFileList"
        		,"nexa/getFileList.do"
        		,""
        		,"dsFile=dsFile"
        		,"userPath='nexa_edu'"
        		,"fnCallback")
        };

        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.col == 5) {
        		//삭제
        		var sFileName = this.dsFile.getColumn(e.row, "file_id");

        		this.gfnTransaction("svcFileDelete"
        			,"nexa/deleteFile.do"
        			,""
        			,""
        			,"fileid=" + nexacro.wrapQuote(sFileName)
        			,"fnCallback")
        	}
        	else if(e.col == 6) {
        		//다운
        		var sFileId = this.dsFile.getColumn(e.row, "file_id");

        		var sUrl = "SvcUrl::nexa/downloadFile.do";
        		this.FileDownTransfer00.setPostData("downFileId", sFileId); //"a.text,b.text,ctxt"
        		this.FileDownTransfer00.set_downloadfilename(sFileId); //NRE 에서만 작동하는데 다운로드 누르면 파일명 확장자까지 입력되어 있는 것
        		this.FileDownTransfer00.download(sUrl);
        	}
        };

        this.fvDeleteFileName = "";
        this.fnCallback = function (svcId, errCd, errMsg) {
        	if(svcId == "svcFileDelete") {
        		var nRow = this.dsFile.findRow("file_id", this.fvDeleteFileName);
        		this.dsFile.deleteRow(nRow);
        	}
        }
        //전체 다운로드
        this.btn03_onclick = function(obj,e)
        {
        	var sUrl = "SvcUrl::nexa/downloadFile.do";
        	this.FileDownTransfer00.setPostData("downFileId", ""); //"a.text,b.text,ctxt"
        	this.FileDownTransfer00.setPostData("downFileDs",encodeURIComponent(encodeURIComponent(this.dsFile.saveXML())));
        	this.FileDownTransfer00.set_downloadfilename("첨부파일.zip"); //NRE 에서만 작동하는데 다운로드 누르면 파일명 확장자까지 입력되어 있는 것
        	this.FileDownTransfer00.download(sUrl);
        };



        /*this.btn03_00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        var nCnt = this.dsFile.getCaseCount("file_chk  === '1'");
        if(nCnt ==0 ) {
        alert("선택된 파일이 없습니다.");
        }
        else if(nCnt ==1) {
        //단건 다운로드
        }
        else {
        for(var i=0; i<this.dsFile.rowcount; i++)
        {
        if(this.dsFile.getColumn(i, "file_chk") == "1") {
        var nRow = this.dsTemp.addRow();
        this.dsTemp.copyRow(nRow, this.dsFile, i);
        }
        }
        //다건 다운로드
        }
        };*/

        this.btn03_00_onclick = function(obj,e)
        {
        	var arrRow = this.dsFile.extractRows("gridcmmcheck == '1'"); //[1,3,5]
        	trace("=============" + this.dsFile.saveXML());
        	if(arrRow.length == 0) {
        		alert("선택하세요");
        	}
        	else if(arrRow.length ==1) {
        		//단건다운
        		var sFileId = this.dsFile.getColumn(e.row, "file_id");

        		var sUrl = "SvcUrl::nexa/downloadFile.do";
        		this.FileDownTransfer00.setPostData("downFileId", sFileId); //"a.text,b.text,ctxt"
        		this.FileDownTransfer00.set_downloadfilename(sFileId); //NRE 에서만 작동하는데 다운로드 누르면 파일명 확장자까지 입력되어 있는 것
        		this.FileDownTransfer00.download(sUrl);
        	}
        	else {
        		this.dsTemp.clearData(); //클리어데이터가 데이터만 지워주는 것
        		for(var i=0; i<arrRow.length; i++){
        			var nRow = this.dsTemp.addRow();
        			this.dsTemp.copyRow(nRow, this.dsFile, arrRow[i]);
        		}
        		var sUrl = "SvcUrl::nexa/downloadFile.do";
        		this.FileDownTransfer00.setPostData("downFileId", ""); //"a.text,b.text,ctxt"
        		this.FileDownTransfer00.setPostData("downFileDs",encodeURIComponent(encodeURIComponent(this.dsTemp.saveXML())));
        		this.FileDownTransfer00.set_downloadfilename("첨부파일.zip"); //NRE 에서만 작동하는데 다운로드 누르면 파일명 확장자까지 입력되어 있는 것
        		this.FileDownTransfer00.download(sUrl);


        	}
        };

        this.FileDownTransfer00_onsuccess = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_File_onload,this);
            this.grd00.addEventHandler("ondrop",this.grd00_ondrop,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn03_00.addEventHandler("onclick",this.btn03_00_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("Form_File.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
