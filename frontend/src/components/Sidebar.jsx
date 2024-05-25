import { Link } from "react-router-dom"
export function Sidebar() {

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
    // Utilisez useHistory si vous utilisez react-router-dom pour la navigation
    window.location.href = '/login'; // Redirige vers la page de connexion
  };

    return (
      
        <div className="flex flex-row bg-gray-100 absolute left-0 h-screen border-solid border-2">
  <div className="flex flex-col w-56 bg-white rounded-r-sm overflow-hidden">
    <ul className="flex flex-col py-4 ml-5">
      <li>
        <Link to={"/"}>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home">
            <img src="/src/assets/feed.svg" className="size-6" alt="icone fils" /></i></span>
          <span className="text-sm font-medium">Fil d'actualité</span>
        </a>
        </Link>
      </li>
      <li>
        <Link to={"/defis"}>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <img src="/src/assets/defis.svg" className="size-6" alt="icone defis" /><i className="bx bx-music"></i></span>
          <span className="text-sm font-medium">Défis actuels</span>
        </a>
        </Link>
      </li>
      <li>
        <Link to={"/solutions"}>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <img src="/src/assets/solutions.svg" className="size-6" alt="icone solutions" /><i className="bx bx-drink"></i></span>
          <span className="text-sm font-medium">Solutions proposées</span>
        </a>
        </Link>
      </li>
      <li>
        <Link to={"/ranking"}>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <img src="/src/assets/classements.svg" className="size-6" alt="icone classements" /><i className="bx bx-shopping-bag"></i></span>
          <span className="text-sm font-medium">Classement</span>
        </a>
        </Link>
      </li>
      <li>
        <Link to={"/profile"}>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <img src="/src/assets/profil.svg" className="size-6" alt="icone profil" /><i className="bx bx-chat"></i></span>
          <span className="text-sm font-medium">Profil</span>
        </a>
        </Link>
      </li>
      <li>
        <Link to={"/messages"}>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <img src="/src/assets/messages.svg" className="size-6" alt="icone messages" /><i className="bx bx-user"></i></span>
          <span className="text-sm font-medium">Messages</span>
        </a>
        </Link>
      </li>
      <li>
        <Link to={"/notifications"}>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <img src="/src/assets/notifications.svg" className="size-6" alt="icone notifications" /><i className="bx bx-bell"></i></span>
          <span className="text-sm font-medium">Notifications</span>
          {/* <span className="ml-auto mr-14 text-xs bg-red-100 rounded-full px-3 py-px text-red-500">5</span> */}
        </a>
        </Link>
      </li>
      <li>
        
        <Link to={"/login"} className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-slate-300 hover:rounded-md transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <img src="/src/assets/logout.svg" className="size-6" alt="icone deconnexion" /><i className="bx bx-log-out"></i></span>
          <span onClick={handleLogout} className="text-sm font-medium">Deconnexion</span>
        </Link>
      </li>
    </ul>
  </div>
</div>
    
    )
}