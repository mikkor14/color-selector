import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {parseToHsl} from 'polished'

let HSLForm = ({handleSubmit, rValue, gValue, bValue, change}) => {

    let colorConverted = parseToHsl(`rgb(${rValue}, ${gValue}, ${bValue})`);

    const handleChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        switch (name) {
            case 'hValue':
                if (value > 365) {
                    change('hValue', '');
                }
                break;
            case 'sValue':
                if (value > 1 || value.length > 4) {
                    change('sValue', '');
                }
                break;
            case 'lValue':
                if (value > 1 || value.length > 4) {
                    change('lValue', '');
                }
                break;
        }

    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange} style={{margin: '10px'}} className='HSL-form-div'>
            <div>
                <label htmlFor="hValue">H: </label>
                <Field name="hValue" component="input" type="number" placeholder={colorConverted.hue}/>
            </div>
            <div>
                <label htmlFor="sValue">S: </label>
                <Field name="sValue" component="input" type="number" placeholder={colorConverted.saturation}/>
            </div>
            <div>
                <label htmlFor="lValue">L: </label>
                <Field name="lValue" component="input" type="number" placeholder={colorConverted.lightness}/>
            </div>
        </form>
    );
};


HSLForm = reduxForm({
    form: 'hsl'
})(HSLForm);


export default HSLForm;