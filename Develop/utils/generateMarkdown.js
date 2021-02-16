// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "\n\n> This project was created under the standard MIT licence.\n\n[Learn more about this licence.](https://lbesson.mit-license.org/)";
    case "Creative Commons":
      return "\n\n> This project was created under the Creative Commons licence.\n\n[Learn more about this licence.](https://creativecommons.org/licenses/by-nd/4.0)";
    case "GPL":
     return "\n\n> This project was created under the standard GPL licence.\n\n[Learn more about this licence.](http://perso.crans.org/besson/LICENSE.html)";     
    default:
      "";
    break;
  }
}

// Function that returns the license section of README
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

// Function to generate markdown for README including all the sections required.
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  
  ## Description
  ${data.description}

  ## Contents
  Section | Description
  ------------ | -------------
  [Installation](#installation) | Information on how to install this project.
  [Usage](#usage) | Find out how to use the ${data.title}.
  [Testing](#testing) | All you need to know about testing.
  [Contribution](#contribution) | Want to contribute? Find out more in this section.
  [Questions](#questions) | If you've got any questions, this is how you can reach me.
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Testing
  ${data.testing}

  ## Contribution
  ${data.contributors}

  ## Questions
  My GitHub profile, ${data.github} can be found [here](${data.githubLink}).

  Otherwise, if you have any questions, you can reach me directly at [${data.email}](mailto:${data.email}).


`;
}

//Allows other files to use the information generated here.
module.exports = generateMarkdown;
