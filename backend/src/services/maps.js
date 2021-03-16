const axios = require('axios');
const { HereJsKey } = require('../constants');

const hereMapsGeocodeApiUrl = ('https://geocode.search.hereapi.com/v1' +
  `/geocode?xnlp=CL_JSMv3.1.18.0&apikey=${HereJsKey}&q=`);

/**
 * HERE Maps service
 */
const HereMapsService = {
  /**
   * With given address, returns the first candidates to match it
   *
   * @param {string} address      A full or partial address
   */
  getCoordinates: async address =>
    const res = await axios.get(`${hereMapsGeocodeApiUrl}${address}`);

    if (res.data && res.data.items && res.data.items.length) {
      return res.data.items[0].position;
    } else {
      return {};
    }
};

module.exports = HereMapsService;
