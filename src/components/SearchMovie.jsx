const SearchMovie = () => {
  return (
    <form className="grid p-4" action="">
      <label className="text-[1.2rem] mb-[0.2rem]" htmlFor="">Movie Name</label>
      <input className="text-[1.6rem] py-[0.5rem] px-[1rem] border rounded-xl mb-[1rem]" type="text" name="query" placeholder="Jurrasic Park"/>
      <button className="bg-[#333] text-white py-[1rem] px-[2rem] border rounded-xl text-[1.4rem]cursor-pointer" type="submit">Search</button>
    </form>
  )
}

export default SearchMovie
