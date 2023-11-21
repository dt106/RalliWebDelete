import Footer from "../../organisms/Footer.jsx/Footer";
import Header from "../../organisms/Header/Header";
const DefaultPage = ({ children }) => {
  return (
    <div className="default-container">
      <div className="content">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultPage;
