function clearUp(stars, val) {
  for (let i = val; i < 5; i++) {
    stars[i].classList.remove("filled");
  }
}
function clearDown(stars, val) {
  for (let i = val; i > -1; i--) {
    stars[i].classList.remove("filled");
  }
}
function fill(stars, val) {
  for (let i = 0; i < val + 1; i++) {
    stars[i].classList.add("filled");
  }
}

$(document).ready(function () {
  let stars = $(".fa-star");
  let rating = 0;
  stars.on({
    mouseover: function () {
      fill(stars, $(this).index());
    },
    mouseleave: function () {
      clearDown(stars, $(this).index());
      fill(stars, rating - 1);
    },
    click: function () {
      rating = $(this).index() + 1;
      clearUp(stars, rating);
    },
  });
});