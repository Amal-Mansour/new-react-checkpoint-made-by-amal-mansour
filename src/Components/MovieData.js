import Regard from  "../assets/regarde moi.jpg";
import Regard1 from "../assets/regarde moi best.jpg";
import Regard2 from "../assets/regarde-moi-photo.jpg";

import Ason from   "../assets/son.jpg";
import Ason1 from  "../assets/son_car.jpg";
import Ason2 from  "../assets/sonp.jpg";

import Zeineb from "../assets/zeineb.jpg";
import Zeineb2 from "../assets/zeinebpr.jpg";

import Fleur from  "../assets/Fleur_d'alep.jpg";
import Fleur1 from "../assets/fleur.jpg";
import Fleur2 from "../assets/images_fleur.jpg";

import Millefeuille from  "../assets/millefeulle.jpg";
import Millefeuille1 from "../assets/millefeulle girls.jpg";
import Millefeuille2 from "../assets/millefeulle _girls.jpg";

import Dachra from  "../assets/dachra.jpg";
import Dachra1 from "../assets/dachra_best.jpg";
import Dachra2 from "../assets/dachra_media.jpg";




const MovieData = [
  { id: Math.random(), myImage: Regard, myImage1: Regard1, myImage2: Regard2, title: "Regarde-moi ", Rating: 3, Url:'https://www.youtube.com/embed/OY-Yy0GWFLE',
   description:"Lotfi est un immigré tunisien d'une quarantaine d'années. Il s'est installé dans le quartier de Noailles à Marseille. Il partage sa vie entre le magasin d'électroménager dans lequel il travaille et sa petite amie française, Monique. Son frère l'appelle, sa femme, restée en Tunisie, a eu un AVC. Lotfi doit retourner auprès d'elle afin de s'occuper de leur petit garçon autiste de neuf ans, Amr, qu'il n'a jamais connu. Comme Amr, dont la maladie l'empêche de se connecter avec les autres, Lotfi va devoir apprendre à établir une relation avec son fils."
},
  { id: Math.random(), myImage: Ason, myImage1: Ason1, myImage2: Ason2, title: " Un Fils", Rating: 5, Url:'https://www.youtube.com/embed/_K4qawhyasA',
  description:"Farès et Meriem forment avec Aziz, leur fils de 9 ans, une famille tunisienne moderne issue d’un milieu privilégié. Lors d’une virée dans le sud de la Tunisie, leur voiture est prise pour cible par un groupe terroriste et le jeune garçon est grièvement blessé."
},
  { id: Math.random(), myImage: Zeineb, myImage1: Zeineb2,  myImage2: Zeineb2, title: "zaineb et la neige", Rating: 3, Url:'https://www.youtube.com/embed/TC9-_-qhqVk',
   description: "2009. Tunisian Nine-year-old Zaineb lost her father. Her mother will rebuild her life with a man in Canada. But she wants nothing to do with this new country, Because Zaineb has decided to hate the snow."
},
  { id: Math.random(), myImage: Fleur, myImage1: Fleur1, myImage2: Fleur2, title: "Fleur d'Alep",Rating: 2, Url:'https://www.youtube.com/embed/MBfAyaD31ZE' ,
  description:"Après quelques jours d'attente et de recherche, Salma reçoit un coup de fil de Mourad l'informant qu'il est parti en Syrie combattre aux côtés des djihadistes islamistes. À l'instar de nombreux parents qui, aujourd'hui, de Tunis à Bamako en passant par paris, n'admettent pas que leur enfant aille tuer ou se faire tuer au nom d'Allah, Salma décide de partir en Syrie à la recherche de son fils. Elle franchit la frontière syrienne via la Turquie et se fait passer pour une militante de la cause islamiste.Salma va travailler sous la houlette de Jabhat Al-Nosra, groupe djihadiste de rebelles armés affilié à Al-Qaïda, à qui elle cache sa véritable motivation… au chevet des blessés, au milieu des concubines, ou derrière les fourneaux, son sérieux est à la mesure de son désir de retrouver son enfant qu'elle sait dans les parages."
},
  { id: Math.random(), myImage: Millefeuille, myImage1: Millefeuille1, myImage2: Millefeuille2, title: "Millefeuille", Rating: 2,  Url:'https://www.youtube.com/embed/HGI36dXMC3s',
  description:"C’est l’histoire de tout un pays que raconte Nouri Bouzid au travers du destin de deux jeunes filles, Zaineb et Aïcha, symboles de la Révolution et de l’avenir de la Tunisie. Toutes deux se battent pour leur indépendance, pour gagner leur liberté. Toutes deux luttent contre les carcans religieux et culturels établis par une société archaïque. Une société qui, alors que le pays est en émoi, hésite encore entre modernité et traditionalisme Zaineb et Aïcha se battent pour se reconstruire, et ce en dépit des pressions sociales et masculines auxquelles elles doivent chaque jour faire face."
},
  { id: Math.random(), myImage: Dachra, myImage1: Dachra1, myImage2: Dachra2, title: "Dachra",Rating: 4 ,Url:'https://www.youtube.com/embed/a5_WTF7KtYQ',
  description:"Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel enquêtent sur l’affaire non élucidée Mongia, du nom d’une femme retrouvée mutilée vingt-cinq ans plus tôt qui est aujourd’hui internée, suspectée de sorcellerie. Leur enquête les conduit jusqu’à Dachra, village archaïque et menaçant, isolé dans la campagne tunisienne. Alors que l’inquiétant chef du village les invite à rester pour la nuit, Yasmine se retrouve mêlée aux lourds secrets de Dachra et n’a d’autre solution que de lutter pour sa survie."
}
]

export default  MovieData;

