import { useState } from 'react';
import { postPlayer } from '../api/index';
import { useNavigate } from 'react-router-dom';


const  NewPlayerForm = () => {
    const [puppyName, setPuppyName] = useState("");
    const [puppyBreed, setPuppyBreed] = useState("");
    const [playerStatus, setPlayerStatus] = useState("bench");
    const [imageUrl, setImageUel] = useState("");
    const navigate = useNavigate()
   
    function onPuppyNameChanged(e){
        setPuppyName(e.target.value)
    }
    function onPuppyBreedChanged(e){
        setPuppyBreed(e.target.value)
    }
    function onPuppyStatusChanged(e){
        setPlayerStatus(e.target.value)
    }
    function onPuppyImageUrlChanged(e){
        setImageUel(e.target.value)
    }


    function submitHandler (event) {
    
        event.preventDefault();
        console.log(puppyName,puppyBreed,playerStatus,imageUrl)
      navigate('/allplayers')
    
       const newPuppy = {
        name: puppyName,
        breed: puppyBreed,
        status: playerStatus,
        imageUrl: imageUrl,
       
       }

        postPlayer(newPuppy);

        console.log(newPuppy)
      }

    const resetHandler =()=>{
        setPuppyName('');
        setPuppyBreed('');

    }

    return (
        
    <form onSubmit={submitHandler} className="form" >
    <div className="containers">
        <p>
            <label htmlFor="name">Name:</label>
            <input onChange={onPuppyNameChanged}
        type="text" 
        id="name" /> <br/>
        <label htmlFor="breed">Breed:</label>
            <input onChange={onPuppyBreedChanged}
        type="text" 
        id="breed"/><br/>
        <label htmlFor="url">ImageUrl:</label>
            <input onChange={onPuppyImageUrlChanged}
        type="text" 
        id="url" /> <br/>

    <label>Status(Pick One):<select value={playerStatus} onChange={onPuppyStatusChanged}>
    <option value="bench">Bench</option>
    <option value="field">Field</option>
    </select></label> 

    </p> 
    </div>
    <p className="buttons">
        <button onClick={resetHandler} type="reset" className="resetBtn">Reset</button>
        <button onClick={submitHandler} type="submit" className="submitBtn">Add New Player</button>
    </p>
    </form>
    );
};

export default NewPlayerForm;