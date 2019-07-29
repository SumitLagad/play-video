import React from 'react';
import '../css/VideoCard.css';


class VideoCard extends React.Component {


    render() {
        // console.log(this.props.video)

        return(
            <div className="item video-card" onClick= { () => this.props.onSelectVideo(this.props.video)}>
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title} />
                <div className="content">
                    <div className="header">
                        {this.props.video.snippet.title}
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default VideoCard;

