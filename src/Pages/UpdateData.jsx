import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const UpdateData = () => {
    const { register, handleSubmit, reset } = useForm()
    const params = useParams()
    const updateData = useLoaderData()
    const Navigate = useNavigate()
    // console.log(updateData)



    const onSubmit = (data) => {
        console.log(data)
        fetch(`http://localhost:5000/tourists/${params.id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: "Successfully Update Your Tourists Spot ",
                    
                    icon: "success"
                  });
                  Navigate('/myList')
            }
            reset()
        })

        
        
    }
    return (
        <section className="p-6  border py-10  ">
            <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 shadow-2xl ">
                <div className="  rounded-md shadow-sm   py-20  ">
                    <h1 className="text-center text-3xl font-bold  opacity-80">Update Your Tourists Spot</h1>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-10 px-20 ">


                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Tourists Spot Name</label>
                            <input defaultValue={updateData.tourists_spot_name} {...register("tourists_spot_name")} type="text" placeholder="Tourists Spot Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Photo</label>
                            <input defaultValue={updateData.image} {...register("image")} type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Country Name</label>
                            <select {...register("country_Name")} type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                                <option defaultValue={updateData.country_Name}>Select Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Average Cost</label>
                            <input defaultValue={updateData.average_cost} {...register("average_cost")} type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Short description</label>
                            <textarea defaultValue={updateData.short_description}  {...register("short_description")} type='text' placeholder="Short description" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-20 p-4 border " ></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">Location</label>
                            <input defaultValue={updateData.location} {...register("location")} type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Total Visitors Per Year</label>
                            <input defaultValue={updateData.totalVisitorsPerYear} {...register("totalVisitorsPerYear")} type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-1">
                            <label htmlFor="state" className="text-sm">Travel time</label>
                            <input defaultValue={updateData.travel_time} {...register("travel_time")} type='text' placeholder="Travel time" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                            </input>
                        </div>
                        <div className="col-span-full sm:col-span-1">
                            <label htmlFor="state" className="text-sm">Seasonality</label>
                            <select {...register("seasonality")} type='text' placeholder="Select Season" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                                <option defaultValue={updateData.seasonality}>Select Season</option>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>

                        <div className="col-span-full">
                            <input type="submit" value="Update Now" className="btn w-full mt-6 text-white  bg-primary" />
                        </div>



                    </div>
                </div>

            </form>
        </section>
    );
};

export default UpdateData;