import Story from '../components/story/Story';
if (window) {
  let story = new Story(window, {
    left: [/app/i, /story/i],
    right: [/analytics/i]
  });

  const domNodeInsertedHandler = e => {
    if(e.srcElement.tagName === 'SCRIPT') {
      story.rightDocument = story.cloneDocumentWithoutScripts('left');
      story.documentWithoutScripts('right');
    }
  };

  const removeDomNodeInserted = () => {
    window.document.removeEventListener("DOMNodeInserted", domNodeInsertedHandler);
  };

  const domContentLoadedHandler = e => {
    removeDomNodeInserted();
    story.rightDocument = story.cloneDocumentWithoutScripts('left');
    story.documentWithoutScripts('right');
    story.applyRightDocument();
    // Remove event listener
    e.target.removeEventListener(e.type, arguments.callee);
  };

  window.document.addEventListener("DOMNodeInserted", domNodeInsertedHandler);
  window.document.addEventListener("DOMContentLoaded", domContentLoadedHandler, true);

}
