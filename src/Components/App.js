import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';


class App extends React.Component {
    state = { videos : [] };

    onSearchVideo = async (searchQuery) => {
        const responce = await Youtube.get('/search',{
            params : {
                q : searchQuery
            }            
        });

        this.setState({videos : responce.data.items});
    }

    render() {
        return (
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onSearchVideo} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;