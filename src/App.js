import Title from "./components/Title";
// import Colours from "./components/Colours";
// import Numbers from "./components/Numbers";
// import Card from "./components/Card";
// import {selectCard, selectNumber} from "./redux/drawerSlice";
import Footer from "./components/Footer";
import store from "./redux/store";
import {Provider, useSelector} from "react-redux";
import CardPicker from "./components/CardPicker";
import express from "express"
const app = express();

const path = require('path');
const port = process.env.PORT || 5000


if(process.env.NODE_ENV === "production"){
    app.use(express.static('build'))
    app.get('*',(req,res)=>{
        req.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ',port)
})


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
