import React from 'react';

function Mailto({ email, ...props }) {
    return (
        <a href={`mailto:${email}`}>{props.children}</a>
    );
}

export default Mailto;