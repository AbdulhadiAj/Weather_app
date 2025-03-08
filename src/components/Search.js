const Search = ({onChange, onSubmit}) => {
  return (
    <div className="searchInput">
      <form onSubmit={onSubmit}>
        <label>
          Search a city 
          <input type="search" name="city" placeholder="ex: paris" onChange={onChange}/> 
          <input type="submit" value="Search" className="btn search-btn" />
        </label>
      </form>
    </div>
  )
}


export default Search
