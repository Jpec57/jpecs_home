package com.jpec.language_backend.models
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.*

@Entity
class User(
    @Id @GeneratedValue var id: Long?,
    @Column(name = "username", nullable = false, unique = true)
    var username: String = "",
//    @NotBlank(message = "Password is mandatory")
    @JsonIgnore
    var password: String = "",
    var firstName: String? = null,
    var lastName: String? = null,
    @JsonIgnore
    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL], targetEntity = AuthToken::class, fetch = FetchType.LAZY)
    var tokens: MutableList<AuthToken> = mutableListOf(),
    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL], targetEntity = SRSVocabCard::class)
    var srsVocabCard: MutableList<SRSVocabCard> = mutableListOf()
)