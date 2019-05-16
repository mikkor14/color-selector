import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux'


let RGBAForm = ({handleSubmit, rValue, gValue, bValue, aValue, change}) => {


    const handleChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        switch (name) {
            case 'rValue':
                if (value > 255) {
                    change('rValue', '');
                }
                break;
            case 'gValue':
                if (value > 255) {
                    change('gValue', '');
                }
                break;
            case 'bValue':
                if (value > 255) {
                    change('bValue', '');

                }
                break;
        }

    };

    return (
        <div className='RGBA-form-div'>
            <form onSubmit={handleSubmit} onChange={handleChange} style={{margin: '10px'}}>
                <div>
                    <label htmlFor="rValue">R: </label>
                    <Field name="rValue" value={rValue} component="input"

                           type="number" placeholder={rValue}/>
                </div>
                <div>
                    <label htmlFor="gValue">G: </label>
                    <Field name="gValue" value={gValue} component="input" type="number" placeholder={gValue}/>
                </div>
                <div>
                    <label htmlFor="bValue">B: </label>
                    <Field name="bValue" value={bValue} component="input" type="number" placeholder={bValue}/>
                </div>
                <div>
                    <label htmlFor="aValue">A: </label>
                    <Field name="aValue" value={aValue} component="input" type="number" placeholder={aValue}/>
                </div>
            </form>
        </div>

    );
};

RGBAForm = reduxForm({
    form: 'rgba'
})(RGBAForm);

export default RGBAForm;