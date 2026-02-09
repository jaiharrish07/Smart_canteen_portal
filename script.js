function updateTime() {
  const timeDisplay = document.getElementById("time");
  if (!timeDisplay) return;

  const now = new Date();
  timeDisplay.innerText = "Current Time: " + now.toLocaleTimeString();
}

function getActiveSlotName(slots, currentTime) {
  for (const slotName in slots) {
    const [start, end] = slots[slotName].time;
    if (currentTime >= start && currentTime < end) {
      return slotName;
    }
  }
  return null;
}

function formatSlotLabel(slotName) {
  if (!slotName) return "";
  return slotName.charAt(0).toUpperCase() + slotName.slice(1);
}

function updateMenu() {
  const menuList = document.getElementById("menuList");
  if (!menuList) return;

  if (typeof canteenMenus === "undefined" || !Array.isArray(canteenMenus)) {
    menuList.className = "";
    menuList.innerHTML = `
      <div class="live-empty-state">
        <p>Live menu data is unavailable right now.</p>
      </div>
    `;
    return;
  }

  const now = new Date();
  const currentTime = now.getHours() + now.getMinutes() / 60;

  menuList.innerHTML = "";
  menuList.className = "live-menu-grid";

  let foundAny = false;

  canteenMenus.forEach((canteen) => {
    const activeSlotName = getActiveSlotName(canteen.slots, currentTime);
    if (!activeSlotName) return;

    const activeItems = canteen.slots[activeSlotName].items;
    if (!activeItems || activeItems.length === 0) return;

    foundAny = true;

    const card = document.createElement("article");
    card.className = "live-canteen-card";

    const header = document.createElement("div");
    header.className = "live-canteen-header";

    const title = document.createElement("h3");
    title.textContent = canteen.canteen;

    const slotBadge = document.createElement("span");
    slotBadge.className = "live-slot-badge";
    slotBadge.textContent = formatSlotLabel(activeSlotName);

    header.appendChild(title);
    header.appendChild(slotBadge);

    const ul = document.createElement("ul");
    ul.className = "live-item-list";

    activeItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = "live-item";
      li.textContent = item;
      ul.appendChild(li);
    });

    card.appendChild(header);
    card.appendChild(ul);
    menuList.appendChild(card);
  });

  if (!foundAny) {
    menuList.className = "";
    menuList.innerHTML = `
      <div class="live-empty-state">
        <p>All canteens are currently closed.</p>
        <small>Next meal service usually starts at 7:00 AM or 12:00 PM.</small>
      </div>
    `;
  }
}

function parseTimeValue(value) {
  if (!value) return null;
  const parts = value.split(":");
  if (parts.length !== 2) return null;

  const hour = Number(parts[0]);
  const minute = Number(parts[1]);
  if (Number.isNaN(hour) || Number.isNaN(minute)) return null;

  return hour + minute / 60;
}

function isOpenNow(current, open, close) {
  if (open === null || close === null) return null;
  if (open === close) return true;

  if (close > open) {
    return current >= open && current < close;
  }

  return current >= open || current < close;
}

function updateCanteenStatus() {
  const cards = document.querySelectorAll(
    ".canteen-card[data-open][data-close]"
  );
  if (!cards.length) return;

  const now = new Date();
  const current = now.getHours() + now.getMinutes() / 60;

  cards.forEach((card) => {
    const open = parseTimeValue(card.dataset.open);
    const close = parseTimeValue(card.dataset.close);
    const status = card.querySelector(".status");

    if (!status || open === null || close === null) return;

    const openNow = isOpenNow(current, open, close);
    status.classList.toggle("open", openNow);
    status.classList.toggle("closed", !openNow);
    status.textContent = openNow ? "Open" : "Closed";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  updateMenu();
  updateCanteenStatus();
  setInterval(updateTime, 1000);
  setInterval(updateMenu, 60000);
  setInterval(updateCanteenStatus, 60000);
});

function validateForm() {
  const nameInput = document.getElementById("name");
  if (!nameInput) return true;

  const name = nameInput.value.trim();
  const regex = /^[A-Za-z ]+$/;

  if (!regex.test(name)) {
    alert("Enter a valid name");
    return false;
  }

  alert("Feedback submitted!");
  return true;
}

const campusBoundary = {
  minLat: 12.8427,
  maxLat: 12.8456,
  minLng: 80.1524,
  maxLng: 80.1576,
};

function getLocation() {
  const status = document.getElementById("locationStatus");
  if (!status) return;

  if (!navigator.geolocation) {
    status.innerText = "Geolocation not supported";
    return;
  }

  status.innerText = "Checking location...";

  navigator.geolocation.getCurrentPosition(
    showPosition,
    () => {
      status.innerText = "Location permission denied";
    },
    { enableHighAccuracy: true }
  );
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const status = document.getElementById("locationStatus");
  const userDot = document.getElementById("userLocation");
  const map = document.querySelector(".map");

  if (!status || !userDot || !map) return;

  const inside =
    lat >= campusBoundary.minLat &&
    lat <= campusBoundary.maxLat &&
    lng >= campusBoundary.minLng &&
    lng <= campusBoundary.maxLng;

  if (!inside) {
    status.innerText = "You are outside of campus";
    userDot.style.display = "none";
    return;
  }

  status.innerText = "You are inside the campus";

  const updateDot = () => {
    const rect = map.getBoundingClientRect();
    const mapWidth = rect.width || map.clientWidth;
    const mapHeight = rect.height || map.clientHeight;

    if (!mapWidth || !mapHeight) return;

    const x =
      ((lng - campusBoundary.minLng) /
        (campusBoundary.maxLng - campusBoundary.minLng)) *
      mapWidth;

    const y =
      ((campusBoundary.maxLat - lat) /
        (campusBoundary.maxLat - campusBoundary.minLat)) *
      mapHeight;

    userDot.style.left = `${Math.max(0, Math.min(mapWidth, x))}px`;
    userDot.style.top = `${Math.max(0, Math.min(mapHeight, y))}px`;
    userDot.style.display = "block";
  };

  requestAnimationFrame(updateDot);
}
