import 'package:flutter/material.dart';

class Login extends StatelessWidget {
  const Login({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Login'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(36.0),
          child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            TextField(
              decoration: const InputDecoration(
                labelText: 'Email',
              ),
            ),
            TextField(
              decoration: const InputDecoration(
                labelText: 'Password',
              ),
            ),
            TextButton(onPressed: () {
              Navigator.pushNamed(context, '/register');
            }, child: const Text('Registre-se')),
            ElevatedButton(onPressed: () {
              
            }, child: const Text('Login'))
          ],
        ),
        ),
      ),
    );
  }
}