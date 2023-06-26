(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ext_System");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_ext_excuteProcess","5","9","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("_ext_excuteProcess");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_winExec","130","9","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("_ext_winExec");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_excuteAppPostion","254","9","151","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("_ext_excuteAppPostion");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_killProcessAll","409","9","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("_ext_killProcessAll");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_killProcessID","535","9","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("_ext_killProcessID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getCurrentProcessID","661","9","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("_ext_getCurrentProcessID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getProcessNameHandle","826","9","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("_ext_getProcessNameHandle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getSystemDir","1006","9","117","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("_ext_getSystemDir");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getCheckDir","1131","9","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("_ext_getCheckDir");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setTime","5","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("_ext_setTime");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getTime","130","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("_ext_getTime");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getIPAddress","254","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("_ext_getIPAddress");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getMACAddress","377","70","152","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("_ext_getMACAddress");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setURLencode","534","70","288","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("_ext_setURLencode / _ext_getURLdecode");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setBase64encode__ext_getBase64decode","826","70","299","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("_ext_setBase64encode / _ext_getBase64decode");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getPrintList","1131","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("_ext_getPrintList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setDefaultPrinter","5","131","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("_ext_setDefaultPrinter");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getDefaultPrinter","150","131","141","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("_ext_getDefaultPrinter");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setPageOption","297","131","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("_ext_setPageOption");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setPrintOption","423","131","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("_ext_setPrintOption");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setPrintOrientation","549","131","165","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("_ext_setPrintOrientation");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_selectFolderPath","720","129","147","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("_ext_selectFolderPath");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFileList","873","131","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("_ext_getFileList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getKeyCheck","997","131","128","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("_ext_getKeyCheck");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getHostName","1131","131","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("_ext_getHostName");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getUserName","5","192","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("_ext_getUserName");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFileDateInfo","129","192","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("_ext_getFileDateInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getSystemEnv","253","192","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("_ext_getSystemEnv");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFontInfo","377","192","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("_ext_getFontInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_writeUProfile","501","192","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("_ext_writeUProfile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_readUProfile","625","192","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("_ext_readUProfile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getAppPath","749","192","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("_ext_getAppPath");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getTraySizeInfo","873","192","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("_ext_getTraySizeInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getDesktopWorkArea","1013","192","163","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("_ext_getDesktopWorkArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setSecuritySite","5","253","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("_ext_setSecuritySite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setTopWindows","128","253","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("_ext_setTopWindows");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFindWindows","291","253","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("_ext_getFindWindows");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFindAllWinHwnd","455","253","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("_ext_getFindAllWinHwnd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_windowSendMSG","619","253","144","50",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("_ext_windowSendMSG");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_delDirectory","767","253","144","50",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("_ext_delDirectory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_CreateDirectory","917","253","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("_ext_CreateDirectory");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setBeep","1063","253","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("_ext_setBeep");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_isWow64","5","313","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("_ext_isWow64");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setInternetSetCookie","128","313","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("_ext_setInternetSetCookie");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getBitCalc","293","313","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("_ext_getBitCalc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setIMEmode","418","313","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("_ext_setIMEmode");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getIMEmode","544","313","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("_ext_getIMEmode");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","673","313","159","52",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_msgBox","844","313","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("_ext_msgBox");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getInternetConnectState","975","313","184","50",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("_ext_getInternetConnectState");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setOleServerBusyTimeOut","5","370","195","50",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("_ext_setOleServerBusyTimeOut");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getInstallProg","205","371","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("_ext_getInstallProg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setShowCursor","331","371","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("_ext_setShowCursor");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getNumFormatLoc","457","371","152","50",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("_ext_getNumFormatLoc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","616","371","152","50",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Button("btm_ext_getNumLocaleInfo","774","371","144","50",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("_ext_getNumLocaleInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getLocaleFormat","923","371","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("_ext_getLocaleFormat");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getDefaultLocaleInfo","1066","371","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("_ext_getDefaultLocaleInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getDateUTC","5","427","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("_ext_getDateUTC");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getDriveInfo","128","427","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("_ext_getDriveInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getDriveInfo2","257","427","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("_ext_getDriveInfo2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getMonitorInfo","383","427","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("_ext_getMonitorInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getMaxMonitorRect","525","427","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("_ext_getMaxMonitorRect");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getGetKeyState","691","427","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("_ext_getGetKeyState");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFindProcessInfo","833","427","152","50",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("_ext_getFindProcessInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getProcessMemoryInfo","991","427","184","50",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("_ext_getProcessMemoryInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getGlobalMemoryStatusEx","5","487","192","50",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("_ext_getGlobalMemoryStatusEx");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getCurrentProcessCPU","203","487","248","50",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("_ext_getCurrentProcessCPU Start Timer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getCurrentProcessCPU00","563","487","232","50",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("_ext_getCurrentProcessCPU Kill Timer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","456","487","104","50",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getUseFont","798","487","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("_ext_getUseFont");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getProcessModule","922","487","152","50",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("_ext_getProcessModule");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_readFile","5","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("_ext_readFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_writeFile","130","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("_ext_writeFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_reNameFile","255","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("_ext_reNameFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_copyFile","380","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("_ext_copyFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_moveFile","505","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("_ext_moveFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_deleteFile","630","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("_ext_deleteFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_existFile","755","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("_ext_existFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFileInfo","880","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("_ext_getFileInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_MmfFileWrite","1005","544","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("_ext_MmfFileWrite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setRegValue","5","605","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("_ext_setRegValue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getRegValue","131","605","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("_ext_getRegValue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getRegNameList","257","605","148","50",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("_ext_getRegNameList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getRegValueList","411","605","145","50",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("_ext_getRegValueList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Registry_64bit_or_32bit","562","605","207","50",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("_Registry_64bit_or_32bit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_EmptyWorkingSet","775","605","177","50",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("_ext_EmptyWorkingSet");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getTextToBin","958","605","265","50",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("_ext_getTextToBin / _ext_getBinToText");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getLengthB","5","662","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("_ext_getLengthB");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getFindMiplatformOnlyOne","135","662","204","50",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("_ext_getFindMiplatformOnlyOne");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getComPortList","349","662","149","50",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("_ext_getComPortList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_messagebox","508","662","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("_ext_messagebox");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_sum","638","664","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("_ext_sum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_strcat","768","662","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("_ext_strcat");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getIPAdapterInfo","900","662","167","50",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("_ext_getIPAdapterInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getPrimaryHDDSerial","1089","662","167","50",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("_ext_getPrimaryHDDSerial");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("_ExtCommonApi_NexacroV_N.xfdl", function() {


        this.objExtCommon = {};
        this.objExtURL = "";
        this.Form_onload = function(obj,e)
        {
        	var navigatorFullName = system.navigatorfullname;
        	trace( navigatorFullName );
        	if ( navigatorFullName === "Nexacro N Engine (x86)" )
        	{
        		//보안정책. execprocess 사용 안됨.
        		this.objExtURL = "C:\\Temp\\ExtCommonV_N\\ExtCommonV_N_32.dll";
        		//this.objExtURL = "C:\\Temp\\ExtCommonV_N\\ExtCommonV_N_32_EX.dll";
        	}
        	else if ( navigatorFullName === "Nexacro N Engine (x64)" )
        	{
        		//보안정책. execprocess 사용 안됨.
        		this.objExtURL = "C:\\Temp\\ExtCommonV_N\\ExtCommonV_N_64.dll";
        		//this.objExtURL = "C:\\Temp\\ExtCommonV_N\\ExtCommonV_N_64_EX.dll";
        	}
        	else
        	{
        		alert("Not Nexacro Runtime!!! Only Runtime !!!");
        	}

        	trace(this.objExtURL);
        	this.objExtCommon = nexacro._addExtensionModule(this.objExtURL);

        	trace( ">>>>" +  this.objExtCommon );
        };

        this.Form_onclose = function(obj,e)
        {
        	nexacro._clearExtensionModule(this.objExtURL);
        	this.objExtCommon = null;
        	this.objExtCommon  = {};
        };

        /************************************************************************/
        /* Funciton :     _ext_excuteProcess                                                             			 */
        /************************************************************************/
        this.btn_ext_excuteProcess_onclick = function(obj,e)
        {

        	var path = "osk";
        	//var path = "C:\\Windows\\System32\\osk.exe"
        	//var path = "D:\\Hscl_WF_TrackbarImgP.png";
        	//var path = "notepad.exe";
        	//var path = "cmd.exe";
        	//var path = "cmd";
        	//var path = "powershell.exe";
        	//var path = "powershell";
        	//var path = "c:\\windows\\systetm32\\cmd.exe";
        	//var path = "c:\\windows\\systetm32\\windowspowershell\\v1.0\\powershell.exe";


        	var args = "";
        	var bReturn = this.objExtCommon._ext_excuteProcess(path, args) ;

        	/*
        	var path = "C:\\Users\\Administrator\\Downloads\\NOPC\\BIN\\BgmPlayerShow.exe"
        	var args = "";
        	var workpath = "C:\\Users\\Administrator\\Downloads\\NOPC\\BIN\\"
        	var bReturn = this.objExtCommon._ext_excuteProcess(path, args, workpath) ;
        	*/



        	//성공 : true;
        	//실패 : false;
        	trace ("성공 여부 : " + bReturn );
        };

        /************************************************************************/
        /* Funciton :     _ext_winExec                                                             					 */
        /************************************************************************/
        this.btn_ext_winExec_onclick = function(obj,e)
        {
        	/**********************************************************************/
        	//var path = "notepad.exe";
        	//var path = "cmd.exe";
        	//var path = "cmd";
        	//var path = "powershell.exe";
        	//var path = "powershell";
        	var path = "c:\\windows\\systetm32\\cmd.exe";
        	//var path = "c:\\windows\\systetm32\\windowspowershell\\v1.0\\powershell.exe";
        	/**********************************************************************/
        	//Windows Show Style
        	var SW_HIDE            			=  0;
        	var SW_SHOWNORMAL   		=  1;
        	var SW_NORMAL            		=  1;
        	var SW_SHOWMINIMIZED 		=	2;
        	var SW_SHOWMAXIMIZED  	=	3;
        	var SW_MAXIMIZE        			=	3;
        	var SW_SHOWNOACTIVATE   =	4;
        	var SW_SHOW             			=	5;
        	var SW_MINIMIZE         			=	6;
        	var SW_SHOWMINNOACTIVE  =	7;
        	var SW_SHOWNA           		=	8;
        	var SW_RESTORE          		=	9;
        	var SW_SHOWDEFAULT      	=	10;
        	var SW_FORCEMINIMIZE    	=	11;
        	var SW_MAX              			=	11;
        	/**********************************************************************/
        	var bReturn = this.objExtCommon._ext_winExec(path, SW_SHOW) ;
        	/**********************************************************************/
        	//성공 : true;
        	//실패 : false;
        	trace ("성공 여부 : " + bReturn );
        };

        /************************************************************************/
        /* Funciton :     _ext_excuteAppPostion                                                             		 */
        /************************************************************************/
        this.btn_ext_excuteAppPostion_onclick = function(obj,e)
        {
        	var ret;
        	//var path = "notepad.exe";
        	//var path = "cmd.exe";
        	//var path = "cmd";
        	//var path = "powershell.exe";
        	//var path = "powershell";
        	//var path = "c:\\windows\\systetm32\\cmd.exe";
        	//var path = "c:\\windows\\systetm32\\windowspowershell\\v1.0\\powershell.exe";

        	//ret = this.objExtCommon._ext_excuteAppPostion("notepad.exe" ,10,23,800,600);
        	ret = this.objExtCommon._ext_excuteAppPostion("c:\\windows\\systetm32\\windowspowershell\\v1.0\\powershell.exe" ,10,23,800,600);

        	//성공 : true;
        	//실패 : false;
        	trace("_ext_excuteAppPostion : " +ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_excuteAppPostion                                                             		 */
        /************************************************************************/
        this.btn_ext_killProcessAll_onclick = function(obj,e)
        {
        	var strFileName = "osk.exe"
        	var nCloseOption = 1; // 0 : 첫번째 프로세스 / 1 : 모든 프로세스
        	var ret = this.objExtCommon._ext_killProcessAll(strFileName, nCloseOption);
        	//성공 : true;
        	//실패 : false;
        	trace("_ext_killProcessAll : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_killProcessID                                    */
        /************************************************************************/
        this.btn_ext_killProcessID_onclick = function(obj,e)
        {
        	var ret = this.objExtCommon._ext_killProcessID( 14240 );
        	//성공 : true;
        	//실패 : false;
        	trace("_ext_killProcessID : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_killProcessID                                    */
        /************************************************************************/
        this.btn_ext_getCurrentProcessID_onclick = function(obj,e)
        {
        	var ret = this.objExtCommon._ext_getCurrentProcessID( );
        	//Return type : Integer
        	trace("_ext_getCurrentProcessID : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_getProcessNameHandle                             */
        /************************************************************************/
        this.btn_ext_getProcessNameHandle_onclick = function(obj,e)
        {
        	var ret_ProcessHwnd = this.objExtCommon._ext_getProcessNameHandle( "nexacro.exe");
        	//Return type : Integer
        	trace("_ext_getcurrentProcessID Handle : " + ret_ProcessHwnd );
        };

        /************************************************************************/
        /* Funciton :     _ext_getSystemDir					                                                  		 */
        /************************************************************************/
        this.btn_ext_getSystemDir_onclick = function(obj,e)
        {
        	//Return type : String
        	var ret_SysPath;
        	ret_SysPath = this.objExtCommon._ext_getSystemDir();
         	trace("Error : " + ret_SysPath );


         	ret_SysPath = this.objExtCommon._ext_getSystemDir("SYSTEM");
         	trace("SYSTEM : " + ret_SysPath );

         	ret_SysPath = this.objExtCommon._ext_getSystemDir("PROGRAMS");
         	trace("PROGRAMS : " + ret_SysPath );

         	ret_SysPath = this.objExtCommon._ext_getSystemDir("PROGRAM_COMMON");
         	trace("PROGRAM_COMMON : " + ret_SysPath );

         	ret_SysPath = this.objExtCommon._ext_getSystemDir("WINDOWS");
         	trace("WINDOWS : " + ret_SysPath );

         	ret_SysPath = this.objExtCommon._ext_getSystemDir("CSIDL_COMMON_DOCUMENTS");
         	trace("CSIDL_COMMON_DOCUMENTS : " + ret_SysPath );

         	ret_SysPath = this.objExtCommon._ext_getSystemDir("TEMP");
         	trace("TEMP : " + ret_SysPath );

         	ret_SysPath = this.objExtCommon._ext_getSystemDir("CSIDL_DESKTOP");
         	trace("DESKTOP : " + ret_SysPath );

        };

        /************************************************************************/
        /* Funciton :     _ext_getCheckDir					                                                  		 */
        /************************************************************************/
        this.btn_ext_getCheckDir_onclick = function(obj,e)
        {
        	var bRet = this.objExtCommon._ext_getCheckDir("D:\\Temp\\Test\\_test", 1);
        	//Return : Boolean
         	trace("_ext_getCheckDir : " + bRet );
        };

        /************************************************************************/
        // function : _ext_setTime
        // des 	 : 입력된 flag 값을 이용하여 system 시간을 설정한다.  [Nexacro.exe 가 관리자 권한이 설정 되어 있을 않을 시 변경 시간설정을 할 수 없습니다.]
        // prameter : 자릿수를 체크하여 년원일시간분초/시간분초 를 구분하여 설정한다.
        // 			string
        // 			//년,월,일,시간,분,초 : [ len : 14 ]
        // 			/시간,분,초 : [ len : 6 ]
        // return :
        // 			BOOL : TRUE / 완료 , FALSE / 실패
        /************************************************************************/
        this.btn_ext_setTime_onclick = function(obj,e)
        {
        	var bRet = this.objExtCommon._ext_setTime("20130225000000");
        	//Return : Boolean
         	trace("_ext_setTime : " + bRet );
        };

        /************************************************************************/
        /* Funciton :     _ext_getTime					                                                  		 		 */
        /************************************************************************/
        this.btn_ext_getTime_onclick = function(obj,e)
        {
        	var bRet = this.objExtCommon._ext_getTime();  //년,월,일,시간,분,초 : [ len : 14 ]
        	//Return : String
         	trace("_ext_getTime : " + bRet );
        };

        /************************************************************************/
        /* Funciton :     _ext_getIPAddress					                                                  		 */
        /************************************************************************/
        this.btn_ext_getIPAddress_onclick = function(obj,e)
        {
        	var bRet = this.objExtCommon._ext_getIPAddress();  //년,월,일,시간,분,초 : [ len : 14 ]
        	//Return : Array
         	trace("_ext_getIPAddress : " + bRet );
        };

        /************************************************************************/
        /* Funciton :     _ext_getMACAddress					                                                  	 */
        /************************************************************************/
        this.btn_ext_getMACAddress_onclick = function(obj,e)
        {
        	var bRet = this.objExtCommon._ext_getMACAddress();
        	//Return : Array
         	trace("_ext_getMACAddress : " + bRet );

        	//Return : Array
        	//배열로 리턴 합니다.
        	var ret_SysMACAddress;
        	ret_SysMACAddress = this.objExtCommon._ext_getMACAddress(1);
        	trace("MAC Address ALL:: " + ret_SysMACAddress);

        	var maclen = ret_SysMACAddress.length;
        	for( var mac=0; mac < maclen; mac++)
        	{
        		trace("--------------------------------------");
        		var str = ret_SysMACAddress[mac];
        		var strarray = str.split("/");
        		var strlen = strarray.length;
        		for( var i=0; i<strlen; i++)
        		{
        			trace("_data : " + i + " : "+ strarray[i]);
        		}
        		trace("--------------------------------------");
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_setURLencode		/  _ext_getURLdecode	                            	 */
        /************************************************************************/
        this.btn_ext_setURLencode_onclick = function(obj,e)
        {
        	//Default : ANSI
        	var ansi = this.objExtCommon._ext_setURLencode("123456678908768");
        	trace( "ANSI encode::  " + ansi);
        	trace( "ANSI  Decode ::" + this.objExtCommon._ext_getURLdecode(ansi));

        	ansi = this.objExtCommon._ext_setURLencode("abcdefg/한%글#$#테%%스^^트123;;;");
        	trace( "ANSI encode::  " + ansi);
        	ansi = this.objExtCommon._ext_setURLencode("abcdefg/한%글##테%$%스^^트123;;;4","CP_ACP");
        	trace( "ANSI encode::  " + ansi);
        	ansi = this.objExtCommon._ext_setURLencode("abcdefg/한%글##테%$%스^^트123;;;","ANSI");
        	trace( "ANSI encode::  " + ansi);
        	trace( "ANSI  Decode ::" + this.objExtCommon._ext_getURLdecode(ansi));
        	trace( "ANSI  Decode ::" + this.objExtCommon._ext_getURLdecode(ansi, "ANSI"));

        	//////////////////////////////////////////////////////////////////////////
        	var encode =  this.objExtCommon._ext_setURLencode("abcdefg/한%글#$#테%%스^^트123;;;","utf-8");
        	trace( "UTF-8 encode::  " + encode);
        	encode =  this.objExtCommon._ext_setURLencode("abcdefg/한%글##테%$%스^^트123;;;","UTF-8");
        	trace( "UTF-8 encode::  " + encode);
        	trace( "UTF-8  Decode ::" +this.objExtCommon._ext_getURLdecode(encode,"utf-8"));
        };

        /************************************************************************/
        /* Funciton :     _ext_setBase64encode	/  	 _ext_getBase64decode	                      	 */
        /************************************************************************/
        this.btn_ext_setBase64encode__ext_getBase64decode_onclick = function(obj,e)
        {
        	trace( "Base64 :: " + nexacro.base64Encode("한글테스트"));

        	//default :: ANSI
        	var enANSI = this.objExtCommon._ext_setBase64encode("한글테스트");
        	trace( "Base64 encode::" + enANSI);
        	trace( "Base64 decode::" + this.objExtCommon._ext_getBase64decode(enANSI) );
        	//UTF-8
        	var enUTF8 = this.objExtCommon._ext_setBase64encode("한글테스트", "UTF-8");
        	trace( "Base64 encode::" + enUTF8);
        	trace( "Base64 decode::" + this.objExtCommon._ext_getBase64decode(enUTF8,"UTF-8")  + " [ append Test ]");
        };

        /************************************************************************/
        /* Funciton :     _ext_getPrintList											                      			 	 */
        /************************************************************************/
        this.btn_ext_getPrintList_onclick = function(obj,e)
        {
        	//배열로 리턴 합니다.
        	var ret_SysPrintLists;
        	ret_SysPrintLists = this.objExtCommon._ext_getPrintList();  //
        	trace("Print List : " + ret_SysPrintLists);
        };

        /************************************************************************/
        /* Funciton :     _ext_setDefaultPrinter											                     		 */
        /************************************************************************/
        this.btn_ext_setDefaultPrinter_onclick = function(obj,e)
        {
        	var ret_SysPrintLists;
        	ret_SysPrintLists = this.objExtCommon._ext_getPrintList();  //
        	trace(ret_SysPrintLists);
        	var settingRet;
        	settingRet = this.objExtCommon._ext_setDefaultPrinter(ret_SysPrintLists[0]);  //
        	trace("_ext_setDefaultPrinter : " +  settingRet);
        };
        /************************************************************************/
        /* Funciton :     _ext_getDefaultPrinter											                      		  */
        /************************************************************************/
        this.btn_ext_getDefaultPrinter_onclick = function(obj,e)
        {
        	var settingRet;
        	settingRet = this.objExtCommon._ext_getDefaultPrinter();  //
        	trace("_ext_getDefaultPrinter : " +  settingRet);
        };

        /************************************************************************/
        /* Funciton :     _ext_setPageOption											                      		 */
        /************************************************************************/
        this.btn_ext_setPageOption_onclick = function(obj,e)
        {
        	 this.objExtCommon._ext_setPageOption();
        };

        /************************************************************************/
        /* Funciton :     _ext_setPrintOption											                      			 */
        /************************************************************************/
        this.btn_ext_setPrintOption_onclick = function(obj,e)
        {
        	this.objExtCommon._ext_setPrintOption();
        };

        /************************************************************************/
        /* Funciton :     _ext_setPrintOrientation											                      	 */
        /************************************************************************/
        this.btn_ext_setPrintOrientation_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = this.objExtCommon._ext_setPrintOrientation(1);  //세로
        	trace("세로 Result :: " + ret ); // true 이면 설정 완료. / false : 설정 실패.

        	ret = this.objExtCommon._ext_setPrintOrientation(2); // 가로
        	trace("가로 Result :: " + ret ); // true 이면 설정 완료. / false : 설정 실패.

        	//프린터 설정 확인용.
        	this.objExtCommon._ext_setPrintOption();
        };

        /************************************************************************/
        /* Funciton :     _ext_selectFolderPath											                      	   */
        /************************************************************************/
        this.btn_ext_selectFolderPath_onclick = function(obj,e)
        {
        	var settingRet;
        	settingRet = this.objExtCommon._ext_selectFolderPath();  //
        	trace("_ext_selectFolderPath default 설정 시 : " + settingRet);
        	var setFolder = "C://TEMP";
        	settingRet = this.objExtCommon._ext_selectFolderPath(setFolder);  //
        	trace("_ext_selectFolderPath "+ setFolder +" 설정 [: " + settingRet + " ] ");
        };
        /************************************************************************/
        //method		: _ext_getFileList
        //DESC			: 입력 된 폴더 경로에서 파일 리스트를 스트링으로 리턴 합니다.
        //INPUT			: [String ] strPath : 선택 하려는 폴더 경로
        //				  [String ] Option  : F”(default) 파일 명,
        //									“D”일 때, 디렉토리 리스트를 리턴한다.
        //OUPUT			: Array : 선택된 폴더에서 파일명들을 리턴 합니다.
        /************************************************************************/
        this.btn_ext_getFileList_onclick = function(obj,e)
        {
        	var settingRet;
        	var getFilePATH = "C://TEMP";
        	//var getFilePATH = "Ahn_SM-N900S://Card//Movie";
        	settingRet = this.objExtCommon._ext_getFileList(getFilePATH,"D");  // Folder List
        	trace("_ext_getFileList : " + settingRet );
        	settingRet = this.objExtCommon._ext_getFileList(getFilePATH);  // File List
        	trace("_ext_getFileList : " + settingRet );
        };

        /************************************************************************/
        /* Funciton :     _ext_getKeyCheck											                      	  	   */
        /************************************************************************/
        this.btn_ext_getKeyCheck_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getKeyCheck("CAPSLOCK");  //
        	trace(" CAPSLOCK : " + ret );
        	ret = this.objExtCommon._ext_getKeyCheck("NUMLOCK");  //
        	trace(" NUMLOCK : " + ret );
        	ret = this.objExtCommon._ext_getKeyCheck("SCROLLOCK");  //
        	trace(" SCROLLOCK : " + ret );
        };
        /************************************************************************/
        /* Funciton :     _ext_getHostName											                      	  	   */
        /************************************************************************/
        this.btn_ext_getHostName_onclick = function(obj,e)
        {
        	var ret = "";
        	ret = this.objExtCommon._ext_getHostName();  //
        	trace("_ext_getHostName : " + ret  );
        };
        /************************************************************************/
        /* Funciton :     _ext_getUserName											                      	  	   */
        /************************************************************************/
        this.btn_ext_getUserName_onclick = function(obj,e)
        {
        	var ret = "";
        	ret = this.objExtCommon._ext_getUserName();  //
        	trace("_ext_getUserName : " + ret  );
        };
        /************************************************************************/
        /* Funciton :     _ext_getFileDateInfo											                      	  	   */
        /************************************************************************/
        this.btn_ext_getFileDateInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getFileDateInfo("C:\\Users\\Administrator\\Downloads\\ExtCommonV17_N_32.dll");  //
        	trace("_ext_getFileDateInfo : " +  ret );
        	trace("_ext_getFileDateInfo 만든날짜[ 0 ]: " +  ret[0] );
        	trace("_ext_getFileDateInfo 수정날짜[ 1 ]: " +  ret[1]);
        	trace("_ext_getFileDateInfo 저장날자[ 2 ]: " +  ret[2]);
        };
        /************************************************************************/
        /* Funciton :     _ext_getSystemEnv											                      	  	   */
        /************************************************************************/
        this.btn_ext_getSystemEnv_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getSystemEnv("path");  //
        	trace( " _ext_setSystemEnv : " + ret );
        	ret = this.objExtCommon._ext_getSystemEnv("OS");  //
        	trace( " _ext_setSystemEnv : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_getFontInfo											                      	  	   	   */
        /************************************************************************/
        this.btn_ext_getFontInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getFontInfo("Caption");  //
        	trace( " _ext_getFontInfo Caption : " + ret );
        	ret = this.objExtCommon._ext_getFontInfo("SmCaption");  //
        	trace( " _ext_getFontInfo SmCaption : " + ret );
        	ret = this.objExtCommon._ext_getFontInfo("Menu");  //
        	trace( " _ext_getFontInfo Menu : " + ret );
        	ret = this.objExtCommon._ext_getFontInfo("Status");  //
        	trace( " _ext_getFontInfo Status : " + ret );
        	ret = this.objExtCommon._ext_getFontInfo("Message");  //
        	trace( " _ext_getFontInfo Message : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_writeUProfile											                      	  	   */
        /************************************************************************/
        this.btn_ext_writeUProfile_onclick = function(obj,e)
        {
        	var groupVal = "English";
        	var keyVal 	 = "key";
        	var strVal 	 = "한글";

        	var ret;
        	ret = this.objExtCommon._ext_writeUProfile(groupVal,keyVal,strVal,"C:\\Windows\\iniFileUTF16.ini","utf-16");
        	ret = this.objExtCommon._ext_writeUProfile(groupVal,keyVal,strVal,"D:\\TEMP_D\\iniFileUTF160.ini","");
        	ret = this.objExtCommon._ext_writeUProfile(groupVal,keyVal,strVal,"D:\\TEMP_D\\iniFileUTF161.ini","utf-16");
        	trace( " _ext_writeUProfile UTF-16 : " + ret );
        	ret = this.objExtCommon._ext_writeUProfile(groupVal,keyVal,strVal,"D:\\TEMP_D\\iniFile.ini");
        	trace( " _ext_writeUProfile  : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_readUProfile											                      	  	   	   */
        /************************************************************************/
        this.btn_ext_readUProfile_onclick = function(obj,e)
        {
        	var groupVal = "English";
        	var keyVal 	 = "key";
        	var strVal 	 = "value";

        	var ret;
        	ret = this.objExtCommon._ext_readUProfile(groupVal,keyVal,strVal,"D:\\TEMP_D\\iniFileUTF161.ini");
        	trace( " _ext_readUProfile  : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_getAppPath											                      	  	  	   */
        /************************************************************************/
        this.btn_ext_getAppPath_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getAppPath();
        	trace( " _ext_getAppPath  : " + ret );
        };
        /************************************************************************/
        /* Funciton :     _ext_getTraySizeInfo											                      	   */
        //DESC			: 시작 표시줄 및 트레이 영역 위치를 리턴 한다.
        //INPUT			: 없음
        //OUPUT			: Array :
        //				  rect 좌표.
        //				  [ 0 ] 상태표시줄 rect.left
        //				  [ 1 ] 상태표시줄 rect.top
        //				  [ 2 ] 상태표시줄 rect.right
        //				  [ 3 ] 상태표시줄 rect.right

        //				  [ 4 ] 트레이영역 rect.left
        //				  [ 5 ] 트레이영역 rect.top
        //				  [ 6 ] 트레이영역 rect.right
        //				  [ 7 ] 트레이영역 rect.bottom
        /************************************************************************/
        this.btn_ext_getTraySizeInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getTraySizeInfo();
        	trace("_ext_getTraySizeInfo " + ret);
        };

        /************************************************************************/
        //method		: _ext_getDesktopWorkArea
        //DESC			: 메인 화면의 작업 영역을 리턴 합니다.
        //INPUT			: 없음
        //OUPUT			: Array :
        //				  rect 좌표.
        //				  [ 0 ] 작업 영역 rect.left
        //				  [ 1 ] 작업 영역 rect.top
        //				  [ 2 ] 작업 영역 rect.right
        //				  [ 3 ] 작업 영역 rect.right
        /************************************************************************/
        this.btn_ext_getDesktopWorkArea_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getDesktopWorkArea();
        	trace("_ext_getTraySizeInfo " + ret);
        };

        /************************************************************************/
        //method		: _ext_setSecuritySite
        //DESC			: 메인 화면의 작업 영역을 리턴 합니다.
        //INPUT			: site	string	등록하려는 URL
        //OUPUT			: integer :
        //					1	성공
        //					0	실패
        //					2	등록하려는 영역이 서버 확인이 필요.
        /************************************************************************/
        this.btn_ext_setSecuritySite_onclick = function(obj,e)
        {
        	var site = "http://10.0.40.77";
        	var ret;
        	ret = this.objExtCommon._ext_setSecuritySite(site);
        	trace("_ext_setSecuritySite : " + ret);
        };
        /************************************************************************/
        //method		: _ext_setTopWindows
        //DESC			: 화면 모드를 최상위로 설정.
        //INPUT			: bool : true 설정 / false 해제
        //OUPUT			: BOOL :
        //					TRUE	성공
        //					FALSE	실패
        /************************************************************************/
        this.btn_ext_setTopWindows_onclick = function(obj,e)
        {
        		var ret = false;
        	ret = this.objExtCommon._ext_setTopWindows(true);
        	trace( "_ext_setTopWindows : " + ret);

        	ret = this.objExtCommon._ext_setTopWindows(false);
        	trace( "_ext_setTopWindows : " + ret);
        };
        /************************************************************************/
        //method		: _ext_getFindWindows
        //DESC			: 검색 된 창을 화렁화 하여, handle을 dword 값으로 리턴 합니다.
        //INPUT			: string classname : 해당 프로그램의 class;
        //					string : 프로그램의 타이틀 명.
        //					bool : 검색된 프로그램을 윈도우 top 설정 유무. true 설정 / false 해제
        //OUPUT			: dword : 검색 된 프로그램의 헨들 값.
        /************************************************************************/
        this.btn_ext_getFindWindows_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = this.objExtCommon._ext_getFindWindows("","Q-Dir 9.41",true);
        	trace( "_ext_setTopWindows : " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_getFindAllWinHwnd											                       */
        /************************************************************************/
        this.btn_ext_getFindAllWinHwnd_onclick = function(obj,e)
        {
        	var ret = this.objExtCommon._ext_getFindAllWinHwnd("새 탭 - Chrome");
        	trace("array len : " + ret.length +" [ " + ret + " ]");

        	if(ret == -1)
        		return;

        	for( var i = 0; i < ret.length; i++)
        	{
        		//trace( " : " + ret[i] );
        		trace("/**************************************/");
        		var szData = ret[i];
        		var szAry = szData.split(":");
        		trace("Index : " + i );
        		trace("Handle : " + szAry[0]);
        		trace("Caption : " + szAry[1]);
        	}
        };

        /************************************************************************/
        //method		: _ext_windowSendMSG
        //DESC			: 검색 된 창에 copy data send msg 전달하기.
        //INPUT			: string strclassname : 해당 프로그램의 class;
        //				  string strtitle: 프로그램의 타이틀 명.
        //				  integer Flag :  보내려는 윈도우 에서의 식별 값.
        //				  string copydata : 보내여질 스트링 데이터.
        //OUPUT			: dword : 검색 된 프로그램의 헨들 값.
        /************************************************************************/
        this.btn_ext_windowSendMSG_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = this.objExtCommon._ext_windowSendMSG("","WM_COPYDATA",123,"123456789한글");
        	trace( "_ext_windowSendMSG : " + ret);
        };

        /************************************************************************/
        //method		: _ext_delDirectory
        //DESC			: 디렉토리의 모든 파일을 삭제 합니다.
        //INPUT			: string directory path: 삭제하려는 디렉 토리 경로.
        //				  integer : 0 파일만 삭제 , 1 디렉토리 모두 삭제
        //OUPUT			: bool : true 성공, false : 실패
        /************************************************************************/
        this.btn_ext_delDirectory_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = this.objExtCommon._ext_delDirectory("C:/TEMP/TEST",0);
        	trace( "_ext_delDirectory : " + ret);
         	ret = this.objExtCommon._ext_delDirectory("C:/TEMP/TEST",1);
         	trace( "_ext_delDirectory : " + ret);
        };
        /************************************************************************/
        //method		: _ext_CreateDirectory
        //DESC			: 디렉토리 생성합니다.
        //INPUT			: string directory path: 생성하려는 디렉 토리 경로.
        //
        //OUPUT			: bool : true 성공, false : 실패
        /************************************************************************/
        this.btn_ext_CreateDirectory_onclick = function(obj,e)
        {
        	var ret;
        	var strCreatePath = "C:\\TEMP\\__Encoding\\日本語Test\\日本語Test2\\";
         	ret = this.objExtCommon._ext_CreateDirectory(strCreatePath);
         	trace ( "return : "  +ret );
        };

        /***************************************************************************
        DESC	_ext_setBeep(frequency, length)
        INPUT	Beep 음 발생.
        		frequency 는 주파수 (높을수록 높은음) <vc : Beep() 함수 참고.>
        		length 는 1/1000초 단위.
        		frequency
        		경고음의 주파수이며 해당 범위는 37 - 32767헤르츠입니다.
        		length
        		경고음의 지속 시간(밀리초)입니다.
        OUPUT	없음
        ***************************************************************************/
        this.btn_ext_setBeep_onclick = function(obj,e)
        {
        	var ret;
         	ret = this.objExtCommon._ext_setBeep(1000,500);
        };

        /************************************************************************/
        /* Funciton :     _ext_isWow64											                      	  	   	   	   */
        /************************************************************************/
        this.btn_ext_isWow64_onclick = function(obj,e)
        {
        	var ret = this.objExtCommon._ext_isWow64();
        	if( ret === true)
        		trace("Windows OS 64BIT ");
        	else
        		trace("Windows OS 32BIT ");
        };

        /************************************************************************/
        /* Funciton     :     _ext_setInternetSetCookie											                   */
        //DESC			: 쿠키정보 셋팅 후 url 호출 시점에서 전송..
        //INPUT			: string directory path: 생성하려는 디렉 토리 경로.
        //OUPUT		: bool : true 성공, false : 실패
        /************************************************************************/
        this.btn_ext_setInternetSetCookie_onclick = function(obj,e)
        {
        	var url = "http://www.전송하려는 URL.COM";
        	var name = "cookie";
        	var value = "123";
        	var ret = this.objExtCommon._ext_setInternetSetCookie(url,name,value );
         	trace ( "return : "  +ret );
        };

        /************************************************************************/
        //method		: _ext_getBitCalc
        /*
        Bit연산
        strTag : 문자열로 &,|,>>,<<,~ 중 하나
        value1   : bit연산할 첫번째값
        value2   : bit연산할 2번째 값(shift연산은 shift수)
        */
        //OUPUT			: bit 연산한 결과값.
        /************************************************************************/
        this.btn_ext_getBitCalc_onclick = function(obj,e)
        {
        	var strTag = ">>"; //&,|,>>,<<,~ 중 하나
        	var value1 = 40;
        	var value2 = 1;
        	var ret = this.objExtCommon._ext_getBitCalc(strTag,value1,value2 );
         	trace ( "return : "  +ret );

         	ret = this.objExtCommon._ext_getBitCalc(">>",-65,1 );
         	trace ( "return : "  +ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_setIMEmode											                      	  	   	   */
        /************************************************************************/
        this.btn_ext_setIMEmode_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getIMEmode(); //English : 0 / native : 1
        	if( ret == 0 ) //English
        	{
        		this.objExtCommon._ext_setIMEmode(true); //native
        	}
        	else if( ret == 1 ) //native
        	{
        		this.objExtCommon._ext_setIMEmode(false); // English
        	}
        	trace("IME : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_getIMEmode											                      	  	   	   */
        /************************************************************************/
        this.btn_ext_getIMEmode_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getIMEmode();
        	trace("IME : " + ret ); //English : 0 / native : 1
        };

        /************************************************************************/
        /* Funciton :     _ext_msgBox											                      	  	   	  	   */
        /************************************************************************/
        this.btn_ext_msgBox_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_msgBox("MSG BOX", "MSG HOHOHO" , "MB_YESNO|MB_DEFBUTTON1|MB_ICONSTOP");
        	trace( "_ext_msgBox :: " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_getInternetConnectState											               */
        /************************************************************************/
        this.btn_ext_getInternetConnectState_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getInternetConnectState();

        	trace( "_ext_getInternetConnectState :: " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_setOleServerBusyTimeOut											               */
        /************************************************************************/
        this.btn_ext_setOleServerBusyTimeOut_onclick = function(obj,e)
        {
        	var ret;
        	var strReg = true
        	var iTime = 5000;
        	var bEnable = false;
        	var bBusyDialog = false;
        	ret = this.objExtCommon._ext_setOleServerBusyTimeOut(strReg, iTime, bEnable, bBusyDialog);
        	//------------------------------//
        	// OLE ActiveX 작업..
        	ret = this.objExtCommon._ext_setOleServerBusyTimeOut(false);

        	trace( "ext_setOleServerBusyTimeOut :: " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_getInstallProg											               				   */
        /************************************************************************/
        this.btn_ext_getInstallProg_onclick = function(obj,e)
        {
        	var bInstall = this.objExtCommon._ext_getInstallProg("Excel.Application");
        	if( bInstall )
        	{
        		trace("Prog Install.");
        	}
        	else
        	{
        		trace("Not Prog Install");
        	}

        	bInstall = this.objExtCommon._ext_getInstallProg("{00024500-0000-0000-C000-000000000046}");
        	if( bInstall )
        	{
        		trace("CLSID Install");
        	}
        	else
        	{
        		trace("Not CLSID Install");
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_setShowCursor											               				   */
        /************************************************************************/
        this.btn_ext_setShowCursor_onclick = function(obj,e)
        {
        	var ret = this.objExtCommon._ext_setShowCursor(false);

        	alert("_ext_setShowCursor " + ret);

        	ret = this.objExtCommon._ext_setShowCursor(true);

        	trace(" showcursor "+ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_getNumFormatLoc											               			 */
        /************************************************************************/
        this.btn_ext_getNumFormatLoc_onclick = function(obj,e)
        {
        	var tmp = this.objExtCommon._ext_getNumFormatLoc("12345678009",1062,4);
        	this.Edit01.set_value(tmp);
        	trace(tmp);

        	var jpstr = this.objExtCommon._ext_getNumFormatLoc("123456789","ja",4);
        	trace(jpstr);
        	jpstr = this.objExtCommon._ext_getNumFormatLoc("123456789",1041,4);
        	trace(jpstr);

        	var str = this.objExtCommon._ext_getNumFormatLoc("123456789","ko",4);
        	trace(str);

        	var str = this.objExtCommon._ext_getNumFormatLoc("123456789",0x0412,4);
        	trace(str);
        };

        /************************************************************************/
        /* Funciton :     _ext_getNumLocaleInfo											               			 */
        /************************************************************************/
        this.btm_ext_getNumLocaleInfo_onclick = function(obj,e)
        {
        	var tmp = this.objExtCommon._ext_getNumLocaleInfo(1062,4);
        	trace(tmp);
        	this.Edit01.set_value(tmp);

        	var jpstr = this.objExtCommon._ext_getNumLocaleInfo("ja",4);
        	trace(jpstr);
        	jpstr = this.objExtCommon._ext_getNumLocaleInfo(1041,4);
        	trace(jpstr);

        	var str = this.objExtCommon._ext_getNumLocaleInfo("1041",4);
        	trace(str);
        };

        /************************************************************************/
        /* Funciton :     _ext_getLocaleFormat												               			 */
        /************************************************************************/
        this.btn_ext_getLocaleFormat_onclick = function(obj,e)
        {
        	trace( "LANG : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SLANGUAGE") + " : " );
        	trace( "LANG : " + this.objExtCommon._ext_getLocaleFormat("ko","LOCALE_SLANGUAGE") + " : ");
        	trace( "LANG : " + this.objExtCommon._ext_getLocaleFormat(1042,"LOCALE_SLANGUAGE") + " : " );


        	trace( "Short Date : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SSHORTDATE")   + " : " );
        	trace( "Short Date : " + this.objExtCommon._ext_getLocaleFormat("ko","LOCALE_SSHORTDATE")  + " : " );
        	trace( "Short Date : " + this.objExtCommon._ext_getLocaleFormat(1042,"LOCALE_SSHORTDATE")  + " : " );

        	trace( "Long Date :" + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SLONGDATE")  + " : " );
        	trace( "Long Date :" + this.objExtCommon._ext_getLocaleFormat("ko","LOCALE_SLONGDATE")  + " : " );
        	trace( "Long Date :" + this.objExtCommon._ext_getLocaleFormat(1042,"LOCALE_SLONGDATE")  + " : " );

        	trace( "Time Format : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_STIMEFORMAT") + " : " );
        	trace( "Time Format : " + this.objExtCommon._ext_getLocaleFormat("ko","LOCALE_STIMEFORMAT")  + " : " );
        	trace( "Time Format : " + this.objExtCommon._ext_getLocaleFormat(1042,"LOCALE_STIMEFORMAT")  + " : " );

        	var strFirstDay = this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_IFIRSTDAYOFWEEK");
        	var strFirstDay = this.objExtCommon._ext_getLocaleFormat("ko","LOCALE_IFIRSTDAYOFWEEK");
        	var strFirstDay = this.objExtCommon._ext_getLocaleFormat(1042,"LOCALE_IFIRSTDAYOFWEEK");

        	if( strFirstDay == 0 )
        	{
        		trace( "First Day 0 : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SDAYNAME1") );
        	}
        	else if( strFirstDay == 1 )
        	{
        		trace( "First Day 1 : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SDAYNAME2") );
        	}
        	else if( strFirstDay == 2 )
        	{
        		trace( "First Day 2 : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SDAYNAME3") );
        	}
        	else if( strFirstDay == 3 )
        	{
        		trace( "First Day 3 : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SDAYNAME4") );
        	}
        	else if( strFirstDay == 4 )
        	{
        		trace( "First Day 4 : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SDAYNAME5") );
        	}
        	else if( strFirstDay == 5 )
        	{
        		trace( "First Day 5 : " + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SDAYNAME6") );
        	}
        	else if( strFirstDay == 6 )
        	{
        		trace( "First Day 6 :" + this.objExtCommon._ext_getLocaleFormat("Korean","LOCALE_SDAYNAME7") );
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_getDefaultLocaleInfo												               	 */
        /************************************************************************/
        this.btn_ext_getDefaultLocaleInfo_onclick = function(obj,e)
        {
        	trace("[ " + this.objExtCommon._ext_getDefaultLocaleInfo("GetSystemDefaultUILanguage") + " ]");
        	trace("[ " + this.objExtCommon._ext_getDefaultLocaleInfo("GetSystemDefaultLCID")+ " ]");
        	trace("[ " + this.objExtCommon._ext_getDefaultLocaleInfo("GetSystemDefaultLangID")+ " ]");
        	trace("[ " + this.objExtCommon._ext_getDefaultLocaleInfo("GetUserDefaultLangID")+ " ]");
        };

        /************************************************************************/
        /* Funciton :     _ext_getDateUTC												               				 */
        /************************************************************************/
        this.btn_ext_getDateUTC_onclick = function(obj,e)
        {
        	var gap1= this.objExtCommon._ext_getDateUTC(2005,4,12,0,0,0);
        	trace(gap1);
        };

        /************************************************************************/
        /* Funciton :     _ext_getDriveInfo												               				 */
        /************************************************************************/
        this.btn_ext_getDriveInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getDriveInfo();  //
        	trace( " _ext_getDriveInfo : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_getDriveInfo2												               				 */
        /************************************************************************/
        this.btn_ext_getDriveInfo2_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getDriveInfo2();  //
        	trace( " _ext_getDriveInfo2 : " + ret );

        	var drvinfo = ret;
        	var nlen = ret.length;

        	for(var inx=0; inx < nlen; inx++)
        	{
        		var dv = drvinfo[inx];
        		var curinfo = dv.split("|");
        		trace("name: " + curinfo[0]);
        		trace("type: " + curinfo[1]);
        	}
        };


        /************************************************************************/
        /* Funciton :     _ext_getMonitorInfo												               			 */
        /************************************************************************/
        this.btn_ext_getMonitorInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getMonitorInfo();  //
        	trace( " _ext_getMonitorInfo : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_getMaxMonitorRect												               		 */
        /************************************************************************/
        this.btn_ext_getMaxMonitorRect_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getMaxMonitorRect();  //
        	trace( " _ext_getMaxMonitorRect : " + ret );
        };

        /************************************************************************/
        /* Funciton :     _ext_getGetKeyState												               		 	 */
        /************************************************************************/
        this.btn_ext_getGetKeyState_onclick = function(obj,e)
        {
        	var keyCode = this.objExtCommon._ext_getGetKeyState("CTRL");
        	trace( " _ext_getGetKeyState : " + keyCode );
        };

        /************************************************************************/
        /* Funciton :     _ext_getFindProcessInfo												               		  */
        /************************************************************************/
        this.btn_ext_getFindProcessInfo_onclick = function(obj,e)
        {
        	var ret = this.objExtCommon._ext_getFindProcessInfo("nexacro.exe");

        	trace(ret);

        	var len = ret.length;
        	trace( len );

        	for( var Rowindex=0; Rowindex<len; Rowindex++)
        	{
        		trace( "Rowindex: " +Rowindex+ " info " + ret[Rowindex]);

        		var RetLen = ret[Rowindex].length;

        		for( var Columnindex=0; Columnindex < RetLen; Columnindex++)
        		{
        			if( Columnindex == 4)
        			{
        				trace("------------Process File Info----------------");
        			}

        			trace("Col " + Columnindex + "  : " + ret[Rowindex][Columnindex]);

        		}
        		trace( "\r\n");
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_getProcessMemoryInfo												              */
        /************************************************************************/
        this.btn_ext_getProcessMemoryInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_getProcessMemoryInfo();  //호출한 시점에서의 자신의 Nexacro Process Memory Info
        	var Success = ret[0];  // 함수 호출의 성공 여부.

        	var PeekWorkingSetSzie = 0;
        	var WorkingSetSize = 0;
        	var PrivateUsage = 0;
        	var WorkingSetPrivate = 0; //2017.03.06 add

        	if( Success == 1) // 함수 호출의 성공 여부.
        	{
        		PeekWorkingSetSzie = ret[1];  // byte 수 / 애플리케이션이 시작된후 가장 많은 램을 사용한 순간의 크기 [ byte ]
        		WorkingSetSize = ret[2];	 	 // byte 수 / GetProcessMemoryInfo 함수가 호출된 순간의 램 사용 크기	     [ byte ]
        		PrivateUsage = ret[3];		  	// byte 수 / 	애플리케이션에서 명시적으로 할당한 메모리의 크기			 [ byte ]
        		WorkingSetPrivate = ret[4];	// KB 로 전송 됨 / 작업 관리자 메모리. ( 개인 작업 집합 ) [ KB / kilo byte ]

        		trace("PeekWorkingSetSzie : " + (PeekWorkingSetSzie/1024) + " KB");
        		trace("WorkingSetSize : " + (WorkingSetSize/1024) + " KB");
        		trace("PrivateUsage : " + (PrivateUsage/1024) + " KB");
        		//[ 2017.03.06 add ]
        		trace("WorkingSetPrivate : " + (WorkingSetPrivate/1024) + " MB");
        	}
        	else
        	{
        		trace("Fail " + Success );
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_getGlobalMemoryStatusEx												          */
        /************************************************************************/
        this.btn_ext_getGlobalMemoryStatusEx_onclick = function(obj,e)
        {
        	var retArray;
        	retArray = this.objExtCommon._ext_getGlobalMemoryStatusEx();  //호출한 시점에서의 자신의 Memory Info
        	var Success = retArray[0];  // 함수 호출의 성공 여부.

        	var ullTotalPhys = 0;
        	var ullAvailPhys = 0;
        	var ullTotalPageFile = 0;
        	var ullAvailPageFile = 0;
        	var ullTotalVirtual = 0;
        	var ullAvailVirtual = 0;

        	if( Success == 1) // 함수 호출의 성공 여부.
        	{
        		ullTotalPhys		=  retArray[1];
        		ullAvailPhys 		=  retArray[2];
        		ullTotalPageFile 	=  retArray[3];
        		ullAvailPageFile 	=  retArray[4];
        		ullTotalVirtual 	=  retArray[5];
        		ullAvailVirtual 	=  retArray[6];

        		trace( "Total Physical Memory [ ullTotalPhys ] : " + (ullTotalPhys)  + " KB");
        		trace( "Free Physical Memory [ ullAvailPhys ] : " + ullAvailPhys + " KB" );
        		trace( "Total Virtual Memory (Physical + Page Files size) [ ullTotalPageFile ] : " + (ullTotalPageFile)  + " KB");
        		trace( "Virtual Memory [ ullAvailPageFile ] : " + (ullAvailPageFile) + " KB");
        		trace( "Total Addr. Space (Current Process) [ ullTotalVirtual ] : " + (ullTotalVirtual)+ " KB");
        		trace( "Free Addr. Space (Current Process) [ ullAvailVirtual ] : " + ullAvailVirtual + " KB" );
        	}
        	else
        	{
        		trace("Fail " + Success );
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_getCurrentProcessCPU				Start								          */
        /************************************************************************/
        this.btn_ext_getCurrentProcessCPU_onclick = function(obj,e)
        {
        	//이것이 너무 자주 호출되면 측정 자체가 결과에 큰 영향을줍니다.
        	this.setTimer(1001,1000);
        };

        this.Form_ontimer = function(obj,e)
        {
        	if( e.timerid == 1001 )
        	{
        		//이것이 너무 자주 호출되면 측정 자체가 결과에 큰 영향을줍니다.
        		//작업 관리자의 CPU 사용률가 차이가 있습니다. 이는 호출 시점 과. CPU 사용률 계산 시간과의 딜레이 차이로 인함.
        		var nCpu = this.objExtCommon._ext_getCurrentProcessCPU()
        		var szCpu = ( "CPU : " + nCpu + " %") ;

        		this.Edit02.set_value(szCpu);

        		if(nCpu > 1 )
        		{
        			trace(":: " +nCpu);
        		}
        	}
        };
        /************************************************************************/
        /* Funciton :     _ext_getCurrentProcessCPU				End								          */
        /************************************************************************/
        this.btn_ext_getCurrentProcessCPU00_onclick = function(obj,e)
        {
        	this.killTimer(1001);
        };

        /************************************************************************/
        /* Funciton :     _ext_getUseFont												          						 */
        /************************************************************************/
        this.btn_ext_getUseFont_onclick = function(obj,e)
        {
        	/*
         jquery 사용 시..참고.
         [ https://github.com/beseku/jquery.font ]
        */
        	var szfont = "맑은 고딕";
        	trace("Font ::  " + szfont);
        	var bReturn = this.objExtCommon._ext_getUseFont(szfont);

        	if( bReturn )
        	{
        		alert( "^.^ Font 가 있습니다. : " + bReturn );
        	}
        	else
        	{
        		alert( " >.< Font 가 없습니다. >.< : " + bReturn );
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_getProcessModule												          			 */
        /************************************************************************/
        this.btn_ext_getProcessModule_onclick = function(obj,e)
        {
        	var nProcessID = this.objExtCommon._ext_getCurrentProcessID();
        	var arrayModule = this.objExtCommon._ext_getProcessModule(nProcessID);

        	var nCnt = arrayModule.length;
        	if( nCnt != 0 )
        	{
        		for( var index=0; index < nCnt; index++)
        		{
        			var tmpModule = arrayModule[index];
        			var path = tmpModule.split("\\");
        			var fileName = path.pop(); // 마지막 array 데이터 취득
        			trace("File Name : " + fileName);
        		}
        	}
        	else
        	{
        		alert("Fail Module List.");
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_readFile												          			 				 */
        /************************************************************************/
        this.btn_ext_readFile_onclick = function(obj,e)
        {
        	var ret;
        	ret =  this.objExtCommon._ext_readFile("D:/TEMP_C/ANSI_UTF8.txt");
        	trace("_ext_readFile :--- " +  ret);
        	ret =  this.objExtCommon._ext_readFile("D:/TEMP_C/ANSI2.txt");
        	trace("_ext_readFile :--- " +  ret);
        	ret =  this.objExtCommon._ext_readFile("D:/TEMP_C/BOMNOTutf8.txt");
        	trace("_ext_readFile :--- " +  ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_writeFile												          			 				 */
        // DESC			: 파일을 생성합니다.
        // INPUT			:
        // 				1. string directory path: 생성하려는 파일 경로 및 파일명.
        // 				2. 생성되어질 string 데이터
        // 				현재 파일 포멧
        // 				ANSI  : 정상.
        // 				UTF-8 : 정상.
        // OUPUT			: string : 읽은 파일 데이터.
        /************************************************************************/
        this.btn_ext_writeFile_onclick = function(obj,e)
        {
        //	var path = "C:\\Users\\Administrator\\AppData\\Roaming\\..\\Roaming\\Microsoft\\Windows\\..\\..\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\TEST.INI";
        //	this.objExtCommon._ext_writeFile(path, "1234");


        	var ret;
        	ret = this.objExtCommon._ext_writeFile("D:/test.txt","Chúng ta sẽ gặp nhau lúc mấy giờ?","utf-8");
        return;
        	var ret;
        	ret = this.objExtCommon._ext_writeFile("C:/Program Files/__Encoding/日本/shift_jis.txt","国た外訪れた数者数者の数","shift-jis");
        	ret = this.objExtCommon._ext_writeFile("C:/TEMP/__Encoding/日本/euc_kr.txt","한,글,안,녕,세,요","euc-kr");
        	ret = this.objExtCommon._ext_writeFile("C:/TEMP/__Encoding/日本/3UTF8.csv","한,글,안,녕,세,요");

        	ret = this.objExtCommon._ext_writeFile("C:/TEMP/__Encoding/日本/TEST_ansi.txt","한글","ANSI");
        	ret = this.objExtCommon._ext_writeFile("C:/TEMP/__Encoding/日本/TEST01_ansi.txt","gks");
        	ret = this.objExtCommon._ext_writeFile("C:/TEMP/__Encoding/日本/4UTF8.csv","한,글,안,녕,세,요","utf-8");

        	//개행 문자. \r 을 먼저 적용 시 문서 맥형식으로 인식.
        	var strdata = "962522374|                                                            |201411|1513547  |A|Y| |Y|N|실청구금액을 변경하여 청구서 재발행 요청                                                                                                                                                                |8164807               |           |601709|부산 동구 범일2동 830-295번지삼환오피스텔 505호                                                                                                                                                         | |R| \n\r";
        	ret = this.objExtCommon._ext_writeFile("C:/TEMP/__Encoding/日本/euc.._.kr.txt",strdata,"euc-kr");
        		trace("_ext_writeFile : " +  ret);
        };


        /************************************************************************/
        /* Funciton :     _ext_reNameFile												          			 			 */
        // DESC			: 파일 이름을 변경 합니다.
        // INPUT			:
        // 				1. 원 데이터 파일 파일 경로 및 파일명.
        // 				2. 새롭게 이름을 변경하려는 파일명.
        // 				현재 파일 포멧
        // 				ANSI  : 정상.
        // 				UTF-8 : 정상.
        /************************************************************************/
        this.btn_ext_reNameFile_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_reNameFile("C:/TEMP/__Encoding/日本/shift_jis.txt","C:/TEMP/__Encoding/日本/utf-83한글外訪.txt");
         	trace("_ext_reNameFile : " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_reNameFile												          			 			 */
        // DESC	CopyFile
        // INPUT	1. strExistingFileName	: 복사할 파일 경로
        // 		2. strNewFileName		: 새로운 파일 경로
        // 		3. bFailIfExists		: 덮어 쓸지 말지 True면 같은 파일 있으면 Fail, False면 덮어 쓰기
        // OUPUT	ret : true(성공) or false(실패)
        /************************************************************************/
        this.btn_ext_copyFile_onclick = function(obj,e)
        {
        	var ret;
        	ret = this.objExtCommon._ext_copyFile("C:/TEMP/__Encoding/日本/shift_jis.txt","C:/TEMP/__Encoding/日本/utf-83한글外訪.txt", true);
         	trace("_ext_copyFile : " + ret);

        	ret = this.objExtCommon._ext_copyFile("C:/TEMP/__Encoding/日本/shift_jis.txt","C:/TEMP/__Encoding/日本/utf-83한글外訪.txt", false);
         	trace("_ext_copyFile : " + ret);
        };
        /************************************************************************/
        /* Funciton :     _ext_moveFile												          			 			 */
        // DESC	MoveFile
        // INPUT	1. lpExistingFileName	: 파일 경로
        // 		2. lpNewFileName		: 새로운 파일 경로
        // OUPUT	ret : true(성공) or false(실패)
        /************************************************************************/
        this.btn_ext_moveFile_onclick = function(obj,e)
        {
        	var ret;
         	ret = this.objExtCommon._ext_moveFile("C:/TEMP/__Encoding/日本/shift_jis.txt","C:/TEMP/utf-88.txt");
         	trace("_ext_moveFile : " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_deleteFile												          			 			 */
        /************************************************************************/
        this.btn_ext_deleteFile_onclick = function(obj,e)
        {
        	var ret;
         	ret = this.objExtCommon._ext_deleteFile("C:/TEMP/__Encoding/日本/shift_jis.txt");
         	trace("_ext_deleteFile : " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_existFile												          			 				*/
        // File 존재 유무
        /************************************************************************/
        this.btn_ext_existFile_onclick = function(obj,e)
        {
        	var strFilePath = "C:/TEMP/__Encoding/日本/shift_jis.txt";
        	var ret = this.objExtCommon._ext_existFile(strFilePath);
        	if(ret)
        		trace( "Success " + ret );
        	else
        	{
        		trace( "Fail " + ret );
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_getFileInfo												          						 */
        /************************************************************************/
        this.btn_ext_getFileInfo_onclick = function(obj,e)
        {

        	var tmpPath = "C:\\Users\\Administrator\\Downloads\\NexacroN_2021.9.2.1(21.0.0.102)\\NexacroN_Windows_20210902_1\\NexacroN_SetupStudio.exe";

        	var ret;
        	ret = this.objExtCommon._ext_getFileInfo(tmpPath);
        	trace(ret);

        	var len = ret.length

        	trace("File 설명 :: "			+ ret[0]  + " ]");
        	trace("File 버전 :: "			+ ret[1]  + " ]");
        	trace("File interalname :: "	+ ret[2]  + " ]");
        	trace("file 회사 명 :: "		+ ret[3]  + " ]");
        	trace("file Copyright :: "		+ ret[4]  + " ]");
        	trace("file orignalfilename :: "+ ret[5]  + " ]");
        	trace("file productname :: "	+ ret[6]  + " ]");
        	trace("file productversion :: "	+ ret[7]  + " ]");
        	trace("file Size :: "			+ ret[8] ); //2015.11.16.1 추가. [ Byte ]
        };

        /************************************************************************/
        /* Funciton :     _ext_MmfFileWrite												          					 */
        /************************************************************************/
        this.btn_ext_MmfFileWrite_onclick = function(obj,e)
        {
        	var	ret = false;
        	var i=0;

        	var sData = "A|최용규|12345678890-|10007|A000000486|3|1234567890"+"\n";

        	for(i ; i < 100; i++)
        	{
        		ret = this.objExtCommon.MMFMaping._ext_MmfFileWrite("C:\\Temp\\_MMFileWrite.txt",sData);
        		trace( " " + ret  + ": " + i);
         			if(ret == false)
         				break;
        	}

        	i = 0;
        	for(i ; i <10; i++)
        	{
        		ret = this.objExtCommon.MMFMaping._ext_MmfFileWrite("C:\\Temp\\_MMFileWrite["+i+"].txt",sData);
        		trace( " " + ret  + ": " + i);
         			if(ret == false)
         				break;
        	}

        	sData = "";
        	/************************************************************************/
        	/* Funciton :     _ext_MmfFileClose												          					 */
        	/************************************************************************/
        	trace("_ext_MmfFileClose : " + 	this.objExtCommon.MMFMaping._ext_MmfFileClose() );
        };

        /************************************************************************/
        /* Funciton :     _ext_setRegValue												          					 */
        // 사용자 권한이 레지스트리 접근 쓰기권한이 없으면, 사용 안됨.
        /*
        INPUT
        		string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        		string		   / strPath,	[key 이하의 경로]
        		string		   / strName,	[ 기록할 name ]
        		integer,string / strValue, intValue: [ 기록할 값 strValue ]
        		string 		   / strValueType : "String" 데이터 type 은  string 이다.
        						"String" 이 외의 데이터는 type 은 DWORD 이다.
        OUPUT	ret : true(성공) or false(실패)
        */
        /************************************************************************/
        this.btn_ext_setRegValue_onclick = function(obj,e)
        {

        	var strKey = "HKEY_LOCAL_MACHINE";
        	var strPath = "Software\\Microsoft\\Windows\\..\\..\\Microsoft\\Windows\\CurrentVersion\\Run";
        	var strName = "nexacro.exe";
        	var strValue = 8000;  //[ integer / string ]
        	ret = this.objExtCommon._ext_setRegValue(strKey, strPath, strName, strValue, "DWORD");
        	trace("_ext_setRegValue : "+ret);
        return;

        	var ret;
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";
        	var strName = "setVal";
        	var strValue = "HELLO_안녕/";

        	ret = this.objExtCommon._ext_setRegValue(strKey, strPath, strName, strValue, "STRING");
        	trace("_ext_setRegValue : "+ret);

        	ret;
        	strKey = "HKEY_LOCAL_MACHINE";
        	strPath = "SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\MAIN\\FeatureControl\\FEATURE_BROWSER_EMULATION";
        	strName = "nexacro.exe";
        	strValue = 11001;  //[ integer / string ]

        	ret = this.objExtCommon._ext_setRegValue(strKey, strPath, strName, strValue, "DWORD");
        	trace("_ext_setRegValue : "+ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_getRegValue												          					 */
        /*
        INPUT
        		string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        		string		   / strPath,	[ key 이하의 경로]
        		string		   / strName,	[ 읽어 올 name ]
        		string 		   / strValueType : "String" 데이터 type 은  String 이다.
        										"String" 이 외의 데이터 type 은  DWORD 이다.

        OUPUT	STRING / INTEGER : 위치의 레지스트리 값을 읽은 값.
        */
        /************************************************************************/
        this.btn_ext_getRegValue_onclick = function(obj,e)
        {
        	var ret;
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";
        	var strName =  "UserId";

        	ret = this.objExtCommon._ext_getRegValue(strKey, strPath, strName, "String");
        	trace("_ext_setRegValue : "+ret);

        		ret = this.objExtCommon._ext_getRegValue(strKey, strPath, "setVal", "STRING");
        	trace("_ext_setRegValue : "+ret);

        	ret = this.objExtCommon._ext_getRegValue(strKey, strPath, "IntegerValue", "DWORD");
        	trace("_ext_setRegValue : "+ret);
        };

        /****************************************************************************************************
        DESC	_ext_getRegNameList
        INPUT
        		string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        		string		   / strPath,	[ key 이하의 경로]

        OUPUT	array	해당 path 의 하위 폴더들의 이름들을 array로 리턴한다.
        ****************************************************************************************************/
        this.btn_ext_getRegNameList_onclick = function(obj,e)
        {
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";

        	ret = this.objExtCommon._ext_getRegNameList(strKey, strPath);
        	trace("_ext_getRegNameList : "+ret);
        };

        /****************************************************************************************************
        DESC	_ext_getRegValueList
        INPUT
        string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        string		   / strPath,	[ key 이하의 경로]

        OUPUT	array	해당 path 에 속한 VALUE들의 이름을 array로 리턴한다.
        ****************************************************************************************************/
        this.btn_ext_getRegValueList_onclick = function(obj,e)
        {
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";

        	ret = this.objExtCommon._ext_getRegValueList(strKey, strPath);
        	trace("_ext_getRegValueList : "+ret);
        };

        this.btn_Registry_64bit_or_32bit_onclick = function(obj,e)
        {
        	var rtn = this.objExtCommon._ext_getRegValue("HKEY_LOCAL_MACHINE", "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion", "CurrentVersion", "String" );

        	if(rtn == "6.1"){
        		trace("Windows 7");
        	}
        	else
        	{
        		trace("OS Version :: " + rtn);
        	}

        	var bOSVER = this.objExtCommon._ext_isWow64();
        	if( bOSVER === true)
        		trace("Windows OS 64BIT ");
        	else
        		trace("Windows OS 32BIT ");

        };

        /************************************************************************/
        /* Funciton :     _ext_EmptyWorkingSet												          					 */
        /************************************************************************/
        this.btn_ext_EmptyWorkingSet_onclick = function(obj,e)
        {
        	var ret;
         	ret = this.objExtCommon._ext_EmptyWorkingSet();
         	trace("_ext_EmptyWorkingSet: " + ret);
        };

        /************************************************************************/
        /* Funciton :     _ext_getTextToBin												          					 	*/
        /************************************************************************/
        this.btn_ext_getTextToBin_onclick = function(obj,e)
        {
        	var binary_data = this.objExtCommon._ext_getTextToBin("123456asdf_한글")
        	trace( "U_ext_getTextToBin  Decode ::" +binary_data);
        	trace("BinToText :: " + this.objExtCommon._ext_getBinToText(binary_data));
        };

        /************************************************************************/
        /* Funciton :     _ext_getLengthB												          					 		*/
        /************************************************************************/
        this.btn_ext_getLengthB_onclick = function(obj,e)
        {
        	var AnsiLenb = this.objExtCommon._ext_getLengthB("Text가나다");
        	trace( "ANSI LengthB " + AnsiLenb );

        	AnsiLenb = this.objExtCommon._ext_getLengthB("");
        	trace( "ANSI LengthB " + AnsiLenb );

        	var Utf8Lenb = this.objExtCommon._ext_getLengthB("Text가나다","utf-8");
        	trace( "UTF-8 LengthB " + Utf8Lenb );
        };

        /************************************************************************/
        /* Funciton :     _ext_getFindMiplatformOnlyOne												          		 */
        /************************************************************************/
        this.btn_ext_getFindMiplatformOnlyOne_onclick = function(obj,e)
        {
        	 var bRet = this.objExtCommon._ext_getFindMiplatformOnlyOne("TobeNext_U", "", "Miplatform320u") ;

        	 if(bRet)
        	{
        		trace("Success 해당 프로그램이 활성화 되어 있지 않습니다.");
        	}
        	else
        	{
        		trace("Failed 해당 프로그램이 활성화 되어 있습니다.");
        	}
        };

        /************************************************************************/
        /* Funciton :     _ext_getComPortList												          		 				 */
        /************************************************************************/
        this.btn_ext_getComPortList_onclick = function(obj,e)
        {
        	var arrayCOMPORT;
        	arrayCOMPORT = this.objExtCommon._ext_getComPortList();

        	if( arrayCOMPORT )
        	{
        		var nCnt = arrayCOMPORT.length;

        		if( nCnt != 0 )
        		{
        			for( var index=0; index < nCnt; index++)
        			{
        				trace("사용 가능한 COMPORT : " + arrayCOMPORT[index] );
        			}
        		}
        		else
        		{
        			alert("COMPORT 가 없습니다.");
        		}
        	}
        	else
        	{
        		alert("COMPORT 가 없습니다.");
        	}
        };

        this.btn_ext_messagebox_onclick = function(obj,e)
        {
        	 var bRet = this.objExtCommon._ext_messagebox("HELLO Nexacro V17");
        };

        this.btn_ext_sum_onclick = function(obj,e)
        {
        	var arg1 = 1;
        	var arg2 = 2;
        	var sum = this.objExtCommon._ext_sum(arg1, arg2);
        	trace(sum);
        };

        this.btn_ext_strcat_onclick = function(obj,e)
        {
        	var arg1 = "안녕";
        	var arg2 = " HELLO";
        	var sum = this.objExtCommon._ext_strcat(arg1, arg2);
        	trace(sum);
        };



        this.btn_ext_getIPAdapterInfo_onclick = function(obj,e)
        {
        	var ipArray = this.objExtCommon._ext_getIPAdapterInfo();
        	trace( "Adp info : " + ipArray);
        	var Adplen = ipArray.length;
        	var index=0;
        	for(index = 0; index < Adplen; index++)
        	{
        		var detailinfo = ipArray[index];
        		trace( "설명 : " + detailinfo[0]);
        		trace( "이름 : " + detailinfo[1]);
        		trace( "포멧 : " + detailinfo[2]);
        		trace( "아이피 : " + detailinfo[3]);
        		trace( "마스크 : " + detailinfo[4]);
        		trace( "게이트웨이 : " + detailinfo[5]);
        		trace( "MAC : " + detailinfo[6]);
        		trace( "IPV6 : " + detailinfo[7]);

        		trace( "\r\n");
        	}
        };

        this.btn_ext_getPrimaryHDDSerial_onclick = function(obj,e)
        {
        /*
        	var szSerial = this.objExtCommon._ext_getPrimaryHDDSerial(0);
        	trace(szSerial);
        	trace( "Seria Number : " + szSerial[0] );
        	trace( "Product ID : " + szSerial[1] );
        	trace( "Device's product revision : " + szSerial[2] );
        	trace( "Vender ID : " + szSerial[3] );
        	trace( "Bus Type : " + szSerial[4] );

        	if( szSerial[5] == true )
        	{
        		trace( "장치 제거 가능." + szSerial[5] );
        	}
        	else
        	{
        		trace( "장치 제거 불가능." + szSerial[5] );
        	}
        return;
        //*/
        ///*
        	var ret = this.objExtCommon._ext_getDriveInfo2();
        	var drvinfo = ret;
        	var nlen = ret.length;
        //*/
        	for( var nNumberDisk = 0; nNumberDisk < nlen; nNumberDisk++)
        	{
        		var dv = drvinfo[nNumberDisk];
        		var curinfo = dv.split("|");
        		trace("name: " + curinfo[0]);
        		trace("type: " + curinfo[1]);

        		var szSerial = this.objExtCommon._ext_getPrimaryHDDSerial(nNumberDisk);

        		if( szSerial[0] != -1 )
        		{
        			trace("==================================================");
        			trace( "Seria Number : " + szSerial[0] );
        			trace( "Product ID : " + szSerial[1] );
        			trace( "Device's product revision : " + szSerial[2] );
        			trace( "Vender ID : " + szSerial[3] );
        			trace( "Bus Type : " + szSerial[4] );

        			if( szSerial[5] == true )
        			{
        				trace( "장치 제거 가능." + szSerial[5] );
        			}
        			else
        			{
        				trace( "장치 제거 불가능." + szSerial[5] );
        			}
        			trace("==================================================");
        		}
        		else
        		{
        			trace( "Error Value : " + szSerial[0] );
        			trace( "Error Message : " + szSerial[1] );
        		}

        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("onclose",this.Form_onclose,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btn_ext_excuteProcess.addEventHandler("onclick",this.btn_ext_excuteProcess_onclick,this);
            this.btn_ext_winExec.addEventHandler("onclick",this.btn_ext_winExec_onclick,this);
            this.btn_ext_excuteAppPostion.addEventHandler("onclick",this.btn_ext_excuteAppPostion_onclick,this);
            this.btn_ext_killProcessAll.addEventHandler("onclick",this.btn_ext_killProcessAll_onclick,this);
            this.btn_ext_killProcessID.addEventHandler("onclick",this.btn_ext_killProcessID_onclick,this);
            this.btn_ext_getCurrentProcessID.addEventHandler("onclick",this.btn_ext_getCurrentProcessID_onclick,this);
            this.btn_ext_getProcessNameHandle.addEventHandler("onclick",this.btn_ext_getProcessNameHandle_onclick,this);
            this.btn_ext_getSystemDir.addEventHandler("onclick",this.btn_ext_getSystemDir_onclick,this);
            this.btn_ext_getCheckDir.addEventHandler("onclick",this.btn_ext_getCheckDir_onclick,this);
            this.btn_ext_setTime.addEventHandler("onclick",this.btn_ext_setTime_onclick,this);
            this.btn_ext_getTime.addEventHandler("onclick",this.btn_ext_getTime_onclick,this);
            this.btn_ext_getIPAddress.addEventHandler("onclick",this.btn_ext_getIPAddress_onclick,this);
            this.btn_ext_getMACAddress.addEventHandler("onclick",this.btn_ext_getMACAddress_onclick,this);
            this.btn_ext_setURLencode.addEventHandler("onclick",this.btn_ext_setURLencode_onclick,this);
            this.btn_ext_setBase64encode__ext_getBase64decode.addEventHandler("onclick",this.btn_ext_setBase64encode__ext_getBase64decode_onclick,this);
            this.btn_ext_getPrintList.addEventHandler("onclick",this.btn_ext_getPrintList_onclick,this);
            this.btn_ext_setDefaultPrinter.addEventHandler("onclick",this.btn_ext_setDefaultPrinter_onclick,this);
            this.btn_ext_getDefaultPrinter.addEventHandler("onclick",this.btn_ext_getDefaultPrinter_onclick,this);
            this.btn_ext_setPageOption.addEventHandler("onclick",this.btn_ext_setPageOption_onclick,this);
            this.btn_ext_setPrintOption.addEventHandler("onclick",this.btn_ext_setPrintOption_onclick,this);
            this.btn_ext_setPrintOrientation.addEventHandler("onclick",this.btn_ext_setPrintOrientation_onclick,this);
            this.btn_ext_selectFolderPath.addEventHandler("onclick",this.btn_ext_selectFolderPath_onclick,this);
            this.btn_ext_getFileList.addEventHandler("onclick",this.btn_ext_getFileList_onclick,this);
            this.btn_ext_getKeyCheck.addEventHandler("onclick",this.btn_ext_getKeyCheck_onclick,this);
            this.btn_ext_getHostName.addEventHandler("onclick",this.btn_ext_getHostName_onclick,this);
            this.btn_ext_getUserName.addEventHandler("onclick",this.btn_ext_getUserName_onclick,this);
            this.btn_ext_getFileDateInfo.addEventHandler("onclick",this.btn_ext_getFileDateInfo_onclick,this);
            this.btn_ext_getSystemEnv.addEventHandler("onclick",this.btn_ext_getSystemEnv_onclick,this);
            this.btn_ext_getFontInfo.addEventHandler("onclick",this.btn_ext_getFontInfo_onclick,this);
            this.btn_ext_writeUProfile.addEventHandler("onclick",this.btn_ext_writeUProfile_onclick,this);
            this.btn_ext_readUProfile.addEventHandler("onclick",this.btn_ext_readUProfile_onclick,this);
            this.btn_ext_getAppPath.addEventHandler("onclick",this.btn_ext_getAppPath_onclick,this);
            this.btn_ext_getTraySizeInfo.addEventHandler("onclick",this.btn_ext_getTraySizeInfo_onclick,this);
            this.btn_ext_getDesktopWorkArea.addEventHandler("onclick",this.btn_ext_getDesktopWorkArea_onclick,this);
            this.btn_ext_setSecuritySite.addEventHandler("onclick",this.btn_ext_setSecuritySite_onclick,this);
            this.btn_ext_setTopWindows.addEventHandler("onclick",this.btn_ext_setTopWindows_onclick,this);
            this.btn_ext_getFindWindows.addEventHandler("onclick",this.btn_ext_getFindWindows_onclick,this);
            this.btn_ext_getFindAllWinHwnd.addEventHandler("onclick",this.btn_ext_getFindAllWinHwnd_onclick,this);
            this.btn_ext_windowSendMSG.addEventHandler("onclick",this.btn_ext_windowSendMSG_onclick,this);
            this.btn_ext_delDirectory.addEventHandler("onclick",this.btn_ext_delDirectory_onclick,this);
            this.btn_ext_CreateDirectory.addEventHandler("onclick",this.btn_ext_CreateDirectory_onclick,this);
            this.btn_ext_setBeep.addEventHandler("onclick",this.btn_ext_setBeep_onclick,this);
            this.btn_ext_isWow64.addEventHandler("onclick",this.btn_ext_isWow64_onclick,this);
            this.btn_ext_setInternetSetCookie.addEventHandler("onclick",this.btn_ext_setInternetSetCookie_onclick,this);
            this.btn_ext_getBitCalc.addEventHandler("onclick",this.btn_ext_getBitCalc_onclick,this);
            this.btn_ext_setIMEmode.addEventHandler("onclick",this.btn_ext_setIMEmode_onclick,this);
            this.btn_ext_getIMEmode.addEventHandler("onclick",this.btn_ext_getIMEmode_onclick,this);
            this.btn_ext_msgBox.addEventHandler("onclick",this.btn_ext_msgBox_onclick,this);
            this.btn_ext_getInternetConnectState.addEventHandler("onclick",this.btn_ext_getInternetConnectState_onclick,this);
            this.btn_ext_setOleServerBusyTimeOut.addEventHandler("onclick",this.btn_ext_setOleServerBusyTimeOut_onclick,this);
            this.btn_ext_getInstallProg.addEventHandler("onclick",this.btn_ext_getInstallProg_onclick,this);
            this.btn_ext_setShowCursor.addEventHandler("onclick",this.btn_ext_setShowCursor_onclick,this);
            this.btn_ext_getNumFormatLoc.addEventHandler("onclick",this.btn_ext_getNumFormatLoc_onclick,this);
            this.btm_ext_getNumLocaleInfo.addEventHandler("onclick",this.btm_ext_getNumLocaleInfo_onclick,this);
            this.btn_ext_getLocaleFormat.addEventHandler("onclick",this.btn_ext_getLocaleFormat_onclick,this);
            this.btn_ext_getDefaultLocaleInfo.addEventHandler("onclick",this.btn_ext_getDefaultLocaleInfo_onclick,this);
            this.btn_ext_getDateUTC.addEventHandler("onclick",this.btn_ext_getDateUTC_onclick,this);
            this.btn_ext_getDriveInfo.addEventHandler("onclick",this.btn_ext_getDriveInfo_onclick,this);
            this.btn_ext_getDriveInfo2.addEventHandler("onclick",this.btn_ext_getDriveInfo2_onclick,this);
            this.btn_ext_getMonitorInfo.addEventHandler("onclick",this.btn_ext_getMonitorInfo_onclick,this);
            this.btn_ext_getMaxMonitorRect.addEventHandler("onclick",this.btn_ext_getMaxMonitorRect_onclick,this);
            this.btn_ext_getGetKeyState.addEventHandler("onclick",this.btn_ext_getGetKeyState_onclick,this);
            this.btn_ext_getFindProcessInfo.addEventHandler("onclick",this.btn_ext_getFindProcessInfo_onclick,this);
            this.btn_ext_getProcessMemoryInfo.addEventHandler("onclick",this.btn_ext_getProcessMemoryInfo_onclick,this);
            this.btn_ext_getGlobalMemoryStatusEx.addEventHandler("onclick",this.btn_ext_getGlobalMemoryStatusEx_onclick,this);
            this.btn_ext_getCurrentProcessCPU.addEventHandler("onclick",this.btn_ext_getCurrentProcessCPU_onclick,this);
            this.btn_ext_getCurrentProcessCPU00.addEventHandler("onclick",this.btn_ext_getCurrentProcessCPU00_onclick,this);
            this.btn_ext_getUseFont.addEventHandler("onclick",this.btn_ext_getUseFont_onclick,this);
            this.btn_ext_getProcessModule.addEventHandler("onclick",this.btn_ext_getProcessModule_onclick,this);
            this.btn_ext_readFile.addEventHandler("onclick",this.btn_ext_readFile_onclick,this);
            this.btn_ext_writeFile.addEventHandler("onclick",this.btn_ext_writeFile_onclick,this);
            this.btn_ext_reNameFile.addEventHandler("onclick",this.btn_ext_reNameFile_onclick,this);
            this.btn_ext_copyFile.addEventHandler("onclick",this.btn_ext_copyFile_onclick,this);
            this.btn_ext_moveFile.addEventHandler("onclick",this.btn_ext_moveFile_onclick,this);
            this.btn_ext_deleteFile.addEventHandler("onclick",this.btn_ext_deleteFile_onclick,this);
            this.btn_ext_existFile.addEventHandler("onclick",this.btn_ext_existFile_onclick,this);
            this.btn_ext_getFileInfo.addEventHandler("onclick",this.btn_ext_getFileInfo_onclick,this);
            this.btn_ext_MmfFileWrite.addEventHandler("onclick",this.btn_ext_MmfFileWrite_onclick,this);
            this.btn_ext_setRegValue.addEventHandler("onclick",this.btn_ext_setRegValue_onclick,this);
            this.btn_ext_getRegValue.addEventHandler("onclick",this.btn_ext_getRegValue_onclick,this);
            this.btn_ext_getRegNameList.addEventHandler("onclick",this.btn_ext_getRegNameList_onclick,this);
            this.btn_ext_getRegValueList.addEventHandler("onclick",this.btn_ext_getRegValueList_onclick,this);
            this.btn_Registry_64bit_or_32bit.addEventHandler("onclick",this.btn_Registry_64bit_or_32bit_onclick,this);
            this.btn_ext_EmptyWorkingSet.addEventHandler("onclick",this.btn_ext_EmptyWorkingSet_onclick,this);
            this.btn_ext_getTextToBin.addEventHandler("onclick",this.btn_ext_getTextToBin_onclick,this);
            this.btn_ext_getLengthB.addEventHandler("onclick",this.btn_ext_getLengthB_onclick,this);
            this.btn_ext_getFindMiplatformOnlyOne.addEventHandler("onclick",this.btn_ext_getFindMiplatformOnlyOne_onclick,this);
            this.btn_ext_getComPortList.addEventHandler("onclick",this.btn_ext_getComPortList_onclick,this);
            this.btn_ext_messagebox.addEventHandler("onclick",this.btn_ext_messagebox_onclick,this);
            this.btn_ext_sum.addEventHandler("onclick",this.btn_ext_sum_onclick,this);
            this.btn_ext_strcat.addEventHandler("onclick",this.btn_ext_strcat_onclick,this);
            this.btn_ext_getIPAdapterInfo.addEventHandler("onclick",this.btn_ext_getIPAdapterInfo_onclick,this);
            this.btn_ext_getPrimaryHDDSerial.addEventHandler("onclick",this.btn_ext_getPrimaryHDDSerial_onclick,this);
        };
        this.loadIncludeScript("_ExtCommonApi_NexacroV_N.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
