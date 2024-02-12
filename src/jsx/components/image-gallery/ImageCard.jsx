import styles from './ImageCard.module.css';

export const ImageCard = ({ image: { urls, description } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={urls.small} alt={description} />
        <div className={styles.imgDarkened}></div>
      </div>
    </div>
  );
};

//     {
//       "id": "eOLpJytrbsQ",
//       "created_at": "2014-11-18T14:35:36-05:00",
//       "width": 4000,
//       "height": 3000,
//       "color": "#A7A2A1",
//       "blur_hash": "LaLXMa9Fx[D%~q%MtQM|kDRjtRIU",
//       "likes": 286,
//       "liked_by_user": false,
//       "description": "A man drinking a coffee.",
//       "user": {
//         "id": "Ul0QVz12Goo",
//         "username": "ugmonk",
//         "name": "Jeff Sheldon",
//         "first_name": "Jeff",
//         "last_name": "Sheldon",
//         "instagram_username": "instantgrammer",
//         "twitter_username": "ugmonk",
//         "portfolio_url": "http://ugmonk.com/",
//         "profile_image": {
//           "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
//           "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
//           "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
//         },
//         "links": {
//           "self": "https://api.unsplash.com/users/ugmonk",
//           "html": "http://unsplash.com/@ugmonk",
//           "photos": "https://api.unsplash.com/users/ugmonk/photos",
//           "likes": "https://api.unsplash.com/users/ugmonk/likes"
//         }
//       },
//       "current_user_collections": [],
//       "urls": {
//         "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
//         "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
//         "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
//         "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
//         "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
//       },
//       "links": {
//         "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
//         "html": "http://unsplash.com/photos/eOLpJytrbsQ",
//         "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
//       }
//     },

//  <a class='card-link' href='${largeImageURL}'>
//               <div class='card-cover-inner'>
//                   <img class='card-cover'
//                       src='${previewURL}'
//                       alt='${tags}'
//                   />
//                 <div class='card-cover-darkened'></div>
//               </div>
//             </a>
//             <div class="card-info">
//                 <div class="field">
//                     <span class="label">Likes</span>
//                     <span class="value">${likes}</span>
//                 </div>
//                 <div class="field">
//                     <span class="label">Views</span>
//                     <span class="value">${views}</span>
//                 </div>
//                 <div class="field">
//                     <span class="label">Comments</span>
//                     <span class="value">${comments}</span>
//                 </div>
//                 <div class="field">
//                     <span class="label">Downloads</span>
//                     <span class="value">${downloads}</span>
//                 </div>
//             </div>
