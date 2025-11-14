# Google Analytics Setup for SPR Naturals

## Overview
Google Analytics has been successfully integrated into your Next.js website with Measurement ID: `G-FFDMXESMQN`.

## Files Created/Modified

### 1. `/src/lib/gtag.js`
- Contains Google Analytics tracking utilities
- Includes Measurement ID: `G-FFDMXESMQN`
- Provides functions for pageview tracking and custom events
- Includes helper functions for common tracking scenarios

### 2. `/src/components/GoogleAnalytics.tsx`
- Client-side component that handles Google Analytics initialization
- Automatically tracks pageviews on route changes
- Only loads in production environment
- Uses Next.js Script component for optimal loading

### 3. `/src/app/layout.tsx`
- Modified to include GoogleAnalytics component
- Ensures analytics loads on every page

## Features Implemented

✅ **Pageview Tracking**: Automatically tracks pageviews on route changes
✅ **Production Only**: Analytics only loads in production environment
✅ **Custom Events**: Ready-to-use functions for tracking user interactions
✅ **Performance Optimized**: Uses Next.js Script component with proper loading strategy
✅ **TypeScript Support**: Includes type declarations for gtag function

## Deployment Instructions

### For Netlify Deployment:
1. **Build and Deploy**: Your existing deployment process remains unchanged
2. **Environment Variables**: No additional environment variables needed
3. **Domain Verification**: Ensure your domain `https://sprnaturals.in` is added to your Google Analytics property

### Post-Deployment Verification:
1. **Google Analytics Realtime**: Check GA Realtime reports for incoming traffic
2. **Browser Developer Tools**: 
   - Open DevTools → Network tab
   - Look for requests to `google-analytics.com` and `googletagmanager.com`
3. **GA Debug View**: Use Google Analytics Debug View to verify events

## Custom Event Tracking

You can now track custom events throughout your website:

```javascript
import { trackButtonClick, trackProductView, trackContactForm } from '@/lib/gtag'

// Track button clicks
trackButtonClick('Explore Products')

// Track product views
trackProductView('Areca Leaf Plates')

// Track form submissions
trackContactForm('Contact Form')
```

## Testing

### Local Development:
- Analytics will NOT load in development mode
- This prevents test data from polluting your analytics

### Production Testing:
1. Deploy to Netlify
2. Visit your live site
3. Check Google Analytics Realtime reports
4. Verify pageviews are being tracked

## Troubleshooting

### If analytics don't appear:
1. **Check Domain**: Ensure `sprnaturals.in` is added to your GA property
2. **Check Measurement ID**: Verify `G-FFDMXESMQN` is correct
3. **Check Network**: Look for blocked requests in browser DevTools
4. **Check GA Setup**: Verify the GA property is properly configured

### Common Issues:
- **Ad Blockers**: May block Google Analytics (normal behavior)
- **GDPR Compliance**: Consider adding cookie consent if required
- **Data Processing**: Allow 24-48 hours for full data processing in GA

## Next Steps

1. **Deploy to Netlify**: Your existing deployment process will include the analytics
2. **Monitor Realtime**: Check GA Realtime reports after deployment
3. **Set Up Goals**: Configure conversion goals in Google Analytics
4. **Custom Events**: Add event tracking to important user interactions

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify the Measurement ID in Google Analytics
3. Ensure the domain is properly configured in GA
4. Check Netlify deployment logs for any build errors
