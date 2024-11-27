import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { useStore } from '../store/useStore';
import { useImageLoader } from '../hooks/useImageLoader';
import { useViewportControls } from '../hooks/useViewportControls';
import { AnnotationLayer } from './viewer/AnnotationLayer';
import { LoadingSpinner } from './ui/LoadingSpinner';

const DicomViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { currentImage } = useStore();
  const { imageElement, loading, error } = useImageLoader(currentImage);
  const { transform, handleWheel, handleDragStart, handleDragMove } = useViewportControls();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !currentImage) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 dark:text-gray-400">
          {error || 'No image loaded. Upload an image file to begin.'}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        onWheel={handleWheel}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        draggable
      >
        <Layer>
          {imageElement && (
            <KonvaImage
              image={imageElement}
              x={transform.x}
              y={transform.y}
              scaleX={transform.scaleX}
              scaleY={transform.scaleY}
            />
          )}
          <AnnotationLayer />
        </Layer>
      </Stage>
    </div>
  );
};

export default DicomViewer;