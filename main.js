const video = document.getElementById("video");
const canvas = document.getElementById("photo-preview");
const takePhotoBtn = document.getElementById("take-photo");
const uploadPhotoBtn = document.getElementById("upload-photo");
const downloadPhotoBtn = document.getElementById("download-photo");

let currentPhoto = null;

// 啟用攝像頭
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("無法啟用攝像頭:", err);
  });

// 拍照
takePhotoBtn.addEventListener("click", () => {
  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  currentPhoto = canvas.toDataURL("image/png");
  alert("照片已拍攝！");
});

// 上傳照片
uploadPhotoBtn.addEventListener("click", () => {
  if (!currentPhoto) {
    alert("請先拍照！");
    return;
  }
  localStorage.setItem("uploadedPhoto", currentPhoto);
  window.location.href = "photowall.html";
});

// 下載照片
downloadPhotoBtn.addEventListener("click", () => {
  if (!currentPhoto) {
    alert("請先拍照！");
    return;
  }
  const link = document.createElement("a");
  link.href = currentPhoto;
  link.download = "photo.png";
  link.click();
});
