import { Link, Box, Grid, Typography } from "@mui/material";

export const Card = ({ search }) => {
  return (
    <Box>
      <Link href={search.html_url}>
        <Grid container direction="row" alignItems="stretch">
          <Grid
            sx={{ width: 150 }}
            component="img"
            item
            src={search.owner?.avatar_url}
            alt="logo"
          />
          <Grid componet="div" item>
            <Typography component="h2" variant="h4">
              {search.name}
            </Typography>
            <Typography component="h3" variant="p">
              {search.description}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
};
