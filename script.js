// Contact Form Handler
function handleSubmit(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending...';
  setTimeout(()=>{
    status.textContent = 'Thanks! We received your message.';
    document.getElementById('contactForm').reset();
  },800);
  return false;
}

// Dark / Light Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.style.cssText = "margin-left:12px;padding:6px 12px;border-radius:8px;border:none;cursor:pointer;";
document.querySelector(".navbar .container").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Dark Mode Styles
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode { background:#111827; color:#f3f4f6; }
  .dark-mode .card { background:#1f2937; color:#f3f4f6; }
  .dark-mode a { color:#93c5fd; }
`;
document.head.appendChild(style);

// Back to Top Button
const topBtn = document.createElement("button");
topBtn.textContent = "⬆";
topBtn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px;border:none;border-radius:50%;background:#0f62fe;color:#fff;cursor:pointer;display:none;";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({top:0,behavior:"smooth"});
});
