import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        
        const linkedIn = require('../img/linkedin.svg')
        const gmail = require('../img/gmail.svg')
        return (
            <div className='container-fluid p-5 bigger-text'>
            <h1 className='display-1 font-weight-bold'>Contact Information</h1>
                <br />
                <div className='transparent-box'>

                    <div onClick={() => window.open('mailto:juan.carbo94@gmail.com', '_blank')}>
                        <img src={gmail} alt="Gmail" style={{ display: "block", height: '50px', width: '50px' }} />
                        <h3>Juan.Carbo94@gmail.com</h3>
                    </div>
                    <div onClick={() => window.open('www.linkedin.com/in/juan-carbo', '_blank')}>
                        <img src={linkedIn} alt="LinkedIn" style={{ display: "block", height: '50px', width: '50px' }}></img>

                        <h3>www.linkedin.com/in/juan-carbo</h3>
                    </div>
                </div>

            </div>
        )
    }
}
