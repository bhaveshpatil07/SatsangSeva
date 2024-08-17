import React, { useEffect } from 'react';
import "../Csss/GoogleTranslate.css";

const GoogleTranslate = () => {
  useEffect(() => {
    setTimeout(function() {
      if (typeof google !== 'undefined' && google.translate) {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'hi,mr,gu,bn,kn,en,ta,te',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    }, 1000); // wait for 1 second
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate