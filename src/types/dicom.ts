export interface DicomMetadata {
  patientName?: string;
  patientId?: string;
  studyDate?: string;
  modality?: string;
  pixelSpacing?: number[];
  windowCenter?: number;
  windowWidth?: number;
}

export interface AnnotationData {
  id: string;
  type: 'rectangle' | 'ellipse' | 'line' | 'freehand';
  points: number[];
  color: string;
  measurement?: {
    value: number;
    unit: 'mm' | 'cm';
  };
}