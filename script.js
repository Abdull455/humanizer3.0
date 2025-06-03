async function humanize() {
  const input = document.getElementById("inputText").value;
  const outputArea = document.getElementById("outputText");
  outputArea.value = "Processing...";

  const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-base", {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_HUGGINGFACE_API_TOKEN",  // Replace with real token
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: `Humanize this: ${input}`
    })
  });

  const result = await response.json();
  if (result.error) {
    outputArea.value = "Error: " + result.error;
  } else {
    outputArea.value = result[0].generated_text;
  }
}