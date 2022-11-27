import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const config = {};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const formData = JSON.parse(req.body);

    const emailTemplate = `
      Name: ${formData.name}<br/>
      Email: ${formData.email}<br/>
      Telephone: ${formData.telephone}<br/>
      Message: ${formData.message}
    `;

    const msg = {
      to: process.env.SENDGRID_EMAIL_TO,
      from: process.env.SENDGRID_EMAIL_FROM,
      subject: "New contact form submission",
      text: `${formData.name}, ${formData.email}, ${formData.telephone}, ${formData.message}`,
      html: emailTemplate,
    };

    await sgMail
      .send(msg)
      .then(() => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: false }));
      })
      .catch((error) => {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: true }));
      });
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: true }));
  }
};

export { handler as default, config };
