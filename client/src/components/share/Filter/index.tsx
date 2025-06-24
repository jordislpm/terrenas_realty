import React, { useState } from 'react'
import styles from "./filter.module.scss"
import searchLogo from "../../../assets/icons/search.png"
import { useSearchParams } from 'react-router-dom';

import undo from "../../../assets/icons/undo.png"
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

    const handleChange = (e: any) => {
      const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: name === "city" ? normalizeCity(value) : value,
    });
    };

    const handleFilter = () => {
        setSearchParams({ ...query, city: query.city.toLocaleLowerCase() });
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


    return (
        <div className={styles.filter}>
            <div className={styles.filterHeader}>
                {!searchParams.get("city")
                    ?
                    <h1>Please search a City Location</h1>
                    :
                    <h1>Search results for <b>{searchParams.get("city")}</b></h1>
                }

                <button className={styles.reset} onClick={cleanFilter}
                >
                    <span>Reset</span>
                    <img src={undo} />
                </button>
            </div>
            <div className={styles.top}>
                <div className={styles.item}>
                    <label htmlFor='city'>Location</label>
                    <>
                        <input
                        
                            list="samana-cities"
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Search by city (e.g. Las Terrenas)"
                            onChange={handleChange}
                            // defaultValue={query.city}
                            value={query.city.toLowerCase()}
                        />
                        <datalist id="samana-cities">
                            <option value="Santa Bárbara de Samaná" />
                            <option value="Sánchez" />
                            <option value="Las Terrenas" />
                            <option value="Arroyo Barril" />
                            <option value="El Limón" />
                            <option value="Las Galeras" />
                        </datalist>
                    </>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.item}>
                    <label htmlFor='type'>Type</label>
                    <select
                        name="type"
                        id="type"
                        onChange={handleChange}
                        // defaultValue={query.type}
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
                        // defaultValue={query.property}
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
                        placeholder="any"
                        onChange={handleChange}
                        // defaultValue={query.minPrice}
                        value={query.minPrice}
                    />
                </div>
                <div className={styles.item}>
                    <label htmlFor='maxPrice'>Max Price</label>
                    <input
                        type="text"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                        onChange={handleChange}
                        // defaultValue={query.maxPrice}
                        value={query.maxPrice}
                    />
                </div>
                <div className={styles.item}>
                    <label htmlFor='bedroom'>Bedroom</label>
                    <input
                        type="text"
                        id="bedroom"
                        name="bedroom"
                        placeholder="any"
                        onChange={handleChange}
                        // defaultValue={query.bedroom}
                        value={query.bedroom}
                    />
                </div>
                <button onClick={handleFilter}>
                    <img src={searchLogo} />
                </button>
            </div>
        </div>
    )
}

export default Filter