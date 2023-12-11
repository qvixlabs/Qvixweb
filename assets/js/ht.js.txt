if (location.href.substr(-1) === '/' && location.href.indexOf('.html') === -1) {
    window.history.replaceState({}, '', location.href + 'index.html');
  } else if (location.href.indexOf('.html') !== -1) {
    const url = location.href.substr(0, location.href.indexOf('.html'));
    window.history.replaceState({}, '', url);
  }
