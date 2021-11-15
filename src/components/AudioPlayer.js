import mp3_file from '../music/breakin-away.mp3';
const AudioPlayer = () => {
    return (
        <div className='audioPlayer'>
            <audio controls autoPlay loop>
                <source  src={mp3_file} type='audio/mpeg'></source>

            </audio>

        </div>
    )

}

export default AudioPlayer;