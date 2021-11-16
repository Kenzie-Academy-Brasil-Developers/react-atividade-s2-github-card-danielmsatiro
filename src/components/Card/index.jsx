export const Card = ({ search }) => {

  return (
    <a href={search.html_url}>
      <img src={search.owner?.avatar_url} alt="logo" />
      <div>
        <h1>{search.name}</h1>
        <p>{search.description}</p>
      </div>
    </a>
  );
};
