import React, { useState } from 'react';
import styles from "./SearchBar.module.scss";
import searchLogo from "../../../assets/icons/search.png";
import { QueryStateType } from 'types/types';
import { useNavigate } from 'react-router-dom';
import { normalizeCity } from '../../../lib/format';

function SearchBar() {
  const navigate = useNavigate();

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
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: name === "location" ? normalizeCity(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.type) params.set("type", query.type);
    if (query.location && query.location.trim()) {
      params.set("city", query.location.toLowerCase().trim());
    }
    if (query.minPrice && Number(query.minPrice) > 0) {
      params.set("minPrice", query.minPrice.toString());
    }
    if (query.maxPrice && Number(query.maxPrice) > 0) {
      params.set("maxPrice", query.maxPrice.toString());
    }
    navigate(`/list?${params.toString()}`);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.type}>
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => switchType(type)}
            className={`${query.type === type ? styles.active : ""}`}
          >
            {type}
          </button>
        ))}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          list="samana-cities"
          type="text"
          name="location"
          placeholder="Search by city (e.g. Las Terrenas)"
          onChange={handleChange}
        />
        <datalist id="samana-cities">
          <option value="Santa Bárbara de Samaná" />
          <option value="Sánchez" />
          <option value="Las Terrenas" />
          <option value="Arroyo Barril" />
          <option value="El Limón" />
          <option value="Las Galeras" />
        </datalist>
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
          onChange={handleChange}
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
          onChange={handleChange}
        />
        <button type="submit" className={styles.searchBtn} aria-label="Search">
          <img src={searchLogo} alt="search-logo" />
          <span className={styles.mobileSearchText}>Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
