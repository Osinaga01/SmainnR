import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import NationalSection from "./Sections/NationalSection.js"
import DepartamentalSection from "./Sections/DepartamentalSeccion.js";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Smainn App"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Resultados Elecciones Generales 2019</h1>
              <h4>
               
              </h4>
              <br />
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ProductSection /> */}
          {/* <TeamSection /> */}
          {/* <WorkSection /> */}
          <NationalSection/>
          {/* <DepartamentalSection/> */}
        </div>
      </div>
      <div style={{marginTop:25}} className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <DepartamentalSection data={[
            {
              departament: 'Santa Cruz',
              results: [
                {option: 'A', votesCount: 5},
                {option: 'b', votesCount: 2},
                {option: 'c', votesCount:9},
                {option: 'g', votesCount: 1},
                {option: 'e', votesCount: 3}
                
              ]
            },
            {
              departament: 'Beni',
              results: [
                {option: 'A', votesCount: 5},
                {option: 'b', votesCount: 2},
                {option: 'c', votesCount:9},
                {option: 'g', votesCount: 1},
                {option: 'e', votesCount: 3}
                
              ]
            },
            {
              departament: 'Beni',
              results: [
                {option: 'A', votesCount: 5},
                {option: 'b', votesCount: 2},
                {option: 'c', votesCount:9},
                {option: 'g', votesCount: 1},
                {option: 'e', votesCount: 3}
                
              ]
            },
            {
              departament: 'Beni',
              results: [
                {option: 'A', votesCount: 5},
                {option: 'b', votesCount: 2},
                {option: 'c', votesCount:9},
                {option: 'g', votesCount: 1},
                {option: 'e', votesCount: 3}
                
              ]
            },
            {
              departament: 'Beni',
              results: [
                {option: 'A', votesCount: 5},
                {option: 'b', votesCount: 2},
                {option: 'c', votesCount:9},
                {option: 'g', votesCount: 1},
                {option: 'e', votesCount: 3}
                
              ]
            },
          ]}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
