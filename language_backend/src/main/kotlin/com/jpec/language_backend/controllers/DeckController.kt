package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.VocabCard
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/deck")
class DeckController {

    @GetMapping("/")
    fun index(): String{
        return "toto";
    }

    @GetMapping("/test")
    fun indexTest(): VocabCard {
        return VocabCard(57, "Jpec");
    }
}