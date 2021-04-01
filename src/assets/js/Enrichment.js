import echarts from 'echarts';

function enrichPieChart(pieID, pieTitle, legendList, pieDataList){
    var pieChart = echarts.init(document.getElementById(pieID), null, {renderer: 'svg'});

    // 配置图表的配置项和数据
    var option = {
        title: {
            text : pieTitle,
            x: 'center',
            textStyle: {
                fontFamily: 'Arial',
                fontSize: 22,
                fontWight: 'bold'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend : {
            orient: 'vertical',
            left: 'left',
            top: '100',
            textStyle: {
                fontFamily: 'Arial',
                fontSize: 16,
                fontWight: "bold"
            },
            data: legendList
        },
        toolbox: {
            show: true,
            x: 'right',
            y: 'top',
            feature: {
              saveAsImage: {
                show: true,
                type: "svg",
                excludeComponents: ['toolbox'],
                title: 'save as svg',
                pixelRatio: 2
              }
            }
        },
        series: [
            {
                name: 'distribution ratio',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data: pieDataList,
                label: {
                    show: true,
                    formatter: '{d}%',
                    fontFamily: 'Arial',
                    fontSize: 16,
                    fontWeight: "bold"
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
        ]
        
    };

    pieChart.setOption(option);
}

function enrichBar(barID, barTitle, xAxisNameList, ratioList, pvalObj) {
    var barChart = echarts.init(document.getElementById(barID), null, {renderer: 'svg'});
    
    var option = {
        title: {
            text: barTitle,
            x: 'center',
            textStyle: {
                fontFamily: 'Arial',
                fontSize: 22,
                fontWeight: 'bold'
            }
        },
        
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: 80
        },
        color: ['#5470c6'],
        toolbox: {
            show: true,
            x: 'right',
            y: 'top',
            feature: {
              saveAsImage: {
                show: true,
                type: "svg",
                excludeComponents: ['toolbox'],
                title: 'save as svg',
                pixelRatio: 2
              }
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: legendList
        // },
        xAxis: {
            type: 'category',
            // ["5'-UTR",  "CDS", "stop codon", "3'-UTR"]
            data: xAxisNameList,
            axisLabel: {
                fontSize: 14,
                fontFamily:'Arial',
                fontWeight: 'bold',
                interval: 0
            }
        },
        yAxis: {
            splitLine: false,
            axisLabel: {
                fontFamily:'Arial'
            },
            name: 'enrichment ratio',
            nameLocation: 'middle',
            nameGap: 28,
            nameTextStyle: {
                fontSize: 20,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                // padding: [0, 0, 0, 30]
            },
            axisLabel: {
                fontFamily:'Arial',
                fontSize: 14,
                fontWeight: 'bold',
                interval: 0
            }
        },
        series: [
            {
                type: 'bar',
                name: 'distribution ratio',
                data: ratioList,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: "#000000",
                        // offset: [0, -10],
                        // rotate: 30,
                        fontFamily: 'Arial',
                        fontSize: 16,
                        formatter: (params)=>{
                            var tipstr = "p="
                            tipstr += pvalObj[params.name]
                            return tipstr
                        }
                    }
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: {
                        show: false
                    },
                    data: [
                        {yAxis: 1}
                    ],
                    lineStyle: {
                        color: '#000000'
                    },
                }

            }
        ]

    };

    barChart.setOption(option);
}


export default { enrichPieChart, enrichBar }