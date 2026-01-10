import 'package:flutter/material.dart';
import '../../components/bottom_nav.dart';

class Agendamentos extends StatefulWidget {
  const Agendamentos({super.key});

  @override
  State<Agendamentos> createState() => _AgendamentosState();
}

class _AgendamentosState extends State<Agendamentos> {
  @override
  Widget build(BuildContext context) {
    return Column(children: [Text("Agendamentos")]);
  }
}
