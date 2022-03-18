import Header from "./lib/components/Header/Header";
import TechStackInput from "./lib/components/TechStack/TechStackInput";
import TechStacks from "./lib/components/TechStack/TechStacks";

const App = () => {
  return (
    <>
      <Header />
      <TechStacks />
      <TechStackInput />
    </>
  );
};

export default App;
