import React from 'react';
import { Layer, Rect, Circle, Line } from 'react-konva';
import { useStore } from '../../store/useStore';

export const AnnotationLayer: React.FC = () => {
  const { annotations } = useStore();

  return (
    <>
      {annotations.map((annotation) => {
        switch (annotation.type) {
          case 'rectangle':
            return (
              <Rect
                key={annotation.id}
                x={annotation.points[0]}
                y={annotation.points[1]}
                width={annotation.points[2]}
                height={annotation.points[3]}
                stroke={annotation.color}
                strokeWidth={2}
              />
            );
          case 'ellipse':
            return (
              <Circle
                key={annotation.id}
                x={annotation.points[0]}
                y={annotation.points[1]}
                radiusX={annotation.points[2]}
                radiusY={annotation.points[3]}
                stroke={annotation.color}
                strokeWidth={2}
              />
            );
          case 'line':
            return (
              <Line
                key={annotation.id}
                points={annotation.points}
                stroke={annotation.color}
                strokeWidth={2}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};