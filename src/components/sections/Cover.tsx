import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Cover = () => {
  return (
    <section id="home">
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
        <LiteYouTubeEmbed
          id="zjkn05lvmmE"
          adNetwork={true}
          poster="maxresdefault"
          title="SNESES"
        />
      </div>
    </section>
  );
};

export default Cover;
