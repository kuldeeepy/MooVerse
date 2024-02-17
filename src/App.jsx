import Row from "./Components/Rows/Row";
import requests from "./Endpoints";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Footer />
      </div>
    </>
  );
}

export default App;
