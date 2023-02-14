import { Route, Routes } from 'react-router-dom';

import Error404 from '@/features/Error404';
import AdminPage from '@/features/admin/adminPage';

const AdminRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<AdminPage />} />
			<Route path='*' element={<Error404 />} />
		</Routes>
	);
};

export default AdminRoutes;
