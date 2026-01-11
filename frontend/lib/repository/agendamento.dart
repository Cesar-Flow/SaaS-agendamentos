import 'package:frontend/components/agendamento_card_compact.dart';

class Agendamento {
  String data;
  String horario;

  Agendamento({required this.data, required this.horario});

  AgendamentoCardCompact widgetCardCompact() {
    return AgendamentoCardCompact(data: data, horario: horario);
  }
}
