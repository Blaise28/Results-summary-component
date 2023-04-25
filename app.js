const list = document.querySelector(".summary .list");

const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg",
    "color":"danger",
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg",
    "color": "warning",
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg",
    "color": "success",
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg",
    "color": "primary"
  }
]

function generateHTML(){
  let html = "";
  for (const item of data) {

    html+=`
    <div
    class="mt-3 alert alert-${item.color} py-2 px-3 border-0 fs-6 d-flex justify-content-between align-items-center item"
    >
      <div class="name">
        <span class="icon me-1">
          <img src="${item.icon}" alt="" />
        </span>
        <span class="name text-${item.color}">${item.category}</span>
      </div>
      <span class="point"><strong>${item.score}/</strong>100</span>
    </div>
    `;
  }
  list.innerHTML = html;
}

generateHTML()

