import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDisplay from './VideoDisplay';

class App extends React.Component {
    state = { videos : [] , selectedVideo : null };

    componentDidMount() {
        this.onSearchVideo('news');
    }

    onSearchVideo = async (searchQuery) => {
        const responce = await Youtube.get('/search',{
            params : {
                q : searchQuery
            }            
        });

        this.setState({videos : responce.data.items ,selectedVideo : responce.data.items[0]});
    }

    onSelectVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchVideo} />
                
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDisplay video={this.state.selectedVideo}></VideoDisplay>
                        </div>
                        <div className="five wide column">
                            <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}

export default App;