const readEnv = (value) => (typeof value === "string" ? value.trim() : "");

export const emailJsConfig = {
  serviceId: readEnv(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  templateId: readEnv(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  publicKey: readEnv(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
};

export const isEmailJsConfigured = Object.values(emailJsConfig).every(Boolean);
