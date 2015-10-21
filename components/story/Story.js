export default class Story {
  constructor(window, config) {
    this.config = config;
    this.window = window;
    this.document = window && window.document;
  }

  documentWithoutScripts(side, doc=this.document) {
    if (this.config && this.config[side]) {
      let scripts = doc.querySelectorAll('script')||[];
      for (var i = 0; i < scripts.length; i++) {
        const regex = RegExp((this.config[side]||[]).map(p => p.source).join('|'),'gmi');
        if(regex.test(scripts[i].outerHTML)) {
          scripts[i].remove();
        }
      }
    }
    return doc;
  }

  cloneDocumentWithoutScripts(side) {
    let document = this.document.cloneNode(true);
    return this.documentWithoutScripts(side, document);
  }

  applyRightDocument() {
    if (this.document) {
      let iframe = this.document.createElement('iframe');
      let html = this.rightDocument.documentElement.outerHTML;
      this.document.body.appendChild(iframe);
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(html);
      iframe.contentWindow.document.close();
    }
  }

  // updateDocuments() {
  //   // TODO: Prevent recheck all nodes
  //   this.rightDocument = this.cloneDocumentWithoutScripts('left');
  //   this.leftDocument = this.documentWithoutScripts('right');
  // }
}
