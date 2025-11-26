export const toast = (message, type) => {
  const show = () => {
    let container = document.getElementById("toast-container");

    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const div = document.createElement("div");
    div.classList.add("toast");

    switch (type) {
      case "success":
        div.classList.add("toast-success");
        break;
      case "error":
        div.classList.add("toast-error");
        break;
      case "warning":
        div.classList.add("toast-warning");
        break;
      default:
        div.classList.add("toast-success");
        break;
    }

    div.textContent = message;
    container.appendChild(div);

    setTimeout(() => div.remove(), 3500);
  };

  // SE O DOM AINDA NÃO EXISTE → espera carregar
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", show);
  } else {
    show();
  }
};
