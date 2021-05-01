package com.jpec.language_backend.controllers

import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.GetMapping

@RestController
@RequestMapping("/cards/vocab")
class VocabCardController {

    @GetMapping("/")
    fun index(): String {
        return "vocab"
    }

  @GetMapping("/{id}")
  fun getVocabCard(@PathVariable id: Int): String {
    return "blog $id"
  }

}