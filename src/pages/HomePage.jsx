import Title from '../components/Title/Title';
import s from '../styles/pages/HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <section className={s.homeSection}>
        <div className="container">
          <Title>
            {
              'Welcome to your Phonebook, where staying connected is made easy 🙌. To get started, simply Sign Up  ✌ to create a new account, or Log In ✅  if you already have one. Let`s make managing your contacts a breeze!'
            }
          </Title>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
