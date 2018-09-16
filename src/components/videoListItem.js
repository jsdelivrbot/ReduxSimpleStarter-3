import React, {Component} from 'react';

const videoListItem = ({video, onVideoSelect}) => {

	console.log('videoListItem', video);
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={ () => onVideoSelect(video) } className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imgUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	)
};

export default videoListItem;
