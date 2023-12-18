import { Input } from '@mui/material';
import tracksList from '../../assets/tracksList';
import Track from '../../components/Track/Track';
import st from './mainPage.module.scss';
import { useState } from 'react';

const runSearch = (query) => {
  if (!query) {
    return tracksList
  }

  const lowerCaseQuery = query.toLowerCase();
  return tracksList.filter(
    (track) => 
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  )
}

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value)
    setTracks(foundTracks);
  }

  return (
    <div className={st.search}>
      <Input className={st.input} 
        placeholder='Search tracks'
        onChange={handleChange}
        />
      <div className={st.list}>
          {tracks.map((track) => (
            <Track key={track.id} {...track} />
          ))}
      </div>
    </div>
  )
}

export default MainPage