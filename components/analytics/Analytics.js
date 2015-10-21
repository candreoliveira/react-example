export default class Analytics {
  constructor(window) {
      this.window = window;
  }

  sendEvent(category, action, label, value) {
    if(this.window && this.window.ga) {
      console.log('SEND EVENT', this.window.ga, category, action, label, value);
      this.window.ga('send', 'event', category, action, label, value);
    }
  }
}
