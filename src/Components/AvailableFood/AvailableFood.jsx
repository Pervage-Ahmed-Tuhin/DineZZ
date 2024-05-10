
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { useLoaderData } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";



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




const AvailableFood = () => {
    const [sortedFoods, setSortedFoods] = useState([]);
    const loadedData = useLoaderData();
    console.log(loadedData);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "DinerZZ|Available Food";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])
  
    const sortByElement = (items) => {
        const sorted = [...loadedData].sort((a, b) => {
            const dateA = new Date(a[items]);
            const dateB = new Date(b[items]);
            return dateA - dateB;
        });
        setSortedFoods(sorted);
    };
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


                        <div className="text-center">
                            <details className="dropdown">
                                <summary className="m-1 btn bg-[#00BFA6] text-white">Sort Your Spots</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li onClick={() => sortByElement('expiredDateTime')}><a>Expired Date</a></li>

                                </ul>
                            </details>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {


                                sortedFoods.length > 0 ? sortedFoods.map((data) => (
                                    <FeaturedFoods key={data._id} data={data}></FeaturedFoods>
                                )) : loadedData.map((data) => (
                                    <FeaturedFoods key={data._id} data={data}></FeaturedFoods>
                                ))

                            }


                        </div>


                    </div>

                </motion.div>

            }
        </div>
    );
};

export default AvailableFood;