import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';

import 'package:frontend/repository/agendamento.dart';

import 'package:frontend/theme/theme_constants.dart';

class Calendar extends StatefulWidget {
  final DateTime selectedDay;
  final DateTime focusedDay;
  final CalendarFormat calendarFormat;
  final Map<String, List<Agendamento>> agendamentos;
  final void Function(DateTime, DateTime) onDaySelected;
  final void Function(CalendarFormat) onFormatChanged;

  const Calendar({
    super.key,
    required this.selectedDay,
    required this.focusedDay,
    required this.calendarFormat,
    required this.agendamentos,
    required this.onFormatChanged,
    required this.onDaySelected,
  });

  @override
  State<Calendar> createState() => _CalendarState();
}

class _CalendarState extends State<Calendar> {
  @override
  Widget build(BuildContext context) {
    return TableCalendar(
      locale: 'pt_BR',
      firstDay: DateTime.utc(2010, 10, 16),
      lastDay: DateTime.utc(2030, 3, 14),
      focusedDay: widget.focusedDay,
      availableCalendarFormats: const {
        CalendarFormat.month: 'Semana',
        CalendarFormat.twoWeeks: 'Mês',
        CalendarFormat.week: '2 Semanas',
      },
      selectedDayPredicate: (day) {
        return isSameDay(widget.selectedDay, day);
      },
      onDaySelected: widget.onDaySelected,
      calendarFormat: widget.calendarFormat,
      onFormatChanged: widget.onFormatChanged,
      eventLoader: (day) {
        return widget.agendamentos[day.day.toString()] ?? [];
      },
      // UI
      calendarBuilders: CalendarBuilders(
        markerBuilder: (context, day, events) {
          if (events.isEmpty) return null;

          return Positioned(
            bottom: 2,
            right: 5,
            child: Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: ThemeConstants.primaryColor,
                shape: BoxShape.circle,
              ),
              child: Text(
                events.length.toString(),
                style: const TextStyle(color: Colors.white, fontSize: 12),
              ),
            ),
          );
        },
        todayBuilder: (context, day, focusedDay) => Center(
          child: Container(
            decoration: BoxDecoration(
              color: ThemeConstants.primaryColorLight,
              shape: BoxShape.circle,
            ),
            width: 40,
            height: 40,
            child: Center(
              child: Text(
                day.day.toString(),
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
            ),
          ),
        ),
        selectedBuilder: (context, day, focusedDay) => Center(
          child: Container(
            decoration: BoxDecoration(
              color: ThemeConstants.secondaryColor,
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
    );
  }
}
