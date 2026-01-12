import 'package:flutter/material.dart';

import 'package:frontend/theme/theme_constants.dart';

class SearchInput extends StatelessWidget {
  const SearchInput({super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      style: Theme.of(context).textTheme.bodyLarge,
      decoration: InputDecoration(
        hintText: 'Procurar Estabelecimento...',
        prefixIcon: Icon(Icons.search),
        contentPadding: EdgeInsets.all(8.0),
        enabledBorder: OutlineInputBorder(
          borderRadius: ThemeConstants.standardBorderRadius,
          borderSide: BorderSide(width: ThemeConstants.standardBorderWidth),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: ThemeConstants.standardBorderRadius,
          borderSide: BorderSide(width: ThemeConstants.standardBorderWidth),
        ),
      ),
    );
  }
}
