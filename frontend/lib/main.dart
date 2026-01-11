import 'package:flutter/material.dart';

import 'layout.dart';
import 'pages/perfil/perfil.dart';
import 'pages/notificacoes/notificacoes.dart';

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
      routes: {
        '/perfil': (context) => Perfil(),
        '/notificacoes': (context) => Notificacoes(),
      },
    );
  }
}
