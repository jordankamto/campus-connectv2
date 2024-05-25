import React from "react";

const userData = [
  {
    id: 1,
    name: "Jordan Kamgaing",
    profilePic: "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-1/337398078_170800885782961_7452211607643385529_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7N4-zLRi3duKb0qCb_g9IMYmDLxOz93gxiYMvE7P3eCIhluSpeceEDnU8UOENGx4f8k4758U02qMCNgmjXkBR&_nc_ohc=hSPqublXSKcQ7kNvgHnojRE&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AYB8S2w6Xorgj9r57qb8mwhwDWkaHZjN0fhBBtY-_ABeHg&oe=66553B6D",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 2,
    name: "Tomba Marco",
    profilePic: "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t1.6435-1/37951075_296394311111343_567372777598746624_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqxlTtQRpPS-a4FjXUWKybOZw466Q8lkY5nDjrpDyWRsR3_SscKoz9cSil2hwvljBmlqYJm55KwGSIEJPJ2CN-&_nc_ohc=2zlQCAyBxVQQ7kNvgH26le3&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AYCODxmZngb9dxG-XX1WQKCYAR7u_QO2VCHpYcRjQLVcHQ&oe=6676D75D",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 3,
    name: "Amina Diallo",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 4,
    name: "Lucien Mendy",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 5,
    name: "Fatima Koulibaly",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 6,
    name: "Pierre Nguema",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 7,
    name: "Marion Tchoumbou",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 8,
    name: "Koffi Adebayo",
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 9,
    name: "Zara Ouattara",
    profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
  {
    id: 10,
    name: "Seydou Traoré",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
    posts: Math.floor(Math.random() * 20) + 1,
    interactions: Math.floor(Math.random() * 500) + 50,
    push: Math.floor(Math.random() * 1000) + 100,
  },
];


const Ranking = () => {
  return (
    <div className="container ml-72 mt-10 px-4">
      <h1 className="text-3xl font-semibold mb-4">Classement des Utilisateurs</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Votre Classement</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img src="https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-1/337398078_170800885782961_7452211607643385529_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7N4-zLRi3duKb0qCb_g9IMYmDLxOz93gxiYMvE7P3eCIhluSpeceEDnU8UOENGx4f8k4758U02qMCNgmjXkBR&_nc_ohc=hSPqublXSKcQ7kNvgHnojRE&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AYB8S2w6Xorgj9r57qb8mwhwDWkaHZjN0fhBBtY-_ABeHg&oe=66553B6D" alt="Profile" className="h-16 w-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Jordan Kamgaing</h3>
                <p className="text-gray-600">Nombre de Posts: 10</p>
                <p className="text-gray-600">Interactions: 230</p>
                <p className="text-gray-600">Push Totale: 500</p>
                {/* Afficher d'autres statistiques ici */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Classement Global</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre de Posts</th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interactions</th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Push Totale</th>
              {/* Ajoutez d'autres en-têtes de colonnes pour d'autres statistiques */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.map((user) => (
              <tr key={user.id}>
                <td className="px-3 py-4 whitespace-nowrap">
                  <img src={user.profilePic} alt="Profile" className="h-10 w-10 rounded-full" />
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.posts}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.interactions}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.push}</div>
                </td>
                {/* Ajoutez d'autres cellules de données pour d'autres statistiques */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
