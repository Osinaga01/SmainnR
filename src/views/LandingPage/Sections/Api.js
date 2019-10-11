import React, { Component } from 'react';






export default class Api  extends Component {
    

    state ={
        error :'',
        resultado:{}
    }

    componentDidUpdate(){
        this.consultarApi();
    };

    componentDidMount(){
        this.setState({
          error : false
        })
      }

    consultarApi = () =>{
        // const {ciudad,pais}=this.state.consulta;
        // if(!ciudad || !pais){
        //   return null
        // }
        // leer la url y agregar el Api key    
      //  const appid = '088231396c06f131b01176a3f7e62826'
        //let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`
        let url = `http://localhost/blog/public/administrativeDivision/info`
    
       
        //https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
        //query con fetch api
          fetch(url)
            .then( respuesta => {
            return respuesta.json();
          })
          .then( datos => {
            //console.log(datos)
            this.setState({
              resultado:datos
            })
          })
          .catch(error => {
            console.log(error)
          })
        
      };

    
     

    render() { 
        const {name} = this.state.resultado;
        
        return (  
            <div class="container">
                this.props.extraerDatosVotos(name) ;
            </div>



        );
    }







}