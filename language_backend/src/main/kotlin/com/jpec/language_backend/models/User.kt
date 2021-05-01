package com.jpec.language_backend.models
import javax.persistence.*

@Entity
class User(
    @Id @GeneratedValue var id: Int,
    var username: String,
    var password: String,
    var firstName: String?,
    var lastName: String?,
    @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL], targetEntity = SRSVocabCard::class)
    var srsVocabCard: List<SRSVocabCard>
)