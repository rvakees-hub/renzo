export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { eventName, eventId, eventSourceUrl, userData, customData } = req.body;
  
  // Configuration
  const PIXEL_ID = '892713886462053';
  const ACCESS_TOKEN = 'EAAWZA1ouKY4YBQdvJQz7uzIuJaFHtBroLtlkzZARBlLnRxmVCZBrbZBZBkjtF0XyKKO9lG7Jdk7E00JSSmRYrDl8FNNQPnNxZCYFx6xl7gi7TZBbyIYW26It7rN1nfXttPsTj8wbC6RUFOfVQwfoOTJCZBlMwpO2CZCZBl6JSCk1kGMWfOWOO65Y6utOPwcRSQuwZDZD';

  try {
    const fbResponse = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: eventSourceUrl,
            action_source: 'website',
            user_data: {
              client_ip_address: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
              client_user_agent: req.headers['user-agent'],
              ...userData,
            },
            custom_data: customData,
          },
        ],
        // test_event_code: 'TEST12345' // Uncomment and add your test code here for testing in Events Manager
      }),
    });

    const data = await fbResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('FB CAPI Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}