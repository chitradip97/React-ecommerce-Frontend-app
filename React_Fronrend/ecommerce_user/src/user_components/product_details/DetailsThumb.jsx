import React from 'react'
import { useRef } from 'react';
function DetailsThumb(props) {

    return ( 
        <>
            <div className="thumb" ref={props.myRef}>
                {
                props.images.map((img, index) =>(
                    <img src={"http://127.0.0.1:1234/" +img} alt="" key={index} 
                    onClick={() => props.tab(index)}
                    />
                ))
                }
            </div>
        </>
     );
}

export default DetailsThumb;