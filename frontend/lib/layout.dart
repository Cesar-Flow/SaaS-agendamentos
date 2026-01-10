/**
 * Layout.dart
 * Encapsula a lógica de navegação entre diferentes páginas do aplicativo.
 * 
 * Utiliza um Scaffold para estruturar a interface base com uma barra superior e 
 * uma barra de navegação inferior.
 */

import 'package:flutter/material.dart';

import 'pages/agendamentos/agendamentos.dart';
import 'pages/configuracao/configuracao.dart';
import 'pages/home/home.dart';
import 'pages/pesquisa/pesquisa.dart';

import 'components/bottom_nav.dart';
import 'components/top_bar.dart';

class Layout extends StatefulWidget {
  const Layout({super.key});

  @override
  State<Layout> createState() => _LayoutState();
}

class _LayoutState extends State<Layout> {
  int _currentIndex = 0;

  final List<Widget> _pages = [
    Home(),
    Pesquisa(),
    Configuracao(),
    Agendamentos(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Layout')),
      body: _pages[_currentIndex],
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
