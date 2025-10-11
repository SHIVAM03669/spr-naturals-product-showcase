  import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const CHATBOT_PROMPT = `Act like a chatbot for SPR Naturals - Premium Natural Products from India to the World

With all features like:
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
- WhatsApp integration for direct communication

Contact for help:
- Email: info@sprnaturals.in
- WhatsApp: +917447755042
- Location: Nagpur, India
- Business Hours: Mon–Sat, 9AM – 6PM IST
- Social Media: @Exporter_Indian (X), @exporter_indian1983 (Instagram), @exporterindian1983 (Facebook), India True Global Exims (LinkedIn)

Avoid answering questions like:
- Non-eco-friendly or plastic product recommendations
- Pricing without proper inquiry process
- Technical support for third-party products
- Political or controversial topics
- Personal advice unrelated to business
- Competitor comparisons
- Financial or investment advice
- Medical or health advice beyond product safety

Give this response if you can't answer the query:
Sorry, I can't help you with this. For specialized inquiries about SPR Naturals products, please contact us directly at info@sprnaturals.in or WhatsApp +917447755042. Our team will be happy to assist you with your specific needs.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `${CHATBOT_PROMPT}

User's question: ${message}

Please respond as the SPR Naturals chatbot, being helpful, professional, and staying within the defined scope.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: prompt,
    });

    const fullResponse = response.text;

    if (!fullResponse) {
      return NextResponse.json(
        { 
          error: 'No response generated from AI',
          response: "Sorry, I couldn't generate a response. Please try again or contact us directly at info@sprnaturals.in"
        }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      response: fullResponse.trim(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process your message. Please try again later.',
        response: "Sorry, I'm having trouble processing your request right now. For immediate assistance, please contact us at info@sprnaturals.in or WhatsApp +917447755042."
      }, 
      { status: 500 }
    );
  }
}
