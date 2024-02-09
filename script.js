function changeBodySection(section) {
    // Hide all sections
    document.getElementById('academycafe').classList.add('hidden');
    document.getElementById('entreprenuers').classList.add('hidden');
    document.getElementById('foodproduct').classList.add('hidden');
    document.getElementById('livelihood').classList.add('hidden');
    document.getElementById('communitycollege').classList.add('hidden');
    document.getElementById('environmental').classList.add('hidden');
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

  // Pop up for One4One
  function openPopup() {
        document.getElementById('overlay').style.display = 'flex';
      }

  function closePopup() {
      var overlay = document.getElementById('overlay');
      var popup = document.querySelector('.popup'); // Corrected selector
      var closeBtn = document.querySelector('.close-btn');

      // Add class to trigger the fadeOutPopup animation
      overlay.classList.add('fadeOutPopup');
      popup.classList.add('slideOutPopup');

      closeBtn.classList.add('rotateOutCloseBtn');

      // Wait for the animation to complete before hiding the overlay
      setTimeout(function() {
        overlay.style.display = 'none';
        // Remove the fadeOutPopup class to allow re-opening the popup
        overlay.classList.remove('fadeOutPopup');
        popup.classList.remove('slideOutPopup');
        closeBtn.classList.remove('rotateOutCloseBtn');
      }, 500); // 500ms is the duration of the fadeOutPopup animation
      }

      // Popup for Phoo Myat
    function openPopup_PM() {
      document.getElementById('overlay_PM').style.display = 'flex';
      }
  
  
      function closePopup_PM() {
      var overlay_PM = document.getElementById('overlay_PM');
      var popup_PM = document.querySelector('.popup_PM'); // Corrected selector
      var closeBtn_PM = document.querySelector('.close-btn_PM');
  
      // Add class to trigger the fadeOutPopup animation
      overlay_PM.classList.add('fadeOutPopup');
      popup_PM.classList.add('slideOutPopup');
  
      closeBtn_PM.classList.add('rotateOutCloseBtn');
  
      // Wait for the animation to complete before hiding the overlay
      setTimeout(function() {
      overlay_PM.style.display = 'none';
      // Remove the fadeOutPopup class to allow re-opening the popup
      overlay_PM.classList.remove('fadeOutPopup');
      popup_PM.classList.remove('slideOutPopup');
      closeBtn_PM.classList.remove('rotateOutCloseBtn');
      }, 500); // 500ms is the duration of the fadeOutPopup animation
      }
  
      // Popup for Minishin
      function openPopup_MS() {
      document.getElementById('overlay_MS').style.display = 'flex';
      }
  
  
      function closePopup_MS() {
      var overlay_MS = document.getElementById('overlay_MS');
      var popup_MS = document.querySelector('.popup_MS'); // Corrected selector
      var closeBtn_MS = document.querySelector('.close-btn_MS');
  
      // Add class to trigger the fadeOutPopup animation
      overlay_MS.classList.add('fadeOutPopup');
      popup_MS.classList.add('slideOutPopup');
  
      closeBtn_MS.classList.add('rotateOutCloseBtn');
  
      // Wait for the animation to complete before hiding the overlay
      setTimeout(function() {
      overlay_MS.style.display = 'none';
      // Remove the fadeOutPopup class to allow re-opening the popup
      overlay_MS.classList.remove('fadeOutPopup');
      popup_MS.classList.remove('slideOutPopup');
      closeBtn_MS.classList.remove('rotateOutCloseBtn');
      }, 500); // 500ms is the duration of the fadeOutPopup animation
      }
  

