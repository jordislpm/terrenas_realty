import React, { useState } from 'react'
import styles from "./SearchBar.module.scss"
import searchLogo from "../../../assets/icons/search.png"
import { QueryStateType } from 'types/types';


function SearchBar() {

  const [query, setQuery] = useState<QueryStateType>({
    type: "buy",
    location: null,
    minPrice: 0,
    maxPrice: 0,
  });

  const types: QueryStateType["type"][] = ["buy", "rent"];

  const switchType = (value: QueryStateType["type"]) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.type}>
        {types.map((type)=>(
          <button 
          key={type} 
          onClick={() => switchType(type)}
          className={`${query.type === type ? styles.active : ""}`}
          >
            {type}
          </button>
        ))}
      </div>
      <form className={styles.form}>
        <input type='text' name='location' placeholder='City Location' />
        <input type='number' name='minPrice' min={0} max={10000000} placeholder='Min Price' />
        <input type='number' name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
        <button>
          <img src={searchLogo} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar