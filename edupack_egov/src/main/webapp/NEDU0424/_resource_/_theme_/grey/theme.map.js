(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#272B37")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #646982")
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"deactivate" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon.png')"),
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            								"color" : nexacro.ColorObject("#5B5E6A"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon.png')"),
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            								"color" : nexacro.ColorObject("#5B5E6A"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon.png')"),
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            								"color" : nexacro.ColorObject("#5B5E6A"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon.png')"),
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            								"color" : nexacro.ColorObject("#5B5E6A"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_D.png\")")
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
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("5px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("5px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
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
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
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
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
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
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							}
            						}
            					},
            					"SpinControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")"),
            								"padding" : nexacro.PaddingObject("0px")
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
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")"),
            												"border" : nexacro.BorderObject("0px none")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
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
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_D.png\")")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_drop_D.png\")")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #272B37")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #272B37")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									},
            									"mouseover" :
            									{
            									},
            									"focused" :
            									{
            									},
            									"selected" :
            									{
            									}
            								}
            							},
            							"ComboControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            									},
            									"mouseover" :
            									{
            									},
            									"focused" :
            									{
            									},
            									"selected" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("5px 0px 5px 5px")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_ON.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DN.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NS.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NS.png\")")
            					},
            					"focused_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NS.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DS.png\")")
            					}
            				}
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"focused" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("5px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_ON.png\")")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DN.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NS.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NS.png\")")
            					},
            					"focused_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_NS.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_check_DS.png\")")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_NN.png\")"),
            								"textPadding" : nexacro.PaddingObject("5px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_ON.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_DN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_NS.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_NS.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_DS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"RadioItemControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/img_radio_ON.png')")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/img_radio_DN.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/img_radio_NS.png')")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/img_radio_NS.png')")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/img_radio_DS.png')")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37"),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37"),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"fileuploaditem" :
            			{
            				"parent" :
            				{
            					"FileUpload" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"focused" :
            									{
            									},
            									"readonly" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            										"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            										"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            										"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #272B37"),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #272B37"),
            										"color" : nexacro.ColorObject("#646982")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            										"color" : nexacro.ColorObject("#A9B4BF")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
            						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37"),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37"),
            						"color" : nexacro.ColorObject("#646982")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("2px"),
            						"color" : nexacro.ColorObject("#424557")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"padding" : nexacro.PaddingObject("2px"),
            						"color" : nexacro.ColorObject("#424557")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"progressbar" :
            					{
            						"parent" :
            						{
            							"StatusBarControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("1px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #CCCCCC")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"textPadding" : nexacro.PaddingObject("0px 5px 0px 5px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabNext_N.png\")"),
            								"padding" : nexacro.PaddingObject("5px 5px 5px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabNext_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabNext_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabNext_O.png\")")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_N.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_O.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_O.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_D.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_MenuPrev_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabPrev_N.png\")"),
            								"padding" : nexacro.PaddingObject("5px 3px 5px 5px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabPrev_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabPrev_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabPrev_O.png\")")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_N.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_O.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_O.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_D.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_MenuNext_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_O.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_O.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_O.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_D.png\")"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent, 1px solid #CCCCCC, 1px solid transparent, 1px solid transparent"),
            								"color" : nexacro.ColorObject("#2F333E")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent, 1px solid #CCCCCC, 1px solid transparent, 1px solid transparent"),
            								"color" : nexacro.ColorObject("#24272E")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid transparent, 1px solid #CCCCCC, 1px solid transparent, 1px solid transparent"),
            								"color" : nexacro.ColorObject("#24272E")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#B7C0C9")
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 20px 0px 20px"),
            										"font" : nexacro.FontObject("bold 13px/30px \"Malgun Gothic\"")
            									},
            									"mouseover" :
            									{
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#3F4354")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #CCCCCC, 0px none, 0px none, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #CCCCCC, 0px none, 0px none, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #CCCCCC, 0px none, 0px none, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #CCCCCC, 0px none, 0px none, 0px none")
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"readonly" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            								"border" : nexacro.BorderObject("0px none")
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
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_O.png\")"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinDown_D.png\")")
            							}
            						}
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
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_SpinUp_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#272B37")
            							}
            						}
            					},
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#272B37")
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
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#272B37")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#4A98FF")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#FF5BA8")
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
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#4F525B")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#4A98FF")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#FF5BA8")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#B5B5B5")
            									},
            									"today" :
            									{
            									},
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DADCE1, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #E0E6EA")
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_D.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_D.png\")")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #DADCE1"),
            						"padding" : nexacro.PaddingObject("1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #E0E6EA")
            					}
            				}
            			},
            			"VScrollIndicatorControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("1px")
            					}
            				}
            			},
            			"HScrollIndicatorControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("1px")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #DADCE1")
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
            												"border" : nexacro.BorderObject("0px none,1px solid #DADCE1,1px solid #DADCE1,0px none")
            											}
            										}
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
            												"border" : nexacro.BorderObject("0px none,1px solid #DADCE1,1px solid #DADCE1,0px none"),
            												"padding" : nexacro.PaddingObject("2px")
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
            												"border" : nexacro.BorderObject("0px none,1px solid #8CE1DB,0px none,0px none"),
            												"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellselection" :
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
            														"border" : nexacro.BorderObject("2px dotted #C0C0C0")
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
            			"cellradioitem" :
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
            														"icon" : nexacro.UrlObject("url(\"theme://images/img_radio_NN.png\")"),
            														"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL('theme://images/img_radio_ON.png')")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("URL('theme://images/img_radio_DN.png')")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("URL('theme://images/img_radio_NS.png')")
            													},
            													"mouseover_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL('theme://images/img_radio_NS.png')")
            													},
            													"disabled_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL('theme://images/img_radio_DS.png')")
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
            								"border" : nexacro.BorderObject("1px solid #8CE1DB"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#272B37")
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
            								"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px"),
            								"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#646982")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#272B37")
            							},
            							"pushed" :
            							{
            								"color" : nexacro.ColorObject("#272B37")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_GridExpand_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_GridExpand_O.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_GridExpand_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_GridExpand_O.png\")")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_GridExpand_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_GridExpand_O.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_GridExpand_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_GridExpand_O.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_GridExpand_O.png')")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeExpand.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeCollapse.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeOpen.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeClose.png\")")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/img_TreeItem.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #C0C0C0")
            							}
            						}
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 25px 0px 25px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#FFFFFF")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#FFFFFF")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#515764")
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#272B37")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px 10px 5px 10px"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#272B37")
            							},
            							"mouseover" :
            							{
            							},
            							"focused" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"disabled" :
            									{
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/ico_menu.png\")"),
            										"padding" : nexacro.PaddingObject("0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/ico_menu.png\")"),
            										"padding" : nexacro.PaddingObject("0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#A9B4BF")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            										"color" : nexacro.ColorObject("#A9B4BF")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Plugin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					}
            				}
            			},
            			"PluginControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"color" : nexacro.ColorObject("#272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"SketchControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC"),
            						"color" : nexacro.ColorObject("#272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_Stepitem_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_Stepitem_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_Stepitem_O.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_Stepitem_O.png')")
            							}
            						}
            					}
            				}
            			},
            			"WebBrowser" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					}
            				}
            			},
            			"WebBrowserControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					}
            				}
            			},
            			"WebView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					}
            				}
            			},
            			"WebViewControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #CCCCCC")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #272B37")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            						"color" : nexacro.ColorObject("#A9B4BF")
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #CCCCCC, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #CCCCCC, 0px none")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #CCCCCC, 0px none")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #E0E6EA"),
            								"color" : nexacro.ColorObject("#A9B4BF")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("3px")
            					}
            				}
            			},
            			"statustext" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12pt \"Malgun Gothic\"")
            							}
            						}
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #D7D9E4"),
            								"padding" : nexacro.PaddingObject("5px")
            							}
            						}
            					}
            				}
            			},
            			"resizegrip" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_grip.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
        imgcache[nexacro._getImageLocation("theme://images/titlebar_icon.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_N.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_D.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_O.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_N.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_O.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_D.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_N.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_O.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_D.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_O.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_ON.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_NN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_ON.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_DN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_NS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_radio_DS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabNext_N.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabNext_O.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabPrev_N.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabPrev_O.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_O.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_O.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_O.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_D.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_O.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_D.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_N.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_O.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_D.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_N.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_O.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_D.png")] = { width:4, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_N.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_O.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_D.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_N.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_O.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_D.png")] = { width:8, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:20, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_O.png")] = { width:20, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MenuPrev_N.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MenuNext_N.png")] = { width:8, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_O.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_O.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:11, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_menu_check.png")] = { width:13, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_menu_checkD.png")] = { width:13, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_menu.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Stepitem_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Stepitem_O.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:12, height:13 };
	};
}
)();
