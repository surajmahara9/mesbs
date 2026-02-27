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
          : ((c.innerText = i), (i += 2)),
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
  let std_name_req = document.getElementById("std-name-req");

  let dob = document.querySelector('[name="dob"]');
  let dob_req = document.getElementById("dob-req");

  let gen = document.querySelector('[name="gender"]');
  let gen_req = document.getElementById("gender-req");

  std.oninput = function () {
    std_name_req.innerText = "";
  };
  dob.oninput = function () {
    dob_req.innerText = "";
  };
  gen.onchange = function () {
    gen_req.innerText = "";
  };

  if (std.value === "") {
    std_name_req.innerText = "Student name required!";
    std.focus();
    return;
  }

  if (dob.value === "") {
    dob_req.innerText = "Date of birth required!";
    dob.focus();
    return;
  }

  if (gen.value === "") {
    gen_req.innerText = "Please select gender!";
    gen.focus();
    return;
  }

  document.getElementById("step2").checked = true;
  setActiveStep(2);
}

function checkStep2() {
  let father = document.querySelector('[name="father_name"]');
  let father_req = document.getElementById("father-req");

  let mother = document.querySelector('[name="mother_name"]');
  let mother_req = document.getElementById("mother-req");

  let phone = document.querySelector('[name="phone"]');
  let phone_req = document.getElementById("phone-req");

  let address = document.querySelector('[name="address"]');
  let address_req = document.getElementById("address-req");

  father.oninput = function () {
    father_req.innerText = "";
  };
  mother.oninput = function () {
    mother_req.innerText = "";
  };
  phone.oninput = function () {
    phone_req.innerText = "";
  };
  address.oninput = function () {
    address_req.innerText = "";
  };

  if (father.value.trim() === "") {
    father_req.innerText = "Father name required!";
    father.focus();
    return;
  }

  if (mother.value.trim() === "") {
    mother_req.innerText = "Mother name required!";
    mother.focus();
    return;
  }
phone.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
     
   
  if (phone.value.trim() === "") {
    phone_req.innerText = "Phone number required!";
    phone.focus();
    return;
  }
    if(phone.value.length != 10){
      phone_req.innerText="Number should be 10 digits";
      phone.focus();
      return false;
    } else{
            phone_req.innerText=" ";
    }
  
  if (address.value.trim() === "") {
    address_req.innerText = "Address required!";
    address.focus();
    return;
  }
  document.getElementById("step3").checked = true;
  setActiveStep(3);
}

function checkStep3() {
  let apply_class = document.querySelector('[name="apply_class"]');
  let apply_class_req = document.getElementById("applyclass-req");

  apply_class.onchange = function () {
    apply_class_req.innerText = "";
  };

  if (apply_class.value === "") {
    apply_class_req.innerText = "Please select a class!";
    apply_class.focus();
    return;
  }
  document.getElementById("step4").checked = true;
  setActiveStep(4);
}

function checkStep4() {
  let std_pic = document.querySelector('[name="student_photo"]');
  let std_pic_req = document.getElementById("std-pic-req");
  let birth_cert = document.querySelector('[name="birth_certificate"]');
  let birth_cert_req = document.getElementById("birth-cert-req");
  let transport = document.querySelector('[name="transport"]');
  let transport_req = document.getElementById("transport-req");

  std_pic.onchange = function () {
    std_pic_req.innerText = "";
  };
  birth_cert.onchange = function () {
    birth_cert_req.innerText = "";
  };
  transport.onchange = function () {
    transport_req.innerText = "";
  };

  if (!std_pic.files || std_pic.files.length === 0) {
    std_pic_req.innerText = "Please upload student photo!";
    std_pic.focus();
    return;
  }

  if (!birth_cert.files || birth_cert.files.length === 0) {
    birth_cert_req.innerText = "Please upload birth certificate!";
    birth_cert.focus();
    return;
  }

  if (transport.value === "") {
    transport_req.innerText = "Please select transportation option!";
    transport.focus();
    return;
  }

  document.getElementById("submission_date").value =
    new Date().toLocaleDateString();
  document.getElementById("success-popup").style.display = "flex";
  setActiveStep(1);
}

function closePopup() {
  document.getElementById("success-popup").style.display = "none";
  document.getElementById("admission-form").reset();
  document.getElementById("step1").checked = true;
}

function setActiveStep(stepNumber) {
  let steps = document.querySelectorAll(".step-num");
  steps.forEach(function (step) {
    step.classList.remove("active");
  });
  steps[stepNumber - 1].classList.add("active");
}
 document.getElementById("year").innerText = new Date().getFullYear();