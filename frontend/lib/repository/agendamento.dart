import 'package:frontend/components/agendamento_card_compacto.dart';

class Agendamento {
  String data;
  String horario;

  Agendamento({required this.data, required this.horario});

  AgendamentoCardCompacto renderizaCardCompacto() {
    return AgendamentoCardCompacto(data: data, horario: horario);
  }
}
