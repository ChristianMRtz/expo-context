import img from "../image/img.gif";
import song from "../image/song.mp3";
import song1 from "../image/song1.mp3";
import { Link } from "react-router-dom";
import BonusContext from "../context/BonusContext";
import { useContext } from "react";

const Bonus = () => {
  const { bonus, handleBonus } = useContext(BonusContext);

  return (
    <>
      <button style={{marginLeft: "45%", marginTop: "1rem", marginBottom: "1rem"}} onClick={handleBonus}>{bonus ? "Evil Rick" : "Good Rick"}</button>
      {bonus ? (
        <embed
          src={song1}
          width="0"
          height="0"
          loop="infinite"
          autostart="true"
          hidden="true"
        />
      ) : (
        <embed
          src={song}
          width="0"
          height="0"
          loop="infinite"
          autostart="true"
          hidden="true"
        />
      )}
      <div className="grid">
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
        <div className="imgdiv">
          <img
            src={img}
            className={bonus ? "filter" : "nothing"}
            alt="wannagiveyouup?"
          ></img>
          {bonus ? <p>Gonna give you up</p> : <p>Never gonna give you up</p>}
        </div>
      </div>
      <Link to="/">
        <button style={{marginLeft: "45%", marginTop: "1rem", marginBottom: "1rem"}}>Home</button>
      </Link>
    </>
  );
};

export default Bonus;
