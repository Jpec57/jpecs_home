## Introduction

Flutter keeps becoming more and more popular among developers. I'm pretty sure you have already heard of it before (if it is not immediately by me...).

Maybe, you were appealed by it but never really took the time to try it, or maybe you are not one of those early adopters jumping on every new framework like those crazy JS devs out there and you were simply waiting for it to be among the top 10 in demand development frameworks before diving into it ? Well, here is your opportunity to get your hands dirty and build your very own application !

With the recent announcement of Flutter 2.0, you will be now able to write a single code that could run on 6 different platforms ! Isn't it amazing ? ([more info here](https://flutter.dev/docs/development/tools/sdk/release-notes/release-notes-2.0.0))

Through this article, we will simply look at a recent app that I have built and I will explain all of my choices for you to get a better understanding of how Flutter works. This application is called "Hot and cold".

## The App: "Hot and cold"

The main purpose of this application is to copy the famous game where a "hunter" is looking for hidden objects and has only access to hints saying that he is "burning" as he gets closer to the goal or "freezing" as he gets further away.

## The "Main" function

When you create a new project, the first step is to understand where is the entry to your app. Well, Flutter is no different from many other platforms: you can find a main function.

#### Basic

```
void main() {
  runApp(MyApp());
}
```

Really close to the Javascript equivalent, this method has simply to call `runApp` with your root widget as an argument and you are free to go. Nothing to watch here!

#### Tuned

... But, we don't like to keep it simple. If you want to ensure that the user will use your app with all of the necessary permissions, you can ask for those at initialization.

In our case, we need to be sure that the user has granted the location permission for this application to run. Otherwise, he should probably not be using a geolocalisation app...

Note that we are calling `WidgetsFlutterBinding.ensureInitialized()` to be sure that Flutter is correctly initialized before running any code that could go before the `runApp` function.

```
void main() async {
  // Needed by Flutter if not directly running our app
  WidgetsFlutterBinding.ensureInitialized();
  await Permission.location.request().isGranted;
  await Permission.locationWhenInUse.request().isGranted;
  runApp(MyApp());
}
```

For those with keen eyes here, you have probably noticed that we are using the "async" keyword to notify Flutter that this method is asynchronous. When using this keyword, we are now allowed to use the "await" keyword in the function. Indeed, we are waiting for the permission request to be sent before even loading our app.

Of course, be sure not to do any kind of heavy computing here as we are running this in the main thread. It could lead to a freeze of the application (and eventually a crash).

## The Root widget

Here is the root widget. You can specify your app theme, the different locales available in your app, your routes and roughly all of the global configurations for your app. It can be very simple if you don't want to tweak the default parameters at first, but keep in mind this widget as you get more used to the framework.

### Basic

```
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hot and Cold',
      // HomePage is another Widget defined in your project. It usually contains a scaffold
      home: HomePage(),
    );
  }
}
```

### Tuned

```
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hot and Cold',

      // This line is added to hide the debug bar

      debugShowCheckedModeBanner: false,

      // (1) The Get package is one of the most useful package existing
      // for navigation and snackbar (even without context !). 
      // Make sure to check it out navigatorKey: Get.key,

      // The theme defined here will be used by default for your whole application
      // You can use a particular theme by calling "Theme.of(context)" 
      // followed by the wanted theme.

      theme: ThemeData(
          visualDensity: VisualDensity.adaptivePlatformDensity,
          textTheme: TextTheme(headline1: TextStyle(fontSize: 30))),
      onGenerateRoute: (settings) {

        // (2) If you were to have routes that need arguments.

        // if (settings.name == DeckPage.routeName) {
        //   final DeckPageArguments args = settings.arguments;
        //
        //   return MaterialPageRoute(
        //     builder: (context) {
        //       return DeckPage(
        //         id: args.id,
        //       );
        //     },
        //   );
        // }

        // Be sure to throw an error here (fail fast strategy)
        assert(false, 'Need to implement ${settings.name}');
        return null;
      },

      // You can define here other routes that don't need any arguments.

      routes: {
        // LoginPage.routeName: (context) => LoginPage(),
      },
      home: HomePage(),
    );
  }
}
```

(1) With the Get package, you can show snackbar without having to rely on the context, navigate to page without all the boilerplate code usually needed and much more! You can check it out [here](https://pub.dev/packages/get).

(2) You don't have to rely on a class to hold your route arguments, but it wil help you be consistent in your project.

## Dependency management

The dependencies are all managed in a file called `pubspec.yaml`. This file is the equivalent to the well-known `package.json`.
I don't think much information are needed here, it is quite easy to read. An example of a git dependency instead of a regular pub dependency is given with "jpec_base" ([make sure to give it a star 🤓](https://github.com/Jpec57/jpec_base) ).

`pubspec.yaml`

```
name: hot_and_cold
description: A new Flutter application.
publish_to: "none" # Remove this line if you wish to publish to pub.dev
version: 1.0.0+1

environment:
  sdk: ">=2.7.0 <3.0.0"

dependencies:
  flutter:
    sdk: flutter
  jpec_base:
    git:
      url: https://github.com/Jpec57/jpec_base.git
      ref: master
  ## PROJECT
  flutter_compass: '^0.4.3'
  cupertino_icons: ^1.0.0

flutter_icons:
  android: "launcher_icon"
  ios: true
  image_path: "images/app_icon.png"

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_driver:
    sdk: flutter
  test: any
  mockito: ^4.1.1
  build_runner: ^1.11.1

flutter:
  uses-material-design: true
  assets:
    - assets/
    - assets/images/

  fonts:
    - family: Akaya
      fonts:
        - asset: fonts/akaya_regular.ttf

```

## A simple page

Ok. Now that we have the common structure of a Flutter project, it's finally time to see "real" Dart code. Because, yes, Dart has been chosen by Flutter as main language ([this choice has already been discussed in a previous French article here](https://jpec57.netlify.app/article/pourquoi-j'estime-que-flutter-est-le-meilleur-choix-actuel-pour-le-developpement-mobile#dart-et-la-perte-de-communaut%C3%A9-js). To be honest, it is not that different to Typescript so you'll probably easily get used to it). 

Let's look at a basic page...

```
class CongratulationView extends StatelessWidget {
  static const text = "Lorem ipsum dolor sit amet";

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blueGrey,
      child: SafeArea(
        child: Padding(
          padding: EdgeInsets.only(
              left: context.phoneSize.width * 0.05,
              right: context.phoneSize.width * 0.05,
              top: context.phoneSize.height * 0.1,
              bottom: context.phoneSize.height * 0.1),
          child: Container(
            decoration: BoxDecoration(
                boxShadow: [
                  BoxShadow(
                    color: Colors.white.withOpacity(0.7),
                    spreadRadius: 5,
                    blurRadius: 7,
                    offset: Offset(0, 3),
                  ),
                ],
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: Colors.black, width: 2)),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                GestureDetector(
                  onTap: () {
                    Get.toNamed(HomePage.routeName);
                  },
                  child: Container(
                    color: Colors.black,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 16.0),
                      child: Text(
                        "Félicitations!",
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white, fontSize: 32),
                      ),
                    ),
                  ),
                ),
                Expanded(
                  child: SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        children: [
                          Container(
                            child: Text(
                              text,
                              style: TextStyle(color: Colors.black),
                            ),
                          ),
                          Text("Hello")
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

On this Widget called `CongratulationView`, you may have noticed a few things. 

To begin with, we commonly define Widget as a class extending one of the two main options available : `StatelessWidget` (the other option is `StatefulWidget`). 

The first option is well suited for "static view": *everything in this class won't change depending on a user's interaction* for instance. It's the most **performant** option but also the most **restricted** one. If you want to handle user's interaction, you have to handle all the logic in a different file or transform your `StatelessWidget` into a `StatefulWidget` one.

Outside the use of mutable variable only available in a `StatefulWidget`, both have a similar `build` method. As you can see, a lot of Widgets are intricated: this is our view. For some of you, it may be easier to read, for other I would recommend splitting this code into smaller components.
For instance, the following code 
```
Container(
    color: Colors.black,
    child: Padding(
      padding: const EdgeInsets.symmetric(vertical: 16.0),
      child: Text(
        "Félicitations!",
        textAlign: TextAlign.center,
        style: TextStyle(color: Colors.white, fontSize: 32),
      ),
    ),
  ),
)
```

can be changed into a `StatelessWidget` as well.

```
class CongratulationViewHeader extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.black,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 16.0),
          child: Text(
            "Félicitations!",
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white, fontSize: 32),
          ),
        ),
      ),
    );
  }
}

```

...resulting in the following change :

```
class CongratulationView extends StatelessWidget {
  static const text = "Lorem ipsum dolor sit amet";

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blueGrey,
      child: SafeArea(
        child: Padding(
          padding: EdgeInsets.only(
              left: context.phoneSize.width * 0.05,
              right: context.phoneSize.width * 0.05,
              top: context.phoneSize.height * 0.1,
              bottom: context.phoneSize.height * 0.1),
          child: Container(
            decoration: BoxDecoration(
                boxShadow: [
                  BoxShadow(
                    color: Colors.white.withOpacity(0.7),
                    spreadRadius: 5,
                    blurRadius: 7,
                    offset: Offset(0, 3),
                  ),
                ],
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: Colors.black, width: 2)),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                GestureDetector(
                  onTap: () {
                    Get.toNamed(HomePage.routeName);
                  },
                  child: CongratulationViewHeader(),
                Expanded(
                  child: SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        children: [
                          Container(
                            child: Text(
                              text,
                              style: TextStyle(color: Colors.black),
                            ),
                          ),
                          Text("Hello")
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

However, you probably got the idea : all widgets are **lego parts** that you can assemble together to get a easily readable code. Despite not knowing anything about Flutter, you surely have understood what this view may look like.

![Congratulation View](/article_images/build_your_first_flutter_app/congrat_view.png "Congratulation Widget") 

The main difficult that could arise at first is to get a hold of all the existing widgets... Don't panic, I am far from knowing all of them. The fact that the Flutter team works so hard to have a huge variety of Widgets is not meant to drown you with information. With a simple `Container` you will be able to do wonders. To my mind, this API is only meant to be used once use to the Flutter's environment. You will find ready-to-use widgets that will speed up your productivity ! 

For sure, this is what could be held responsible for the learning curve of the framework. Nevertheless, the main widgets are already listed in your favorite editors given that you have downloaded the Flutter and Dart extensions (ListView, Expanded, Column, Row, Container, Center, Text widgets). 

In addition to these common widgets, please keep in mind that ANY existing widgets can be wrapped by a Container to be customized using the **decoration** property. To modify further the shape of the widget, a [Clipper](https://medium.com/flutter-community/flutter-custom-clipper-28c6d380fdd6) can be used and finally to master every pixel on the screen, you may use a [CustomPaint](https://api.flutter.dev/flutter/widgets/CustomPaint-class.html). 

**This only these few Widgets, you will be able to build ANYTHING on screen. Isn't it amazing ?**



## State management

Well, building anything we like on screen is a good thing, but you've told me that I won't be able to interact with the screen for now, so what should I do ?

As already mentioned before, you will either have to use a `Stateful Widget` or move your logic into a bloc (which I'll explain to you later in this article).

### Stateful widget

Really close to a `StatelessWidget`, you now of two distinct part for your widget. The *State* is in fact what could change in your view. To illustrate my point, I'll show you a *Compass* component. Always pointing to the North, our compass has to watch any changes that could occur to a change of orientation. 

To do this, we will listen to changes with a **StreamSubscription**. As a change in our orientation happens, we will rebuild the widget accordingly by calling the **setState** method with the new value of **_heading**. And... That's it !

The rebuild of the whole widget is what may cost in term of performance so be sure to have Statefull widget as small as possible to rerender only the needed part. 

Two override methods have appeared: the **initState** and the **dispose** methods. The first one is called only as the widget is drawn for the first time whereas the latter is called as the widget is removed from the Stack. Be sure to cancel your subscriptions here or you will end up with memory leaks 🤐.



```
class Compass extends StatefulWidget {
  Compass({Key key}) : super(key: key);

  @override
  _CompassState createState() => _CompassState();
}

class _CompassState extends State<Compass> {
  double _heading = 0;
  StreamSubscription compassPos;

  String get _readout => _heading.toStringAsFixed(0) + '°';

  @override
  void initState() {
    super.initState();
    compassPos = FlutterCompass.events.listen((double x) {
      setState(() {
        _heading = x;
      });
    });
  }


  @override
  void dispose() {
    super.dispose();
    compassPos.cancel();
  }

  final TextStyle _style = TextStyle(
    color: Colors.black,
    fontSize: 32,
    fontWeight: FontWeight.bold,
  );

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
        foregroundPainter: CompassPainter(angle: _heading),
        child: Center(child: Text(_readout, style: _style)));
  }
}
```

### Bloc

The **StatefulWidget** can do wonders, however you will eventually reach its limits as well. What if you want to update the state of another widget ? You don't have access to the state of another widget... One (horrible) solution could be to pass as an argument a callback function from one widget to another to update the State from outside. But what if you want to update the state of a deeply nested widget from another deeply nested widget in another branch ?

![Widget tree](/article_images/build_your_first_flutter_app/provider_tree.png "Widget tree")

One solution is to use a [Provider](https://pub.dev/packages/provider). But I've chosen the other common alternative: a [Bloc](https://pub.dev/packages/flutter_bloc). 

So... How does it work ? Well, as I am wirting this article, blocs are still something new to me, so I'll try to explain it to you as I have perceived it, but be sure to check the doc after ! 

To study bloc, we will use as an example the localisation management in our application. As the user walks, we want to trigger an event. Accordingly to his position, we will update the view.

#### State

First things first, put your state in another file. By doing so, you will be 100% sure that your state isn't coupled to your widget anymore.


`geolocalisation_state.dart`

```
enum GeolocalisationStatus {
  isGettingCloser,
  isGettingFurtherAway,
  idle,
  arrived
}

@immutable
class GeolocalisationState extends Equatable {
  final Position currentPosition;
  final Position destinationPosition;
  final double previousDistance;
  final GeolocalisationStatus status;


  const GeolocalisationState.init(
      this.currentPosition, this.destinationPosition,
      {this.previousDistance = double.maxFinite,
      this.status = GeolocalisationStatus.idle});

  const GeolocalisationState._(
      {this.currentPosition,
      this.destinationPosition,
      this.previousDistance,
      this.status = GeolocalisationStatus.idle});

  GeolocalisationState copyWith(
      {Position currentPosition,
      Position destinationPosition,
      GeolocalisationStatus status,
      double previousDistance}) {
    return GeolocalisationState._(
      currentPosition: currentPosition ?? this.currentPosition,
      previousDistance: previousDistance ?? this.previousDistance,
      destinationPosition: destinationPosition ?? this.destinationPosition,
      status: status ?? this.status,
    );
  }

  @override
  List<Object> get props =>
      [status, currentPosition, destinationPosition, previousDistance];
}
```

Quite simple in fact. We simply moved our variables here and made them final.

Notice that this state is immutable. A change of in props means that a new object will be created. Hence, all fields are final. A good practice is to cut this State into multiple ones inheriting a base abstract class but to begin with it should be easier for you to do as such first. 

#### Events

Now that we have a State class, we should think of events that could occur. Think of *events* as **something that should force a change of state** (In what cases we would have called **setState** in fact). In our case, only one can occur : a change of position. If we were to handle being idle for too long, it could be considered as an event launched by a timeout as well.


`geolocalisation_event.dart`

```
abstract class GeolocalisationEvent extends Equatable {
  final Position currentPosition;

  const GeolocalisationEvent({@required this.currentPosition});

  @override
  List<Object> get props => [currentPosition];
}

class PositionChanged extends GeolocalisationEvent {
  final Position currentPosition;

  const PositionChanged({@required this.currentPosition});

  @override
  List<Object> get props => [currentPosition];
}
```


#### Logic handling

We've got a state and a list of events that should modify the state, you should know what is left to do now! Well, how does each event modify the State ? Explain your logic right here in your bloc 🤗.


Put your logic in your bloc file !

```
class GeolocalisationBloc
    extends Bloc<GeolocalisationEvent, GeolocalisationState> {
  GeolocalisationBloc()
      : super(GeolocalisationState.init(
          //Starting position
            new Position(latitude: 60, longitude: 40),
            // Destination
            new Position(latitude: 48.620536, longitude: 2.434272)));

  @override
  Stream<GeolocalisationState> mapEventToState(
    GeolocalisationEvent event,
  ) async* {
    if (event is PositionChanged) {
      yield await _mapPositionChangedToState(event);
    }
  }

  Future<GeolocalisationState> _mapPositionChangedToState(
    PositionChanged event,
  ) async {
    Position destination = state.destinationPosition;
    Position currentPos = event.currentPosition;
    double currentDistanceInMeters = Geolocator.distanceBetween(
        currentPos.latitude,
        currentPos.longitude,
        destination.latitude,
        destination.longitude);
    double distanceBetweenCalls = (currentDistanceInMeters - state.previousDistance).abs();
    if (distanceBetweenCalls < 2){
      return state;
    }
    bool isGettingCloser = currentDistanceInMeters <= state.previousDistance;
    if (currentDistanceInMeters < 10) {
      return state.copyWith(
          currentPosition: state.destinationPosition,
          status: GeolocalisationStatus.arrived);
    }
    return state.copyWith(
        currentPosition: currentPos,
        previousDistance: currentDistanceInMeters,
        status: isGettingCloser
            ? GeolocalisationStatus.isGettingCloser
            : GeolocalisationStatus.isGettingFurtherAway);
  }
}
```

In the method **mapEventToState**, we will have a list of all events previously created. Then, depending on the variety of cases one event could have, we will describe those cases in another method like in the **_mapPositionChangedToState** method (it is not necessary, but far more readable).

In our application, a **PositionChangedEvent** could mean that:
- we are getting closer or farther (changing the status, currentPosition and previousDistance properties)
- we have arrived at the destination (changing the status and currentPosition properties) 

Our bloc is finally done! Time to use it in our widget tree 🎉

#### Use in widget

```
  @override
  void initState() {
    super.initState();

    positionStream =
        Geolocator.getPositionStream(desiredAccuracy: LocationAccuracy.best)
            .listen((Position position) {
      context.read<GeolocalisationBloc>().add(PositionChanged(
          currentPosition: Position(
              latitude: position.latitude, longitude: position.longitude)));
    });
  }


  ...

    @override
  Widget build(BuildContext context) {
    return BlocListener<GeolocalisationBloc, GeolocalisationState>(
      listener: (context, state) {
        if (state.status == GeolocalisationStatus.arrived) {
          positionStream.cancel();
        }
      },
      child: BlocBuilder<GeolocalisationBloc, GeolocalisationState>(
        buildWhen: (previous, current) => previous.status != current.status,
        builder: (context, state) {
          if (state.status == GeolocalisationStatus.arrived) {
            return CongratulationView();
          }
          return AnimatedContainer(
            duration: Duration(seconds: 1),
            decoration: BoxDecoration(
                gradient: _getGradientAccordingToStatus(state.status)),
            child: SafeArea(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Expanded(
                    child: Column(
                      children: [
                        Expanded(
                          child: Center(
                              ...
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: Compass(),
                  ),
                  Expanded(child: Container())
                ],
              ),
            ),
          );
        },
      ),
    );
  }
```

As you can see, I am using a StatefulWidget to register to a `PositionStream` (this subscription should have occured in the bloc as well maybe 🤷‍ ). But the main thing here is the use of a **BlocListener** and a **BlocBuilder**. Any descendant of the **BlocListener** will have access to our bloc's state using the state variable. The **BlocBuilder** descendants will be rebuild depending on the **buildWhen** condition and access the state of our bloc. 

It's far more cleaner, isn't it ? Keep in mind that any widget located anywhere in our app providing that he is listening to our bloc will be able to access the same state... Wonderful 😃! For those having heard of Redux, you should have get the idea by now. 

## Conclusion

That's it for today. By presenting Flutter through a comparision with the basic code given at initialisation of an app and a real app's code, I wanted to already show you some hints to get further as you discover the Framework. Be sure to check this article again as you get more used to the Flutter environment and want to experiment blocs for instance 🧐. Don't forget to leave a comment or a like if this post has helped you !
