import { FC } from "react";
import { Link } from "react-router-dom";
interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <nav className="container max-w-5xl mx-auto px-6 py-2 w-full flex justify-between items-center">
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link
          className="text-md font-medium transition-colors hover:text-primary"
          to="/"
        >
          Public Page
        </Link>
        <Link
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
          to="/protected"
        >
          Protected Page
        </Link>
      </div>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link
          className="text-md font-medium transition-colors hover:text-primary"
          to="/login"
        >
          login
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
