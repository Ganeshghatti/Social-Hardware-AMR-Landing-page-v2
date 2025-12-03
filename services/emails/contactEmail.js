import { transporter } from "../../config/emailconfig.js";
import { contactTemplate } from "../templates/contactTemplate.js";

export const ContactEmail = async (email) => {
  try {
    await transporter.verify();
    const mailOptions = {
      from: "Social Hardware <no-reply@socialhardware.in>",
      to: email,
      cc: "ganesh@socialhardware.in, cameron@socialhardware.in",
      subject: "Thanks for contacting Social Hardware!",
      html: contactTemplate(),
    };

    const response = await transporter.sendMail(mailOptions);
    return { success: true, response };

  } catch (error) {
    console.error("Contact email send error:", error);
    return { success: false, error: error.message };
  }
};
