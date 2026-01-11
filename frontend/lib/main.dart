import 'package:flutter/material.dart';

import 'package:frontend/layout.dart';
import 'package:frontend/pages/perfil/perfil.dart';
import 'package:frontend/pages/notificacoes/notificacoes.dart';
import 'package:frontend/theme/app_theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Layout(),
      theme: AppTheme.lightTheme(),
      routes: {
        '/perfil': (context) => Perfil(),
        '/notificacoes': (context) => Notificacoes(),
      },
    );
  }
}
