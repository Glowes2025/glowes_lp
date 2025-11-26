import { toast } from "react-toastify";
import { config } from "../appsettings";

export class api {
  constructor(url, body) {
    this.url = url;
    this.body = body;
  }

  async post() {
    let data = null;
    try {
      const response = await fetch(`${config.apiUrl}/${this.url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.body),
      });

      data = await response.json();
      console.log("res", response);

      if (data.sucesso) {
        toast.success(data.mensagem);
      } else {
        toast.error(data.mensagem);
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro desconhecido, por favor tente novamente!");
    }

    return data;
  }
}
