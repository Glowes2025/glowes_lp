import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve possuir no mínimo dois caracteres.",
  }),
  email: z.string().email({
    message: "Digite um e-mail válido.",
  }),
  phone: z.string().optional(),
  comments: z.string().optional(),
});

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Formulário enviado:", data);
  };

  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Entre em contato conosco."
        subTitle="Contato"
        shape="shape_6"
      />
      <Spacing lg="75" md="60" />

      <section>
        <div className="container">
          <div className="row align-items-center cs_gap_y_45">
            <div className="col-lg-6">
              <h2 className="cs_fs_50">
                Venha conhecer <br />
                nosso trabalho!
              </h2>
              <div className="cs_height_55 cs_height_lg_30" />
              <ul className="cs_mp0 cs_contact_info">
                <li>
                  <h3 className="cs_fs_29 cs_semibold">E-mail:</h3>
                  <p className="mb-0">glowes.2025@gmail.com</p>
                </li>
                <li>
                  <h3 className="cs_fs_29 cs_semibold">Telefone:</h3>
                  <p className="mb-0">(13) 99133-6772</p>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="cs_contact_form_wrap">
                <div className="cs_gray_bg_3 cs_contact_form_bg" />

                <form
                  className="cs_contact_form"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <label className="cs_fs_21 cs_semibold cs_primary_color">
                    Nome completo
                  </label>
                  <input
                    {...form.register("name")}
                    placeholder="Digite o seu nome completo"
                    type="text"
                    className="cs_form_field"
                  />
                  {form.formState.errors.name && (
                    <p style={{ color: "red" }}>
                      {form.formState.errors.name.message}
                    </p>
                  )}

                  <div className="cs_height_38 cs_height_lg_25" />

                  <label className="cs_fs_21 cs_semibold cs_primary_color">
                    E-mail
                  </label>
                  <input
                    {...form.register("email")}
                    placeholder="Digite o seu e-mail"
                    type="email"
                    className="cs_form_field"
                  />
                  {form.formState.errors.email && (
                    <p style={{ color: "red" }}>
                      {form.formState.errors.email.message}
                    </p>
                  )}

                  <div className="cs_height_38 cs_height_lg_25" />

                  <label className="cs_fs_21 cs_semibold cs_primary_color">
                    Número de telefone
                  </label>
                  <input
                    {...form.register("phone")}
                    placeholder="Digite o número de seu telefone"
                    type="text"
                    className="cs_form_field"
                  />

                  <div className="cs_height_38 cs_height_lg_25" />

                  <label className="cs_fs_21 cs_semibold cs_primary_color">
                    Comentários
                  </label>
                  <textarea
                    {...form.register("comments")}
                    cols={30}
                    rows={5}
                    className="cs_form_field"
                  />

                  <div className="cs_height_38 cs_height_lg_25" />
                  <Button btnText="Enviar" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_0 cs_height_lg_80" />
      </section>
    </>
  );
}
