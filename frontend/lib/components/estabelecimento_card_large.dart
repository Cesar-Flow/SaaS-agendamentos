import 'package:flutter/material.dart';

import 'package:frontend/repository/estabelecimento.dart';

import 'package:frontend/theme/theme_constants.dart';

class EstabelecimentoCardLarge extends StatelessWidget {
  final Estabelecimento estabelecimento;

  const EstabelecimentoCardLarge({super.key, required this.estabelecimento});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.pushNamed(
          context,
          '/estabelecimento',
          arguments: {'estabelecimento': estabelecimento},
        );
      },
      child: SizedBox(
        width: double.infinity,
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(ThemeConstants.standardPadding),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Add your content here
                Text(
                  estabelecimento.getName(),
                  style: Theme.of(context).textTheme.titleMedium,
                ),
                Text(
                  estabelecimento.getType(),
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
