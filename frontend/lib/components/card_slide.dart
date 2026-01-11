import 'package:flutter/material.dart';

import 'package:frontend/theme/theme_constants.dart';

class CardSlide extends StatelessWidget {
  final List<Widget> cards;
  final double height;

  const CardSlide({super.key, required this.cards, this.height = 200});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      padding: const EdgeInsets.all(ThemeConstants.standardPadding),
      child: Row(
        children: List.generate(
          cards.length,
          (index) => Padding(
            padding: const EdgeInsets.only(
              right: ThemeConstants.standardPadding,
            ),
            child: SizedBox(height: height, child: cards[index]),
          ),
        ),
      ),
    );
  }
}
