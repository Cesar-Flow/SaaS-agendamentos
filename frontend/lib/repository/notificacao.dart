import 'package:frontend/components/notificacao_card.dart';

class Notificacao {
  final String titulo;
  final String obs;
  final String data;
  final String hora;

  Notificacao({
    required this.titulo,
    required this.obs,
    required this.data,
    required this.hora,
  });

  NotificacaoCard widgetCard() {
    return NotificacaoCard(notitificacao: this);
  }
}
