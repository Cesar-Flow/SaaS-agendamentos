import 'package:flutter/material.dart';

class BottomNav extends StatelessWidget {
  const BottomNav({
    super.key,
    required this.currentIndex,
    required this.changeIndex,
  });

  final int currentIndex;
  final void Function(int) changeIndex;

  @override
  Widget build(BuildContext context) {
    return NavigationBar(
      destinations: [
        NavigationDestination(icon: Icon(Icons.home), label: 'Home'),
        NavigationDestination(
          icon: Icon(Icons.calendar_month),
          label: 'Agendamentos',
        ),
        NavigationDestination(icon: Icon(Icons.search), label: 'Pesquisar'),
        NavigationDestination(
          icon: Icon(Icons.settings),
          label: 'Configurações',
        ),
      ],
      selectedIndex: currentIndex,
      onDestinationSelected: (int index) {
        changeIndex(index);
      },
    );
  }
}
