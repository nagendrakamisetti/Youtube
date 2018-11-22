import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar2 from './components/search-bar2';
import VideoList from './components/video-list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyCXNckiYOoetOBxt4LLWfjOJGhbAjddgfY';

// create component with html
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        // call for every 30 seconds
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar2 onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );

    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
// display it in UI