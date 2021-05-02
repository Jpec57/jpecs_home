package com.jpec.language_backend.models
import javax.persistence.*

@Entity
class User(
    @Id @GeneratedValue var id: Long?,
//    @NotBlank(message = "Username is mandatory")
    var username: String,
//    @NotBlank(message = "Password is mandatory")
    var password: String,
    var firstName: String? = null,
    var lastName: String? = null,
    @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL], targetEntity = AuthToken::class)
    var tokens: MutableList<AuthToken>? = null,
    @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL], targetEntity = SRSVocabCard::class)
    var srsVocabCard: MutableList<SRSVocabCard>? = null
) {
}