export const contactTemplate = () => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Inquiry Received — Social Hardware</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f5f5f5;
        font-family: "Segoe UI", Arial, sans-serif;
        color: #333;
      }
      .container {
        max-width: 620px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 10px;
        padding: 32px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      }
      .logo {
        width: 170px;
        margin-bottom: 20px;
      }
      h2 {
        margin-top: 0;
        color: #fc6b03;
        font-size: 24px;
        margin-bottom: 16px;
      }
      .section {
        background: #fafafa;
        padding: 16px 20px;
        border-radius: 8px;
        border-left: 4px solid #fc6b03;
        margin: 24px 0;
      }
      .btn {
        display: inline-block;
        padding: 14px 26px;
        background: #fc6b03;
        color: #fff !important;
        font-weight: bold;
        border-radius: 8px;
        text-decoration: none;
        margin-top: 20px;
        font-size: 15px;
      }
      .footer {
        text-align: center;
        margin-top: 30px;
        font-size: 13px;
        color: #6b7280;
        line-height: 1.5;
      }
      .footer a {
        color: #6b7280;
        text-decoration: none;
      }
      .phone {
        font-size: 15px;
        font-weight: 600;
        color: #fc6b03;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <center>
        <img src="/logo1.png" alt="Social Hardware" class="logo" />
      </center>

      <h2>Thank You for Reaching Out</h2>

      <p>Hello User,</p>

      <p>
        Thank you for contacting <strong>Social Hardware</strong>. We have successfully received your inquiry.
      </p>

      <div class="section">
        Our team is reviewing your message and we will get back to you within
        <strong>24 hours</strong>.
      </div>

      <p>If your request is urgent, feel free to contact us directly:</p>

      <p class="phone">📞 <a href="tel:+917337743354">+91 7337743354</a></p>

      <center>
        <a href="https://www.socialhardware.in" class="btn">Visit Our Website</a>
      </center>

      <hr style="margin: 32px 0; border: none; border-top: 1px solid #ececec;" />

      <div class="footer">
        Warm regards,<br/>
        <strong>Social Hardware Team</strong><br/>
        <a href="https://www.socialhardware.in">www.socialhardware.in</a>
      </div>

    </div>
  </body>
  </html>
  `;
};
