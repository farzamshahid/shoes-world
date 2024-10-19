const SidebarItem = ({ icon, text, active }) => (
    <div className={`flex items-center p-2 mb-2 rounded ${active ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
        {icon}
        <span className="ml-3">{text}</span>
    </div>
);
export default SidebarItem;