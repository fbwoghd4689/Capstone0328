package com.example.capstone0328.service;

import com.example.capstone0328.dto.ProductDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Arrays;

@Service
public class ProductService {
    public List<ProductDTO> getAllProducts() {
        return Arrays.asList(
                new ProductDTO(1L, "중고 아이폰 13", 700000, "서울"),
                new ProductDTO(2L, "맥북 프로 16인치", 2500000, "부산")
        );
    }
}
