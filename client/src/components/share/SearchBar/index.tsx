import React, { useState } from 'react'
import styles from "./SearchBar.module.scss"
import searchLogo from "../../../assets/icons/search.png"
import { QueryStateType } from 'types/types';
import { Link } from 'react-router-dom';


function SearchBar() {

  const [query, setQuery] = useState<QueryStateType>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const types: QueryStateType["type"][] = ["buy", "rent"];

  const switchType = (value: QueryStateType["type"]) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.type}>
        {types.map((type) => (
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
        <input
          type='text'
          name='location'
          placeholder='City Location'
          onChange={handleChange}
        />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
          onChange={handleChange} />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
          onChange={handleChange} />
        <Link to={`/list?type=${query.type}&city=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
          <button >
            <img src={searchLogo} alt="search-logo" />
          </button>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar