const careerData = {
  supplyChain: {
    title: "Supply Chain",
    description:
      "Experienced in procurement, vendor communication, inventory planning, and cross-functional operations.",
    items: [
      "Vendor sourcing and onboarding",
      "Inventory and replenishment planning",
      "Operational issue follow-up",
    ],
  },
  analytics: {
    title: "Data Analytics",
    description:
      "Skilled in using data to identify business patterns, support decision-making, and improve reporting workflows.",
    items: [
      "Excel and Power Query reporting",
      "SQL-based data analysis",
      "Cost, margin, and inventory performance analysis",
    ],
  },
  computerScience: {
    title: "Computer Science",
    description:
      "Building technical skills through graduate-level computer science coursework and hands-on projects.",
    items: [
      "Python programming and databases",
      "Cloud computing projects with AWS",
      "Front-end development with HTML, CSS, and JavaScript",
    ],
  },
};

export function initializeCareerMap() {
  const buttons = document.querySelectorAll(".career-button");
  const title = document.querySelector("#career-title");
  const description = document.querySelector("#career-description");
  const list = document.querySelector("#career-list");

  if (!buttons.length || !title || !description || !list) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const careerKey = button.dataset.career;
      const selectedCareer = careerData[careerKey];

      if (!selectedCareer) {
        return;
      }

      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      title.textContent = selectedCareer.title;
      description.textContent = selectedCareer.description;

      list.innerHTML = "";

      selectedCareer.items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
      });
    });
  });
}
