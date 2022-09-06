import Title from "./components/Title";
import Footer from "./components/Footer";
import store from "./redux/store";
import {Provider} from "react-redux";
import CardPicker from "./components/CardPicker";


function App() {
  return (
      <Provider store={store}>
            <Title/>
             <CardPicker/>
            <Footer/>
    </Provider>
  );
}

export default App;
