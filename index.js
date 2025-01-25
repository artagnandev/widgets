(function () {
  const widgetId = document.currentScript?.getAttribute("data-widget-id");

  // Criação do botão fixo
  const button = document.createElement("button");
  button.innerText = "Ajuda";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.padding = "10px 15px";
  button.style.backgroundColor = "#007bff";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "8px";
  button.style.cursor = "pointer";
  button.style.zIndex = "1000";

  document.body.appendChild(button);

  // Criação do container do modal
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modal.style.display = "none"; // Inicialmente escondido
  modal.style.zIndex = "1001";

  // Conteúdo interno do modal
  const content = document.createElement("div");
  content.style.position = "absolute";
  content.style.top = "50%";
  content.style.left = "50%";
  content.style.transform = "translate(-50%, -50%)";
  content.style.backgroundColor = "#fff";
  content.style.padding = "20px";
  content.style.borderRadius = "8px";
  content.style.width = "90%";
  content.style.maxWidth = "600px";
  content.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
  modal.appendChild(content);

  document.body.appendChild(modal);

  // Evento para abrir o modal
  button.addEventListener("click", () => {
    modal.style.display = "block";
    fetch(`http://localhost:3000/api/widgets/${widgetId}`)
      .then((res) => res.json())
      .then((data) => {
        // Renderiza o conteúdo
        content.innerHTML = `<h2>${data.title}</h2>${data.content}`;
      });
  });

  // Fechar o modal ao clicar fora do conteúdo
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
})();
