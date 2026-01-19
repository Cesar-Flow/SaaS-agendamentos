import 'package:flutter/material.dart';

import 'package:frontend/repository/agendamento.dart';
import 'package:frontend/components/modals/desagendamento_modal.dart';

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
            IconButton(
              onPressed: () {
                showDialog(
                  context: context,
                  builder: (BuildContext context) {
                    return DesagendamentoModal(
                      itemName: agendamento.estabelecimento,
                      day: agendamento.data,
                      time: agendamento.horario,
                      confirmCallback: () {
                        debugPrint("Desagendamento feito");
                      },
                    );
                  },
                );
              },
              icon:Icon(Icons.delete, color: ThemeConstants.semanticWrong),
            ),
          ],
        ),
      ),
    );
  }
}
