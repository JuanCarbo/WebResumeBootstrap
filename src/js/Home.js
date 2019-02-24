import React, { Component } from 'react'

export default class Home extends Component {


    render() {
        return (
            <div className='container-fluid p-5 bigger-text'>
                <h1 className='display-1 font-weight-bold'>I am Juan Carbó</h1>
                <p>I am a full stack developer, currently living in mar del plata and looking forward to working with you.</p>
                <div className="btn btn-primary btn-lg" onClick={() => this.setState({ contactFormExpanded: true })}>HIRE ME!</div>
            </div>
        )
    }
}
