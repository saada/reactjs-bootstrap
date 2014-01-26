var testFixture;

var fbTestFixture = {
    'XJS': {
        '<a />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: true,
                openingElement: {
                  type: "XJSOpeningElement",
                  name: {
                      type: "XJSIdentifier",
                      name: "a",
                      range: [1, 2],
                      loc: {
                          start: { line: 1, column: 1 },
                          end: { line: 1, column: 2 }
                      }
                  },
                  selfClosing: true,
                  attributes: [],
                  range: [0, 5],
                  loc: {
                      start: { line: 1, column: 0 },
                      end: { line: 1, column: 5 }
                  }
                },
                attributes: [],
                children: [],
                range: [0, 5],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 5 }
                }
            },
            range: [0, 5],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 5 }
            }
        },
        '<n:a n:v />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    namespace: "n",
                    range: [1, 4],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 4 }
                    }
                },
                selfClosing: true,
                openingElement: {
                  type: "XJSOpeningElement",
                  name: {
                      type: "XJSIdentifier",
                      name: "a",
                      namespace: "n",
                      range: [1, 4],
                      loc: {
                          start: { line: 1, column: 1 },
                          end: { line: 1, column: 4 }
                      }
                  },
                  selfClosing: true,
                  attributes: [
                      {
                          type: "XJSAttribute",
                          name: {
                              type: "XJSIdentifier",
                              name: "v",
                              namespace: "n",
                              range: [5, 8],
                              loc: {
                                  start: { line: 1, column: 5 },
                                  end: { line: 1, column: 8 }
                              }
                          },
                          range: [5, 8],
                          loc: {
                              start: { line: 1, column: 5 },
                              end: { line: 1, column: 8 }
                          }
                      }
                  ],
                  range: [0, 11],
                  loc: {
                      start: { line: 1, column: 0 },
                      end: { line: 1, column: 11 }
                  }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "v",
                            namespace: "n",
                            range: [5, 8],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 8 }
                            }
                        },
                        range: [5, 8],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 8 }
                        }
                    }
                ],
                children: [],
                range: [0, 11],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 11 }
                }
            },
            range: [0, 11],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 11 }
            }
        },
        '<a n:foo="bar"> {value} <b><c /></b></a>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "foo",
                                namespace: "n",
                                range: [3, 8],
                                loc: {
                                    start: { line: 1, column: 3 },
                                    end: { line: 1, column: 8 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "bar",
                                raw: "\"bar\"",
                                range: [9, 14],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            range: [3, 14],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 14 }
                            }
                        }
                    ],
                    range: [0, 15],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 15 }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [38, 39],
                        loc: {
                            start: { line: 1, column: 38 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [36, 40],
                    loc: {
                        start: { line: 1, column: 36 },
                        end: { line: 1, column: 40 }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "foo",
                            namespace: "n",
                            range: [3, 8],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 8 }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: "bar",
                            raw: "\"bar\"",
                            range: [9, 14],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        range: [3, 14],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 14 }
                        }
                    }
                ],
                children: [
                    {
                        type: "Literal",
                        value: " ",
                        raw: " ",
                        range: [15, 16],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    {
                        type: "XJSExpressionContainer",
                        expression: {
                            type: "Identifier",
                            name: "value",
                            range: [17, 22],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 22 }
                            }
                        },
                        range: [16, 23],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    {
                        type: "Literal",
                        value: " ",
                        raw: " ",
                        range: [23, 24],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    {
                        type: "XJSElement",
                        name: {
                            type: "XJSIdentifier",
                            name: "b",
                            range: [25, 26],
                            loc: {
                                start: { line: 1, column: 25 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        selfClosing: false,
                        openingElement: {
                            type: "XJSOpeningElement",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [25, 26],
                                loc: {
                                    start: { line: 1, column: 25 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            selfClosing: false,
                            attributes: [],
                            range: [24, 27],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        closingElement: {
                            type: "XJSClosingElement",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [34, 35],
                                loc: {
                                    start: { line: 1, column: 34 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            range: [32, 36],
                            loc: {
                                start: { line: 1, column: 32 },
                                end: { line: 1, column: 36 }
                            }
                        },
                        attributes: [],
                        children: [
                            {
                                type: "XJSElement",
                                name: {
                                    type: "XJSIdentifier",
                                    name: "c",
                                    range: [28, 29],
                                    loc: {
                                        start: { line: 1, column: 28 },
                                        end: { line: 1, column: 29 }
                                    }
                                },
                                selfClosing: true,
                                openingElement: {
                                    type: "XJSOpeningElement",
                                    name: {
                                        type: "XJSIdentifier",
                                        name: "c",
                                        range: [28, 29],
                                        loc: {
                                            start: { line: 1, column: 28 },
                                            end: { line: 1, column: 29 }
                                        }
                                    },
                                    selfClosing: true,
                                    attributes: [],
                                    range: [27, 32],
                                    loc: {
                                        start: { line: 1, column: 27 },
                                        end: { line: 1, column: 32 }
                                    }
                                },
                                attributes: [],
                                children: [],
                                range: [27, 32],
                                loc: {
                                    start: { line: 1, column: 27 },
                                    end: { line: 1, column: 32 }
                                }
                            }
                        ],
                        range: [24, 36],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 36 }
                        }
                    }
                ],
                range: [0, 40],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 40 }
                }
            },
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },
        '<a b={" "} c=" " d="&amp;" />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: true,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: true,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [3, 4],
                                loc: {
                                    start: { line: 1, column: 3 },
                                    end: { line: 1, column: 4 }
                                }
                            },
                            value: {
                                type: "XJSExpressionContainer",
                                expression: {
                                    type: "Literal",
                                    value: " ",
                                    raw: "\" \"",
                                    range: [6, 9],
                                    loc: {
                                        start: { line: 1, column: 6 },
                                        end: { line: 1, column: 9 }
                                    }
                                },
                                range: [5, 10],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 10 }
                                }
                            },
                            range: [3, 10],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 10 }
                            }
                        },
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "c",
                                range: [11, 12],
                                loc: {
                                    start: { line: 1, column: 11 },
                                    end: { line: 1, column: 12 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: " ",
                                raw: "\" \"",
                                range: [13, 16],
                                loc: {
                                    start: { line: 1, column: 13 },
                                    end: { line: 1, column: 16 }
                                }
                            },
                            range: [11, 16],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 16 }
                            }
                        },
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "d",
                                range: [17, 18],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 18 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "&",
                                raw: "\"&amp;\"",
                                range: [19, 26],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            range: [17, 26],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 26 }
                            }
                        }
                    ],
                    range: [0, 29],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 29 }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "b",
                            range: [3, 4],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 4 }
                            }
                        },
                        value: {
                            type: "XJSExpressionContainer",
                            expression: {
                                type: "Literal",
                                value: " ",
                                raw: "\" \"",
                                range: [6, 9],
                                loc: {
                                    start: { line: 1, column: 6 },
                                    end: { line: 1, column: 9 }
                                }
                            },
                            range: [5, 10],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 10 }
                            }
                        },
                        range: [3, 10],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "c",
                            range: [11, 12],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 12 }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: " ",
                            raw: "\" \"",
                            range: [13, 16],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 16 }
                            }
                        },
                        range: [11, 16],
                        loc: {
                            start: { line: 1, column: 11 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "d",
                            range: [17, 18],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 18 }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: "&",
                            raw: "\"&amp;\"",
                            range: [19, 26],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        range: [17, 26],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 26 }
                        }
                    }
                ],
                children: [],
                range: [0, 29],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 29 }
                }
            },
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },
        '<a\n/>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [
                        1,
                        2
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 2
                        }
                    }
                },
                selfClosing: true,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [
                            1,
                            2
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 2
                            }
                        }
                    },
                    selfClosing: true,
                    attributes: [],
                    range: [
                        0,
                        5
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 2,
                            column: 2
                        }
                    }
                },
                attributes: [],
                children: [],
                range: [
                    0,
                    5
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 2,
                        column: 2
                    }
                }
            },
            range: [
                0,
                5
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 2,
                    column: 2
                }
            }
        },
        '<日本語></日本語>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "日本語",
                    range: [
                        1,
                        4
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 4
                        }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "日本語",
                        range: [
                            1,
                            4
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 4
                            }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [
                        0,
                        5
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 5
                        }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "日本語",
                        range: [
                            7,
                            10
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 7
                            },
                            end: {
                                line: 1,
                                column: 10
                            }
                        }
                    },
                    range: [
                        5,
                        11
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 5
                        },
                        end: {
                            line: 1,
                            column: 11
                        }
                    }
                },
                attributes: [],
                children: [],
                range: [
                    0,
                    11
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 11
                    }
                }
            },
            range: [
                0,
                11
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 11
                }
            }
        },

        '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\n</AbC-def>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "AbC-def",
                    range: [
                        1,
                        8
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 8
                        }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "AbC-def",
                        range: [
                            1,
                            8
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 8
                            }
                        }
                    },
                    selfClosing: false,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "test",
                                range: [
                                    11,
                                    15
                                ],
                                loc: {
                                    start: {
                                        line: 2,
                                        column: 2
                                    },
                                    end: {
                                        line: 2,
                                        column: 6
                                    }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "&&",
                                raw: "\"&#x0026;&#38;\"",
                                range: [
                                    16,
                                    31
                                ],
                                loc: {
                                    start: {
                                        line: 2,
                                        column: 7
                                    },
                                    end: {
                                        line: 2,
                                        column: 22
                                    }
                                }
                            },
                            range: [
                                11,
                                31
                            ],
                            loc: {
                                start: {
                                    line: 2,
                                    column: 2
                                },
                                end: {
                                    line: 2,
                                    column: 22
                                }
                            }
                        }
                    ],
                    range: [
                        0,
                        32
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 2,
                            column: 23
                        }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "AbC-def",
                        range: [
                            43,
                            50
                        ],
                        loc: {
                            start: {
                                line: 5,
                                column: 2
                            },
                            end: {
                                line: 5,
                                column: 9
                            }
                        }
                    },
                    range: [
                        41,
                        51
                    ],
                    loc: {
                        start: {
                            line: 5,
                            column: 0
                        },
                        end: {
                            line: 5,
                            column: 10
                        }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "test",
                            range: [
                                11,
                                15
                            ],
                            loc: {
                                start: {
                                    line: 2,
                                    column: 2
                                },
                                end: {
                                    line: 2,
                                    column: 6
                                }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: "&&",
                            raw: "\"&#x0026;&#38;\"",
                            range: [
                                16,
                                31
                            ],
                            loc: {
                                start: {
                                    line: 2,
                                    column: 7
                                },
                                end: {
                                    line: 2,
                                    column: 22
                                }
                            }
                        },
                        range: [
                            11,
                            31
                        ],
                        loc: {
                            start: {
                                line: 2,
                                column: 2
                            },
                            end: {
                                line: 2,
                                column: 22
                            }
                        }
                    }
                ],
                children: [
                    {
                        type: "Literal",
                        value: "\nbar\nbaz\n",
                        raw: "\nbar\nbaz\n",
                        range: [
                            32,
                            41
                        ],
                        loc: {
                            start: {
                                line: 2,
                                column: 23
                            },
                            end: {
                                line: 5,
                                column: 0
                            }
                        }
                    }
                ],
                range: [
                    0,
                    51
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 5,
                        column: 10
                    }
                }
            },
            range: [
                0,
                51
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 5,
                    column: 10
                }
            }
        },

        '<a b={x ? <c /> : <d />} />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [
                        1,
                        2
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 2
                        }
                    }
                },
                selfClosing: true,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [
                            1,
                            2
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 2
                            }
                        }
                    },
                    selfClosing: true,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [
                                    3,
                                    4
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 3
                                    },
                                    end: {
                                        line: 1,
                                        column: 4
                                    }
                                }
                            },
                            value: {
                                type: "XJSExpressionContainer",
                                expression: {
                                    type: "ConditionalExpression",
                                    test: {
                                        type: "Identifier",
                                        name: "x",
                                        range: [
                                            6,
                                            7
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 6
                                            },
                                            end: {
                                                line: 1,
                                                column: 7
                                            }
                                        }
                                    },
                                    consequent: {
                                        type: "XJSElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "c",
                                            range: [
                                                11,
                                                12
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 11
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 12
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        openingElement: {
                                            type: "XJSOpeningElement",
                                            name: {
                                                type: "XJSIdentifier",
                                                name: "c",
                                                range: [
                                                    11,
                                                    12
                                                ],
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 11
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 12
                                                    }
                                                }
                                            },
                                            selfClosing: true,
                                            attributes: [],
                                            range: [
                                                10,
                                                15
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 10
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 15
                                                }
                                            }
                                        },
                                        attributes: [],
                                        children: [],
                                        range: [
                                            10,
                                            15
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 15
                                            }
                                        }
                                    },
                                    alternate: {
                                        type: "XJSElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "d",
                                            range: [
                                                19,
                                                20
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 19
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 20
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        openingElement: {
                                            type: "XJSOpeningElement",
                                            name: {
                                                type: "XJSIdentifier",
                                                name: "d",
                                                range: [
                                                    19,
                                                    20
                                                ],
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 19
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 20
                                                    }
                                                }
                                            },
                                            selfClosing: true,
                                            attributes: [],
                                            range: [
                                                18,
                                                23
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 18
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 23
                                                }
                                            }
                                        },
                                        attributes: [],
                                        children: [],
                                        range: [
                                            18,
                                            23
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 18
                                            },
                                            end: {
                                                line: 1,
                                                column: 23
                                            }
                                        }
                                    },
                                    range: [
                                        6,
                                        23
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 6
                                        },
                                        end: {
                                            line: 1,
                                            column: 23
                                        }
                                    }
                                },
                                range: [
                                    5,
                                    24
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 5
                                    },
                                    end: {
                                        line: 1,
                                        column: 24
                                    }
                                }
                            },
                            range: [
                                3,
                                24
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 3
                                },
                                end: {
                                    line: 1,
                                    column: 24
                                }
                            }
                        }
                    ],
                    range: [
                        0,
                        27
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 27
                        }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "b",
                            range: [
                                3,
                                4
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 3
                                },
                                end: {
                                    line: 1,
                                    column: 4
                                }
                            }
                        },
                        value: {
                            type: "XJSExpressionContainer",
                            expression: {
                                type: "ConditionalExpression",
                                test: {
                                    type: "Identifier",
                                    name: "x",
                                    range: [
                                        6,
                                        7
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 6
                                        },
                                        end: {
                                            line: 1,
                                            column: 7
                                        }
                                    }
                                },
                                consequent: {
                                    type: "XJSElement",
                                    name: {
                                        type: "XJSIdentifier",
                                        name: "c",
                                        range: [
                                            11,
                                            12
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 11
                                            },
                                            end: {
                                                line: 1,
                                                column: 12
                                            }
                                        }
                                    },
                                    selfClosing: true,
                                    openingElement: {
                                        type: "XJSOpeningElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "c",
                                            range: [
                                                11,
                                                12
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 11
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 12
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        attributes: [],
                                        range: [
                                            10,
                                            15
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 15
                                            }
                                        }
                                    },
                                    attributes: [],
                                    children: [],
                                    range: [
                                        10,
                                        15
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 10
                                        },
                                        end: {
                                            line: 1,
                                            column: 15
                                        }
                                    }
                                },
                                alternate: {
                                    type: "XJSElement",
                                    name: {
                                        type: "XJSIdentifier",
                                        name: "d",
                                        range: [
                                            19,
                                            20
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 19
                                            },
                                            end: {
                                                line: 1,
                                                column: 20
                                            }
                                        }
                                    },
                                    selfClosing: true,
                                    openingElement: {
                                        type: "XJSOpeningElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "d",
                                            range: [
                                                19,
                                                20
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 19
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 20
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        attributes: [],
                                        range: [
                                            18,
                                            23
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 18
                                            },
                                            end: {
                                                line: 1,
                                                column: 23
                                            }
                                        }
                                    },
                                    attributes: [],
                                    children: [],
                                    range: [
                                        18,
                                        23
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 18
                                        },
                                        end: {
                                            line: 1,
                                            column: 23
                                        }
                                    }
                                },
                                range: [
                                    6,
                                    23
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 6
                                    },
                                    end: {
                                        line: 1,
                                        column: 23
                                    }
                                }
                            },
                            range: [
                                5,
                                24
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 5
                                },
                                end: {
                                    line: 1,
                                    column: 24
                                }
                            }
                        },
                        range: [
                            3,
                            24
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 3
                            },
                            end: {
                                line: 1,
                                column: 24
                            }
                        }
                    }
                ],
                children: [],
                range: [
                    0,
                    27
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 27
                    }
                }
            },
            range: [
                0,
                27
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 27
                }
            }
        },

        '<a>{}</a>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                name: {
                    type: 'XJSIdentifier',
                    name: 'a',
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 3],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 3 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [7, 8],
                        loc: {
                            start: { line: 1, column: 7 },
                            end: { line: 1, column: 8 }
                        }
                    },
                    range: [5, 9],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 9 }
                    }
                },
                attributes: [],
                children: [{
                    type: 'XJSExpressionContainer',
                    expression: {
                        type: 'XJSEmptyExpression',
                        range: [4, 4],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    range: [3, 5],
                    loc: {
                        start: { line: 1, column: 3 },
                        end: { line: 1, column: 5 }
                    }
                }],
                range: [0, 9],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 9 }
                }
            },
            range: [0, 9],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 9 }
            }
        },

        '<a>{/* this is a comment */}</a>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                name: {
                    type: 'XJSIdentifier',
                    name: 'a',
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 3],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 3 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [30, 31],
                        loc: {
                            start: { line: 1, column: 30 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    range: [28, 32],
                    loc: {
                        start: { line: 1, column: 28 },
                        end: { line: 1, column: 32 }
                    }
                },
                attributes: [],
                children: [{
                    type: 'XJSExpressionContainer',
                    expression: {
                        type: 'XJSEmptyExpression',
                        range: [4, 27],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    range: [3, 28],
                    loc: {
                        start: { line: 1, column: 3 },
                        end: { line: 1, column: 28 }
                    }
                }],
                range: [0, 32],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 32 }
                }
            },
            range: [0, 32],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 32 }
            }
        },

        '<div>@test content</div>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                name: {
                    type: 'XJSIdentifier',
                    name: 'div',
                    range: [1, 4],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 4 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [1, 4],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 5],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 5 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [20, 23],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    range: [18, 24],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 24 }
                    }
                },
                attributes: [],
                children: [{
                    type: 'Literal',
                    value: '@test content',
                    raw: '@test content',
                    range: [5, 18],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 18 }
                    }
                }],
                range: [0, 24],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 24 }
                }
            },
            range: [0, 24],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 24 }
            }
        }
    },

    'Invalid XJS Syntax': {
        '</>': {
            index: 1,
            lineNumber: 1,
            column: 2,
            message: 'Error: Line 1: Unexpected token /',
            description: 'Unexpected token /'
        },

        '<a: />': {
            index: 3,
            lineNumber: 1,
            column: 4,
            message: 'Error: Line 1: XJS tag name can not be empty'
        },

        '<:a />': {
            index: 1,
            lineNumber: 1,
            column: 2,
            message: 'Error: Line 1: Unexpected token :',
            description: 'Unexpected token :'
        },

        '<a b=d />': {
            index: 5,
            lineNumber: 1,
            column: 6,
            message: 'Error: Line 1: XJS value should be either an expression or a quoted XJS text'
        },

        '<a>': {
            index: 3,
            lineNumber: 1,
            column: 4,
            message: 'Error: Line 1: Unexpected token '
        },

        '<a></b>': {
            index: 7,
            lineNumber: 1,
            column: 8,
            message: 'Error: Line 1: Expected corresponding XJS closing tag for a'
        },

        '<a foo="bar': {
            index: 11,
            lineNumber: 1,
            column: 12,
            message: "Error: Line 1: Unexpected token ILLEGAL"
        },

        '<a:b></b>': {
            index: 9,
            lineNumber: 1,
            column: 10,
            message: "Error: Line 1: Expected corresponding XJS closing tag for a:b",
        },

        '<a><a />': {
            index: 8,
            lineNumber: 1,
            column: 9,
            message: 'Error: Line 1: Unexpected end of input'
        },

        '<a b={}>': {
            index: 7,
            lineNumber: 1,
            column: 8,
            message: 'Error: Line 1: XJS attributes must only be assigned a non-empty expression'
        },

        '<a>{"str";}</a>': {
            index: 9,
            lineNumber: 1,
            column: 10,
            message: 'Error: Line 1: Unexpected token ;',
            description: 'Unexpected token ;'
        },

        '<span className="a", id="b" />': {
            index: 19,
            lineNumber: 1,
            column: 20,
            message: 'Error: Line 1: Unexpected token ,',
            description: 'Unexpected token ,'
        }
    },

    'Type Annotations': {
        'function foo(number numVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'number',
                        range: [13, 19],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 19],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 19 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'numVal',
                    range: [20, 26],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 26 }
                    }
                },
                range: [13, 26],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 26 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [27, 29],
                loc: {
                    start: { line: 1, column: 27 },
                    end: { line: 1, column: 29 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },

        'function foo(number numVal, string strVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'number',
                        range: [13, 19],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 19],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 19 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'numVal',
                    range: [20, 26],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 26 }
                    }
                },
                range: [13, 26],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 26 }
                }
            }, {
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'string',
                        range: [28, 34],
                        loc: {
                            start: { line: 1, column: 28 },
                            end: { line: 1, column: 34 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [28, 34],
                    loc: {
                        start: { line: 1, column: 28 },
                        end: { line: 1, column: 34 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'strVal',
                    range: [35, 41],
                    loc: {
                        start: { line: 1, column: 35 },
                        end: { line: 1, column: 41 }
                    }
                },
                range: [28, 41],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 41 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [42, 44],
                loc: {
                    start: { line: 1, column: 42 },
                    end: { line: 1, column: 44 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 44],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 44 }
            }
        },

        'function foo(number numVal, untypedVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'number',
                        range: [13, 19],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 19],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 19 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'numVal',
                    range: [20, 26],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 26 }
                    }
                },
                range: [13, 26],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 26 }
                }
            }, {
                type: 'Identifier',
                name: 'untypedVal',
                range: [28, 38],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 38 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [39, 41],
                loc: {
                    start: { line: 1, column: 39 },
                    end: { line: 1, column: 41 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 41],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 41 }
            }
        },

        'function foo(untypedVal, number numVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'untypedVal',
                range: [13, 23],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 23 }
                }
            }, {
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'number',
                        range: [25, 31],
                        loc: {
                            start: { line: 1, column: 25 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [25, 31],
                    loc: {
                        start: { line: 1, column: 25 },
                        end: { line: 1, column: 31 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'numVal',
                    range: [32, 38],
                    loc: {
                        start: { line: 1, column: 32 },
                        end: { line: 1, column: 38 }
                    }
                },
                range: [25, 38],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 38 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [39, 41],
                loc: {
                    start: { line: 1, column: 39 },
                    end: { line: 1, column: 41 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 41],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 41 }
            }
        },

        'function foo(array<string> strs){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'array',
                        range: [13, 18],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    templateTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'string',
                            range: [19, 25],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 25 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [19, 25],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 25 }
                        }
                    }],
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 26],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 26 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'strs',
                    range: [27, 31],
                    loc: {
                        start: { line: 1, column: 27 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [13, 31],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 31 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [32, 34],
                loc: {
                    start: { line: 1, column: 32 },
                    end: { line: 1, column: 34 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        },

        'function foo(map<string,number> myMap){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'map',
                        range: [13, 16],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    templateTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'string',
                            range: [17, 23],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [17, 23],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 23 }
                        }
                    }, {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'number',
                            range: [24, 30],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [24, 30],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 30 }
                        }
                    }],
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 31],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 31 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'myMap',
                    range: [32, 37],
                    loc: {
                        start: { line: 1, column: 32 },
                        end: { line: 1, column: 37 }
                    }
                },
                range: [13, 37],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 37 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [38, 40],
                loc: {
                    start: { line: 1, column: 38 },
                    end: { line: 1, column: 40 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },

        'function foo(fn() callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [],
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 17],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 17 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [18, 26],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 26 }
                    }
                },
                range: [13, 26],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 26 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [27, 29],
                loc: {
                    start: { line: 1, column: 27 },
                    end: { line: 1, column: 29 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },

        'function foo(fn():number callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'number',
                            range: [18, 24],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [18, 24],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    unionType: null,
                    nullable: false,
                    range: [13, 24],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 24 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [25, 33],
                    loc: {
                        start: { line: 1, column: 25 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [13, 33],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 33 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },

        'function foo(fn():fn(a) callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'fn',
                            range: [18, 20],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 20 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: [{
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'a',
                                range: [21, 22],
                                loc: {
                                    start: { line: 1, column: 21 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [21, 22],
                            loc: {
                                start: { line: 1, column: 21 },
                                end: { line: 1, column: 22 }
                            }
                        }],
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [18, 23],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    unionType: null,
                    nullable: false,
                    range: [13, 23],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 23 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [24, 32],
                    loc: {
                        start: { line: 1, column: 24 },
                        end: { line: 1, column: 32 }
                    }
                },
                range: [13, 32],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 32 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [33, 35],
                loc: {
                    start: { line: 1, column: 33 },
                    end: { line: 1, column: 35 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 35],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 35 }
            }
        },

        'function foo(fn():fn(a):number callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'fn',
                            range: [18, 20],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 20 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: [{
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'a',
                                range: [21, 22],
                                loc: {
                                    start: { line: 1, column: 21 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [21, 22],
                            loc: {
                                start: { line: 1, column: 21 },
                                end: { line: 1, column: 22 }
                            }
                        }],
                        returnType: {
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'number',
                                range: [24, 30],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [24, 30],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        unionType: null,
                        nullable: false,
                        range: [18, 30],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 30 }
                        }
                    },
                    unionType: null,
                    nullable: false,
                    range: [13, 30],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 30 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [31, 39],
                    loc: {
                        start: { line: 1, column: 31 },
                        end: { line: 1, column: 39 }
                    }
                },
                range: [13, 39],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 39 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [40, 42],
                loc: {
                    start: { line: 1, column: 40 },
                    end: { line: 1, column: 42 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 42],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 42 }
            }
        },

        'function foo(fn(a) callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 18],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 18 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [19, 27],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [28, 30],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 30 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },

        'function foo(fn(a,b) callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    }, {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [18, 19],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 19 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [18, 19],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 19 }
                        }
                    }],
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 20],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 20 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [21, 29],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 29 }
                    }
                },
                range: [13, 29],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 29 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [30, 32],
                loc: {
                    start: { line: 1, column: 30 },
                    end: { line: 1, column: 32 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 32],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 32 }
            }
        },

        'function foo(fn(a):number callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'number',
                            range: [19, 25],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 25 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [19, 25],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 25 }
                        }
                    },
                    unionType: null,
                    nullable: false,
                    range: [13, 25],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 25 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [26, 34],
                    loc: {
                        start: { line: 1, column: 26 },
                        end: { line: 1, column: 34 }
                    }
                },
                range: [13, 34],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 34 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [35, 37],
                loc: {
                    start: { line: 1, column: 35 },
                    end: { line: 1, column: 37 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 37],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 37 }
            }
        },

        'function foo(fn(a):fn(b):number callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'fn',
                            range: [19, 21],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: [{
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'b',
                                range: [22, 23],
                                loc: {
                                    start: { line: 1, column: 22 },
                                    end: { line: 1, column: 23 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [22, 23],
                            loc: {
                                start: { line: 1, column: 22 },
                                end: { line: 1, column: 23 }
                            }
                        }],
                        returnType: {
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'number',
                                range: [25, 31],
                                loc: {
                                    start: { line: 1, column: 25 },
                                    end: { line: 1, column: 31 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [25, 31],
                            loc: {
                                start: { line: 1, column: 25 },
                                end: { line: 1, column: 31 }
                            }
                        },
                        unionType: null,
                        nullable: false,
                        range: [19, 31],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    unionType: null,
                    nullable: false,
                    range: [13, 31],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 31 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [32, 40],
                    loc: {
                        start: { line: 1, column: 32 },
                        end: { line: 1, column: 40 }
                    }
                },
                range: [13, 40],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 40 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [41, 43],
                loc: {
                    start: { line: 1, column: 41 },
                    end: { line: 1, column: 43 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 43],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 43 }
            }
        },

        'function foo(?number numVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'number',
                        range: [14, 20],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 20 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: true,
                    range: [13, 20],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 20 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'numVal',
                    range: [21, 27],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [28, 30],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 30 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },

        'function foo(?array<> arrVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'array',
                        range: [14, 19],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    templateTypes: [],
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: true,
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'arrVal',
                    range: [22, 28],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 28 }
                    }
                },
                range: [13, 28],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 28 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [29, 31],
                loc: {
                    start: { line: 1, column: 29 },
                    end: { line: 1, column: 31 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },

        'function foo(?array<string> arrVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'array',
                        range: [14, 19],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    templateTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'string',
                            range: [20, 26],
                            loc: {
                                start: { line: 1, column: 20 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [20, 26],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 26 }
                        }
                    }],
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: true,
                    range: [13, 27],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 27 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'arrVal',
                    range: [28, 34],
                    loc: {
                        start: { line: 1, column: 28 },
                        end: { line: 1, column: 34 }
                    }
                },
                range: [13, 34],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 34 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [35, 37],
                loc: {
                    start: { line: 1, column: 35 },
                    end: { line: 1, column: 37 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 37],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 37 }
            }
        },

        'function foo(array<?string> arrVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'array',
                        range: [13, 18],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    templateTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'string',
                            range: [20, 26],
                            loc: {
                                start: { line: 1, column: 20 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: true,
                        range: [19, 26],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 26 }
                        }
                    }],
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 27],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 27 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'arrVal',
                    range: [28, 34],
                    loc: {
                        start: { line: 1, column: 28 },
                        end: { line: 1, column: 34 }
                    }
                },
                range: [13, 34],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 34 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [35, 37],
                loc: {
                    start: { line: 1, column: 35 },
                    end: { line: 1, column: 37 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 37],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 37 }
            }
        },

        'function foo(?array<?string> arrVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'array',
                        range: [14, 19],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    templateTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'string',
                            range: [21, 27],
                            loc: {
                                start: { line: 1, column: 21 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: true,
                        range: [20, 27],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 27 }
                        }
                    }],
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: true,
                    range: [13, 28],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 28 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'arrVal',
                    range: [29, 35],
                    loc: {
                        start: { line: 1, column: 29 },
                        end: { line: 1, column: 35 }
                    }
                },
                range: [13, 35],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 35 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [36, 38],
                loc: {
                    start: { line: 1, column: 36 },
                    end: { line: 1, column: 38 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },

        'function foo(?fn() callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [14, 16],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [],
                    returnType: null,
                    unionType: null,
                    nullable: true,
                    range: [13, 18],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 18 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [19, 27],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [28, 30],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 30 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },

        'function foo(?fn(a) callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [14, 16],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [17, 18],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 18 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [17, 18],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 18 }
                        }
                    }],
                    returnType: null,
                    unionType: null,
                    nullable: true,
                    range: [13, 19],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 19 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [20, 28],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 28 }
                    }
                },
                range: [13, 28],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 28 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [29, 31],
                loc: {
                    start: { line: 1, column: 29 },
                    end: { line: 1, column: 31 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },

        'function foo(?fn(a):b callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [14, 16],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [17, 18],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 18 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [17, 18],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 18 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [20, 21],
                            loc: {
                                start: { line: 1, column: 20 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [20, 21],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 21 }
                        }
                    },
                    unionType: null,
                    nullable: true,
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [22, 30],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 30 }
                    }
                },
                range: [13, 30],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 30 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [31, 33],
                loc: {
                    start: { line: 1, column: 31 },
                    end: { line: 1, column: 33 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },

        'function foo(fn(?a):b callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [17, 18],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 18 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: true,
                        range: [16, 18],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 18 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [20, 21],
                            loc: {
                                start: { line: 1, column: 20 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [20, 21],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 21 }
                        }
                    },
                    unionType: null,
                    nullable: false,
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [22, 30],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 30 }
                    }
                },
                range: [13, 30],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 30 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [31, 33],
                loc: {
                    start: { line: 1, column: 31 },
                    end: { line: 1, column: 33 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },

        'function foo(fn(a):?b callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [20, 21],
                            loc: {
                                start: { line: 1, column: 20 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: true,
                        range: [19, 21],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 21 }
                        }
                    },
                    unionType: null,
                    nullable: false,
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [22, 30],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 30 }
                    }
                },
                range: [13, 30],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 30 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [31, 33],
                loc: {
                    start: { line: 1, column: 31 },
                    end: { line: 1, column: 33 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },

        'function foo(?fn(?a):?b callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [14, 16],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [18, 19],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 19 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: true,
                        range: [17, 19],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 19 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [22, 23],
                            loc: {
                                start: { line: 1, column: 22 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: true,
                        range: [21, 23],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    unionType: null,
                    nullable: true,
                    range: [13, 23],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 23 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [24, 32],
                    loc: {
                        start: { line: 1, column: 24 },
                        end: { line: 1, column: 32 }
                    }
                },
                range: [13, 32],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 32 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [33, 35],
                loc: {
                    start: { line: 1, column: 33 },
                    end: { line: 1, column: 35 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 35],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 35 }
            }
        },

        'function foo(a|b value){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'a',
                        range: [13, 14],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 14 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [15, 16],
                            loc: {
                                start: { line: 1, column: 15 },
                                end: { line: 1, column: 16 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [15, 16],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    nullable: false,
                    range: [13, 16],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 16 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'value',
                    range: [17, 22],
                    loc: {
                        start: { line: 1, column: 17 },
                        end: { line: 1, column: 22 }
                    }
                },
                range: [13, 22],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 22 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [23, 25],
                loc: {
                    start: { line: 1, column: 23 },
                    end: { line: 1, column: 25 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 25],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 25 }
            }
        },

        'function foo(?a|b value){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'a',
                        range: [14, 15],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    nullable: true,
                    range: [13, 17],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 17 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'value',
                    range: [18, 23],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 23 }
                    }
                },
                range: [13, 23],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 23 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [24, 26],
                loc: {
                    start: { line: 1, column: 24 },
                    end: { line: 1, column: 26 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 26],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 26 }
            }
        },

        'function foo(a|?b value){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'a',
                        range: [13, 14],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 14 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'b',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: true,
                        range: [15, 17],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    nullable: false,
                    range: [13, 17],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 17 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'value',
                    range: [18, 23],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 23 }
                    }
                },
                range: [13, 23],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 23 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [24, 26],
                loc: {
                    start: { line: 1, column: 24 },
                    end: { line: 1, column: 26 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 26],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 26 }
            }
        },

        'function foo(array<a>|array<b> arr){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'array',
                        range: [13, 18],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    templateTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [19, 20],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 20 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [19, 20],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 20 }
                        }
                    }],
                    paramTypes: null,
                    returnType: null,
                    unionType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'array',
                            range: [22, 27],
                            loc: {
                                start: { line: 1, column: 22 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        templateTypes: [{
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'b',
                                range: [28, 29],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 29 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [28, 29],
                            loc: {
                                start: { line: 1, column: 28 },
                                end: { line: 1, column: 29 }
                            }
                        }],
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [22, 30],
                        loc: {
                            start: { line: 1, column: 22 },
                            end: { line: 1, column: 30 }
                        }
                    },
                    nullable: false,
                    range: [13, 30],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 30 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'arr',
                    range: [31, 34],
                    loc: {
                        start: { line: 1, column: 31 },
                        end: { line: 1, column: 34 }
                    }
                },
                range: [13, 34],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 34 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [35, 37],
                loc: {
                    start: { line: 1, column: 35 },
                    end: { line: 1, column: 37 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 37],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 37 }
            }
        },

        'function foo(array<a|b> arr){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'array',
                        range: [13, 18],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    templateTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [19, 20],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 20 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: {
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'b',
                                range: [21, 22],
                                loc: {
                                    start: { line: 1, column: 21 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [21, 22],
                            loc: {
                                start: { line: 1, column: 21 },
                                end: { line: 1, column: 22 }
                            }
                        },
                        nullable: false,
                        range: [19, 22],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 22 }
                        }
                    }],
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [13, 23],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 23 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'arr',
                    range: [24, 27],
                    loc: {
                        start: { line: 1, column: 24 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [28, 30],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 30 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },

        'function foo(fn(a|b)|fn(c|d) callback){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                annotation: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'fn',
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'a',
                            range: [16, 17],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: {
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'b',
                                range: [18, 19],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 19 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [18, 19],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 19 }
                            }
                        },
                        nullable: false,
                        range: [16, 19],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 19 }
                        }
                    }],
                    returnType: null,
                    unionType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'fn',
                            range: [21, 23],
                            loc: {
                                start: { line: 1, column: 21 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: [{
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'c',
                                range: [24, 25],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 25 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: {
                                type: 'TypeAnnotation',
                                annotatedType: {
                                    type: 'Identifier',
                                    name: 'd',
                                    range: [26, 27],
                                    loc: {
                                        start: { line: 1, column: 26 },
                                        end: { line: 1, column: 27 }
                                    }
                                },
                                templateTypes: null,
                                paramTypes: null,
                                returnType: null,
                                unionType: null,
                                nullable: false,
                                range: [26, 27],
                                loc: {
                                    start: { line: 1, column: 26 },
                                    end: { line: 1, column: 27 }
                                }
                            },
                            nullable: false,
                            range: [24, 27],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 27 }
                            }
                        }],
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [21, 28],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 28 }
                        }
                    },
                    nullable: false,
                    range: [13, 28],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 28 }
                    }
                },
                identifier: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [29, 37],
                    loc: {
                        start: { line: 1, column: 29 },
                        end: { line: 1, column: 37 }
                    }
                },
                range: [13, 37],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 37 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [38, 40],
                loc: {
                    start: { line: 1, column: 38 },
                    end: { line: 1, column: 40 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },

        'function foo():number {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            returnType: {
                type: 'TypeAnnotation',
                annotatedType: {
                    type: 'Identifier',
                    name: 'number',
                    range: [15, 21],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 21 }
                    }
                },
                templateTypes: null,
                paramTypes: null,
                returnType: null,
                unionType: null,
                nullable: false,
                range: [15, 21],
                loc: {
                    start: { line: 1, column: 15 },
                    end: { line: 1, column: 21 }
                }
            },
            body: {
                type: 'BlockStatement',
                body: [],
                range: [22, 24],
                loc: {
                    start: { line: 1, column: 22 },
                    end: { line: 1, column: 24 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 24],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 24 }
            }
        },

        'function foo():number|string {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            returnType: {
                type: 'TypeAnnotation',
                annotatedType: {
                    type: 'Identifier',
                    name: 'number',
                    range: [15, 21],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 21 }
                    }
                },
                templateTypes: null,
                paramTypes: null,
                returnType: null,
                unionType: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'string',
                        range: [22, 28],
                        loc: {
                            start: { line: 1, column: 22 },
                            end: { line: 1, column: 28 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [22, 28],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 28 }
                    }
                },
                nullable: false,
                range: [15, 28],
                loc: {
                    start: { line: 1, column: 15 },
                    end: { line: 1, column: 28 }
                }
            },
            body: {
                type: 'BlockStatement',
                body: [],
                range: [29, 31],
                loc: {
                    start: { line: 1, column: 29 },
                    end: { line: 1, column: 31 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },

        '(function():number {})': {
            type: 'ExpressionStatement',
            expression: {
                type: 'FunctionExpression',
                id: null,
                params: [],
                defaults: [],
                returnType: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'number',
                        range: [12, 18],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: null,
                    nullable: false,
                    range: [12, 18],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 18 }
                    }
                },
                body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [19, 21],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 21 }
                    }
                },
                rest: null,
                generator: false,
                expression: false,
                range: [1, 21],
                loc: {
                    start: { line: 1, column: 1 },
                    end: { line: 1, column: 21 }
                }
            },
            range: [0, 22],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 22 }
            }
        },

        '(function():number|string {})': {
            type: 'ExpressionStatement',
            expression: {
                type: 'FunctionExpression',
                id: null,
                params: [],
                defaults: [],
                returnType: {
                    type: 'TypeAnnotation',
                    annotatedType: {
                        type: 'Identifier',
                        name: 'number',
                        range: [12, 18],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    templateTypes: null,
                    paramTypes: null,
                    returnType: null,
                    unionType: {
                        type: 'TypeAnnotation',
                        annotatedType: {
                            type: 'Identifier',
                            name: 'string',
                            range: [19, 25],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 25 }
                            }
                        },
                        templateTypes: null,
                        paramTypes: null,
                        returnType: null,
                        unionType: null,
                        nullable: false,
                        range: [19, 25],
                        loc: {
                            start: { line: 1, column: 19 },
                            end: { line: 1, column: 25 }
                        }
                    },
                    nullable: false,
                    range: [12, 25],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 25 }
                    }
                },
                body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [26, 28],
                    loc: {
                        start: { line: 1, column: 26 },
                        end: { line: 1, column: 28 }
                    }
                },
                rest: null,
                generator: false,
                expression: false,
                range: [1, 28],
                loc: {
                    start: { line: 1, column: 1 },
                    end: { line: 1, column: 28 }
                }
            },
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },

        'class Foo { bar():number {} }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'bar',
                        range: [12, 15],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [],
                        defaults: [],
                        returnType: {
                            type: 'TypeAnnotation',
                            annotatedType: {
                                type: 'Identifier',
                                name: 'number',
                                range: [18, 24],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 24 }
                                }
                            },
                            templateTypes: null,
                            paramTypes: null,
                            returnType: null,
                            unionType: null,
                            nullable: false,
                            range: [18, 24],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [25, 27],
                            loc: {
                                start: { line: 1, column: 25 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        range: [25, 27],
                        loc: {
                            start: { line: 1, column: 25 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    kind: '',
                    'static': false,
                    range: [12, 27],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 27 }
                    }
                }],
                range: [10, 29],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 29 }
                }
            },
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },

        'a={bar():number{}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'bar',
                            range: [3, 6],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [],
                            defaults: [],
                            returnType: {
                                type: 'TypeAnnotation',
                                annotatedType: {
                                    type: 'Identifier',
                                    name: 'number',
                                    range: [9, 15],
                                    loc: {
                                        start: { line: 1, column: 9 },
                                        end: { line: 1, column: 15 }
                                    }
                                },
                                templateTypes: null,
                                paramTypes: null,
                                returnType: null,
                                unionType: null,
                                nullable: false,
                                range: [9, 15],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 15 }
                                }
                            },
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [15, 17],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 17 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            range: [15, 17],
                            loc: {
                                start: { line: 1, column: 15 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        kind: 'init',
                        method: true,
                        shorthand: false,
                        range: [3, 17],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    range: [2, 18],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 18 }
                    }
                },
                range: [0, 18],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 18 }
                }
            },
            range: [0, 18],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 18 }
            }
        },
    },
};

// Merge fbTestFixture in to testFixture

(function () {

    'use strict';

    var i, fixtures;

    for (i in fbTestFixture) {
        if (fbTestFixture.hasOwnProperty(i)) {
            fixtures = fbTestFixture[i];
            if (i !== 'Syntax' && testFixture.hasOwnProperty(i)) {
                throw new Error('FB test should not replace existing test for ' + i);
            }
            testFixture[i] = fixtures;
        }
    }

}());
