import 'package:flutter/material.dart';

import 'package:frontend/repository/agendamento.dart';
import 'package:frontend/theme/theme_constants.dart';

class AgendamentoCardLarge extends StatelessWidget {
  final Agendamento agendamento;

  const AgendamentoCardLarge({super.key, required this.agendamento});

  @override
  Widget build(BuildContext context) {
    return Card.outlined(
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  agendamento.data,
                  style: Theme.of(
                    context,
                  ).textTheme.bodyMedium?.copyWith(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                Text(
                  agendamento.horario,
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
              ],
            ),
            Text(
              'Agendamento Compacto',
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            Icon(Icons.delete, color: ThemeConstants.semanticWrong),
          ],
        ),
      ),
    );
  }
}
