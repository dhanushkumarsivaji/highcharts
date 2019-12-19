import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Draggable, Droppable } from "react-drag-and-drop";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getHighchartsData } from "../actions/highcharts-actions";

class DynamicHighcharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: "column",
            chartsList: ["area", "areaspline", "bar", "column", "line", "pie", "scatter"]
        }
        this.onDrop = this.onDrop.bind(this);
    }
    componentDidMount() {
        this.props.getHighchartsData();
    }
    onDrop(data) {
        console.log(data);
        this.setState({
            chartType: data.type
        });
    }
    render() {
        
        if (this.props.highchartsData.length > 0) {
            let chartCats = this.props.highchartsData[0].categories;    
            const options = {
                chart: {
                    type: this.state.chartType
                },
                title: {
                    text: `Dynamic Chart with Drag and Drop Feature!`
                },
                xAxis: {
                    categories: chartCats
                },
                series: this.props.highchartsData
            };
            return (
                <div className="container-fluid" style={{color:'white'}}>
                    <div className="container row">
                        <div className="col-md-2">
                            <table className="table">
                                <tbody style={{color:'white'}}>
                                    {
                                        this.state.chartsList.map((chart, idx) =>
                                            <tr key={idx}>
                                                <td>
                                                    <Draggable type="type" data={chart}>
                                                        {chart}
                                                    </Draggable></td>

                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-9">
                            <Droppable
                                types={['type']}
                                onDrop={this.onDrop}>
                                <div>
                                    <HighchartsReact
                                        highcharts={Highcharts}
                                        options={options}
                                    />
                                </div>
                            </Droppable>
                        </div >
                    </div >
                </div >
            )
        }
        else {
            return <div style={{ textAlign: "center", marginTop: "10%" }}>
                <h5>Loading...</h5>
            </div>
        }
    }
}

DynamicHighcharts.propTypes = {
    highchartsData: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    highchartsData: state.highchartsReducer.highchartsData
})

export default connect(mapStateToProps, { getHighchartsData })(DynamicHighcharts);