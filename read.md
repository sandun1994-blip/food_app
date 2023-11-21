# npx react-native init MyApp --template react-native-template-typescript
# npm install @react-navigation/native
# npm install react-native-screens react-native-safe-area-context

* react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the highlighted code to the body of MainActivity class:

public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}

* and make sure to add the following import statement at the top of this file below your package statement:

import android.os.Bundle;


# npm install @react-navigation/native-stack
# npm install @react-navigation/bottom-tabs
# npm i react-native-linear-gradient
# npm i lottie-react-native
# npm i @types/react-native-vector-icons
# npm i zustand
# npm i immer
# npm i @react-native-async-storage/async-storage

start project dev
./gradlew clean
# npx react-native run-android