import React, {useState , useEffect} from 'react';
// import {useOpenData} from './Hooks/useOpenData'


function App() {
  const [ movies, setMovies ] = useState({})
  // const openData = useOpenData()

  var apiKeyT = "0f79586eb9d92afa2b7266f7928b055c";
  var urlT =
    "https://api.themoviedb.org/3/search/movie?api_key=" + apiKeyT + "&query=ironman";

  // const config = {
  //   headers:{
  //     Accept: 'application/x-www-form-urlencoded',
  //     'Content-Type':'application/x-www-form-urlencoded'
  //   }
  // }
  // const oauth ={
  //   grant_type:'client_credentials',
  //   client_id:'7dfb1e8692788fcd752f80774dcd85f0',
  //   client_secret:'0e3676ed2fe8db3446ec77352ac3761b'
  // }
  useEffect(() => {
    const fetchData= () =>
      fetch(urlT)
        .then(res => res.json())
        .then(data =>{
          if(data) return fetchData()
          else setMovies(data)
        })
        .catch(err => console.log(err))
    
    fetchData()
  })





  return (
    <div >
      <span>${JSON.stringify(movies)}</span>
      <hr />
    </div>
  );
}

export default App;
