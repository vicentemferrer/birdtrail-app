## Overview

**Birdtrail App** is a mobile mapping application built to visualize bird sightings in southern Chile, specifically on Chiloé Island. As a software engineer focused on geospatial applications and mobile development, my goal with this project was to deepen my understanding of GIS mapping technologies and learn to build efficient, interactive maps that serve real data to users.

The app displays bird observation markers on a map using custom icons and includes interactive callouts that reveal key data for each sighting (species, date, observer, etc.). Users can filter the data by species and select geographic regions to load specific datasets. Marker clustering is implemented to optimize performance and reduce visual clutter. The app connects to a public API to serve region-based data dynamically.

I created this app to expand my experience with mobile geospatial software and to learn how to manage map data visually and programmatically while providing a meaningful user experience.

[Software Demo Video](https://youtu.be/ZfIj-hty5oQ)

## Development Environment

- **Tools:** _Node.js_ (for running the development server), _npm_ (package manager), the _Expo CLI_ (to build and run the app), and _Visual Studio Code_ as editor. _Android SDK_ with _Android Emulator_ and a physical device with _Expo Go_ app are used to test the app on Android.

  ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat)
  ![NPM](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white&style=flat)
  ![Visual Studio Code](https://img.shields.io/badge/-VS%20Code-007ACC?logo=visualstudiocode&logoColor=white&style=flat)
  ![Android SDK](https://img.shields.io/badge/-Android%20SDK-3DDC84?logo=android&logoColor=white&style=flat)
  ![Android Emulator](https://img.shields.io/badge/-Android%20Emulator-3DDC84?logo=android&logoColor=white&style=flat)
  ![Expo Go](https://img.shields.io/badge/-Expo%20Go-faebd7?logo=expo&logoColor=black&style=flat)

- **Language and Framework:** The project is written in _TypeScript_ using _React Native_. We used _Expo SDK 53_, which provides the native modules and development environment for building the app.

  ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat)
  ![React Native](https://img.shields.io/badge/-React%20Native-61DAFB?logo=react&logoColor=black&style=flat)
  ![Expo](https://img.shields.io/badge/-Expo-000020?logo=expo&logoColor=white&style=flat)

- **Libraries:** The app uses _React Hooks_ and _Context API_ for state management and modular logic.
  Mapping is handled with `react-native-maps` using Google' _Maps SDK_, with custom markers and a custom callout system for consistent cross-platform behavior.

  ![Maps SDK](https://img.shields.io/badge/-Maps%20SDK-4285F4?logo=googlemaps&logoColor=white&style=flat)

## Useful Websites

- [Geograma Blog](https://www.geograma.com/blog/que-es-gis/) – Introductory overview of Geographic Information Systems (GIS), their components, and real-world applications.

- [MappingGIS - JSON and GeoJSON](https://mappinggis.com/2018/03/json-y-geojson-en-el-mundo-gis/) – Explanation of JSON and GeoJSON formats in the GIS context, including structure and use cases.

- [Esri Spain - What is GIS](https://www.esri.es/es-es/descubre-los-gis/qu-es-sig/que-es-sig) – Summary of what a GIS system is, how it works, and its relevance in modern geospatial analysis.

- [Expo MapView Docs](https://docs.expo.dev/versions/latest/sdk/map-view/) – Official documentation for the `MapView` component in Expo SDK, including setup, usage, and props.

- [react-native-maps GitHub](https://github.com/react-native-maps/react-native-maps) – Repository for the main mapping library used in React Native apps, with installation, examples, and community contributions.

## Future Work

- **Handle Out-of-Boundary Cases:** Improve user experience by detecting when the selected region has no data or falls outside valid boundaries, and displaying a clear message or fallback state.

- **New Sighting Submission Form:** Add a form that allows users to submit their own bird sightings directly from the app, including species, date, location, and optional image upload.

- **Hybrid Data Handling Model:** Combine local and remote data strategies to allow offline access to previously fetched data and improve performance in low-connectivity areas.

- **Advanced Filtering Options**: Expand the current filtering system to support filters by date range, observer, and geographic zone, giving users more control over what data is displayed.

- **Sighting Detail View**: Create a dedicated screen to show detailed information about a selected sighting, including species facts, photo gallery, and metadata.

- **UI/UX Improvements**: Refine the visual design for better accessibility and responsiveness across devices, and implement animations or transitions to enhance usability.

- **Codebase Cleanup and Optimization**: Review and refactor code to improve modularity, reduce redundancy, and follow best practices for performance and maintainability.
