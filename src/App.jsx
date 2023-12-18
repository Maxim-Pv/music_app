import MainPage from "./pages/MainPage/MainPage";
import st from './global.module.scss';
import Playbar from "./components/Playbar/Playbar";

const App = () => (
  <div className={st.wrapper}>
    <MainPage />
    <Playbar />
  </div> 
)

export default App
