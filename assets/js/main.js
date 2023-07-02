const $ = document.querySelector.bind(document);

const fileUpload = $("#inputFile");

fileUpload.addEventListener("change", (e) => {
  let imgFile = e.target.files[0];

  if (!imgFile) return;

  const imgPreview = document.createElement("img");

  imgPreview.src = URL.createObjectURL(imgFile);

  $(".label-upload").appendChild(imgPreview);
});
