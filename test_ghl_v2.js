const apiKey = "pit-e2362ed0-eb61-4dd3-99ee-1e8f09f534a3";
const locationId = "yGbhAVCKG9Ao2bblzUC8";

async function testV2() {
  const response = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      "Version": "2021-07-28"
    },
    body: JSON.stringify({
      firstName: "Agni",
      email: "agnipandaeche@gmail.com",
      phone: "8004511488",
      companyName: "testy",
      website: "pandaece.comh",
      locationId: locationId,
      tags: ["astrologylp"],
      customFields: []
    })
  });
  
  if (!response.ok) {
    const errorData = await response.text();
    console.error("GHL Submission Failed:", errorData);
  } else {
    console.log("Success!", await response.json());
  }
}

testV2();
