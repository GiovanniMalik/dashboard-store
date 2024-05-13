import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="flex gap 2 min-h-screen">
      <Navigation />
      <Dashboard />
    </div>

  );
}
