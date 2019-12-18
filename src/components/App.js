import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state = {videos : []}

    onTermSubmit = async (term) => {

       const response = await youtube.get('/search', {
            params : {
                part: 'snippet',
                key: "AIzaSyDQ5gFwW2nl1x80v4lCCs79sgNFfpYJ8Y0",
                type: "video",
                maxResult: 5,
                q: term
            }            
        })

        this.setState({videos : response.data.items});
    }

    render() {
        return (
            <div className="ui container" >
                <SearchBar onFormSubmit= {this.onTermSubmit}  />
                <VideoList videos={this.state.videos} />
            </div>
            

        )
    }
}

export default App