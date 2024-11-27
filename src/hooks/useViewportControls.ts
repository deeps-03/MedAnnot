import { useState, useCallback } from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';

interface Transform {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
}

export const useViewportControls = () => {
  const [transform, setTransform] = useState<Transform>({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
  });

  const handleWheel = useCallback((e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    
    const scaleBy = 1.1;
    const oldScale = transform.scaleX;
    const pointer = e.getPointerPosition();
    
    if (!pointer) return;

    const mousePointTo = {
      x: (pointer.x - transform.x) / oldScale,
      y: (pointer.y - transform.y) / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setTransform({
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
      scaleX: newScale,
      scaleY: newScale,
    });
  }, [transform]);

  const handleDragStart = useCallback((e: KonvaEventObject<DragEvent>) => {
    const pos = e.target.position();
    setTransform(prev => ({
      ...prev,
      x: pos.x,
      y: pos.y,
    }));
  }, []);

  const handleDragMove = useCallback((e: KonvaEventObject<DragEvent>) => {
    const pos = e.target.position();
    setTransform(prev => ({
      ...prev,
      x: pos.x,
      y: pos.y,
    }));
  }, []);

  return {
    transform,
    handleWheel,
    handleDragStart,
    handleDragMove,
  };
};