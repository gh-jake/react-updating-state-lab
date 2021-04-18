// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }
    
    setBitRate = () => {
        const settings = {...this.state.settings}
        settings.bitrate = 12
        this.setState({
            settings
        })
    }

    setResolution = () => {
        // const video = {...this.state.settings.video}
        // video.resolution = '720p'
        // this.setState({
        //     video
        // })
        // console.log(this.state)
        this.setState(prevState => ({
            ...prevState,
            settings: {
                ...prevState.settings,
                video: {
                    resolution: '720p'
                }
            }
        }))
    }

    render() {
        return (
        <div>
            <button className='bitrate' onClick={this.setBitRate}>

            </button>

            <button className='resolution' onClick = {this.setResolution}>

            </button>
        </div>
        )
    }
}
