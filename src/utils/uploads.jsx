import newRequest from "./newRequest";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");
  try {
    const res = await newRequest.post(
      "https://api.cloudinary.com/v1_1/dfb3cxoyi/image/upload",
      data
    );
    console.log(res.data);
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};
export default upload;
