import 'package:flutter/material.dart';
import 'package:frontend/theme/theme_constants.dart';

import 'package:table_calendar/table_calendar.dart';

class Agendamentos extends StatefulWidget {
  const Agendamentos({super.key});

  @override
  State<Agendamentos> createState() => _AgendamentosState();
}

class _AgendamentosState extends State<Agendamentos> {
  DateTime _selectedDay = DateTime.now();
  DateTime _focusedDay = DateTime.now();
  CalendarFormat _calendarFormat = CalendarFormat.month;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TableCalendar(
          locale: 'pt_BR',
          firstDay: DateTime.utc(2010, 10, 16),
          lastDay: DateTime.utc(2030, 3, 14),
          focusedDay: _focusedDay,
          availableCalendarFormats: const {
            CalendarFormat.month: 'Semana',
            CalendarFormat.twoWeeks: 'Mês',
            CalendarFormat.week: '2 Semanas',
          },
          selectedDayPredicate: (day) {
            return isSameDay(_selectedDay, day);
          },
          onDaySelected: (selectedDay, focusedDay) {
            setState(() {
              _selectedDay = selectedDay;
              _focusedDay = focusedDay;
            });
          },
          calendarFormat: _calendarFormat,
          onFormatChanged: (format) {
            setState(() {
              _calendarFormat = format;
            });
          },
          // UI
          calendarBuilders: CalendarBuilders(
            selectedBuilder: (context, day, focusedDay) => Center(
              child: Container(
                decoration: BoxDecoration(
                  color: ThemeConstants.primaryColor,
                  shape: BoxShape.circle,
                ),
                width: 40,
                height: 40,
                child: Center(
                  child: Text(
                    day.day.toString(),
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: ThemeConstants.selectedContrastText,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
