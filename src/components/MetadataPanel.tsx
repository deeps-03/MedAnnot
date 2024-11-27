import React from 'react';
import { useStore } from '../store/useStore';

const MetadataPanel: React.FC = () => {
  const { metadata } = useStore();

  if (!metadata) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">DICOM Metadata</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Patient Name</h3>
          <p className="dark:text-white">{metadata.patientName || 'N/A'}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Patient ID</h3>
          <p className="dark:text-white">{metadata.patientId || 'N/A'}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Study Date</h3>
          <p className="dark:text-white">{metadata.studyDate || 'N/A'}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Modality</h3>
          <p className="dark:text-white">{metadata.modality || 'N/A'}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pixel Spacing</h3>
          <p className="dark:text-white">
            {metadata.pixelSpacing 
              ? `${metadata.pixelSpacing[0]} mm x ${metadata.pixelSpacing[1]} mm`
              : 'N/A'}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Window Settings</h3>
          <p className="dark:text-white">
            C: {metadata.windowCenter || 'N/A'} / W: {metadata.windowWidth || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetadataPanel;