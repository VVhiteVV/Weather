import React,{Component} from "react";
import Card from "./component/Card/Card";
import BottomData from "./component/bottomData/bottomData";
import InputSearch from "./component/InputSearch/InputSearch";
import "./App.css"
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            time: 0,
            city: "Orenburg",
        }
    };

    componentDidMount() {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=08b34f35c8fc4549827111826222206&q=${this.state.city}&days=5&aqi=yes&lang=ru`).then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        isLoaded:true,
                        items: result.forecast.forecastday
                    });
                    console.log(result)
                },
                (error)=>{
                    this.setState({
                        isLoaded:true,
                        error
                    })
                }
            )

    };
    handleInput = event =>{
        this.setState({
            city: event.target.value
        })
    }
    searchInput = () => {
        this.setState({
            city: this.state.city
        })
        this.componentDidMount();
    }
    Timing(num){
        this.setState({
            time: num
        })
    }
    render() {
        const {error,isLoaded,items,time,city} = this.state;
        if(error){
            return <p>Error {error.message}</p>
        }
        else if(!isLoaded){
            return <p>Загрузка...</p>
        }
        else{
            return (
                <div className={'App'} >
                    <div className={'App__Inner'}>
                        <InputSearch onChange={this.handleInput} cityName={city} onClick={this.searchInput}/>
                        <ul className={'App__List'} >
                            {items.map(item => (
                                <Card onClick={() => this.Timing(item.date_epoch)} key={item.date_epoch} date={item.date} conditionIcon={item.day.condition.icon} conditionText={item.day.condition.text} maxT={item.day.maxtemp_c} minT={item.day.mintemp_c} />

                            ))}
                        </ul>
                        <div className={'App__BottomData'}>
                            {
                                items.map(item => (
                                    item.date_epoch === time ? item.hour.map((item2,i) => (
                                        i % 3 === 0 ? <BottomData key={item2.time_epoch} windSpeed={item2.wind_kph} precipitation={item2.precip_mm} icon={item2.condition.icon} date={item2.time} minT={item2.temp_c}/> : false
                                    )) : false
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
}
