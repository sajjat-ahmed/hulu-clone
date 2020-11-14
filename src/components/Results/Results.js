import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import requests from '../../requests';
import VideoCard from '../VideoCard/VideoCard';
import './Results.css';

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetshActionMovies);
            console.log(request);
        }
        fetchData();
    }, [])

    return (
        <div className="results">
            {/* {movies.map((movie) => {
                <VideoCard />
            })} */}
        </div>
    )
}

export default Results
