import Analytics from '../components/analytics/Analytics'

if(window && window.ga) {
  let analytics = new Analytics(window);
  window.document.addEventListener("DOMContentLoaded", function(e) {
    analytics.sendEvent('home', 'load', (new Date()).toString());
  }, false);

  window.document.addEventListener('MenuLoaded', function (e) {
    analytics.sendEvent('menu', 'load', (new Date()).toString());
  }, false);
}
