import 'package:flutter/material.dart';

import 'package:frontend/repository/agendamento.dart';
import 'package:frontend/components/card_slide.dart';

import 'package:frontend/theme/theme_constants.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final Agendamento agendamento = Agendamento(
    data: "2024-07-01",
    horario: "10:00 AM",
  );

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.all(ThemeConstants.standardSpacing),
      children: [
        Text(
          "Seus Agendamentos",
          style: Theme.of(context).textTheme.titleLarge,
        ),
        CardSlide(
          cards: [
            agendamento.widgetCardCompacto(),
            agendamento.widgetCardCompacto(),
            agendamento.widgetCardCompacto(),
          ],
          height: 120,
        ),
        Text(
          "Estabelecimentos Favoritos",
          style: Theme.of(context).textTheme.titleLarge,
        ),
        Text(
          "Agenda Frequentemente",
          style: Theme.of(context).textTheme.titleLarge,
        ),
      ],
    );
  }
}
