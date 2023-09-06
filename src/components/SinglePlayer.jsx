import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSinglePlayer } from '../api/index';


export default function SinglePlayer() {
  const [singlePlayer, setSinglePlayer] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  console.log(`params: `, params, params.id);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const player = await getSinglePlayer(params.id);
        console.log(player);
        return setSinglePlayer(player);
      } catch (error) {
        setError(error);
      }
    }
    fetchPlayer();
  }, [params.id]);
      console.log(singlePlayer)


      return (
        <>
        <div className="pups">

          {error && <p>{error}</p>}
          {singlePlayer === [] ? <p>Error loading data</p> : ""}
          {singlePlayer && (
              
              <section className= "singleplayer">
              <div className="player">
                <img className="image" src={singlePlayer.imageUrl} />
              </div>
              <div >
                <h2>Name:{singlePlayer.name}</h2>
                <h3>Breed:{singlePlayer.breed}</h3>
                <h3>Status:{singlePlayer.status}</h3>
                <h3>Team: {singlePlayer.team && singlePlayer.team.name}</h3>
              </div>
              <button onClick={()=> navigate("/")}>Back to home page</button>
            </section>
          )}
        </div>
        </>
      );
    }