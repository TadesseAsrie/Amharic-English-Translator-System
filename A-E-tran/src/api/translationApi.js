import axios from "axios";

// ------------------------------------------------------------------
//  MOCK TRANSLATION (for demo without API key)
//  Replace the functions below with real API calls.
// ------------------------------------------------------------------

// Simple mock dictionary for demo (English ↔ Amharic)
const mockDict = {
  hello: "ሰላም",
  world: "ዓለም",
  "thank you": "አመሰግናለሁ",
  yes: "አዎ",
  no: "አይ",
  good: "ጥሩ",
  bad: "መጥፎ",
  love: "ፍቅር",
  peace: "ሰላም",
  family: "ቤተሰብ",
};

// Reverse mock
const reverseMock = Object.fromEntries(
  Object.entries(mockDict).map(([en, am]) => [am, en]),
);

/**
 * Translate text using a real API (Google Cloud / Microsoft / LibreTranslate).
 * For now, we use a mock with a small dictionary + fallback.
 */
export const translateText = async (text, from, to) => {
  // If you have an API key, uncomment and use the real endpoint.
  // Example with LibreTranslate (free, no key required for small usage):
  /*
  const response = await axios.post('https://libretranslate.com/translate', {
    q: text,
    source: from,
    target: to,
    format: 'text',
  });
  return response.data.translatedText;
  */

  // ----- MOCK implementation -----
  await new Promise((resolve) => setTimeout(resolve, 400)); // simulate delay

  const lower = text.toLowerCase().trim();
  let result = "";

  // If translating from English to Amharic
  if (from === "en" && to === "am") {
    // Check mock dict
    if (mockDict[lower]) {
      result = mockDict[lower];
    } else {
      // Fallback: reverse words (just a silly demo)
      result = text.split("").reverse().join("") + " (mock)";
    }
  } else if (from === "am" && to === "en") {
    if (reverseMock[lower]) {
      result = reverseMock[lower];
    } else {
      result = text.split("").reverse().join("") + " (mock)";
    }
  } else {
    // same language or unsupported – return original
    result = text;
  }
  return result;
};
