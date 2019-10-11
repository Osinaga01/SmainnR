import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import Charts from "./utils/Charts.js";

import Chart from 'react-google-charts';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);


type Props = {
  data: {
    departament: String,
    results: {
      option: String,
      votesCount: Number
    }[]
  }[]
}
export default function DepartamentalSection({ data }: Props) {

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Resultados departamentales</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>

        <GridContainer justify="center">
          {data.map(({ departament: dpto, results }) => (
            <Charts title={dpto} data={results} md={4} ></Charts>
          ))}
        </GridContainer>
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Chart
                    width="100%"
                    height="300px"
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                    ['FPV', 'Hours per Day'],
                    ['MTS', 11],
                    ['UCS', 5],
                    ['MAS-IPSP', 2],
                    ['BOLIVIA DICE NO', 8],
                    ['PDC', 7],
                    ['MNR', 7],
                    ['PAN-BOL', 7],
                    ]}
                    options={{
                    title: 'Santa Cruz',
                    // Just add this option
                    is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
                <Chart
                            width="100%"
                            height="300px"
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                            ['FPV', 'Hours per Day'],
                            ['MTS', 11],
                            ['UCS', 5],
                            ['MAS-IPSP', 2],
                            ['BOLIVIA DICE NO', 8],
                            ['PDC', 7],
                            ['MNR', 7],
                            ['PAN-BOL', 7],
                            ]}
                            options={{
                            title: 'RESULTADOS',
                            // Just add this option
                            is3D: true,
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Chart
                    width="100%"
                    height="300px"
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                    ['FPV', 'Hours per Day'],
                    ['MTS', 11],
                    ['UCS', 5],
                    ['MAS-IPSP', 2],
                    ['BOLIVIA DICE NO', 8],
                    ['PDC', 7],
                    ['MNR', 7],
                    ['PAN-BOL', 7],
                    ]}
                    options={{
                    title: 'Cochabamba',
                    // Just add this option
                    is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Chart
                    width="100%"
                    height="300px"
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                    ['FPV', 'Hours per Day'],
                    ['MTS', 11],
                    ['UCS', 5],
                    ['MAS-IPSP', 2],
                    ['BOLIVIA DICE NO', 8],
                    ['PDC', 7],
                    ['MNR', 7],
                    ['PAN-BOL', 7],
                    ]}
                    options={{
                    title: 'Tarija',
                    // Just add this option
                    is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Chart
                    width="100%"
                    height="300px"
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                    ['FPV', 'Hours per Day'],
                    ['MTS', 11],
                    ['UCS', 5],
                    ['MAS-IPSP', 2],
                    ['BOLIVIA DICE NO', 8],
                    ['PDC', 7],
                    ['MNR', 7],
                    ['PAN-BOL', 7],
                    ]}
                    options={{
                    title: 'Beni',
                    // Just add this option
                    is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Chart
                    width="100%"
                    height="300px"
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                    ['FPV', 'Hours per Day'],
                    ['MTS', 11],
                    ['UCS', 5],
                    ['MAS-IPSP', 2],
                    ['BOLIVIA DICE NO', 8],
                    ['PDC', 7],
                    ['MNR', 7],
                    ['PAN-BOL', 7],
                    ]}
                    options={{
                    title: 'Pando',
                    // Just add this option
                    is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
          </GridItem>
        </GridContainer> */}
      </div>
    </div>
  );
}
