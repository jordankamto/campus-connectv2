import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export function Navbar(){

    const handleLogout = () => {
      localStorage.removeItem('token');
      // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
      // Utilisez useHistory si vous utilisez react-router-dom pour la navigation
      window.location.href = '/login'; // Redirige vers la page de connexion
    };

    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return(
      <div className="bg-white flex flex-col w-full">
  <div className="border py-3 px-3">
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src="/src/assets/logo.svg" className="size-10" alt="logo campus connect" />
        <span className="ml-2 font-semibold text-[#252C32]">CampusConnect</span>
      </div>
      <div className="ml-20 flex flex-1 gap-x-3">
        <input
          type="text"
          className="w-3/4 rounded-md border border-[#DDE2E4] px-3 py-2 text-sm focus:outline-none focus:border-slate-500"
          placeholder="Rechercher des défis, des solutions ou des étudiants..."
        />
      </div>
      <div className="ml-2 flex items-center space-x-4">
        
        
        <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-slate-500 py-2 px-4 text-white hover:bg-opacity-50">
          <img src="/src/assets/publish.svg" className="size-6" alt="icone publier" />
          <span className="text-sm font-medium">Partager vos Défis</span>
        </div>
        <Link to="/login">
          <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
            <span onClick={handleLogout} className="text-sm font-medium">Deconnexion</span>
          </div>
        </Link>
        <div className="flex justify-center px-5">
          <a href="#">
            <img
              className="h-10 w-10 bg-white p-0 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </a>
          <span className="text-sm font-medium py-2 px-2">{username}</span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}