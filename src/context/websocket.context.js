import { createContext, useContext } from "react";

export const WebSocketContext = createContext();

export const useWebSocketStatus = () => useContext(WebSocketContext);
