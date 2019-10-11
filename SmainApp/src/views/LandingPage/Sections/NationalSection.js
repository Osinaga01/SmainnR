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

import Chart from "./utils/Charts.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);

export default function ChartSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Resultados Nacionales</h2>
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
        <Chart data={[
          {option: 'A', votesCount: 5},
          {option: 'b', votesCount: 2},
          {option: 'c', votesCount:6},
          {option: 'g', votesCount: 1},
          {option: 'e', votesCount: 3}
          
        ]} />
    </GridContainer>
      </div>
    </div>
  );
}
