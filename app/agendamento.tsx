import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,
  Platform, SafeAreaView, ScrollView, KeyboardAvoidingView
} from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function AgendamentoScreen() {
  const [nome, setNome] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [servico, setServico] = useState<string>('Design de Cílios');
  
  const [dia, setDia] = useState<string>('');
  const [mes, setMes] = useState<string>('');
  const [hora, setHora] = useState<string>('');

  const handleAgendamento = async () => {
    if (!nome || !whatsapp || !servico || !dia || !mes || !hora) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const anoAtual = new Date().getFullYear();
      const [horas, minutos] = hora.split('h').map(Number);

      const dataAgendamento = new Date(anoAtual, Number(mes) - 1, Number(dia), horas, minutos);

      if (isNaN(dataAgendamento.getTime())) {
        Alert.alert('Erro', 'A data ou hora inserida é inválida. Verifique os campos.');
        return;
      }
      
      await addDoc(collection(db, 'agendamentos'), {
        nome: nome,
        whatsapp: whatsapp,
        servico: servico,
        dataAgendamento: dataAgendamento,
        criadoEm: new Date(),
      });

      Alert.alert('Sucesso!', 'Seu agendamento foi realizado. Entraremos em contato para confirmar!');
      
      setNome('');
      setWhatsapp('');
      setDia('');
      setMes('');
      setHora('');

    } catch (error) {
      console.error('Erro ao agendar: ', error);
      Alert.alert('Erro', 'Ocorreu um erro ao realizar o agendamento. Tente novamente.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Agendamento de Cílios</Text>
          <Text style={styles.subtitle}>Preencha os dados abaixo para agendar o seu horário.</Text>

          <TextInput
            style={styles.input}
            placeholder="Seu Nome Completo"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Seu WhatsApp(número com DDD)"
            keyboardType="phone-pad"
            value={whatsapp}
            onChangeText={setWhatsapp}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Serviço Desejado"
            value={servico}
            onChangeText={setServico}
            placeholderTextColor="#888"
          />

          <View style={styles.dateContainer}>
            <TextInput
              style={[styles.input, styles.dateInput]}
              placeholder="Dia"
              keyboardType="numeric"
              maxLength={2}
              value={dia}
              onChangeText={setDia}
              placeholderTextColor="#888"
            />
            <TextInput
              style={[styles.input, styles.dateInput]}
              placeholder="Mês"
              keyboardType="numeric"
              maxLength={2}
              value={mes}
              onChangeText={setMes}
              placeholderTextColor="#888"
            />
            <TextInput
              style={[styles.input, styles.dateInput]}
              placeholder="Horário"
              maxLength={5}
              value={hora}
              onChangeText={setHora}
              placeholderTextColor="#888"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleAgendamento}>
            <Text style={styles.buttonText}>Agendar Horário</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fdf6f9' },
  container: { flex: 1 },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d45a8a',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f0dce4',
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#d45a8a',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});