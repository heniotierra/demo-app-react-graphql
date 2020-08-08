/* eslint-disable no-undef */
import { HereJsKey } from '../constants';

/**
 * Initializes communication with the HERE platform, 
 * initializes a map - this map is centered over Europe
 * 
 * @param  {HTML element} mapDivElement      A div instance within the application
 */
class HereMap {
  constructor(mapDivElement) {
    const platform = new H.service.Platform({
      apikey: HereJsKey
    });
    const defaultLayers = platform.createDefaultLayers();
    
    this.map = new H.Map(mapDivElement,
      defaultLayers.vector.normal.map,{
      center: {lat:50, lng:5},
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    window.addEventListener('resize', () => this.map.getViewPort().resize());
  }

  /**
   * Moves the map to display over location
   *
   * @param  {number} lat      Latitude
   * @param  {number} lng      Longitude
   */
  moveTo(lat, lng) {
    this.map.setCenter({lat, lng});
    this.map.setZoom(14);
  }
}

export default HereMap;