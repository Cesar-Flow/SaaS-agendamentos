import 'package:frontend/components/agendamento_card_compact.dart';
import 'package:frontend/components/agendamento_card_large.dart';

class Agendamento {
  String data;
  String horario;
  String estabelecimento = "Estabelecimento 1";

  Agendamento({required this.data, required this.horario});

  AgendamentoCardCompact widgetCardCompact() {
    return AgendamentoCardCompact(agendamento: this);
  }

  AgendamentoCardLarge widgetCardLarge() {
    return AgendamentoCardLarge(agendamento: this);
  }
}
