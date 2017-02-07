/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const analytics = {
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID || '',
  },
};
