package com.jpec.language_backend.models

import javax.persistence.*

@Entity
class SRSVocabCard(
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long?,
    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    val user: User,
    @ManyToOne
    @JoinColumn(name="vocab_card_id", nullable=false)
    val vocabCard: VocabCard,
    val languageCode: String,
    @ElementCollection
    var exampleSentences: MutableList<String>,
    var notes: String,
    @ManyToMany(targetEntity = CardTag::class)
    @JoinTable(name = "vocab_card_tag")
    var tags: MutableList<CardTag>,
    @OneToMany(cascade = [CascadeType.ALL], targetEntity = VocabCard::class)
    var synonyms: MutableList<VocabCard>,
    //
    nextAvailable: Long,
    level: Int,
    errorCount: Int,
    successCount: Int
) :
    SRSCard(nextAvailable, level, errorCount, successCount) {
}