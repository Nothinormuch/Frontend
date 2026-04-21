function checkCapital(str) {
  return !(str == str.toLowerCase());
}
function checkNumber(str) {
  for (i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    if (str.includes(i)) {
      return true;
    }
  }
  return false;
}
function checkSpecial(str) {
  for (i of str) {
    if (i.charCodeAt(0) < 57 || i.charCodeAt(0) > 122) {
      return true;
    }
  }
  return false;
}
function checkLength(str) {
  return str.length > 7;
}

function clearLevels() {
  for (let i = 0; i < 6; i++) {
    $(".wrapper")[0].classList.remove("level" + i);
  }
  $("p").html("")
}

let level = 1;
let replies = ["Very Weak: This is basically no password.","Weak: You can do better than this.","Moderate: Not terrible, not impressive.","Strong: Finally, some effort.","Very Strong: Surprisingly competent."]


$(document).ready(function () {
  $("input").keyup(function (event) {
    console.log($(this).val())
    if ($(this).val() == "") {
      clearLevels();
      return;
    }
    level = 1;
    if (checkCapital($(this).val())) {
      level++;
    }
    if (checkNumber($(this).val())) {
      level++;
    }
    if (checkSpecial($(this).val())) {
      level++;
    }
    if (checkLength($(this).val())) {
      level++;
    }
    clearLevels();
    $(".wrapper")[0].classList.add("level" + level);
    $("p").html(replies[level-1])
  });
});
