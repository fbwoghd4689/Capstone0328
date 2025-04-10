package com.example.capstone0328.controller;

import com.example.capstone0328.dto.UserDto;
import com.example.capstone0328.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody UserDto userDto) {
        userService.registerUser(userDto);
        return "회원가입 성공";
    }
}