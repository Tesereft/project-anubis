import './App.css';
import Sidebar from './components/partials/Sidebar'
import TopBar from './components/partials/TopBar';
import SearchBar from './components/partials/SearchBar';

function App() {
  return (
    <>
    <div className="anubis">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <TopBar />
      </div>
      <div className="fixed">
        <SearchBar />
      </div>
    </div>
    </>
  );
}

export default App;
