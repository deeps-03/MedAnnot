import cornerstone from 'cornerstone-core';
import { adjustImageBrightness, adjustImageContrast } from './imageProcessing';

export const loadDicomImage = (imageUrl: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    
    image.onload = () => {
      resolve(image);
    };
    
    image.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    image.src = imageUrl;
  });
};

export const applyImageAdjustments = (
  canvas: HTMLCanvasElement,
  brightness: number,
  contrast: number
): ImageData => {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');

  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  if (brightness !== 0) {
    imageData = adjustImageBrightness(imageData, brightness);
  }
  
  if (contrast !== 1) {
    imageData = adjustImageContrast(imageData, contrast);
  }
  
  return imageData;
};