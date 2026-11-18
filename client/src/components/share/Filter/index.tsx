import React, { useState } from 'react';
import styles from "./filter.module.scss";
import searchLogo from "../../../assets/icons/search.png";
import { useSearchParams } from 'react-router-dom';
import undo from "../../../assets/icons/undo.png";
import { normalizeCity } from '../../../lib/format';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: name === "city" ? normalizeCity(value) : value,
    });
  };

  const handleFilter = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const params: Record<string, string> = {};
    if (query.type) params.type = query.type;
    if (query.city && query.city.trim()) params.city = query.city.toLowerCase().trim();
    if (query.property) params.property = query.property;
    if (query.minPrice && Number(query.minPrice) > 0) params.minPrice = query.minPrice;
    if (query.maxPrice && Number(query.maxPrice) > 0) params.maxPrice = query.maxPrice;
    if (query.bedroom && Number(query.bedroom) > 0) params.bedroom = query.bedroom;
    setSearchParams(params);
  };

  const cleanFilter = () => {
    const emptyFilters = {
      type: "",
      city: "",
      property: "",
      minPrice: "",
      maxPrice: "",
      bedroom: "",
    };

    setQuery(emptyFilters);
    setSearchParams({});
  };

  const currentCity = searchParams.get("city");
  const hasActiveFilters = Array.from(searchParams.keys()).length > 0;

  return (
    <div className={styles.filter}>
      <div className={styles.filterHeader}>
        {!currentCity ? (
          <h1>All Available Properties</h1>
        ) : (
          <h1>Search results for <b>{currentCity}</b></h1>
        )}

        {hasActiveFilters && (
          <button className={styles.reset} onClick={cleanFilter} type="button" title="Reset all filters">
            <span>Reset filters</span>
            <img src={undo} alt="undo" />
          </button>
        )}
      </div>

      <form onSubmit={handleFilter} className={styles.formContainer}>
        <div className={styles.top}>
          <div className={styles.item}>
            <label htmlFor='city'>Location</label>
            <input
              list="samana-cities"
              type="text"
              id="city"
              name="city"
              placeholder="Search by city (e.g. Las Terrenas)"
              onChange={handleChange}
              value={query.city}
            />
            <datalist id="samana-cities">
              <option value="Santa Bárbara de Samaná" />
              <option value="Sánchez" />
              <option value="Las Terrenas" />
              <option value="Arroyo Barril" />
              <option value="El Limón" />
              <option value="Las Galeras" />
            </datalist>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.item}>
            <label htmlFor='type'>Type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              value={query.type}
            >
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className={styles.item}>
            <label htmlFor='property'>Property</label>
            <select
              name="property"
              id="property"
              onChange={handleChange}
              value={query.property}
            >
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className={styles.item}>
            <label htmlFor='minPrice'>Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Any"
              onChange={handleChange}
              value={query.minPrice}
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='maxPrice'>Max Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Any"
              onChange={handleChange}
              value={query.maxPrice}
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='bedroom'>Bedroom</label>
            <input
              type="number"
              id="bedroom"
              name="bedroom"
              placeholder="Any"
              onChange={handleChange}
              value={query.bedroom}
            />
          </div>
          <button type="submit" className={styles.submitBtn} aria-label="Apply filters">
            <img src={searchLogo} alt="search" />
            <span className={styles.submitBtnText}>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
