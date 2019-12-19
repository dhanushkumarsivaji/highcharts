import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighChartsReact from 'highcharts-react-official'
import drilldown from 'highcharts/modules/drilldown';


    drilldown(Highcharts)


const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Browser market shares. January, 2018'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "Chrome",
                    y: 62.74,
                    drilldown: "Chrome"
                },
                {
                    name: "Firefox",
                    y: 10.57,
                    drilldown: "Firefox"
                },
                {
                    name: "Internet Explorer",
                    y: 7.23,
                    drilldown: "Internet Explorer"
                },
                {
                    name: "Safari",
                    y: 5.58,
                    drilldown: "Safari"
                },
                {
                    name: "Edge",
                    y: 4.02,
                    drilldown: "Edge"
                },
                {
                    name: "Opera",
                    y: 1.92,
                    drilldown: "Opera"
                },
                {
                    name: "Other",
                    y: 7.62,
                    drilldown: null
                }
            ]
        }
    ]
    ,
    drilldown: {
        series: [
            {
                name: "Chrome",
                id: "Chrome",
                data: [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
                name: "Firefox",
                id: "Firefox",
                data: [
                    [
                        "v58.0",
                        1.02
                    ],
                    [
                        "v57.0",
                        7.36
                    ],
                    [
                        "v56.0",
                        0.35
                    ],
                    [
                        "v55.0",
                        0.11
                    ],
                    [
                        "v54.0",
                        0.1
                    ],
                    [
                        "v52.0",
                        0.95
                    ],
                    [
                        "v51.0",
                        0.15
                    ],
                    [
                        "v50.0",
                        0.1
                    ],
                    [
                        "v48.0",
                        0.31
                    ],
                    [
                        "v47.0",
                        0.12
                    ]
                ]
            },
            {
                name: "Internet Explorer",
                id: "Internet Explorer",
                data: [
                    [
                        "v11.0",
                        6.2
                    ],
                    [
                        "v10.0",
                        0.29
                    ],
                    [
                        "v9.0",
                        0.27
                    ],
                    [
                        "v8.0",
                        0.47
                    ]
                ]
            },
            {
                name: "Safari",
                id: "Safari",
                data: [
                    [
                        "v11.0",
                        3.39
                    ],
                    [
                        "v10.1",
                        0.96
                    ],
                    [
                        "v10.0",
                        0.36
                    ],
                    [
                        "v9.1",
                        0.54
                    ],
                    [
                        "v9.0",
                        0.13
                    ],
                    [
                        "v5.1",
                        0.2
                    ]
                ]
            },
            {
                name: "Edge",
                id: "Edge",
                data: [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                name: "Opera",
                id: "Opera",
                data: [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
}



// const options = {

//     chart:{

//     type:'line',
//     zoomType:'xy'

//     }
//     ,

//     title:{

//     text:'Our First Chart'

//     }
//     ,

//    // colors : ['red','blue','green','orange','purple'],

//     credits:{
//        // enabled:false,
//         text:'My Custom Credit',
//         href:'https://google.com',
//         position:{
//             align:'left',
//             x:10
//         },
//         style:{
//             fontSize:'15px',
//             color:"red"
//         }

//     }
//     ,

//     xAxis:{

//        // categories:['Apples','Bananas','Oranges']
//     }
//     ,

//     yAxis:{

//         title:{
//             text:'Fruits Eaten'
//         }
//     }
//     ,

//     //1st type

//     // series:[
//     //     {
//     //         name:'Dhanush',
//     //         data:[1,2,3]
//     //     },
//     //     {
//     //         name:'Dharma',
//     //         data:[4,5,6]
//     //     },
//     //     {
//     //         name:'Madhukar',
//     //         data:[3,5,1]
//     //     },
//     //     {
//     //         name:'Test',
//     //         data:[8,5,6]
//     //     },
//     //     {
//     //         name:'Check',
//     //         data:[7,8,9]
//     //     },
//     // ]

//     //2nd type

//     // series:[
//     //     {
//     //         data:[1,10,20,40,2]
//     //     }
//     // ]

        
//     // 3rd type
//     // comment x axios values first

//     // series:[{
//     //     data:[[2,10],[3,7],[8,9]]
//     // }]

//     //4th type
//     // series:[{
//     //     data:[["Dhanush",10],["Dharma",7],["Test",9]]
//     // }]

//     //5th type
//     // series:[{
//     //     name:"fruits",
//     //     data:[
//     //         {
//     //             name:'test',
//     //             y:20,
//     //             color:'red',
//     //             x:2
//     //         },
//     //         {
//     //             name:'Dhanush',
//     //             y:10,
//     //             x:5
//     //         },
//     //     ]
//     // }]


// }


export default function index() {
    return (
        <div>
            <HighChartsReact  highcharts={Highcharts} options={options}/>
        </div>
    )
}
