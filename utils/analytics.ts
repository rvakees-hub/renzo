// Global type definition for Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Generates a unique Event ID for deduplication between Pixel and CAPI
 */
export const generateEventId = (): string => {
  return 'evt-' + Date.now() + '-' + Math.random().toString(36).slice(2, 9);
};

/**
 * Tracks an event to both Facebook Pixel (Browser) and Conversions API (Server)
 */
export const trackEvent = async (eventName: string, params: Record<string, any> = {}) => {
  const eventId = generateEventId();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 1. Browser Side Tracking (Pixel)
  if (typeof window !== 'undefined' && window.fbq) {
    // We pass eventID to the pixel so FB can match it with the server event
    window.fbq('track', eventName, params, { eventID: eventId });
  }

  // 2. Server Side Tracking (CAPI)
  try {
    // Send data to our secure serverless function
    await fetch('/api/fb-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl: currentUrl,
        customData: params,
        // Note: IP and User Agent are captured automatically by the server function
      }),
    });
  } catch (error) {
    // Fail silently on client side if API is down, Pixel will still work
    console.warn('CAPI event failed to send:', error);
  }
};
