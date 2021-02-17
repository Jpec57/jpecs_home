import Article from "../models/Article";
import flutter_intro from '../assets/articles/flutter_intro.md'
import japanese_learning_method from '../assets/articles/japanese_learning_method.md'


export default [
    new Article(0, "How did I learn japanese", "Just sharing my personal experience of learning japanese for about a year and a half. I will give you my tips to look forward your own goal by organising yourself through this journey and recommending to you some useful resources existing out here.", japanese_learning_method, new Date("2021-02-01")),
    new Article(1, "Pourquoi j'estime que Flutter est le meilleur choix actuel pour le développement mobile", "Pourquoi choisir Flutter", flutter_intro, new Date("2021-01-01")),
];