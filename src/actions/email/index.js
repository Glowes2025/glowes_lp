import { api } from "..";

export const enviarEmail = async (data) => {
  return await new api("Contato/RegistrarContato", data).post();
};
