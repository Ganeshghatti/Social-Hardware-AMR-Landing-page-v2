"use server"
import { ContactEmail } from "../services/emails/contactEmail.js";



export async function submitHandler(formData) {
  if (!formData.get("email")) return;

  try {
    const email = formData.get("email");
    await ContactEmail(email);
    return {success : true};    
  } catch (error) {
    console.log(error.message);
  }
}