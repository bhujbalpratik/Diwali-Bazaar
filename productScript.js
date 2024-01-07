const display = (div, n1, n2, n3, btn, b1, b2, b3) => {
  div.style.display = "block";
  n1.style.display = "none";
  n2.style.display = "none";
  n3.style.display = "none";
  btn.style.backgroundColor = "#FEBD69";
  b1.style.backgroundColor = "white";
  b2.style.backgroundColor = "white";
  b3.style.backgroundColor = "white";
};

const display2 = (div, n1, n2, n3, n4, n5, btn, b1, b2, b3, b4, b5) => {
  div.style.display = "block";
  n1.style.display = "none";
  n2.style.display = "none";
  n3.style.display = "none";
  n4.style.display = "none";
  n5.style.display = "none";
  btn.style.backgroundColor = "#FEBD69";
  b1.style.backgroundColor = "white";
  b2.style.backgroundColor = "white";
  b3.style.backgroundColor = "white";
  b4.style.backgroundColor = "white";
  b5.style.backgroundColor = "white";
};

const AddtoCart = (elmt) => {
  if (elmt.innerHTML == "Add To Cart") {
    elmt.classList.toggle("btn-danger");
    elmt.innerHTML = "Remove From Cart";
    const MdProducts = document.querySelector("#md-cart");
    const SmProducts = document.querySelector("#sm-cart");
    MdProducts.classList.remove("d-none");
    MdProducts.innerHTML = Number.parseInt(MdProducts.innerHTML) + 1;
    SmProducts.classList.remove("d-none");
    SmProducts.innerHTML = Number.parseInt(SmProducts.innerHTML) + 1;
  } else {
    elmt.classList.toggle("btn-danger");
    elmt.innerHTML = "Add To Cart";
    const MdProducts = document.querySelector("#md-cart");
    const SmProducts = document.querySelector("#sm-cart");
    if (MdProducts.innerHTML && SmProducts.innerHTML == 1) {
      MdProducts.classList.add("d-none");
      MdProducts.innerHTML = 0;
      SmProducts.classList.add("d-none");
      SmProducts.innerHTML = 0;
    } else {
      MdProducts.innerHTML = Number.parseInt(MdProducts.innerHTML) - 1;
      SmProducts.innerHTML = Number.parseInt(SmProducts.innerHTML) - 1;
    }
  }
};

const addToWishlist = (btn) => {
  const bttn = document.querySelectorAll(".wishlist-icon");
  for (let i = 0; i < bttn.length; i++) {
    const wishList = document.querySelector("#wishlist");

    if (btn == bttn[i]) {
      if (bttn[i].style.color == "red") {
        bttn[i].style.color = "whitesmoke";
        wishList.innerHTML = Number.parseInt(wishList.innerHTML) - 1;
      } else {
        bttn[i].style.color = "red";
        wishList.innerHTML = Number.parseInt(wishList.innerHTML) + 1;
      }
    }
    if (wishList.innerHTML == 0) {
      wishList.classList.add("d-none");
    } else {
      wishList.classList.remove("d-none");
    }
  }
};
