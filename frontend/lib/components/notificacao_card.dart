import 'package:flutter/material.dart';

import 'package:frontend/repository/notificacao.dart';

import 'package:frontend/theme/theme_constants.dart';

class NotificacaoCard extends StatelessWidget {
  final Notificacao notitificacao;

  const NotificacaoCard({super.key, required this.notitificacao});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 0,
      shape: Border(
        bottom: BorderSide(color: ThemeConstants.borderColor, width: 2),
      ),
      child: Padding(
        padding: const EdgeInsets.all(ThemeConstants.standardPadding),
        child: SizedBox(
          width: MediaQuery.of(context).size.width,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    notitificacao.data,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  Text(
                    notitificacao.hora,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ],
              ),
              SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      notitificacao.titulo,
                      style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Estabelecimento: ${notitificacao.obs}',
                      style: Theme.of(context).textTheme.labelLarge,
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
