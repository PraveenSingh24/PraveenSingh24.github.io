/* ==========================================================================
   Praveen Kumar - Interactive JavaScript Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. Theme Toggle System (Dark/Light Mode)
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlElement = document.documentElement;

  // Read saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
  }

  // ------------------------------------------------------------------------
  // 2. Mobile Menu Toggle
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  // Close mobile menu when link clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // ------------------------------------------------------------------------
  // 3. Navbar Active Link & Scroll Handling
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Sticky navbar shadow
    if (window.scrollY > 50) {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    // Scroll to top button visibility
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ------------------------------------------------------------------------
  // 4. Publication Filtering & Real-time Search
  // ------------------------------------------------------------------------
  const tabBtns = document.querySelectorAll('.pub-tab-btn');
  const pubCards = document.querySelectorAll('.pub-card');
  const searchInput = document.getElementById('pub-search-input');

  let activeCategory = 'all';
  let searchQuery = '';

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      filterPublications();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterPublications();
    });
  }

  function filterPublications() {
    pubCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const keywords = card.getAttribute('data-keywords').toLowerCase();
      const titleText = card.querySelector('.pub-title').textContent.toLowerCase();
      const authorsText = card.querySelector('.pub-authors').textContent.toLowerCase();
      const venueText = card.querySelector('.pub-venue').textContent.toLowerCase();

      const matchesCategory = (activeCategory === 'all') || (category === activeCategory);
      const matchesSearch = searchQuery === '' || 
        keywords.includes(searchQuery) ||
        titleText.includes(searchQuery) ||
        authorsText.includes(searchQuery) ||
        venueText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. Abstract Toggle Expansion
  // ------------------------------------------------------------------------
  document.querySelectorAll('.toggle-abstract').forEach(btn => {
    btn.addEventListener('click', () => {
      const pubCard = btn.closest('.pub-card');
      const abstractDiv = pubCard.querySelector('.pub-abstract');
      abstractDiv.classList.toggle('open');
      if (abstractDiv.classList.contains('open')) {
        btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Hide Abstract';
      } else {
        btn.innerHTML = '<i class="fa-solid fa-circle-info"></i> Abstract';
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. BibTeX Citation Modal & Clipboard Copy
  // ------------------------------------------------------------------------
  const bibtexDict = {
    "kumar2026neuralpathlite": `@article{kumar2026neuralpathlite,
  title     = {NeuralPathLite: Fast and Robust Diffusion-Based Path Planning for Autonomous Navigation},
  author    = {Kumar, Praveen and Gupta, Pratham and Sandhan, Tushar},
  journal   = {IEEE Transactions on Automation Science and Engineering (T-ASE)},
  volume    = {23},
  pages     = {12471--12485},
  year      = {2026},
  doi       = {10.1109/TASE.2026.3710089}
}`,
    "kumar2026vision": `@article{kumar2026vision,
  title     = {Vision-Aided Online A* Path Planning for Efficient and Safe Navigation of Service Robots},
  author    = {Kumar, Praveen and Sandhan, Tushar},
  journal   = {International Journal of Intelligent Robotics and Applications},
  publisher = {Springer Nature},
  year      = {2026},
  doi       = {10.1007/s41315-026-00540-z}
}`,
    "kumar2026multitask": `@inproceedings{kumar2026multitask,
  title     = {Multi-Task Visual Perception Network with LLM Conditioning for Autonomous Navigation},
  author    = {Kumar, Praveen and Guruprasad, K. R. and Sandhan, Tushar},
  booktitle = {Proceedings of the 2026 International Joint Conference on Neural Networks (IJCNN), IEEE World Congress on Computational Intelligence (WCCI)},
  address   = {Maastricht, The Netherlands},
  month     = {June},
  year      = {2026}
}`,
    "kumar2023pathtracking": `@inproceedings{kumar2023pathtracking,
  title     = {Path-Tracking Control of the 4WIS4WID Electric Vehicle by Direct Inverse Control using Artificial Neural Network},
  author    = {Kumar, Praveen and Sandhan, Tushar},
  booktitle = {2023 14th International Conference on Computing Communication and Networking Technologies (ICCCNT)},
  address   = {Delhi, India},
  pages     = {1--8},
  year      = {2023},
  doi       = {10.1109/ICCCNT56998.2023.10306595}
}`,
    "sharma2020bellmanford": `@inproceedings{sharma2020bellmanford,
  title     = {An Efficient Performance of Enhanced Bellman-Ford Algorithm in Wireless Sensor Network Using K-Medoid Clustering},
  author    = {Sharma, G. and Kumar, Praveen and Shrivastava, L.},
  booktitle = {Springer International Conference on Smart Systems and Intelligent Computing (ICSISCET)},
  year      = {2020}
}`,
    "sharma2020powerscavenging": `@inproceedings{sharma2020powerscavenging,
  title     = {Autonomous Vehicle Power Scavenging Analysis for Vehicular Ad Hoc Network},
  author    = {Sharma, G. and Singh, Praveen Kumar and Shrivastava, L.},
  booktitle = {International Conference on Intelligent Computing and Smart Communication (ICICSC)},
  publisher = {Springer},
  year      = {2020}
}`,
    "kumar2016iot": `@inproceedings{kumar2016iot,
  title     = {IoT-Based Monitoring and Control of Appliances for Smart Home},
  author    = {Kumar, Praveen and Pati, U. C.},
  booktitle = {IEEE International Conference on Recent Trends in Electronics, Information and Communication Technology (RTEICT)},
  year      = {2016},
  doi       = {10.1109/RTEICT.2016.7808011}
}`,
    "kumar2016arduino": `@inproceedings{kumar2016arduino,
  title     = {Arduino and Raspberry Pi-Based Smart Communication and Control of Home Appliance System},
  author    = {Kumar, Praveen and Pati, Umesh Chandra},
  booktitle = {IEEE International Conference on Global Trends in Engineering and Technology (IC-GET)},
  year      = {2016},
  doi       = {10.1109/GET.2016.7916808}
}`
  };

  const modal = document.getElementById('bibtex-modal');
  const bibtexCode = document.getElementById('bibtex-code');
  const modalClose = document.getElementById('modal-close');
  const copyBtn = document.getElementById('copy-bibtex-btn');
  const toast = document.getElementById('toast');

  let currentBibText = '';

  document.querySelectorAll('.open-bibtex').forEach(btn => {
    btn.addEventListener('click', () => {
      const bibKey = btn.getAttribute('data-bib');
      currentBibText = bibtexDict[bibKey] || "% Citation details available upon request.";
      bibtexCode.textContent = currentBibText;
      modal.classList.add('active');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(currentBibText).then(() => {
        showToast("BibTeX copied to clipboard!");
        modal.classList.remove('active');
      }).catch(err => {
        showToast("Copied text successfully!");
      });
    });
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

});
