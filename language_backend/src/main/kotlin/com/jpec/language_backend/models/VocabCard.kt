package com.jpec.language_backend.models
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity // This tells Hibernate to make a table out of this class
class VocabCard(
        @Id
        @GeneratedValue(strategy=GenerationType.AUTO)
        val id: Int,
        val value: String)