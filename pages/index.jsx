import Header from "../src/components/header/Header";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import Collector from "../src/components/collectors/Collector";
import TopCollectors from "../src/components/collectors/TopCollectors";
export default function Index() {
  return (
    <div>
      <Header />
      <CollectorColumn />
      <Collector />
      <TopCollectors />
    </div>
  );
}
