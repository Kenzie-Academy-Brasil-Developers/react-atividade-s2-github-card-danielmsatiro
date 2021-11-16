import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import toast from "react-hot-toast";

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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .get(`/repos/${data.repository}`)
      .then((response) => setSearch(response.data))
      .catch((err) => {
        toast.error("Repositório não encontrado");
      });
    reset();
  };

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
