import React from "react";
import Chart from 'react-google-charts';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

type Props = {
  title: String,
  md:Number,
  data: {
    option: String,
     votesCount : Number
  }[]
}
export default function Charts({title,md=8,data}: Props) {
  const mapData = data.map(d => [d.option, parseInt(d.votesCount)]);
console.log(mapData);
  return (
      <GridItem xs={12} sm={12} md={md}>
        <Chart
          width="100%"
          height="300px"
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          // data={[
          //   ['FPV', 'Hours per Day'],
          //   ['MTS', 11],
          //   ['UCS', 5],
          //   ['MAS-IPSP', 2],
          //   ['BOLIVIA DICE NO', 8],
          //   ['PDC', 7],
          //   ['MNR', 7],
          //   ['PAN-BOL', 7],
          //   ]}
          data={[
            ['FPV', 'Hours per Day'],
            ['MTS', 11],
            ['UCS', 5],
            ['MAS-IPSP', 2],
            ['BOLIVIA DICE NO', 8],
            ['PDC', 7],
            ['MNR', 7],
            ['PAN-BOL', 7],
            ...mapData
          ]}
          options={{
            title: title,
            // Just add this option
            is3D: true,
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </GridItem>
  );
}
