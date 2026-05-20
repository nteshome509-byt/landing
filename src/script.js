export async function submitContactForm(formData) {
  // Use Formspree endpoint
  const response = await fetch("https://formspree.io/f/mkoenkkp", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: "Server error" }));
    console.error("Formspree Error:", errorData);
    throw new Error(errorData.message || "Failed to submit form");
  }

  return await response.json();
}

