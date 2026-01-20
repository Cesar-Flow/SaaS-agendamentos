import 'package:flutter/material.dart';

import 'package:frontend/services/auth.dart';

class Register extends StatelessWidget {
  Register({super.key});
  final Api api = Api();

  Future <void> registerUser() async {
    String status = await api.registerCustomer();
    debugPrint('Registration status: $status');
  }

  Future<void> getUser() async {
    String userData = await api.getUser();
    debugPrint('User data: $userData');
  }

  Future<void> login() async {
    String loginStatus = await api.login();
    debugPrint('Login status: $loginStatus');
  }

  Future<void> logout() async {
    String logoutStatus = await api.logout();
    debugPrint('Logout status: $logoutStatus');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Register'),
      ),
      body: Column(
        children: [
          ElevatedButton(
            onPressed: () async {
              await registerUser();
            },
            child: const Text('Resgistrar Cliente'),
          ),
          ElevatedButton(onPressed: () async {
              await getUser();
            }, child: const Text('Dados de usuário')),
          ElevatedButton(onPressed: () async {
              await login();
            }, child: const Text('Login Cliente')),
          ElevatedButton(onPressed: () async {
              await logout();
            }, child: const Text('Logout Cliente')),
        ],
      )
    );
  }
}