import { useRoutes } from 'react-router-dom'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
	return useRoutes(routes)
}

export default App
