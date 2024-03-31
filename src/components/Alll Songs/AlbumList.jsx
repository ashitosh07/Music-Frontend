import AlbumImage from "../../assets/Cage.jpg";
const h1Styles = {
  color: "white",
  fontWeight: "bold",
  fontSize: "36px",
};

const mediaQueryStyles = {
  textAlign: "center", // Default style
};

const AlbumList = () => {
  if (window.innerWidth <= 540) {
    mediaQueryStyles.textAlign = "left";
  } else if (window.innerWidth >= 600) {
    mediaQueryStyles.textAlign = "center";
  }

  const songs = [
    "The Unknown",
    "Deaden the Pain",
    "The Boy inside the Cage",
    "Journey to Journey",
    "Blessings Undeserved",
    "A man at a Coffee Shop",
    "That Empty Place(Interlude)",
    "Changes,Aging and Death",
    "Hopeful Disappointment",
    "Reflections",
    "At the Ballroom",
    "Twenty 4(Interlude)",
    "Appointed",
    "Birk's Works",
    "A January Day",
    "Alone",
    "Depth",
    "The Anchor",
    "A Place Over Yonder(Interlude)",
    "I'm Just a Pilgrim (Country roads)",
    "Our Final Goodbye",
    "I Look to the Heavens",
  ];
  return (
    <div
      className="parent pt-16 my-16"
      style={{ backgroundColor: "black", borderRadius: "40px" }}
    >
      <div className="flex justify-center  p-4 gap-20 ">
        <img src={AlbumImage} alt="" className="w-[40%] h-fit" />
        <div>
          <p style={{ ...h1Styles, ...mediaQueryStyles }}>
            Album: Inside the cage
          </p>
          {songs.map((song, i) => {
            return (
              <p key={i}>
                {i + 1} . {song}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
