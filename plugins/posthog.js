import posthog from 'posthog-js';

export default ({ app }, inject) => {
  posthog.init('phc_GXjMz6zdV7609uuTRbxPNws6sQKEMCnayNL8B884HMk', { api_host: 'https://app.posthog.com' });
  inject('posthog', posthog);
};
