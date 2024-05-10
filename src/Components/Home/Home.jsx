import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Loader from "../Loader/Loader";




import { Typewriter } from "react-simple-typewriter";
import Banner from "../Banner/Banner";

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
};



const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.9
};



const Home = () => {



    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "DinerZZ|Home";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])

    return (
        <div>
            {loading && <Loader></Loader>}
            {!loading &&

                <motion.div

                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}


                >

                    <Banner></Banner>
                    <div className="max-w-6xl mx-auto">

                        <h1 className="text-3xl font-play-fare font-bold text-center mt-9">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                words={['Tourist Spots🗺']}
                            />

                        </h1>
                        <div className="divider"></div>
                        <p className="text-xl font-play-fare text-gray-400 text-center mt-4 mb-5">A tourist spot is a location or destination that <br /> attracts visitors from around the world due to its unique features, <br /> cultural significance, natural beauty, historical importance, or recreational opportunities. </p>




                    </div>

                </motion.div>

            }
        </div>
    );
};

export default Home;