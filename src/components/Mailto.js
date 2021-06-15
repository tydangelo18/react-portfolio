import React from 'react';

const Mailto = ({ email, ...props }) => {
    return (
        <a href={`mailto:${email}`}>{props.children}</a>
    );
}

export default Mailto;