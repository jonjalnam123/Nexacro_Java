if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::NEDU");
        this.set_datatyperule("2.0");
        this.set_initvaluefileid("initvalue::list.xiv");
        this.set_loadingimage("url(\'imagerc::MoveLogo.gif\')");
        this.set_icon("url(\'imagerc::drumicon.ico\')");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");
        nexacro._addService("cmm", "form", "./cmm/", "session", null, "", "0", "0");
        nexacro._addService("form", "form", "./form/", "session", null, "", "0", "0");
        nexacro._addService("admin", "form", "./admin/", "session", null, "", "0", "0");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("FormFrame", "form", "./FormFrame/", "session", null, "", "0", "0");
        nexacro._addService("CompGuide", "form", "./CompGuide/", "session", null, "", "0", "0");
        nexacro._addService("TEMP", "form", "./TEMP/", "session", null, "", "0", "0");
        nexacro._addService("Guide", "form", "./Guide/", "session", null, "", "0", "0");
        nexacro._addService("Seok2", "form", "./Seok2/", "session", null, "", "0", "0");
        nexacro._addService("ExtJs", "js", "./nexacrolib/component/ExtJs/", "session", null, "", "0", "0");
        nexacro._addService("SvcUrl", "JSP", "http://192.168.0.22:8088/edupack_egov/", "none", null, "", "0", "0");
        nexacro._addService("EduUrl", "JSP", "http://demo.nexacro.com/edu/edupack_jsp/", "none", null, "", "0", "0");
        nexacro._addService("Eclipse", "form", "http://localhost:8088/edupack_egov/edu/edupack_jsp/", "none", null, "", "0", "0");
        nexacro._addService("Comm", "form", "./Comm/", "session", null, "", "0", "0");
        nexacro._addService("Lib", "js", "./Lib/", "dynamic", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"GoogleMap", "classname":"nexacro.GoogleMap", "type":"JavaScript"},
        		{"id":"VideoPlayer", "classname":"nexacro.VideoPlayer", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evMessagePopup", "true");
        nexacro.setEnvironmentVariable("evLanguage", "KO");
        nexacro.setEnvironmentVariable("evLanguageChange", "KO");
        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
