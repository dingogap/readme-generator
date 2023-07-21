// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function buildTOC(section){}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let docoTop = "";
  let docTOC = "";
  let docoBottom = "";
  let sectionHeading = "";
  let sections = Object.keys(data);
  sections.forEach((section) => {
    sectionHeading = section.charAt(0).toUpperCase() + section.substring(1);
    switch (section) {
      case "title":
        docoTop += `# ${data[section]}

  `;
        buildTOC(sectionHeading);
        break;
      case "description":
        docoTop += `## ${sectionHeading}
  ${data[section]}
  
  `;
        buildTOC(sectionHeading);
        break;
      default:
        docoBottom += `## ${sectionHeading}
        ${data[section]}
        
        `;
        buildTOC(sectionHeading);
    }
  });

  return docoTop + docTOC + docoBottom;
}

module.exports = generateMarkdown;
