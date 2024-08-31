import React, { useState } from 'react';
import { useRouter } from 'next/router';
import restaurants from './data';
import style from './restaurant.module.css';

export default function Restaurant() {
  const router = useRouter();

  const [selectedCity, setSelectedCity] = useState(''); // État local pour gérer la ville sélectionnée

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value); // Met à jour la ville sélectionnée lorsque l'utilisateur change le <select>
  };

  const handleDiscoverClick = (name) => {
    router.push(`/restaurant/${name}`);
  };


  const sortedRestaurants = restaurants.reduce((acc, restaurant) => {
    const city = restaurant.location.split(',')[0].trim();
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(restaurant);
    return acc;
  }, {});


  return (
    <>
    <div className={style.intro}>
            <p>
            Que vous planifiez une sortie entre amis, un dîner en amoureux ou une célébration spéciale, notre site est là pour vous aider à trouver l'endroit parfait pour chaque occasion.<br/>
            </p>

          <div className={style.selection}>
            <select id='select' onChange={handleCityChange} value={selectedCity}>
              <option value=''>Choisissez une ville</option>
              <option value='Paris'>Paris</option>
              <option value='Lille'>Lille</option>
              <option value='Rennes'>Rennes</option>
              <option value='Dijon'>Dijon</option>
              <option value='Tours'>Tours</option>
              <option value='Montpellier'>Montpellier</option>
              <option value='Aix-en-Provence'>Aix-en-Provence</option>
              <option value='Saint-Étienne'>Saint-Étienne</option>
            </select>
          </div>
    </div>

        {Object.keys(sortedRestaurants).map((city) => (
          <div key={city} className={style.ville} style={{ display: selectedCity === city ? '' : 'none' }}>
            <div className={style.grid}>
              {sortedRestaurants[city].map((restaurant) => (
                <div key={restaurant.id} className={style.card}>
                  <h2>{restaurant.name}</h2>
                  <p>Ville : {restaurant.location}</p>
                  <button className={style.boutton} onClick={() => handleDiscoverClick(restaurant.name)}>Découvrir</button>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
}
