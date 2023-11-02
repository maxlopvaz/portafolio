<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
  const carousel = $("#soluciones-carousel");
  const carouselInner = $(".carousel-inner");
  const cardWidth = $(".carousel-box").outerWidth(true);

  let currentPosition = 0;
  const itemsPerSlide = 3;

  function updateCarouselPosition() {
    carouselInner.css("transform", `translateX(-${currentPosition}px)`);
  }

  function moveNext() {
    currentPosition += cardWidth * itemsPerSlide;
    if (currentPosition > (carouselInner.children().length - itemsPerSlide) * cardWidth) {
      currentPosition = 0;
    }
    updateCarouselPosition();
  }

  setInterval(moveNext, 5000); // Cambiar cada 5 segundos (ajusta según necesites)
});
</script>
