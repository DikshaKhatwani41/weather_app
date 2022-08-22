import React from 'react'
import styles from './Weather.module.css'
class Weather extends React.Component{
    constructor(props){
        super(props)
        //initializing state of the city with empty string
        this.state={
            "city":""
        }
    }
    // this will execute after all the components are rendered
    componentDidMount(){
        // after all components are placed set state of city to montreal and execute form submit
        this.setState({"city":"Montreal"})
        this.formSubmit("Montreal")
    }

    // this one handles on change events of element with id => city
    handleChange=(event)=>{
        // If city textbox is empty
        if(event.target.value===""){
            document.getElementById("data").innerHTML="Select a city above"

        }
        this.setState({[event.target.name]:event.target.value})
     }
    formSubmit=(city)=>{
        //If city is blank dont do anything
        if(city!==""){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=cf6eee86ed8eff55412e434187c3d88d",
        {
        method:'GET'

        })
        .then(res => res.json())
        .then(
            //executes after the first .then
            (response) => {// catch the data returned by first .then

                //console.log(JSON.stringify(response))
                if(response.cod==="404"){ // If city not found
                    document.getElementById("data").innerHTML= "Error : "+response.message
                }
                else if(response.cod===401){ // If server not replying
                    document.getElementById("data").innerHTML="Error : Failed to fetch"
                }
                else if(response.cod===200){ // If server replied with expected data, display in a fieldset
                document.getElementById("data").innerHTML ="<fieldset>"+
                "Current Temp : <b>"+(response.main.temp - 273.15).toFixed(2) + " C </b><br/>" +
                "Description  : <b>"+response.weather[0].description+ "</b><br/>" +
                "Pressure : <b>"+response.main.pressure+ " hPa </b><br/>" +
                "Humidity : <b>"+response.main.humidity+ " %</b><br/>"+
                "</fieldset>"
                }
                else{ // else display error code and message.
                    document.getElementById("data").innerHTML= "Error : "+response.cod+" "+response.message
                }
            },

            (error) => {
                // only NO RESPONSE URL errors will trigger this code
                document.getElementById("data").innerHTML = "Error : Failed to Fetch"
            }
        )
        }
    }
    render(){
        return(
     <form>
         Type a city name followed an optional country 2 letter code<br/>
         For example type Montreal or Montreal,ca to specify Canada (ca) <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">see ISO 3166 country code</a><br/><br/>


     <input type="text" name="city" id="city" value={this.state.city} onChange={(event)=>this.handleChange(event)} placeholder='Enter city'/>

      <button type="button" onClick={()=>this.formSubmit(this.state.city)}>Search</button> <br/><br/>

      <div id='data' className={styles.divData}> Data response here</div>
     </form>)
     }
}

export default Weather