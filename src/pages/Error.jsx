import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <section>
      <div>
        <h1>ooops! Dead end</h1>
        <Link to="/"> Back to Home Page</Link>
      </div>
    </section>
  );
};
export default Error;
