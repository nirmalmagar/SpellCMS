import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/auth/login");
  };
  return (
    <div>
      <div className="relative w-screen h-screen">
        <img
          className="w-full h-screen object-cover"
          src="/assets/blog-pic.jpg"
          alt="home page bg image"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10">
          <Container>
            <div className="float-right flex mt-4 gap-x-8 text-white font-semibold">
              <button
                onClick={handleLoginPage}
                className="cursor-pointer hover:bg-blue-800 bg-blue-500 px-4 py-1 rounded-md"
              >
                Login
              </button>
              <button className="cursor-pointer hover:bg-blue-800 bg-blue-500 px-4 py-1 rounded-md">
                Sigup
              </button>
            </div>
          </Container>
          <div className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
            <p className="lora-font text-4xl font-semibold">SPELL CMS</p>

            <ul className="flex ml-10 gap-x-16 text-lg tracking-wider font-medium my-6 cursor-pointer font-sans">
              <li className="hover:text-blue-800">About</li>
              <li className="hover:text-blue-800">Catalog</li>
              <li className="hover:text-blue-800">Services</li>
              <li className="hover:text-blue-800">Contacts</li>
            </ul>
            <div className="mt-20">
              <div className="mb-14">
                <input
                  className="px-2 py-3 border-black bg-gray-100 text-black rounded-lg w-[400px]"
                  name="query"
                  type="text"
                  placeholder="Search Blogs...."
                />
              </div>
              <h1 className="text-4xl font-medium mb-4 shadow-xl">
                There are more than 100+ Blogs Users
              </h1>
              <span className="shadow-xl text-md text-slate-200">
                Welcome to Content management system. Create a beautiful blog
                that fits your style.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
