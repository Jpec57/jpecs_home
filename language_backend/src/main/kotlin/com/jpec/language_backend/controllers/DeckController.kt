package com.jpec.language_backend.controllers

import org.springframework.web.bind.annotation.*
import java.awt.print.Book


@RestController
@RequestMapping("deck")
class DeckController {

  @GetMapping("/")
  fun index(): String {
    return "blog"
  }
/*
  @GetMapping("/{id}")
  @ResponseBody
  fun getDeck(@PathVariable id: Int): Deck? {
    return "blog"
    return findDeckById(id)
  }
*/
}