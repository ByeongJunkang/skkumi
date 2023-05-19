package com.example.backend.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class backend {


    @GetMapping("/home")
    @ResponseBody
    public String home() {
        return "Hello World!";
    }
}
