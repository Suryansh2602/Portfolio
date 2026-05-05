// src/utils/whatsapp.ts

export const openWhatsApp = (service: string = "Consultancy") => {
  const phoneNumber = "9171525546"; 
  const message = `Hello! I'm interested in booking a ${service} session after seeing your portfolio.`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};