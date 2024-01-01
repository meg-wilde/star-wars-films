import Link from "next/link";

//simple header with a link to return to home
const Header = () => (
  <div>
    <Link href="/">
      <p>Home</p>
    </Link>
    <style jsx>{`
      div {
        background-color: black;
        padding: 2px;
        display: flex;
        height: 100%;
        border-radius: 5px;
        border: 1px solid white;
      }

      p {
        color: white;
        text-decoration: none;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 15px;
      }

      p:hover {
        color: grey;
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Header;
