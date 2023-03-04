import React from 'react';

import todos from './db';
import { FormInput } from "./components/form/form-input/FormInput.jsx";

const App = () => {


    return (
        <div>
            <FormInput placeholder={ 'Enter a title' } name={ 'title' } label={ 'Title' } error={ 'It`s empty' }/>
        </div>
    );
};

export default App;
