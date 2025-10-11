# SPR Naturals Chatbot Setup Guide

## Overview
This chatbot implementation uses Google's Gemini AI to provide intelligent customer support for SPR Naturals. The chatbot is designed to help customers with product information, export inquiries, and general business questions while staying within defined boundaries.

## Features
- ✅ Real-time chat interface
- ✅ SPR Naturals specific knowledge base
- ✅ Eco-friendly product expertise
- ✅ Export and shipping information
- ✅ Contact information integration
- ✅ Responsive design
- ✅ Error handling and fallback responses

## Setup Instructions

### 1. Get Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory and add:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Install Dependencies
The required dependencies are already installed:
- `@google/genai` - Google's Gemini AI SDK
- `mime` - MIME type handling

### 4. Start the Application
```bash
npm run dev
```

## Chatbot Behavior

### What the Chatbot Can Help With:
- Product information and catalog assistance
- Eco-friendly tableware and packaging solutions
- Export and shipping inquiries
- Product categories: Natural Tableware, Sugarcane Fiber Tableware, Paper Drinkware, Paper Packaging, Aluminium Containers, Wooden Cutlery, Kraft Paper Bags, Meal Boxes
- ISO certification and quality assurance details
- Bulk order and private-label branding information
- Global shipping from Nagpur, India
- Sustainable and compostable product benefits
- 15+ years of export experience to 15+ countries
- Custom packaging and documentation support

### What the Chatbot Avoids:
- Non-eco-friendly or plastic product recommendations
- Pricing without proper inquiry process
- Technical support for third-party products
- Political or controversial topics
- Personal advice unrelated to business
- Competitor comparisons
- Financial or investment advice
- Medical or health advice beyond product safety

### Contact Information Provided:
- Email: hello@sprnaturals.com
- WhatsApp: +917447755042
- Location: Nagpur, India
- Business Hours: Mon–Sat, 9AM – 6PM IST
- Social Media: @Exporter_Indian (X), @exporter_indian1983 (Instagram), @exporterindian1983 (Facebook), India True Global Exims (LinkedIn)

## File Structure

```
src/
├── app/
│   └── api/
│       └── chat/
│           └── route.ts          # API endpoint for chatbot
├── components/
│   ├── Chatbot.tsx              # Main chatbot component
│   └── HomePage.tsx             # Updated to include chatbot
```

## Customization

### Modifying the Chatbot Prompt
Edit the `CHATBOT_PROMPT` constant in `src/app/api/chat/route.ts` to customize the chatbot's behavior, knowledge base, or responses.

### Styling the Chatbot
The chatbot uses Tailwind CSS classes that match your SPR Naturals design system:
- Primary colors: `nature-green`, `leaf-green`
- Accent colors: `sage-green`
- The chatbot is positioned as a floating widget in the bottom-right corner

### Adding Features
You can extend the chatbot by:
- Adding file upload capabilities
- Integrating with your product database
- Adding multilingual support
- Implementing chat history persistence

## Troubleshooting

### Common Issues:

1. **API Key Error**: Ensure your `.env.local` file has the correct `GEMINI_API_KEY`
2. **Network Errors**: Check your internet connection and API key validity
3. **Chatbot Not Appearing**: Verify the component is imported and rendered in HomePage.tsx

### Testing the Chatbot:
1. Start the development server
2. Open your browser to `http://localhost:3000`
3. Look for the green chat button in the bottom-right corner
4. Click to open the chat interface
5. Try asking about SPR Naturals products

## Security Notes

- The API key is server-side only and not exposed to the client
- Input validation is implemented to prevent malicious requests
- Error handling ensures graceful fallbacks for API failures
- The chatbot is designed to stay within business-appropriate boundaries

## Support

For technical issues with the chatbot implementation, please refer to:
- [Google Gemini AI Documentation](https://ai.google.dev/docs)
- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

For SPR Naturals business inquiries, use the contact information provided above.
