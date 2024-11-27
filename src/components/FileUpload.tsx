import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useStore } from '../store/useStore';
import { parseDicomFile } from '../utils/dicomParser';
import { createImageFromFile } from '../utils/imageUtils';

const FileUpload: React.FC = () => {
  const { setCurrentImage, setMetadata } = useStore();

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Parse DICOM metadata
      const metadata = await parseDicomFile(file);
      setMetadata(metadata);

      // Create and load the image
      const imageUrl = await createImageFromFile(file);
      setCurrentImage(imageUrl);
    } catch (error) {
      console.error('Error loading file:', error);
      alert('Error loading file. Please ensure it\'s a valid image format.');
    }
  }, [setCurrentImage, setMetadata]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-10">
      <label className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <Upload size={20} className="dark:text-gray-200" />
        <span className="text-sm font-medium dark:text-gray-200">Upload Image</span>
        <input
          type="file"
          accept="image/*,.dcm"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileUpload;