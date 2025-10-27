// ALERTAS SIMPLES
const favIcon = document.getElementById("fav-icon");
const userIcon = document.getElementById("user-icon");
const cartIcon = document.getElementById("cart-icon");
const cartPanel = document.getElementById("cart-panel");

if (favIcon) {
  favIcon.addEventListener("click", function(e){
    e.preventDefault();
    alert("💖 Aquí podrás ver tus flores favoritas.");
  });
}

if (userIcon) {
  userIcon.addEventListener("click", function(e){
    e.preventDefault();
    alert("👤 Aquí podrás iniciar sesión o crear tu cuenta.");
  });
}

// overlay dinámico
const overlay = document.createElement("div");
overlay.className = "cart-overlay";
document.body.appendChild(overlay);

if (cartIcon && cartPanel) {
  cartIcon.addEventListener("click", function(e){
    e.preventDefault();
    cartPanel.classList.add("active");
    overlay.classList.add("active");
    cartPanel.setAttribute("aria-hidden", "false");
  });

  const closeBtn = document.getElementById("close-cart");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      cartPanel.classList.remove("active");
      overlay.classList.remove("active");
      cartPanel.setAttribute("aria-hidden", "true");
    });
  }

  overlay.addEventListener("click", () => {
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
    cartPanel.setAttribute("aria-hidden", "true");
  });
}