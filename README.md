# 📁 Service Portfolio - Metal Gear Solid Style

A stylized Angular 20 portfolio inspired by the Mgs. This project features iDroid-style panels, animated codec UI, cassette-flip service cards, and HUD-like transitions to present services, projects, and contact info.

---

## 🚀 Demo

🌐 [https://service-portfolio.vercel.app](https://service-portfolio.vercel.app)

---

## 🎯 Features

* 🔋 Standalone Angular 20 architecture
* 🧠 Codec-style animated welcome screen
* 💾 Cassette card animations for services (flip reveal)
* 📂 Project archives with mission-code labels
* 📡 Contact panel with HUD reveal and typing effect
* ⚙️ SCSS modular styling and responsive layout
* 🔁 Deployed on Vercel with automatic rewrites

---

## 🛠️ Tech Stack

| Purpose    | Tech                    |
| ---------- | ----------------------- |
| Framework  | Angular 20 (standalone) |
| Language   | TypeScript              |
| Styling    | SCSS                    |
| Animations | Custom CSS / SCSS       |
| Hosting    | Vercel                  |

---

## 🧩 Project Structure

```bash
src/
├── app/
│   ├── components/       # Navbar, Footer
│   ├── pages/
│   │   ├── home/         # Codec intro
│   │   ├── about/        # About Me panels
│   │   ├── services/     # Cassette-flip services
│   │   ├── projects/     # Project mission archive
│   │   └── contact/      # Expanding HUD contact screen
│   └── app.config.ts     # Routing
└── styles.scss           # Global theme and HUD colors
```

---

## 🧪 Setup & Run

```bash
# 1. Clone the repo
https://github.com/juanitomanoplateada/service-portfolio.git

# 2. Install dependencies
npm install

# 3. Run locally
npm run start

# App will be available at:
http://localhost:4200
```

---

## ⚙️ Deployment (Vercel)

1. Create a `vercel.json` file:

```json
{
  "outputDirectory": "dist/service-portfolio",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

2. Push to GitHub → Import repo in [vercel.com](https://vercel.com/import)
3. Set:

   * Build command: `npm run build`
   * Output directory: `dist/service-portfolio`

---

## 📬 Contact

* 📧 [edwinnino2404@gmail.com](mailto:edwinnino2404@gmail.com)
* 💼 [LinkedIn](https://www.linkedin.com/in/edwin-steven-ni%C3%B1o-torres-292b01282/)
* 🛰️ [GitHub](https://github.com/juanitomanoplateada)

---

## 📄 License

Licensed under the MIT License.

---

> Developed with ⚡ by Edwin Steven Niño Torres
