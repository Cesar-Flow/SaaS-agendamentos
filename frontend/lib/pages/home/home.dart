import 'package:flutter/material.dart';

import 'package:frontend/repository/agendamento.dart';
import 'package:frontend/repository/estabelecimento.dart';

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
  final Estabelecimento estabelecimento = Estabelecimento(
    name: "Cabeleireiro XYZ",
    type: "Cabeleireiro",
  );

  @override
  Widget build(BuildContext context) {
    final agendamentoCards = [
      agendamento.widgetCardCompact(),
      agendamento.widgetCardCompact(),
      agendamento.widgetCardCompact(),
    ];
    final estabelecimentosCards = [
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
    ];
    return ListView(
      padding: EdgeInsets.all(ThemeConstants.standardSpacing),
      children: [
        Text(
          "Seus Agendamentos",
          style: Theme.of(context).textTheme.titleLarge,
        ),
        CardSlide(cards: agendamentoCards, height: 120),
        Text(
          "Estabelecimentos Favoritos",
          style: Theme.of(context).textTheme.titleLarge,
        ),
        Text(
          "Agenda Frequentemente",
          style: Theme.of(context).textTheme.titleLarge,
        ),
        Column(
          children: List.generate(
            estabelecimentosCards.length,
            (index) => Padding(
              padding: const EdgeInsets.only(
                right: ThemeConstants.smallSpacing,
              ),
              child: SizedBox(child: estabelecimentosCards[index]),
            ),
          ),
        ),
      ],
    );
  }
}
