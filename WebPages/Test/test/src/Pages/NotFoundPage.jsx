import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">Home</Link>
    </>
  );
}
