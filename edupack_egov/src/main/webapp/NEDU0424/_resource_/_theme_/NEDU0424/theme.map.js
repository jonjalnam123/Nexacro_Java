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
            						"padding" : nexacro.PaddingObject("0px 15px"),
            						"color" : nexacro.ColorObject("black"),
            						"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            						"border" : nexacro.BorderObject("1px solid magenta"),
            						"letterSpacing" : nexacro.CSSValueObject("2px")
            					},
            					"pushed" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("white"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDn.png')"),
            									"iconPosition" : "right",
            									"border" : nexacro.BorderObject("1px solid white"),
            									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_DELETE" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #ee1b22"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px"),
            									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid green"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px"),
            									"color" : nexacro.ColorObject("white"),
            									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid gray")
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxM.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxS.png')")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxMS.png')")
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"wordWrap" : "char",
            						"padding" : nexacro.PaddingObject("10px")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid red"),
            								"padding" : nexacro.PaddingObject("10px")
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #c4c4c4")
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#262626")
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtn.png')")
            							}
            						}
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px")
            							}
            						}
            					}
            				}
            			},
            			"datepicker" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid #c4c4c4")
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("white")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("white")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtn.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtn.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("white")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUp.png')")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUp.png')")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDn.png')")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDn.png')")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("white")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"sunday" :
            											{
            												"color" : nexacro.ColorObject("#e03c0a")
            											},
            											"saturday" :
            											{
            												"color" : nexacro.ColorObject("#2a689c")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											},
            											"today" :
            											{
            											},
            											"trailingday" :
            											{
            												"color" : nexacro.ColorObject("#e9e9e9")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("2px solid #c4c4c4")
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpD.png')")
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnD.png')")
            							}
            						}
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("green")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("red")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #434343, 1px solid #434343")
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d8d9da")
            							}
            						}
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("black"),
            												"border" : nexacro.BorderObject("1px solid #c4c4c4")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										}
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #c4c4c4")
            											}
            										}
            									}
            								}
            							},
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #c4c4c4")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c6c7c9")
            							}
            						}
            					}
            				}
            			},
            			"summary" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d8d9da")
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')")
            													}
            												}
            											}
            										}
            									},
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid red")
            							}
            						}
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDn.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete.png")] = { width:30, height:41 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxMS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtn.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUp.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpD.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnD.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Edge.png")] = { width:100, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtnP.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_ReadDrop.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnP.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpP.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUp.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropBtn.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropBtnP.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeIconColl.png")] = { width:7, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeIconExp.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_RepeatX.png")] = { width:2, height:48 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_NexacroN.png")] = { width:156, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_EdgeSampleImg.png")] = { width:15, height:21 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_NexacroIcon.png")] = { width:128, height:128 };
	};
}
)();
