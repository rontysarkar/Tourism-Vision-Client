import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { input } from "@material-tailwind/react";


const MyList = () => {
    const [myData, setMyData] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyData(data)
            })
    }, [user])

    // delete data 

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/myList/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const remainingData = myData.filter(data => data._id != id)
                            setMyData(remainingData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourists Spot has been deleted.",
                                icon: "success"
                            });
                        }

                    })




                

            }
        });










    }


    // update data

    const handleUpdate = id =>{
        console.log('update id', id)
    }

    

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th className="text-base ">Tourists Spot Name</th>
                        <th className="text-base ">Travel time</th>
                        <th className="text-base ">VisitorsPerYear</th>
                        <th className="text-base ">Average Cost</th>
                        <th className="text-base ">UPDATE</th>
                        <th className="text-base ">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        myData.map(spot => <tr key={spot._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={spot.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{spot.tourists_spot_name}</div>
                                        <div className="text-sm opacity-50">{spot.country_Name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {spot.travel_time}
                                <br />

                            </td>
                            <td>{spot.totalVisitorsPerYear}</td>
                            <td>{spot.average_cost}</td>
                            <th>
                                <button onClick={()=>handleUpdate(spot._id)} className="w-24 px-6 hover:bg-transparent hover:text-black bg-primary text-white py-1 rounded-sm border">UPDATE</button>
                            </th>
                            <th>
                                <button onClick={() => handleDelete(spot._id)} className="w-24 px-6 hover:bg-transparent hover:text-black bg-red-500 text-white py-1 rounded-sm border">DELETE</button>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyList;