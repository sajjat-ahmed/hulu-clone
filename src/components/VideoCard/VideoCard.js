import React from 'react';
import './VideoCard.css';

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6-kcvgQVELcLHB-71A2YCo_zTpvUgVVezEg&usqp=CAU" alt=""/>
            <p>This is a film about cosing</p>
            <h2>Movie title</h2>
            <p>Number of likes</p>
        </div>
    )
}

export default VideoCard
