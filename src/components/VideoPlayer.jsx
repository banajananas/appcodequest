import ReactPlayer from 'react-player';

function VideoPlayer({ url }) {
  if (!url) return null;

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
      />
    </div>
  );
}

export default VideoPlayer;
