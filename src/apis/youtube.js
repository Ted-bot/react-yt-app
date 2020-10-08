import axios from 'axios';

const KEY = 'AIzaSyCuiC_9NZ5hWHWBQ7ArJqwIi2klYYud3jg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
	part: 'snippet',		 
    type: 'video',
	MaxResults: 5,
	key: KEY
	}
});