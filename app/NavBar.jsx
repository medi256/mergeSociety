import Link from "next/link";

const NavBar = () => {
  return (
    <header className="header-homepage">
      <div className="logo-container">
        <div className="logo-home">
          <Link href="/">MergeSociety</Link>{" "}
        </div>
        {/* <button className="btn-signIn">Sign In</button> */}
      </div>

      <nav className="home-nav">
        <ul className="home-list">
          {["HTML", "CSS", "JavaScript", "React", "video", "Blog"].map(
            (item) => (
              <li key={item}>
                <Link className="list-home" href={`/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;