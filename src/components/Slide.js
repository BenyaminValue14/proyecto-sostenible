import React from 'react'
import Image from 'next/image'

const Slide = (props) => {
    const { title, content} = props
    console.log(props)
    return (
        <div className="item"> 
        {/*<Image className="d-block w-100" src={img} alt="First slide"/>*/}

            <div className="caption d-md-block">
                <div className="display">{title} </div>
                <div className="content">{content}</div>
            </div>

        </div>

    )
}

export default Slide