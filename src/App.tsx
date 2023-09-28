import { Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ManageCurrency } from './pages/currency/ManageCurrency';
import { Products } from './pages/products/Products';
import { APIProvider } from './services/api/APIProvider';
import { CurrencyProvider } from './services/currency/CurrencyProvider';

function App() {
  return (
    <main className="text-primary-std">
      <Suspense fallback={<div>Loading...</div>}>
        <APIProvider>
          <CurrencyProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <div>
                      <ManageCurrency />
                      <Outlet />
                    </div>
                  }
                >
                  <Route index element={<Products />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CurrencyProvider>
        </APIProvider>
      </Suspense>
    </main>
  );
}

export default App;
