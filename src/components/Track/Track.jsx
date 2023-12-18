import { IconButton } from '@mui/material'
import { Pause, PlayArrow } from '@mui/icons-material'
import { useContext } from 'react'
import { AudioContext } from '../../context/AudioContext'
import secondsToMMSS from '../../utils/secondsToMMSS'
import st from './track.module.scss'
import cn from  'classnames'

const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;

  const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === track.id;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={cn(st.track, isCurrentTrack && st.playing)}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? <Pause /> :<PlayArrow />}
      </IconButton>
      <img className={st.preview} src={preview} alt='' />
      <div className={st.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  )
}

export default Track