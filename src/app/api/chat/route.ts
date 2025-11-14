  import { NextRequest, NextResponse } from 'next/server';

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

    // Simple keyword-based responses for deployment
    const lowerMessage = message.toLowerCase();
    let response = "";

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      response = "Hello! Welcome to SPR Naturals. I can help you with information about our eco-friendly products. How can I assist you today?";
    } else if (lowerMessage.includes('product') || lowerMessage.includes('catalog')) {
      response = "We offer a wide range of eco-friendly products including natural tableware (areca leaf plates), sugarcane fiber tableware (bagasse plates), paper drinkware (cups and straws), paper packaging, food packaging, aluminium containers, wooden cutlery, and clamshell containers. For detailed product information, please contact us at info@sprnaturals.in or WhatsApp +917447755042.";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      response = "For pricing information and quotes, please contact our team directly at info@sprnaturals.in or WhatsApp +917447755042. We'll be happy to provide you with detailed pricing for our eco-friendly products.";
    } else if (lowerMessage.includes('export') || lowerMessage.includes('shipping')) {
      response = "We have 15+ years of export experience and ship to 15+ countries from Nagpur, India. We provide custom packaging and documentation support. For export inquiries, contact us at info@sprnaturals.in or WhatsApp +917447755042.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      response = "You can reach us at:\n📧 Email: info@sprnaturals.in\n📱 WhatsApp: +917447755042\n📍 Location: Nagpur, India\n🕒 Business Hours: Mon–Sat, 9AM – 6PM IST";
    } else {
      response = "Thank you for your interest in SPR Naturals! I can help you with product information, export inquiries, and general questions about our eco-friendly tableware and packaging solutions. For detailed assistance, please contact us at info@sprnaturals.in or WhatsApp +917447755042.";
    }

    return NextResponse.json({ 
      response: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot API error:', error);
    
    return NextResponse.json({ 
      response: "Sorry, I'm having trouble processing your request right now. For immediate assistance, please contact us at info@sprnaturals.in or WhatsApp +917447755042.",
      timestamp: new Date().toISOString()
    });
  }
}
