import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
    return videos.map((video) => {
        return (
            <div className="ui relaxed divided list" >
                <VideoItem video ={video}/>
            </div>
        
        )
    })
}

export default VideoList;