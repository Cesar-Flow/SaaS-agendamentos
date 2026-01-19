import 'package:flutter/material.dart';

import 'package:frontend/theme/theme_constants.dart';

class FilterSelect extends StatelessWidget {
  final List<String> values;
  final int selectedIndex;
  final void Function(int) onSelectedChanged;

  const FilterSelect({
    super.key,
    required this.values,
    required this.selectedIndex,
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
              child: Align(
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
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(values[selectedIndex]),
                      ),
                      Icon(
                        controller.isOpen
                            ? Icons.arrow_drop_up_outlined
                            : Icons.arrow_drop_down_outlined,
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
      menuChildren: values.indexed.map((entry) {
        final (index, value) = entry;
        return MenuItemButton(
          style: ButtonStyle(
            padding: WidgetStateProperty.all(
              EdgeInsets.all(ThemeConstants.standardSpacing),
            ),
            textStyle: WidgetStateProperty.all(
              Theme.of(context).textTheme.bodyMedium,
            ),
            backgroundColor: WidgetStateProperty.all(
              Theme.of(context).scaffoldBackgroundColor,
            ),
          ),
          onPressed: () {
            onSelectedChanged(index);
          },
          child: Text(value),
        );
      }).toList(),
    );
  }
}
