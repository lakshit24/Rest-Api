import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/MyApi"
import { toast } from 'react-toastify';



function AllCourse() {




    //    useEffect(()=>{
    //     const fetchData = async () =>{
    //         try{
    //             const response  = await axios.get("http://localhost:8080/courses");
    //             console.log(response.data);
    //         }
    //         catch(error){
    //             console.log("error yaar",error);
    //         }
    //     };
    //     fetchData();
    //    },[])

    const getServiceFromApi = () => {
        axios.get(`${base_url}/courses`).then((response) => { console.log(response);
            setCourses(response.data);
            toast.success("courses fetched");
         }, (error) => { console.log(error);
            toast.error("Something went wrong")
          })
    }

    useEffect(() => {
        getServiceFromApi()
    }, [])

    const [courses, setCourses] = useState([])
    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id))
    }
    return (
        <>
            <p>
                List of courses are :
            </p>
            {
                courses.length > 0 ? courses.map((item) =>
                    <Course key={item.id} course={item} update = {updateCourse}  />
                ) : "no courses"
            }
        </>
    )
}
export default AllCourse;