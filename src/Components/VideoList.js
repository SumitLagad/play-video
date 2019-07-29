import React from 'react';
import VideoCard from './VideoCard'

const VideoList = (props) => {
    const renderedList = props.videos.map( (video) => {
        return <VideoCard onSelectVideo={props.onSelectVideo} key={video.id.videoId} video={video} />
    })
    return(
        <div className='ui relaxed divided list' > {renderedList} </div>
    );
}

export default VideoList;