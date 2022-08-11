
import React from 'react'

const ProgressBar = ({ bgcolor, progress }) => {

    const Parentdiv = {
        width: '60%',
        backgroundColor: 'lightgray',
        borderRadius: 40,
    }

    const Childdiv = {
        height: 10,
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}

export default ProgressBar;