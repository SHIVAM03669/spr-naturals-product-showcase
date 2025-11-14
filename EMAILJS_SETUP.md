# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in the "Get in Touch" section.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** `New Contact Form Submission from {{from_name}}`

**Body:**
```
Hello SPR Naturals Team,

You have received a new contact form submission:

Name: {{user_name}}
Email: {{user_email}}
Company: {{company_name}}
Phone: {{phone_number}}
Country: {{user_country}}

Message:
{{message}}

---
Submitted on: {{date}} at {{time}}
This message was sent from your SPR Naturals website contact form.
Reply directly to this email to respond to {{user_name}}.
```

**Important:** Make sure to use these exact variable names in your EmailJS template:
- `{{user_name}}` - User's name
- `{{user_email}}` - User's email  
- `{{company_name}}` - Company name
- `{{phone_number}}` - Phone number
- `{{user_country}}` - Selected country
- `{{message}}` - User's message
- `{{date}}` - Submission date
- `{{time}}` - Submission time

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email for the test message

## Template Variables Used

The contact form sends these variables to your EmailJS template:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company_name}}` - Company name (optional)
- `{{phone_number}}` - Phone number
- `{{country}}` - Selected country
- `{{message}}` - User's message
- `{{to_name}}` - Always "SPR Naturals Team"
- `{{reply_to}}` - User's email (for easy replies)

## Troubleshooting

- **Email not received**: Check your spam folder
- **Service not working**: Verify your service ID and that the email service is active
- **Template errors**: Make sure all template variables are spelled correctly
- **CORS errors**: Ensure your domain is added to EmailJS allowed origins

### Common Issues with Missing Data:

1. **Email and Phone Number Not Showing**:
   - Make sure your EmailJS template uses the correct variable names:
     - Use `{{user_email}}` not `{{from_email}}`
     - Use `{{phone_number}}` not `{{user_phone}}`
   - Check the browser console for "EmailJS Template Parameters" log to see what data is being sent
   - Verify that the form fields are not empty when submitting

2. **Template Variable Mismatch**:
   - The template variables must match exactly (case-sensitive)
   - Use the updated template format provided above
   - Test with a simple template first to ensure basic functionality

3. **Debug Steps**:
   - Open browser developer tools (F12)
   - Go to Console tab
   - Submit the form and look for "EmailJS Template Parameters" log
   - Verify all expected data is present in the logged object

## Security Notes

- Never commit your `.env.local` file to version control
- The public key is safe to expose in client-side code
- EmailJS handles rate limiting and spam protection
