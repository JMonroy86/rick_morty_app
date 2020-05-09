import React from 'react'
import RoundedImage from '../components/roundedImage';


const Creator = (props) => {
    return (
        <>
        <div className="col-md-6 text-center">
            <RoundedImage photo={props.photo_avatar} />
            <h1 className=" pt-3 title-char">Justin Roiland</h1>
        </div>
        <div className="col-md-6 text-center">
            <RoundedImage photo={props.photo_avatar2} />
            <h1 className="pt-4 title-char">Dan Harmon</h1>
        </div>
        </>
    )
}
export default Creator;