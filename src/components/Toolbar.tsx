import React from 'react';
import { 
  ZoomIn, ZoomOut, Sun, Moon, Move, Pencil, 
  Square, Circle, Ruler, RotateCcw
} from 'lucide-react';
import { useStore } from '../store/useStore';

const Toolbar: React.FC = () => {
  const { 
    isDarkMode, 
    toggleDarkMode,
    zoom,
    setZoom,
    setTool,
    currentTool
  } = useStore();

  const tools = [
    { icon: Move, name: 'move', title: 'Pan' },
    { icon: Pencil, name: 'draw', title: 'Draw' },
    { icon: Square, name: 'rectangle', title: 'Rectangle' },
    { icon: Circle, name: 'circle', title: 'Circle' },
    { icon: Ruler, name: 'measure', title: 'Measure' }
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg flex flex-col gap-2">
      <button
        onClick={toggleDarkMode}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        title="Toggle dark mode"
      >
        {isDarkMode ? <Sun size={20} className="text-gray-200" /> : <Moon size={20} />}
      </button>
      
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />
      
      <button
        onClick={() => setZoom(zoom + 0.1)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        title="Zoom in"
      >
        <ZoomIn size={20} className="dark:text-gray-200" />
      </button>
      
      <button
        onClick={() => setZoom(Math.max(0.1, zoom - 0.1))}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        title="Zoom out"
      >
        <ZoomOut size={20} className="dark:text-gray-200" />
      </button>

      <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />
      
      {tools.map(({ icon: Icon, name, title }) => (
        <button
          key={name}
          onClick={() => setTool(name)}
          className={`p-2 rounded-lg transition-colors ${
            currentTool === name 
              ? 'bg-blue-100 dark:bg-blue-900' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title={title}
        >
          <Icon size={20} className="dark:text-gray-200" />
        </button>
      ))}

      <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />
      
      <button
        onClick={() => {
          setZoom(1);
          setTool('move');
        }}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        title="Reset view"
      >
        <RotateCcw size={20} className="dark:text-gray-200" />
      </button>
    </div>
  );
};

export default Toolbar;