import 'package:flutter/material.dart';

import 'package:frontend/repository/agendamento.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final Agendamento agendamento = Agendamento(
    data: "2024-07-01",
    horario: "10:00 AM",
  );

  @override
  Widget build(BuildContext context) {
    return Column(
      spacing: 10,
      children: [
        agendamento.renderizaCardCompacto(),
        agendamento.renderizaCardCompacto(),
      ],
    );
  }
}
