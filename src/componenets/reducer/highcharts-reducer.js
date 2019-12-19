import { HIGHCHARTS_DATA } from "../actions/highcharts-action-types";
const initialState={
    highchartsData:[]
}

export default function(state=initialState,action){
    switch (action.type) {
        case HIGHCHARTS_DATA:
            state={
                ...state,
                highchartsData:[{
                    "name" : "jQuery 3.x",
                    "categories" : [
                            "Food",
                            "Lab Setup",
                            "Training Material",
                            "Trainer Knowledge",
                            "Over All Feedback"
                    ],
                    "data" : [
                            8,
                            6,
                            7.2,
                            6.3,
                            8.2
                    ]
            },
            {
                    "name" : "React JS",
                    "categories" : [
                            "Food",
                            "Lab Setup",
                            "Training Material",
                            "Trainer Knowledge",
                            "Over All Feedback"
                    ],
                    "data" : [
                            9,
                            8.7,
                            9.2,
                            8.3,
                            9.1
                    ]
            },
            {
                    "name" : "Angular 7.x",
                    "categories" : [
                            "Food",
                            "Lab Setup",
                            "Training Material",
                            "Trainer Knowledge",
                            "Over All Feedback"
                    ],
                    "data" : [
                            9,
                            8,
                            8.2,
                            9.3,
                            9
                    ]
            }]
            }
            break;
    }
    return state;
}