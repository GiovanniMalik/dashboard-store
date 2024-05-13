import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function () {

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const data = [
  {
    "name": "Janeiro",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Fevereiro",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Março",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Abril",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Maio",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Junho",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Julho",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

    return (
    <main className="p-5 bg-white m-2 grow rounded-3xl">
        <div class="flex gap-5">
            <div
                className="grow w-1/2 bg-gray-200 flex items-center gap-3 text-primary p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                <div>
                    <h2 className="font-bold text-2xl leading-4">R$ 345,00</h2>
                    <h3>Profity Today</h3>
                </div>
            </div>
            <div
                className="grow w-1/2 bg-purple-200 flex items-center gap-3 text-primary p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                <div>
                    <h2 className="font-bold text-2xl leading-4">492</h2>
                    <h3>Orders this month</h3>
                </div>
            </div>
        </div>
        <div className="w-full" style={{height: '50vh'}}> 
            {domLoaded && (
            <ResponsiveContainer width={700} height="80%">
                <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" style={{fill: '#aaa', fontSize: '.9rem'}} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
            )}
            
        </div>
    </main>
    );
}