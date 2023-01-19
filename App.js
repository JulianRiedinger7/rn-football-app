import { Provider } from 'react-redux'
import { init } from './src/db'
import AppNavigator from './src/navigation'
import { store } from './src/store'

init()
	.then(() => console.log('DB Initializated'))
	.catch((err) => console.log('DB Failed', err))

export default function App() {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	)
}
