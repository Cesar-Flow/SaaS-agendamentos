import 'package:flutter/material.dart';

class Notificacoes extends StatelessWidget {
  const Notificacoes({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Notificações')),
      body: Center(
        child: Text(
          'Notificações',
          style: Theme.of(context).textTheme.headlineMedium,
        ),
      ),
    );
  }
}
