import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <>
        <header className="flex align-items-center justify-content-between p-5 bg-red-500">
            <h1 className="text-white">logo</h1>
          <nav>
            <ul className="flex list-none gap-4">
              <li>
                <Link to={"/"} className="text-white">Home</Link>
              </li>
              <li>
                <Link to={"/sobre"} className="text-white">Sobre</Link>
              </li>
              <li>
                <Link to={"/contato"} className="text-white">Contato</Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    </>
  );
}

export default Header;
