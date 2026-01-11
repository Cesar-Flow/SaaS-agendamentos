import 'package:flutter/material.dart';

import 'pages/agendamentos/agendamentos.dart';
import 'pages/configuracao/configuracao.dart';
import 'pages/home/home.dart';
import 'pages/pesquisa/pesquisa.dart';

import 'components/bottom_nav.dart';
import 'components/top_bar.dart';

class Layout extends StatefulWidget {
  /// Widget do layout base do app. Encapsula layout e navegação.
  const Layout({super.key});

  @override
  State<Layout> createState() => _LayoutState();
}

class _LayoutState extends State<Layout> {
  int _currentIndex = 0;

  /// Widgets das páginas da bottomNav do app.
  final List<Widget> _pages = [
    Home(),
    Agendamentos(),
    Pesquisa(),
    Configuracao(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const TopBar(),
      body: IndexedStack(index: _currentIndex, children: _pages),
      bottomNavigationBar: BottomNav(
        currentIndex: _currentIndex,
        changeIndex: (int index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
