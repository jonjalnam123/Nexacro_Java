//XJS=Lib_Grid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.lfn_gridHaed = function(obj,e)
        {
        var sType = obj.getCellProperty("head", e.cell, "displaytype");
            var sText = "";
        	if(sType == "checkboxcontrol"){
        		this.lfn_gridCheckBox(obj,e);
        		}
            else{
                this.lfn_gridSort(obj, e);
            }
        }

        this.lfn_gridCheckBox = function (obj, e)
        {
        	 var objDs = obj.getBindDataset();
                if(objDs.getRowCount() < 1) return;

                sText = obj.getCellProperty("head", e.cell, "text");
                sText = (sText == "1" ? "0" : "1");

        		for(var i=0; i < objDs.rowcount; i++){
        			objDs.setColumn(i, "CHK", sText);
        		}
        		obj.setCellProperty("Head", e.cell, "text", sText);
        };

        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.CONST_SORT_FLAG = false;
        this.lfn_gridSort = function (obj, e)
        {
        	var bindDs = obj.getBindDataset();
        	if (bindDs.rowcount == 0){
        		return false;
        	}

        	var CONST_SORT_MARK = "";
        	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");
        	for (var i = 0; i < obj.getCellCount("head"); i++)
        	{
        		if (obj.getCellText(-1, i) == "undefined") {
        			continue;
        		}

        		var strHeadText = obj.getCellText(-1, i);

        		if (i == e.cell) {
        			if (strHeadText.substr(strHeadText.length - 1) == this.CONST_ASC_MARK) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.CONST_DESC_MARK);
        				bindDs.set_keystring("S:-" + BodyColId[1]);
        			}
        			else if (strHeadText.substr(strHeadText.length - 1) == this.CONST_DESC_MARK) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.CONST_ASC_MARK);
        				bindDs.set_keystring("S:+" + BodyColId[1]);
        			}
        			else {
        				obj.setCellProperty("head", i, "text", strHeadText + this.CONST_ASC_MARK);
        				bindDs.set_keystring("S:+" + BodyColId[1]);
        			}
        		}
        		else {
        			if (strHeadText.substr(strHeadText.length - 1) == this.CONST_ASC_MARK || strHeadText.substr(strHeadText.length - 1) == this.CONST_DESC_MARK) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1));
        			}
        		}
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
