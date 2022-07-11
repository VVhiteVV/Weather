import React, {Component} from "react";
import './Card.css'

export default class Card extends Component{

    render() {
        return (
            <div onClick={this.props.onClick} className={'Card'}>
                <div className={'Card__data'}>
                    <div className={'Card__leftData'}>
                        <div className={'Card__Item'}>{this.props.date}</div>
                        <div className={'Card__Temp'}>
                            <div className={'Card__maxT'}>+{this.props.maxT}</div>
                            <div className={'Card__minT'}>+{this.props.minT}</div>
                        </div>
                    </div>
                    <div className={'Card__rightData'}>
                        <div className={'Card__Item'}><img src={this.props.conditionIcon} alt=""/></div>
                    </div>
                    <div className={'Card__bottomData'}>
                        <div className={'Card__Item'}>{this.props.conditionText}</div>
                    </div>
                </div>
            </div>

        )
    }

}