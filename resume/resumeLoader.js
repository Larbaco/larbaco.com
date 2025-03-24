// This script loads a resume from a JSON file and populates the HTML with the data.

// Language switcher functionality
function setActiveLanguageButton(language) {
    document.getElementById('en-btn').classList.remove('active');
    document.getElementById('pt-btn').classList.remove('active');
    document.getElementById(`${language}-btn`).classList.add('active');
}

// Language switcher event listeners
async function loadResume(language) {
    try {
        const response = await fetch(`data/${language}.json`);
        const data = await response.json();
        populateResume(data, language);
        setActiveLanguageButton(language); // Set active button
        addCollapsibleFunctionality();
    } catch (error) {
        console.error("Error loading resume data:", error);
    }
}

// Populate all resume sections
function populateResume(data, language) {
    // Header Section
    document.getElementById("header").innerHTML = `
      <div class="header">
        <div class="header-left">
          <div class="profile-picture">
            <img src="profilepicture.jpeg" alt="${data.header.name}">
          </div>
          <div class="header-text">
            <h1>${data.header.name}</h1>
            <p class="job-title">${data.header.title}</p>
          </div>
        </div>
        <div class="vertical-bar"></div>
        <div class="header-right">
          <div class="contact-info">
            <p><i class="fas fa-map-marker-alt"></i> <strong>${data.header.contact.location}</strong></p>
            <p><i class="fab fa-whatsapp"></i> <a href="https://wa.me/${data.header.contact.phone.replace(/\D/g, '')}" target="_blank">${data.header.contact.phone}</a></p>
            <p><i class="fas fa-envelope"></i> <a href="mailto:${data.header.contact.email}">${data.header.contact.email}</a></p>
            <p><i class="fas fa-globe"></i> <a href="https://${data.header.contact.website}" target="_blank">${data.header.contact.website}</a></p>
            <p><i class="fab fa-linkedin"></i> <a href="https://${data.header.contact.linkedin}" target="_blank">${data.header.contact.linkedin}</a></p>
          </div>
        </div>
      </div>
    `;

    // Professional Summary
    document.getElementById("professional-summary").innerHTML = `
      <h2>${language === "en" ? "Professional Summary" : "Resumo Profissional"}</h2>
      <div class="content visible">
        <p>${data.professional_summary}</p>
      </div>
    `;

    // Technical Skills
    document.getElementById("technical-skills").innerHTML = `
      <h2>${language === "en" ? "Technical Skills" : "Habilidades Técnicas"}</h2>
      <div class="compact-skills">
          ${data.technical_skills.map(skill => {
              const [category, specific] = skill.name.split(":");
              return `
              <div class="skill-line">
                  <div class="skill-main">
                      <div class="skill-category">
                          ${category.trim()}
                          ${specific ? `<div class="skill-specific">${specific.trim()}</div>` : ''}
                      </div>
                      <div class="skill-strength">
                          ${Array.from({length: 5}, (_, i) => `
                              <span class="strength-dot ${i < skill.strength ? 'active' : ''}"></span>
                          `).join('')}
                      </div>
                  </div>
                  ${skill.description ? `<div class="skill-description">${skill.description}</div>` : ''}
              </div>`;
          }).join('')}
      </div>
    `;

    // Experience
    document.getElementById("experience").innerHTML = `
      <h2>${language === "en" ? "Experience" : "Experiência"}</h2>
      <div class="content visible">
        ${data.experience.map(job => `
          <div class="item-block">
            <div class="item-header">
              <h3 class="item-title">${job.title}</h3>
              <span class="item-date">${job.dates}</span>
            </div>
            <div class="item-company">${job.company}</div>
            <ul class="item-list">
              ${job.description.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;

    // Education
    document.getElementById("education").innerHTML = `
      <h2>${language === "en" ? "Education" : "Formação Acadêmica"}</h2>
      <div class="content visible">
        ${data.education.map(edu => `
          <div class="item-block">
            <div class="item-header">
              <h3 class="item-title">${edu.degree}</h3>
              ${edu.dates ? `<span class="item-date">${edu.dates}</span>` : ''}
            </div>
            <div class="item-company">${edu.institution}</div>
            ${edu.field ? `<div class="item-description">${edu.field}</div>` : ''}
          </div>
        `).join("")}
      </div>
    `;

    // Certifications
    document.getElementById("certifications").innerHTML = `
      <h2>${language === "en" ? "Certifications" : "Certificações"}</h2>
      <div class="content visible">
        <ul class="item-list">
          ${data.certifications.map(cert => `<li>${cert}</li>`).join("")}
        </ul>
      </div>
    `;

    // Projects
    document.getElementById("projects").innerHTML = `
      <h2>${language === "en" ? "Projects" : "Projetos"}</h2>
      <div class="content visible">
        ${data.projects.map(project => `
          <div class="item-block">
            <div class="item-header">
              <h3 class="item-title">${project.name}</h3>
              ${project.dates ? `<span class="item-date">${project.dates}</span>` : ''}
            </div>
            <div class="item-description">${project.description}</div>
            ${project.technologies ? `
              <ul class="item-list">
                <li><strong>Technologies:</strong> ${project.technologies.join(", ")}</li>
              </ul>
            ` : ''}
          </div>
        `).join("")}
      </div>
    `;

    // Languages
    document.getElementById("languages").innerHTML = `
      <h2>${language === "en" ? "Languages" : "Idiomas"}</h2>
      <div class="content visible">
        <ul class="item-list">
          ${data.languages.map(lang => `<li>${lang}</li>`).join("")}
        </ul>
      </div>
    `;
}

// Collapsible Section Functionality
function addCollapsibleFunctionality() {
    document.querySelectorAll(".section h2").forEach(header => {
        header.addEventListener("click", () => toggleSection(header));
    });
}

function toggleSection(sectionHeader) {
    const section = sectionHeader.parentElement;
    const content = section.querySelector(".content");
    content.classList.toggle("visible");
    sectionHeader.classList.toggle("collapsed");
}

// Initialize with English version
window.onload = () => loadResume("pt");