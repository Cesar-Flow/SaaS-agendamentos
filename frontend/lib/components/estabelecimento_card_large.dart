import 'package:flutter/material.dart';
import 'package:frontend/theme/theme_constants.dart';

class EstabelecimentoCardLarge extends StatelessWidget {
  final String name;
  final String type;

  const EstabelecimentoCardLarge({
    super.key,
    required this.name,
    required this.type,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(ThemeConstants.standardPadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Add your content here
              Text(name, style: Theme.of(context).textTheme.titleMedium),
              Text(type, style: Theme.of(context).textTheme.bodyMedium),
            ],
          ),
        ),
      ),
    );
  }
}
