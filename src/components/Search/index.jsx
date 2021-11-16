import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import toast from "react-hot-toast";
import { Button, Grid, TextField } from "@mui/material";

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
    <Grid
      container
      direction="row"
      alignItems="stretch"
      component="form"
      sx={{ mt: 2 }}
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <TextField
        item
        error={!!errors.repository?.message}
        label="Digite o nome do repositório"
        variant="outlined"
        {...register("repository")}
        helperText={errors.repository?.message}
      />

      <Button item variant="contained" type="submit">
        Pesquisar
      </Button>
    </Grid>
  );
};
