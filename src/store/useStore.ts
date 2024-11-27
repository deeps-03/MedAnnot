import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DicomMetadata, AnnotationData } from '../types/dicom';

interface AppState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentImage: string | null;
  setCurrentImage: (image: string | null) => void;
  metadata: DicomMetadata | null;
  setMetadata: (metadata: DicomMetadata | null) => void;
  annotations: AnnotationData[];
  addAnnotation: (annotation: AnnotationData) => void;
  removeAnnotation: (id: string) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  currentTool: string;
  setTool: (tool: string) => void;
  brightness: number;
  setBrightness: (brightness: number) => void;
  contrast: number;
  setContrast: (contrast: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      currentImage: null,
      setCurrentImage: (image) => set({ currentImage: image }),
      metadata: null,
      setMetadata: (metadata) => set({ metadata }),
      annotations: [],
      addAnnotation: (annotation) =>
        set((state) => ({ annotations: [...state.annotations, annotation] })),
      removeAnnotation: (id) =>
        set((state) => ({
          annotations: state.annotations.filter((a) => a.id !== id),
        })),
      zoom: 1,
      setZoom: (zoom) => set({ zoom }),
      currentTool: 'move',
      setTool: (tool) => set({ currentTool: tool }),
      brightness: 0,
      setBrightness: (brightness) => set({ brightness }),
      contrast: 1,
      setContrast: (contrast) => set({ contrast }),
    }),
    {
      name: 'medannot-storage',
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        currentTool: state.currentTool,
      }),
    }
  )
);