define(function() {

var theme = {
    backgroundColor: '#FCF1EB',
    // 默认色板
    color: [
        '#5483BF','#EFB4B4','#A4788C','#EDC87F','#A8D673',
        '#CB4F3E','#F1B94D','#6EBEA3','#F37D82','#A99476',
        '#A8D8C8','#644579','#F4E001','#F0805A','#26C0C0'
    ],

    // 图表标题
    title: {
        x: 'left',
        y: 'top',
        itemGap: 10,
        backgroundColor: 'rgba(138,130,109,0)',
        textStyle: {
            fontWeight: 'bolder',
            color: '#581D12'          // 主标题文字颜色
        },
        subtextStyle: {
            color: '#8E5D4C'          // 副标题文字颜色
        }
    },

    // 图例
    legend: {
        itemGap: 8,
        y:'10%'
    },
    
    // 值域
    dataRange: {
        x:'right',
        y:'center',
        itemWidth: 5,
        itemHeight:25,
        color:['#0859B2','#96A4C6']
    },

    toolbox: {
        orient:'vertical',
        color : [
            '#5483BF','#EFB4B4','#A4788C','#EDC87F','#A8D673',
            '#CB4F3E','#F1B94D','#6EBEA3','#F37D82','#A99476',
        ],
        effectiveColor : '#ff4500',
        itemGap: 8,
        y:'center'
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(116,66,94,0.5)',     // 提示背景颜色，默认为透明度为0.7的黑色
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
            lineStyle : {          // 直线指示器样式设置
                color: '#766BA0',
                type: 'dotted'
            },
            crossStyle: {
                color: '#766BA0'
            },
            shadowStyle : {                     // 阴影指示器样式设置
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // 区域缩放控制器

    dataZoom: {
        dataBackgroundColor: 'rgba(130,197,209,0.6)',            // 数据背景颜色
        fillerColor: 'rgba(233,84,105,0.1)',   // 填充颜色
        handleColor: '#7F2625'     // 手柄颜色
    },

    // 网格
    grid: {
        borderWidth:0,
        x : '10%',
        x2: '10%',
        y : '20%'
    },
    // 类目轴
    categoryAxis: {
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#7F2625'
            }
        },
        splitLine: {           // 分隔线
            show: false
        }
    },

    // 数值型坐标轴默认参数
    valueAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        splitArea : {
            show: false
        },
        splitLine: {           // 分隔线
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#D68B8B'],
                type: 'dashed'
            }
        }
    },

    polar : {
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#D68B8B'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#D68B8B'
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#7F2625'
        },
        controlStyle : {
            normal : { color : '#7F2625'},
            emphasis : { color : '#7F2625'}
        },
        symbol : 'emptyCircle',
        symbolSize : 3
    },

    // 柱形图默认参数
    bar: {
        itemStyle: {
            normal: {
                barBorderRadius: 0
            },
            emphasis: {
                barBorderRadius: 0
            }
        }
    },

    // 折线图默认参数
    line: {
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 3
                }
            },
            emphasis: {
                borderWidth:0
            }
        },
        symbol: 'circle',  // 拐点图形类型
        symbolSize: 3           // 拐点图形大小
    },
    
    // K线图默认参数
    k: {
        itemStyle: {
            normal: {
                color: '#fff',       // 阳线填充颜色
                color0: '#5483BF',      // 阴线填充颜色
                lineStyle: {
                    width: 1,
                    color: '#F37D82',   // 阳线边框颜色
                    color0: '#5483BF'   // 阴线边框颜色
                }
            }
        }
    },
    
    // 散点图默认参数
    scatter: {
        itemdStyle: {
            normal: {
                borderWidth:1,
                borderColor:'rgba(200,200,200,0.5)'
            },
            emphasis: {
                borderWidth:0
            }
        },
        symbol: 'circle',    // 图形类型
        symbolSize: 4        // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
    },

    // 雷达图默认参数
    radar : {
        symbol: 'emptyCircle',    // 图形类型
        symbolSize:3
        //symbol: null,         // 拐点图形类型
        //symbolRotate : null,  // 图形旋转控制
    },

    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#5483BF'
                    }
                }
            },
            emphasis: {                 // 也是选中样式
                areaStyle: {
                    color: '#F0CE81'
                },
                label: {
                    textStyle: {
                        color: 'rgb(100,0,0)'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                nodeStyle : {
                    strokeColor : 'rgba(0,0,0,0)'
                },
                linkStyle : {
                    strokeColor : '#7F2625'
                }
            }
        }
    },

    chord : {
        padding : 3,
        itemStyle : {
            normal : {
                lineStyle : {
                    width : 0,
                    color : 'rgba(128, 128, 128, 0)'
                },
                chordStyle : {
                    lineStyle : {
                        width : 1,
                        color : 'rgba(128, 128, 128, 0)'
                    }
                }
            },
            emphasis : {
                lineStyle : {
                    width : 1,
                    color : 'rgba(128, 128, 128, 0.5)'
                },
                chordStyle : {
                    lineStyle : {
                        width : 1,
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },

    gauge : {
        center:['50%','80%'],
        radius:'100%',
        startAngle: 180,
        endAngle : 0,
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.2, '#EFB4B4'],[0.8, '#A8D673'],[1, '#5483BF']], 
                width: '40%'
            }
        },
        axisTick: {            // 坐标轴小标记
            splitNumber: 2,   // 每份split细分多少段
            length: 5,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#fff'
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#fff',
                fontWeight:'bolder'
            }
        },
        splitLine: {           // 分隔线
            length: '5%',         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#fff'
            }
        },
        pointer : {
            width : '40%',
            length: '80%',
            color: '#fff'
        },
        title : {
          offsetCenter: [0, -20],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: 'auto',
            fontSize: 20
          }
        },
        detail : {
            offsetCenter: [0, 00],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto',
                fontSize: 40
            }
        }
    },
    
    textStyle: {
        fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
    }
}

    return theme;
});
