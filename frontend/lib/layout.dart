import 'package:flutter/material.dart';

import 'package:frontend/pages/agendamentos/agendamentos.dart';
import 'package:frontend/pages/configuracao/configuracao.dart';
import 'package:frontend/pages/home/home.dart';
import 'package:frontend/pages/pesquisa/pesquisa.dart';

import 'package:frontend/components/bottom_nav.dart';
import 'package:frontend/components/top_bar.dart';

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
