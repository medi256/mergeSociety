import CourseNavLinks from "./CourseNavLinks";

const App = () => (
  <div>
    <header>
      <h1 className="head">
        Learn Web Development
        <span className="icon">
          <i className="fa-solid fa-globe"></i>
        </span>
      </h1>
      <div className="image-and-discover">
        <div className="discover">
          <h3>
            Discover additional learning resources by clicking on these images
          </h3>
        </div>
        <h3 className="more"> Discover</h3>
        <div className="other-learning">
          <div>
            <a
              href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiDrp-ZytqEAxXak4MHHXDRDzkYABAAGgJlZg&ase=2&gclid=CjwKCAiA_5WvBhBAEiwAZtCU77ouNXQaFa3ddmn4mFKt5ngV02x7gYAO47kDRjaY6ZmMkVWTnhCnbBoC10cQAvD_BwE&ei=o7rlZaCrMu2M9u8P8raY6A0&ohost=www.google.com&cid=CAESVuD2W83ON70uqK7VBk3YjWlWabs7fSCSfOMFY6Y-aOJuvjKS871eBuL2cwNeEDGuKzbVJtdj_VlzTjWNuaY2pLGXCNccinDfGOxMqkd1mEIeTboX-VTa&sig=AOD64_0MdCsSiweIBlJPtP4KuhTLIBC4xg&q&sqi=2&nis=4&adurl&ved=2ahUKEwjgiJmZytqEAxVthv0HHXIbBt0Q0Qx6BAgMEAE"
              target="_parent"
            >
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712396970/codecademy_nvkv5b.png"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div>
            <a href="https://www.edx.org" target="_parent">
              <img src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397618/edx_hbuzrb.png" />
            </a>
          </div>
          <div>
            <a href="https://www.freecodecamp.org" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397617/freecode_c7ghce.png"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div>
            <a href="https://www.geeksforgeeks.org" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397617/geeks_ialhpl.jpg"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div>
            <a href="https://developer.mozilla.org/en-US/" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397617/MDN_xbkrjv.png"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div>
            <a href="https://www.programming-hero.com" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397617/programmingHero_czm3ss.jpg"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div>
            <a href="https://www.sololearn.com" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397618/sololearn_tqgxv4.png"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div>
            <a href="https://www.udemy.com" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397617/udemy_qxvl4l.jpg"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div>
            <a href="https://www.w3schools.com" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397617/w3schools_q8ntsz.png"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
          <div className="lost-logo2">
            <a href="https://www.alxafrica.com" target="_parent">
              <img
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1712397618/alx_k0njil.jpg"
                alt="this is a logo for alx learning platform"
              />
            </a>
          </div>
        </div>
      </div>
      <CourseNavLinks />
    </header>
  </div>
);

export default App;
