const apiKey = "pit-e2362ed0-eb61-4dd3-99ee-1e8f09f534a3";
const locationId = "yGbhAVCKG9Ao2bblzUC8";

async function test() {
  const response = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      name: "Agni Patel6",
      email: "agnipandaeche@gmail.com",
      phone: "8004511488",
      companyName: "testy",
      website: "pandaece.comh",
      locationId: locationId,
      tags: ["astrologylp"],
      customField: {
        budget: "Under 50k",
        targetLeads: "50 - 100"
      }
    })
  });
  
  if (!response.ok) {
    const errorData = await response.text();
    console.error("GHL Submission Failed:", errorData);
  } else {
    console.log("Success!", await response.json());
  }
}

test();
