package com.jpec.language_backend.models
import javax.persistence.Entity
import javax.persistence.GeneratedValue;
import javax.persistence.Id

@Entity
class User(
        var login: String,
        var firstname: String,
        var lastname: String,
        var description: String? = null,
        @Id @GeneratedValue var id: Long? = null)