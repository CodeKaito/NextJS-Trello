import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "64edaff11f4cb163846f",
        ID.unique(),
        file
    )

    console.log(fileUploaded)

    return fileUploaded
}

export default uploadImage;