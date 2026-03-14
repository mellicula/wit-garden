function randomBetween(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

function makeCard(member) {
  const card = document.createElement("div");
  card.className = "member-card";

  const rotation = randomBetween(-8, 8);
  card.style.setProperty("--rotation", `${rotation}deg`);

  const imgSrc = member.drawing
    ? `assets/members/${member.drawing}`
    : "";

  card.innerHTML = `
    <div class="member-drawing${imgSrc ? "" : " no-img"}">
      ${imgSrc ? `<img src="${imgSrc}" alt="${member.name}'s drawing" onerror="this.parentElement.classList.add('no-img'); this.remove()">` : ""}
    </div>
    <div class="member-popup">
      <div class="member-name">${member.name}</div>
      <p class="member-fact">${member.fun_fact}</p>
      ${member.learning ? `<div class="member-learning">learning → ${member.learning}</div>` : ""}
      ${member.github ? `<a class="member-github" href="https://github.com/${member.github}" target="_blank">@${member.github}</a>` : ""}
    </div>
  `;

  return card;
}

function renderGarden() {
  const track1 = document.getElementById("garden-track-1");
  const track2 = document.getElementById("garden-track-2");
  const count = document.getElementById("member-count");

  if (count) count.textContent = MEMBERS.length;

  const mid = Math.ceil(MEMBERS.length / 2);
  const row1 = MEMBERS.slice(0, mid);
  const row2 = MEMBERS.slice(mid);

  // duplicate each row for seamless looping
  [...row1, ...row1].forEach(m => track1.appendChild(makeCard(m)));
  [...row2, ...row2].forEach(m => track2.appendChild(makeCard(m)));
}

document.addEventListener("DOMContentLoaded", renderGarden);
