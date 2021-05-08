package com.jpec.language_backend.models

import javax.persistence.*

@Entity
class SRSVocabCard(
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long?,
    @ManyToOne()
    @JoinColumn(name="user_id", nullable=false)
    val user: User = User(),
    @ManyToOne()
    @JoinColumn(name="vocab_card_id", nullable=false)
    val vocabCard: VocabCard = VocabCard(),
    val languageCode: String = "",
    @ElementCollection
    var exampleSentences: MutableList<String>?,
    var notes: String?,
    @ManyToMany(targetEntity = CardTag::class)
    @JoinTable(name = "vocab_card_tag")
    var tags: MutableList<CardTag> = mutableListOf(),
    @OneToMany(cascade = [CascadeType.ALL], targetEntity = VocabCard::class)
    var synonyms: MutableList<VocabCard> = mutableListOf(),
    //
    nextAvailable: Long?,
    level: Int = 0,
    errorCount: Int = 0,
    successCount: Int = 0
) :
    SRSCard(nextAvailable, level, errorCount, successCount) {

    constructor(): this(-1, User(), VocabCard(), "",
        mutableListOf(), "", mutableListOf(), mutableListOf(),
    0, 0, 0, 0
    )
}