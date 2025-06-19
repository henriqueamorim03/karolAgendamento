import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/images/adaptive-icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Karol Agendamento</Text>
        <Text style={styles.subtitle}>
          Agende seu horário para um design de cílios perfeito com facilidade e rapidez.
        </Text>
      </View>

      <Link href="/agendamento" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fazer meu Agendamento</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6f9',
    padding: 25,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d45a8a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#d45a8a',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});