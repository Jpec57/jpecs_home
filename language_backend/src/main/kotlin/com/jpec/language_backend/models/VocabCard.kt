package com.jpec.language_backend.models

import com.fasterxml.jackson.annotation.JsonIdentityReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.jpec.language_backend.enums.LanguageRegisterType
import javax.persistence.*

@Entity
class VocabCard(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long?,
    var englishWord: String = "",
    val toTranslateWord: String = "",
    val alternativeReading: String = "",
    val originalLanguageCode: String = "en-GB",
    @JsonManagedReference
    @OneToMany(
        mappedBy = "vocabCard", cascade = [CascadeType.ALL],
        targetEntity = WordTranslation::class, fetch=FetchType.EAGER
    )
    var translations: MutableList<WordTranslation> = mutableListOf(),
    @JsonManagedReference
    @OneToMany(
        mappedBy = "vocabCard", cascade = [CascadeType.ALL],
        targetEntity = SRSVocabCard::class
    )
    var srsVocabCards: MutableList<SRSVocabCard>?,
    @ElementCollection
    var synonyms: MutableList<String> = mutableListOf(),
    val languageRegisterType: LanguageRegisterType = LanguageRegisterType.CASUAL,
){
    constructor(): this(-1, "", "", "", "", mutableListOf(),
    mutableListOf(), mutableListOf(), LanguageRegisterType.CASUAL
    )
}