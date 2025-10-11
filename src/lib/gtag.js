export const GA_TRACKING_ID = 'G-FFDMXESMQN'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Common event tracking functions for your website
export const trackButtonClick = (buttonName) => {
  event({
    action: 'click',
    category: 'engagement',
    label: buttonName,
  })
}

export const trackProductView = (productName) => {
  event({
    action: 'view_item',
    category: 'ecommerce',
    label: productName,
  })
}

export const trackContactForm = (formType) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formType,
  })
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        page_path?: string
        event_category?: string
        event_label?: string
        value?: number
        [key: string]: any
      }
    ) => void
  }
}
