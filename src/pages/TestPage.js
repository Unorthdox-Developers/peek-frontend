import AtomicDesignExampleTemplate from "@templates/AtomicDesignExampleTemplate";
import LoginCard from "@components/organisms/LoginCard";
import DynamicList from "@components/organisms/DynamicList";

function TestPage() {
  return (
    <AtomicDesignExampleTemplate left={<LoginCard />} right={<DynamicList />} />
  );
}

export default TestPage;
