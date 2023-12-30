import bcrypt from "bcrypt";

// Función para generar un hash de contraseña
export const generarHashPassword = async (password) => {
  const saltRounds = 10; // Número de rondas de sal para bcrypt
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

// Función para verificar la contraseña
export const verificarPassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};
