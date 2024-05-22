// implimenting different hooks
// 1 useState

import Card from "./components/Card";
import EffectUse from "./components/EffectUse";
import EffUse from "./components/EffUse";
import PassProps from "./components/PassProps";
import RefUse from "./components/RefUse";
import StateUse from "./components/StateUse";
import WidthHeight from "./components/WidthHeight";

function App() {
  return (
    <>
      <WidthHeight />
      <EffUse />
      <RefUse />
      <EffectUse />
      <Card />
      <StateUse />
      <PassProps name="Umar" />
    </>
  );
}
export default App;
