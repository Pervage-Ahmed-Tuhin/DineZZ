
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Loader from "../Loader/Loader";



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



const MyfoodRequest = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "DinerZZ|My Food Request";
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


                    <div className="max-w-6xl mx-auto">


                        <h1>This is the my food request food page</h1>


                    </div>

                </motion.div>

            }
        </div>
    );
};

export default MyfoodRequest;