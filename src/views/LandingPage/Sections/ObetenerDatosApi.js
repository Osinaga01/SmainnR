import React,{Component} from 'react';  

import Api from "./Api"

import ChartSection from "./NationalSection"



const name=''
class ObtenerDatosApi extends Component {
    state = {  }

    

    extraerDatosVotos =(name)=>{


        this.name =name ;
      
      
      }




    render() { 
        return ( 
            <React.Fragment>
            <Api
            extraerDatosVotos ={this.extraerDatosVotos}
            
            />

            <ChartSection
                name = {this.name}
            />
            </React.Fragment>
         );
    }
}
 





export  default ObtenerDatosApi;