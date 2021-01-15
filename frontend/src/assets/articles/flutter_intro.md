Flutter 

# Présentation générale

D'après le site officiel, Flutter est une boîte à outils permettant de créer nativement des applications mobile, web et bureau.
La notion d'application native étant elle même sujet à controverse, nous considérons dans cet article qu'une application est native si le code des composants est compilé selon le système d'opération dans un langage qui lui permet d'être le plus performant (ex: Pour Flutter, le Dart est compilé en C++; pour ReactNative, le JS est compilé en Java sur Android, Objective C pour iOS et C# pour Windows).

## Un code, plusieurs plateformes

Ce concept n'est pas nouveau. React Native, Xamarin ou encore Ionic sont des frameworks (outils de développement) proposants déjà ce type service. Il s'agit sûrement de l'un des arguments principaux poussant les entreprises et les développeurs à s'intéresser à ces technologies.

La **réduction drastique du temps de développement** induite par la **mutualisation du code** va de pair avec la simplification globale de la complexité de l'application. Fini la recherche couplée de spécialistes Android et de spécialistes iOS, un unique développeur sera capable de modifier le code responsable d'une fonctionnalité. Une **réduction des coûts de développement** est alors évidente.

### Mais alors, pourquoi toutes les entreprises ne le font pas ...?

Bien entendu, dans les faits, ce n'est pas si simple (sinon il n'existerait plus d'embauche de spécialistes...). En effet, l'utilisation de ces frameworks n'est pas forcément adaptée à tous les projets. On pourra retenir, en guise de simplification, qu'**une application dite "complexe" a plus d'intérêts à être développée nativement (avec un code distinct selon les plateformes)** pour l'instant. On entend ici par "complexe" une application nécessitant beaucoup d'outils liés au hardware (géolocalisation, utilisation de capteurs, utilisation poussée de la caméra...),  dont **le rendu visuel doit être IMPERATIVEMENT conforme aux maquettes** ou encore nécessitant de **"gros calculs"**.

Ceci s'explique par le fait que **le code ces fonctionnalités est intrinsèquement dépendant** du support utilisé, il est donc difficile d'avoir une entrée unique pour les différents cas qui pourraient se présenter sans devoir faire **un compromis au niveau des performances**. 

**Ce problème de performance** provient de la **surcouche** nécessaire à traduire l'unique code écrit par le développeur en plusieurs qui s'adaptent au mieux au support utilisé. Heureusement, cette surcouche a tendance à s'amoindrir avec le temps et les problèmes de performance autrefois connus avec les applications hybrides (Ionic émulant une WebView), sont beaucoup moins flagrants sur les nouveaux frameworks actuels.


Actuellement, la grande majorité des applications (95% des applications que vous utilisez) est codée à l'aide de frameworks n'utilisant qu'un seul et unique code. 

*Exemples d'applications utilisant un unique code:* 
Instagram (ReactNative), UberEats (ReactNative) Facebook (ReactNative), Discord (ReactNative), Alibaba (Flutter), Groupon (Flutter), Ebay (Flutter).

*Exemples d'applications utilisant un code différent selon les plateformes:* 

OuiSNCF (Java/Swift).


### Ok, mais alors pourquoi Flutter et pas les autres ? 


https://stackoverflow.com/questions/54401851/what-is-the-difference-between-react-native-and-flutter

Flutter uses Dart, a typed language that offers both "Just in time" (JIT) and "Ahead of time" (AOT) compilation (with tree-shaking included)

In development, Flutter uses JIT compilation to empower hot-reload. And for production builds, it uses AOT compilation for better performances.

React-Native uses Javascript enhanced by some syntax sugar called JSX.

JSX being a different language, it compiles to JS, then evaluated at runtime.

https://medium.com/flutter-community/flutters-key-difference-owning-every-pixel-e2135b44c8a








# Partie Développeur 

## Comparaison rapide avec React Native

Flutter     Dernière version    1.22.5
Système d'exploitation	Android, iOS, Google Fuchsia, Web, Windows, macOS et Linux

ReactNative Dernière version	0.63
Plates-formes : Android, Android TV, iOS, macOS, tvOS, Web platform, Microsoft Windows


### Avantages ReactNative

### Avantages Flutter



https://fr.wikipedia.org/wiki/Skia

https://relevant.software/blog/top-8-flutter-advantages-and-why-you-should-try-flutter-on-your-next-project/



https://hub.packtpub.com/react-native-really-native-framework/