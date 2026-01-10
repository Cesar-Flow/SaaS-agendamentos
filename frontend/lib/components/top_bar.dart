import 'package:flutter/material.dart';

class TopBar extends StatelessWidget {
  const TopBar({super.key});

  @override
  Widget build(BuildContext context) {
    return AppBar(title: const Text('SaaS Agendamentos'), elevation: 0);
  }
}
