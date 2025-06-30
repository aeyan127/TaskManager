import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";
const uploadImage = async (imageFile) => {
    const formdata = new FormData();
    //Append image file to the form data
    formdata.append("image", imageFile);
    try {
        //Make API call to upload image
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading the image :", error);
        throw  Error;
    } 
};
export default uploadImage;