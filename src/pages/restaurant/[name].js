// pages/restaurant/[name].js
import { useRouter } from 'next/router';
import styles from './restaurantDetails.module.css';
import Link from 'next/link';
import restaurants from '../../../components/restaurant/data'; // chemin vers votre fichier data.js

const RestaurantDetails = () => {
  const router = useRouter();
  const { name } = router.query;

  // Recherche du restaurant par son nom dans le tableau restaurants
  const restaurant = restaurants.find(r => r.name === name);

  if (!restaurant) {
    return <p>Restaurant not found</p>; // Gérer le cas où le restaurant n'est pas trouvé
  }

  const { hours } = restaurant;

  if (!hours) {
    return <p>Restaurant hours not available</p>; // Gérer le cas où les horaires ne sont pas disponibles
  }


  return (
    <>
      <video autoPlay loop muted className={styles.video}>
        <source src="/img/cafe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.container}>
        <h1>{restaurant.name}</h1><br/>
        <h2>Addresse : {restaurant.address}</h2><br/>

        <div className={styles.horaire}>
          <h2>Horaires d'ouvertures</h2>
            <ul className={styles.heures}>
              <li>Lundi : {hours.mon}</li>
              <li>Mardi : {hours.tue}</li>
              <li>Mercredi : {hours.wed}</li>
              <li>Jeudi : {hours.thu}</li>
              <li>Vendredi : {hours.fri}</li>
              <li>Samedi : {hours.sat}</li>
              <li>Dimanche : {hours.sun}</li>
            </ul>
        </div>
      </div>


      <div className={styles.menu}>
          <button><Link href="/"><button>HOME</button></Link></button>
      </div>
    </>
  );
};

export default RestaurantDetails;
