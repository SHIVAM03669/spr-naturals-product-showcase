"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sendContactEmail, ContactFormData } from "@/lib/emailjs";

export default function EmailJSTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const testEmail = async () => {
    setIsLoading(true);
    setResult("");

    const testData: ContactFormData = {
      company_name: "Test Company",
      user_name: "John Doe",
      user_email: "test@example.com",
      user_phone: "+91 9876543210",
      user_country: "India",
      message: "This is a test message from the EmailJS integration."
    };

    try {
      const response = await sendContactEmail(testData);
      setResult(`Success: ${response.message}`);
    } catch (error) {
      setResult(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 m-4 max-w-md">
      <h3 className="text-lg font-semibold mb-4">EmailJS Test</h3>
      <p className="text-sm text-gray-600 mb-4">
        Click the button below to test the EmailJS integration with sample data.
      </p>
      
      <Button 
        onClick={testEmail} 
        disabled={isLoading}
        className="w-full mb-4"
      >
        {isLoading ? "Sending..." : "Send Test Email"}
      </Button>
      
      {result && (
        <div className={`p-3 rounded text-sm ${
          result.startsWith("Success") 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {result}
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Check browser console for detailed logs.</p>
        <p>Make sure your EmailJS credentials are configured in .env.local</p>
      </div>
    </Card>
  );
}
