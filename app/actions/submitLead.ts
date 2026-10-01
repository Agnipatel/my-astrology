"use server";

export async function submitLeadToGHL(formData: {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  website: string;
  budget: string;
  targetLeads: string;
}) {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  
  if (!apiKey || !locationId) {
    console.error("GHL API Key or Location ID is missing in environment variables.");
    return { success: false, error: "Configuration error: GHL credentials missing." };
  }

  try {
    const response = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "Version": "2021-07-28"
      },
      body: JSON.stringify({
        firstName: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.businessName,
        website: formData.website,
        locationId: locationId,
        tags: ["astrologylp"]
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.text();
      console.error("GHL Submission Failed:", errorData);
      return { success: false, error: "Failed to submit lead to GoHighLevel." };
    }
  } catch (error) {
    console.error("GHL Submission Error:", error);
    return { success: false, error: "Failed to connect to GoHighLevel." };
  }
}
