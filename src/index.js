import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDhITBSIGnu9jDopNzxeOLJmon2PKchIC4';

class App extends Component {
	constructor(props) {
		super(props);

		this.state={
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('javascript');
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
		return (
		    <div>
			    <SearchBar onSearchTempChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={this.selectedVideo.bind(this)}
					videos={this.state.videos}
				/>
		    </div>
		);
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term}, videos => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	selectedVideo(selectedVideo) {
		this.setState({selectedVideo})
	}

}

ReactDom.render(<App />, document.querySelector('.container'));
