const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { email } = req.body; // Assuming email is sent from your form

  const data = {
    email_address: email,
    status: "subscribed"
  };

  try {
    const response = await fetch('https://us11.api.mailchimp.com/3.0/lists/<list_id>/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from('anystring:' + '45aba2fe7957217239367be4a53495fa-us11').toString('base64')
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      res.status(200).json({ message: "Successfully subscribed!" });
    } else {
      res.status(400).json({ error: "Failed to subscribe. Please try again." });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};
