import 'package:flutter/material.dart';

class AgendamentoCardCompacto extends StatelessWidget {
  final String data;
  final String horario;

  const AgendamentoCardCompacto({
    super.key,
    required this.data,
    required this.horario,
  });

  @override
  Widget build(BuildContext context) {
    return Card.outlined(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Agendamento Compacto'),
            const SizedBox(height: 8),
            Text('Data: $data'),
            const SizedBox(height: 8),
            Text('Horário: $horario'),
          ],
        ),
      ),
    );
  }
}
