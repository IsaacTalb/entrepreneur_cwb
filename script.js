function changeBodySection(section) {
    // Hide all sections
    document.getElementById('one4one').classList.add('hidden');
    document.getElementById('phoomyat').classList.add('hidden');
    document.getElementById('minishin').classList.add('hidden');
    document.getElementById('t-home').classList.add('hidden');

    // Show the selected section
    document.getElementById(section).classList.remove('hidden');}
