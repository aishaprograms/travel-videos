import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} alt=""/>
        </div>

        <div className="mediabody">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  ) 
};

export default VideoListItem;