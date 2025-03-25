import translate from "node-google-translate-skidz";
export async function getTranslation() {
  try {
    const result = await translate({
      text: "Я люблю жизнь",
      source: "ru",
      target: "en",
    });
    return result.translation; // Возвращаем только перевод
  } catch (error) {
    console.error("Translation error:", error);
    return null;
  }
}
