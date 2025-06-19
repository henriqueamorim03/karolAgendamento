const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { logger } = require("firebase-functions");
const twilio = require("twilio");

const accountSid = "-- COLE AQUI O SID DA SUA CONTA TWILIO --";
const authToken = "-- COLE AQUI O TOKEN DA SUA CONTA TWILIO --";
const toWhatsAppNumber = "whatsapp:+5585998313758";


const fromWhatsAppNumber = "whatsapp:+14155238886";
const contentSid = "-- COLE AQUI O SID DO SEU TEMPLATE --"; 

const client = new twilio(accountSid, authToken);

exports.enviarNotificacaoDeAgendamento = onDocumentCreated("agendamentos/{agendamentoId}", async (event) => {
  const snapshot = event.data;
  if (!snapshot) { return; }

  const agendamento = snapshot.data();
  const dataAgendamento = agendamento.dataAgendamento.toDate();

  const variavel1 = agendamento.servico;
  const variavel2 = `${dataAgendamento.toLocaleDateString("pt-BR")} às ${dataAgendamento.toLocaleTimeString("pt-BR").slice(0, 5)}`;

  try {
    await client.messages.create({
      contentSid: contentSid,
      from: fromWhatsAppNumber,
      to: toWhatsAppNumber,
      contentVariables: JSON.stringify({ '1': variavel1, '2': variavel2 }),
    });
    logger.log("Mensagem de TEMPLATE enviada com sucesso!");
  } catch (error) {
    logger.error("Erro ao enviar o TEMPLATE:", error);
  }
});