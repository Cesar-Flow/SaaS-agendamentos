import 'package:flutter/material.dart';

import 'package:frontend/repository/notificacao.dart';
import 'package:frontend/theme/theme_constants.dart';

class Notificacoes extends StatelessWidget {
  Notificacoes({super.key});

  final Notificacao notificacao = Notificacao(
    titulo: 'Seu agendamento foi cancelado por Estabelecimento 1',
    obs: 'Tive problemas familiares',
    data: '2024-06-01',
    hora: '12:00',
  );

  @override
  Widget build(BuildContext context) {
    final _notificacaoWidgetList = [
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
      notificacao.widgetCard(),
    ];

    return Scaffold(
      appBar: AppBar(
        backgroundColor: ThemeConstants.appBackground,
        title: const Text('Notificações'),
      ),
      body: ListView(
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: List.generate(
              _notificacaoWidgetList.length,
              (index) => Padding(
                padding: EdgeInsets.all(0.0),
                child: _notificacaoWidgetList[index],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
