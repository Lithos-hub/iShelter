import { Route, Routes } from 'react-router-dom';

import Error404 from '../Error404';
import LandingPage from '../public/LandingPage';
import AccessPage from '../public/AccessPage';
import SheltersPage from '../public/SheltersPage';
import ShelterDetails from '../public/ShelterDetails';

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
