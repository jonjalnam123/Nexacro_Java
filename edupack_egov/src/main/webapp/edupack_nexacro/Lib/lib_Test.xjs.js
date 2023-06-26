//XJS=lib_Test.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        var pForm = nexacro.Form.prototype;

        this.gfn_a = function () {
        	alert("gfn_a");
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
