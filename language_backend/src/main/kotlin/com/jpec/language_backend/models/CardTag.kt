package com.jpec.language_backend.models

import javax.persistence.*

@Entity
class CardTag (
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Int,
    var value: String,
    var color: String,
    @ManyToMany(targetEntity = SRSVocabCard::class, mappedBy = "tags")
    var srsVocabCards: List<SRSVocabCard>
    )