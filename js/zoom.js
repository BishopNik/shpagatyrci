var images = document.querySelectorAll(".teka__photo_img");

images.forEach(function(image) {
  image.addEventListener("click", function() {
    // Проверяем, содержит ли элемент класс "zoomed"
    var isZoomed = image.classList.contains("zoomed");

    // Снимаем класс "zoomed" со всех элементов
    images.forEach(function(img) {
      img.classList.remove("zoomed");
    });

    // Если элемент не был zoomed, то добавляем класс "zoomed" к текущему элементу
    if (!isZoomed) {
      image.classList.add("zoomed");
    }
  });
});