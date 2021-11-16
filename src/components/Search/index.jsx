import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Search = ({ setSearch }) => {
  const formSchema = yup.object().shape({
    repository: yup
      .string()
      .required(
        "Burque um repositório no formato  nome-do-usuário/repositório "
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => setSearch(data.repository);

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <input
        placeholder="Digite o nome do repositório"
        {...register("repository")}
      />
      <div>{errors.repository?.message}</div>
      <button type="submit">Pesquisar</button>
    </form>
  );
};
