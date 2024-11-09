import { observer } from "mobx-react";

import Header from "./Components/Header/Header";
import MainDetails from "./Components/MainDetails/MainDetails";
import EpisodeModal from "./Components/Modal/EpisodeModal";

function App() {
  return (
    <div>
      <Header />
      <MainDetails />
      <EpisodeModal />
    </div>
  );
}

export default observer(App);
