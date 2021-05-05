package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.User
import com.jpec.language_backend.models.VocabCard
import com.jpec.language_backend.repositories.VocabCardRepository
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.GetMapping
import javax.validation.Valid

@RestController
@RequestMapping("/cards/vocab")
class VocabCardController(val vocabCardRepository: VocabCardRepository) {

    @GetMapping("/")
    fun index(): String {
        return "vocab"
    }

  @GetMapping("/{id}")
  fun getVocabCard(@PathVariable id: Int): String {
    return "blogggg $id"
  }

    @PostMapping("/")
    fun createCard(@Valid @RequestBody card: VocabCard): VocabCard {
        print(card.translations)
        return vocabCardRepository.save(card)
    }

}