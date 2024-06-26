import { useEffect, useState } from "react";
import axios from 'axios';



function App() {
  const [photo, setPhoto] = useState([]);




  useEffect(() => {
    if (photo) {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setPhoto(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, []);

  return (
    <>

    <div className=" m-9 flex flex-wrap bg-base-100  p-9 shadow-xl">
     {photo.map(photo =>(
             <div className="text-center m-2" key={photo.id} >
             <img src={photo.image}/>
                <small>{photo.id}</small>
                <h2>{photo.name}</h2>
                <p>{photo.gender}</p>
              </div>
            ))}
        
      </div>
    </>
  )
}

export default App
