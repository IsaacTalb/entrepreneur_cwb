function changeBodySection(section) {
    // Hide all sections
    document.getElementById('one4one').classList.add('hidden');
    document.getElementById('phoomyat').classList.add('hidden');
    document.getElementById('minishin').classList.add('hidden');
    document.getElementById('t-home').classList.add('hidden');
    document.getElementById('hidden_homepage').classList.add('hidden');
    
    
    // Show the selected section
    document.getElementById(section).classList.remove('hidden');
}

/*
document.getElementById('yourBodySectionId').classList.add('hidden'); hides the body section
 with the ID 'yourBodySectionId'. Make sure to replace 'yourBodySectionId' with the actual ID of
  the body section you want to hide.

If you also want to show the body section again under
certain conditions, you can add a similar line to remove the 'hidden' class:

document.getElementById('yourBodySectionId').classList.remove('hidden');
*/


function changeActive(element) {
    // Remove 'active' class from all links
    document.querySelectorAll('nav a').forEach(function(link) {
      link.classList.remove('active');
       });

    // Add 'active' class to the clicked link
    element.classList.add('active');}



