package com.jpec.language_backend.models
import com.jpec.language_backend.enums.LanguageRegisterType
import javax.persistence.*

@Entity
class VocabCard(
      @Id
      @GeneratedValue(strategy=GenerationType.AUTO)
    val id: Int, 
    val toTranslateWord: String,
      @OneToMany(mappedBy="vocabCard", cascade = [CascadeType.ALL], targetEntity = WordTranslation::class)
      var translations: List<WordTranslation>,
      @OneToMany(mappedBy="vocabCard", cascade = [CascadeType.ALL], targetEntity = SRSVocabCard::class)
      var srsVocabCards: List<SRSVocabCard>,
      val languageRegisterType: LanguageRegisterType,
    )