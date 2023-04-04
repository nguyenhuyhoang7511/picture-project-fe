import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export const MainRouter = () => {
   return (
      <Suspense>
         <Routes>
            {routes.map(({ component, path, layout: Layout }, index) => {
               return (
                  <Route
                     key={index}
                     path={path}
                     element={Layout ? <Layout>{component}</Layout> : component}
                  />
               );
            })}
         </Routes>
      </Suspense>
   );
};
