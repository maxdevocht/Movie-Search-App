import { useState } from "react";

const SearchMovie = () => {

  const [query, setQuery] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();
    
    const query = "Jurassic Park";
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
};

  return (
    <form className="grid px-6 py-2" action="" onSubmit={searchMovies}>
      <label className="text-[1rem] mb-[0.2rem]" htmlFor="">Movie Name</label>
      <input className="text-[1rem] py-[0.5rem] px-[1rem] border rounded-xl mb-[0.5rem]" type="text" name="query" placeholder="Jurrasic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button className="bg-[#333] text-white py-[0.5rem] px-[1rem] border rounded-xl text-[1rem] cursor-pointer hover:bg-[#000000]" type="submit">Search</button>
    </form>
  )
}

export default SearchMovie
