package com.jpec.language_backend.models

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.*

@Entity
class SRSVocabCard(
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long? = -1,
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name="user_id", nullable=false)
    val user: User = User(-1),
    @ManyToOne()
    @JsonBackReference
    @JoinColumn(name="vocab_card_id", nullable=false)
    val vocabCard: VocabCard = VocabCard(),
    val fromLanguageCode: String = "",
    val toLanguageCode: String = "",
    @ElementCollection
    var exampleSentences: MutableList<String>? = null,
    var notes: String? = null,
    @ManyToMany(targetEntity = CardTag::class)
    @JoinTable(name = "vocab_card_tag")
    var tags: MutableList<CardTag> = mutableListOf(),
    @JsonManagedReference
    @OneToMany(cascade = [CascadeType.ALL], targetEntity = VocabCard::class)
    var synonymCards: MutableList<VocabCard> = mutableListOf(),
    nextAvailable: Long? = 0,
    level: Int = 0,
    errorCount: Int = 0,
    successCount: Int = 0
) :
    SRSCard(nextAvailable, level, errorCount, successCount)