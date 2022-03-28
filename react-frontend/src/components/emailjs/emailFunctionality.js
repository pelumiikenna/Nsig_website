import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;

export const emailJs = async (messageDetails) => {
  return await emailjs.send(serviceId, templateId, messageDetails, userId);
};
