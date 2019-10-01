import React from 'react';



const Item = (props) => {
    console.log(props);
    return (
        <li style={{listStyleType: 'none'}}>{props.task}</li>
    )
}

export default Item;