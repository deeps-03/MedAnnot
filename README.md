# MedAnnot - Medical Image Viewer and Annotation Tool

A modern, web-based medical image viewer and annotation tool built with React, TypeScript, and modern web technologies. This application provides a robust platform for viewing and annotating medical images with an intuitive user interface.

## Features

- 🖼️ Support for multiple image formats (DICOM, PNG, JPEG, etc.)
- 🎨 Advanced image manipulation tools
  - Zoom in/out with mouse wheel
  - Pan with drag and drop
  - Reset view with a single click
- ✏️ Comprehensive annotation tools
  - Rectangle tool for region selection
  - Circle tool for circular annotations
  - Line tool for measurements
  - Freehand drawing tool
- 🌓 Dark/light mode support for comfortable viewing
- 📱 Fully responsive design for all devices
- 💾 Persistent settings and preferences
- ⚡ Fast and efficient image rendering with KonvaJS

## Live Demo

You can access the live demo of MedAnnot at the following link:

[Live Demo - MedAnnot](https://deeps-03.github.io/MedAnnot/)

## Implementation Details

## Tech Stack

The following technologies were used to build this application:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Zustand**: A small, fast state management solution for React.
- **KonvaJS**: A canvas library for drawing 2D shapes, images, and text.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Docker**: For containerized deployment.

### Architecture

The application follows a modular architecture with clear separation of concerns:

- **Components**: Reusable UI components using React and TypeScript
- **Hooks**: Custom React hooks for image loading and viewport controls
- **Store**: Global state management using Zustand with persistence
- **Utils**: Utility functions for image processing and DICOM parsing

### Technical Decisions

1. **State Management**: Chose Zustand over Redux for its simplicity and built-in persistence
2. **Image Rendering**: Used KonvaJS for efficient canvas-based rendering
3. **Styling**: Implemented with Tailwind CSS for rapid development and consistent design
4. **File Handling**: Support for both DICOM and standard image formats
5. **Performance**: Implemented image preloading and efficient canvas updates

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:1235`

## Docker Deployment

1. **Build the image**:
   ```bash
   docker-compose build
   ```
2. **Start the container**:
    ```bash
   docker-compose up -d
   ```
3. Access the application at `http://localhost:1235`

4. **Stop the container**:
   ```bash
   docker-compose down
   ```
## Docker Hub Link

Link: https://hub.docker.com/repository/docker/deepaksuresh03/medannot/general
   
## Production Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
medannot/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── viewer/       # Image viewer components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand store configuration
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── public/               # Static assets
└── docker/              # Docker configuration
```

## Usage Guide

1. **Loading Images**
   - Click "Upload Image" button
   - Select a DICOM or standard image file
   - The image will be displayed in the viewer

2. **Image Navigation**
   - Zoom: Use mouse wheel or zoom buttons
   - Pan: Click and drag the image
   - Reset: Click the reset button to restore default view

3. **Annotations**
   - Select a tool from the toolbar
   - Click and drag on the image to create annotations
   - Use the measurement tool for distance calculations

4. **Appearance**
   - Toggle dark/light mode using the theme button
   - UI automatically adapts to screen size

