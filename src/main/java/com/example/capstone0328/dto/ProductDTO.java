package com.example.capstone0328.dto;

public class ProductDTO {
    private Long id;
    private String name;
    private int price;
    private String location;

    public ProductDTO(Long id, String name, int price, String location) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.location = location;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public int getPrice() { return price; }
    public String getLocation() { return location; }
}