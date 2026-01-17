import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';

import 'package:frontend/repository/agendamento.dart';

import 'package:frontend/components/calendar.dart';

import 'package:frontend/theme/theme_constants.dart';

class Agendamentos extends StatefulWidget {
  const Agendamentos({super.key});

  @override
  State<Agendamentos> createState() => _AgendamentosState();
}

class _AgendamentosState extends State<Agendamentos> {
  DateTime selectedDay = DateTime.now();
  DateTime focusedDay = DateTime.now();
  CalendarFormat calendarFormat = CalendarFormat.month;

  final Agendamento agendamento = Agendamento(
    data: "2024-07-01",
    horario: "10:00 AM",
  );

  @override
  Widget build(BuildContext context) {
    final agendamentos = <String, List<Agendamento>>{
      "2": [agendamento, agendamento, agendamento],
      "5": [agendamento, agendamento, agendamento, agendamento, agendamento],
      "12": [agendamento, agendamento, agendamento],
      "16": [agendamento],
      "20": [agendamento, agendamento, agendamento],
      "27": [agendamento, agendamento],
    };

    final List<Agendamento> currentDayAgendamentos =
        agendamentos[selectedDay.day.toString()] ?? [];

    return ListView(
      children: [
        Calendar(
          selectedDay: selectedDay,
          focusedDay: focusedDay,
          calendarFormat: calendarFormat,
          agendamentos: agendamentos,
          onDaySelected: (selectedDay, focusedDay) {
            setState(() {
              this.selectedDay = selectedDay;
              this.focusedDay = focusedDay;
            });
          },
          onFormatChanged: (format) {
            setState(() {
              calendarFormat = format;
            });
          },
        ),
        Column(
          children: List.generate(
            currentDayAgendamentos.length,
            (index) => Padding(
              padding: const EdgeInsets.only(
                right: ThemeConstants.smallSpacing,
              ),
              child: currentDayAgendamentos[index].widgetCardLarge(),
            ),
          ),
        ),
      ],
    );
  }
}
