//XJS=Lib_Util.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        //날짜 구하는 함수
        this.lfn_getToday = function ()
        {
        	var objDate = new Date();
        	var sYear  = objDate.getFullYear().toString();
        	var sMonth = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var sDay   =  objDate.getDate().toString().padLeft(2, "0");
        	return sYear + sMonth + sDay;
        };



        this.lfn_getFirstDay = function ()
        {
        	var objDate = new Date();
        	var sYear  = objDate.getFullYear().toString();
        	var sMonth = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var sDay   =  "01";
        	return sYear + sMonth + sDay;
        };

        this.lfn_isNull = function (sValue)
        {
        	if(new String(sValue).valueOf() =="undefined" ) return true;
        	if(sValue == null) return true;
        	var ChkStr = new String(sValue);

        	if(ChkStr == null) return true;
        	if(ChkStr.toString().length == 0) return true;
        	return false;
         };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
