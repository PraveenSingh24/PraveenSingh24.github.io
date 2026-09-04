# Praveen Kumar - Academic Portfolio Website

This repository contains the source code for **Praveen Kumar's Academic & Professional Webpage**, optimized for instant hosting on **GitHub Pages**.

- **Author**: Praveen Kumar (Ph.D. Scholar, Dept. of Electrical Engineering, IIT Kanpur)
- **GitHub**: [@PraveenSingh24](https://github.com/PraveenSingh24)
- **Email**: praveenk20iitk@gmail.com

---

## 🚀 Key Features

1. **Modern Dark & Light Mode Design**:
   - High-contrast, sleek glassmorphism layout tailored for robotics & AI researchers.
   - Built-in theme switcher with automatic preference persistence.

2. **Interactive Publications Hub**:
   - Filterable paper lists (Journals, Conferences, Under Review).
   - Real-time instant search bar for keywords, authors, and venues.
   - Expandable abstract cards and 1-click **BibTeX modal copy to clipboard**.

3. **Responsive Mobile Experience**:
   - Custom drawer navigation for smartphones & tablets.
   - Dynamic profile avatar with glowing badge ring.

4. **Complete Content Coverage**:
   - Hero bio with direct links to Google Scholar, GitHub, LinkedIn, ORCID & CV download (`CV.pdf`).
   - Research focus cards (Intelligent Path Planning, Robot Perception & SLAM, LLM Conditioning, Vehicle Dynamics).
   - Detailed Experience & Education dual timeline.
   - Teaching & Mentorship history (IIT Kanpur, TEQIP-III, CET Bhubaneswar).
   - Awards & Honors ($1,200 IEEE CIS Travel Grant, GATE qualification).
   - Professional references & direct contact cards.

---

## 🌐 Deploying to GitHub Pages (2-Minute Guide)

You can host this webpage completely free on GitHub Pages using either of the two methods below:

### Option A: Hosting as your main site (`https://PraveenSingh24.github.io`) [Recommended]

1. Go to [GitHub](https://github.com/new) and create a **New Repository**.
2. Name the repository exactly: **`PraveenSingh24.github.io`** (make it **Public**).
3. Open your terminal in this directory (`/home/praveensingh/webpage`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for personal webpage"
   git branch -M main
   git remote add origin https://github.com/PraveenSingh24/PraveenSingh24.github.io.git
   git push -u origin main
   ```
4. Your website will be live in 1–2 minutes at: **https://PraveenSingh24.github.io**

---

### Option B: Hosting under repository name (`https://PraveenSingh24.github.io/webpage`)

1. Create a public repository named **`webpage`** on GitHub.
2. Run the following commands in this directory:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio webpage"
   git branch -M main
   git remote add origin https://github.com/PraveenSingh24/webpage.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** → **Pages** → under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **`main`** / **`/ (root)`** → Click **Save**.
4. Your website will be live at: **https://PraveenSingh24.github.io/webpage**

---

## 📂 File Structure

```
webpage/
├── index.html        # Main HTML layout with SEO & JSON-LD structured data
├── styles.css        # Vanilla CSS styling with design tokens & dark/light themes
├── script.js        # Interactive JS (theme toggle, search filter, BibTeX modal)
├── profile.jpeg      # Profile photo used in the hero section
├── CV.pdf            # PDF download copy of Praveen's CV (CV_WCCI2026.pdf)
└── README.md         # Deployment & repository guide
```

---

## 💻 Local Preview

To preview your site locally before pushing to GitHub:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.
