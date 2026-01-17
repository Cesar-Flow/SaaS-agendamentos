import 'package:flutter/material.dart';

import 'package:frontend/repository/agendamento.dart';

class AgendamentoCardCompact extends StatelessWidget {
  final Agendamento agendamento;

  const AgendamentoCardCompact({super.key, required this.agendamento});

  @override
  Widget build(BuildContext context) {
    return Card.outlined(
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              agendamento.data,
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 4),
            Text(
              agendamento.horario,
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            const SizedBox(height: 4),
            Text(
              'Agendamento Compacto',
              style: Theme.of(context).textTheme.bodyLarge,
            ),
          ],
        ),
      ),
    );
  }
}
