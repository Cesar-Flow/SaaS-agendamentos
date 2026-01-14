import 'package:flutter/material.dart';

class ThemeConstants {
  // Colors
  static const Color primaryColor = Color(0xFF7939F9);
  static const Color borderColor = Color(0xFF232323);

  static const Color appBackground = Color(0xFFF3F3F3);
  static const Color cardBackground = Color(0xFFF3F3F3);
  static const Color selectedCardBackground = borderColor;
  static const Color bottomNavBarBackground = Color(0xFF323232);

  static const Color bodyText = Color(0xFF121212);
  static const Color titleText = Color(0xFF121212);
  static const Color labelText = Color(0xFF484848);
  static const Color selectedContrastText = Color(0xFFE2E2E2);

  static const Color semanticCorrect = Color(0xFF7FE579);
  static const Color semanticWrong = Color(0xFFFF0F0F);

  // Border Size
  static const double standardBorderWidth = 3.0;
  static const double thinBorderWidth = 2.0;

  // Border Radius
  static const BorderRadius standardBorderRadius = BorderRadius.all(
    Radius.circular(16),
  );
  static const BorderRadius smallBorderRadius = BorderRadius.all(
    Radius.circular(8),
  );

  // Text Styles
  static const TextStyle titleLarge = TextStyle(
    color: titleText,
    fontWeight: FontWeight.normal,
    fontSize: 22,
  );
  static const TextStyle titleMedium = TextStyle(
    color: titleText,
    fontWeight: FontWeight.bold,
    fontSize: 18,
  );
  static const TextStyle bodyLarge = TextStyle(
    color: bodyText,
    fontWeight: FontWeight.normal,
    fontSize: 16,
  );
  static const TextStyle bodyStandard = TextStyle(
    color: bodyText,
    fontWeight: FontWeight.normal,
    fontSize: 14,
  );
  static const TextStyle bodySmall = TextStyle(
    color: bodyText,
    fontWeight: FontWeight.normal,
    fontSize: 12,
  );
  static const TextStyle labelStandard = TextStyle(
    color: labelText,
    fontWeight: FontWeight.normal,
    fontSize: 12,
  );
  static const TextStyle labelLarge = TextStyle(
    color: labelText,
    fontWeight: FontWeight.normal,
    fontSize: 12,
  );
  static const TextStyle bottomNavBarLabel = TextStyle(
    color: selectedContrastText,
    fontWeight: FontWeight.w500,
    fontSize: 12,
  );

  // Spacing/Padding/Margins
  static const double standardSpacing = 16.0;
  static const double smallSpacing = 8.0;
  static const double standardPadding = 12.0;
}
