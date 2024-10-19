import React from 'react';
import { Bell, BarChart2 } from 'lucide-react';
import SidebarItem from './sidebarItems';

const Sidebar = () => (
    <div className="w-full lg:w-64 h-auto lg:h-screen bg-white border-r p-4">
        <div className="flex items-center mb-8">
            <img src="/mark.png" alt="User" className="w-10 h-10 rounded-full mr-3" />
            <div>
                <h2 className="font-bold text-sm md:text-base">Mark Wood</h2>
                <p className="text-xs md:text-sm text-gray-500">marki@demo.com</p>
            </div>
        </div>
        <nav>
            <SidebarItem icon={<BarChart2 size={20} />} text="Dashboard" active />
            <SidebarItem icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1F1F22" stroke-width="1.5" />
                <path d="M8 16V12" stroke="#1F1F22" stroke-width="1.5" stroke-linecap="round" />
                <path d="M12 16V10" stroke="#1F1F22" stroke-width="1.5" stroke-linecap="round" />
                <path d="M16 16V8" stroke="#1F1F22" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            } text="Products" />
            <SidebarItem icon={<Bell size={20} />} text="Notifications" />
            <SidebarItem icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.3552 22 21.7272 17.7905 21.9877 12.4999C22.0013 12.2241 21.7761 12 21.5 12H12.5C12.2239 12 12 11.7761 12 11.5V2.5C12 2.22386 11.7759 1.9987 11.5001 2.01228C6.20948 2.27276 2 6.64479 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1F1F22" stroke-width="1.5" />
                <path d="M21.9846 9.49991C21.7367 5.47997 18.52 2.26332 14.5001 2.01538C14.2245 1.99838 14 2.22386 14 2.5V9.5C14 9.77614 14.2239 10 14.5 10H21.5C21.7761 10 22.0016 9.77553 21.9846 9.49991Z" stroke="#1F1F22" stroke-width="1.5" />
            </svg>
            } text="Analytics" />
            <SidebarItem icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10M3 10L4.58555 4.45056C4.83087 3.59196 5.61564 3 6.5086 3H12M3 10H12M21 10L19.4144 4.45056C19.1691 3.59195 18.3844 3 17.4914 3H12M21 10H12M12 3V10" stroke="#1F1F22" stroke-width="1.5" />
                <path d="M5.5 17.5H12" stroke="#1F1F22" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            } text="Inventory" />
            <div className='mt-[460px]'>
                <SidebarItem icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L19 12M19 12L17 10M19 12L17 14M15 16L15 19C15 20.1046 14.1046 21 13 21L7 21C5.89543 21 5 20.1046 5 19L5 5C5 3.89543 5.89543 3 7 3L13 3C14.1046 3 15 3.89543 15 5L15 8" stroke="#1F1F22" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                } text="Logout" />
            </div>
        </nav>
    </div>
);

export default Sidebar;
