import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import RouterConfig from './navigation/RouterConfig';
=======
import RouterConfig from 'navigation/RouterConfig';
>>>>>>> 8ce27c4869524d9148a86ed9b7ff0d567c17c340

function App() {
	return (
		<div className='App font-roboto'>
			<Provider store={store}>
				<BrowserRouter>
					<RouterConfig />
				</BrowserRouter>
			</Provider>
		</div>
	);
}
export default App;
