


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let sections = Object.keys(data);
  sections.forEach((section) => { }
    

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Build a properly formatted README.md document using the data stored in the answers object
// Title & Description are in the top of the README.md, above the Table of Contents
// The remaining sections are in the bottom of the README.md, below the Table of Contents
// This function will work unchanged if sections are added or deleted provided custoom formatting is not required
// Only adds sections where data has been supplied
function generateMarkdown(data) {
  let readmeTop = "";
  let readmeBottom = "";
  let readmeToc = `## Table of Contents
`;
  let sectionHeading = "";
  let sections = Object.keys(data);
  sections.forEach((section) => {
    sectionHeading = section.charAt(0).toUpperCase() + section.substring(1);
    if (data[section].length > 0) {
      switch (section) {
        case "title":
          readmeTop += addTitle(data[section]);
          break;
        case "description":
          readmeTop += addSection(sectionHeading, data[section]);
          break;
        case "license":
          readmeBottom += addSection(sectionHeading, data[section]);
          readmeToc += addToToc(sectionHeading, section);
          break;
        default:
          readmeBottom += addSection(sectionHeading, data[section]);
          readmeToc += addToToc(sectionHeading, section);
      }
    }
  });
  readmeToc += `
`;
  return readmeTop + readmeToc + readmeBottom;
}

// Add the formatted title to the README.md document
function addTitle(sectionDetail) {
  let line = "";
  line = `# ${sectionDetail}

`;
  return line;
}

// Add a formatted Section to README.md document
function addSection(sectionTitle, sectionDetail) {
  let line = "";
  line = `## ${sectionTitle}
${sectionDetail}

`;
  return line;
}

// Add a properly formatted Items in the Table of Contents
function addToToc(sectionTitle, target) {
  line = `* [${sectionTitle}](#${target})
`;
  return line;
}

module.exports = generateMarkdown;
