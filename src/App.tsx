import React, { useEffect } from 'react';
import { useStore } from './store/useStore';
import Toolbar from './components/Toolbar';
import DicomViewer from './components/DicomViewer';
import MetadataPanel from './components/MetadataPanel';
import FileUpload from './components/FileUpload';

function App() {
  const { isDarkMode } = useStore();

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="relative h-screen">
        <FileUpload />
        <Toolbar />
        <DicomViewer />
        <MetadataPanel />
      </div>
    </div>
  );
}

export default App;