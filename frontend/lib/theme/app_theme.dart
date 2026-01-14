import 'package:flutter/material.dart';

import 'package:frontend/theme/theme_constants.dart';

class AppTheme extends ThemeConstants {
  static ThemeData lightTheme() {
    return ThemeData(
      useMaterial3: true,
      primaryColor: ThemeConstants.primaryColor,
      scaffoldBackgroundColor: ThemeConstants.appBackground,

      cardTheme: const CardThemeData(
        color: ThemeConstants.appBackground,
        shape: RoundedRectangleBorder(
          borderRadius: ThemeConstants.standardBorderRadius,
          side: BorderSide(
            color: ThemeConstants.borderColor,
            width: ThemeConstants.standardBorderWidth,
          ),
        ),
      ),

      buttonTheme: ButtonThemeData(
        shape: RoundedRectangleBorder(
          borderRadius: ThemeConstants.standardBorderRadius,
          side: BorderSide(
            color: ThemeConstants.borderColor,
            width: ThemeConstants.standardBorderWidth,
          ),
        ),
        buttonColor: ThemeConstants.appBackground,
        textTheme: ButtonTextTheme.primary,
      ),

      textTheme: const TextTheme(
        bodyLarge: ThemeConstants.bodyLarge,
        bodyMedium: ThemeConstants.bodyStandard,
        bodySmall: ThemeConstants.bodySmall,
        titleLarge: ThemeConstants.titleLarge,
        titleMedium: ThemeConstants.titleMedium,
        labelLarge: ThemeConstants.labelLarge,
        labelSmall: ThemeConstants.labelStandard,
      ),
    );
  }
}
