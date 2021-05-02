package com.jpec.language_backend.models

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

@Entity
class AuthToken (
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long?,
    @Column(name="token", length=512)
    var token: String,
    var expiredOn: Long,
    @ManyToOne() @JsonIgnore
    var user: User
)