package com.jpec.language_backend.models

import javax.persistence.*

@Entity
class CardTag (
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long?,
    var value: String = "",
    var color: String = "",
    @ManyToMany(targetEntity = SRSVocabCard::class, mappedBy = "tags")
    var srsVocabCards: MutableList<SRSVocabCard>?
    ){
    constructor(): this(-1, "", "", mutableListOf())
}