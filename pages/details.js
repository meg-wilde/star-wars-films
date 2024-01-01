import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";

const Details = ({ film }) => (
  <Layout>
    <h3>Film Details</h3>
    {/* star wars logo image */}
    <img src="/static/star-wars.png" alt="star wars" />
    {film ? (
      <>
        {/* render the film details */}
        <h1>{film.title}</h1>
        <p>
          <b>Director:</b> {film.director}
        </p>
        <p>
          <b>Producer:</b> {film.producer}
        </p>
        <p>
          <b>Release Date:</b> {film.release_date}
        </p>
        <p>
          <b>Opening Crawl:</b> {film.opening_crawl}
        </p>
      </>
    ) : (
      <p>Loading...</p>
    )}
    <style jsx>{`
      h1,
      h3 {
        margin-bottom: 20px;
        margin-top: 20px;
        text-align: center;
        color: white;
      }
      p {
        color: white;
      }
      img {
        height: 20vh;
        display: block;
        margin: auto;
      }
    `}</style>
  </Layout>
);

//get the film details by getting the id from the index.js page and passing it into the URL
Details.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.dev/api/films/${id}/`);
  const film = await res.json();

  console.log(`Film data fetched: ${film.title}`);

  return {
    film,
  };
};

export default Details;
