// UserServiceImpl.java
package com.example.capstone0328.service;

import com.example.capstone0328.dto.UserDto;
import com.example.capstone0328.model.User;
import com.example.capstone0328.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void registerUser(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword()); // 암호화 적용 필요 시 여기서 BCrypt 처리 가능
        user.setPhone(userDto.getPhone());

        userRepository.save(user);
    }
}

