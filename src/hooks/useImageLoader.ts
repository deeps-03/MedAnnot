import { useState, useEffect } from 'react';
import { preloadImage } from '../utils/imageUtils';

export const useImageLoader = (imageUrl: string | null) => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imageUrl) {
      setImageElement(null);
      return;
    }

    const loadImage = async () => {
      setLoading(true);
      setError(null);

      try {
        const img = await preloadImage(imageUrl);
        setImageElement(img);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load image');
        setImageElement(null);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [imageUrl]);

  return { imageElement, loading, error };
};