import { HIGHCHARTS_DATA } from "./highcharts-action-types";

export const getHighchartsData=serviceUrl=>dispatch=>{
    fetch(serviceUrl).then(
        response=>response.json(),
        reason=>Promise.reject(reason)
    ).then(
        data=>{
            dispatch({
                type:HIGHCHARTS_DATA,
                payload:data
            })
        },
        reason=>{
            dispatch({
                type:HIGHCHARTS_DATA,
                payload:reason
            })
        }
    )
}