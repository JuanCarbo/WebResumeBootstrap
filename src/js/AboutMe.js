import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <div className='container-fluid w-50 float-left p-5 bigger-text'>
                <h1 className='display-1 font-weight-bold'>
                    About Me
                </h1>
                <p>I am a full stack developer, currently working at Globant in an asp.net project. My hability to come up with approaches to difficult issues has made me shine through the time I have been working here.</p>
                <br />
                <p>In the past, I have worked as an Android Developer for <a href='https://www.redjar.com.ar/'>RedJar</a> , and as a freelance developer for local customers.</p>
                <br />
                <p>My passion in life has always been fixing things. It strarted with whatever needed fixing or improving in my house, and in time that passion took me towards programming. The options that programming gives to problemsolving are endless if combined with other technologies and are then best way to reaching your needs.</p>
            </div>
        )
    }
}
