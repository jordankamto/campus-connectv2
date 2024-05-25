import React from 'react';

const feed = [
    {
        id: 1,
        name: "Jordan Kamgaing",
        userId: 1,
        profilePic: "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-1/337398078_170800885782961_7452211607643385529_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7N4-zLRi3duKb0qCb_g9IMYmDLxOz93gxiYMvE7P3eCIhluSpeceEDnU8UOENGx4f8k4758U02qMCNgmjXkBR&_nc_ohc=hSPqublXSKcQ7kNvgHnojRE&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AYB8S2w6Xorgj9r57qb8mwhwDWkaHZjN0fhBBtY-_ABeHg&oe=66553B6D",
        desc: "Je trouve les cours de mathématiques vraiment difficiles cette année. Quelqu'un aurait des conseils pour mieux comprendre les intégrales ?",
        img: "https://www.math.ubc.ca/~cass/courses/m309-03a/cps/textbook/holder/h2.jpg",
        push: 120,
        comments: 34,
        shares: 15
    },
    {
        id: 2,
        name: "Tomba Marco",
        userId: 2,
        profilePic: "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t1.6435-1/37951075_296394311111343_567372777598746624_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqxlTtQRpPS-a4FjXUWKybOZw466Q8lkY5nDjrpDyWRsR3_SscKoz9cSil2hwvljBmlqYJm55KwGSIEJPJ2CN-&_nc_ohc=2zlQCAyBxVQQ7kNvgH26le3&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AYCODxmZngb9dxG-XX1WQKCYAR7u_QO2VCHpYcRjQLVcHQ&oe=6676D75D",
        desc: "La charge de travail pour les projets de groupe est vraiment énorme. Comment vous gérez cela ?",
        img: "https://www.investopedia.com/thmb/b-GsmtAbYrrpbgfBTSm-xzsqOH8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/trello_board_example-55cdb80e6c0b4c12a955c28b67208484.png",
        push: 89,
        comments: 22,
        shares: 10
    },
    {
        id: 3,
        name: "Amina Diallo",
        userId: 3,
        profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
        desc: "J'ai du mal à trouver des stages intéressants. Des conseils pour améliorer mon CV et mes candidatures ?",
        img: "https://www.understood.org/wp-content/uploads/2020/02/resume-featured.jpg",
        push: 95,
        comments: 18,
        shares: 12
    },
    {
        id: 4,
        name: "Lucien Mendy",
        userId: 4,
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        desc: "Les examens approchent et je suis vraiment stressé. Quels sont vos techniques pour gérer le stress ?",
        img: "https://static01.nyt.com/images/2021/01/27/well/27WELL-STRESS/27WELL-STRESS-superJumbo.jpg",
        push: 110,
        comments: 27,
        shares: 20
    },
    {
        id: 5,
        name: "Fatima Koulibaly",
        userId: 5,
        profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
        desc: "Je trouve difficile de concilier travail et études. Des conseils pour mieux organiser mon temps ?",
        img: "https://www.fnu.edu/wp-content/uploads/2018/09/time-management-tips-for-working-students.jpg",
        push: 105,
        comments: 30,
        shares: 25
    },
    {
        id: 6,
        name: "Pierre Nguema",
        userId: 6,
        profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
        desc: "Les problèmes de connexion Internet rendent les cours en ligne très difficiles. Avez-vous des solutions ?",
        img: "https://images.ctfassets.net/7z5svk2k5ls4/7U6Dbt1DLArDV1kHtHecLU/484e6fceeb31f68975e3edc8b9d4db1c/dslr.jpg",
        push: 80,
        comments: 20,
        shares: 8
    },
    {
        id: 7,
        name: "Marion Tchoumbou",
        userId: 7,
        profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
        desc: "J'ai des difficultés à comprendre certaines notions en physique. Quels sont vos livres ou ressources préférés ?",
        img: "https://images.squarespace-cdn.com/content/v1/56df84c0ab48de8415d8a90e/1494011450260-9ZQDR9HFLHFP7D3TO46O/image-asset.jpeg",
        push: 99,
        comments: 17,
        shares: 10
    },
    {
        id: 8,
        name: "Koffi Adebayo",
        userId: 8,
        profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
        desc: "Le coût de la vie augmente et je peine à gérer mon budget étudiant. Des astuces pour économiser ?",
        img: "https://www.forbes.com/advisor/wp-content/uploads/2022/02/student_budget.jpeg",
        push: 120,
        comments: 25,
        shares: 14
    },
    {
        id: 9,
        name: "Zara Ouattara",
        userId: 9,
        profilePic: "https://randomuser.me/api/portraits/women/52.jpg",
        desc: "Les cours en ligne manquent d'interactivité. Des suggestions pour les rendre plus engageants ?",
        img: "https://www.ilearnspace.com/wp-content/uploads/2021/04/interactiveonlineclass.jpg",
        push: 85,
        comments: 19,
        shares: 11
    },
    {
        id: 10,
        name: "Seydou Traoré",
        userId: 10,
        profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
        desc: "J'ai du mal à trouver un équilibre entre ma vie sociale et mes études. Comment faites-vous ?",
        img: "https://www.verywellmind.com/thmb/l9azGn_8dpFPXMxy_yR3aV4Dmqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Multitasking-teens-GettyImages-819120740-598e0a16aad52b001080f318.jpg",
        push: 130,
        comments: 40,
        shares: 22
    },
    {
        id: 11,
        name: "Adama Keita",
        userId: 11,
        profilePic: "https://randomuser.me/api/portraits/men/36.jpg",
        desc: "La recherche de logements étudiants abordables est un vrai casse-tête. Des conseils ou contacts utiles ?",
        img: "https://assets.rbl.ms/21816823/origin.jpg",
        push: 76,
        comments: 15,
        shares: 9
    },
    {
        id: 12,
        name: "Chloé Kamanzi",
        userId: 12,
        profilePic: "https://randomuser.me/api/portraits/women/39.jpg",
        desc: "Je trouve difficile de suivre les cours en ligne tout en travaillant à temps partiel. Comment gérez-vous cela ?",
        img: "https://www.thebalancecareers.com/thmb/2sUAwv_DUabZl5Zfp9LzD94pIAY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/managing-remote-workers-working-from-home-2063330_final-cc30ac3d2eaf47ef87dfd6b3d5e12a16.jpg",
        push: 102,
        comments: 20,
        shares: 13
    },
    {
        id: 13,
        name: "Mamadou Bah",
        userId: 13,
        profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
        desc: "Les bibliothèques sont souvent pleines et il est difficile de trouver un endroit pour étudier. Des suggestions ?",
        img: "https://www.npr.org/assets/img/2020/09/01/library-study-area_wide-c6f0c42927de667ef0216b32ba3562ccdd8f9c56.jpg",
        push: 87,
        comments: 21,
        shares: 12
    },
    {
        id: 14,
        name: "Nadia Sissoko",
        userId: 14,
        profilePic: "https://randomuser.me/api/portraits/women/28.jpg",
        desc: "Les ressources en ligne pour mon cours de programmation ne sont pas très claires. Quelles sont vos recommandations ?",
        img: "https://cdn.simplilearn.com/ice9/free_resources_article_thumb/Best_Programming_Languages.jpg",
        push: 115,
        comments: 29,
        shares: 16
    },
    {
        id: 15,
        name: "Jean-Baptiste Ngoma",
        userId: 15,
        profilePic: "https://randomuser.me/api/portraits/men/41.jpg",
        desc: "Le manque de sommeil affecte vraiment ma concentration. Des astuces pour mieux dormir ?",
        img: "https://media.istockphoto.com/id/1206796364/photo/young-man-sleeping-soundly-in-bed.jpg",
        push: 95,
        comments: 22,
        shares: 14
    },
    {
        id: 16,
        name: "Esther Mboa",
        userId: 16,
        profilePic: "https://randomuser.me/api/portraits/women/19.jpg",
        desc: "Les frais de scolarité augmentent chaque année. Comment gérez-vous les coûts croissants de l'éducation ?",
        img: "https://www.moneyunder30.com/wp-content/uploads/2017/05/saving_for_college.jpg",
        push: 108,
        comments: 24,
        shares: 18
    },
    {
        id: 17,
        name: "Amadou Koné",
        userId: 17,
        profilePic: "https://randomuser.me/api/portraits/men/30.jpg",
        desc: "Le manque de motivation est un gros problème pour moi cette année. Comment restez-vous motivés ?",
        img: "https://i0.wp.com/www.alphagamma.eu/wp-content/uploads/2020/01/Motivation-2-1024x576.jpg",
        push: 92,
        comments: 28,
        shares: 10
    },
    {
        id: 18,
        name: "Hawa Diop",
        userId: 18,
        profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
        desc: "J'ai du mal à comprendre les cours d'économie. Quels sont vos astuces pour mieux appréhender ce sujet ?",
        img: "https://images.ctfassets.net/tncnbuc6u8k6/3JOnj3cXB8by6CHnflhRT0/aa1a334e39ccf64e78b5aab93a4d68f2/Screen_Shot_2018-11-28_at_3.41.59_PM.png",
        push: 100,
        comments: 26,
        shares: 14
    },
    {
        id: 19,
        name: "Kévin Dossou",
        userId: 19,
        profilePic: "https://randomuser.me/api/portraits/men/37.jpg",
        desc: "Les activités extra-scolaires prennent beaucoup de temps. Comment équilibrer études et activités ?",
        img: "https://www.groovypost.com/wp-content/uploads/2021/09/Student-at-laptop-featured-image.jpg",
        push: 86,
        comments: 19,
        shares: 12
    },
    {
        id: 20,
        name: "Yasmine Cissé",
        userId: 20,
        profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
        desc: "Les cours à distance manquent d'interaction sociale. Comment gérez-vous l'isolement ?",
        img: "https://www.ecpi.edu/sites/default/files/student-life-in-the-covid-world.jpg",
        push: 119,
        comments: 33,
        shares: 20
    }
  ];


export function Feed() {
    return (
        <div className="ml-72 mt-6 p-4">
            <h1 className="relative text-xl font-bold">Publications Récentes</h1>
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
                        <img src={post.img} alt="Post content" className="w-40 mb-4" />
                        <div className="flex justify-between text-gray-600">
                            <a href="#"><span className="flex gap-1"><img src="/src/assets/push.svg" className="size-6" alt="icone deconnexion" />{post.push} Push</span></a>
                            <a href="#"><span className="flex gap-1"><img src="/src/assets/comment.svg" className="size-6" alt="icone deconnexion" />{post.comments} Commentaires</span></a>
                            <a href="#"><span className="flex gap-1"><img src="/src/assets/share.svg" className="size-6" alt="icone deconnexion" />{post.shares} Partages</span></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
