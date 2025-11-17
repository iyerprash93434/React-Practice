import Header from "./components/Header";
import DonationButton from "./components/DonationButton";
import Footer from "./components/Footer";
const App = () => {
  const donateFn = () => {
    alert("Thankyou for your Donation");
   }
  return (
  
   <>
   <Header name="Prashant" age="20 years" />
   <Header name="Utkarsh" age="24 years" />
   <DonationButton onDonate={donateFn} />
   <Footer />
   </>
  );
}

export default App;