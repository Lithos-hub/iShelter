import { Navigate, Route, Routes } from 'react-router-dom';

import Spinner from '@/components/Spinner/Spinner';
import SuperadminRoutes from '@/features/routes/SuperadminRoutes';
import PublicRoutes from '@/features/routes/PublicRoutes';
import AdminRoutes from '@/features/routes/AdminRoutes';
import { useGetUserQuery } from '@/services/apis';

const App = () => {
	const { data: user, isLoading } = useGetUserQuery();

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<Routes>
					{user && user.role === 'super' ? (
						<>
							<Route path='*' element={<Navigate to='/superadmin/home' />} />
							<Route path='/superadmin/*' element={<SuperadminRoutes />} />
						</>
					) : user?.role === 'admin' ? (
						<>
							<Route path='*' element={<Navigate to='/admin/home' />} />
							<Route path='/admin/*' element={<AdminRoutes />} />
						</>
					) : user?.role === 'staff' ? (
						<>
							<Route path='/app/*' element={<Navigate to='/' />} />
							<Route path='/*' element={<PublicRoutes />} />
						</>
					) : (
						!user && (
							<>
								<Route path='/admin/*' element={<Navigate to='/' />} />
								<Route path='/*' element={<PublicRoutes />} />
							</>
						)
					)}
				</Routes>
			)}
		</>
	);
};

export default App;
