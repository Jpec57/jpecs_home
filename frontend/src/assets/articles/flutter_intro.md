Que vous soyez développeur ou non, vous connaissez tous un ami qui a "une idée révolutionnaire" et qui "ne veut pas en parler par message de peur de se faire voler l'idée", à la recherche d'un développeur courtois qui pourra lui construire son application en n'espérant pas plus pour compensation que des parts dans son projet. 

Que vous soyez simplement agacé par cet ami qui rabâche toujours son projet sans jamais le tenter, victime de son harcèlement, ou encore même l'ami en question; vous pourrez, à la fin de cette présentation, lui recommander l'outil de développement que vous considérez comme le meilleur.

![New app idea](/article_images/flutter_introduction/no_more_idea.jpg "New app idea")


# J'ai lu Flutter dans le titre... Mais c'est quoi ?

D'après le site officiel, Flutter est une boîte à outils permettant de créer **nativement** des applications mobile, web et bureau.

Par boîte à outils (ou framework), on entend une structure logicielle permettant d'écrire du code de façon simplifiée car se basant sur un ensemble de principes et un squelette applicatif qui lui sont propres.

![New framework](/article_images/flutter_introduction/new_framework.png "New framework")

La notion d'application native étant elle même sujet à controverse, nous considérons dans cet article qu'une application est **native si le code des composants est compilé ou interprété selon le système d'opération dans un langage qui lui permet d'être le plus performant** (ex: Pour Flutter, le Dart est compilé en C++; pour ReactNative, le JS est interprété en Java sur Android, Objective C pour iOS et C# pour Windows) à l'inverse des Frameworks (outils de développement) hybrides tels qu'Ionic reposant sur une surcouche Web pour construire ses composants.

## Un code, plusieurs plateformes
---


![New framework](/article_images/flutter_introduction/one_code.jpg "New framework")

Ce concept n'est pas nouveau. React Native, Xamarin ou encore Ionic sont des frameworks proposants déjà ce type service. Il s'agit sûrement de l'un des arguments principaux poussant les entreprises et les développeurs à s'intéresser à ces technologies.

La **réduction drastique du temps de développement** induite par la **mutualisation du code** va de pair avec la **simplification** globale de la complexité de l'application. Fini la recherche couplée de spécialistes Android et de spécialistes iOS, un unique développeur sera capable de modifier le code responsable d'une fonctionnalité. Une **réduction des coûts de développement** est alors évidente.

## Mais alors, pourquoi toutes les entreprises ne le font pas ...?
---

Bien entendu, dans les faits, ce n'est pas si simple (sinon il n'existerait plus d'embauche de spécialistes...). En effet, l'utilisation de ces frameworks n'est pas forcément adaptée à tous les projets. On pourra retenir, en guise de simplification, qu'**une application dite "complexe" a plus d'intérêts à être développée nativement (ie avec un code distinct selon les plateformes)** pour l'instant. On entend ici par "complexe" une application reposant sur le hardware (géolocalisation, utilisation de capteurs, utilisation poussée de la caméra...), dont **le rendu visuel doit être IMPERATIVEMENT conforme à des maquettes** ou encore nécessitant de **"gros calculs"**.

Ceci s'explique par le fait que le code de ces fonctionnalités est **intrinsèquement dépendant du support utilisé**, il est donc difficile d'avoir une entrée unique pour chacun des différents cas qui pourraient se présenter sans devoir faire **un compromis au niveau des performances**. 

**Ce problème de performance** provient de la **surcouche** nécessaire à traduire l'unique code écrit par le développeur en plusieurs qui s'adaptent au mieux au support utilisé. Heureusement, cette surcouche a tendance à s'amoindrir avec le temps et les problèmes de performance autrefois connus avec les applications hybrides, sont beaucoup moins flagrants sur les frameworks actuels.

**De nos jours, la très grande majorité des applications est codée à l'aide de frameworks n'utilisant qu'un seul et unique code.**

*Exemples d'applications utilisant un unique code:* 

Instagram (ReactNative partiel), UberEats (ReactNative) Facebook (ReactNative), Discord (ReactNative), Alibaba (Flutter), Groupon (Flutter), Ebay (Flutter).

*Exemples d'applications utilisant un code différent selon les plateformes:* 

OuiSNCF (Java/Swift), PokemonGo, Google Maps.

## Ok, mais alors pourquoi Flutter et pas les autres ? 
---

Passionné de développement mobile, j'ai très vite voulu faire un tour d'horizon des différents outils mis à ma disposition afin de me forger ma propre idée sur ces derniers et ainsi choisir sur lesquels de ces Frameworks je souhaiterais davantage me pencher. **Propriétaire d'un Android**, je m'étais au préalable formé au développement sur Android en Java et je n'avais alors **aucune expérience Web** si ce n'est que la création de sites statiques. Je pense que cette information est à noter afin d'expliquer au mieux les choix et les ressentis que j'ai pu avoir lors de ce parcours, bien que je me baserai principalement sur des éléments que je considère objectif.

### Les débuts du voyage "Cross-Platform" avec Ionic (~2016)

Ionic a été le premier Framework que j'ai eu l'occasion d'essayer. Ayant développé jusqu'alors uniquement des applications Android natives en Java, il faut avouer que j'étais relativement content de découvrir une alternative JavaScript. Mes besoins étaient faibles : pas de pression au niveau des performances, aucune inquiétude quant aux visuels, je voulais simplement découvrir une autre façon de faire afin de pouvoir en tirer une comparaison. 

Le développement de l'application était relativement satisfaisant. On sent dès le début une approche beaucoup plus orientée Web que mobile. Je découvrai également le **"Live Reload"**.

![Compiling nightmare](/article_images/flutter_introduction/compiling.jpeg "Compiling nightmare")

Cette option permet de recharger automatiquement l'application lorsque des changements sont détectés et, soyons clair ici, cela a révolutionné ma vision du développement qui reposait jusqu'alors sur des builds relativement longs de l'application (je n'avais, à l'époque, pas connaissance des joies de la compilation iOS, partenaire officiel de mes pauses cafés...). Outre cette fonctionalité, la **courbe d'apprentissage** m'a paru relativement faible : on en vient rapidement à maîtriser les fondamentaux pour pouvoir réaliser une application correcte, même sans aucune connaissance préalable. 

Malgré tout, l'**ajout de fonctionnalités nécessitant l'API Native était dans mon souvenir désagréable**. Je devais utiliser les fonctionnalités "TextToSpeech", "SpeechToText" et le gyroscope. Toutefois, au moins une d'entre elle était encore en bêta et lors de la rédaction de cette article, au vue de la [nouvelle documentation](https://ionicframework.com/docs/v3/native/), beaucoup de choses semble avoir évolué et cet écueil ne semble plus être d'actualité. 

![Ionic Native API](/article_images/flutter_introduction/ionic_lack_api.jpg "Ionic Native API")

Une chose est sûre toutefois, le chargement initial d'ouverture l'application était long. Un manque de fluidité globale (lors de changement de page notamment) donnait une **expérience utilisateur amoindrie**. 

Si je devais résumer en un mot mon expérience avec Ionic, j'utiliserai le mot "Avenir". Une impression de "brouillon" était toujours présent. Nous en étions encore très tôt au niveau de développement d'Ionic, aussi je pense bon de redonner une chance à ce Framework. Un gros travail de performance semble avoir été donné, une majeure partie de l'API Native a été complétée et un support de nouveaux Frameworks JS (React, Vue et Angular disponibles) a vu le jour ! Autant de bonnes raisons de ne pas rester sur cette "mauvaise" expérience. 

![Ionic New](/article_images/flutter_introduction/ionic_new.png "Ionic New")


De plus, il m'a tout de même **poussé à croire en cette nouvelle vague de Frameworks** et à tester le nouveau géant de ce domaine : ReactNative.

### La montée en puissance avec ReactNative (~2017/2018)

Globalement, j'ai vu ReactNative comme une **version améliorée d'Ionic**. Les principes de développement me paraissaient plus clairs avec ReactNative et poussent les personnes à utiliser rapidement les bonnes pratiques. 

De plus, l'existence d'**Expo** (une plateforme sous la forme d'application) permettait de faire tourner son application mobile sur n'importe quel support ayant téléchargé Expo et ainsi, s'abstraire des stores. Très intéressante pour faire tourner une application rapidement sur le portable d'un ami, avec du recul je pense que cet atout est négligeable car, soyons honnête, qui ici a Expo de télécharger sur son téléphone ? 

Si le **rendu visuel était plus fidèle** d'un téléphone à l'autre et que la **fluidité** était bien au rendez-vous, un gros point négatif m'a cependant découragé de l'utilisation de ReactNative pour mes projets : **les mises à jours**. A la moindre mise à jour, c'était reparti pour une soirée à débugguer quelles versions étaient compatibles entre elles, pourquoi un composant était cassé...  

![React Update](/article_images/flutter_introduction/updating-react-native.jpg "React Update")

Finalement, je ne pensais redonner ma chance à ReactNative qu'une fois la v1 validée. D'autant plus que le développement natif Android s'est vu grandement amélioré entre temps avec l'arrivée de Kotlin (en Beta puis de façon officielle). Il a toutefois su répondre à l'ensemble de mes attentes avec brio, mais l'instabilité du Framework me laissait penser que le développement mobile cross-platform méritait peut-être plus de temps pour arriver à maturité. Cependant, c'était avant d'avoir découvert le nouveau bijou de Google : **Flutter**.


### Les sommets avec Flutter (~2019)
---


![Flutter's better](/article_images/flutter_introduction/flutter-better.png "Flutter's better")

Flutter m'a été recommandé maintes et maintes fois par un ami. Fan de Google, il était sur ce nouveau framework alors que le projet n'était qu'à l'état de Bêta. Finalement, ce n'est qu'à la 5ème relance de cet ami que je me suis décidé à donner une chance à Flutter.

Très vite, je compris pourquoi il insistait autant. En quelques jours, j'avais déjà une nouvelle application avec un design beaucoup plus soigné que ce dont j'avais l'habitude de montrer à mes collègues (la fonctionnalité avant tout...). Avais-je porté plus d'attention sur le soin ? Non. Passé plus de temps sur l'application ? Au contraire. 

#### La notion de Widget 

Avec Flutter, **"tout est un widget"**. Ce crédo répété à tout va m'avait découragé au premier abord. "Tout" était un raccourci pour "Tout ce qui a bien voulu être traduit en widget" selon moi et je ne me voyais pas fouiller à nouveau une API incomplète et devoir ruser pour créer des composants. Cependant, ce n'était en aucun cas une hyperbole. Tout est réellement un Widget et **le nombre de Widgets utilitaires** est tout bonnement ahurissant. Besoin de centrer du texte ? Un Widget existe pour ça. Besoin d'écrire justement du texte et de le personnaliser ? Un Widget existe aussi pour ça. Trop basique ? Jeter un coup d'oeil au _AnimatedCrossFade Widget_ et rappelez vous du temps que cela vous a pris de réaliser une animation comme cela sur Android. **Un gain de temps considérable** vous est offert par l'équipe de Flutter.

[Une playlist YouTube](https://www.youtube.com/watch?v=b_sQ9bMltGU&list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG) existe avec la présentation d'un Widget chaque semaine. Cette dernière est très utile pour montrer un panel de possibilités offert par Flutter et donner des idées de développement tout en ayant la garantie d'une mise en place sans aucune difficulté.

Voici le rendu d'une page basique (première page d'un projet):

```
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
```
Comme on le voit, l'utilisation de Widget rend l'application lisible et compréhensible par quiconque, qu'il ait une expérience avec Flutter ou non: **le code parle de lui-même**.

C'est principalement cet aspect qui m'a fait accrocher immédiatement à Flutter. Je n'avais jamais utilisé ce Framework jusqu'à présent et je pouvais déjà être productif dessus. Le language utilisé par Flutter est le *Dart* et il est à la fois perçu comme la faiblesse ou comme la force du Framework.

#### Dart et la perte de Communauté JS

> "Je préfère me lancer sur React Native car je maîtrise déjà le JS." - un dev inexpérimenté

 Cette phrase est souvent avancée comme argument pour justifier la préférence pour RN. Cependant, cet argument, avant même d'avoir testé Flutter, me dérangeait. En effet, **nous ne devons pas utiliser des outils inappropriés pour une tâche pour l'unique raison que l'on maitrîse un outil**. J'arriverai peut-être à enfoncer un clou en tapant dessus avec un livre, mais je suis sûr que j'y arriverai beaucoup mieux avec un marteau. Bien sûr, je force ici le trait et il peut paraître cocasse de dire cela alors que l'on parle d'un Framework CrossPlatform utilisé pour faire du natif. Finalement, chacun peut utiliser l'outil qui lui sied le mieux, mais cela ne doit être pour moi un argument principal.

 Aussi, ce language se révéle être d'une puissance insoupsonné. Il **autorise une compilation JIT (Just In Time) lors de la phase de développement** tout comme JS, ce qui accèlere énormément sa compilation et permet des fonctionnalités telles que le Hot Reload, mais **sera compilé AOT  (Ahead Of Time) en langage natif tel un langage fortement typé en production**. Ceci permet de s'affranchir de nombreux bugs et pauses lors du fonctionnement dus à un changement de contexte entre langages (pour plus d'informations, je vous invite à lire ce magnifique article sur Dart, très bien détaillé : https://medium.com/hackernoon/why-flutter-uses-dart-dd635a054ebf ).
 Il tire ainsi le meilleur des deux mondes ! D'ailleurs, je trouve assez amusant d'avoir choisi comme nom de Framework "React Native" pour un Framework qui finalement se base sur un *bridge* permettant de réaliser le changement de contexte. On pourrait argumenter ainsi que Flutter est plus *natif* que React Native 😇.

 Notons également que le projet **Fuchsia** d'un nouveau système d'exploitation cross-platform de Google est en cours et qui sera compatible avec Dart (même partiellement écrit en Dart). Autant de raisons de lui donner une petite chance ;)

### Inconvénients

Quelques inconvénients sont tout de même à noter avec Flutter. Parmi ces inconvénients, le plus critique reste pour moi le manque de formalisme dans **l'emploi du State** Le State est le moyen de rendre l'application dynamique et fera très certainement l'objet d'un article à part entière. Plein de solutions existantes sont très satisfaisantes, mais un utilisateur non averti se retrouvera vite perdu et choisira le *"callback's hell"* pour transmettre des informations d'un Widget à l'autre. C'est pourquoi, bon nombre d'articles sont disponibles sur le choix de la gestion du State. C'est pourquoi je considère que Flutter reste un framework "Difficile" à apprendre. Non pas que le Framework soit difficile à prendre en main (bien au contraire, comme expliqué précédemment), mais que d'**écrire une application conséquente de façon soignée demande un peu plus de travail**.



## Resumé

Fonctionnalité | Ionic | ReactNative | Flutter | Native (Android/iOS) |
--- | --- | --- | --- | ---
Courbe d'apprentissage | Basse | Moyenne | Moyenne | Très haute
Hot Reload | Oui | Oui | Oui | "Instant Run"
Stabilité |Oui|Non (0.63)|Oui (1.22.5)|Oui|
UX | - | + | + | ++ |
DX | + | + | ++ | -/+ |
Facilité à dev UI | + | ++ | +++ | ++ 
API (native) | - (?) | ++ | ++ | 
Coût | -- | -- | - | + |

# Conclusion

Voici un résume de mon expérience avec les langages de programmation mobile CrossPlatform. J'espère vous avoir donné l'envie de les découvrir (oui, oui, même React Native; des choses sont bonnes à prendre surtout depuis l'apparition des Hooks). Cet article se veut subjectif : bien que des faits mentionnés soient objectifs, je donne très clairement mon avis et mon attrait pour Flutter est indéniable. Mais j'espère qu'ainsi que cet article sera un moteur vous poussant à vous faire votre propre idée des Frameworks 🤓. 


# Références utilisées


React Native not really native:
https://hub.packtpub.com/react-native-really-native-framework/

Instant Run/Hot Reload:
https://stackoverflow.com/questions/52050660/difference-between-androids-instant-run-vs-flutters-hot-reload-and-react-nativ


Skia (Flutter):
https://fr.wikipedia.org/wiki/Skia


Why you should try Flutter: 
https://relevant.software/blog/top-8-flutter-advantages-and-why-you-should-try-flutter-on-your-next-project/

Dart: a very good choice
https://medium.com/hackernoon/why-flutter-uses-dart-dd635a054ebf

Dart for Flutter, a good choice ? : 
https://medium.com/swlh/13-reasons-why-dart-is-worse-than-kotlin-9d315301528f

Flutter experience:
https://dev.to/scastiel/i-tried-flutter-for-a-week-and-made-an-app-2fa

Flutter, master every pixel on screen:

https://medium.com/flutter-community/flutters-key-difference-owning-every-pixel-e2135b44c8a