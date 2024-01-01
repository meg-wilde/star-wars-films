import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

//the API uses a different number in the URL than the episode_id
//to make sure you get the right film URL to pass to the details page
//extract the last 2 digits from the URL to get the URL ID
const extractFilmId = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

const Index = (props) => (
  <Layout>
    <h1>Star Wars Films</h1>
    <img src="/static/star-wars.png" alt="star wars" />
    <ul className="film-list">
      {/* map the films and create a link to open the film details */}
      {props.films.map(({ film }) => (
        <li key={film.episode_id} className="film-item">
          <div className="film-details">
            <p>
              <b>Title: </b>
              {film.title} <br></br>
              <b>Release Date: </b>
              {film.release_date}
            </p>
            <Link href={`/details?id=${extractFilmId(film.url)}`}>
              <button>See Details</button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1 {
        margin-bottom: 20px;
        margin-top: 20px;
        text-align: center;
        color: white;
      }

      img {
        height: 20vh;
        display: block;
        margin: auto;
      }

      .film-list {
        list-style: none;
        padding: 0;
      }

      .film-item {
        margin-bottom: 10px;
        margin-top: 10px;
        color: white;
      }

      .film-details {
        background-color: DimGrey;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button {
        background-color: black;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
      }

      button:hover {
        background-color: #0056b3;
      }
    `}</style>
  </Layout>
);

//get the information to show on the page from the API
Index.getInitialProps = async function () {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  //show the count of results to the console
  console.log(`Show data fetched. Count: ${data.results.length}`);

  return {
    films: data.results.map((film) => ({ film })),
  };
};

export default Index;
