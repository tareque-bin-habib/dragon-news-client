import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is out Terms and condition</h3>
            <p>go back to our : <Link to='/register'>Registration Page</Link> </p>
        </div>
    );
};

export default TermsAndConditions;