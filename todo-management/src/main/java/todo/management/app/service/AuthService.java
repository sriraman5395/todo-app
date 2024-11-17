package todo.management.app.service;

import todo.management.app.dto.LoginDto;
import todo.management.app.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}