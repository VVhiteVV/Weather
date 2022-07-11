import React, {Component} from "react";
import './BottomData.css';
export default class BottomData extends Component {

        render() {
                return (
                    <div className={'BottomData'}>
                            <div>{this.props.date.split(" ").slice(1).join()}</div>
                            <div><img src={this.props.icon} alt=""/></div>
                            <div>+{this.props.minT}</div>
                            <div>Ветер:</div>
                            <div>{(Math.floor((this.props.windSpeed / 3.6) * 10) / 10)} м\с</div>
                            <div>Осадки:</div>
                            <div>{this.props.precipitation} мм</div>
                    </div>
                )
        }
}