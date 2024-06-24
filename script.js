function menuShow(){
    let ul = document.querySelector('.navbar ul');

    if(ul.classList.contains("open")) {
        ul.classList.remove("open");
    }
    else {
        ul.classList.add("open");
    }
}


/*acordeoa*/
var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
/*fim acordeao*/


/*lightbox */
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex;

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImage.src = image.src;
            currentIndex = index;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        lightboxImage.src = galleryImages[currentIndex].src;
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        lightboxImage.src = galleryImages[currentIndex].src;
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage && e.target !== prev && e.target !== next) {
            lightbox.style.display = 'none';
        }
    });
});

/*fim lightbox */