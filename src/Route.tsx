import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Daily } from "./Daily";

export const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "Daily", element: <Daily /> }
	
]);