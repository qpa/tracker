import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { CreateItemPage } from './pages/CreateItemPage';
import { EditItemPage } from './pages/EditItemPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateItemPage />} />
        <Route path="/edit/:id" element={<EditItemPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
