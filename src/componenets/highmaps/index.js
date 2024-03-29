import React from "react";
import { render } from "react-dom";
import $ from "jquery";
import Highcharts from "highcharts/highmaps";
import drilldown from "highcharts/modules/drilldown";
import dataModule from "highcharts/modules/data";
import mapData from "./mapData";

import HighchartsReact from "highcharts-react-official";

drilldown(Highcharts);
dataModule(Highcharts);

//Highcharts.maps['myMapName'] = mapData

var data = Highcharts.geojson(Highcharts.maps["countries/us/us-all"]),
  separators = Highcharts.geojson(
    Highcharts.maps["countries/us/us-all"],
    "mapline"
  );

// Set drilldown pointers
data.forEach(function(el, i) {
  el.drilldown = el.properties["hc-key"];
  el.value = i; // Non-random bogus data
});

window.Highcharts = Highcharts;

const options = {
  chart: {
    events: {
      drilldown: function(e) {
        if (!e.seriesOptions) {
          var chart = this,
            mapKey = "countries/us/" + e.point.drilldown + "-all",
            // Handle error, the timeout is cleared on success
            fail = setTimeout(function() {
              if (!Highcharts.maps[mapKey]) {
                chart.showLoading(
                  '<i class="icon-frown"></i> Failed loading ' + e.point.name
                );
                fail = setTimeout(function() {
                  chart.hideLoading();
                }, 1000);
              }
            }, 3000);

          // Show the spinner
          chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner

          // Load the drilldown map
          $.getScript(
            "https://code.highcharts.com/mapdata/" + mapKey + ".js",
            function() {
              data = Highcharts.geojson(Highcharts.maps[mapKey]);

              // Set a non-random bogus value
              $.each(data, function(i) {
                this.value = i;
              });

              // Hide loading and add series
              chart.hideLoading();
              clearTimeout(fail);
              chart.addSeriesAsDrilldown(e.point, {
                name: e.point.name,
                data: data,
                dataLabels: {
                  enabled: true,
                  format: "{point.name}"
                }
              });
            }
          );
        }

        this.setTitle(null, { text: e.point.name });
      },
      drillup: function() {
        this.setTitle(null, { text: "" });
      }
    }
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  colorAxis: {
    min: 0,
    minColor: "#E6E7E8",
    maxColor: "#005645"
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom"
    }
  },

  plotOptions: {
    map: {
      states: {
        hover: {
          color: "#EEDD66"
        }
      }
    }
  },

  series: [
    {
      data: data,
      name: "USA",
      dataLabels: {
        enabled: true,
        format: "{point.properties.postal-code}"
      }
    },
    {
      type: "mapline",
      data: separators,
      color: "silver",
      enableMouseTracking: false,
      animation: {
        duration: 500
      }
    }
  ],

  drilldown: {
    activeDataLabelStyle: {
      color: "#FFFFFF",
      textDecoration: "none",
      textOutline: "1px #000000"
    },
    drillUpButton: {
      relativeTo: "spacingBox",
      position: {
        x: 0,
        y: 60
      }
    }
  }
};


const Highmaps =()=> {
    return (
        <div>
<HighchartsReact
          highcharts={Highcharts}
          options={options}
          constructorType={"mapChart"}
        />
        </div>
    )
}

export default Highmaps;