import React, {Component} from 'react';
import RGBAForm from './RGBAForm'
import HSLForm from './HSLForm'
import HEXForm from './HEXForm'
import {parseToRgb, rgba} from 'polished'

export default class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rValue: 255,
            gValue: 10,
            bValue: 5,
            aValue: 1,
            styles: {
                background: rgba(255, 10, 5, 1)
            }

        };
    }

    changeRGBA = (values) => {
        if (values.rValue && values.gValue && values.bValue && values.aValue != null) {
            this.setState({
                rValue: values.rValue,
                gValue: values.gValue,
                bValue: values.bValue,
                aValue: values.aValue,
                styles: {
                    background: `rgba(${values.rValue}, ${values.gValue}, ${values.bValue}, ${values.aValue})`
                }
            });
        }

    };

    changeHSL = (values) => {
        if (values.hValue && values.sValue && values.lValue != null && values.sValue && values.lValue != 0) {
            const convertedColor = parseToRgb(`hsla(${values.hValue}, ${values.sValue * 100}%, ${values.lValue * 100}%, 1)`);
            this.setState({
                rValue: convertedColor.red,
                gValue: convertedColor.green,
                bValue: convertedColor.blue,
                aValue: convertedColor.alpha,
                styles: {
                    background: rgba(convertedColor)
                }
            });

        }
    };


    hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))

    changeHEX = (values) => {
        if (values.hexValue != null && values.hexValue.length >= 7) {
            const rgba = this.hexToRgb(values.hexValue);
            this.setState({
                rValue: rgba[0],
                gValue: rgba[1],
                bValue: rgba[2],
                styles: {
                    background: `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}`
                }
            });
        }
    };


    render() {

        return (
            <div style={this.state.styles} className='color-div'>
                <RGBAForm rValue={this.state.rValue}
                          gValue={this.state.gValue}
                          bValue={this.state.bValue}
                          aValue={this.state.aValue}
                          onChange={this.changeRGBA}
                          updateField/>
                <HSLForm rValue={this.state.rValue}
                         gValue={this.state.gValue}
                         bValue={this.state.bValue}
                         aValue={this.state.aValue}
                         onChange={this.changeHSL}/>
                <HEXForm rValue={this.state.rValue}
                         gValue={this.state.gValue}
                         bValue={this.state.bValue}
                         aValue={this.state.aValue}
                         onChange={this.changeHEX}/>
            </div>
        )
    }
}