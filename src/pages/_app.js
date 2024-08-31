import "@/styles/globals.css";

// _app.js
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css'; // votre fichier de styles global

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <motion.div
      key={router.route} // Assure une animation lors du changement de route
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        },
        pageExit: {
          opacity: 0,
          transition: {
            duration: 1.5,
          },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default App;
