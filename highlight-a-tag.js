javascript: (function() {
    var anchorElements = document.querySelectorAll('a');
    anchorElements.forEach(function(anchor) {
        anchor.style.background = 'yellow';
        anchor.style.border = '2px solid blue';
        anchor.style.padding = '2px';
    });
    if (anchorElements.length > 0) {
        alert('Links highlighted on the page.');
    } else {
        alert('No anchor elements found on this page.');
    }
})();
