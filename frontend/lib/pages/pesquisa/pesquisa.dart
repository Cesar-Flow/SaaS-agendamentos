import 'package:flutter/material.dart';

import 'package:frontend/repository/estabelecimento.dart';

import 'package:frontend/components/search_input.dart';
import 'package:frontend/components/filter_select.dart';

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
  static const _typeValues = ['option1', 'option2', 'option3'];
  int _typeIndex = 0;

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
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            FilterSelect(
              values: _typeValues,
              selectedIndex: _typeIndex,
              onSelectedChanged: (int index) {
                setState(() {
                  _typeIndex = index;
                });
              },
            ),
            FilterSelect(
              values: _typeValues,
              selectedIndex: _typeIndex,
              onSelectedChanged: (int index) {
                setState(() {
                  _typeIndex = index;
                });
              },
            ),
            FilterSelect(
              values: _typeValues,
              selectedIndex: _typeIndex,
              onSelectedChanged: (int index) {
                setState(() {
                  _typeIndex = index;
                });
              },
            ),
          ],
        ),
        SizedBox(height: 8.0),
        Column(
          children: List.generate(
            estabelecimentosCards.length,
            (index) => estabelecimentosCards[index],
          ),
        ),
      ],
    );
  }
}
