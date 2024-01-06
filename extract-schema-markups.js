javascript:(function() {
  function extractJsonLd() {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    const extractedData = [];
    jsonLdScripts.forEach(script => {
      try {
        const json = JSON.parse(script.textContent);
        extractedData.push(json);
      } catch (error) {
        console.error('Error parsing JSON-LD:', error);
      }
    });
    if (extractedData.length > 0) {
      const jsonString = JSON.stringify(extractedData, null, 2);
      const highlightedJsonString = jsonString.replace(/(".*schema\.org.*")/g, '<span style="background-color: lightgreen;">$1</span>');
      const blob = new Blob([highlightedJsonString], { type: 'text/html' });
      const objectURL = URL.createObjectURL(blob);
      const newTab = window.open();
      newTab.document.write('<pre>' + highlightedJsonString + '</pre>');
      newTab.document.close();
    } else {
      console.log('No JSON-LD Schema Markup found on this page.');
    }
  }
  extractJsonLd();
})();
