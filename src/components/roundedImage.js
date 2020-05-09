import React from 'react'


const RoundedImage = (props) => {
    return (
        <div className="avatar border-avatar mx-auto">
            <img src={props.photo} className="rounded-circle img-responsive" alt="Example photo" />
        </div>
    )
}
export default RoundedImage;