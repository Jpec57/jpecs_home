package com.jpec.language_backend.models

import com.jpec.language_backend.enums.LanguageRegisterType
import javax.persistence.*

@Entity
class WordTranslation(
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long?,
    val languageCode: String,
    var value: String,
    @ManyToOne
    @JoinColumn(name="vocab_card_id", nullable=false)
    var vocabCard: VocabCard,
){
    constructor() : this(-1, "fr-FR", "jpec",
        VocabCard(4, "", mutableListOf(), mutableListOf(),
            LanguageRegisterType.CASUAL)
    )
}