import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

const Homepage = () => {
  return (
    <div className="flex-1 min-h-0 p-3">
      <div
        className="grid max-h-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 grid-rows-auto gap-4 lg:grid-rows-2"
      >
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg h-full min-h-0">
          <CardList title="Latest Transactions" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppPieChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <TodoList />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppAreaChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Popular Content" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
