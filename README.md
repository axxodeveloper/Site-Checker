# <span style=" background: linear-gradient(to right, #0066ff, #99c2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; font-size: 2em; "> Site Checker </span>

* A sleek, futuristic web-based URL analysis tool designed to inspect website links for common risk factors, suspicious domains, and malicious keywords before you visit them. Featuring an automated internal heuristic check and quick integration with Google intelligence.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

---

## Preview 📷
* Built with modern glassmorphism, glowing accents, and fluid backdrop-filter animations.
* **Fully Responsive Layout:** Micro-optimized layouts tailored seamlessly across desktop screens, tablets, and ultra-small mobile devices.

	![[preview.png]]

	## Video Preview 🎥
	![[PreviewVideo.mp4]]

---

## 🔍 How It Works

The application evaluates threat levels using a multi-layered verification script:

1. **Protocol & Structure Validation:** Automatically handles protocol appending (forces secure fallback evaluation) and utilizes the native browser `URL()` constructor to filter out broken strings.
2. **Heuristic Risk Scoring Engine:**
    * **Keyword Detection:** Scans for high-risk social-engineering terms (`phishing`, `free-money`, `hack`, `scam`).
    * **TLD Profiling:** Flags high-risk or commonly abused Top-Level Domains (`.xyz`, `.tk`, `.gq`, etc.).
    * **Insecure Protocol Check:** penalizes plain text `http://` connections.
3. **Reachability Check:** Dispatches an asynchronous `fetch()` request (configured with `no-cors` safely) to check live status.
4. **Google Safe Browsing Bridge:** Features a dynamic generation query button that extracts target domains and hands them over directly to Google advanced search commands to check real-time reputation database listings.

---

## 🛠️ Installation & Setup

No compilers or heavy node modules needed. Just pure vanilla web performance.

##       Method 1 — Download ZIP 📦

1. Click the green **Code** button.
    
2. Select **Download ZIP**.
    
3. Extract the ZIP file.
    
4. Open the extracted folder.
    
5. Run `index.html` in your browser.
    

---

## Method 2 — Clone with Git 💻

### Clone the Repository

```bash
git clone https://github.com/axxodeveloper/cyber-url-scanner.git
```

### Open the Project Folder

```bash
cd cyber-url-scanner
```

### Run the Website

Open:

```bash
index.html
```

