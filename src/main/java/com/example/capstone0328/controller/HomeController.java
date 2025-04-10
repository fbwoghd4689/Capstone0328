package com.example.capstone0328.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/home")
public class HomeController {

    @GetMapping
    public Map<String, String> home() {
        return Map.of(
                "title", "당근마켓",
                "description", "중고거래, 동네생활, 알바까지 다양한 서비스를 제공합니다.",
                "imageUrl", "https://via.placeholder.com/600x300" // 샘플 이미지
        );
    }
}
