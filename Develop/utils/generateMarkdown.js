// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("here badge");
  switch(license) {
    case "MIT":
      return "![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)";
    case "Creative Commons":
      return "![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)";
    case "GPL":
      return "![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)";      
    default:
      "";
    break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("here link");
  switch(license) {
    case "MIT":
      return "\n\nThis project was created under the standard MIT licence.\n\n[Learn more about this licence.](https://lbesson.mit-license.org/)";
    case "Creative Commons":
      return "\n\nThis project was created under the Creative Commons licence.\n\n[Learn more about this licence.](https://creativecommons.org/licenses/by-nd/4.0)";
    case "GPL":
     return "\n\nThis project was created under the standard GPL licence.\n\n[Learn more about this licence.](http://perso.crans.org/besson/LICENSE.html)";     
    default:
      "";
    break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "Other") {
  let licenseType = renderLicenseBadge(license) + renderLicenseLink(license);
  return licenseType;
  }
  else {
    "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
