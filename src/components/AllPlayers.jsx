import { getAllPlayers, removePlayer } from "../api/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers(){
    const [player, setPlayer]= useState([])
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);
  
    const navigate= useNavigate()
        useEffect(()=>{
            async function RenderAllPlayer(){
                try{
                    const response = await getAllPlayers()
                    setPlayer(response)
                }catch(error){
                    console.log("failed to fetch")
                }
            }
            RenderAllPlayer()
        },[])
    function clickHandler(playerId){
            navigate(`/players/${playerId}`);
        }
    const deleteHandler = async (id) => {
            const response = await removePlayer(id);
            console.log(response);
            const notdeleted= player.filter(item=>item.id !== id)
            setPlayer(notdeleted)
        
        }
        console.log(searchValue);

    function searchBarHandler(e){
        e.preventDefault();
        const result = player.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchResult(result);

    }
return(
   
   <div className="main">
   <form onSubmit={searchBarHandler}>
    <label>
        Search Puppies:
        <input type="text" placeholder="Puppy Name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>   
    </label>
    <button type="submit" className="submitBtn">Search</button>
    </form>

    { (searchResult || player).map((player) => (
    <>
    <div key={player.id} className="containerplayer">
        <h1>{player.name}</h1>
        <h2>{player.breed}</h2>
        <img src={player.imageUrl} alt="photo" />
    </div>
    <button id='viewbtn' onClick={() => clickHandler(player.id)}>View Puppy</button>
    <button id='deletebtn'onClick={() => deleteHandler(player.id)}>Delete</button></>
    ))}
    </div>
        
)
}