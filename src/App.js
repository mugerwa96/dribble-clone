import Filter from "./components/FilterLinks/Filter";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="bg-gray-100/70">
      <NavBar />
      {/* main__content */}
          <div className="mt-[3rem]">
            <Landing />
            <div className="md:max-w-5xl mx-auto">

            <Filter/>
            <Products/>
            </div>
          </div>
      {/* main__content */}
    </div>
  );
}

export default App;
