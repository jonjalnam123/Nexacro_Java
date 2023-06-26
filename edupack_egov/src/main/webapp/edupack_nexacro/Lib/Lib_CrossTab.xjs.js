//XJS=Lib_CrossTab.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  Necacro EduPack
        *  @MenuPath
        *  @FileName 	libPivotGrid.xjs
        *  @Creator 	Education
        *  @CreateDate 	2018.03.05
        *  @Desction    include 방식의 공통 script 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.03.05     		Education 	           	최초 생성
        *******************************************************************************
        */

        // 대상 Grid 속성값
        this.arrGridProp = [
        					  "cssclass", "autosizecol", "autosizerow", "controlautosizingtype", "displaytype", "edittype", "expr", "suppress", "suppressalign", "text"
        					, "tooltiptext", "tooltiptype", "locale", "subcell", "row", "col", "rowspan", "colspan", "background", "border", "borderRadius" , "color"		 		     , "cursor"	   , "edge"		 	 , "font"
        					, "letterSpacing", "opacity", "padding", "textAlign", "textDecoration", "verticalAlign", "wordSpacing"	 , "wordWrap"
        					, "accessibilityaction", "accessibilitydesclevel" , "accessibilitydescription", "accessibilityenable"
        					, "accessibilitylabel", "accessibilityrole", "calendarautoselect", "calendarbuttonsize", "calendardateformat", "calendardaysize"
        					, "calendardisplaynulltext", "calendardisplaynulltype", "calendareditformat", "calendarheadformat", "calendarheadheight", "calendarpopupsize"
        					, "calendarpopuptype", "calendarshowmonthspin", "calendarshowyearspin", "calendartype", "calendarusetrailingday", "calendarweekformat"
        					, "checkboxsize", "comboautoselect", "combobuttonsize", "combocodecol", "combodatacol", "combodataset", "combodisplaynulltext", "combodisplaynulltype"
        					, "combodisplayrowcount", "comboimemode", "comboitemheight", "combopopupsize", "combopopuptype", "comboscrollbarsize", "combotype"
        					, "editautoselect", "editimemode", "editinputfilter", "editinputmode", "editinputtype", "editmaxlength"
        					, "expandchar", "expandimage", "expandshow", "expandsize", "imagestretch", "maskeditautoselect", "maskeditclipmode"
        					, "maskeditformat", "maskeditlimitbymask", "maskeditmaskchar", "maskedittrimtype", "maskedittype"
        					, "progressbarblockgap", "progressbarblocksize", "progressbardirection", "progressbarsmooth"
        					, "textareaautoselect", "textareaimemode", "textareainputfilter", "textareainputmode", "textareainputtype", "textareamaxlength"
        					, "textareascrollbarsize", "textareascrollbartype", "textareascrolltype"
        					, "treecheck", "treelevel", "treestartlevel", "treestate"
        				]

        /**
         * @class Grid 초기화
         * @param {Grid} oGrd - 대상 Grid
         * @return N/A
         * @example
         * this.gfnInitGrid(this.grdMain);
         */
        this.gfnInitGrid = function(oGrd)
        {
         	if (!oGrd._orgformats)
         		 oGrd._orgformats = oGrd.formats;
         	if (!oGrd._orgBindDs )
         		 oGrd._orgBindDs  = oGrd.binddataset;

        	oGrd.set_formats(oGrd._orgformats);	// Format 초기화

        	oGrd.set_enableevent (false);
        	oGrd.set_enableredraw(false);

        	this.gfnSaveGridForamt(this, oGrd);

        	oGrd.set_binddataset("");			// Dataset 바인딩 해제
        }

        /**
         * @class Grid CrossTab 적용
         * @param {Grid} oGrd - 대상 Grid
         * @return N/A
         * @example
         * this.gfnReCalcPivot(this.grdMain);
        */
        this.gfnReCalcPivot = function(oGrd)
        {
        	if (this.gfnIsNull(oGrd.groupkey))
        	{
        		trace("@@@@@ GroupKey[groupkey]를 설정하십시오...");
        		return;
        	}
        	if (this.gfnIsNull(oGrd.pivotkey))
        	{
        		trace("@@@@@ PivotKey[pivotkey]를 설정하십시오...");
        		return;
        	}

        	oGrd.groupkey = oGrd.groupkey.replace(/(\s*)/g,"");
        	oGrd.pivotkey = oGrd.pivotkey.replace(/(\s*)/g,"");

        	if (this.gfnIsNull(oGrd.groupsortkey))
        	{
        		oGrd.groupsortkey = oGrd.groupkey;
        	}
        	if (this.gfnIsNull(oGrd.pivotsortkey))
        	{
        		oGrd.pivotsortkey = oGrd.pivotkey;
        	}

        	oGrd.groupsortkey = oGrd.groupsortkey.replace(/(\s*)/g,"");
        	oGrd.pivotsortkey = oGrd.pivotsortkey.replace(/(\s*)/g,"");

        	var sgrp 	 = oGrd.groupkey.replace(/:/g,",");
        	var arrgroup = sgrp.split(/,/g);
        	var arrpivot = oGrd.pivotkey.split(/,/g);
        	var dspivot  = this.lookup("ds_pivot_" 	   + oGrd.name);
        	var dshead   = this.lookup("ds_pivothead_" + oGrd.name);

        	var orgds 	 = this.lookup(oGrd._orgBindDs);

        	orgds.addColumn("PVSEQ","string",5);

        	if (oGrd.mergeds)
        	{
        		var dsmerge = this.lookup(oGrd.mergeds);

        		if (!dsmerge)
        		{
        			trace("@@@@@ mergeds가 		존재하지 않습니다.");
        			return;
        		}
        		if (!oGrd.mergekey)
        		{
        			trace("@@@@@ mergekey가 	존재하지 않습니다.");
        			return;
        		}
        		if (!oGrd.mergecolumn)
        		{
        			trace("@@@@@ mergecolumn이 	존재하지 않습니다.");
        			return;
        		}

        		var colinfo = orgds.getColumnInfo(oGrd.mergekey);

        		if (!colinfo)
        		{
        			trace("@@@@@ mergeds를 설정할 경우 원본 Dataset과의 Key Column이 존재해야 합니다.");
        			return;
        		}

        		colinfo = dsmerge.getColumnInfo(oGrd.mergekey);

        		if (!colinfo)
        		{
        			trace("@@@@@ mergeds를 설정할 경우 원본 Dataset과의 Key Column이 존재해야 합니다.");
        			return;
        		}

        		if (oGrd.mergecolumn && oGrd.mergecolumn != "")
        		{
        			var arrmergecol = oGrd.mergecolumn.split(/,/g);

        			for (var i=0; i<arrmergecol.length; i++)
        			{
        				colinfo = dsmerge.getColumnInfo(arrmergecol[i]);

        				if (!colinfo)
        				{
        					trace("@@@@@ mergeds를 설정할 경우 merge Dataset에 mergecolumn이 존재하여야 합니다.");
        					return;
        				}
        			}
        		}
        	}

        	dspivot.clear();

        	if (orgds.getRowCount() == 0) return;

        	dspivot.set_enableevent(false);
        	dshead.set_enableevent(false);

        	if (this.gfnDsGroupColSetting(this,dspivot,orgds,oGrd) == false) return;

        	this.gfnDsPivotColSetting(this,dspivot,oGrd);

        	orgds.set_keystring("S:" + oGrd.groupsortkey.replace(/,/g,"+") + "+" + oGrd.pivotsortkey.replace(/,/g,"+"));

        	var arrfactor 		= oGrd.factorinfo.split(/,/g);
        	var arrfix 			= oGrd.fixinfo.split(/,/g);
        	var arrmergefix 	= oGrd.fixmergeinfo.split(/,/g);
        	var arrmergecol 	= oGrd.mergecolumn?oGrd.mergecolumn.split(/,/g):"";
        	var arrfactor 		= oGrd.factorinfo.split(/,/g);
        	var pre_pvseq 		= "";
        	var sCurrGroupVal 	= "";
        	var sPrevGroupVal 	= "";
        	var sCurrVal 		= "";
        	var sPrevVal 		= "";
        	var nRow 			=  0;

        	orgds.set_enableevent(false);
        	orgds.set_updatecontrol(false);

        	for (var i=0; i<orgds.getRowCount(); i++)
        	{
        		if (orgds.getRowLevel(i)>0) continue;

        		// 중복데이타는 1건만 처리
        		sCurrVal = "";
        		for (var j=0; j<arrgroup.length; j++)
        		{
        			sCurrVal += orgds.getColumn(i, arrgroup[j]);
        		}

        		sCurrGroupVal = sCurrVal;
        		sCurrVal += orgds.getColumn(i, "PVSEQ");

        		if (sCurrVal == sPrevVal) continue;

        		if (sCurrGroupVal == sPrevGroupVal)
        		{
        			// 기존 row
        			this.gfnCopyFactorRecord(dspivot,orgds,nRow,i,arrfactor);

        		}
        		else
        		{
        			// 추가
        			nRow = dspivot.addRow();
        			this.gfnCopyFixRecord(this,dspivot,orgds,nRow,i,oGrd);
        			this.gfnCopyFactorRecord(dspivot,orgds,nRow,i,arrfactor);
        		}

        		sPrevGroupVal = sCurrGroupVal;
        		sPrevVal 	  = sCurrVal;
        	}

        	orgds.set_keystring("");
        	orgds.set_enableevent(true);
        	orgds.set_updatecontrol(true);

        	this.gfnSetGridFormat(this,oGrd);

        	dspivot.set_enableevent(true);
        	dshead.set_enableevent(true);

        	orgds.deleteColumn("PVSEQ");

        	oGrd.set_enableevent(true);
        	oGrd.set_enableredraw(true);

        	oGrd.set_binddataset(dspivot);
        	oGrd.addEventHandler("onmousemove",this.gfnCrossGridOnmousemove,this);
        }

        // this.gfnGetPivotValue = function(oGrd, nCell)
        // {
        // 	var sText = oGrd.getCellProperty("body",nCell,"text");
        // 	if (sText.indexOf("bind:") < 0) return  "";
        //
        // 	var arrList = sText.split("_");
        // 	if (arrList.length == 0) return "";
        //
        // 	var sSeq = arrList[arrList.length-1];
        // 	if (this.gfnIsNull(sSeq)) return "";
        //
        // 	var dshead = this.lookup("ds_pivothead_" + oGrd.name);
        // 	var nRow   = dshead.findRow("cell",sSeq);
        // 	if (nRow < 0) return "";
        //
        // 	var sCol = this.gfnGetPivotColName(oGrd, nCell);
        //
        // 	var arrpivot = oGrd.pivotkey.split(/,/g);
        // 	var dsname   = this.lookup("ds_pivot_" + oGrd.name);
        //
        // 	for (var i=0;i<arrpivot.length;i++)
        // 	{
        // 		if (arrpivot[i] == sCol)
        // 		{
        // 			var sCol = "PCOL_" + i.toString().padLeft(3,'0') + "_VALUE";
        // 			return dshead.getColumn(nRow,sCol);
        // 		}
        // 	}
        //
        // 	return "";
        // }
        //
        // this.gfnGetPivotColName = function(oGrd, nCell)
        // {
        // 	var sText = oGrd.getCellProperty("body", nCell, "text");
        //
        // 	if (sText.indexOf("bind:") < 0) return  "";
        //
        // 	var nIdx = sText.lastIndexOf("_");
        //
        // 	return sText.substr(0,nIdx);
        // }

        /*********************************************** 내부함수 START ***********************************************/

        /**
         * @class 내부함수-Grid 최초 format 정보 저장
         * @param {Form} owner - Owner
         * @param {Grid} oGrd  - 대상 Grid
         * @return N/A
         * @example
         * this.gfnSaveGridForamt(this, this.grdMain);
        */
        this.gfnSaveGridForamt = function (owner, oGrd)
        {
        	oGrd.set_binddataset(oGrd._orgBindDs);

        	var dsname 	= "ds_gridinfo_" + oGrd.name;

        	var ds0 	= owner.lookup(dsname);

        	if (this.gfnIsNull(ds0))
        	{
        		ds0 = new Dataset;
        		owner.addChild(dsname , ds0);
        		ds0.set_name(dsname);
        	}

        	ds0.clear();
        	ds0.addColumn("seq"  , 	"int"	,  5);
        	ds0.addColumn("cell" ,	"int"	,  5);
        	ds0.addColumn("band" ,	"string", 10);
        	ds0.addColumn("fix"	 , 	"string", 10);
        	ds0.addColumn("nsize", 	"string", 10);
        	ds0.addColumn("style",	"string",255);

        	for (var i=0;i<owner.arrGridProp.length;i++)
        	{
        		ds0.addColumn(owner.arrGridProp[i],"string",20);
        	}

        	this.gfnGetGridInfo(owner,ds0,oGrd);

        	// Grid Binding용 dummy Dataset
        	dsname  = "ds_pivot_" + oGrd.name;

        	var ds1 = owner.lookup(dsname);
        	if (this.gfnIsNull(ds1))
        	{
        		ds1 = new Dataset;
        		owner.addChild(dsname , ds1);
        		ds1.set_name(dsname);
        	}
        	ds1.clear();

        	// Factor Head 정보를 담고 있는 Dataset
        	var arrpivot = oGrd.pivotkey.split(/,/g);

        	dsname = "ds_pivothead_" + oGrd.name;

        	var ds2 = owner.lookup(dsname);
        	if (this.gfnIsNull(ds2))
        	{
        		ds2 = new Dataset;
        		owner.addChild(dsname , ds2);
        		ds2.set_name(dsname);
        	}
        	ds2.clear();

        	for (var i=0; i<arrpivot.length; i++)
        	{
        		ds2.addColumn("PCOL_" + i.toString().padLeft(3,'0') + "_VALUE"	,"string",100);
        		ds2.addColumn("PCOL_" + i.toString().padLeft(3,'0') + "_CNT"	,"int"	 ,  5);
        		ds2.addColumn("PCOL_" + i.toString().padLeft(3,'0') + "_ROWCNT"	,"int"	 ,  5);	// 추후 - ROW MERGE시 사용
        	}

        	ds2.addColumn("cell","string",5);

        	ds0 = null;
        	ds1 = null;
        	ds2 = null;
        }

        /**
         * @class 내부함수-Grid 정보 저장
         * @param {Form   } owner	- owner
         * @param {Dataset} ds		- 대상데이터셋 "ds_gridinfo_" + oGrd.name;
         * @param {Grid	  } oGrd	- 대상 Grid
         * @return N/A
         * @example
         */
        this.gfnGetGridInfo = function(owner,ds,oGrd)
        {
        	ds.clearData();
        	ds.set_enableevent(false);

        	var nrow   = 0;

        	// columns
        	var nCount = oGrd.getFormatColCount();
        	var seq    = 0;

        	for (var i=0; i<nCount; i++)
        	{
        		seq++;
        		nrow = ds.addRow();
        		ds.setColumn(nrow,"band" , "columns"						  );
        		ds.setColumn(nrow,"fix"	 , oGrd.getFormatColProperty(i,"band"));
        		ds.setColumn(nrow,"nsize", oGrd.getFormatColProperty(i,"size"));
        		ds.setColumn(nrow,"cell" , i								  );
        		ds.setColumn(nrow,"seq"  , seq								  );
        	}

        	// rows
        	nCount = oGrd.getFormatRowCount();
        	for(var i=0;i<nCount;i++)
        	{
        		seq++;
        		nrow = ds.addRow();
        		ds.setColumn(nrow,"band" , "rows"							  );
        		ds.setColumn(nrow,"fix"	 , oGrd.getFormatRowProperty(i,"band"));
        		ds.setColumn(nrow,"nsize", oGrd.getFormatRowProperty(i,"size"));
        		ds.setColumn(nrow,"cell" , i								  );
        		ds.setColumn(nrow,"seq"  , seq								  );
        	}

        	var arrband = new Array();
        		arrband[0] = "Head";
        		arrband[1] = "Body";
        		arrband[2] = "Summary";

        	var sband = "";

        	for (var ii=0; ii<3; ii++)
        	{
        		sband  = arrband[ii];
        		nCount = oGrd.getCellCount(sband);

        		for (var i=0; i<nCount; i++)
        		{
        			seq++;
        			nrow = ds.addRow();
        			ds.setColumn(nrow,"band", sband	);
        			ds.setColumn(nrow,"cell", i		);
        			ds.setColumn(nrow,"seq"	, seq	);

        			// style이 정의 되지 않으니 object 로 넘어오네..
        			if (typeof oGrd.getCellProperty(sband,i,"style") == "object")
        				ds.setColumn(nrow,"style","");
        			else
        				ds.setColumn(nrow,"style",oGrd.getCellProperty(sband,i,"style"));

        			for (var j=0;j<owner.arrGridProp.length;j++)
        				 ds.setColumn(nrow,owner.arrGridProp[j],oGrd.getCellProperty(sband,i,owner.arrGridProp[j]));
        		}
        	}
        }

        /**
         * @class 내부함수
         * @param
         * @return N/A
         */
        this.gfnCopyFixRecord = function(owner,ds,orgds,dsrow,orgrow,oGrd)
        {
        	var dsmerge;
        	var skey = "";
        	var nRow =  0;

        	if (oGrd.mergeds)
        	{
        		dsmerge = owner.lookup(oGrd.mergeds);
        		skey 	= orgds.getColumn(orgrow,oGrd.mergekey);
        		nRow 	= dsmerge.findRow(oGrd.mergekey,skey);
        	}
        	var arrfix 		= oGrd.fixinfo.split(/,/g);
        	var arrmergefix = oGrd.fixmergeinfo.split(/,/g);
        	var arrmergecol = oGrd.mergecolumn?oGrd.mergecolumn.split(/,/g):"";

        	for (var i=0; i<arrfix.length; i++)
        	{
        		if (arrmergefix[i] == "C")
        		{
        			if (arrfix[i] == "svcNo" || arrfix[i] == "custOpnIntmSeq")
        				ds.setColumn(dsrow,arrfix[i],dsmerge.getSecureColumn(nRow,arrfix[i]));
        			else
        				ds.setColumn(dsrow,arrfix[i],dsmerge.getColumn(nRow,arrfix[i]));
         		}
        		else
        		{
        			if (arrfix[i] == "svcNo" || arrfix[i] == "custOpnIntmSeq")
        				ds.setColumn(dsrow,arrfix[i],orgds.getSecureColumn(orgrow,arrfix[i]));
        			else
        				ds.setColumn(dsrow,arrfix[i],orgds.getColumn(orgrow,arrfix[i]));
         		}
        	}
        }

        /**
         * @class 내부함수
         * @param
         * @return N/A
         */
        this.gfnCopyFactorRecord = function(ds,orgds,dsrow,orgrow,arrfactor)
        {
        	var seq = orgds.getColumn(orgrow,"PVSEQ");

        	for (var i=0;i<arrfactor.length;i++)
        	{
        		ds.setColumn(dsrow, arrfactor[i] + "_" + seq, orgds.getColumn(orgrow,arrfactor[i]));
        	}
        }

        /**
         * @class 내부함수-Grid에 재배치 할 Format 정보 생성
         * @param owner : form
         *		  ds 	: converting pivot dataset
         *		  orgds : binding original dataset
         *		  oGrd 	: Grid
         * @return N/A
         * @example
         */
        this.gfnSetGridFormat = function(owner,oGrd)
        {
        	var arrfactor 	= oGrd.factorinfo.split(/,/g);
        	var arrpivot  	= oGrd.pivotkey.split(/,/g);
        	var dshead 		= owner.lookup("ds_pivothead_" + oGrd.name);
        	var dsgridinfo 	= owner.lookup("ds_gridinfo_"  + oGrd.name);
        	var nColCnt 	= arrfactor.length * dshead.getRowCount();

        	dsgridinfo.filter("");
        	dsgridinfo.set_keystring("S:seq");

        	var sContents  = "";

        		sContents += '<Formats>\n';
        		sContents += '<Format id="default">\n';

        		sContents += '\t<Columns>\n';

        	dsgridinfo.filter('band=="columns" && fix!="right"');

        	// Columns : LEFT FIXED Column
        	for (var i=0;i<oGrd.nFixCnt;i++)
        	{
        		sContents += '\t\t<Column size="' + dsgridinfo.getColumn(i,"nsize") + '"'
        						      + ' band="' + dsgridinfo.getColumn(i,"fix"  ) + '"/>\n';
        	}
        	// Columns : FACTOR Column
        	for (var i=0; i<dshead.getRowCount(); i++)
        	{
        		for (var j=oGrd.nFixCnt; j<dsgridinfo.getRowCount(); j++)
        		sContents += '\t\t<Column size="' + dsgridinfo.getColumn(j,"nsize") + '"/>\n' ;
        	}
        	// Columns : RIGHT FIXED Column
        	dsgridinfo.filter('band=="columns" && fix=="right"');
        	for (var i=0; i<dsgridinfo.getRowCount(); i++)
        	{
        		sContents += '\t\t<Column size="' + dsgridinfo.getColumn(i,"nsize") + '"'
        						      + ' band="' + dsgridinfo.getColumn(i,"fix"  ) + '"/>\n' ;
        	}

        	sContents += '\t</Columns>\n';

        	// Rows
        	sContents += '\t<Rows>\n';

        	dsgridinfo.filter('band=="rows"');

        	for (var i=0; i<dsgridinfo.getRowCount(); i++)
        	{
        		sContents += '\t\t<Row size="' + dsgridinfo.getColumn(i,"nsize") + '"'
        						   + ' band="' + dsgridinfo.getColumn(i,"fix"  ) + '"/>\n';
        	}
        	sContents += '\t</Rows>\n';

        	// Head : LEFT FIXED Column
        	sContents += '\t<Band id="head">\n';

        	dsgridinfo.filter('band=="Head" && col<' + oGrd.nFixCnt);

        	for (var i=0; i<dsgridinfo.getRowCount(); i++)
        	sContents = sContents + this.gfnContentsRow(owner,oGrd,"H",dsgridinfo,i,dsgridinfo.getColumn(i,"col"),"");

        	dsgridinfo.filter("");

        	var nRightRow = dsgridinfo.findRowExpr('band=="columns" && fix=="right"');
        	var nRight 	  = 9999;
        	if(nRightRow >= 0) nRight = dsgridinfo.getColumn(nRightRow,"cell");
        	// factor 1개에 head 1개 있다는 제한

        	// Head : FACTOR Column
        	dsgridinfo.filter('band=="Head" && (col>=' + oGrd.nFixCnt + ' && col < ' + nRight + ')');

        	var headtext1  	= "";
        	var nFactorCol 	= nexacro.toNumber(dsgridinfo.getColumn(0,"col"));
        	var nPivotCol  	= nexacro.toNumber(dsgridinfo.getColumn(0,"col"));
        	var nStartCol 	= nexacro.toNumber(dsgridinfo.getColumn(0,"col"));
        	var sCol 		= "";
        	var sText 		= "";
        	var nStart 		=  0;
        	var nCount 		=  0;
        	var nCol 		=  0;

        	// FACTOR Column
        	var tmp = "";
        	for (var i=0; i<dshead.getRowCount(); i++)
        	{
        		for (var j=0; j<dsgridinfo.getRowCount(); j++)
        		{
        			if (dsgridinfo.getColumn(j,"text").indexOf("bind:")<0)
        			{
        				sText 	= dsgridinfo.getColumn(j,"text");
        				nCol 	= nFactorCol;
        				nFactorCol++;
        				nCount 	= 1;
        				nStart 	= 0;
        			}
        			else
        			{
        				sCol = dsgridinfo.getColumn(j,"text").replace("bind:","");
        				for (var k=0; k<arrpivot.length; k++)
        				{
        					if (arrpivot[k] == sCol)
        					{
        						sText  = dshead.getColumn(i,"PCOL_" +  k.toString().padLeft(3,'0') + "_VALUE");
        						nCount = dshead.getColumn(i,"PCOL_" +  k.toString().padLeft(3,'0') + "_CNT"	 );
        						break;
        					}
        				}
        				nCol = nPivotCol;
        			}
        			if (!this.gfnIsNull(nCount))
        				sContents = sContents + this.gfnContentsRow(owner,oGrd,"H",dsgridinfo,j,nCol,"",sText,nStart,nCount,arrfactor.length);
        		}

        		nPivotCol = nPivotCol + arrfactor.length;
        	}

        	// Head : RIGHT FIXED Column
        	dsgridinfo.filter('band=="Head" && col>=' + nRight);
        	nCol++;

        	var nFcol 	= dsgridinfo.getColumn(0,"col");
        	var nGap 	= 0;

        	for (var i=0; i<dsgridinfo.getRowCount(); i++)
        	{
        		nGap  = dsgridinfo.getColumn(i,"col") - nFcol;
        		nFcol = dsgridinfo.getColumn(i,"col");
        		nCol  = nCol + nGap;

        		sContents = sContents + this.gfnContentsRow(owner,oGrd,"H",dsgridinfo,i,nCol,"");
        	}

        	sContents += '\t</Band>\n';

        	// BODY : LEFT FIXED Column
        	sContents += '\t<Band id="body">\n';

        	dsgridinfo.filter('band=="Body" && col<' + oGrd.nFixCnt);

        	for (var i=0; i<dsgridinfo.getRowCount(); i++)
        		 sContents = sContents + this.gfnContentsRow(owner,oGrd,"H",dsgridinfo,i,dsgridinfo.getColumn(i,"col"),"");

        	// BODY : FACTOR Column
        	dsgridinfo.filter('band=="Body" && (col>=' + oGrd.nFixCnt + ' && col < ' + nRight + ')');

        	nFactorCol 	= nexacro.toNumber(dsgridinfo.getColumn(0,"col"));
        	nPivotCol  	= nexacro.toNumber(dsgridinfo.getColumn(0,"col"));
        	sCol 		= "";
        	sText 		= "";
        	nCol 		= 0;

        	var seq = "";
        	for (var i=0; i<dshead.getRowCount(); i++)
        	{
        		seq = dshead.getColumn(i,"cell");

        		for (var j=0; j<dsgridinfo.getRowCount(); j++)
        		{
        			nCol = nFactorCol;
        			nFactorCol++;

        			sContents = sContents + this.gfnContentsRow(owner,oGrd,"B",dsgridinfo,j,nCol,seq);
        		}
        	}

        	// BODY : RIGHT Column
        	dsgridinfo.filter('band=="Body" && col>=' + nRight);
        	nCol++;
        	nFcol = dsgridinfo.getColumn(0,"col");
        	nGap  = 0;

        	for (var i=0; i<dsgridinfo.getRowCount(); i++)
        	{
        		nGap  = dsgridinfo.getColumn(i,"col")-nFcol;
        		nFcol = dsgridinfo.getColumn(i,"col");
        		nCol  = nCol + nGap;

        		sContents = sContents + this.gfnContentsRow(owner,oGrd,"B",dsgridinfo,i,nCol,"");
        	}
        	sContents += '\t</Band>\n';

        	dsgridinfo.filter('band=="Summary" && col<' + oGrd.nFixCnt);

        	if (dsgridinfo.getRowCount()>0)
        	{
        		// SUMMARY : LEFT FIXED Column
        		sContents += '\t<Band id="summary">\n';

        		for (var i=0;i<dsgridinfo.getRowCount();i++)
        		sContents = sContents + this.gfnContentsRow(owner,oGrd,"S",dsgridinfo,i,dsgridinfo.getColumn(i,"col"),"");

        		// SUMMARY : FACTOR Column
        		dsgridinfo.filter('band=="Summary" && (col>=' + oGrd.nFixCnt + ' && col < ' + nRight + ')');

        		nFactorCol 	= nexacro.toNumber(dsgridinfo.getColumn(0,"col"));
        		nPivotCol  	= nexacro.toNumber(dsgridinfo.getColumn(0,"col"));
        		sCol 		= "";
        		sText 		= "";
        		nCol 		=  0;
        		seq 		= "";

        		for (var i=0;i<dshead.getRowCount();i++)
        		{
        			seq = dshead.getColumn(i,"cell");

        			for (var j=0;j<dsgridinfo.getRowCount();j++)
        			{
        				nCol = nFactorCol;
        				nFactorCol++;

        				sContents = sContents + this.gfnContentsRow(owner,oGrd,"S",dsgridinfo,j,nCol,seq);
        			}
        		}

        		// SUMMARY : RIGHT FIXED Column
        		dsgridinfo.filter('band=="Summary" && col>=' + nRight);
        		nCol++;
        		nFcol = dsgridinfo.getColumn(0,"col");
        		nGap  = 0;

        		for (var i=0; i<dsgridinfo.getRowCount(); i++)
        		{
        			nGap 	  = dsgridinfo.getColumn(i,"col") - nFcol;
        			nFcol 	  = dsgridinfo.getColumn(i,"col");
        			nCol 	  = nCol + nGap;
        			sContents = sContents + this.gfnContentsRow(owner,oGrd,"S",dsgridinfo,i,nCol,"");
        		}
        		sContents += '\t</Band>\n';
        	}
        	sContents += '\t</Format>\n';
        	sContents += '\t</Formats>\n';

        	oGrd.set_formats(sContents);

        	var dspivot = owner.lookup("ds_pivot_" + oGrd.name);
        		dspivot.rowposition = 0;

        	oGrd.binddataset = "ds_pivot_" + oGrd.name;
        	dspivot.set_keystring("S:" + nexacro.replaceAll(oGrd.groupsortkey, ",", "+"));

        	if (oGrd.summarykey)
        	dspivot.set_keystring("G:" + nexacro.replaceAll(oGrd.summarykey, ",", "+"));
        }

        /**
         * @class 내부함수-Fixed Column info setting
         * @param owner : form
         *		  ds 	: converting pivot dataset
         *		  orgds : binding original dataset
         *		  oGrd 	: Grid
         * @return N/A
         * @example
         */
        this.gfnDsGroupColSetting = function (owner,ds,orgds,oGrd)
        {
        	var dsname = owner.lookup("ds_gridinfo_" + oGrd.name);
        	var dsmerge;
        	var arrmergecol;

        	if (oGrd.mergeds)
        	{
        		dsmerge 	= owner.lookup(oGrd.mergeds);
        		arrmergecol = oGrd.mergecolumn?oGrd.mergecolumn.split(/,/g):"";
        	}

        	dsname.filter('band=="columns" && fix=="left"');
        	oGrd.nFixCnt = dsname.getRowCount();

        	if (oGrd.nFixCnt == 0) return false;

        	dsname.filter('band=="Body"');
        	dsname.set_keystring("S:cell");

        	oGrd.fixinfo 		= "";
        	oGrd.fixmergeinfo 	= "";

        	var colinfo,colid;

        	for (var i=0; i<oGrd.nFixCnt; i++)
        	{
        		colid = dsname.getColumn(i, "text");

        		if (colid.indexOf("bind:")>=0)
        			colid = colid.replace("bind:","");
        		else continue;

        		// seq 는 제외
        		if (colid == "seq") continue;

        		if (oGrd.fixinfo	 ) oGrd.fixinfo 	 += ",";
        		if (oGrd.fixmergeinfo) oGrd.fixmergeinfo += ",";

        		oGrd.fixinfo += colid;
        		colinfo 	  = orgds.getColumnInfo(colid);

        		// Column 정보를 찾을 수 없을 경우 merge ds에서 찾는다..
        		if (!colinfo)
        		{
        			  if (colid == oGrd.mergekey) oGrd.fixmergeinfo += "K";
        			else 						  oGrd.fixmergeinfo += "C";
        				  colinfo = dsmerge.getColumnInfo(colid);
        		}
        		else
        		{
        			oGrd.fixmergeinfo += " ";
        		}

        		if (!colinfo)
        		{
        			return false;
        		}
        		ds.addColumn(colid,colinfo.type,colinfo.size);
        	}

        	return true;
        }

        /**
         * @class 내부함수-Factor Column Setting
         * @param
         * @return N/A
         * @example
         */
        this.gfnDsPivotColSetting = function(owner,ds,oGrd)
        {
        	// Factor Column 정보를 찾아온다
        	var dsname = owner.lookup("ds_gridinfo_" + oGrd.name);
        		dsname.filter("");

        	var nRightRow = dsname.findRowExpr('band=="columns" && fix=="right"');
        	var nRight 	  = 9999;

        	if (nRightRow >= 0) nRight = dsname.getColumn(nRightRow,"cell");

        	dsname.filter('band=="Body"');
        	dsname.set_keystring("S:cell");

        	oGrd.factorinfo = "";

        	var colid 		= "";

        	for (var i=oGrd.nFixCnt;i<dsname.getRowCount();i++)
        	{
        		if (i>=nRight) continue;

        		colid = dsname.getColumn(i,"text");

        		if (colid.indexOf("bind:")>=0)
        		{
        			colid = colid.replace("bind:","");
        		}
        		else colid = "";

        		if (oGrd.factorinfo) oGrd.factorinfo += ",";
        			oGrd.factorinfo += colid;
        	}

        	var dshead = owner.lookup("ds_pivothead_" + oGrd.name);
        		dshead.clearData();
        	var orgds = owner.lookup(oGrd._orgBindDs);

        	orgds.set_enableevent(false);

        	orgds.set_keystring("S:+" + oGrd.pivotsortkey.replace(/,/g,"+"));

        	var arrpivot  = oGrd.pivotkey.split(/,/g);
        	var arrfactor = oGrd.factorinfo.split(/,/g);

        	var sPrevVal = "";
        	var sCurrVal = "";
        	var nCnt 	 = 0;
        	var nRow 	 = 0;
        	var js 		 = "";
        	var colinfo;
        	var colid;

        	// pivot head 정보 dataset에 pivotkey별로 추가하고
        	// binding용 데이타셋에 factor column을 추가한다
        	var arrList1 = new Array();
        	var arrList2 = new Array();

        	for (var j=0; j<arrfactor.length; j++)
        	{
        		colinfo = orgds.getColumnInfo(arrfactor[j]);
        		arrList1[j] = colinfo.type;
        		arrList2[j] = colinfo.size;
        	}

        	for (var i=0; i<orgds.getRowCount(); i++)
        	{
        		if (orgds.getRowLevel(i)>0) continue;

        		sCurrVal = "";

        		for (var j=0; j<arrpivot.length; j++)
        		{
        			sCurrVal = sCurrVal + orgds.getColumn(i, arrpivot[j]);
        		}
        		if (sCurrVal==sPrevVal)
        		{
        			orgds.setColumn(i,"PVSEQ",(nCnt-1).toString().padLeft(3,'0'));
        		}
        		else
        		{
        			nRow = dshead.addRow();

        			for (var j=0; j<arrpivot.length; j++)
        			{
        				dshead.setColumn( nRow
        								, "PCOL_" + j.toString().padLeft(3,'0') + "_VALUE"
        								, orgds.getColumn(i, arrpivot[j]));
        			}
        			dshead.setColumn(nRow,"cell",nCnt.toString().padLeft(3,'0'));

        			for(var j=0; j<arrfactor.length; j++)
        			{
        				ds.addColumn(arrfactor[j] + "_" + nCnt.toString().padLeft(3,'0'),arrList1[j],arrList2[j]);
        			}
        			orgds.setColumn(i,"PVSEQ",nCnt.toString().padLeft(3,'0'));

        			nCnt 	 = nCnt + 1;
        			sPrevVal = sCurrVal;
        		}
        	}
        	// HEAD MERGE 용도
        	var nAddCnt = 0;
        	var nStart  = 0;

        	// 같은 이름의 마지막 ROW에만 세팅.
        	// _CNT는 같은 TEXT로 시작하는 갯수
        	// _START는 같은 TEXT로 시작하는 Row position
        	var sv_text = "";
        	var sv_col  = "";
        	var sv_row  = 0;

        	for (var i=0; i<arrpivot.length; i++)
        	{
        		if (dshead.getRowCount() == 1)
        		{
        			dshead.setColumn(0,"PCOL_" + i.toString().padLeft(3,'0') + "_CNT",  1);
        		}
        		else
        		{
        			sv_col  = "PCOL_" + i.toString().padLeft(3,'0');
        			sv_text = dshead.getColumn(0,  sv_col + "_VALUE");
        			sv_row  = 0;
        			nAddCnt = 1;

        			for (var j=1; j<dshead.getRowCount(); j++)
        			{
        				if (dshead.getColumn(j, sv_col + "_VALUE") == sv_text)
        				{
        					nAddCnt++;
        				}
        				else
        				{
        					dshead.setColumn(sv_row	,sv_col + "_CNT",nAddCnt);
        					dshead.setColumn(j		,sv_col + "_CNT",1		);

        					sv_text = dshead.getColumn(j, sv_col + "_VALUE" );
        					sv_row 	= j;
        					nAddCnt = 1;
        				}
        			}
        			if (nAddCnt>1)
        			{
        				dshead.setColumn(sv_row,sv_col + "_CNT",nAddCnt);
        			}
        		}
        	}

        	nFactorCnt = dshead.getRowCount();
        	orgds.set_enableevent(true);
        }

        /**
         * @class 내부함수-Grid Body 영역의 Cell Formats 생성
         * @param
         * @return String
         * @example
         */
        this.gfnContentsRow = function(owner,oGrd,gb,ds,i,nCol,seq,sText,nStart,nCount,nFactorCnt)
        {
        	var styles    = ' style="';
        		styles    = styles + this.gfnReplaceCol(oGrd,ds,i,"style",seq);
        		styles    = styles + '"';

        	var colspan   = ds.getColumn(i,"colspan");

        	var sColText  = "";
        	var sContents = '\t\t<Cell ';

        	if (!this.gfnIsNull(sText))
        	{
        		if (!this.gfnIsNull(nCount) && nCount > 1)
        			colspan = nCount * nFactorCnt;

        		sColText = this.gfnXmlChrReplace(sText);
        	}
        	else
        		sColText = this.gfnReplaceCol(oGrd,ds,i,"text",seq);

        	sContents += styles;
        	sContents += ' text="' +  sColText + '"'

        	var sdum = "";

        	for (var j=0; j<owner.arrGridProp.length; j++)
        	{
        			 if (owner.arrGridProp[j] == "col"	  	) sContents += ' ' + "col" 	   + '="' + nCol    + '"';
        		else if (owner.arrGridProp[j] == "colspan"	) sContents += ' ' + "colspan" + '="' + colspan + '"';
        		else if (owner.arrGridProp[j] == "expr"	  	)
        		{
        			sdum = this.gfnReplaceCol(oGrd,ds,i,owner.arrGridProp[j],seq);

        		if (sdum && sdum.length>0 && sdum.indexOf("expr:")<0) sdum = "expr:" + sdum;
        			sContents += ' ' + owner.arrGridProp[j] + '="' + sdum + '"';
        			sdum = null;
        		}
        		else if (owner.arrGridProp[j] != "text"		)
        		{
        			sContents += ' ' + owner.arrGridProp[j] + '="' + this.gfnReplaceCol(oGrd,ds,i,owner.arrGridProp[j],seq) + '"';
        		}
        	}
        	sContents +=  '/>\n';

        	return sContents;
        }

        /**
         * @class 내부함수-Grid 각 Cell Property 설정정보 반환
         * @param
         * @return String
         * @example
         */
        this.gfnReplaceCol = function(oGrd,ds,nrow,value,seq)
        {
        	var sval = ds.getColumn(nrow,value);
        	if (this.gfnIsNull(sval)) sval = "";

        	if (seq != "")
        	{
        		var arrfactor = oGrd.factorinfo.split(/,/g);
        		for (var i=0; i<arrfactor.length; i++)
        		{
        			if (sval.indexOf(arrfactor[i]) >= 0)
        			{
        				sval = sval.replace(arrfactor[i],arrfactor[i] + "_" + seq);
        				sval = sval.replace(/"/g,"'");
        				return sval;
        			}
        		}
        	}

        	return this.gfnXmlChrReplace(sval);
        }

        /**
         * @class 내부함수-String Tag 치환 후 반환
         * @param
         * @return String
         * @example
         * this.gfnXmlChrReplace(rtnVal);
        */
        this.gfnXmlChrReplace = function(rtnVal)
        {
        	var test = String.fromCharCode(13);

        	 rtnVal = nexacro.replaceAll(rtnVal, "&"	, "&amp;"	);
        	 rtnVal = nexacro.replaceAll(rtnVal, "<"	, "&lt;"	);
        	 rtnVal = nexacro.replaceAll(rtnVal, ">"	, "&gt;"	);
        	 rtnVal = nexacro.replaceAll(rtnVal, "\""	, "&quot;"	);
        	 rtnVal = nexacro.replaceAll(rtnVal, "'"	, "&apos;"	);
        	 rtnVal = nexacro.replaceAll(rtnVal, '"'	, "&quot;"	);
        	 rtnVal = nexacro.replaceAll(rtnVal, " "	, "&#32;"	);
        	 rtnVal = nexacro.replaceAll(rtnVal, test	, "&#13;"	);

        	 if (this.gfnIsNull(rtnVal)) rtnVal = "";

        	 return rtnVal;
        }
        /*********************************************** 내부함수 END ***********************************************/

        /*********************************************** 이벤트 START ***********************************************/
        /**
         * @class Grid MouseMove Event 발생 시
         * @param
         * @return N/A
         * @example
         * this.gfnCrossGridOnmousemove(obj,e);
        */
        this.gfnCrossGridOnmousemove = function(obj,e)
        {
        	if (obj.tooltipshow)
        	{
        		if (e.row == -1)
        			obj.set_tooltiptext(obj.getCellProperty("head",e.cell,"text"));
        	}
        }
        /*********************************************** 이벤트 END   ***********************************************/
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
