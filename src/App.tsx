import { Provider } from "react-redux";
import "./App.css";
import { Home } from "./pages/Home";
import LayoutContainer from "./styled-components";
import store from "./redux/store";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </div>
    </Provider>
  );
}

export default App;
