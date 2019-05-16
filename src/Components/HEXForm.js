import React from 'react';
import {Field, reduxForm} from 'redux-form';

let HEXForm = ({handleSubmit, rValue, gValue, bValue, aValue, change}) => {

    const RGBAToHexA = (r,g,b,a) => {

        let rNum = Number(r);
        let gNum = Number(g);
        let bNum = Number(b);

        r = rNum.toString(16);
        g = gNum.toString(16);
        b = bNum.toString(16);
        a = Math.round(a * 255).toString(16);

        if (r.length === 1)
            r = "0" + r;
        if (g.length === 1)
            g = "0" + g;
        if (b.length === 1)
            b = "0" + b;
        if (a.length === 1)
            a = "0" + a;

        return "#" + r + g + b;
    };

    const hexValue = RGBAToHexA(rValue,gValue,bValue,aValue);

    const handleChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        let hex  = /^#[0-9A-F]{6}$/i;

        if(name === 'hexValue' && value.length === 7){
            if(hex.test(value) === false){
                change('hexValue', '');
            }
        }


    };

    return(
        <form onSubmit={handleSubmit} onChange={handleChange} style={{margin: '10px'}} className='HEX-form-div'>
            <div>
                <label htmlFor="hexValue">Hex: </label>
                <Field name="hexValue" component="input" type="text" placeholder={hexValue}/>
            </div>
        </form>
    );
};

HEXForm = reduxForm({
    form: 'hex'
})(HEXForm);

export default HEXForm;