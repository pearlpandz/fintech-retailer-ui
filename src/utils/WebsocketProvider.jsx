import { useEffect, useRef, useState } from "react";
import { WebSocketContext } from "../context/websocket.context";

export function WebsocketProvider({ children }) {
    const [status, setStatus] = useState("connecting"); // 'connected', 'disconnected'
    const wsRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            setStatus("connected");
        };

        ws.onmessage = (event) => {
            let message;
            try {
                message = JSON.parse(event.data);
            } catch {
                console.error("Invalid JSON:", event.data);
                return;
            }
            switch (message.topic) {
                case "user_created":
                    console.log("Connected:", message.event);
                    break;
                default:
                    console.warn("Unknown event:", message);
            }
        };

        ws.onclose = () => setStatus("disconnected");

        ws.onerror = (err) => {
            console.error("WebSocket error:", err);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ status, socket: wsRef.current }}>
            {children}
        </WebSocketContext.Provider>
    );
}