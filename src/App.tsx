import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Footer } from "./components"
import { LatestNews } from "./pages"
import logo from './assets/logoFinanceSignal.png';
import { ArticlesProvider } from './context/ArticlesProvider';
import { Article } from './components/Article';
import { CategoryContent } from './pages/CategoryContent';

function App() {

  return (
    <>
      <img src={logo} alt="" className="h-40 mx-auto" />

      <ArticlesProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LatestNews />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/category/:categoryName" element={<CategoryContent />} />
            <Route path="/category/Ultimas Noticias" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      </ArticlesProvider>
    </>
  )
}

export default App
