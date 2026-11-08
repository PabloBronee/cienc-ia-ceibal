// Comportamientos simulados de la maqueta (nada de esto se conecta a un servidor)
(function () {
  var toast = document.getElementById("toast");
  var timer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove("show"); }, 3200);
  }

  // Buscador y botón de ingreso (simulados)
  document.querySelectorAll("[data-fake]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      showToast(el.getAttribute("data-fake"));
    });
  });
  var search = document.querySelector(".search");
  if (search) {
    search.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("Maqueta: el buscador no está conectado.");
    });
  }

  // Modal de invitación
  var modalBg = document.getElementById("invite-modal");
  var openBtn = document.getElementById("invite-open");
  if (modalBg && openBtn) {
    openBtn.addEventListener("click", function () { modalBg.classList.add("open"); });
    modalBg.addEventListener("click", function (e) {
      if (e.target === modalBg || e.target.hasAttribute("data-close")) modalBg.classList.remove("open");
    });
    var send = document.getElementById("invite-send");
    if (send) {
      send.addEventListener("click", function () {
        modalBg.classList.remove("open");
        showToast("Invitación simulada. En la versión real se enviaría el acceso al documento.");
      });
    }
  }

  // Chat: el proceso queda "colgado" tras el Paso 1
  var form = document.getElementById("chat-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("chat-text");
      input.value = "";
      showToast("Aquí el asistente real continuaría el Paso 1, igual que en el asistente usable.");
    });
  }
})();
