import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddTouristsSpot = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, } = useForm()
    // console.log(user)

    const onSubmit = (data) => {
  
      data['user_name'] = user.displayName
      data['user_email'] = user.email
      console.log(data)
      
    }
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900 border  ">
            <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 shadow-2xl">
                <div className="  rounded-md shadow-sm  dark:bg-gray-50  bg-[#f4f3f0]   ">
                    <h1 className="text-center text-3xl font-bold pt-6 opacity-80">Add New Tourists Spot</h1>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-10 px-20 ">

                        {/* <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">User Name</label>
                            <input {...register("name")} type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">User Email</label>
                            <input {...register("email")} type="email" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div> */}
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Tourists Spot Name</label>
                            <input {...register("tourists_spot_name")} type="text" placeholder="Tourists Spot Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Photo</label>
                            <input {...register("image")} type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Country Name</label>
                            <select {...register("country_Name")} type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                                <option defaultValue={"Select Country"}>Select Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Average Cost</label>
                            <input {...register("average_cost")} type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Short description</label>
                            <textarea  {...register("short_description")} type='text' placeholder="Short description" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-20 p-4 border " ></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">Location</label>
                            <input {...register("location")} type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Total Visitors Per Year</label>
                            <input {...register("totalVisitorsPerYear")} type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                        </div>
                        <div className="col-span-full sm:col-span-1">
                            <label htmlFor="state" className="text-sm">Travel time</label>
                            <input {...register("travel_time")} type='text' placeholder="Travel time" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                            </input>
                        </div>
                        <div className="col-span-full sm:col-span-1">
                            <label htmlFor="state" className="text-sm">Seasonality</label>
                            <select {...register("seasonality")} type='text' placeholder="Select Season" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" >
                                <option defaultValue={"Select Season"}>Select Season</option>
                                <option value="summer">Summer</option>
                                <option value="winter">Winter</option>
                            </select>
                        </div>

                        <div className="col-span-full">
                            <input type="submit" value="Add Now" className="btn w-full mt-6  bg-primary" />
                        </div>



                    </div>
                </div>

            </form>
        </section>
    );
};

export default AddTouristsSpot;