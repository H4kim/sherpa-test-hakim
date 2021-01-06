import React from 'react'
import { Button } from 'react-bootstrap';

const PrimaryButton = (props) => {
    const styles = {
        container : {
            color: 'black',
            backgroundColor: 'white' ,
            borderRadius:'15px',
        },
    }
    return (
        <Button className={"btn btn-light round"} style={{...styles.container ,...props.customStyle}}>{props.text}</Button>
    )
}

export default PrimaryButton
