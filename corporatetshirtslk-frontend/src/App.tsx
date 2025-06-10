import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loading, setLoading] = useState(true);

  const launchDate = useMemo(() => new Date('2025-06-23T12:00:00'), []);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearTimeout(loadTimeout);
      clearInterval(interval);
    };
  }, [launchDate]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mb-4"></div>
        <p className="text-lg font-medium flex items-center">
          Loading
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </p>

      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">
        Upcoming <span className="text-blue-600">Corporatet Shirts LK</span> Site
      </h1>
      <div className="text-2xl font-semibold">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>
    </div>
  );
}

export default App;
