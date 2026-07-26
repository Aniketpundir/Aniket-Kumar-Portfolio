import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-mono gradient-text text-6xl font-bold sm:text-8xl">404</p>
      <h1 className="font-display mt-4 text-xl font-semibold sm:text-2xl">
        This route doesn't exist.
      </h1>
      <p className="mt-2 max-w-sm text-muted">
        The page you're looking for was moved, renamed, or never existed.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  );
}
