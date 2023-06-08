import { Routes, Route } from "react-router-dom";

import Header from "components/Header";

import HomeScreen from "screens/HomeScreen/HomeScreen";
import ProfileScreen from "screens/ProfileScreen";
import Signin from "screens/Signin";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-grey">
      <Header />
      <main className="flex w-screen flex-col items-center pt-10">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile/:id" element={<ProfileScreen />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>
      <footer>76561198156850117</footer>
    </div>
  );
};

export default App;
