document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");
  const gallery = document.getElementById("gallery");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("closeBtn");

  const categories = ["All", "Car", "Anniversary","Wedding","Birthday"];

  const images = [
    { src: "images/car1.jpg",category: "Car" },
    { src: "images/car2.webp", category: "Car" },
    { src: "images/car3.webp", category: "Car" },
    { src: "images/anniversary1.webp", category: "Anniversary" },
    { src: "images/anniversary2.webp", category: "Anniversary" },
    { src: "images/anniversary3.webp", category: "Anniversary" },
    {src:"images/birthday1.webp",category:"Birthday"},
    {src:"images/birthday2.jpg",category:"Birthday"},
    {src:"images/birthday3.jpg",category:"Birthday"},
    {src:"images/w1.webp",category:"Wedding"},
    {src:"images/w2.jpg",category:"Wedding"},
    {src:"images/w3.jpg",category:"Wedding"},
    {src:"images/w4.jpg",category:"Wedding"},
    {src:"images/w5.jpg",category:"Wedding"},
  ];

  let filteredImages = [...images];

  // category menu
  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.textContent = cat;

    li.addEventListener("click", () => {
      filterImages(cat);
    });

    list.appendChild(li);
  });

  // filter
  function filterImages(category) {
    if (category === "All") {
      filteredImages = [...images];
    } else {
      filteredImages = images.filter(
        (img) => img.category === category
      );
    }
    showImages();
  }

  // show all images
  function showImages() {
    gallery.innerHTML = "";
    filteredImages.forEach((imgData, index) => {
  const img = document.createElement("img");
  img.src = imgData.src;
  img.addEventListener("click", () => {
    currentIndex = index; // 🔥 important
    lightbox.style.display = "flex";
    lightboxImg.src = imgData.src;
  });
  gallery.appendChild(img);
});
}
  nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % filteredImages.length;
  lightboxImg.src = filteredImages[currentIndex].src;
});
prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + filteredImages.length) %
    filteredImages.length;

  lightboxImg.src = filteredImages[currentIndex].src;
});

  //close popup
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // click outsideclose
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  showImages();
});
