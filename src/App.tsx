import './App.css'
import LoginWindow from './contents/login/LoginContent';
import TodoList from './contents/todo-list/TodoList.tsx';
import DefaultWindow from './windows/default-window/DefaultWindow';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					
					<Route path='/' element={<Navigate to='/login' replace />} />

					<Route path='/login' element={
						<DefaultWindow content={
							<LoginWindow />
						} />
					} />

					<Route path='/todo-list' element={
						<DefaultWindow content={
							<TodoList />
						} />
					} />

				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
