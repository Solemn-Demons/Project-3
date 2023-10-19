import Nav from '../components/Nav'
const Home = () => {
  return (
    <div className="container">
      <Nav />
      <div>
        <section id="coffee">
          <h2>Welcome to Build a Book</h2>
          <p>
            A website designed to provide an essential tool for Writers to keep their stories and characters organized
          </p>
        </section>

        <section id="sugar">
          <img src="./client/src/img/Book.png" alt="A Brown Book with multiple tab labels" />
        </section>

        <section id="cloud">
          <p>Mew</p>
        </section>
      </div>
    </div>
  );
}
export default Home;

  