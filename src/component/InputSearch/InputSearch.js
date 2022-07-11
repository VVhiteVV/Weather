import React,{Component} from "react";

import './InputSearch.css'
export default class InputSearch extends Component{


    render() {
        return (
            <div className={'InputSearch'}>
                <div className={'InputSearch__search'}>
                    <input className={'InputSearch__input'} placeholder={'Введите город'} type="text"
                           onChange={this.props.onChange}/>
                    <button className={'InputSearch__button'} onClick={this.props.onClick}>Поиск</button>
                </div>
                <div className={'InputSearch__city'}>{this.props.cityName}</div>
            </div>
        )
    }
}