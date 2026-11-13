// src/utils/whatsapp.ts

export const openWhatsApp = (service: string = "Consultancy") => {
  // wa.me needs the full international number: country code (91) + 10-digit mobile
  const phoneNumber = "919171525546";
  const message = `Hello! I'm interested in booking a ${service} session after seeing your portfolio.`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};