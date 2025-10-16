"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (config: any, elementId: string) => void;
      };
    };
    googleTranslateElementInit2: () => void;
    doGTranslate: (selectElement: HTMLSelectElement | string) => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2';
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit2 = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false
      }, 'google_translate_element2');
      
      // Hide banner after initialization
      setTimeout(() => {
        const banners = document.querySelectorAll('.goog-te-banner-frame, .skiptranslate, iframe[title="Google Translate Element"]');
        banners.forEach(banner => {
          (banner as HTMLElement).style.display = 'none';
          (banner as HTMLElement).style.visibility = 'hidden';
          (banner as HTMLElement).style.position = 'absolute';
          (banner as HTMLElement).style.top = '-1000px';
          (banner as HTMLElement).style.left = '-1000px';
          (banner as HTMLElement).style.width = '0';
          (banner as HTMLElement).style.height = '0';
          (banner as HTMLElement).style.opacity = '0';
        });
        
        // Reset body position
        document.body.style.top = '0';
        document.body.style.marginTop = '0';
        document.body.style.paddingTop = '0';
      }, 1000);

      // Continuous observer to hide any new banners
      const observer = new MutationObserver(() => {
        const banners = document.querySelectorAll('.goog-te-banner-frame, .skiptranslate, iframe[title="Google Translate Element"]');
        banners.forEach(banner => {
          (banner as HTMLElement).style.display = 'none';
          (banner as HTMLElement).style.visibility = 'hidden';
          (banner as HTMLElement).style.position = 'absolute';
          (banner as HTMLElement).style.top = '-1000px';
          (banner as HTMLElement).style.left = '-1000px';
        });
        
        // Ensure body stays at top
        document.body.style.top = '0';
        document.body.style.marginTop = '0';
        document.body.style.paddingTop = '0';
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Store observer for cleanup
      (window as any).translateObserver = observer;
    };

    // Translate function (decoded from the obfuscated code in the original HTML)
    window.doGTranslate = function(a: HTMLSelectElement | string) {
      try {
        let value = '';
        if (typeof a === 'string') {
          value = a;
        } else {
          value = a.value;
        }
        
        if (value == '') return;
        
        const targetLang = value.split('|')[1];
        if (!targetLang) return;
        
        // Find the Google Translate combo element
        const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        
        if (!combo) {
          // If combo not found, try again after a short delay
          setTimeout(() => { 
            const retryCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (retryCombo) {
              retryCombo.value = targetLang;
              const event = new Event('change', { bubbles: true });
              retryCombo.dispatchEvent(event);
            }
          }, 500);
          return;
        }
        
        // Set the target language
        combo.value = targetLang;
        
        // Trigger change event
        const event = new Event('change', { bubbles: true });
        combo.dispatchEvent(event);
        
      } catch (e) {
        console.log('Translation error:', e);
      }
    };

    // Helper function to fire events
    function fireEvent(a: HTMLElement, b: string) {
      try {
        // Use modern event creation method
        const c = new Event(b, { bubbles: true, cancelable: true });
        a.dispatchEvent(c);
      } catch (e) {
        // Fallback for older browsers
        try {
          const c = document.createEvent('HTMLEvents');
          c.initEvent(b, true, true);
          a.dispatchEvent(c);
        } catch (fallbackError) {
          console.warn('Could not fire event:', fallbackError);
        }
      }
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Clean up observer
      const observer = (window as any).translateObserver;
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative notranslate z-[60]">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element2" style={{ display: 'none' }}></div>
      
      {/* Custom Language Selector */}
      <select 
        className="notranslate bg-white border border-sage-green/30 rounded-lg px-1 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-nature-green cursor-pointer z-[60] sm:px-2"
        onChange={(e) => {
          if (e.target.value) {
            window.doGTranslate(e.target.value);
          }
        }}
        defaultValue=""
      >
        <option value="" disabled className="notranslate">
          🌐 Lang
        </option>
        <option value="en|en" className="notranslate">🇺🇸 English</option>
        <option value="en|af" className="notranslate">🇿🇦 Afrikaans</option>
        <option value="en|sq" className="notranslate">🇦🇱 Albanian</option>
        <option value="en|ar" className="notranslate">🇸🇦 Arabic</option>
        <option value="en|hy" className="notranslate">🇦🇲 Armenian</option>
        <option value="en|az" className="notranslate">🇦🇿 Azerbaijani</option>
        <option value="en|eu" className="notranslate">🇪🇸 Basque</option>
        <option value="en|be" className="notranslate">🇧🇾 Belarusian</option>
        <option value="en|bg" className="notranslate">🇧🇬 Bulgarian</option>
        <option value="en|ca" className="notranslate">🇪🇸 Catalan</option>
        <option value="en|zh-CN" className="notranslate">🇨🇳 Chinese (Simplified)</option>
        <option value="en|zh-TW" className="notranslate">🇹🇼 Chinese (Traditional)</option>
        <option value="en|cs" className="notranslate">🇨🇿 Czech</option>
        <option value="en|da" className="notranslate">🇩🇰 Danish</option>
        <option value="en|nl" className="notranslate">🇳🇱 Dutch</option>
        <option value="en|et" className="notranslate">🇪🇪 Estonian</option>
        <option value="en|fi" className="notranslate">🇫🇮 Finnish</option>
        <option value="en|fr" className="notranslate">🇫🇷 French</option>
        <option value="en|gl" className="notranslate">🇪🇸 Galician</option>
        <option value="en|ka" className="notranslate">🇬🇪 Georgian</option>
        <option value="en|de" className="notranslate">🇩🇪 German</option>
        <option value="en|el" className="notranslate">🇬🇷 Greek</option>
        <option value="en|ht" className="notranslate">🇭🇹 Haitian Creole</option>
        <option value="en|iw" className="notranslate">🇮🇱 Hebrew</option>
        <option value="en|hi" className="notranslate">🇮🇳 Hindi</option>
        <option value="en|hu" className="notranslate">🇭🇺 Hungarian</option>
        <option value="en|is" className="notranslate">🇮🇸 Icelandic</option>
        <option value="en|id" className="notranslate">🇮🇩 Indonesian</option>
        <option value="en|ga" className="notranslate">🇮🇪 Irish</option>
        <option value="en|it" className="notranslate">🇮🇹 Italian</option>
        <option value="en|lv" className="notranslate">🇱🇻 Latvian</option>
        <option value="en|lt" className="notranslate">🇱🇹 Lithuanian</option>
        <option value="en|mk" className="notranslate">🇲🇰 Macedonian</option>
        <option value="en|ms" className="notranslate">🇲🇾 Malay</option>
        <option value="en|mt" className="notranslate">🇲🇹 Maltese</option>
        <option value="en|no" className="notranslate">🇳🇴 Norwegian</option>
        <option value="en|ro" className="notranslate">🇷🇴 Romanian</option>
        <option value="en|ru" className="notranslate">🇷🇺 Russian</option>
        <option value="en|sr" className="notranslate">🇷🇸 Serbian</option>
        <option value="en|es" className="notranslate">🇪🇸 Spanish</option>
        <option value="en|sv" className="notranslate">🇸🇪 Swedish</option>
        <option value="en|th" className="notranslate">🇹🇭 Thai</option>
        <option value="en|tr" className="notranslate">🇹🇷 Turkish</option>
        <option value="en|uk" className="notranslate">🇺🇦 Ukrainian</option>
        <option value="en|ur" className="notranslate">🇵🇰 Urdu</option>
        <option value="en|vi" className="notranslate">🇻🇳 Vietnamese</option>
        <option value="en|cy" className="notranslate">🇬🇧 Welsh</option>
      </select>
    </div>
  );
}
