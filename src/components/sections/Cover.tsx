import YouTube, { YouTubeProps } from "react-youtube";

const Cover = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <section>
      <div className="space-y-4">
        <div className="">
          <strong>SNESES</strong> (Super Nintendo Entertainment System Emulation
          System) is an emulator frontend for Raspberry Pi inspired on the Super
          Nintendo, and built from{" "}
          <a
            href="https://blast16.tripware.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blast16
          </a>{" "}
          with{" "}
          <a
            href="https://love2d.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LÖVE
          </a>
          &nbsp;framework.
        </div>
        <YouTube
          videoId="zjkn05lvmmE"
          opts={opts}
          onReady={onPlayerReady}
          className={"youtubeContainer"}
        />
      </div>
    </section>
  );
};

export default Cover;
