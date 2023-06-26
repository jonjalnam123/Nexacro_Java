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
            						"color" : nexacro.ColorObject("#262626"),
            						"font" : nexacro.FontObject("12px \"Verdana\", \"Malgun Gothic\"")
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
            						"border" : nexacro.BorderObject("1px solid #9d9d9d")
            					}
            				}
            			},
            			"titlebar" :
            			{
            				"parent" :
            				{
            					"ChildFrame" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MaxP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Max.png')")
            									}
            								}
            							}
            						}
            					},
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Max.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_MaxP.png\")")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min.png')")
            									}
            								}
            							}
            						}
            					},
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min.png')"),
            								"padding" : nexacro.PaddingObject("8px 0px 0px")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinP.png')")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_TF_NormalP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Normal.png')")
            									}
            								}
            							}
            						}
            					},
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_NormalP.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/btn_TF_CloseP.png')")
            									},
            									"mouseover" :
            									{
            									},
            									"pushed" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Close.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseP.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseP.png\")")
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
            						"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 2px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
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
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
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
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_LF_Detail" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												}
            											}
            										}
            									}
            								]
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
            						"border" : nexacro.BorderObject("1px solid #c4c4c4, 0px none, 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("2px 0px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            						"color" : nexacro.ColorObject("#0e2436"),
            						"font" : nexacro.FontObject("12px \"Verdana\", \"Malgun Gothic\"")
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
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_WF_GTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#0b1742")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#0b1742")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GStatus" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#746f6f")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GSize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineV" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineV.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineH" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineH.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_Right" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #d3dce1,1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Welcome" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #7aaed9, 0px none, 0px none"),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MDI_Line" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #d3dce1,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_Section" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleMain" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 15px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SearchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 13px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px"),
            									"padding" : nexacro.PaddingObject("5px 0px 0px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px"),
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailLabelEn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("0px"),
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#000000"),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Desc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("10px 7px"),
            									"border" : nexacro.BorderObject("1px solid #7aaed9"),
            									"font" : nexacro.FontObject("12px/21px \"Verdana\",\"MalgunGothic\""),
            									"wordWrap" : "char"
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_PdvCalbg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #1f2b36,1px solid #1a0461,1px solid #1f2b36")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_PdvCalYYYY" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Contents" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"wordWrap" : "english",
            									"padding" : nexacro.PaddingObject("5px"),
            									"font" : nexacro.FontObject("12px/18px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#7b7b7b")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"edt_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								}
            							}
            						}
            					},
            					{
            						"edt_WF_Readonly" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								}
            							}
            						}
            					},
            					{
            						"edt_LF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_LOGIN_ID" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 48px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_LOGIN_PW" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 48px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"padding" : nexacro.PaddingObject("1px 0px 0px 38px"),
            									"font" : nexacro.FontObject("18px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#7b7b7b")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#e03c0a")
            					}
            				},
            				"class" :
            				[
            					{
            						"msk_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								}
            							}
            						}
            					},
            					{
            						"msk_WF_Readonly" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#7b7b7b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("8px 8px 0px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("12px/20px \"Verdana\", \"Malgun Gothic\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#7b7b7b")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"txt_WF_Essential" :
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
            				]
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"pushed" :
            					{
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#9d9d9d")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Prev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
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
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Next" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
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
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 15px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#dfe83f"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 15px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#dfe83f"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 15px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#dfe83f"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 15px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#dfe83f"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("bold 15px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Find.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Find.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Find.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Find.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Find.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_MymenuIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Mymenu.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Mymenu.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MymenuS.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MymenuS.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MymenuS.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MymenuS.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_MenuIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Menu.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Menu.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MenuS.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MenuS.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MenuS.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_MenuS.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#7b7b7b"),
            									"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#7b7b7b"),
            									"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1,1px solid #d3dce1,0px none,1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#444444"),
            									"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1,1px solid #d3dce1,0px none,1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#444444"),
            									"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1,1px solid #d3dce1,0px none,1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#444444"),
            									"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Search.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Search.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Search.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Search.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Search.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_FrmMain" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Max.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Max.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Max.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_MaxM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_MaxM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_MaxD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Min.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Min.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Min.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_MinM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_MinM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_MinD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_V" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_V.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_V.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_V.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_VM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_VM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_VD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_H" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_H.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_H.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_H.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_HD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Allx" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Allx.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Allx.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Allx.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_AllxM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_AllxM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_AllxD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
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
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Expand" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
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
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LOGIN_Login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_BF_Extend" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("11px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Close.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Close.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Close.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_Close.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Btn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#959393"),
            									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
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
            								"pushed" :
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
            						}
            					},
            					{
            						"btn_WF_MymnuS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_MymnuS.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_MymnuS.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_MymnuS.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_MymnuS.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_MymnuS.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_MymnuS.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Mymnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Mymnu.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Mymnu.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Mymnu.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Mymnu.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Mymnu.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Mymnu.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CRUD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FrmMain" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0e2436"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0e2436"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0e2436"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0e2436"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0e2436"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Search.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FrmSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #319ddc"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #319ddc"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #319ddc"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #319ddc"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #319ddc"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingNext.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingPrev.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingDNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingDPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Paging" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3c0ae0"),
            									"font" : nexacro.FontObject("14px \"Verdana\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RShuttle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LShuttle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Del" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SettingIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
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
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PrintIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
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
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SaveIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SaveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_DeleteIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_DeleteIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_InsertIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InsertIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RetrieveIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_RetrieveIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleLM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleLM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRP.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_MultiCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://images/btn_WF_MultiCombo.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BarPoint" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BarPoint.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BarPoint.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BarPoint.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BarPoint.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BarPoint.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BarPoint.png')")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
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
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnBtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnBtnP.png')")
            							},
            							"disabled" :
            							{
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
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDn.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnD.png')")
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
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDn.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnD.png')")
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
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_Upbtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpbtnP.png')")
            							},
            							"disabled" :
            							{
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
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUp.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpD.png')")
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
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUp.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
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
            								"padding" : nexacro.PaddingObject("0px 8px")
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
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
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
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\",\"Malgun Gothic\"")
            											}
            										}
            									}
            								}
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
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxD.png')"),
            						"color" : nexacro.ColorObject("#9d9d9d")
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
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxDS.png')"),
            						"color" : nexacro.ColorObject("#9d9d9d")
            					}
            				},
            				"class" :
            				[
            					{
            						"chk_WF_Toggle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOff.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOff.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOn.png')")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOn.png')")
            								}
            							}
            						}
            					}
            				]
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
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Item.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 8px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemD.png')"),
            								"color" : nexacro.ColorObject("#9d9d9d")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemM.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemMS.png')")
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
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
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
            								"padding" : nexacro.PaddingObject("6px 10px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3078b4")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("6px 10px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3078b4")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
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
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								}
            							}
            						}
            					},
            					{
            						"cbo_LOGIN_Language" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3078b4")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3078b4")
            								}
            							}
            						}
            					}
            				]
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							}
            						},
            						"class" :
            						[
            							{
            								"cbo_LOGIN_Language" :
            								{
            									"self" :
            									{
            										"nulltext" :
            										{
            											"color" : nexacro.ColorObject("#9d9d9d"),
            											"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
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
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtnP.png')")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            							}
            						},
            						"class" :
            						[
            							{
            								"cal_WF_Readonly" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"icon" : nexacro.UrlObject("url('theme://images/cal_WF_ReadDrop.png')")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("url('theme://images/cal_WF_ReadDrop.png')")
            										},
            										"pushed" :
            										{
            											"icon" : nexacro.UrlObject("url('theme://images/cal_WF_ReadDrop.png')")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropBtnP.png')")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtnP.png')")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropBtnP.png')")
            									}
            								}
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
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"cal_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								}
            							}
            						}
            					},
            					{
            						"cal_WF_Readonly" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
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
            				]
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#7b7b7b")
            							},
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							}
            						},
            						"class" :
            						[
            							{
            								"cal_WF_Readonly" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#7b7b7b")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
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
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnDn.png')"),
            								"border" : nexacro.BorderObject("1px solid #c4c4c4,0px none,0px none,1px solid #c4c4c4")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnDnP.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnDnP.png')")
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
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnUp.png')"),
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #c4c4c4")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnUpP.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnUpP.png')")
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
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
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
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
            									}
            								}
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
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
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
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnP.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtn.png')"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnP.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnP.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtn.png')"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnP.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnP.png')")
            							},
            							"disabled" :
            							{
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
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#2a689c")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#e03c0a")
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
            									"mouseover" :
            									{
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#2a689c")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#e03c0a")
            									},
            									"today" :
            									{
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#c4c4c4")
            									}
            								}
            							}
            						}
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
            								"padding" : nexacro.PaddingObject("0px 20px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
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
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
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
            								"padding" : nexacro.PaddingObject("5px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3078b4")
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
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#3078b4")
            							},
            							"disabled" :
            							{
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
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ExpandBtn.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ExpandBtn.png')")
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
            										"font" : nexacro.FontObject("10px \"Verdana\",\"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#111111")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("10px \"Verdana\",\"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#111111")
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
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
            									}
            								}
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
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ChkIcon.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ChkIcon.png')")
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
            								"border" : nexacro.BorderObject("1px solid #dcdcde"),
            								"padding" : nexacro.PaddingObject("8px 20px"),
            								"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dcdcde"),
            								"padding" : nexacro.PaddingObject("8px 20px"),
            								"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dcdcde,1px solid #dcdcde,0px none,1px solid #dcdcde"),
            								"color" : nexacro.ColorObject("#262626")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d3dce1"),
            											"padding" : nexacro.PaddingObject("5px 20px 5px 10px"),
            											"color" : nexacro.ColorObject("#7b7b7b"),
            											"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d3dce1"),
            											"padding" : nexacro.PaddingObject("5px 20px 5px 10px"),
            											"color" : nexacro.ColorObject("#7b7b7b"),
            											"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            										},
            										"disabled" :
            										{
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d3dce1,1px solid #d3dce1,0px none,1px solid #d3dce1"),
            											"color" : nexacro.ColorObject("#444444"),
            											"font" : nexacro.FontObject("bold 12px \"Vedana\",\"Malgun Gothic\"")
            										}
            									}
            								}
            							}
            						]
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
            								"border" : nexacro.BorderObject("1px solid #dcdcde")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d3dce1")
            										}
            									}
            								}
            							}
            						]
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
            										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_ExtraBtn.png')"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									}
            								}
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
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"disabled" :
            							{
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
            								"padding" : nexacro.PaddingObject("0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a6a6a6")
            							}
            						}
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
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
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eaebec")
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
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"disabled" :
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
            										"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            										"padding" : nexacro.PaddingObject("5px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #000000")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #000000")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
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
            								"icon" : nexacro.UrlObject("URL('theme://images/stp_WF_Item.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/stp_WF_ItemS.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/stp_WF_ItemS.png')")
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
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"View" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
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
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d9d9d9, 0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
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
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarExpicon.png')")
            									}
            								}
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
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d9d9d9, 0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cell" :
            			{
            				"class" :
            				[
            					{
            						"lstv_WF_BdyCName" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("bold 16px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCId" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCGender" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCLabel" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCValue" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCLabel" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCValue" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Lev0" :
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
            													"class" :
            													[
            														{
            															"grd_LF_Tree" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#333333"),
            																		"font" : nexacro.FontObject("13px \"Verdana\", \"Malgun Gothic\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_LF_Lev1" :
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
            													"class" :
            													[
            														{
            															"grd_LF_Tree" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("13px \"Verdana\", \"Malgun Gothic\""),
            																		"color" : nexacro.ColorObject("#666666")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				],
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
            												"border" : nexacro.BorderObject("1px solid #d9d9d9"),
            												"font" : nexacro.FontObject("bold 12px \"Verdana,Malgun Gothic\""),
            												"color" : nexacro.ColorObject("#000000")
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
            												"border" : nexacro.BorderObject("1px solid #d9d9d9"),
            												"padding" : nexacro.PaddingObject("2px"),
            												"font" : nexacro.FontObject("12px \"Verdana,Malgun Gothic\""),
            												"color" : nexacro.ColorObject("#262626")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_LF_Tree" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#666666"),
            															"font" : nexacro.FontObject("13px \"Verdana\", \"Malgun Gothic\""),
            															"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#666666")
            														},
            														"selected" :
            														{
            															"font" : nexacro.FontObject("bold 12px \"Verdana\", \"Malgun Gothic\""),
            															"color" : nexacro.ColorObject("#2d5bcc")
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_Detail" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("12px \"Verdana\",\"MAlgun Gothic\""),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#262626")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#262626"),
            															"font" : nexacro.FontObject("12px \"Verdana\",\"MAlgun Gothic\"")
            														}
            													}
            												}
            											}
            										]
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
            												"border" : nexacro.BorderObject("1px solid #d9d9d9")
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
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
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
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChk.png')")
            							},
            							"disabled" :
            							{
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChk.png')")
            							},
            							"disabled" :
            							{
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
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
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("8px 8px 0px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/20px \"Verdana\", \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("8px 8px 0px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/20px \"Verdana\", \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_ExpandIcon.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_ExpandIcon.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d3dce1")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_LF_Tree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("5px 0px")
            							}
            						}
            					}
            				}
            			},
            			"cellradioitem" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Item.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_ItemS.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_ItemM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_ItemD.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemMS.png')")
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
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollBtn.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpBtn.png')")
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
            														"class" :
            														[
            															{
            																"grd_LF_Tree" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeIconColl.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeIconExp.png')")
            																		}
            																	}
            																}
            															}
            														]
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
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImg.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImg.png')")
            									},
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeImg.png')")
            									}
            								}
            							},
            							"cell" :
            							{
            								"class" :
            								[
            									{
            										"cell_LF_Lev1" :
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
            																	"class" :
            																	[
            																		{
            																			"grd_LF_Tree" :
            																			{
            																				"self" :
            																				{
            																					"leaf" :
            																					{
            																						"icon" : nexacro.UrlObject("url('theme://images/grd_LF_Favlist.png')")
            																					}
            																				}
            																			}
            																		}
            																	]
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"treeitemcheckbox" :
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
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')")
            									},
            									"disabled" :
            									{
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
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_LF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #d3dce1,1px solid #d3dce1,1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_MF_Notice" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #d3dce1,1px solid #d3dce1,1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_TitleBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #d3dce1,0px none,1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					}
            				]
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_LF_Detail" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("3px 0px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_WF_MultiCombo" :
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
            				]
            			}
		},
		{
            "includeStatusMap" : true,
            			"hasListViewExpandStatus" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinP.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseP.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecP.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VInc.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncP.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecP.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HInc.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncP.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_Essential.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnBtn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnBtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_Upbtn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxMS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemMS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropBtn.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropBtnP.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtn.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropBtnP.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUp.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_ReadDrop.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDn.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnP.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnD.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUp.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpP.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpD.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ExpandBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ChkIcon.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtn.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_ExtraBtn.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_Item.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_ItemS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarCollicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarExpicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellChk.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellChkS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ExpandIcon.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImg.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImg.png")] = { width:16, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImg.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineV.png")] = { width:9, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineH.png")] = { width:17, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Prev.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Next.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LF_NexacroLogo.png")] = { width:131, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Find.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Mymenu.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_MymenuS.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Menu.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_MenuS.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeIconColl.png")] = { width:7, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeIconExp.png")] = { width:11, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_Favlist.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Search.png")] = { width:12, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Max.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_MaxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_MaxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Min.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_MinM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_MinD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_V.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_VM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_VD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_H.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_HM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_HD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Allx.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_AllxM.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_AllxD.png")] = { width:20, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Collapse.png")] = { width:79, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Expand.png")] = { width:79, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_MainBg.png")] = { width:1500, height:679 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_ID.png")] = { width:40, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_PW.png")] = { width:40, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_MF_Center.png")] = { width:772, height:252 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_MymnuS.png")] = { width:15, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Mymnu.png")] = { width:15, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingNext.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingPrev.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingDNext.png")] = { width:12, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingDPrev.png")] = { width:12, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Del.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SettingIcon.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PrintIcon.png")] = { width:20, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SaveIcon.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_DeleteIcon.png")] = { width:14, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_InsertIcon.png")] = { width:16, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RetrieveIcon.png")] = { width:16, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleLM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRN.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRM.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRP.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRD.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_MultiCombo.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_ToggleOff.png")] = { width:80, height:31 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_ToggleOn.png")] = { width:80, height:31 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BarPoint.png")] = { width:29, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_del.png")] = { width:26, height:26 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleBD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleBM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleBN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTD.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTM.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTN.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTP.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnD.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_DOC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_ETC.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_IMG.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_PDF.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_PPT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_TXT.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_XLS.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/file_icon_ZIP.png")] = { width:25, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/img_file.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Banner1.png")] = { width:960, height:480 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_Banner2.png")] = { width:960, height:480 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_HSplitter.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_VSplitter.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Title.png")] = { width:340, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_NexacroN.png")] = { width:156, height:18 };
	};
}
)();
