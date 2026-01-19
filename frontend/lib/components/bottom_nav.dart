import 'package:flutter/material.dart';

import 'package:frontend/theme/theme_constants.dart';

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
      backgroundColor: ThemeConstants.bottomNavBarBackground,
      labelTextStyle: WidgetStateProperty.all(ThemeConstants.bottomNavBarLabel),
      indicatorColor: ThemeConstants.primaryColor,
      destinations: [
        NavigationDestination(
          icon: Icon(Icons.home, color: Colors.white),
          label: 'SaaS',
        ),

        NavigationDestination(
          icon: Icon(Icons.calendar_month, color: Colors.white),
          label: 'Agendamentos',
        ),
        NavigationDestination(
          icon: Icon(Icons.search, color: Colors.white),
          label: 'Pesquisar',
        ),
        NavigationDestination(
          icon: Icon(Icons.settings, color: Colors.white),
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
