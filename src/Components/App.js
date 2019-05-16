import { connect } from 'react-redux';
import React from 'react';
import Color from './Color'

const mapStateToProps = state => {
    return {
        formState: state.form,
    }
};

const App = connect(mapStateToProps)(Color);

export default App;
