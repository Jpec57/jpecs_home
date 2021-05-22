package com.jpec.language_backend.models

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.fasterxml.jackson.annotation.JsonProperty
import com.jpec.language_backend.enums.LanguageRegisterType
import javax.persistence.*

@Entity
class WordTranslation(
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long? = -1,
    val languageCode: String = "",
    var value: String = "",

    @ManyToOne()
    @JsonBackReference
    var vocabCard: VocabCard?,
){
    constructor() : this(-1, "fr-FR", "jpec",
        null
    )
}