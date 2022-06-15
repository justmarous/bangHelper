import Title from "./components/Title";
import Colours from "./components/Colours";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import store from "./redux/store";
import {Provider, useSelector} from "react-redux";
import Card from "./components/Card";
import {selectCard, selectNumber} from "./redux/drawerSlice";
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
