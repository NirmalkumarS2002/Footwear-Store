    // fallback for broken online images
    const fb = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%23d9dfe9'/%3E%3C/svg%3E";
    document.querySelectorAll("img").forEach(im => { if (!im.src.includes("logo.webp")) im.addEventListener("error", () => { im.src = fb; }, { once: true }); });

    // mobile menu
    const nav = document.getElementById("nav");
    document.getElementById("menuBtn").onclick = () => nav.classList.add("open");
    document.getElementById("closeBtn").onclick = () => nav.classList.remove("open");

    // add to cart counter
    let cart = 0;
    document.querySelectorAll(".add").forEach(btn => {
      btn.addEventListener("click", () => {
        cart++;
        document.getElementById("cartCount").textContent = cart;
        const old = btn.innerHTML;
        btn.classList.add("done");
        btn.innerHTML = "Added";
        setTimeout(() => { btn.classList.remove("done"); btn.innerHTML = old; }, 1200);
      });
    });

    // redirect placeholders to 404
    document.querySelectorAll(".errorpage").forEach(el => el.addEventListener("click", () => location.href = "404.html"));

    // footer subscribe validation
    const fMail = document.getElementById("footerEmail"), ferr = document.querySelector(".ferror");
    document.getElementById("subBtn").addEventListener("click", () => {
      const v = fMail.value.trim();
      if (!v) { ferr.textContent = "Please enter your email address"; ferr.style.color = "#ff6b6b"; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { ferr.textContent = "Please enter a valid email address"; ferr.style.color = "#ff6b6b"; return; }
      ferr.textContent = "Subscribed successfully!"; ferr.style.color = "#4ade80"; fMail.value = "";
            setTimeout(()=>{
           ferr.textContent =""
           window.location.href = "404.html"
        },1000)
    });