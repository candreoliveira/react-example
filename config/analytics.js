import Analytics from '../components/analytics/Analytics'

if(window && window.ga) {
  let analytics = new Analytics(window);
  window.document.addEventListener("DOMContentLoaded", function(e) {
    analytics.sendEvent('home', 'load', (new Date()).toString());
  }, false);

  window.document.addEventListener('MenuLoaded', function (e) {
    analytics.sendEvent('menu', 'load', (new Date()).toString());
  }, false);

  ['HomeLoaded', 'HomeUpdated'].map(eventName => {
    window.document.addEventListener(eventName, function (e) {
      if (e.detail.pathname === '/') {
        window.document.querySelector('a').addEventListener('click', function(e) {
          console.log('click');
          analytics.sendEvent('menu', 'click', (new Date()).toString());
        }, false);
      }
    }, false);
  });
}
