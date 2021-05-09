package com.jpec.language_backend.models

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.*

@Entity
class AuthToken (
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long? = null,
    @Column(name="token", length=512)
    var token: String = "",
    var expiredOn: Long = 0,
    @ManyToOne
    @JsonIgnore
    @JsonBackReference
    var user: User = User(-1)
)