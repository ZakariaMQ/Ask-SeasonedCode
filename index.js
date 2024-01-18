function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    } else {
        var defaultSection = document.getElementById(sectionId);
        if (defaultSection) {
            defaultSection.style.display = 'block';
        }
    }
}

window.onload = () => {
    showSection('how-we-can-help');
};