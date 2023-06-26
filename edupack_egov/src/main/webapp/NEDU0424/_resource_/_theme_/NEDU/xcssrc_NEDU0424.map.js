(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("red")
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
