import React from 'react'

const feed = [
  {
      id: 21,
      name: "Marie Kouame",
      userId: 21,
      profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
      desc: "Pour mieux comprendre les intégrales en mathématiques, je recommande le livre 'Calculus Made Easy' de Silvanus P. Thompson. Il rend les concepts beaucoup plus accessibles.",
      img: "https://images-na.ssl-images-amazon.com/images/I/41ctX7eDxtL._SX331_BO1,204,203,200_.jpg",
      push: 150,
      comments: 30,
      shares: 18
  },
  {
      id: 22,
      name: "Ali Diallo",
      userId: 22,
      profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
      desc: "Pour gérer la charge de travail des projets de groupe, nous utilisons Trello pour organiser nos tâches et Slack pour communiquer efficacement.",
      img: "https://blog.trello.com/hubfs/trello-board.png",
      push: 98,
      comments: 25,
      shares: 12
  },
  {
      id: 23,
      name: "Isabelle Mbia",
      userId: 23,
      profilePic: "https://randomuser.me/api/portraits/women/48.jpg",
      desc: "Pour améliorer votre CV et candidatures, essayez de suivre des cours en ligne sur LinkedIn Learning ou Coursera. Cela montre aux employeurs votre volonté d'apprendre.",
      img: "https://cdn-images-1.medium.com/max/1600/1*qK7SFA-4UrpHsp4Z6GBd5Q.jpeg",
      push: 112,
      comments: 29,
      shares: 20
  },
  {
      id: 24,
      name: "Joseph Koffi",
      userId: 24,
      profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
      desc: "Pour gérer le stress des examens, essayez la méditation quotidienne et assurez-vous de prendre des pauses régulières pour éviter la surcharge mentale.",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      push: 140,
      comments: 32,
      shares: 19
  },
  {
      id: 25,
      name: "Sophie Nguessan",
      userId: 25,
      profilePic: "https://randomuser.me/api/portraits/women/55.jpg",
      desc: "Pour mieux organiser votre temps entre travail et études, utilisez des applications comme Google Calendar ou Todoist pour planifier vos journées.",
      img: "https://images.unsplash.com/photo-1593696140824-8949a2d4f72e",
      push: 130,
      comments: 27,
      shares: 14
  },
  {
      id: 26,
      name: "Martin Abena",
      userId: 26,
      profilePic: "https://randomuser.me/api/portraits/men/53.jpg",
      desc: "Pour les problèmes de connexion Internet, essayez d'utiliser un point d'accès mobile comme solution de secours ou investissez dans un routeur plus performant.",
      img: "https://images.unsplash.com/photo-1511219042589-1da71dadff09",
      push: 85,
      comments: 20,
      shares: 10
  },
  {
      id: 27,
      name: "Brigitte Mballa",
      userId: 27,
      profilePic: "https://randomuser.me/api/portraits/women/49.jpg",
      desc: "Pour comprendre les notions en physique, je recommande les vidéos YouTube de 'Khan Academy' et 'MinutePhysics'. Elles sont très didactiques.",
      img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
      push: 99,
      comments: 22,
      shares: 13
  },
  {
      id: 28,
      name: "Eric Tchana",
      userId: 28,
      profilePic: "https://randomuser.me/api/portraits/men/51.jpg",
      desc: "Pour économiser sur le coût de la vie, essayez de cuisiner à la maison plutôt que de manger dehors et utilisez des applications de gestion de budget comme Mint.",
      img: "https://images.unsplash.com/photo-1514976463263-1dc5c311ed9b",
      push: 110,
      comments: 26,
      shares: 15
  },
  {
      id: 29,
      name: "Awa Sane",
      userId: 29,
      profilePic: "https://randomuser.me/api/portraits/women/56.jpg",
      desc: "Pour rendre les cours en ligne plus engageants, essayez d'utiliser des outils interactifs comme Kahoot et Padlet pour maintenir l'intérêt.",
      img: "https://images.unsplash.com/photo-1522184216315-1af7ba09e40e",
      push: 87,
      comments: 18,
      shares: 9
  },
  {
      id: 30,
      name: "Jean-Paul Ndongo",
      userId: 30,
      profilePic: "https://randomuser.me/api/portraits/men/54.jpg",
      desc: "Pour équilibrer vie sociale et études, définissez des limites claires pour votre temps d'étude et planifiez des activités sociales à l'avance.",
      img: "https://images.unsplash.com/photo-1500522144261-ea64433bbe27",
      push: 120,
      comments: 31,
      shares: 21
  },
  {
      id: 31,
      name: "Fatou Camara",
      userId: 31,
      profilePic: "https://randomuser.me/api/portraits/women/57.jpg",
      desc: "Pour trouver des logements étudiants abordables, consultez des sites spécialisés comme Studapart ou demandez des recommandations dans des groupes d'étudiants.",
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      push: 90,
      comments: 19,
      shares: 11
  },
  {
      id: 32,
      name: "Paul Tounkara",
      userId: 32,
      profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
      desc: "Pour suivre les cours en ligne tout en travaillant à temps partiel, organisez-vous en créant un emploi du temps strict et en définissant des priorités claires.",
      img: "https://images.unsplash.com/photo-1502772066657-19d4c91cb6ff",
      push: 108,
      comments: 28,
      shares: 17
  },
  {
      id: 33,
      name: "Mariam Diallo",
      userId: 33,
      profilePic: "https://randomuser.me/api/portraits/women/58.jpg",
      desc: "Pour trouver un endroit pour étudier quand les bibliothèques sont pleines, essayez les cafés calmes ou des espaces de coworking étudiants.",
      img: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38",
      push: 95,
      comments: 22,
      shares: 14
  },
  {
      id: 34,
      name: "Abdoulaye Diarra",
      userId: 34,
      profilePic: "https://randomuser.me/api/portraits/men/56.jpg",
      desc: "Pour mieux comprendre les cours de programmation, utilisez des plateformes comme Codecademy ou FreeCodeCamp pour des exercices pratiques.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      push: 115,
      comments: 25,
      shares: 18
  },
  {
      id: 35,
      name: "Yvette Nguema",
      userId: 35,
      profilePic: "https://randomuser.me/api/portraits/women/59.jpg",
      desc: "Pour mieux dormir, essayez de maintenir une routine de sommeil régulière et évitez les écrans au moins une heure avant de vous coucher.",
      img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f",
      push: 101,
      comments: 20,
      shares: 12
  },
  {
      id: 36,
      name: "Jean-Marc Fofana",
      userId: 36,
      profilePic: "https://randomuser.me/api/portraits/men/57.jpg",
      desc: "Pour gérer les coûts croissants de l'éducation, explorez les bourses d'études disponibles et envisagez de travailler à temps partiel pour financer vos études.",
      img: "https://images.unsplash.com/photo-1564869734232-889f97e4c1b4",
      push: 125,
      comments: 30,
      shares: 20
  },
  {
      id: 37,
      name: "Chantal Toure",
      userId: 37,
      profilePic: "https://randomuser.me/api/portraits/women/60.jpg",
      desc: "Pour rester motivé, définissez des objectifs clairs et récompensez-vous lorsque vous les atteignez. Rejoindre un groupe d'étude peut également aider.",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      push: 110,
      comments: 27,
      shares: 16
  },
  {
      id: 38,
      name: "Mohamed Ba",
      userId: 38,
      profilePic: "https://randomuser.me/api/portraits/men/58.jpg",
      desc: "Pour mieux comprendre les cours d'économie, suivez des chaînes YouTube comme 'CrashCourse Economics' et lisez des articles sur 'Investopedia'.",
      img: "https://images.unsplash.com/photo-1519378058451-4c2640e5e0c0",
      push: 105,
      comments: 23,
      shares: 14
  },
  {
      id: 39,
      name: "Nadine Akono",
      userId: 39,
      profilePic: "https://randomuser.me/api/portraits/women/61.jpg",
      desc: "Pour équilibrer études et activités extra-scolaires, créez un calendrier hebdomadaire et respectez-le autant que possible. Priorisez vos tâches.",
      img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791",
      push: 92,
      comments: 21,
      shares: 11
  },
  {
      id: 40,
      name: "Karim Sylla",
      userId: 40,
      profilePic: "https://randomuser.me/api/portraits/men/59.jpg",
      desc: "Pour gérer l'isolement des cours à distance, participez à des forums en ligne et utilisez des outils de visioconférence pour rester en contact avec vos camarades.",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
      push: 130,
      comments: 33,
      shares: 19
  }
];


export default function solutions() {
  return (
    <div className="ml-72 mt-6 p-4">
            <h1 className="relative text-xl font-bold">Défis Actuelles</h1>
            <div className="mt-4">
                {feed.map(post => (
                    <div key={post.id} className="mb-6 p-4 border rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src={post.profilePic} alt={`${post.name}'s profile`} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h2 className="text-lg font-bold">{post.name}</h2>
                            </div>
                        </div>
                        <p className="mb-4">{post.desc}</p>
                        <img src={post.img} alt="" className="w-40 mb-4" />
                        <div className="flex justify-between text-gray-600">
                            <a href="#"><span className="flex gap-1"><img src="/src/assets/push.svg" className="size-6" alt="icone deconnexion" />{post.push} Push</span></a>
                            <a href="#"><span className="flex gap-1"><img src="/src/assets/comment.svg" className="size-6" alt="icone deconnexion" />{post.comments} Commentaires</span></a>
                            <a href="#"><span className="flex gap-1"><img src="/src/assets/share.svg" className="size-6" alt="icone deconnexion" />{post.shares} Partages</span></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}
