import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:frontend/providers/auth_provider.dart';

import 'package:frontend/pages/login/login.dart';
import 'package:frontend/layout.dart';

class AuthGate extends StatelessWidget {
  const AuthGate({super.key});

  @override
  Widget build(BuildContext context) {
    final authProvider = context.watch<AuthProvider>();

    if (authProvider.isLoading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    if (authProvider.isAuthenticated) {
      return Layout();
    } else {
      return Login();
    }
  }
}
