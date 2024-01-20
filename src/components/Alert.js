import React from 'react'

function Alert(props) {
    const capitalize = (str) => {
        if (str && typeof str === 'string') {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        return str;
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        </div>
    )
}

export default Alert