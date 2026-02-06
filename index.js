let i = 0,
  f = 0;
let j = 0,
  g = 0;
let k = 0,
  h = 0;

onscroll = () => {
  let c = std_counter;
  if (!f && c.getBoundingClientRect().top < innerHeight) {
    f = 1;
    let t = setInterval(
      () =>
        i > 1000
          ? ((c.innerText = 1000), clearInterval(t))
          : ((c.innerText = i), (i +=2)),
      1,
    );
  }

  let d = year_counter;
  if (!g && d.getBoundingClientRect().top < innerHeight) {
    g = 1;
    let u = setInterval(
      () =>
        j > 40
          ? ((d.innerText = 40), clearInterval(u))
          : ((d.innerText = j), j++),
      40,
    );
  }

  let e = ser_counter;
  if (!h && e.getBoundingClientRect().top < innerHeight) {
    h = 1;
    let v = setInterval(
      () =>
        k > 100
          ? ((e.innerText = 100), clearInterval(v))
          : ((e.innerText = k), k++),
      20,
    );
  }
};

function checkStep1() {
    let std = document.querySelector('[name="student_name"]');
    let std_name_error = document.getElementById("std-name-error");

    let dob = document.querySelector('[name="dob"]');
    let gen = document.querySelector('[name="gender"]');

    // Student name validation
    std.oninput= function(){ 
  std_name_error.innerText = "";
}
    if (std.value === "") {
        std_name_error.innerText = "Student name required!";
        std.focus();
        return;       
    } else {
        std_name_error.innerText = "";
    }


    document.getElementById("step2").checked = true;
}

// Optional: student name error auto clear on blur
std = document.querySelector('[name="student_name"]');
std.onblur = function() {
    let std_name_error = document.getElementById("std-name-error");
    if (std.value !== "") {
        std_name_error.innerText = "";
    }
};
