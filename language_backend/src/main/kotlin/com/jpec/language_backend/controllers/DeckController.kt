package com.jpec.language_backend.controllers

import org.springframework.web.bind.annotation.*
import com.jpec.language_backend.models.*;
import org.springframework.web.bind.annotation.GetMapping

@RestController
@RequestMapping("/decks")
class DeckController {

  @GetMapping("/")
  fun index(): String{
    return "toto";
  }
}