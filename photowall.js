const photoWall = document.getElementById("photo-wall");
const uploadedPhoto = localStorage.getItem("uploadedPhoto");

if (uploadedPhoto) {
  const img = document.createElement("img");
  img.src = uploadedPhoto;
  photoWall.appendChild(img);
  localStorage.removeItem("uploadedPhoto");
} else {
  alert("沒有照片被上傳！");
}
