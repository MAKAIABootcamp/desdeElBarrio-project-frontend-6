import axios from 'axios'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dpc1vrbek/auto/upload'

export const saveImage = async file => {
  const body = {
    file,
    api_key: 388732714489898,
    upload_preset: 't4dskobq'
  }
  const headers = {
    "Content-Type": "multipart/form-data",
  }
  const response = await axios.post(CLOUDINARY_URL, body, { headers })
  return response.data.url
}