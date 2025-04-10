// UserRepository.java
package com.example.capstone0328.repository;

import com.example.capstone0328.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByEmail(String email);
}