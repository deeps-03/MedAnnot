import dicomParser from 'dicom-parser';
import { DicomMetadata } from '../types/dicom';

export const parseDicomFile = async (file: File): Promise<DicomMetadata> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        if (!e.target?.result) {
          throw new Error('Failed to read file');
        }

        const arrayBuffer = e.target.result as ArrayBuffer;
        const byteArray = new Uint8Array(arrayBuffer);
        const dataSet = dicomParser.parseDicom(byteArray);

        const metadata: DicomMetadata = {
          patientName: dataSet.string('x00100010'),
          patientId: dataSet.string('x00100020'),
          studyDate: dataSet.string('x00080020'),
          modality: dataSet.string('x00080060'),
          pixelSpacing: dataSet.string('x00280030')?.split('\\').map(Number),
          windowCenter: Number(dataSet.string('x00281050')),
          windowWidth: Number(dataSet.string('x00281051'))
        };

        resolve(metadata);
      } catch (error) {
        // If parsing fails, return minimal metadata
        resolve({
          modality: 'Unknown',
          studyDate: new Date().toISOString().split('T')[0]
        });
      }
    };

    reader.onerror = () => reject(new Error('Error reading file'));
    reader.readAsArrayBuffer(file);
  });
};