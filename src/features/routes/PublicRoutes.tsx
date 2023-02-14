import { Route, Routes } from 'react-router-dom';

import Error404 from '@/features/Error404';
import LandingPage from '@/features/public/LandingPage';
import AccessPage from '@/features/public/AccessPage';
import SheltersPage from '@/features/public/SheltersPage';
import ShelterDetails from '@/features/public/ShelterDetails';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/access' element={<AccessPage />} />
			<Route path='/shelters' element={<SheltersPage />} />
			<Route path='/shelters/:id' element={<ShelterDetails />} />
			<Route path='*' element={<Error404 />} />
		</Routes>
	);
};

export default PublicRoutes;
