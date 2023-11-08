import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <p>
        <Link to="/result">result</Link>
      </p>
    </div>
  );
};

export default Home;
