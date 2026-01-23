import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class AuthProvider with ChangeNotifier {
  final Dio _dio = Dio();
  final FlutterSecureStorage _storage = const FlutterSecureStorage();

  bool _isAuthenticated = false;
  bool _isLoading = true;

  bool get isAuthenticated => _isAuthenticated;
  bool get isLoading => _isLoading;

  AuthProvider() {
    _dioInterceptors(_dio);
    _checkAuthStatus();
  }

  void _checkAuthStatus() async {
    try {
      _isLoading = true;
      notifyListeners();

      final token = await getAuthToken();
      if (token != null && token.isNotEmpty) {
        _isAuthenticated = true;
      } else {
        _isAuthenticated = false;
      }
    } catch (e) {
      debugPrint("Error checing auth status: $e");
      _isAuthenticated = false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
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
      setAuthToken(response.data['accessToken']);
      return "Registro bem sucedido";
    } on DioException catch (e) {
      debugPrint(e.response.toString());
      return e.response?.data["message"] ?? "Erro ao fazer registro";
    }
  }

  Future<String> login(String email, String password) async {
    try {
      debugPrint("Trying to login...");
      final response = await _dio.post(
        '/auth/login',
        data: {"email": email, "password": password},
      );

      debugPrint('Login response: ${response.data}, ${response.statusCode}');
      setAuthToken(response.data['accessToken']);
      _checkAuthStatus();
      return "Login bem sucedido";
    } on DioException catch (e) {
      debugPrint(e.response.toString());
      return e.response?.data["message"] ?? "Erro ao fazer login";
    }
  }

  Future<String> logout() async {
    try {
      debugPrint("Trying to logout...");
      await _dio.post('/auth/logout');

      setAuthToken("");
      return "Logout bem sucedido";
    } on DioException catch (e) {
      debugPrint(e.response.toString());
      return e.response?.data["message"] ?? "Erro ao fazer logout";
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

  void _dioInterceptors(Dio dio) async {
    dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (options, handler) async {
          options.baseUrl = "http://10.0.2.2:3000";
          options.headers['Content-Type'] = 'application/json';
          options.headers['Accept'] = 'application/json';
          options.receiveDataWhenStatusError = true;
          options.validateStatus = (status) {
            return status! >= 200 && status < 300;
          };

          final accessToken = await getAuthToken();
          if (accessToken != null && accessToken.isNotEmpty) {
            options.headers['Cookies'] = accessToken;
          }

          return handler.next(options);
        },
      ),
    );
  }

  void setAuthToken(String accessToken) async {
    _storage.write(key: "accessToken", value: accessToken);
    _dioInterceptors(_dio);
  }

  Future<String?> getAuthToken() async {
    final accessToken = await _storage.read(key: "accessToken");
    return accessToken;
  }
}
