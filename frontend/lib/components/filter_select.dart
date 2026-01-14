import 'package:flutter/material.dart';

import 'package:frontend/theme/theme_constants.dart';

class FilterSelect extends StatelessWidget {
  final String selectedValue;
  final void Function(String) onSelectedChanged;
  static const _values = ['option1', 'option2', 'option3'];

  const FilterSelect({
    super.key,
    required this.selectedValue,
    required this.onSelectedChanged,
  });

  @override
  Widget build(BuildContext context) {
    return MenuAnchor(
      builder:
          (BuildContext context, MenuController controller, Widget? child) {
            return InkWell(
              onTap: () {
                if (controller.isOpen) {
                  controller.close();
                } else {
                  controller.open();
                }
              },
              child: Card(
                elevation: 0,
                shape: RoundedRectangleBorder(
                  side: BorderSide(
                    color: ThemeConstants.borderColor,
                    width: ThemeConstants.thinBorderWidth,
                  ),
                  borderRadius: BorderRadius.circular(8.0),
                ),
                child: Row(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(selectedValue),
                    ),
                    Icon(
                      controller.isOpen
                          ? Icons.arrow_drop_up_outlined
                          : Icons.arrow_drop_down_outlined,
                    ),
                  ],
                ),
              ),
            );
          },
      menuChildren: _values.map((value) {
        return MenuItemButton(
          onPressed: () {
            onSelectedChanged(value);
          },
          child: Text(value),
        );
      }).toList(),
    );
  }
}
