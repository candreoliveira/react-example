export default class Message {
  constructor(window, name) {
    this.document = window && window.document;
    this.window = window;
    if(this.document.createEvent && this.window.Event && this.window.Event.prototype.initEvent) {
      let event = this.document.createEvent('Event');
      event.initEvent(name, true, true);
      this.event = event;
    } else if(this.window && this.window.Event) {
      try {
        this.event = new Event(name);
      } catch (e) {
        this.event = null;
      }
    } else {
      this.event = null;
    }
  }

  dispatchMessage(from) {
    if (from && from.dispatchEvent && this.event) {
      return from.dispatchEvent(this.event);
    }
    return false;
  }
}
