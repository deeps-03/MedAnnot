export const adjustImageBrightness = (
  imageData: ImageData,
  brightness: number
): ImageData => {
  const data = imageData.data.slice();
  
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, Math.max(0, data[i] + brightness));     // Red
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + brightness)); // Green
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + brightness)); // Blue
  }
  
  return new ImageData(data, imageData.width, imageData.height);
};

export const adjustImageContrast = (
  imageData: ImageData,
  contrast: number
): ImageData => {
  const data = imageData.data.slice();
  const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
  
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, Math.max(0, factor * (data[i] - 128) + 128));
    data[i + 1] = Math.min(255, Math.max(0, factor * (data[i + 1] - 128) + 128));
    data[i + 2] = Math.min(255, Math.max(0, factor * (data[i + 2] - 128) + 128));
  }
  
  return new ImageData(data, imageData.width, imageData.height);
};

export const calculateRealWorldDistance = (
  pixelDistance: number,
  pixelSpacing: number[]
): number => {
  return pixelDistance * pixelSpacing[0];
};