import Article from "../models/Article";
import flutter_intro from '../assets/articles/flutter_intro.md'
import japanese_learning_method from '../assets/articles/japanese_learning_method.md'
import build_your_first_flutter_app from '../assets/articles/build_your_first_flutter_app.md'


export default [
    new Article(2, "Build your first Flutter App", "If you know me personally, you've probably heard of Flutter at least once. Well, let me be your guide for this beginner friendly Geolocalisation App tutorial in which we will build a Flutter App from scratch 🤠 ", build_your_first_flutter_app, new Date("2021-02-22")),
    new Article(1, "How did I learn japanese", "Just sharing my personal experience of learning japanese for about a year and a half. I will give you my tips to look forward your own goal by organising yourself through this journey and recommending to you some useful resources existing out here.", japanese_learning_method, new Date("2021-02-01")),
    new Article(0, "Pourquoi j'estime que Flutter est le meilleur choix actuel pour le développement mobile", "Pourquoi choisir Flutter", flutter_intro, new Date("2021-01-01")),
];