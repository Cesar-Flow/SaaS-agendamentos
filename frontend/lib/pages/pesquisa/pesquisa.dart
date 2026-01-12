import 'package:flutter/material.dart';

import 'package:frontend/repository/estabelecimento.dart';

import 'package:frontend/components/search_input.dart';

import 'package:frontend/theme/theme_constants.dart';

class Pesquisa extends StatefulWidget {
  const Pesquisa({super.key});

  @override
  State<Pesquisa> createState() => _PesquisaState();
}

class _PesquisaState extends State<Pesquisa> {
  final Estabelecimento estabelecimento = Estabelecimento(
    name: "Cabeleireiro XYZ",
    type: "Cabeleireiro",
  );

  @override
  Widget build(BuildContext context) {
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
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
      estabelecimento.widgetCardLarge(),
    ];
    return ListView(
      shrinkWrap: true,
      padding: EdgeInsets.all(ThemeConstants.standardSpacing),
      children: [
        SearchInput(),
        SizedBox(height: ThemeConstants.standardSpacing),
        Column(
          children: List.generate(
            estabelecimentosCards.length,
            (index) => Padding(
              padding: const EdgeInsets.only(top: 4.0, right: 4.0, left: 4.0),
              child: estabelecimentosCards[index],
            ),
          ),
        ),
      ],
    );
  }
}
