import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

class Auth {
  final Dio _dio = Dio();

  Auth() {
    _dioInterceptors(_dio);
  }

  Future<String> registerCustomer(
    String email,
    String name,
    String password,
    String phone,
    String notes,
  ) async {
    try {
      debugPrint(
        'Trying to register customer... $name, $email, $phone, $notes, $password',
      );
      final response = await _dio.post(
        '/auth/registerCustomer',
        data: {
          "email": email,
          "name": name,
          "password": password,
          "phone": phone,
          "notes": notes,
        },
      );
      debugPrint('Register response: ${response.data}, ${response.statusCode}');
      return response.statusCode.toString();
    } catch (e) {
      debugPrint('Register error: ${e.toString()}');
      return "400";
    }
  }

  Future<String> login(String email, String password) async {
    try {
      debugPrint("Trying to login...");
      final response = await _dio.post(
        '/auth/login',
        data: {"email": email, "password": password},
      );
      debugPrint('Login response: ${response.data}');
      return response.statusCode.toString();
    } catch (e) {
      debugPrint(e.toString());
      return "400";
    }
  }

  Future<String> logout() async {
    try {
      debugPrint("Trying to logout...");
      final response = await _dio.post('/auth/logout');
      return response.statusCode.toString();
    } catch (e) {
      debugPrint(e.toString());
      return "400";
    }
  }

  Future<String> getUser() async {
    try {
      debugPrint("Trying to get user...");
      final response = await _dio.get('/auth/getUser');
      debugPrint('User response: ${response.data}');
      return response.data.toString();
    } catch (e) {
      debugPrint(e.toString());
      return "400";
    }
  }

  void _dioInterceptors(Dio dio) {
    dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (options, handler) {
          options.baseUrl = "http://10.0.2.2:3000";
          options.headers['Content-Type'] = 'application/json';
          options.headers['Accept'] = 'application/json';
          options.validateStatus = (status) {
            return status! >= 200 && status < 500;
          };

          // final token = getAuthToken();
          // if (token.isNotEmpty) {
          //   options.headers['Authorization'] = 'Bearer $token';
          // }

          return handler.next(options);
        },
      ),
    );
  }

  String getAuthToken() {
    return "";
  }
}
