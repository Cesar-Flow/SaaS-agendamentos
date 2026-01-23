import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:provider/provider.dart';

import 'package:frontend/auth_gate.dart';
import 'package:frontend/layout.dart';
import 'package:frontend/pages/login/login.dart';
import 'package:frontend/pages/register/register.dart';
import 'package:frontend/pages/perfil/perfil.dart';
import 'package:frontend/pages/notificacoes/notificacoes.dart';
import 'package:frontend/pages/estabelecimento/estabelecimento_page.dart';

import 'package:frontend/theme/app_theme.dart';
import 'package:frontend/providers/auth_provider.dart';

void main() {
  initializeDateFormatting().then((_) => runApp(const MyApp()));
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => AuthProvider(),
      child: MaterialApp(
        home: AuthGate(),
        theme: AppTheme.lightTheme(),
        routes: {
          '/perfil': (context) => Perfil(),
          '/notificacoes': (context) => Notificacoes(),
          '/estabelecimento': (context) => EstabelecimentoPage(),
          '/login': (context) => Login(),
          '/register': (context) => Register(),
        },
      ),
    );
  }
}
