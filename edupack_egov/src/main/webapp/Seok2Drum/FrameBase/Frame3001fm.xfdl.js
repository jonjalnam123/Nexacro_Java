(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameFooter");
            this.set_titletext("푸터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staFooterTitle","100",null,null,"100","100","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객센터 : 010-3333-3333\r\n주소 : 서울 특별시 봉은사로 12길 아이티센터 3층\r\n메일 : seok2drum@aaaaa.com");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_color("white");
            obj.set_font("bold 16px/normal \"한컴 고딕\"");
            obj.set_borderRadius("20px 20px 0px 0px");
            obj.set_background("pink");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame3001fm.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Frame3001fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
