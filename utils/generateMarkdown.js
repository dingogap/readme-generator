// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }



// Add the formatted title to the README.md document 
function addTitle(sectionDetail) {
  let line = '';
  line = `# ${sectionDetail}

`;
  return line;
}

// Add a formatted Section to README.md document
function addSection(sectionTitle, sectionDetail) {
  let line = '';
  line = `## ${sectionTitle}
${sectionDetail}

`;
  return line;
}

// Add a properly formatted Table of Contents
function buildTOC() {
  line = `## Table of Contents

[TOC]
  
`;
  return line
}

// Build a properly formatted README.md document using the data stored in the answers object
// Title & Description are in the top of the README.md, above the Table of Contents
// The remaining sections are in the bottom of the README.md, below the Table of Contents  
function generateMarkdown(data) {
  let docoTop = "";
  let docTOC = "";
  let docoBottom = "";
  let sectionHeading = "";
  let sections = Object.keys(data);
  sections.forEach((section) => {
    sectionHeading = section.charAt(0).toUpperCase() + section.substring(1);
    if (data[section].length > 0) {
      switch (section) {
        case "title":
          docoTop += addTitle(data[section])
          break;
        case "description":
          docoTop += addSection(sectionHeading, data[section])
          break;
        default:
          docoBottom += addSection(sectionHeading, data[section])
      }
    }
  });

  return docoTop + buildTOC() + docoBottom;
}

module.exports = generateMarkdown;
