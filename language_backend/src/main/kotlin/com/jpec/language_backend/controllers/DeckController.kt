package com.jpec.language_backend.controllers

import org.springframework.web.bind.annotation.*
import com.jpec.language_backend.models.*;
import org.springframework.web.bind.annotation.GetMapping

@RestController
@RequestMapping("/deck")
class DeckController {

  @GetMapping("/")
  fun index(): String{
    return "toto";
  }

  @GetMapping("/test")
  fun indexTest(): String{
    return "help";
//    return VocabCard(57, "Jpec", listOf(WordTranslation(value = "toto", languageCode = "fr-FR")), );
  }
}