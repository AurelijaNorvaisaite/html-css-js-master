function showSection(id, idsToHide) {
  var currSection = document.getElementById(id);

  if (currSection.style.display === 'block') {
    currSection.style.display = 'none';
  } else {
    currSection.style.display = 'block';
  }

  idsToHide.forEach(function(idToHide) {
    var sectionToHide = document.getElementById(idToHide);
    sectionToHide.style.display = 'none';
  });
}

function resizeImage(image) {
  if (image.style.width === '300px') {
    image.style.width = '150px';
  } else {
    image.style.width = '300px';
  }
}

var imageContainer = null;
function createImageInOverlay(image) {
  var overlay = document.getElementById('overlay');
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none';
    image.style.padding = '0 0 0 0';
    image.style.width = '150px';
    imageContainer.appendChild(image);
  } else {
    imageContainer = image.parentElement;
    overlay.style.display = 'block';
    image.style.width = '300px';
    image.style.padding = '0 0 0 0';
    overlay.appendChild(image);
  }
}

