import { Route, Routes } from 'react-router-dom';

import SuperAdminPage from '../superadmin/SuperadminPage';
import Error404 from '../Error404';

const SuperadminRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<SuperAdminPage />} />
			<Route path='*' element={<Error404 />} />
		</Routes>
	);
};

export default SuperadminRoutes;
