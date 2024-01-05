javascript:(function(){
  var links = document.getElementsByTagName('a');
  var externalLinks = [];
  var internalLinks = [];
  for(var i = 0; i < links.length; i++){
    var link = links[i];
    var href = link.href;
    if(href.startsWith('http') && !href.startsWith(location.origin)){
      externalLinks.push(link.textContent.trim() + ' - ' + href);
    } else {
      internalLinks.push(link.textContent.trim() + ' - ' + href);
    }
  }
  var output = 'External Links:\n\n' + externalLinks.join('\n') + '\n\nInternal Links:\n\n' + internalLinks.join('\n');
  var temp = document.createElement('textarea');
  temp.value = output;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  alert('All links have been copied to your clipboard.');
})();
