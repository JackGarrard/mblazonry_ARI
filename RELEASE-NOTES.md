# Release Notes

## Mar 28 - 1:05pm
* Merged in 'textAreaLabel-include' - a labeled text area molecule was created, tested, and uploaded

## Mar 24 - 12:35pm
* Merged in 'searchbar' - search bar molecule have been modified and approved
* Merged in 'starterkitbloat-remove' - residual patterns from the original starterkit have been removed - additional json and js files will need to be examined and removed if possible
* Merged in 'fontawesome-include' - new icon-button-close(.md/.mustache) files and related scss partials

## Mar 18 - 2:50pm
* Merged 'scssmustache-refactor' into 'dev']
* Known issue: Radio buttons and Checkboxes can no longer be checked - revision needed

## Mar 12 - 4:30pm
* (branch: dev) Fixed compilation issues arising from outdated SCSS variable names

## Mar 9 - 11:20pm
* (branch: fontawesome-include) Nick uploaded 'X' mark button - in need of revision - 'X' button should appear like a typical close button and not an awkward button
* (branch: scssmustache-refactor) SCSS component files have been widely split so each atom has it's own scss partial (e.g. 'radio-button.mustache' => '_radio-button.scss')]
* (branch: scssmustache-refactor) All team-created mustache files have been updated to include mustache variables rather than hard coded values

## Mar 4 - 1:30pm
* (branch: dev) White space and formatting issues have been addressed across the inventory's SCSS files - similar issues found in .mustache files need to be addressed
* (branch: dev) .md files for all team-created atoms and molecules have been updated with information about usage

## Mar 3
* (branch: fontawesome-include) New branch has been created in the remote by Brock that contains _fonts.scss which currently imports FontAwesome font files - Primary and secondary fonts should also be imported in this manner

## Mar 2 - 10:40pm
* (branch: progressbranch) Meter styled and submitted by Seb - in need of revision - .mustache files needs to be split into seperate files, corresponding scss file needs to be optimised

## Feb 28 - 6:20pm :
* Submitted {organism-->forms-->mbl-form-test-feb27} to Mblazonry team for testing
* Updated {colour-variables.scss} with 'transparentize' SASS functions
* Minor update of {css>scss>buttons.scss} to adjust spacing for the radio buttons
