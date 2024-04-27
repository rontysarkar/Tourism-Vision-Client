import { useLoaderData } from "react-router-dom";

const AllTouristesSpot = () => {
    const touristsData = useLoaderData()

    return (
        <div>
            <h1>Tourists {touristsData.length}</h1>
        </div>
    );
};

export default AllTouristesSpot;