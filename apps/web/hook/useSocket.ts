import { WS_URL } from "../app/config";
import { useState, useEffect } from "react";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMzE3MWEwMS1lMGUwLTQwZDUtOTc1Ni02NGFjMmI1NTc0MmYiLCJpYXQiOjE3NDMyNzcxODh9.Hlx161lNlqfcjLGzLPD96gYEav_KJ9H6BvwKIH21nRg'

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket | null>(null);
    
    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}/?token=${token}`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        };
        
    }, []);

    return { socket, loading};
}



