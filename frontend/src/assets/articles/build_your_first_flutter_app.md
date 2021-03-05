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

      // (1) The Get package is one of the most useful package existing for navigation and snackbar (even without context !). Make sure to check it out
      navigatorKey: Get.key,

      // The theme defined here will be used by default for your whole application
      // You can use a particular theme by calling "Theme.of(context)" followed by the wanted theme.

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

(1) With the Get package, you can show snackbar without having to rely on the context, navigate to page without all the boilerplate code usually needed. You can check it out [here](https://pub.dev/packages/get).

(2) You don't have to rely on a class to hold your route arguments, but it wil help you be consistent in your project.

## Dependency management

The dependencies are all management in a file called `pubspec.yaml`. This file is the equivalent for the well-known `package.json`.
I don't think much information are needed here, it is quite easy to read. An example of git dependency instead of a regular pub dependency is given with the "jpec_base" dependency.

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

## State management

### Stateful widget

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

Put the state in a separate file :

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

Think of all events that should force a change of state. In our case, only one can occur : a change of position.

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

## Control every pixel on your app

```
class CompassPainter extends CustomPainter {
  CompassPainter({@required this.angle}) : super();

  final double angle;
  double get rotation => -2 * pi * (angle / 360);

  Paint get _brush => new Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = 2.0;

  @override
  void paint(Canvas canvas, Size size) {
    Paint circle = _brush..color = Colors.black26;

    Paint needle = _brush
      ..color = Colors.black
      ..strokeWidth = 2;

    double radius = min(size.width / 2, size.height / 2);
    Offset center = Offset(size.width / 2, size.height / 2);

    double startRadiusPercent = 0.7;
    double endRadiusPercent = 0.9;

    Offset start = Offset(center.dx + radius * startRadiusPercent * cos(angle),
        center.dy + radius * startRadiusPercent * sin(angle));
    Offset end = Offset(center.dx + radius * endRadiusPercent * cos(angle),
        center.dy + radius * endRadiusPercent * sin(angle));

    canvas.translate(center.dx, center.dy);
    canvas.rotate(rotation);
    canvas.translate(-center.dx, -center.dy);
    canvas.drawLine(start, end, needle);
    canvas.drawCircle(center, radius, circle);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => true;
}

```
