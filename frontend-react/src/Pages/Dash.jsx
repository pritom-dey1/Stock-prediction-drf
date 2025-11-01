import React, { useEffect } from "react";
import { axiosInstance } from "../Axios/AxiosInstance";

const Dash = () => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/protected-view/", {
 
        });

        console.log(response.data); 
      } catch (error) {
        console.log("Error fetching protected data:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="py-10 px-12 text-white text-center bg-gray-500">
      THIS IS A PROTECTED VIEW
    </div>
  );
};

export default Dash;
