package com.jpec.language_backend.controllers

import com.jpec.language_backend.AppConstants
import com.jpec.language_backend.models.SRSVocabCard
import com.jpec.language_backend.models.VocabCard
import com.jpec.language_backend.repositories.VocabCardRepository
import com.jpec.language_backend.resolvers.AuthenticatedUserResolver
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.net.URI
import java.time.LocalDateTime
import java.util.*
import javax.validation.Valid


@RestController
@RequestMapping("/cards/vocab")
class VocabCardController(
    val authenticatedUserResolver: AuthenticatedUserResolver,
    val vocabCardRepository: VocabCardRepository) {

    @GetMapping("/")
    fun index(): Iterable<VocabCard> {
        return vocabCardRepository.findAll()
    }

    @PostMapping("/")
    fun createCard(@Valid @RequestBody card: VocabCard): ResponseEntity<VocabCard> {
    val currentUser = authenticatedUserResolver.getAuthenticatedUser()
        val fromLanguageCode = card.originalLanguageCode
        if (fromLanguageCode == AppConstants.DEFAULT_LANGUAGE_CODE){
            card.englishWord = card.toTranslateWord
        }


        for (translation in card.translations){

            val toLanguageCode = translation.languageCode
            val srsCard = SRSVocabCard(user = currentUser, fromLanguageCode = fromLanguageCode, toLanguageCode = toLanguageCode, vocabCard = card)
            val srsCardVerso = SRSVocabCard(user = currentUser, fromLanguageCode = toLanguageCode, toLanguageCode = fromLanguageCode, vocabCard = card)

            srsCard.nextAvailable = Date().time
            srsCardVerso.nextAvailable = Date().time
            currentUser.srsVocabCard.add(srsCard)
            currentUser.srsVocabCard.add(srsCardVerso)
            if (card.srsVocabCards != null){
                card.srsVocabCards!!.add(srsCard)
            } else {
                card.srsVocabCards = mutableListOf(srsCard)
            }
            card.srsVocabCards!!.add(srsCardVerso)
        }

        val vocabCard = vocabCardRepository.save(card)
        val location: URI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(vocabCard.id).toUri()
        return ResponseEntity.created(location).body(vocabCard)
    }

    @GetMapping("/{id}")
    fun getVocabCard(@PathVariable id: Long): Optional<VocabCard> {
        return vocabCardRepository.findById(id)
    }
}