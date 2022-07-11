# Прогноз погоды на 3 дня.

Главная страница:

![Index](https://media.discordapp.net/attachments/356017746787565568/991790119226982582/unknown.png?width=888&height=464)

SPA довольно простенькое, выдает прогноз только на 3 дня любого города, даже в другой стране.
Данные берутся из api через fetch и передаются через props другому компоненту

```javascript
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

    }
```

DOM дерево главного компонента App:

```javascript
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
```