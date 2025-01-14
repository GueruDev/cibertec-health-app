import { HashRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { v4 as uuid } from 'uuid'
import Registro from '../pages/Registro'
import InicioSesion from '../pages/InicioSesion'
import { SnackbarProvider } from 'notistack'
import ChangePassword from '../pages/ChangePassword'
import { useAuth } from '../auth/useAuth'
import SolicitarCambioContrasena from '../pages/SolicitarCambioContrasena'

const routesPublic = [
  {
    path: '*',
    element: <InicioSesion />,
  },
  {
    path: '/registrate',
    element: <Registro />,
  },
  {
    path: '/solicitarCambioContrasena',
    element: <SolicitarCambioContrasena />,
  },
]

const routesPrivate = [
  {
    path: '*',
    element: <Dashboard />,
  },
  {
    path: '/cambiarContrasena',
    element: <ChangePassword />,
  },
]

const AppRoutes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <SnackbarProvider maxSnack={3}>
      <HashRouter>
        <Routes>
          {isAuthenticated
            ? routesPrivate.map((route) => (
                <Route path={route.path} element={route.element} key={uuid()} />
              ))
            : routesPublic.map((route) => (
                <Route path={route.path} element={route.element} key={uuid()} />
              ))}
        </Routes>
      </HashRouter>
    </SnackbarProvider>
  )
}

export default AppRoutes
