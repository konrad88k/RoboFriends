import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    return(
        <div className='scrollY' style={{margin: '2rem 0', overflowY: 'scroll', border: '1px solid red', height: '460px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;