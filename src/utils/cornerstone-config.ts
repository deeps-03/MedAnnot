import dicomParser from 'dicom-parser';
import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import cornerstoneMath from 'cornerstone-math';

const createColorLUT = (numLabels) => {
  const colorLUT = new Array(numLabels);
  for (let i = 0; i < numLabels; i++) {
    const value = i / (numLabels - 1); // Normalize to [0, 1]
    colorLUT[i] = {
      r: Math.floor(value * 255), // Red
      g: Math.floor(value * 255), // Green
      b: Math.floor(value * 255), // Blue
      a: 255 // Alpha
    }; // Grayscale
  }
  return colorLUT;
};

export const initializeCornerstone = () => {
  // Initialize cornerstone
  cornerstoneTools.external.cornerstone = cornerstone;
  cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

  // Initialize tools
  cornerstoneTools.init({
    showSVGCursors: true,
  });

  // Register all tools
  const tools = cornerstoneTools.getToolForElement;
  if (tools) {
    cornerstoneTools.addTool(cornerstoneTools.PanTool);
    cornerstoneTools.addTool(cornerstoneTools.ZoomTool);
    cornerstoneTools.addTool(cornerstoneTools.WwwcTool);
    cornerstoneTools.addTool(cornerstoneTools.RectangleRoiTool);
    cornerstoneTools.addTool(cornerstoneTools.EllipticalRoiTool);
    cornerstoneTools.addTool(cornerstoneTools.LengthTool);
  }

  // Create and set Color LUT
  const numLabels = 65536; // Adjust based on your requirements
  const colorLUT = createColorLUT(numLabels);

  // Check if setColorLUT exists and is a function
  if (typeof cornerstoneTools.setColorLUT === 'function') {
    cornerstoneTools.setColorLUT(colorLUT);
  } else {
    console.warn("setColorLUT is not a function. Please check your Cornerstone Tools version.");
    
    // If there's an alternative way to set the color LUT, implement it here.
    // For example, if you need to set color mapping directly on image or tool, do it here.
    // This is a placeholder for any alternative logic you might want to implement.
  }
};