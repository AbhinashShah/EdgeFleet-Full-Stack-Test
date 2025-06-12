export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateVitals() {
  return {
    temperature: getRandomInt(30, 90),
    battery: getRandomInt(20, 100),
    signal: getRandomInt(1, 5),
  };
}

export function generateImage() {
  const timestamp = new Date().toISOString();
  const base64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA";
  return {
    image: base64Image,
    timestamp,
  };
}
